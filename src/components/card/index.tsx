import React from "react";
import star from "../../assets/images/icons/star.svg";
import { BsCart } from "react-icons/bs";
import { ProductsSchema } from "../../context/api/api";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../context/slices/heartSlice";
import {
  addToCart,
  decrement,
  increment,
  removeFromCart,
} from "../../context/slices/cartSlice";
import { FiMinus, FiPlus } from "react-icons/fi";

interface ProductCardPropsSchema {
  data: ProductsSchema;
}

const ProductCard: React.FC<ProductCardPropsSchema> = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlist = useSelector((s: any) => s.wishlist.value);
  const cart = useSelector((s: any) => s.cart.value);

  const [productQuantity] = cart.filter(
    (el: ProductsSchema) => el.id === data?.id
  );

  const handleDecrement: (data: ProductsSchema) => void = (data) => {
    dispatch(decrement(data));
    if (productQuantity.quantity <= 1) {
      dispatch(removeFromCart(data));
    }
  };

  return (
    <div className="product__card">
      <div className="product__image">
        <img
          onClick={() => {
            navigate(`/product/${data?.id}/${data?.category}`);
          }}
          src={data?.images[0]}
          alt={data?.title}
        />
        <div
          onClick={() => dispatch(toggleHeart(data))}
          className="heart__icon"
        >
          {wishlist?.some((item: ProductsSchema) => item.id === data?.id) ? (
            <AiFillHeart />
          ) : (
            <AiOutlineHeart />
          )}
        </div>
      </div>
      <div className="card__row">
        <div className="rating__img__wrapper">
          {new Array(Math.trunc(data?.rating))
            .fill("")
            .map((_, inx: number) => (
              <img src={star} alt="Star" key={inx} />
            ))}
        </div>
        <span>({data?.stock})</span>
      </div>
      <h3 title={data?.description} className="product__title">
        {data?.description}
      </h3>
      <div className="card__row">
        <h2>${Math.round(data?.price)}</h2>
        {cart.some((item: ProductsSchema) => item.id === data?.id) ? (
          <div className="detail__quantity">
            <button
              disabled={productQuantity.quantity <= 0}
              onClick={() => handleDecrement(data)}
            >
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
          <button onClick={() => dispatch(addToCart(data))}>
            <BsCart />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
