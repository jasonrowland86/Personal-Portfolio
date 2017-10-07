import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return(
    <div className="projects">
      <div className="project">
        <Link to="/project1">Project 1</Link>
      </div>
      <div className="project p-2">
        <Link to="/project2"></Link>
      </div>
      <div className="project">
        <Link to="/project3">Project 3</Link>
      </div>
      <div className="project">
        <Link to="/project4">Project 4</Link>
      </div>
    </div>
  )
}

export default Projects;
