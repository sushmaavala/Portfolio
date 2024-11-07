// src/components/Contact.js
import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-details">
        <p><strong>Mobile:</strong> +1 (216) 808-0159</p>
        <p><strong>Email:</strong> gbheemreddy98@gmail.com</p>
        <p><strong>Address:</strong> 1700E 13th St, Cleveland, OH, 44114</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/bheemreddygopanpally/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/bheemreddygopanpally/</a></p>
      </div>
    </section>
  );
}

export default Contact;
