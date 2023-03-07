import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ItemListContainer() {
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = response.json();

    return data;
  };
  const [products, setProducts] = useState([]);
  console.log("Products" + products);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);
  return (
    <div className="bg-blue-gray-800">
      <ProductCard />
    </div>
  );
}

export default ItemListContainer;
