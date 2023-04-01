import { collection, getDocs, getFirestore } from "firebase/firestore";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null);

const ShoppingCartProvider = ({ children }) => {
  //se traen los productos del carrito, en caso de que no tenga ninguno se asigna []
  const cartLocalStorage = JSON.parse(localStorage.getItem("carrito") || "[]");

  const [cart, setCart] = useState(cartLocalStorage);
  const [products, setProducts] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "productos");
    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      setProducts(docs);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  function removeQuantity() {
    if (cartQuantity > 0) {
      setCartQuantity(cartQuantity - 1);
    }
  }

  const findProduct = (id, array) => array.find((product) => product.id === id);

  const AddProductCart = (quantity, id) => {
    let total = cartQuantity;
    let newCart;
    let item = findProduct(id, products);
    let product = cart.find((product) => product.id === item.id);
    if (product) {
      product.quantity += quantity;
      newCart = [...cart];
    } else {
      newCart = [...cart, { ...item, quantity: quantity }];
    }
    total += quantity;
    setCart(newCart);
    setCartQuantity(total);
  };

  const removeProduct = (id) => {
    let itemRemove = findProduct(id, cart);
    let quantity = itemRemove.quantity--;
    let posInCart = cart.indexOf(itemRemove);
    let newCart = cart.filter((product) => product.id !== id);
    removeQuantity();
    if (cart[posInCart].quantity === 0) {
      setCart(newCart);
    } else {
      setCart([...newCart, { ...itemRemove, quantity: quantity - 1 }]);
    }

    if (cart.length == 0) {
      clearCart();
    }
  };
  const clearCart = () => {
    setCart([]);
    setCartQuantity(0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        AddProductCart,
        findProduct,
        setCart,
        cartQuantity,
        clearCart,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default ShoppingCartProvider;
