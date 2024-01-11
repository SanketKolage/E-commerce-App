import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import {FaSearch} from 'react-icons/fa';
export const Navbar = () => {
  return (
    <div className="navbar">
      <input type ="text" placeholder="search item" className="Search"/>
      <FaSearch size={25} className="search_icon"/>
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/cart" >
          <ShoppingCart size={30} className="cart_icon" />
        </Link>
      </div>
    </div>
  );
};