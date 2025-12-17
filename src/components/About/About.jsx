import React from "react";
import "./About.css";
import { FaBullseye, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>

      {/* HERO SECTION */}
      <div className="about-hero"
        style={{ backgroundImage: 'url("/images/about-banner.png")' }}>
        
        <div className="about-hero-overlay">
          <h1>About Us</h1>

          <div className="breadcrumb">
            <Link to="/" className="home-link">🏠 Home</Link>
            <span className="arrow">→</span>
            <span className="current">About Us</span>
          </div>
        </div>
      </div>

      {/* ABOUT CONTENT */}
<div className="about-container">

  <div className="about-grid">

    {/* LEFT IMAGE */}
    <div className="about-image">
      <img src="/images/welcome.png" alt="About Aromaveda" />
    </div>

    {/* RIGHT CONTENT */}
    <div className="about-text">
      <p>
        Aromaveda Impex is a trusted Indian merchant exporter specializing in
        Premium Spices, Dehydrated Vegetables, Fruits Powders, and Spray-Dried
        Ingredients.
      </p>

      <p>
        With a deep understanding of India’s agricultural diversity, we bring
        together the finest produce from the best growing regions, offering
        international buyers a one-stop solution for high-quality,
        export-ready ingredients.
      </p>

      <p>
        As merchant exporters, we are not limited to any single factory or
        region — instead, we collaborate with certified processors, farmer
        clusters, and specialized manufacturers across India.
      </p>

      <p>
        Our sourcing model is built on strict quality control, lab-tested
        products, and a commitment to transparency, reliability, and timely
        delivery.
        Every shipment is backed by COA, MSDS/SDS, phytosanitary documents, quality certifications, and packaging that meets international safety standards.
      </p>

      <p>
        At Aromaveda Impex, we aim to deliver not just products — but trust, performance, and long-term partnerships. Whether you are a wholesaler, importer, food manufacturer, or brand,
         we ensure that you receive authentic Indian ingredients, curated and supplied with utmost professionalism.
      </p>

      <p className="about-highlight">
        Discover India’s natural richness, delivered with global excellence — experience Aromaveda Impex.
      </p>
    </div>

    </div>


        {/* VISION & MISSION SECTION */}
        <div className="vm-section">

          {/* VISION */}
          <div className="vm-card">
            <FaEye className="vm-icon" />
            <h2>Vision</h2>
            <div className="vm-line"></div>

            <p>
              Being a global entity in the field of International Trade, our
              vision is to provide a reliable market and fair prices for
              commodities to our customers.
            </p>

            <p>
              To deliver high quality products consistently through a
              customer-centric approach and to be the strongest link between
              suppliers and consumers globally.
            </p>
          </div>

          {/* MISSION */}
          <div className="vm-card">
            <FaBullseye className="vm-icon" />
            <h2>Mission</h2>
            <div className="vm-line"></div>

            <p>
              To make, distribute and sell the finest quality products and
              promote ethical business practices that respect the Earth and
              environment. 
            </p>

            <p>
              Regularly improve capabilities by investing in training and
              adapting to changing client needs.
            </p>
            </div>  
        </div>
      </div>
    </div>
  );
}
export default About;