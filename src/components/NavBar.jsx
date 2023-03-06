import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav>
      <div className="flex justify-between items-center h-16 p-4 ">
        <div className="flex gap-6 ">
          <div>Home</div>
          <div>Products</div>
          <div>Services</div>
          <div>Contact</div>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
