import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import "./App.css";
import Products from "./components/Products/Products";
import About from "./components/About/About";
import Whatsapp from "./components/Whatsapp/Whatsapp";
import Verify from "./components/Verify";
import Facebook from "./components/Facebook";
const Blogs = () => <div>Blogs Page</div>;

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* ✅ PRODUCT ROUTES */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:categorySlug" element={<Products />} />
        <Route path="/products/:categorySlug/:productSlug" element={<Products />} />
        <Route path="/products/:categorySlug/:productSlug/:itemSlug" element={<Products />} />

        <Route path="/services" element={<Services />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <Whatsapp />
      <Facebook />
    </BrowserRouter>
  );
}

export default App;
