import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function CartWidget() {
  return (
    <>
      <Link to="/carrito">
        <IconButton className="flex bg-transparent text-white hover:text-black text-3xl border-opacity-0 hover:bg-gray-200 shadow-none hover:shadow-none rounded-none ">
          <AiOutlineShoppingCart />
          <span></span>
        </IconButton>
      </Link>
    </>
  );
}

export default CartWidget;
