import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import LandingMain from "./components/Landing/LandingMain";
import Item from "./components/Products/Item";
import Cart from "./components/Products/Cart";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <CartProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingMain />} />
        <Route path="/items" element={<Item />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
