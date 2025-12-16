import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./Contact.css";

import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaTag,
  FaHashtag,
  FaPaperPlane,
  FaCommentAlt,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const Contact = () => {

  // ✅ FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    hscode: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // ✅ REPLACE WITH YOUR SCRIPT URL
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyUZo85DJIiVJS0jnjarxUJk7hmsx1pWxtWapSsKiGVpzzXc2MQZioKc68Frj7iSSTE/exec";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("⏳ Sending...");

    try {
      // ✅ EMAIL SEND USING EMAILJS
      await emailjs.send(
        "service_yu4lgnr",
        "template_rj6414t",
        { ...formData, time: new Date().toLocaleString() },
        "V4XOc5_23GjM09fQN"
      );

      // ✅ SAVE TO GOOGLE SHEET
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",        // ✅ FIX CORS
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // ✅ SUCCESS MESSAGE
      setStatus("✅ Message sent & saved successfully!");

      // ✅ RESET FORM
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        hscode: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Try again.");
    }
  };

  // ✅ AUTO CLEAR MESSAGE
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="contact-container">

      {/* ===== BANNER ===== */}
      <div
        className="contact-banner"
        style={{ backgroundImage: 'url("/images/contact.png")' }}
      >
        <div className="banner-overlay">
          <h1>Contact Us</h1>
          <p className="breadcrumb">
            <Link to="/">🏠 Home</Link> → <span>Contact</span>
          </p>
        </div>
      </div>

      {/* ===== CONTACT INFO ===== */}
      <div className="contact-info">
        <div className="info-box">
          <FaPhoneAlt className="info-icon" />
          <div>
            <h4>Phone</h4>
            <p>+91 9820541616</p>
          </div>
        </div>

        <div className="info-box">
          <FaEnvelope className="info-icon" />
          <div>
            <h4>Email</h4>
            <p>aromaveda.impex@gmail.com</p>
          </div>
        </div>

        <div className="info-box">
          <FaMapMarkerAlt className="info-icon" />
          <div>
            <h4>Address</h4>
            <p>Thane West, Maharashtra,India</p>
            <p>India - 400601</p>
          </div>
        </div>

        <div className="info-box">
          <FaClock className="info-icon" />
          <div>
            <h4>Working Hours</h4>
            <p>24 Hours Available</p>
          </div>
        </div>
      </div>

      {/* ===== MAIN SECTION ===== */}
      <div className="contact-main">

        {/* MAP */}
        <div className="map-section">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps?q=ThaneWest,Maharashtra,India&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* FORM */}
        <div className="form-section">
          <h2>Contact Us</h2>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <FaUser />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <FaEnvelope />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <FaPhoneAlt />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <FaTag />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <FaHashtag />
              <input
                type="text"
                name="hscode"
                placeholder="HS Code (Optional)"
                value={formData.hscode}
                onChange={handleChange}
              />
            </div>

            <div className="input-group textarea-group">
              <FaCommentAlt />
              <textarea
                name="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit">
              <FaPaperPlane /> Send Message
            </button>

            {status && <p className="status-message">{status}</p>}

          </form>

          {/* SOCIAL ICONS */}
          <div className="social-icons">
            <a href="https://wa.me/919820541617" target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/mahesh-shetye-082507386" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/share/17ANC1vqD7/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
              <FaFacebook />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
