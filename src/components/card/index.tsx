import React from "react";
import star from "../../assets/images/icons/star.svg";
import { BsCart } from "react-icons/bs";
import { ProductsSchema } from "../../context/api/api";
import { AiOutlineHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface ProductCardPropsSchema {
  data: ProductsSchema;
}

const ProductCard: React.FC<ProductCardPropsSchema> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="product__card">
      <div className="product__image">
        <img
          onClick={() => navigate(`/product/${data?.id}`)}
          src={data?.images[0]}
          alt={data?.title}
        />
        <div className="heart__icon">
          <AiOutlineHeart />
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
        <h2>${data?.price}</h2>
        <button>
          <BsCart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
