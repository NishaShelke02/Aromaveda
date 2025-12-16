// src/components/Certification/Certification.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Verify.css";

const Certification = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="certification-container">
      {/* Hero Section */}
      <section className="certification-hero">
        <div className="container">
          <h1>Our Certifications</h1>
          <p>
            At <strong>Aromaveda</strong>, we operate with full regulatory
            compliance and recognized certifications that ensure quality,
            authenticity, and trust in global markets. Our certifications
            reflect our commitment to ethical sourcing and export excellence.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="certifications-list">
        <div className="container">
          <h2>Recognized & Compliant</h2>

          <div className="cert-grid">
            {/* APEDA */}
            <div className="cert-item">
              <h3>🔬 APEDA</h3>
              <p>
                Registered with the Agricultural and Processed Food Products
                Export Development Authority (APEDA) for authorized export of
                agri-products.
              </p>
              <img src="/VERIFY/APEDA.png" alt="APEDA Certification" className="cert-logo" />
            </div>

            {/* Aadhaar */}
            <div className="cert-item">
              <h3>🆔 Aadhaar Verified</h3>
              <p>
                Business identity verified under India’s Aadhaar system,
                ensuring transparency and credibility.
              </p>
              <img src="/VERIFY/AADHAAR.png" alt="Aadhaar Verified" className="cert-logo" />
            </div>

            {/* DGFT */}
            <div className="cert-item">
              <h3>📑 DGFT (IEC)</h3>
              <p>
                Licensed by the Directorate General of Foreign Trade with a
                valid Import Export Code for international trade operations.
              </p>
              <img src="/VERIFY/DGFT.png" alt="DGFT IEC" className="cert-logo" />
            </div>

            {/* FSSAI */}
            <div className="cert-item">
              <h3>🥗 FSSAI</h3>
              <p>
                Licensed under the Food Safety and Standards Authority of India,
                ensuring food safety, hygiene, and quality compliance.
              </p>
              <img src="/VERIFY/FSSAI.png" alt="FSSAI" className="cert-logo" />
            </div>

            {/* GST */}
            <div className="cert-item">
              <h3>💰 GST Registered</h3>
              <p>
                Registered under Goods and Services Tax (GST), ensuring
                transparent and lawful business operations.
              </p>
              <img src="/VERIFY/GST.png" alt="GST Registration" className="cert-logo" />
            </div>

            {/* MSME */}
            <div className="cert-item">
              <h3>🏭 MSME (Udyam)</h3>
              <p>
                Recognized under the MSME Udyam scheme, supporting sustainable
                business growth and export readiness.
              </p>
              <img src="/VERIFY/MSME.png" alt="MSME Udyam" className="cert-logo" />
            </div>

            {/* Spice Board */}
            <div className="cert-item">
              <h3>🌶 Spices Board of India</h3>
              <p>
                Registered with the Spices Board of India, ensuring authenticity
                and export quality of spices.
              </p>
              <img src="/VERIFY/SPICES.png" alt="Spices Board" className="cert-logo" />
            </div>

            {/* ECGC */}
            <div className="cert-item">
              <h3>🛡️ ECGC</h3>
              <p>
                Covered by Export Credit Guarantee Corporation of India,
                providing financial security for international trade.
              </p>
              <img src="/VERIFY/ECGC.png" alt="ECGC" className="cert-logo" />
            </div>

            {/* ISO */}
            <div className="cert-item">
              <h3>ISO</h3>
              <p>
                Adhering to ISO standards for quality management and operational
                excellence.
              </p>
              <img src="/VERIFY/ISO.png" alt="ISO Certification" className="cert-logo" />
            
            </div>

            
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cert-cta">
        <div className="container">
          <h2>Need Verification or More Information?</h2>
          <p>
            For certification verification, compliance queries, or export
            partnerships, please contact our team directly.
          </p>
          <button className="cta-button" onClick={handleContactClick}>
            Contact Us  Aromaveda
          </button>
        </div>
      </section>
    </div>
  );
};

export default Certification;
