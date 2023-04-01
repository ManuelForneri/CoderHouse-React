import React from "react";
import { Link } from "react-router-dom";

const SelectCategory = () => {
  return (
    <div className="flex gap-6 text-white  ">
      <Link
        to="/categoria/Joyeria"
        className="color-principal p-3 hover:bg-white hover:text-black"
      >
        Joyeria
      </Link>
      <Link
        to="/categoria/Relojeria"
        className="color-principal p-3 hover:bg-white hover:text-black"
      >
        Relojeria
      </Link>
      <Link
        to="/categoria/Varios"
        className="color-principal p-3 hover:bg-white hover:text-black"
      >
        Varios
      </Link>
    </div>
  );
};

export default SelectCategory;
