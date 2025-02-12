import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "./contact.css"; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-description">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            className="form-input"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="form-input"
            required
          />
          <textarea
            placeholder="Your Message"
            className="form-input"
            rows="5"
            required
          ></textarea>
          <button type="submit" className="form-button">
            Send Message
          </button>
        </form>
        <div className="contact-info">
          <h2 className="info-title">Contact Information</h2>
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <span>your.email@example.com</span>
          </div>
          <div className="info-item">
            <FaPhone className="info-icon" />
            <span>+1 (123) 456-7890</span>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/ez-programmer4"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaGithub className="social-icon" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ezedin-ebrahim-11a01732b"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaLinkedin className="social-icon" />
              LinkedIn
            </a>
            <a
              href="https://twitter.com/#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <FaTwitter className="social-icon" />
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
