import React from "react";
import { ProductsSchema } from "../../context/api/api";
import { AiOutlineHeart } from "react-icons/ai";
import "./index.scss";
import { FiMinus, FiPlus, FiCheck } from "react-icons/fi";

interface DetailContentProps {
  data: ProductsSchema | undefined;
}

const DetailContent: React.FC<DetailContentProps> = ({ data }) => {
  return (
    <section id="detail">
      <div className="container">
        <div className="detail">
          <div className="detail__image">
            <div className="img">
              <img src={data?.images[0]} alt={data?.title} />
            </div>
            <div className="img__wrapper__detail">
              <img src={data?.images[0]} alt={data?.title} />
              <img src={data?.images[0]} alt={data?.title} />
              <img src={data?.images[0]} alt={data?.title} />
              <img src={data?.images[0]} alt={data?.title} />
              <img src={data?.images[0]} alt={data?.title} />
            </div>
          </div>
          <div className="detail__text">
            <h2>{data?.title}</h2>
            <span>
              <div className="detail__aviable">
                {" "}
                <FiCheck /> AVAILABLE
              </div>
              <div className="detail__category">{data?.category}</div>
            </span>
            <div className="detail__row">
              <div className="detail__size">2 PACK</div>
              <div className="detail__quantity">
                <button>
                  <FiMinus />
                </button>
                <span>0</span>
                <button>
                  <FiPlus />
                </button>
              </div>
            </div>
            <label htmlFor="radio1">
              <input type="radio" id="radio1" name="radio" />
              <div className="label__text">
                <h5>1 pack</h5>
                <p>
                  {" "}
                  start from <span>$1,56</span>
                </p>
              </div>
            </label>
            <label htmlFor="radio2">
              <input type="radio" id="radio2" name="radio" />
              <div className="label__text">
                <h5>2 pack</h5>
                <p>
                  {" "}
                  start from <span>$1,56</span>
                </p>
              </div>
            </label>
            <label htmlFor="radio3">
              <input type="radio" id="radio3" name="radio" />
              <div className="label__text">
                <h5>3 pack</h5>
                <p>
                  {" "}
                  start from <span>$1,56</span>
                </p>
              </div>
            </label>
            <label htmlFor="radio4">
              <input type="radio" id="radio4" name="radio" />
              <div className="label__text">
                <h5>4 pack</h5>
                <p>
                  {" "}
                  start from <span>$1,56</span>
                </p>
              </div>
            </label>
            <label htmlFor="radio5">
              <input type="radio" id="radio5" name="radio" />
              <div className="label__text">
                <h5>5 pack</h5>
                <p>
                  {" "}
                  start from <span>$1,56</span>
                </p>
              </div>
            </label>
            <div style={{ marginTop: "24px" }} className="detail__row">
              <div className="detail__price">
                <span>${data?.price}</span>
                <h3>${data?.price}</h3>
              </div>
              <div className="wishes__cart">
                <button className="wishes__btn">
                  <AiOutlineHeart />
                </button>
                <button className="cart__btn">Add to card</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailContent;
