import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          My Portfolio
        </Link>

        {/* Mobile Menu Toggle */}
        <div
          className="mobile-menu-icon"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </div>

        {/* Navbar Links */}
        <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" className="navbar-link" onClick={toggleMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="navbar-link"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="navbar-link"
              onClick={toggleMobileMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link to="/blog" className="navbar-link" onClick={toggleMobileMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="navbar-link"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
