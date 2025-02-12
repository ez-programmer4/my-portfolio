import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-section-title">About Us</h3>
          <p className="footer-section-text">
            We are a company dedicated to providing the best services to our
            customers. Our mission is to make your life easier and more
            enjoyable.
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="/" className="footer-link">
                Home
              </a>
            </li>
            <li>
              <a href="/services" className="footer-link">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="footer-link">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="footer-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Contact Us</h3>
          <p className="footer-section-text">Email: info@example.com</p>
          <p className="footer-section-text">Phone: +123 456 7890</p>
          <p className="footer-section-text">
            Address: 123 Main St, City, Country
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-section-title">Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
