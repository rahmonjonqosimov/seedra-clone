import React from "react";
import "./index.scss";
import { useGetProductCategoriesQuery } from "../../context/api/api";

interface CategoryComponentProps {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  category: string;
}

const CategoryComponent: React.FC<CategoryComponentProps> = ({
  setCategory,
  category: item,
}) => {
  const { data } = useGetProductCategoriesQuery();

  const handleCategorySort: (e: React.MouseEvent<HTMLDataElement>) => void = (
    e
  ) => {
    const { value } = e.currentTarget;
    setCategory(value);
    localStorage.setItem("category", value);
  };

  const categoryItem: JSX.Element[] | undefined = data?.map(
    (category: string, inx: number) => (
      <li key={inx}>
        <data
          onClick={handleCategorySort}
          value={category}
          style={{
            background: item === category ? "#359740" : "#fff",
            color: item === category ? "#fff" : "#000",
          }}
        >
          {category}
        </data>
      </li>
    )
  );

  return (
    <section id="category">
      <div className="container">
        <ul className="category__items">
          <li>
            <data
              onClick={() => setCategory("")}
              value={""}
              style={{
                background: item === "" ? "#359740" : "#fff",
                color: item === "" ? "#fff" : "#000",
              }}
            >
              All
            </data>
          </li>
          {categoryItem}
        </ul>
      </div>
    </section>
  );
};

export default CategoryComponent;
