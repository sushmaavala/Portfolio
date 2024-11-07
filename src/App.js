// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Summary from './components/Summary';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './styles/Navbar.css';
import './styles/Hero.css';
import './styles/Summary.css';
import './styles/About.css';
import './styles/Skills.css';
import './styles/Experience.css';
import './styles/Education.css';
import './styles/Projects.css';
import './styles/Contact.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Summary />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
