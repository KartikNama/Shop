import "./App.css";
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import Admin from "./components/Pages/Admin";
import SingleProduct from "./components/Pages/Single Product/SingleProduct";
import Footer from "./components/Footer";
function App() {
  let [prods, setProds]  = useState([])
    
  useEffect(() => {
    const fetchProducts = async () =>{
      const response = await fetch("https://backendshop-o7ve.onrender.com/api/getproducts");
      const products = await response.json()
      setProds(products);
    }
    fetchProducts()

  })

  const addProductHandler = (newProduct) =>{
    setProds((prevProds)=>[...prevProds, newProduct]);
  }

  return (
    <div className="container-fluid m-0 p-0">
      <Router>
        <Header />
        <div className="app-body">
          <Routes>
            <Route path="/Shop" element={<Products products={prods} />}/>
            <Route path="/products" element={<Products products={prods} />} />
            <Route path="/admin" element={<Admin products={prods} onAddProduct={addProductHandler} />} />
            <Route path="/products/:productId" element={<SingleProduct products={prods}/>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
