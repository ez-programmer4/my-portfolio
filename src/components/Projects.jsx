import React from "react";
import "./Projects.css"; // Import the CSS file for styling
import sc1Image from "./sc1.png"; // Import project images
import sc2Image from "./sc2.png";
import sc3Image from "./sc3.png";
import sc4Image from "./sc4.png";
import sc5Image from "./sc5.png";
import { FaExternalLinkAlt } from "react-icons/fa"; // Import icons from React Icons

const Projects = () => {
  // Define an array of project objects with title, description, link, and image
  const projects = [
    {
      title: "Quiz App",
      description:
        "An interactive quiz application built with React, allowing users to test their knowledge on various topics.",
      link: "https://quiz-app-k622.onrender.com/",
      image: sc1Image,
    },
    {
      title: "Note Manager",
      description:
        "A user-friendly application for managing notes, featuring a modern UI and secure storage options.",
      link: "https://note-manager1.onrender.com",
      image: sc2Image,
    },
    {
      title: "Contact Manager",
      description:
        "A web application designed to manage and organize contacts efficiently.",
      link: "https://contact-manager-qwyz.onrender.com",
      image: sc3Image,
    },
    {
      title: "Khalid's Portfolio",
      description:
        "A personal portfolio website showcasing my skills, projects, and experience.",
      link: "https://khalid-s-portfolio.onrender.com",
      image: sc4Image,
    },
    {
      title: "Irshad Books Bot",
      description:
        "A Telegram bot that provides access to a variety of book resources and recommendations.",
      link: "https://t.me/irshadbooksbot",
      image: sc5Image,
    },
  ];

  return (
    <section className="projects-section">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                className="project-image"
                loading="lazy" // Optimize image loading
              />
              <div className="project-overlay">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaExternalLinkAlt className="project-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
