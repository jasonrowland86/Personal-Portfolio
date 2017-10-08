import React from 'react';
import Projects from '../Projects';

const Project2 = () => {
  return(
    <div className="main">
      <div className="title">
        <div className="content">
          <h2>UFC Fight Pick App</h2>
          <br></br>
          <h3>A web app that uses the Express MVC and the isomorphic-fetch API
          to let users search for and compare two fighters. A user can make and
          save their fight picks for an up coming event.</h3>
          <h3>HTML, Node.js, Express, PostgreSQL</h3>
          <a href="https://fightpickapp.herokuapp.com/" target="blank" >View</a>
          <div className="project-gif"></div>
        </div>
      </div>
      <Projects />
    </div>
  )
}

export default Project2;
