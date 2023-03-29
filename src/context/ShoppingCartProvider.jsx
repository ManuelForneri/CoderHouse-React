import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("carrrito", JSON.stringify(cart));
  }, [cart]);

  const AddProductCart = () => {};

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;
