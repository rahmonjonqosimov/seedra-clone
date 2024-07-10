import React from "react";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import img2 from "../../assets/images/imgs/blog-card-2.png";
import img3 from "../../assets/images/imgs/blog-card-3.png";
import img1 from "../../assets/images/imgs/blog-card-1.png";
import strawberry from "../../assets/images/imgs/strawberry.png";
import img4 from "../../assets/images/imgs/blog-card-4.png";
import img6 from "../../assets/images/imgs/leaves-hero-right-6.png";
import img7 from "../../assets/images/imgs/leaves-hero-right-7.png";
import img8 from "../../assets/images/imgs/leaves-hero-right-8.png";
import { HiClock } from "react-icons/hi2";
import { useLocation } from "react-router-dom";
import imgLeft1 from "../../assets/images/imgs/leaves-hero-left-1.png";
import imgLeft2 from "../../assets/images/imgs/leaves-hero-left-2.png";
import imgRight1 from "../../assets/images/imgs/leaves-hero-right1.png";
import imgRight2 from "../../assets/images/imgs/leaves-hero-right-2.png";

const BlogSection: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <>
      {pathname.includes("/blog") && (
        <section>
          <div className="container">
            <div className="hero">
              <img src={imgLeft1} alt="leaves" className="hero__left-img1" />
              <img src={imgLeft2} alt="leaves" className="hero__left-img2" />
              <img src={imgRight1} alt="leaves" className="hero__right-img1" />
              <img src={imgRight2} alt="leaves" className="hero__right-img2" />
              <h1>Welcome to our blog</h1>
              <p>
                Here you can find a lot of interesting and useful information
                that you need in gardening and creating a beautiful garden
              </p>
            </div>
          </div>
        </section>
      )}
      <section id="blog-section">
        <div className="container">
          {!pathname.includes("blog") ? (
            <div className="blog-hero">
              <h2>Our blog.</h2>
              <button onClick={() => navigate("/blog")}>Go to our blog</button>
            </div>
          ) : (
            <></>
          )}
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
          {pathname.includes("blog") ? (
            <>
              <div style={{ marginTop: "30px" }} className="blog__wrapper">
                <div className="box-1">
                  <div className="card__row">
                    <HiClock />
                    <span>12.09.2021</span>
                  </div>
                  <h3>How to plant spinach correctly in winter</h3>
                  <p>
                    In most areas, successive sowing can be done from early
                    spring until early winter, but more often during hotter
                    months...
                  </p>
                  <button>Read</button>
                  <img src={strawberry} alt="strawberry" />
                </div>
                <div className="box-2">
                  <img src={img4} alt="" />
                  <div className="card__row">
                    <HiClock />
                    <span>12.09.2021</span>
                  </div>
                  <h3>How to plant spinach correctly in winter</h3>
                  <button>Read</button>
                </div>
              </div>
              <div className="boxx">
                <div className="box__item">
                  <img src={img6} alt="" />
                  <div className="card__row">
                    <HiClock />
                    <span>12.09.2021</span>
                  </div>
                  <h3>How to plant spinach correctly in winter</h3>
                  <p>
                    In most areas, successive sowing can be done from early
                    spring until early winter, but more often during hotter
                    months...
                  </p>
                  <button>Read</button>
                </div>
                <div className="box__item">
                  <img src={img7} alt="" />
                  <div className="card__row">
                    <HiClock />
                    <span>12.09.2021</span>
                  </div>
                  <h3>How to plant spinach correctly in winter</h3>
                  <p>
                    In most areas, successive sowing can be done from early
                    spring until early winter, but more often during hotter
                    months...
                  </p>
                  <button>Read</button>
                </div>
                <div className="box__item">
                  <img src={img8} alt="" />
                  <div className="card__row">
                    <HiClock />
                    <span>12.09.2021</span>
                  </div>
                  <h3>How to plant spinach correctly in winter</h3>
                  <p>
                    In most areas, successive sowing can be done from early
                    spring until early winter, but more often during hotter
                    months...
                  </p>
                  <button>Read</button>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogSection;
