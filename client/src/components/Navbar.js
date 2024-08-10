import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import '../styles/main.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-fuzz">FUZZ</span>
          <span className="logo-ads">ADS</span>
        </div>
        <ul className="navbar-menu">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/services" className="nav-link">
            Services
          </Link>
          <li>
            <a href="#plans">Plans</a>
          </li>
          <Link to="/contact" className="nav-link">
            Contact Us
          </Link>
        </ul>
        <div className="navbar-buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Signup</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
