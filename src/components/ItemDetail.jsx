import { Button } from "@material-tailwind/react";
import React, { useState } from "react";

const ItemDetail = (props) => {
  const [count, setCount] = useState(0);

  function onSuma() {
    setCount(count + 1);
  }
  function onResta() {
    if (count != 0) {
      setCount(count - 1);
    }
  }
  return (
    <div className="w-4/5 p-10 rounded overflow-hidden shadow-lg bg-blue-gray-200 flex flex-col justify-between">
      <div className="flex">
        <img className=" w-1/4  " src={props.image} />
        <div className="flex flex-col px-6 py-4 gap-7 ">
          <div className="font-bold text-xl mb-2">{props.title}</div>
          <div class="font-bold text-xl mb-2">${props.price}</div>
          <p class="text-gray-700 text-base">{props.description}</p>

          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-black mr-2 mb-2">
            {props.category}
          </span>
          <div>
            <Button onClick={onSuma} className="bg-teal-400">
              +
            </Button>
            <span className="bg-white p-2 m-3 rounded-md">{count}</span>
            <Button onClick={onResta} className="bg-teal-400">
              -
            </Button>
          </div>
          <Button className="bg-teal-400">Agregar al carrito</Button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
