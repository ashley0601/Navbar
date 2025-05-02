// src/pages/About.js
import React from 'react';
import './PageStyles.css';

export default function About() {
  return (
    <div className="page about">
      <h1>About Me</h1>
      <p>
        I'm a passionate web developer with a strong foundation in front-end technologies and a growing interest in full-stack development. I specialize in building responsive, accessible, and user-friendly web applications.
      </p>

      <div className="about-cards">
        <div className="card animated-card">
          <h3>Experience</h3>
          <p>3+ years working on real-world front-end projects using React and modern JavaScript.</p>
        </div>
        <div className="card animated-card">
          <h3>Skills</h3>
          <p>HTML, CSS, JavaScript, React, Node.js, MongoDB, Git, Figma</p>
        </div>
        <div className="card animated-card">
          <h3>Interests</h3>
          <p>Coding, design systems, UI/UX research, and building passion projects.</p>
        </div>
      </div>
    </div>
  );
}

