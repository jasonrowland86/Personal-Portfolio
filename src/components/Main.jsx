import React from 'react';
import About from './About';
import WebIcons from './WebIcons';
import Contact from './Contact';

const Main = () => {
    return(
      <div className="main">
        <div className="title">
          <div className="content">
            <div className="name">
              <h1>Jason Rowland</h1>
            </div>
            <div className="statement">
              <h2>Web Developer <span className="hide-on-mobile">|</span> <br className="break"></br><span className="inline">New York City</span></h2>
            </div>
          </div>
        </div>

        <div className="hr">
          <hr></hr>
        </div>
        <About />
        <WebIcons />
        <Contact />
      </div>
    )
  }

export default Main;
