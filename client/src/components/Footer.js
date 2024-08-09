import React from "react";
import "../styles/footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import centerImage from "../assets/Self-confidence-bro.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-circle"></div>
      <div className="footer-circle-small"></div>
      <div className="circle-content">
        <span className="logo-fuzz">FUZZ</span>
        <span className="logo-ads">ADs</span>
      </div>
      <div className="footer-tagline">
        <p>Your Brand Our team</p>
      </div>
      <div className="footer-icons">
        <div className="footer-icon fb">
          <FaFacebookF />
        </div>
        <div className="footer-icon tw">
          <FaTwitter />
        </div>
        <div className="footer-icon ig">
          <FaInstagram />
        </div>
        <div className="footer-icon yt">
          <FaYoutube />
        </div>
      </div>
      <div className="footer-center">
        <img src={centerImage} alt="Center" className="center-image" />
      </div>
      <div className="footer-circle-bottom-right"></div>{" "}
      {/* New circle at the bottom right */}
      <div className="footer-links">
        <div className="footer-links-column-one">
          <ul>
            <li>Services</li>
            <li>Contact</li>
            <li>Privacy <br />Policy</li>
          </ul>
        </div>
        <div className="footer-links-column-two">
          <ul>
            <li>About</li>
            <li>Terms & <br />Conditions</li>
            <li>Return & <br />Refund</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
