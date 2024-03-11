import React from 'react';
import './HomePage.css'

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="container">
        <div className="intro">
          <img src="./src/assets/images/20190823_194954.jpg" alt="Alissa Patterson" className="profile-pic" />
          <div className="text-content">
            <h1>Welcome to My Portfolio</h1>
            <p>Welcome to my journey into the realm of technology! My name is Alissa Patterson and as an emerging Full Stack Developer, 
                I’ve begun to establish a strong foundation with the MERN stack (MongoDB, Express.js, React.js, Node.js), enriched by my demonstrated understanding of JavaScript, MySQL, and Apollo. 
                My venture into this field was significantly propelled forward upon completing the rigorous Full Stack Bootcamp at the University of Utah. 
                This transformative experience marked the beginning of my journey from curiosity to capability in the development world.</p>
          </div>
        </div>      
      </div>
    </div>
  );
};

export default HomePage;
