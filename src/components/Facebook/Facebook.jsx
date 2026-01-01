import React from "react";
import { FaFacebookF } from "react-icons/fa";
import "./Facebook.css"; // Create this CSS file for styling

const Facebook = () => {
  return (
    <a
      href="https://www.facebook.com/share/17ANC1vqD7/?mibextid=wwXIfr" // Replace with your Facebook page URL
      target="_blank"
      rel="noopener noreferrer"
      className="facebook-float"
      aria-label="Visit our Facebook page"
    >
      <FaFacebookF />
    </a>
  );
};

export default Facebook;
