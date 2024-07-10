import React, { useEffect, useState } from "react";
import "./index.scss";
import logo from "../../assets/images/icons/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { BsCart, BsHeart } from "react-icons/bs";
import { useSelector } from "react-redux";

import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
} from "react-icons/bi";
import SearchProduct from "./serach/Search";

const Navbar: React.FC = () => {
  const cart = useSelector((s: any) => s.cart.value);
  const wishlist = useSelector((s: any) => s.wishlist.value);

  const [show, setShow] = useState<boolean>(false);

  const handleScroll:()=> void = () => {
    if (window.scrollY > 300) {
      setShow(true);
    } else if (window.scrollY <= 0) {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={`navbar-section ${show ? "nav" : ""}`}>
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
        <SearchProduct/>
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
