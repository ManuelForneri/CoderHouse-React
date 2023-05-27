import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p>Designed & Developed by Manuel Forneri - 2022</p>
      <div classNameName="redes-container">
        <div>
          <a
            target="_blank"
            href="https://www.facebook.com/elabuelo.tessore.14"
            aria-label="Facebook"
          >
            <i className="fa-brands fa-facebook-f hover-facebook redes"></i>
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.instagram.com/elabuelotessore/"
            aria-label="instagram"
          >
            <i className="fa-brands fa-instagram hover-instagram redes"></i>
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://wa.me/5492325414405"
            aria-label="Whatsapp"
          >
            <i className="fa-brands fa-whatsapp hover-whatsapp redes"></i>
          </a>
        </div>
      </div>
      <p>Siguenos en nuestras redes</p>
    </div>
  );
};

export default Footer;
