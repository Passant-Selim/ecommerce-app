import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">My Ecommerce</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart" className="navbar-link">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
