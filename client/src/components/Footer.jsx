import React from 'react';
import FontAwesome from 'react-fontawesome';

const Footer = () => {
  return(
    <footer>
      <div className="social-media-links">
        <a href="https://www.linkedin.com/in/jason-rowland86/" target="blank"><FontAwesome className="icon" name="linkedin" size="2x"/></a>
        <a href="https://github.com/jasonrowland86" target="blank"><FontAwesome className="icon" name="github" size="2x"/></a>
        <a href="mailto:jason@jasonrowland.co"><FontAwesome className="icon" name="envelope" size="2x"/></a>
      </div>
    </footer>
  )
}

export default Footer;
