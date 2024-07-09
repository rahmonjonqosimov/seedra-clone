import React from "react";
import { ProductsSchema } from "../../context/api/api";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./index.scss";
import { FiMinus, FiPlus, FiCheck } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrement,
  increment,
  removeFromCart,
} from "../../context/slices/cartSlice";
import { toggleHeart } from "../../context/slices/heartSlice";

interface DetailContentProps {
  data: ProductsSchema;
}

const DetailContent: React.FC<DetailContentProps> = ({ data }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((s: any) => s.wishlist.value);
  const cart = useSelector((s: any) => s.cart.value);

  const [productQuantity] = cart?.filter(
    (item: ProductsSchema) => item.id === data.id
  );

  const handleDecrement: (data: ProductsSchema) => void = (data) => {
    dispatch(decrement(data));
    if (productQuantity.quantity <= 1) {
      dispatch(removeFromCart(data));
    }
  };
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
                <button
                  onClick={() => dispatch(toggleHeart(data))}
                  className="wishes__btn"
                >
                  {wishlist?.some(
                    (item: ProductsSchema) => item.id === data.id
                  ) ? (
                    <AiFillHeart />
                  ) : (
                    <AiOutlineHeart />
                  )}
                </button>
                {cart?.some((item: ProductsSchema) => item.id === data.id) ? (
                  <div className="detail__quantity">
                    <button onClick={() => handleDecrement(data)}>
                      <FiMinus />
                    </button>
                    <span>{productQuantity.quantity}</span>
                    <button
                      disabled={productQuantity.quantity >= 10}
                      onClick={() => dispatch(increment(data))}
                    >
                      <FiPlus />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => dispatch(addToCart(data))}
                    className="cart__btn"
                  >
                    Add to card
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailContent;
