import React from 'react';

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
          <a href="https://aquarium-app.herokuapp.com/" target="blank" >View App</a><br></br>
          <a href="https://github.com/jasonrowland86/Aquarium" target="blank" >View on GitHub</a>
          <div className="project-gif"></div>
          <img className="project-img" src="https://s3.us-east-2.amazonaws.com/jasonrowland.co/aquarium-app.png"></img>
        </div>
      </div>
    </div>
  )
}

export default Project3;
