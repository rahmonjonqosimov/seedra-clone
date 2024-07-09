import React from "react";
import "./index.scss";
import { FiSearch } from "react-icons/fi";

interface SearchProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ value, setValue }) => {
  return (
    <>
      <div className="container">
        <div className="serach">
          <button>
            <FiSearch />
          </button>
          <input
            type="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search"
          />
        </div>
      </div>
    </>
  );
};

export default Search;
