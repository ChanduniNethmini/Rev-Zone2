import React from "react";
import { useCart } from "react-use-cart";
import swal from "sweetalert";

const ItemCard = ({ item }) => {
  const { addItem } = useCart();

    const handleAddToCart = () => {
    addItem(item);
    swal({
      title: "Added to Cart!",
      text: `${item.name} has been added successfully.`,
      icon: "success",
      button: "OK",
    });
  };


  return (
    <div className="card h-100">
      <img
        src={item.img}
        className="card-img-top"
        alt={item.name}
        style={{ height: "150px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text mb-2">Price: ${item.price}</p>
        <button className="btn btn-primary mt-auto" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
