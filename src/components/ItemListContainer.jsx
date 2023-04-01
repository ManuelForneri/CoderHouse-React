import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Loading from "./Loading";
import SelectCategory from "./SelectCategory";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { Categoria } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "productos");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      if (Categoria) {
        setProducts(docs.filter((prod) => prod.Categoria === Categoria));
        setLoading(false);
      } else {
        setProducts(docs);
        setLoading(false);
      }
    });
  }, [Categoria]);
  console.log(products);

  return (
    <div className=" flex flex-wrap gap-8 justify-center p-5 w-full">
      <SelectCategory />
      {loading ? <Loading /> : <ItemList products={products} />}
    </div>
  );
}

export default ItemListContainer;
