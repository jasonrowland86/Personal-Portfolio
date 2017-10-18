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
            An 8th generation Texan, I uprooted myself to New York City in 2009.
            Since then I've put in over 20,000 miles of riding as a bike
            messenger, obtained two certifications in kettlebell training,
            and purchased and remodeled homes in Detroit and found my interest in
            programming. In my spare time I can be found pondering the world through
            the internet or swinging some kettlebells.
            <br></br>
            <br></br>
            Currently seeking opportunities as a Web Developer in Austin Texa, as
            I plan for a move back.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
