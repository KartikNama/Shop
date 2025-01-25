import "./App.css";
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import Products from "./components/Pages/Products";
import Admin from "./components/Pages/Admin";
import SingleProduct from "./components/Pages/Single Product/SingleProduct";
import Footer from "./components/Footer";
function App() {
  let [prods, setProds]  = useState([
    {
      id: 1,
      title: "A Book",
      content: "A Cute Book 1",
      price: "15.99$",
      imageUrl: "investment-calculator-logo.png",
    },
    {
      id: 2,
      title: "A Book 2",
      content: "A Cute Book 2",
      price: "16.99$",
      imageUrl: "investment-calculator-logo.png",
    },
    {
      id: 3,
      title: "A Book 3",
      content: "A Cute Book 3",
      price: "17.99$",
      imageUrl: "investment-calculator-logo.png",
    },
    {
      id: 4,
      title: "A Book 4",
      content: "A Cute Book 4",
      price: "18.99$",
      imageUrl: "investment-calculator-logo.png",
    },
    {
      id: 5,
      title: "A Book 5",
      content: "A Cute Book 5",
      price: "19.99$",
      imageUrl: "investment-calculator-logo.png",
    },
    {
      id: 6,
      title: "A Book 6",
      content: "A Cute Book 6",
      price: "20.99$",
      imageUrl: "investment-calculator-logo.png",
    },
    {
      id: 7,
      title: "A Book 7",
      content: "A Cute Book 7",
      price: "21.99$",
      imageUrl: "investment-calculator-logo.png",
    },
  ]);

  const addProductHandler = (newProduct) =>{
    setProds((prevProds)=>[...prevProds, newProduct]);
  }

  return (
    <div className="container-fluid m-0 p-0">
      <Router>
        <Header />
        <div className="app-body">
          <Routes>
            <Route path="/" element={<Home />} />
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
