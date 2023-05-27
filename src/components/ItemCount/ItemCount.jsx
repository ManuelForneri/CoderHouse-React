import { Button } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../../context/ShoppingCartProvider";

const ItemCount = ({ stock, id }) => {
  const [count, setCount] = useState(1);
  const { AddProductCart, cart } = useContext(CartContext);

  function onSuma() {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  function onResta() {
    if (count != 1) {
      setCount(count - 1);
    }
  }

  const onProducAdd = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

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
          AddProductCart(count, id);
          onProducAdd();
        }}
        className="color-principal shadow-none hover:shadow-white  "
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default ItemCount;
