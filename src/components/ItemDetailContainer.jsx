import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = response.json();

    return data;
  };

  useEffect(() => {
    getProducts().then((products) => {
      if (id) {
        setProducts(products.filter((prod) => prod.id == id));
      }
    });
  }, [id]);
  console.log(products);
  return (
    <div className="bg-blue-gray-800 flex flex-wrap gap-8 justify-center p-5 w-full">
      {products.map((prod) => {
        return (
          <ItemDetail
            key={prod.id}
            id={prod.id}
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
};

export default ItemDetailContainer;
