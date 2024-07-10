import React, { useEffect, useState } from "react";
import {
  ProductsSchema,
  useGetProductsQuery,
  useGetProductSearchQuery,
} from "../../context/api/api";
import ProductsSection from "../../components/products";
import CategoryComponent from "../../components/category";
import Search from "../../components/search";
import ProductCardSkeleton from "../../components/loading/product-skeleton";

const Products: React.FC = () => {
  const [category, setCategory] = useState<string>(
    sessionStorage.getItem("category") || ""
  );
  const [searchValue, setSearchValue] = useState<string>("");
  const params = { limit: 9 };

  const path = category ? `/category/${category}` : "";

  const { data, isFetching, isLoading } = useGetProductsQuery({
    ...params,
    url: path,
  });

  const { data: searchItems } = useGetProductSearchQuery({ q: searchValue });

  const products: ProductsSchema[] | undefined = searchValue.trim()
    ? searchItems?.products
    : data?.products;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Search value={searchValue} setValue={setSearchValue} />

      <CategoryComponent
        isFetching={isFetching}
        category={category}
        setCategory={setCategory}
      />
      {isLoading ? (
        <ProductCardSkeleton count={9} />
      ) : (
        <ProductsSection data={products} />
      )}
    </>
  );
};

export default Products;
