import React, { useState } from "react";
import "../styles/contact.css";
import contactimg from "../assets/contact.png";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/contact", formData)
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      })
      .catch((error) => {
        alert("Failed to send message");
        console.error("There was an error!", error);
      });
  };

  return (
    <section className="contact-section">
      <div className="contact-form">
        <h2 className="contact-heading">
          <span className="heading-line1">LETS</span>
          <br />
          <span className="heading-line2">GET STARTED</span>
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number*"
              className="form-input"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name*"
              className="form-input"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <textarea
              name="message"
              placeholder="Message*"
              className="form-input"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      <div className="contact-image">
        <img className="contact-img" src={contactimg} alt="contact" />
      </div>
    </section>
  );
};

export default Contact;
