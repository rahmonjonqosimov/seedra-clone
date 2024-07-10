import React, { useEffect } from "react";
import WishlistComponent from "../../components/wishlist";

const Wishlist: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <WishlistComponent />
    </>
  );
};

export default Wishlist;
