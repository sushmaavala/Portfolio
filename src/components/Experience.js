// src/components/Experience.js
import React from 'react';
import '../styles/Experience.css';

function Experience() {
  const experiences = [
    {
      jobTitle: "Full Stack Java Developer",
      company: "Tata Consultancy Services, India",
      duration: "Sep 2019 – Jan 2024",
      responsibilities: [
        "Developed a dashboard for user consent validation, reducing validation time by 20%.",
        "Automated testing with Playwright and TypeScript, reducing manual testing time by 40%.",
        "Integrated SonarQube into CI/CD, improving code quality by 25%.",
        "Enhanced Dealer Check-In workflow, improving dealer satisfaction by 20%."
      ]
    },
    {
      jobTitle: "Graduate Assistant",
      company: "Cleveland State University",
      duration: "Aug 2023 – May 2024",
      responsibilities: [
        "Assisted the professor in researching and drafting academic book chapters.",
        "Conducted data analysis for research projects, providing valuable insights.",
        "Managed academic materials and student queries, ensuring smooth operations."
      ]
    },
    {
      jobTitle: "Resident Assistant",
      company: "Shorelight, Cleveland State University",
      duration: "May 2024 - Present",
      responsibilities: [
        "Resolved 50+ resident issues, improving student satisfaction by 50%.",
        "Handled over 100 accommodation inquiries with professionalism.",
        "Organized social events, fostering a sense of community among residents."
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <h3>{exp.jobTitle}</h3>
          <p className="company-duration">{exp.company} | {exp.duration}</p>
          <ul>
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;
