import React from 'react';
import './ContactPage.css'; // Ensure you have this CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {
  return (
    <div className="contactInfoContainer">
      <h2>Contact Me</h2>
      <ul className="contactList">
        <li>
          <a href="https://github.com/Apatterson32" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/alissa-patterson-453864285/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:pattersonal10@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactPage;
