import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { VscAccount } from "react-icons/vsc";
import { Button } from "@material-tailwind/react";

function NavBar() {
  return (
    <nav className="color-principal animated fadeIn">
      <div className="flex justify-between items-center h-16 p-4 ">
        <div className="flex gap-6 ">
          <Link to="/">
            <button className="hover:bg-gray-200 p-2 text-white hover:text-black ">
              Inicio
            </button>
          </Link>
          <Link to="/products">
            <button className="hover:bg-gray-200 p-2 text-white hover:text-black ">
              Productos
            </button>
          </Link>
          <Link to="/contacto">
            <button className="hover:bg-gray-200 p-2 text-white hover:text-black ">
              Contacto
            </button>
          </Link>
        </div>
        <div className="flex">
          <CartWidget />
          <Link to="/login">
            <Button className="flex bg-transparent items-center text-white hover:text-black text-2xl border-opacity-0 hover:bg-gray-200 shadow-none hover:shadow-none rounded-none p-2 ">
              <VscAccount />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
