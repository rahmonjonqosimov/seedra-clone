import React from "react";
import "./index.scss";
import imgLeft1 from "../../assets/images/imgs/leaves-hero-left-1.png";
import imgLeft2 from "../../assets/images/imgs/leaves-hero-left-2.png";
import imgRight1 from "../../assets/images/imgs/leaves-hero-right1.png";
import imgRight2 from "../../assets/images/imgs/leaves-hero-right-2.png";

const AboutHero: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="hero">
          <img src={imgLeft1} alt="leaves" className="hero__left-img1" />
          <img src={imgLeft2} alt="leaves" className="hero__left-img2" />
          <img src={imgRight1} alt="leaves" className="hero__right-img1" />
          <img src={imgRight2} alt="leaves" className="hero__right-img2" />
          <h1>Who we are and what we do</h1>
          <p>
            Here you can find a lot of interesting and useful information that
            you need in gardening and creating a beautiful garden
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
