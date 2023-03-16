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
        <Link
          to="/category/men's clothing"
          className="bg-teal-300 p-3 hover:bg-teal-600"
        >
          Men's clothing
        </Link>
        <Link
          to="/category/jewelery"
          className="bg-teal-300 p-3 hover:bg-teal-600"
        >
          Jewelery
        </Link>
        <Link
          to="/category/electronics"
          className="bg-teal-300 p-3 hover:bg-teal-600"
        >
          Electronics
        </Link>
        <Link
          to="/category/women's clothing"
          className="bg-teal-300 p-3 hover:bg-teal-600"
        >
          Women's clothing
        </Link>
      </div>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
