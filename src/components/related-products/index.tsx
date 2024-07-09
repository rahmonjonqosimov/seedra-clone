import React from "react";
import { ProductsSchema, useGetProductsQuery } from "../../context/api/api";
import ProductCard from "../card";
import ProductCardSkeleton from "../loading/product-skeleton";

const RelatedProducts: React.FC<{ category: string }> = ({ category }) => {
  const params = { limit: 3 };

  const { data, isLoading } = useGetProductsQuery({
    url: `/category/${category}`,
    ...params,
  });

  const item: JSX.Element[] | undefined = data?.products?.map(
    (product: ProductsSchema) => <ProductCard data={product} key={product.id} />
  );
  return (
    <section className="products-section">
      <div className="container">
        <h1>Related products.</h1>
        {isLoading && <ProductCardSkeleton count={3} />}
        <div className="product__wrapper">{item}</div>
      </div>
    </section>
  );
};

export default RelatedProducts;
