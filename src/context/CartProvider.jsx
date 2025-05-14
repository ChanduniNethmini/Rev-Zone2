import React from "react";
import { CartProvider as UseCartProvider } from "react-use-cart";

const CartProvider = ({ children }) => {
  return (
    <UseCartProvider id="my_cart"> {/* Just provide a unique ID */}
      {children}
    </UseCartProvider>
  );
};

export default CartProvider;
