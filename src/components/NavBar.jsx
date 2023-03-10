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
          <Link to="/products">
            <button className="hover:bg-gray-200 p-2 text-white hover:text-black ">
              Products
            </button>
          </Link>

          <div class="relative">
            <select
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option>Categorias</option>

              <option>
                <Link to={`category/${"men's clothing"}`}>men's clothing</Link>
              </option>

              <option>
                <Link to={`products/${"jewelery"}`}>jewelery</Link>
              </option>

              <option>
                <Link>electronics</Link>
              </option>

              <option>
                <Link>women's clothing</Link>
              </option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
