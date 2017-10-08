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
          <h2>
              I moved to New York from Houston in 2009. I worked as a bike messenger
            for several years before becoming a kettlebell trainer and property
            rennovator in Detroit. I am now looking to build new things in the world of web
            development. I am fascinated by many things and like to know the how and why.
          </h2>
        <Link to="/" className="back">Back</Link>
        </div>
      </div>
    </div>
  )
}

export default About;
