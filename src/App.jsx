import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/category" element={<ItemListContainer />} />
        <Route exact path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
