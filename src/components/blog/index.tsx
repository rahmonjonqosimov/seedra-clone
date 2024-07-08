import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import img2 from "../../assets/images/imgs/blog-card-2.png";
import img3 from "../../assets/images/imgs/blog-card-3.png";
import img1 from "../../assets/images/imgs/blog-card-1.png";
import { HiClock } from "react-icons/hi2";

const BlogSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section id="blog-section">
      <div className="container">
        <div className="blog-hero">
          <h2>Our blog.</h2>
          <button onClick={() => navigate("/blog")}>Go to our blog</button>
        </div>
        <div className="blog__wrapper">
          <div className="blog__box">
            <div className="card-1">
              <div className="card__row">
                <HiClock />
                <span>12.09.2021</span>
              </div>
              <h3>How to plant spinach correctly in winter</h3>
              <p>
                In most areas, successive sowing can be done from early spring
                until early winter, but more often during hotter months...
              </p>
              <button>Read</button>
              <img src={img1} alt="" />
            </div>
            <div className="blog__box-child">
              <div className="card-2">
                <img src={img3} alt="" />
                <div className="card__row">
                  <HiClock />
                  <span>12.09.2021</span>
                </div>
                <h3>How to plant spinach correctly in winter</h3>

                <button>Read</button>
              </div>
              <div className="card-2">
                <img src={img3} alt="" />
                <div className="card__row">
                  <HiClock />
                  <span>12.09.2021</span>
                </div>
                <h3>How to plant spinach correctly in winter</h3>

                <button>Read</button>
              </div>
            </div>
          </div>
          <div className="card-3">
            <img src={img2} alt="" />
            <div className="card__row">
              <HiClock />
              <span>12.09.2021</span>
            </div>
            <h3>How to plant spinach correctly in winter</h3>
            <p>
              In most areas, successive sowing can be done from early spring
              until early winter, but more often during hotter months...
            </p>
            <button>Read</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
