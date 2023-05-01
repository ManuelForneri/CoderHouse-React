import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="m-5">
      <div className="text-white text-2xl text-center">Inicio de sesion</div>
      <form onSubmit="" method="get" className="formulario-cart  h-auto p-5 ">
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
        <label for="email" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          class="form-input text-dark"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <input type="submit" className="btn-submit" value="Confirmar compra" />
      </form>
    </div>
  );
};

export default Login;
