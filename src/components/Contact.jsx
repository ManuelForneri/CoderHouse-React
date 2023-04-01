import React from "react";

const Contact = () => {
  return (
    <div className="m-5">
      <form action="" method="get" className="formulario p-5 ">
        <label for="nombre" class="form-label">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          class="form-input text-dark"
          required=""
        />

        <label for="apellido" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          id="apellido"
          class="form-input text-dark"
          required=""
        />

        <label for="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          class="form-input text-dark"
          required=""
        />

        <label for="asunto" className="form-label">
          Asunto
        </label>
        <input
          type="text"
          id="asunto"
          class="form-input text-dark"
          required=""
        />

        <label for="mensaje" className="form-label">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          class="form-textarea text-dark"
          required=""
        ></textarea>

        <input type="submit" className="btn-submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Contact;
