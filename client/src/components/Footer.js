import React from 'react';
import '../styles/footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Import your logo image

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="Logo" className="footer-logo-img" />
          </div>
          <div className="footer-icons">
            <div className="footer-icon fb"><FaFacebookF /></div>
            <div className="footer-icon tw"><FaTwitter /></div>
            <div className="footer-icon ig"><FaInstagram /></div>
            <div className="footer-icon yt"><FaYoutube /></div>
          </div>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
            <li>Services</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Sitemap</li>
            <li>Privacy Policy</li>
            <li>Terms &<br /> Conditions</li>
            <li>Refund and<br /> Return Policy</li>
          </ul>

        </div>
      </div>
      <div className="footer-bottom">
        &copy; {currentYear} FuzzAds. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
