import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import "./home.css"; // Import the CSS file

const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Title */}
      <motion.h1
        className="home-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Hi, I'm Ezedin
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="home-subtitle"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        Full Stack Developer | Building Scalable Web Applications
      </motion.p>

      {/* Button Group */}
      <motion.div
        className="button-group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
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
      </motion.div>
    </motion.div>
  );
};

export default Home;
