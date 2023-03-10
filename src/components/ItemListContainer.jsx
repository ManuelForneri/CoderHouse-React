import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = response.json();

    return data;
  };

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  const catFilter = products.filter((prod) => prod.category === category);
  /* Buenas, tuve un problema con el filtrado de los productos, 
  trate de hacerlo como el profe, pero no pude, me sale que data no estaba definida */

  return (
    <div className="bg-blue-gray-800 flex flex-wrap gap-8 justify-center p-5 w-full">
      {category ? (
        <ItemList products={catFilter} />
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
}

export default ItemListContainer;
