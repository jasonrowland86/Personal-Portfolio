import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <div className="nav">
      <div className="nav-left">
        <h1>jr</h1>
      </div>
      <div className="nav-hack"></div>
      <div className="nav-right">
        <ul className="nav-list">
            <li><a href="http://jasonrowland.co">&frasl;</a></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;
