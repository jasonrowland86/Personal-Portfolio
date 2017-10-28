import React from 'react';

const Project2 = () => {
  return(
    <div className="main">
      <div className="title">
        <div className="content">
          <h2>UFC Fight Pick App</h2>
          <br></br>
          <h3>A web app that uses the Express MVC and the isomorphic-fetch API
          to let users search for and compare two fighters. A user can make and
          save their fight picks for an up coming event.
          </h3>
          <h3>HTML, CSS, Javascript, Node.js, Express, PostgreSQL</h3>
          <a href="https://fightpickapp.herokuapp.com/" target="blank" >View App</a><br></br>
          <a href="https://github.com/jasonrowland86/Project-2-App" target="blank" >View on GitHub</a>
          <div className="project-gif"></div>
          <img className="project-img" src="https://s3.us-east-2.amazonaws.com/jasonrowland.co/fight-pick-app.png"></img>
        </div>
      </div>
    </div>
  )
}

export default Project2;
