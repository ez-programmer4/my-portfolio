import React from "react";
import "./about.css"; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* Profile Picture */}
        <img
          src="https://via.placeholder.com/150" // Replace with your image URL
          alt="Profile"
          className="profile-picture"
        />
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
          Hi, I'm Ezedin, a passionate Full Stack Developer specializing in
          building user-friendly web applications with modern technologies like
          React and Node.js.
        </p>
      </div>
    </div>
  );
};

export default About;
