import { Button } from "@material-tailwind/react";
import React from "react";

const Item = (props) => {
  console.log(props);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-blue-gray-200 flex flex-col justify-between">
      <div>
        <img className="h-96 w-full " src={props.image} />
        <div className="px-6 py-4  ">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <div className="font-bold text-xl mb-2">${props.price}</div>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
          #{props.category}
        </span>
      </div>
      <Button className="bg-teal-500 rounded-none hover:bg-teal-200 hover:text-black">
        Detalles
      </Button>
    </div>
  );
};

export default Item;
