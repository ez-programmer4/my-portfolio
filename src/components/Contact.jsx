import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement form submission logic here
    alert("Thank you for reaching out! Your message has been sent.");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-description">
          Have a question or want to collaborate? Feel free to reach out!
        </p>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                className="form-input"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="form-button">
              Send Message
            </button>
          </form>
          <div className="contact-info">
            <h2 className="info-title">Contact Information</h2>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <span>ezedinebrahim131@gmail.com</span>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <span>+251 991 792 427</span>
            </div>
            <div className="social-links">
              <a
                href="https://github.com/ez-programmer4"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub className="social-icon" />
              </a>
              <a
                href="https://linkedin.com/in/ezedin-ebrahim-11a01732b"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin className="social-icon" />
              </a>
              <a
                href="https://twitter.com/#"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaTwitter className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
