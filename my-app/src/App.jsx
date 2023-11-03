import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import Product from "./pages/Product";
// import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
import Cart from "./pages/Cart";
import "./styles.css"
import Home2 from "./pages/Home2";
import CategoryItem from "./components/CategoryItem";
import Categories from "./components/Categories";
import Products from "./components/Products";
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial, Helvetica, sans-serif', sans-serif;
  }
`;
const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/registration" element={<Home />} /> */}
        <Route path="/" element={<Home2 />} />
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/category-List" element={<CategoryItem/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/product" element={<Product />} />
        <Route path="/product-list" element={<ProductList />} />
        {/* <Route path="/" element={<ProductList />} /> */}
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
