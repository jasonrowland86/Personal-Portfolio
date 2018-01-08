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
            Born and raised in Houston Texas. I moved to New York City in 2009
            where I was a bike messenger and kettlebell trainer before I found
            web development. I have a proclivity for efficiency and a love for
            design that create a natural passion for front-end development and
            user experience.
            <br></br>
            <br></br>
            <div className="center-on-mobile">I am currently seeking opportunities in Austin TX.</div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;
