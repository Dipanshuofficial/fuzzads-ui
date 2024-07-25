import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-form">
        <h2 className="contact-heading">Stay in Loop</h2>
        <p className="contact-subheading">Subscribe to Our Newsletter for the Latest Buzz!</p>
        <form>
          <div className="form-row">
            <input type="text" name="name" placeholder="Name*" className="form-input" required/>
            <input type="email" name="email" placeholder="Email*" className="form-input" required />
          </div>
          <div className="form-row">
            <input type="text" name="phone" placeholder="Phone Number*" className="form-input" required/>
            <input type="text" name="company" placeholder="Company Name*" className="form-input" required />
          </div>
          <div className="form-row">
            <textarea name="message" placeholder="Message" className="form-input" required></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <div className="contact-image">
        {/* Image will be added here later */}
      </div>
    </section>
  );
};

export default Contact;
