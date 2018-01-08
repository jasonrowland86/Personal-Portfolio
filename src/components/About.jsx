import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return(
    <div className="about-main">
      <div className="headshot">
        <img className="profile-img" src="https://s3.us-east-2.amazonaws.com/jasonrowland.co/headshot1.JPG"/>
      </div>
      <div className="about">
        <div className="about-content">
          <p>
            I uprooted myself to New York City from my home town of Houston in 2009.
            I rode thousands of miles as a bike messenger, earned two certifications
            in kettlebell training, and purchased and remodeled homes in Detroit
            before finding a natural interest in programming. I attended General Assembly's
            Web Development Immersive the summer of 2017. When I'm not working on
            a project or tinkering with code I can be found swinging kettlebells
            and eating ice cream. 
            <br></br>
            <br></br>
            I'm planning to move back to Texas and currently seeking opportunities
            in Austin.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
