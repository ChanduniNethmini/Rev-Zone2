import ItemCard from "./ItemCard";
import spare from "../../assets/spare.jpg";

const items = [
  {
    id: 1,
    name: "T-shirt",
    price: 20,
    img: spare,
    description: "A comfortable cotton t-shirt perfect for everyday wear.",
  },
  {
    id: 2,
    name: "Cap",
    price: 15,
    img: spare,
    description: "A comfortable cotton t-shirt perfect for everyday wear.",
  },
  {
    id: 3,
    name: "Shoes",
    price: 50,
    img: "https://via.placeholder.com/150?text=Shoes",
    description: "A comfortable cotton t-shirt perfect for everyday wear.",
  },
  {
    id: 4,
    name: "Watch",
    price: 80,
    img: "https://via.placeholder.com/150?text=Watch",
    description: "A comfortable cotton t-shirt perfect for everyday wear.",
  },
  {
    id: 5,
    name: "Bag",
    price: 60,
    img: "https://via.placeholder.com/150?text=Bag",
    description: "A comfortable cotton t-shirt perfect for everyday wear.",
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 30,
    img: "https://via.placeholder.com/150?text=Sunglasses",
    description: "A comfortable cotton t-shirt perfect for everyday wear.",
  },
  {
    id: 7,
    name: "Jacket",
    price: 100,
    img: "https://via.placeholder.com/150?text=Jacket",
    description: "A comfortable cotton t-shirt perfect for everyday wear.",
  },
  {
    id: 8,
    name: "Wallet",
    price: 25,
    img: "https://via.placeholder.com/150?text=Wallet",
    description: "A comfortable cotton t-shirt perfect for everyday wear.",
  },
  {
    id: 9,
    name: "Belt",
    price: 18,
    img: "https://via.placeholder.com/150?text=Belt",
    description: "A comfortable cotton t-shirt perfect for everyday wear.",
  },
  {
    id: 10,
    name: "Scarf",
    price: 22,
    img: "https://via.placeholder.com/150?text=Scarf",
    description: "A comfortable cotton t-shirt perfect for everyday wear.",
  },
];

const Item = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Available Items</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
        {items.map((item) => (
          <div className="col" key={item.id}>
            <ItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
