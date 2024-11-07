// src/components/Education.js
import React from 'react';
import '../styles/Education.css';

function Education() {
  const educationHistory = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Cleveland State University, Cleveland, Ohio",
      duration: "Expected December 2024",
      details: "GPA: 3.76/4.00",
      coursework: "Data Structures, Web Development, Database Management, Cloud Computing, AI, ML"
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Mahatma Gandhi Institute of Technology",
      duration: "2018 - 2022",
      details: "Graduated with Honors"
    }
  ];

  return (
    <section id="education" className="education">
      <h2>Education</h2>
      {educationHistory.map((edu, index) => (
        <div key={index} className="education-item">
          <h3>{edu.degree}</h3>
          <p className="institution-duration">
            {edu.institution} | {edu.duration}
          </p>
          <p>{edu.details}</p>
          {edu.coursework && <p><strong>Coursework:</strong> {edu.coursework}</p>}
        </div>
      ))}
    </section>
  );
}

export default Education;
