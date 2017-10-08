import React from 'react';
import Projects from '../Projects';

const Project1 = () => {
  return(
    <div className="main">
      <div className="title">
        <div className="content">
          <div className="project-info">
            <h2>Simon</h2>
            <br></br>
            <h3>The classic game Simon. Made with Javascript.</h3>
            <h3>HTML, CSS, Javascript</h3>
            <a href="http://jasonrowland-simongame.bitballoon.com/" target="blanks">View</a>
          </div>
          <div className="project-gif"></div>
        </div>
      </div>
      <Projects />
    </div>
  )
}

export default Project1;
