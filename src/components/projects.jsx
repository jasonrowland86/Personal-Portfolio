import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return(
    <div className="project-container">
      <div className="projects">
        <div className="project">
          <Link to="/project1"><img className="project-img" src="https://s3.us-east-2.amazonaws.com/jasonrowland.co/simon.png"></img></Link>
        </div>
        <div className="project p-2">
          <Link to="/project2"><img className="project-img" src="https://s3.us-east-2.amazonaws.com/jasonrowland.co/fight-pick-app.png"></img></Link>
        </div>
        <div className="project">
          <Link to="/project3"><img className="project-img" src="https://s3.us-east-2.amazonaws.com/jasonrowland.co/aquarium-app.png"></img></Link>
        </div>
        <div className="project">
          <Link to="/project4"><img className="project-img" src="https://s3.us-east-2.amazonaws.com/jasonrowland.co/okurio-app.png"></img></Link>
        </div>
      </div>
    </div>
  )
}

export default Projects;
