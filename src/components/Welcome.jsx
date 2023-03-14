import React from "react";

const Welcome = () => {
  return (
    <div className="h-screen flex justify-center items-center flex-col bg-teal-200">
      <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white items-center">
        Bienvenidos a Lola's shop
      </h1>
      <h2 className="text-slate-900 font-extrabold text-xl sm:text-2xl lg:text-3xl tracking-tight text-center dark:text-white items-center">
        Los mejores precios de la zona
      </h2>
    </div>
  );
};

export default Welcome;
