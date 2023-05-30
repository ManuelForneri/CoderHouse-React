import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div>
      <div className="main">
        <section className="container-titles animated fadeInDown">
          <div className="titleCursive">El Abuelo Tessore</div>
          <h2 className="subtitle">Joyeria y relojeria</h2>
          <div className="description">
            Desde el año 1993 en el rubro. Venta y composturas de joyas y
            relojes, grabados de placas, orfebrería, artículos de marroquineria.
          </div>
          <a href="#vermas" aria-label="Ver mas sobre nosotros">
            <button className="button-welcome">Ver mas</button>
          </a>
        </section>
      </div>
      <div className="vermas">
        <div id="vermas" className="container-about-more">
          <div className="middle">
            <img
              src="https://i.postimg.cc/4NdMWWb2/interior-negocio.webp"
              alt=""
              className="imagenes"
            />
          </div>
          <div className="middle">
            <h2>Sobre nosotros</h2>
            <p>
              El 6 de diciembre de 1993, comenzó nuestro proyecto en la calle
              Maipú 750 en un pequeño local alquilado donde pasamos nuestros dos
              primeros años. Luego nuestras intenciones de seguir creciendo nos
              llevaron a alquilar un local en el centro de la ciudad en la calle
              Rivadavia 661...
              <a href="./pages/about.html"> Ver mas</a>
            </p>
          </div>
        </div>
        <div className="news">
          <h2>Productos Nuevos</h2>
          <div className="products-news">
            <section className="container-grid-products">
              <div className="product-card">
                <img
                  src="assets/Anillo-calado.webp"
                  alt=""
                  className="imagenes"
                />
                <p className="title-product">Anillo Calado</p>
                <p>$7.900</p>
                <input type="button" className="btn-compra" value="Comprar" />
              </div>
              <div className="product-card">
                <img
                  src="assets/Cinto-personalizado.webp"
                  alt=""
                  className="imagenes"
                />
                <p className="title-product">Cinto personalizado</p>
                <p>$8.000</p>
                <input type="button" className="btn-compra" value="Comprar" />
              </div>
              <div className="product-card">
                <img
                  src="assets/Encendedor-zippo.webp"
                  alt=""
                  className="imagenes"
                />
                <p className="title-product">Encendedor zippo</p>
                <p>$10.000</p>
                <input type="button" className="btn-compra" value="Comprar" />
              </div>
              <div className="product-card">
                <img
                  src="assets/CitizenFondoNegro.webp"
                  alt=""
                  className="imagenes"
                />
                <p className="title-product">Reloj Citizen</p>
                <p>$41.000</p>
                <input type="button" className="btn-compra" value="Comprar" />
              </div>
            </section>
          </div>
          <div className="container-button-product">
            <a href="pages/product.html" aria-label="Ver mas productos">
              <button className="button-product">Ver mas</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
