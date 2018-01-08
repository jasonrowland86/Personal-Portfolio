import React from 'react';
import { Link } from 'react-router-dom';
import Project1 from './projects/Project1';
import Project2 from './projects/Project2';
import Project3 from './projects/Project3';
import Project4 from './projects/Project4';
import Project5 from './projects/Project5';

const Projects = () => {
  return(
    <div className="project-container">
      <div id="p-1" className="project-component">
        <Project1 />
      </div>
      <div id="p-2" className="project-component">
        <Project2 />
      </div>
      <div id="p-3" className="project-component">
        <Project3 />
      </div>
      <div id="p-4" className="project-component">
        <Project4 />
      </div>
      <div id="p-5" className="project-component">
        <Project5 />
      </div>

      <div className="flex"><h1>Projects I've created or contributed to:</h1></div>
      <div className="projects">
        <div className="project">
          <Link to="/project5"><img className="project-img" src="https://s3.us-east-2.amazonaws.com/jasonrowland.co/wholesky-app.png"></img></Link>
        </div>
        <div className="project">
          <Link to="/project3"><img className="project-img" src="https://s3.us-east-2.amazonaws.com/jasonrowland.co/aquarium-app.png"></img></Link>
        </div>
        <div className="project">
          <Link to="/project2"><img className="project-img" src="https://s3.us-east-2.amazonaws.com/jasonrowland.co/fight-pick-app.png"></img></Link>
        </div>
        <div className="project">
          <Link to="/project4"><img className="project-img" src="https://s3.us-east-2.amazonaws.com/jasonrowland.co/okurio-app.png"></img></Link>
        </div>
        <div className="project">
          <Link to="/project1"><img className="project-img" src="https://s3.us-east-2.amazonaws.com/jasonrowland.co/simon.png"></img></Link>
        </div>
      </div>
    </div>
  )
}

export default Projects;
