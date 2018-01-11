import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <div className="nav">

        <ul className="nav-list">
            <li><a href="http://jasonrowland.co">&frasl;</a></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
        </ul>
    </div>
  )
}

export default Nav;
