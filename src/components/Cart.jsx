import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartProvider";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);
  return <div>soy el carrito</div>;
};

export default Cart;
