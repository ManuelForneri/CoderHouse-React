import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartProvider";

const Cart = () => {
  const { cart, setCart, comision } = useContext(CartContext);
  console.log(cart);
  return <div></div>;
};

export default Cart;
