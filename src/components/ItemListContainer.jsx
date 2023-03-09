import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

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
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
