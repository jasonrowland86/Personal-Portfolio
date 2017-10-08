import React from 'react';
import Projects from './Projects';

const Main = () => {
    return(
      <div className="main">
        <div className="title">
          <div className="content">
            <div className="name">
              <h1>Jason Rowland</h1>
            </div>
            <div className="statement">
              <h2>Web Developer | New York City</h2>
            </div>
          </div>
        </div>
        <Projects />
      </div>
    )
  }

export default Main;
