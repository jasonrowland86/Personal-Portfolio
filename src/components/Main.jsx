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
              <h2>Web Developer | <br className="break"></br>New York City</h2>
            </div>
          </div>
        </div>

        <div className="hr">
          <hr></hr>
        </div>

        <About />
        <Contact />
        <WebIcons />

      </div>
    )
  }

export default Main;
