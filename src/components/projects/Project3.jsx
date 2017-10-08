import React from 'react';
import Projects from '../Projects';

const Project3 = () => {
  return(
    <div className="main">
      <div className="title">
        <div className="content">
          <h2>Aquarium App</h2>
          <br></br>
          <h3>A Ruby on Rails CRUD web app that uses CSS animations to make an aquarium
          of fish swim around.</h3>
          <h3>HTML, CSS, Javascript, Ruby on Rails</h3>
          <a href="https://aquarium-app.herokuapp.com/" target="blank" >View</a>
          <div className="project-gif"></div>
        </div>
      </div>
      <Projects />
    </div>
  )
}

export default Project3;
