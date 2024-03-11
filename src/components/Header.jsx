// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have CSS for styling your header

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
