import React from 'react';
import './ProjectsPage.css'; 
import IntelliStockImage from '../assets/images/Intellistock.png';
import GoogleBookSearchEngineImage from '../assets/images/Google Book Search Engine.png';
import READMEGeneratorImage from '../assets/images/README Generator.png';
import ParksPlannerImage from '../assets/images/ParksPlanner.png';
import WeatherAppImage from '../assets/images/Weather App.png';


const projects = [
  {
    image: IntelliStockImage,
    repoUrl: 'https://intellistock-production.up.railway.app/',
  },
  {
    image: GoogleBookSearchEngineImage,
    repoUrl: 'https://book-search-engine-production-9f81.up.railway.app/',
  },
  {
    image: READMEGeneratorImage,
    repoUrl: 'https://github.com/Apatterson32/readme-be-done',
  },
  {
    image: ParksPlannerImage,
    repoUrl: 'https://leucisticboi.github.io/ParksPlanner/',
  },
  {
    image: WeatherAppImage,
    repoUrl: 'https://apatterson32.github.io/butterfly-wings/',
  },
];

const ProjectsPage = () => {
  return (
    <div className="projectsContainer">
      {projects.map((project, index) => (
        <div className="projectItem" key={index}>
          <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.title} className="projectImage" />
            <div className="projectTitle">{project.title}</div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectsPage;
