import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-8 justify-center p-5 w-full">
      {products.map((prod) => {
        return (
          <Item
            key={prod.id}
            id={prod.id}
            title={prod.title}
            image={prod.image}
            category={prod.category}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
