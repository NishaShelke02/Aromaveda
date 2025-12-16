import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footer-top">

        {/* ABOUT */}
        <div className="footer-col">
          <h3 className="footer-title">Aromaveda Impex</h3>
          <p className="footer-about">
            Aromaveda Impex is a leading exporter and supplier of premium quality spices, dehydrated vegetables, fruits, and spray dried powders. Committed to excellence, we ensure the finest products for our global clientele.
          </p>
        </div>
         {/* QUICK LINKS */}
        <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/products">Our Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/verify">Verify Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>


        {/* PRODUCTS */}
        <div className="footer-col">
          <h3 className="footer-title">Products</h3>
          <ul className="footer-links">
            <li><a href="/products/indian-spices">Spices</a></li>
            <li><a href="/products/dehydrated-vegetables">Dehydrated Vegetables</a></li>
            
            <li><a href="/products/spray-dried-fruits-products">Spray Dried Powders</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-contact">
            <li><FaPhoneAlt /> +91 9820541616</li>
            <li><FaEnvelope /> aromaveda.impex@gmail.com</li>
            <li><FaMapMarkerAlt />Thane West, Maharashtra, India</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM AREA */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Aromaveda Impex. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;
