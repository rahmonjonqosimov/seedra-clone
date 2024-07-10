import React, { useEffect } from "react";
import "./index.scss";
import BlogSection from "../../components/blog";

const BlogPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BlogSection />
    </>
  );
};

export default BlogPage;
