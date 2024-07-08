import React from "react";
import "./index.scss";
import { ProductsSchema } from "../../context/api/api";
import ProductCard from "../card";

export interface ProductsPropsSchema {
  data: ProductsSchema[] | undefined;
}

const ProductsSection: React.FC<ProductsPropsSchema> = ({ data }) => {
  const products: JSX.Element[] | undefined = data?.map(
    (product: ProductsSchema) => <ProductCard key={product.id} data={product} />
  );

  return (
    <section id="products-section">
      <div className="container">
        <div className="product__wrapper">{products}</div>
      </div>
    </section>
  );
};

export default ProductsSection;
