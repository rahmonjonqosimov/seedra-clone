import React from "react";
import "./index.scss";

const HeroSection: React.FC = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero__text">
            <h2>SEEDRA Basil Seeds for Indoor and Outdoor Planting</h2>
            <p>
              Be sure of our quality - the freshest batches of this season.
              Non-GMO, Heirloom - our seeds were tested and have the best
              germination ratings. Your easy growing experience is our guarantee
            </p>
            <div className="hero__price">
              <h2>$12.56</h2>
              <span>$15.56</span>
            </div>
            <div className="hero__btn-wrapper">
              <button className="first__btn">Add to card</button>
              <button className="second__btn">Discover</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
