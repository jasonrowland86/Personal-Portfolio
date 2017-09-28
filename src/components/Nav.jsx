import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <div className="nav">
        <a className="nav-heading" href="/">Jason Rowland</a>
        <ul className="nav-list">
            <li><Link to="/about">About</Link></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
  )
}

export default Nav;
