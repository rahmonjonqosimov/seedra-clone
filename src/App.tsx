import React from "react";
import HomePage from "./pages/home";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Detail from "./pages/detail";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
