import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import AddProductPage from "./pages/AddProductPage";
import ManageProducts from "./pages/ManageProducts";
import UpdateProductPage from "./pages/UpdateProdcutPage";

function App() {
  // 38644 - Israr Rashid
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/manage-products" element={<ManageProducts />} />
        <Route path="/update-product/:id" element={<UpdateProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
