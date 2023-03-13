import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = response.json();

    return data;
  };

  useEffect(() => {
    getProducts().then((products) => {
      if (categoryId) {
        setProducts(products.filter((prod) => prod.category === categoryId));
      } else {
        setProducts(products);
      }
    });
  }, [categoryId]);

  return (
    <div className="bg-blue-gray-800 flex flex-wrap gap-8 justify-center p-5 w-full">
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
