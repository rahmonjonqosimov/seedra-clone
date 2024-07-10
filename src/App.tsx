import React from "react";
import HomePage from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/detail";
import Wishlist from "./pages/wishlist";
import Products from "./pages/products";
import CartPage from "./pages/cart";
import Checkout from "./pages/checkout";
import Payment from "./pages/payment";
import About from "./pages/about";
import Contact from "./pages/contact";
import BlogPage from "./pages/blog";
import Layout from "./pages/layout";



const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
             <Route path="/" element={<HomePage />} />
             <Route path="/product/:id/:category" element={<Detail />} />
             <Route path="/wishlist" element={<Wishlist />} />
             <Route path="/products" element={<Products />} />
             <Route path="/cart" element={<CartPage />} />
             <Route path="/checkout" element={<Checkout />} />
             <Route path="/payment" element={<Payment />} />
             <Route path="/about" element={<About />} />
             <Route path="/contact" element={<Contact />} />
             <Route path="/blog" element={<BlogPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
