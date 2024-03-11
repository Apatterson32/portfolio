import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="footer">
      <p>Copyright &copy; {currentYear} Alissa Patterson. All rights reserved.</p>
    </footer>
  );
};

export default Footer;


