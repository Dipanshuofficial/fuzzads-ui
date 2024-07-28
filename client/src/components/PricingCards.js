import React from "react";
import "../styles/pricingCards.css";
import Ailogo from "../assets/ailogo.png"

const PricingCards = () => {
  return (
    <>
      <section className="pricing-cards-section">
        <h2 className="pricing-heading">PLANS</h2>
        <p className="pricing-description">
          Where imagination meets strategy, crafting compelling <br /> campaigns
          to elevate your brand's story
          <div className="pricing-controls">
          <button className="ai-plans">AI Plans <img className="ailogo" src={Ailogo} alt="ai"/>  <p className="btn-content">CUSTOM AI PLANS FOR YOUR ADs</p></button>
        </div>
        </p>
        
        <div className="cards">
          <div className="card silver">
            <h3 className="title">Silver Streak</h3>
            <p>A streak Solution for beginners</p>
            <p className="real-price">₹499.99/mo</p>
            <button className="card-button">Choose Plan</button>
          </div>
          <div className="card gold">
            <div className="most-popular">MOST POPULAR</div>
            <h3 className="title">Golden Glow</h3>
            <p>Best plan to Glow your Business</p>
            <p className="real-price">₹1499.99/mo</p>
            <button className="card-button">Choose Plan</button>
          </div>
          <div className="card platinum">
            <h3 className="title">Platinum Power</h3>
            <p>Level up with the power and support</p>
            <p className="real-price">₹3449.99/mo</p>
            <button className="card-button">Choose Plan</button>
          </div>
        </div>
        <p className="payment-terms">Payment Terms*</p>
      </section>
    </>
  );
};

export default PricingCards;
