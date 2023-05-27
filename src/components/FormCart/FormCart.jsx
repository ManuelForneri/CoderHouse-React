import React, { useContext, useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { CartContext } from "../../context/ShoppingCartProvider";

const FormCart = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { clearCart, cart } = useContext(CartContext);

  const db = getFirestore();

  const comprarProd = (e) => {
    e.preventDefault();
    addDoc(orderCollection, order).then(({ id }) => {
      Swal.fire({
        icon: "success",
        title: "Muchas gracias por tu compra!",
        text: `Tu numero de compra es "${id}"`,
      }).then(function () {
        clearCart();
      });
    });
  };
  const order = {
    name,
    lastName,
    email,
    phone,
    cart,
  };
  const orderCollection = collection(db, "orden");
  return (
    <div className="m-5">
      <div className="text-white text-2xl text-center">
        Formulario de compra
      </div>
      <form
        onSubmit={comprarProd}
        method="get"
        className="formulario-cart  h-auto p-5 "
      >
        <label for="nombre" class="form-label">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          class="form-input text-dark"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <label for="apellido" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          id="apellido"
          class="form-input text-dark"
          required
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />

        <label for="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          class="form-input text-dark"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label for="telefono" className="form-label">
          Telefono
        </label>
        <input
          type="text"
          id="telefono"
          class="form-input text-dark"
          required
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />

        <input type="submit" className="btn-submit" value="Confirmar compra" />
      </form>
    </div>
  );
};

export default FormCart;
