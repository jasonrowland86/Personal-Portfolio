import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = () => {
  return(
    <footer>
      <a href="https://www.linkedin.com/in/jason-rowland86/" target="blank"><FontAwesome className="icon" name="linkedin" size="1x"/></a>
      <a href="https://github.com/jasonrowland86" target="blank"><FontAwesome className="icon" name="github" size="1x"/></a>
      <a href="mailto:jasonrowland@jasonrowland.co"><FontAwesome className="icon" name="envelope" size="1x"/></a>
    </footer>
  )
}

export default Footer;
