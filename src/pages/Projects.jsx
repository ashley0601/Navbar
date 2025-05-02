// src/pages/Projects.js
import React from 'react';
import './PageStyles.css';

export default function Projects() {
  return (
    <div className="page projects">
      <h1>Featured Projects</h1>
      <p className="projects-intro">
        Check out some of my recent projects. Simple yet effective solutions built with modern technologies.
      </p>

      <div className="project-list">
        <div className="project-card enhanced">
          <h3>Portfolio Website</h3>
          <p>A clean and modern personal portfolio built with React, featuring smooth animations and responsive design.</p>
          <div className="project-links">
            <a href="https://ashfall.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-btn">💻</a>
          </div>
        </div>

        <div className="project-card enhanced">
          <h3> Student Portal</h3>
          <p> A fully-featured **Student Portal** that allows students to register for courses, submit assignments, track grades, and communicate with instructors. Built with React for a seamless frontend experience and Node.js/Express for backend management.</p>
          <div className="project-links">
            <a href="https://github.com/ashley0601/Student-Portal" target="_blank" rel="noopener noreferrer" className="project-btn">💻</a>
          </div>
        </div>

        <div className="project-card enhanced">
          <h3>My BookVault</h3>
          <p>A Library Management System for efficiently managing books, members, and transactions, built with **React** for the frontend and **Node.js/Express** for the backend.
          </p>
          <div className="project-links">
            <a href="https://mybookvault.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-btn">💻</a>
          </div>
        </div>
      </div>
    </div>
  );
}
