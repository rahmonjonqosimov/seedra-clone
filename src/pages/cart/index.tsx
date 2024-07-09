import React, { useEffect } from "react";
import CartComponent from "../../components/cart";

const CartPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CartComponent />
    </>
  );
};

export default CartPage;
