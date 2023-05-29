import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <div className="footer">
      <p>Designed & Developed by Manuel Forneri - 2022</p>
      <div className="redes-container">
        <div>
          <a
            target="_blank"
            href="https://www.facebook.com/elabuelo.tessore.14"
            aria-label="Facebook"
          >
            <FacebookIcon
              FacebookIcon
              className=" hover-facebook redes"
            ></FacebookIcon>
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://www.instagram.com/elabuelotessore/"
            aria-label="instagram"
          >
            <InstagramIcon className="hover-instagram redes"></InstagramIcon>
          </a>
        </div>
        <div>
          <a
            target="_blank"
            href="https://wa.me/5492325414405"
            aria-label="Whatsapp"
          >
            <WhatsAppIcon className="fa-brands fa-whatsapp hover-whatsapp redes"></WhatsAppIcon>
          </a>
        </div>
      </div>
      <p>Siguenos en nuestras redes</p>
    </div>
  );
};

export default Footer;
