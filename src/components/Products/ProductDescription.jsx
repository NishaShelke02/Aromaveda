import React from "react";
import ReactMarkdown from "react-markdown";
import "./ProductDescription.css";

const ProductDescription = ({ description, specifications }) => {
  return (
    <div className="product-description">

      {/* DESCRIPTION */}
      {description && (
        <div className="markdown-content">
          <ReactMarkdown>
            {description}
          </ReactMarkdown>
        </div>
      )}

      {/* SPECIFICATIONS */}
      {specifications && (
        <div className="spec-section">
          <h3>Specifications</h3>
          <ul>
            {Object.entries(specifications).map(([key, value], i) => (
              <li key={i}>
                <span>{key}</span>: {value}
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};

export default ProductDescription;
