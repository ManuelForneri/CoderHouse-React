import { Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="bg-teal-300">
      <div className="flex justify-between items-center h-16 p-4 ">
        <div className="flex gap-6 ">
          <Link to="/">
            <button className="hover:bg-gray-200 p-2 text-white hover:text-black ">
              Home
            </button>
          </Link>
          <Link to="/Products">
            <button className="hover:bg-gray-200 p-2 text-white hover:text-black ">
              Products
            </button>
          </Link>

          <button className="hover:bg-gray-200 p-2 text-white hover:text-black ">
            Services
          </button>
          <button className="hover:bg-gray-200 p-2 text-white hover:text-black ">
            Contact
          </button>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
