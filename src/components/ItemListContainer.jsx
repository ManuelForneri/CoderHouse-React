import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "productos");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());

      setProducts(docs);
    });
  }, []);
  console.log(products);

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
