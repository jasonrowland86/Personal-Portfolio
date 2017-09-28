import React from 'react';
import { Link } from 'react-router-dom';

const Projects = (props) => {
  return(
    <div className="Projects">
      <div className="projects">
        <div className="project" data-id="project1" onClick={this.props.handleClick('project1')}>
          Project 1
        </div>
        <div className="project" data-id="project2" onClick={this.props.handleClick('project2')}>
          Project 2
        </div>
        <div className="project" data-id="project3" onClick={this.props.handleClick('project3')}>
          Project 3
        </div>
        <div className="project" data-id="project4" onClick={this.props.handleClick('project4')}>
          Project 4
        </div>
      </div>
    </div>
  )
}

export default Projects;
