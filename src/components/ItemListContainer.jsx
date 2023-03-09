import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const { category } = useParams();
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = response.json();

    return data;
  };
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);
  const catalogoFiltrado = products.filter(
    (products) => products.category === category
  );

  return (
    <div className="bg-blue-gray-800 flex flex-wrap gap-8 justify-center p-5 w-full">
      {category ? (
        <ItemList products={catalogoFiltrado} />
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
}

export default ItemListContainer;
