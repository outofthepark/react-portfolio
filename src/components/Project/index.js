import React from 'react';

const Project = ({projects}) => {
  
    return (
    <div className="projects">
        <div className="portfolio-links-div">
        {projects.map(project => (
            <div className="portfolio-link-div">
                <h2>{project.title}</h2>
                <div className="portfolio-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-link">Git Repository</a>
                <a href={project.deployment} target="_blank" rel="noopener noreferrer" className="text-link">Deployment</a>
                </div>
                <a href={project.deployment} target="_blank" rel="noopener noreferrer"><img src={project.img} alt={project.title} className="portfolio-img" /></a>
            </div>
        ))}
        </div>
    </div>
  );
};

export default Project;

