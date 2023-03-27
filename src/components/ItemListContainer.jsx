import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { Categoria } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "productos");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      if (Categoria) {
        setProducts(docs.filter((prod) => prod.Categoria === Categoria));
      } else {
        setProducts(docs);
      }
    });
  }, [Categoria]);
  console.log(products);

  return (
    <div className=" flex flex-wrap gap-8 justify-center p-5 w-full">
      <div className="flex gap-6 text-white  ">
        <Link
          to="/categoria/Joyeria"
          className="color-principal p-3 hover:bg-white hover:text-black"
        >
          Joyeria
        </Link>
        <Link
          to="/categoria/Relojeria"
          className="color-principal p-3 hover:bg-white hover:text-black"
        >
          Relojeria
        </Link>
        <Link
          to="/categoria/Varios"
          className="color-principal p-3 hover:bg-white hover:text-black"
        >
          Varios
        </Link>
      </div>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
