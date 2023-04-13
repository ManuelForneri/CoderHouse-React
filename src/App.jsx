import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import ShoppingCartProvider from "./context/ShoppingCartProvider";
import Contact from "./components/Contact";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <ShoppingCartProvider>
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/products" element={<ItemListContainer />} />
            <Route
              exact
              path="/categoria/:Categoria"
              element={<ItemListContainer />}
            />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/carrito" element={<Cart />} />
            <Route exact path="/contacto" element={<Contact />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </ShoppingCartProvider>
  );
}

export default App;
