import React from "react";
import "./Projects.css"; // Import the CSS file

const Projects = () => {
  const projects = [
    {
      title: "Quiz App",
      description:
        "An interactive quiz application built with React, allowing users to test their knowledge on various topics.",
      link: "https://quiz-app-k622.onrender.com/",
    },
    {
      title: "Note Manager",
      description:
        "A user-friendly application for managing notes, featuring a modern UI and secure storage options.",
      link: "https://note-manager1.onrender.com",
    },
    {
      title: "Contact Manager",
      description:
        "A web application designed to manage and organize contacts efficiently.",
      link: "https://contact-manager-qwyz.onrender.com",
    },
    {
      title: "Khalid's Portfolio",
      description:
        "A personal portfolio website showcasing my skills, projects, and experience.",
      link: "https://khalid-s-portfolio.onrender.com",
    },
    {
      title: "Irshad Books Bot",
      description:
        "A Telegram bot that provides access to a variety of book resources and recommendations.",
      link: "https://t.me/irshadbooksbot",
    },
  ];

  return (
    <div className="projects-container">
      <div className="projects-content">
        <h1 className="projects-title">My Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-button">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
