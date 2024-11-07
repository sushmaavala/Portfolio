// src/components/Navbar.js
import React from 'react';
// src/components/Navbar.js
import '../styles/Navbar.css';
 // Styling we will add soon

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">My Portfolio</h1>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
