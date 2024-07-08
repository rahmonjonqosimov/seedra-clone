import React, { useState } from "react";
import HeroSection from "../../components/hero";
import BannerSection from "../../components/banner";
import ProductsSection from "../../components/products";
import { useGetProductsQuery } from "../../context/api/api";
import CategoryComponent from "../../components/category";
import SingleRouteSkeleton from "../../components/loading/circle-loading";
import BlogSection from "../../components/blog";
import Client from "../../components/client";
import AboutPosts from "../../components/about-posts";

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
    localStorage.getItem("category") || ""
  );
  const params = { limit: 6 };

  const path = category ? `/category/${category}` : "";

  const { data, isFetching } = useGetProductsQuery({
    ...params,
    url: path,
  });

  const products: Schema[] | undefined = data?.products;

  return (
    <>
      <HeroSection />
      <BannerSection />
      {isFetching && <SingleRouteSkeleton />}
      <CategoryComponent setCategory={setCategory} category={category} />
      <ProductsSection data={products} />
      <BlogSection />
      <Client />
      <AboutPosts />
    </>
  );
};

export default HomePage;
