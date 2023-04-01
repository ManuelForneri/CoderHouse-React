import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartProvider";

function CartWidget() {
  const { cartQuantity } = useContext(CartContext);
  return (
    <>
      <Link to="/carrito">
        <Button className="flex bg-transparent items-center text-white hover:text-black text-2xl border-opacity-0 hover:bg-gray-200 shadow-none hover:shadow-none rounded-none p-2 ">
          <AiOutlineShoppingCart />
          <div>{cartQuantity}</div>
        </Button>
      </Link>
    </>
  );
}

export default CartWidget;
