import React, { useState, useEffect } from "react";
import { FaCheckCircle, FaUser, FaMousePointer } from "react-icons/fa";
import "./Home.css";
import { Link } from "react-router-dom";


const slides = [
  {
    image: "/images/products/turmeric.png",
    title: " Pure Turmeric Products",
    desc: "turmeric powder, whole turmeric, finger turmeric,Lakadong Turmeric.",
    link: "products/indian-spices",
    cta: "Shop Now",

  },
  {
    image: "/images/products/spices4.png",
    title: "Best Quality Red Chilli",
    desc: "Dry Red Chilli, Chilli Powder, Byadgi Chilli, Guntur Chilli.",
    link: "products/indian-spices",
    cta: "Discover More",

  },
  {
    image:" /images/products/lakadong.png",
    title: "Lakadong Turmeric",
    desc: "World's highest curcumin content turmeric.",
    link: "/products/lakadong-turmeric",
    cta: "Buy Now",

  },
  {
    image: "/images/spices/spices.png",
    title: "Premium Spices",
    desc: "Fresh, handpicked spices with rich aroma and purity.",
    link: "products/indian-spices",
    cta: "View Now",
  },
  {
    image: "/images/dehydrated/veg.png",
    title: "Dehydrated Vegetables",
    desc: "High-quality dehydrated vegetables & powders.",
    link: "/products/dehydrated-vegetables",
    cta: "Explore",
  },
  {
    image: "/images/dehydrated/fruit.jpg",
    title: "Dehydrated Fruits",
    desc: "Naturally dried, nutrient-rich fruit flakes.",
    link: "/products/dehydrated-fruits",
    cta: "Buy Now",
  },
  {
    image: "/images/slider.png",
    title: "Spray Dried Powders",
    desc: "Top-grade spray dried powders for food & industrial use.",
    link: "/products/spray-dried",
    cta: "Shop Now",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      {/* SLIDER */}
      <div className="slider-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h2 className="slide-title">{slide.title}</h2>
              <p className="slide-desc">{slide.desc}</p>
              <a href={slide.link} className="slide-btn">
                {slide.cta}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="section-divider"></div>

      {/* WELCOME SECTION */}
      <section className="welcome-section enhanced-welcome">
        <div className="welcome-image-container">
          <div className="accent-bar"></div>
          <img
            src="/images/welcome.png"
            alt="Assorted spices and grains"
            className="welcome-image"
          />
        </div>

        <div className="welcome-text-container">
          <p className="small-title">ABOUT</p>
          <h2 className="main-title">AROMAVEDA IMPEX</h2>
          <hr className="section-underline" />
          <p className="welcome-desc about-text">
  Welcome to <strong>Aromaveda Impex</strong> – your trusted partner for authentic
  Indian spices and dehydrated food products. We source and supply premium
  quality spices, dehydrated vegetables, and spray-dried fruit powders from
  multiple regions across India.
  <br /><br />
  By working with a strong network of reliable farmers and processors, we ensure
  consistent quality, wide variety, and competitive pricing under one roof.
  With strict quality checks and export-ready packaging, we make global sourcing
  simple, reliable, and rewarding.
</p>

          <Link to="/about" className="read-more-btn">
  Read More
</Link>

          
        </div>
      </section>

      {/* INFO SECTION */}
      <div className="info-section">
        <div className="info-item">
          <FaCheckCircle className="info-icon" />
          <div>
            <h3>Quality</h3>
            <p>We maintain global standards to deliver premium quality products.</p>
          </div>
        </div>

        <div className="info-item">
          <FaUser className="info-icon" />
          <div>
            <h3>Why Us</h3>
            <p>Reliable service, high standards, and guaranteed excellence.</p>
          </div>
        </div>

        <div className="info-item quick-enquiry">
          <FaMousePointer className="info-icon" />
          <h3>Quick Enquiry</h3>
        </div>
      </div>

      {/* OUR PRODUCTS */}
      <section className="products-section">
        <p className="small-title">WHAT WE OFFER</p>
        <h2 className="main-title">Our Products</h2>
        <hr className="section-underline" />

        <div className="products-grid">

          {/* SPICES */}
          <div className="product-card">
            <img
              src="/images/products/spicesmain.png"
              alt="Spices"
              className="product-icon"
            />
            <h3>Spices</h3>
            <p>Premium Indian spices with rich aroma and authentic flavors.</p>
            <a href="/products/indian-spices" className="learn-more">
              Learn More →
            </a>
          </div>

          {/* DEHYDRATED VEGETABLES */}
          <div className="product-card">
            <img
              src="/images/dehydrated/main.png"
              alt="Dehydrated Vegetables"
              className="product-icon"
            />
            <h3>Dehydrated Vegetables</h3>
            <p>High–quality dehydrated vegetables used in global markets.</p>
            <a href="/products/dehydrated-vegetables" className="learn-more">
              Learn More →
            </a>
          </div>

          {/* SPRAY DRIED */}
          <div className="product-card">
            <img
              src="/images/dehydrated/spray.png"
              alt="Spray Dried Powders"
              className="product-icon"
            />
            <h3>Spray Dried Powders</h3>
            <p>Food-grade spray dried powders for industrial and retail use.</p>
            <a href="/products/spray-dried-fruits-products" className="learn-more">
              Learn More →
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
