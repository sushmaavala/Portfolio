// src/components/Projects.js
import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projectList = [
    {
      title: "Flex Sensor-Based Glove for Deaf and Mute",
      description: "An assistive glove using flex sensors to convert hand gestures into digital signals with 90% accuracy."
    },
    {
      title: "Payroll Management System",
      description: "A payroll management system with a centralized database, automating salary processing for 50+ employees, reducing errors by 80%."
    }
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
