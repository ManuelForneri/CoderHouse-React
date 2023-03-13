import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";
import { Checkbox } from "@material-tailwind/react";

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
      <div className="flex gap-6 text-white  ">
        <div className="flex items-center">
          <Checkbox />
          <Link to="/products/men's clothing">men's clothing</Link>
        </div>
        <div className="flex items-center">
          <Checkbox />
          <Link to="/products/jewelery">jewelery</Link>
        </div>
        <div className="flex items-center">
          <Checkbox />
          <Link to="/products/electronics">electronics</Link>
        </div>
        <div className="flex items-center">
          <Checkbox />
          <Link to="/products/women's clothing">women's clothing</Link>
        </div>
      </div>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
