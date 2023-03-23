import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  //const { id } = useParams();
  const [products, setProducts] = useState([]);

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
    <div className="bg-blue-gray-800 flex flex-wrap gap-8 justify-center p-5 w-full h-screen">
      {products.map((prod) => {
        return (
          <ItemDetail
            key={prod.id}
            id={prod.id}
            title={prod.Titulo}
            price={prod.Precio}
            image={prod.Imagen}
            description={prod.Descripcion}
            category={prod.Categoria}
          />
        );
      })}
    </div>
  );
};

export default ItemDetailContainer;
