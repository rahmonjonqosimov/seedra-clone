import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../context/api/api";
import SingleRouteSkeleton from "../../components/loading/circle-loading";
import DetailContent from "../../components/detail";

const Detail: React.FC = () => {
  const { id }: any = useParams();
  const { data, isLoading } = useGetProductByIdQuery(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    </>
  );
};

export default Detail;
