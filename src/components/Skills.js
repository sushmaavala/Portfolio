// src/components/Skills.js
import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skills = [
    "Java", "JavaScript", "Python", "TypeScript", "SQL",
    "HTML", "CSS", "AJAX", "ReactJS", "Angular", 
    "Redux", "Spring Boot", "AWS", "Docker", "Kubernetes",
    "Jenkins", "CI/CD", "MongoDB", "MySQL", "PostgreSQL"
  ];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
