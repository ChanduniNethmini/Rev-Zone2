import React, { useState, useEffect } from "react";

export default function OrderForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address: {
      country: "Sri Lanka",
      street1: "",
      street2: "",
      town: "",
      postcode: "",
    },
    phone: "",
    email: "",
    orderNote: "",
    paymentMethod: "Direct Bank Transfer",
  });

  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  // Load cart from localStorage
  useEffect(() => {
     const cart = JSON.parse(localStorage.getItem("react-use-cart-my_cart"));
    if (cart && cart.items) {
      setCartItems(cart.items);
      setCartTotal(cart.cartTotal || 0);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setForm((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");

    const payload = {
      ...form,
      cart: {
        items: cartItems.map((item) => ({
          name: item.name,
          qty: item.quantity,
          price: item.price,
        })),
        total: cartTotal,
      },
    };

    try {
      const response = await fetch("http://localhost:3000/api/orders/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to place order");

      setMessage("✅ Order placed successfully!");
      setForm({
        firstName: "",
        lastName: "",
        companyName: "",
        address: {
          country: "Sri Lanka",
          street1: "",
          street2: "",
          town: "",
          postcode: "",
        },
        phone: "",
        email: "",
        orderNote: "",
        paymentMethod: "Direct Bank Transfer",
      });

      // Clear cart
      localStorage.removeItem("react-use-cart-my_cart");
      setCartItems([]);
      setCartTotal(0);
    } catch (error) {
      setMessage("❌ " + error.message);
    }

    setSubmitting(false);
  };

  return (
    <div className="container " style={{marginTop: "100px"}}>
      <form onSubmit={handleSubmit}>
        <div className="row gy-4">
          {/* Billing Details */}
          <div className="col-md-8">
            <h4><strong>BILLING DETAILS</strong></h4>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label>First name *</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label>Last name *</label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label>Company name (optional)</label>
              <input
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label>Country / Region *</label>
              <select
                name="address.country"
                value={form.address.country}
                onChange={handleChange}
                className="form-control"
                required
              >
                <option>Sri Lanka</option>
              </select>
            </div>

            <div className="mb-3">
              <label>Street address *</label>
              <input
                name="address.street1"
                value={form.address.street1}
                onChange={handleChange}
                type="text"
                className="form-control mb-2"
                placeholder="House number and street name"
                required
              />
              <input
                name="address.street2"
                value={form.address.street2}
                onChange={handleChange}
                type="text"
                className="form-control"
                placeholder="Apartment, suite, etc."
              />
            </div>

            <div className="mb-3">
              <label>Town / City *</label>
              <input
                name="address.town"
                value={form.address.town}
                onChange={handleChange}
                type="text"
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label>Postcode / ZIP *</label>
              <input
                name="address.postcode"
                value={form.address.postcode}
                onChange={handleChange}
                type="text"
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label>Phone *</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label>Email address *</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                className="form-control"
                required
              />
            </div>

            <div className="mb-3">
              <label>Order notes (optional)</label>
              <textarea
                name="orderNote"
                value={form.orderNote}
                onChange={handleChange}
                className="form-control"
                rows="3"
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-md-4">
            <h4><strong>YOUR ORDER</strong></h4>
            {cartItems.length > 0 ? (
              <>
                {cartItems.map((item, i) => (
                  <div key={i}>
                    {item.name} × {item.quantity} — Rs.{item.price * item.quantity}
                  </div>
                ))}
                <hr />
                <div><strong>Total: Rs.{cartTotal}</strong></div>
              </>
            ) : (
              <p>No items in cart.</p>
            )}

            {/* Payment Method */}
            <div className="form-check my-2">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                value="Direct Bank Transfer"
                checked={form.paymentMethod === "Direct Bank Transfer"}
                onChange={handleChange}
              />
              <label className="form-check-label">Direct Bank Transfer</label>
              <br/>
              <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account. Account No: 007010006737, Sampath Bank Gregory’s Road Branch. Account Name: InnovONE Mini Spares. Please WhatsApp transfer slip to +94775058824 or email to innovoneminispares@gmail.com</p>
            </div>
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="radio"
                name="paymentMethod"
                value="Cash Paid at Shop"
                checked={form.paymentMethod === "Cash Paid at Shop"}
                onChange={handleChange}
              />
              <label className="form-check-label">Cash Paid at Shop</label>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={submitting || cartItems.length === 0}
            >
              {submitting ? "Placing Order..." : "PLACE ORDER"}
            </button>

            {message && (
              <div className="mt-3 alert alert-info text-center">{message}</div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
