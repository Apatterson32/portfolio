// AboutPage.jsx
import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="aboutPage" style={{padding: '20px', maxWidth: '800px', margin: 'auto'}}>
      <h1>About Me</h1>
      <section>
        <h2>Collaboration and Leadership</h2>
        <p>In my foray into tech, I've embraced not only the technical challenges but also the collaborative dynamics of project development. When working in groups, I frequently found myself naturally stepping into the project management role. This was not just about overseeing the project's direction but about energizing and guiding our daily starts with clarity and purpose. My leadership was also instrumental in facilitating the orderly conclusion of our workdays, ensuring milestones were met with consistency and team morale remained high. These experiences have honed my leadership skills, particularly in communication and organization, allowing me to contribute significantly to team dynamics and project success.</p>
      </section>
      <section>
        <h2>Continuous Growth</h2>
        <p>The Full Stack Bootcamp was merely the starting point. It instilled in me a deep-seated passion for technology and an insatiable appetite for continuous learning and professional growth. With the tech industry's dynamic and ever-evolving landscape, I am committed to staying adaptable, expanding my knowledge, and embracing new challenges head-on. I eagerly anticipate the opportunities to grow as a developer, undertake new projects, and make meaningful contributions to the field.</p>
      </section>
    </div>
  );
};

export default AboutPage;