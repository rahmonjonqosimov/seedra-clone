import React from "react";
import HomePage from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Detail from "./pages/detail";
import Wishlist from "./pages/wishlist";
import Products from "./pages/products";
import CartPage from "./pages/cart";
import Checkout from "./pages/checkout";
import Payment from "./pages/payment";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id/:category" element={<Detail />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
