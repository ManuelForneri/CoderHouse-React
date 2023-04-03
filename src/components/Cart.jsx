import { Button } from "@material-tailwind/react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../context/ShoppingCartProvider";
import FormCart from "./FormCart";

const Cart = () => {
  const { cart, clearCart, removeProduct } = useContext(CartContext);
  let total = 0;

  function onClearCart() {
    Swal.fire({
      title: "Esta seguro que quiere vaciar el carrito",
      text: ".",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, vaciar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Carrito!", "Vaciado correctamente.", "success");
        clearCart();
        total = 0;
      }
    });
  }
  const onRemoveProduct = (id) => {
    Swal.fire({
      title: "Esta seguro que quiere eliminar el producto!",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Producto!", " eliminado correctamente.", "success");
        removeProduct(id);
      }
    });
  };
  console.log(cart);

  return (
    <>
      {cart.length == 0 ? (
        <div className="min-h-screen flex items-center justify-center">
          <h1 className="text-white text-4xl">El Carrito esta vacio</h1>
        </div>
      ) : (
        ""
      )}

      <div className="flex justify-center flex-wrap  gap-5">
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
              <Button
                onClick={() => onRemoveProduct(p.id)}
                className="text-white color-principal rounded-none hover:bg-white hover:text-black text-center p-3"
              >
                Eliminar
              </Button>
            </div>
          );
        })}
      </div>
      {cart.length > 0 ? <FormCart /> : ""}
      <div className="text-white text-3xl text-center m-5">
        Total : ${total}
      </div>
      <Button
        onClick={() => {
          onClearCart();
        }}
        className="flex m-auto bg-red-400 shadow-none mb-5 hover:shadow-gray-200 "
      >
        Vaciar Carrito
      </Button>
    </>
  );
};

export default Cart;
