import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconButton } from "@material-tailwind/react";

function CartWidget() {
  return (
    <>
      <IconButton className="flex bg-transparent text-black text-3xl border-opacity-0 hover:bg-gray-400 shadow-none hover:shadow-none ">
        <AiOutlineShoppingCart />
        <span>3</span>
      </IconButton>
    </>
  );
}

export default CartWidget;
