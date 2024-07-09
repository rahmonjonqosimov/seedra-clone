import React from "react";
import "./index.scss";
import logo from "../../assets/images/icons/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { BsCart, BsHeart } from "react-icons/bs";
import { useSelector } from "react-redux";

import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiSearch,
} from "react-icons/bi";

const Navbar: React.FC = () => {
  const cart = useSelector((s: any) => s.cart.value);
  const wishlist = useSelector((s: any) => s.wishlist.value);

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
                <BsHeart />
                <sup>{wishlist.length}</sup>
              </Link>
            </li>
            <li>
              <Link to={"/cart"}>
                <BsCart />
                <sup>{cart.length}</sup>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
