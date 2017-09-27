import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return(
    <div className="Projects">
      <div className="projects">
        <div className="project">
          <Link className="project-link" to="/project1">Project 1</Link>
        </div>
        <div className="project">
          <Link className="project-link" to="/project2">Project 2</Link>
        </div>
        <div className="project">
          <Link className="project-link" to="/project3">Project 3</Link>
        </div>
        <div className="project">
          <Link className="project-link" to="/project4">Project 4</Link>
        </div>
      </div>
    </div>
  )
}

export default Projects;
