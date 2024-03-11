import React from 'react';
import './ProjectsPage.css'; 


const projects = [
  {
    imageUrl: './src/assets/images/Intellistock.png',
    repoUrl: 'https://github.com/akidd15/IntelliStock',
  },
  {
    imageUrl: './src/assets/images/Google Book Search Engine.png',
    repoUrl: 'https://github.com/Apatterson32/GoogleBookEngine',
  },
  {
    imageUrl: './src/assets/images/README Generator.png',
    repoUrl: 'https://github.com/Apatterson32/readme-be-done',
  },
  {
    imageUrl: './src/assets/images/ParksPlanner.png',
    repoUrl: 'https://github.com/Apatterson32/ParksPlanner',
  },
  {
    imageUrl: './src/assets/images/Weather App.png',
    repoUrl: 'https://github.com/Apatterson32/butterfly-wings',
  },
];

const ProjectsPage = () => {
  return (
    <div className="projectsContainer">
      {projects.map((project, index) => (
        <div className="projectItem" key={index}>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <img src={project.imageUrl} alt={project.title} className="projectImage" />
            <div className="projectTitle">{project.title}</div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
