import React from 'react';
import './Intro.css';

function Intro() {
  return (
    <section className="intro">
      <div className="intro-content">
        <div className="intro-text">
          <h1 className="typing-text">Welcome to My Portfolio</h1>
          <p>I'm Annmariya Wilson, a MEARN Stack Developer. Explore my work and get in touch!</p>
          <p>
            As a MEARN stack (MongoDB, Express, React, Node.js) developer, I create dynamic, user-friendly web applications. I’m passionate about solving problems with innovative solutions and delivering high-quality projects.
          </p>
        </div>
        <div className="intro-image">
          <img src="https://user-images.githubusercontent.com/74038190/221352975-94759904-aa4c-4032-a8ab-b546efb9c478.gif" alt="Animated GIF" />
        </div>
      </div>
    </section>
  );
}

export default Intro;
