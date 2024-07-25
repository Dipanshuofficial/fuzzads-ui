import React from "react";
import "../styles/pricingCards.css";
import extra from "../assets/Questions-amico.png";

const PricingCards = () => {
  return (
    <>
      <section className="pricing-cards-section">
        <h2 className="pricing-heading">PLANS</h2>
        <p className="pricing-description">
          Where imagination meets strategy, crafting compelling <br /> campaigns
          to elevate your brand's story
        </p>
        <div className="pricing-controls">
          <button className="ai-plans">AI Plans</button>
        </div>
        <div className="cards">
          <div className="card silver">
            <h3>Silver Streak</h3>
            <p>A streak Solution for beginners</p>
            <div className="pricing">
              <p className="cancelled-price">₹999.99</p>
              <span className="save-box">Save 50%</span>
            </div>
            <p className="real-price">₹499.99/mo</p>
            <button className="card-button">Choose Plan</button>
            <hr className="card-divider" />
            <ul className="plan-contents">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
              <li>Feature 6</li>
              <li>Feature 7</li>
              <li>Feature 8</li>
              <li>Feature 9</li>
              <li>Feature 10</li>
            </ul>
          </div>
          <div className="card gold">
            <div className="most-popular">MOST POPULAR</div>
            <h3>Golden Glow</h3>
            <p>Best plan to Glow your Business</p>
            <div className="pricing">
              <p className="cancelled-price">₹2499.99</p>
              <span className="save-box">Save 60%</span>
            </div>
            <p className="real-price">₹1499.99/mo</p>
            <button className="card-button">Choose Plan</button>
            <hr className="card-divider" />
            <ul className="plan-contents">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
              <li>Feature 6</li>
              <li>Feature 7</li>
              <li>Feature 8</li>
              <li>Feature 9</li>
              <li>Feature 10</li>
            </ul>
          </div>
          <div className="card platinum">
            <h3>Platinum Power</h3>
            <p>Level up with the power and support</p>
            <div className="pricing">
              <p className="cancelled-price">₹4999.99</p>
              <span className="save-box">Save 69%</span>
            </div>
            <p className="real-price">₹3449.99/mo</p>
            <button className="card-button">Choose Plan</button>
            <hr className="card-divider" />
            <ul className="plan-contents">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
              <li>Feature 5</li>
              <li>Feature 6</li>
              <li>Feature 7</li>
              <li>Feature 8</li>
              <li>Feature 9</li>
              <li>Feature 10</li>
            </ul>
          </div>
        </div>
        <p className="payment-terms">Payment Terms*</p>
      </section>

      <div className="extra-content">
        <div className="extra-content-left">
          <img src={extra} alt="Extra" />
        </div>
        <div className="extra-content-right">
          <h3>Extra Content Heading</h3>
          <p>
            This is some additional content that you can add below the pricing
            cards. You can customize this section as needed.
          </p>
        </div>
      </div>
    </>
  );
};

export default PricingCards;
