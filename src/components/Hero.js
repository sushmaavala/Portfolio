// src/components/Hero.js
import React from 'react';
import '../styles/Hero.css';
import profileImage from '../assets/Bheem.png'; // Import your image

function Hero() {
  return (
    <section id="home" className="hero">
      <img src={profileImage} alt="Bheem Reddy Gopanpally" className="profile-picture" /> {/* Add image */}
      <h1>Hi,I am Bheem Reddy Gopanpally</h1>
      <p>A passionate software developer specializing in Java and frontend technologies.</p>
    </section>
  );
}

export default Hero;
