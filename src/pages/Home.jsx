import React from 'react';
import './Home.css';
import profilePic from '../assets/ash_bg.png'

export default function Home() {
  return (
    <div className="home-page">
      <div className="home-content">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <h1>Hello, I'm a Front-End Developer</h1>
        <p className="sub-text">
          I build interactive websites with clean design, responsive layouts, and seamless user experiences.
        </p>
        <p className="tagline">
          💻 React | 🎨 CSS | 🚀 Performance Focused
        </p>

        <div className="home-cards">
          <div className="card">
            <h3>Fast Development</h3>
            <p>I rapidly build and deploy apps using modern frameworks like React.</p>
          </div>
          <div className="card">
            <h3>Responsive Design</h3>
            <p>Sites that look great on desktops, tablets, and phones.</p>
          </div>
          <div className="card">
            <h3>Clean Code</h3>
            <p>Readable, maintainable code with best practices in mind.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
