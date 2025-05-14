import React, { useState } from "react";
import { useCart } from "react-use-cart";
import swal from "sweetalert";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemCard = ({ item }) => {
  const { addItem } = useCart();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddToCart = () => {
    addItem(item);
    swal({
      title: "Added to Cart!",
      text: `${item.name} has been added successfully.`,
      icon: "success",
      button: "OK",
    });
    handleClose();
  };

  return (
    <>
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
          <button className="btn btn-primary mt-auto" onClick={handleShow}>
            View More
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={item.img}
            alt={item.name}
            className="img-fluid mb-3"
            style={{ borderRadius: "10px", maxHeight: "250px", objectFit: "cover" }}
          />
          <p><strong>Price:</strong> ${item.price}</p>
          <p><strong>Description:</strong> {item.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ItemCard;
