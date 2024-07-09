import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const BannerSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section id="banner-section">
      <div className="container">
        <div className="banner">
          <h3>We sell seeds </h3>
          <p>that always sprout and gardening supplies which never break</p>
        </div>
        <div className="products__hero">
          <h2>Our products.</h2>
          <button onClick={() => navigate("/products")}>View all</button>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
