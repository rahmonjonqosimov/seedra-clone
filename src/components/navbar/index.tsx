import React from "react";
import "./index.scss";
import logo from "../../assets/images/icons/logo.svg";
import { Link, NavLink } from "react-router-dom";
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiSearch,
  BiHeart,
  BiCart,
} from "react-icons/bi";

const Navbar: React.FC = () => {
  return (
    <section id="navbar">
      <div className="container">
        <div className="navbar">
          <Link to={"/"} className="nav__logo">
            <img src={logo} alt="Logo" />
          </Link>
          <ul className="nav__items">
            <li>
              <NavLink to={"/products"}>ALL PRODUCTS</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>ABOUT SEEDRA</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>OUR BLOG</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>CONTACTS</NavLink>
            </li>
          </ul>
          <ul className="nav__icons">
            <li>
              <Link to={"/"}>
                <BiLogoInstagramAlt />
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <BiLogoFacebookCircle />
              </Link>
            </li>
          </ul>
          <div className="search">
            <input type="search" placeholder="Search" />
            <BiSearch />
          </div>
          <ul className="cart__and__wishes">
            <li>
              <Link to={"/wishlist"}>
                <BiHeart />
              </Link>
            </li>
            <li>
              <Link to={"/cart"}>
                <BiCart />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
