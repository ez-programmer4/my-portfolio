import React from "react";
import "../app.css"; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        {/* Profile Picture */}
        <img
          src="../assets/20240920_105858.jpg" // Replace with your image URL
          alt="Profile"
          className="profile-picture"
        />
        <h1 className="home-title">Hi, I'm Ezedin</h1>
        <p className="home-subtitle">
          Full Stack Developer | Building Scalable Web Applications
        </p>
        <div className="button-group">
          <a href="#projects" className="home-button">
            View My Work
          </a>
          <a
            href="https://github.com/ez-programmer4" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="home-button"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ezedin-ebrahim-11a01732b" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="home-button"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
