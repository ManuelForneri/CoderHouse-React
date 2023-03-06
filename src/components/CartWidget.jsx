import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconButton } from "@material-tailwind/react";

function CartWidget() {
  return (
    <>
      <IconButton>
        <AiOutlineShoppingCart />
      </IconButton>
    </>
  );
}

export default CartWidget;
