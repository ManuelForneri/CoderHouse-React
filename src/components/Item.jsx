import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="w-96 rounded overflow-hidden shadow-lg  bg-brown-50 flex flex-col justify-between">
      <div>
        <img className="h-96 w-full p-2 " src={props.image} />
        <div className="px-6 py-4  ">
          <div className="font-bold text-xl mb-2">{props.title}</div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block color-principal rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
          {props.category}
        </span>
      </div>
      <Link
        to={`/item/${props.id}`}
        className="text-white color-principal rounded-none hover:bg-white hover:text-black text-center p-3"
      >
        Detalles
      </Link>
    </div>
  );
};

export default Item;
