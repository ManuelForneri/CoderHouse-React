import React, { useEffect, useState } from "react";
import Item from "./Item";

function ItemListContainer() {
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = response.json();

    return data;
  };
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);
  return (
    <div className="bg-blue-gray-800 flex flex-wrap gap-8 justify-center p-5 w-full">
      {products.map((prod) => {
        return (
          <Item
            key={prod.id}
            title={prod.title}
            price={prod.price}
            image={prod.image}
            description={prod.description}
            category={prod.category}
          />
        );
      })}
    </div>
  );
}

export default ItemListContainer;
