import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartProvider";

const Cart = () => {
  const { cart } = useContext(CartContext);
  let total = 0;

  console.log(cart);

  return (
    <>
      <div className="flex justify-center flex-wrap h-full gap-5">
        {cart.map((p) => {
          {
            total += p.Precio * p.quantity;
          }
          return (
            <div
              key={p.id}
              className="mt-5 mb-5 w-96 rounded overflow-hidden shadow-lg  bg-brown-50 flex flex-col justify-between"
            >
              <div>
                <img className="h-96 w-full p-2 " src={p.Imagen} />
                <div className="px-6 py-4  ">
                  <div className="font-bold text-lg mb-2">
                    Precio por unidad : ${p.Precio}
                  </div>
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block color-principal rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  cantidad: {p.quantity}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-white text-3xl text-center">Total : ${total}</div>
    </>
  );
};

export default Cart;
