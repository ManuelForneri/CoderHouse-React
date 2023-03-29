import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-brown-50 flex flex-col justify-center justify-items">
      <div className="flex justify-around">
        <div className="w-1/2">
          <img className=" w-full h-auto p-1 " src={props.image} />
        </div>
        <div className="w-1/2">
          <div className="flex flex-col px-6 py-4 gap-7 h-full justify-between">
            <div className="font-bold text-xl mb-2">{props.title}</div>
            <div class="font-bold text-xl mb-2">${props.price}</div>
            <p class="text-gray-700 text-base">{props.description}</p>

            <span className="flex color-principal rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 w-1/3 justify-center">
              {props.category}
            </span>
            <ItemCount
              stock={props.stock}
              id={props.id}
              products={props.products}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
