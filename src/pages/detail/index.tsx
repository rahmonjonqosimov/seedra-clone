import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/api/api";
import SingleRouteSkeleton from "../../components/loading/circle-loading";
import DetailContent from "../../components/detail";
import ProductInformation from "../../components/product-information";
import RelatedProducts from "../../components/related-products";
import { useLocation } from "react-router-dom";
import Reviews from "../../components/reviews";

const Detail: React.FC = () => {
  const { id, category }: any = useParams();
  const { data, isLoading } = useGetProductByIdQuery(id);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {isLoading ? (
        <>
          <SingleRouteSkeleton />
          <div style={{ height: "500px" }}></div>
        </>
      ) : (
        <DetailContent data={data} />
      )}
      <ProductInformation />
      <Reviews />
      <RelatedProducts category={category} />
    </>
  );
};

export default Detail;
