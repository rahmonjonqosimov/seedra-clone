import React, { useState } from "react";
import HeroSection from "../../components/hero";
import BannerSection from "../../components/banner";
import ProductsSection from "../../components/products";
import { useGetProductsQuery } from "../../context/api/api";
import CategoryComponent from "../../components/category";
import BlogSection from "../../components/blog";
import Client from "../../components/client";
import AboutPosts from "../../components/about-posts";
import ProductCardSkeleton from "../../components/loading/product-skeleton";

interface Schema {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  images: string[];
}

const HomePage: React.FC = () => {
  const [category, setCategory] = useState<string>(
    sessionStorage.getItem("category") || ""
  );
  const params = { limit: 6 };

  const path = category ? `/category/${category}` : "";

  const { data, isFetching, isLoading } = useGetProductsQuery({
    ...params,
    url: path,
  });

  const products: Schema[] | undefined = data?.products;

  return (
    <>
      <HeroSection />
      <BannerSection />
      <CategoryComponent
        isFetching={isFetching}
        setCategory={setCategory}
        category={category}
      />
      {isLoading && <ProductCardSkeleton count={6} />}
      <ProductsSection data={products} />
      <BlogSection />
      <Client />
      <AboutPosts />
    </>
  );
};

export default HomePage;
