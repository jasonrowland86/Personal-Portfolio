import React from 'react';
import Projects from '../Projects';

const Project4 = () => {
  return(
    <div className="main">
      <div className="title">
        <div className="content">
          <h2>Okurio Project Managment</h2>
          <br></br>
          <h3>A collaborative project I worked on to build a project management
          web app. Built with React and Express, an admin can create and manage
          a project by assigning tasks to project memebers.</h3>
          <h3>HTML, CSS, Javascript, React, Express,  PostgreSQL</h3>
          <a href="https://github.com/RajisteB/Occurio" target="blank" >View</a>
          <div className="project-gif"></div>
        </div>
    </div>
      <Projects />
    </div>
  )
}

export default Project4;
