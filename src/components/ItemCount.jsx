import { Button } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../context/ShoppingCartProvider";

const ItemCount = (props) => {
  const [count, setCount] = useState(1);
  const { AddProductCart, cart } = useContext(CartContext);

  function onSuma() {
    if (count < props.stock) {
      setCount(count + 1);
    }
  }
  function onResta() {
    if (count != 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className="flex flex-col  gap-5">
      <div>
        <Button
          onClick={onResta}
          className="color-principal shadow-none hover:shadow-white"
        >
          -
        </Button>

        <span className="bg-white p-2 m-3 rounded-md">{count}</span>
        <Button
          onClick={onSuma}
          className="color-principal shadow-none hover:shadow-white"
        >
          +
        </Button>
      </div>
      <Button
        onClick={() => {
          AddProductCart(id, count);
        }}
        className="color-principal shadow-none hover:shadow-white  "
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
