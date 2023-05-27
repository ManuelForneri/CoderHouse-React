import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Footer from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import ShoppingCartProvider from "./context/ShoppingCartProvider";
import Contact from "./components/Contact/Contact";
import Loading from "./components/Loading/Loading";
import { useEffect, useState } from "react";
import Login from "./components/Login/Login";

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
            <Route exact path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </ShoppingCartProvider>
  );
}

export default App;
