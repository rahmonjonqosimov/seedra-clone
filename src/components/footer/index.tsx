import React from "react";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/icons/logo.svg";
import { AiFillInstagram } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer__cont">
        <img src={logo} alt="logo" className="logo-resp" />
        <div className="footer__top">
          <div className="footer__top-links">
            <NavLink to={"/"}>ALL PRODUCTS</NavLink>
            <hr />
            <NavLink to={"/about"}>ABOUT SEEDRA</NavLink>
            <hr />
            <NavLink to={"/blog"}>OUR BLOG</NavLink>
          </div>
          <img src={logo} alt="logo" />
          <div className="footer__top-links">
            <Link to={"#"}>Terms&Conditions</Link>
            <hr />
            <Link to={"#"}>Privacy Policy</Link>
          </div>
        </div>
        <hr />
        <div className="footer__bottom">
          <div className="footer__bottom-social">
            <NavLink to={"https://www.instagram.com/"}>
              <AiFillInstagram size={18} color="#359640" />
            </NavLink>
            <NavLink to={"https://www.facebook.com/"}>
              <MdFacebook size={18} color="#359640" />
            </NavLink>
          </div>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
