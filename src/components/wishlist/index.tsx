import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductsSection from "../products";
import "./index.scss";
import emptyHeart from "../../assets/images/imgs/empty-heart.jpg";
import { useNavigate } from "react-router-dom";

const WishlistComponent: React.FC = () => {
  const wishlist = useSelector((s: any) => s.wishlist.value);
  console.log(wishlist);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {wishlist.length ? (
        <>
          <div className="wishlist">
            <div className="container">
              <h1>Favorites</h1>
            </div>
          </div>
          <ProductsSection data={wishlist} />
        </>
      ) : (
        <section id="empty-cart">
          <div className="container emp">
            <div className="empty-cart-image">
              <img src={emptyHeart} alt="empty-cart" />
            </div>
            <h1>Wishlist is empty</h1>
            <p>You don't have any items in your wishlist yet</p>
            <button onClick={() => navigate("/")}> Home</button>
          </div>
        </section>
      )}
    </>
  );
};

export default WishlistComponent;
