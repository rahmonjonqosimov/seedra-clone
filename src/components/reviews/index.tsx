import React from "react";
import "./index.scss";
import avatar from "../../assets/images/icons/avatar.svg";
import stars from "../../assets/images/icons/stars.svg";
import star from "../../assets/images/icons/star.svg";
import foiz2 from "../../assets/images/icons/2.svg";
import foiz3 from "../../assets/images/icons/3.svg";
import foiz4 from "../../assets/images/icons/4.svg";
import foiz5 from "../../assets/images/imgs/5.png";
import rewievs from "../../assets/images/imgs/reviews.png";
import { FiCheck } from "react-icons/fi";

const Reviews: React.FC = () => {
  return (
    <div className="reviews-section">
      <div className="container">
        <div className="reviews__hero">
          <h1>Customer reviews.</h1>
          <button>Make review</button>
        </div>
        <div className="reviews">
          <div className="reviews__col-1">
            <div className="reviews__box-1">
              <div className="box__rating">
                <h2>4,1</h2>
                <span>
                  <p>124 reviews</p>
                  <img src={stars} alt="Stars" />
                </span>
              </div>
              <div className="line"></div>
              <div className="box__row">
                <p>5</p>
                <img src={star} alt="Star" />
                <img src={foiz5} className="foiz__img" alt="" />
                <p>81</p>
              </div>
              <div className="box__row">
                <p>4</p>
                <img src={star} alt="Star" />
                <img src={foiz4} className="foiz__img" alt="" />
                <p>45</p>
              </div>
              <div className="box__row">
                <p>3</p>
                <img src={star} alt="Star" />
                <img src={foiz3} className="foiz__img" alt="" />
                <p>32</p>
              </div>
              <div className="box__row">
                <p>2</p>
                <img src={star} alt="Star" />
                <img src={foiz2} className="foiz__img" alt="" />
                <p>8</p>
              </div>
              <div className="box__row">
                <p>1</p>
                <img src={star} alt="Star" />
                <img src={foiz2} className="foiz__img" alt="" />
                <p>11</p>
              </div>
            </div>
            <div className="reviews__box-1">
              <div className="box__hero">
                <span>
                  <p>124 reviews</p>
                  <h5>Photo&Video review</h5>
                </span>
                <a href="#">View</a>
              </div>
              <div className="img__wrapper">
                <img src={rewievs} alt="" />
                <img src={rewievs} alt="" />
                <img src={rewievs} alt="" />
                <img src={rewievs} alt="" />
              </div>
            </div>
          </div>
          <div className="reviews__col-2">
            <div className="reviews__box-2">
              <div className="box__hero">
                <img src={avatar} alt="Avatar" />
                <div className="box__hero-text">
                  <span>
                    <h4>Carla Samantoes-Diego</h4>
                    <p>Reviewed in the United States on June 18, 2021</p>
                  </span>
                  <img src={stars} alt="Stars" />
                </div>
              </div>
              <p className="box__desc">
                SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
                professional instructions created by PhD Helga George
              </p>
              <p className="box__desc">
                Be sure of our quality - the freshest batches of this season.
                Non-GMO, Heirloom - our seeds were tested and have the best
                germination ratings.{" "}
              </p>
              <div className="line"></div>
              <div className="box__hero">
                <div className="size">
                  Size <span>2 PACK</span>
                </div>
                <div className="verified">
                  <FiCheck /> VERIFIED
                </div>
              </div>
            </div>
            <div className="reviews__box-2">
              <div className="box__hero">
                <img src={avatar} alt="Avatar" />
                <div className="box__hero-text">
                  <span>
                    <h4>Carla Samantoes-Diego</h4>
                    <p>Reviewed in the United States on June 18, 2021</p>
                  </span>
                  <img src={stars} alt="Stars" />
                </div>
              </div>
              <p className="box__desc">
                Eine sehr aromatische Sorte, wollte die Himbeere gerade noch
                einmal bestellen, derzeit nicht verfügbar. So süße Früchte und
                das jetzt im Oktober, unglaublich
              </p>
              <div className="box__images">
                <img src={rewievs} alt="" />
                <img src={rewievs} alt="" />
              </div>
              <div className="line"></div>
              <div className="box__hero">
                <div className="size">
                  Size <span>2 PACK</span>
                </div>
                <div className="verified">
                  <FiCheck /> VERIFIED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
