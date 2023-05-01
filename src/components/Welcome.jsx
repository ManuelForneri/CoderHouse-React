import React from "react";

const Welcome = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col animated fadeInDown">
      <h1 className="titleCursive text-white text-slate-900 font-extrabold  tracking-tight text-center dark:text-white items-center">
        El Abuelo Tessore
      </h1>
      <h2 className="subtitle text-white  text-center dark:text-white items-center">
        Joyeria y Relojeria
      </h2>
      <div className="description">
        Desde el año 1993 en el rubro. Venta y composturas de joyas y relojes,
        grabados de placas, orfebrería, artículos de marroquineria.
      </div>
    </div>
  );
};

export default Welcome;
