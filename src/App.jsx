import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/products" element={<ItemListContainer />} />
        <Route
          exact
          path="/products/:categoryId"
          element={<ItemListContainer />}
        />
        <Route exact path="/" element={<Welcome />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
