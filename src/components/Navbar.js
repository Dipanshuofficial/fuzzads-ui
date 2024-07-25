import React from 'react';
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-fuzz">FUZZ</span>
          <span className="logo-ads">ADS</span>
        </div>
        <ul className="navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#plans">Plans</a></li>
          <li><a href="#contact">Contact Us</a></li>
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
