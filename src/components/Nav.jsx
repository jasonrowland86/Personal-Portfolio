import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <div className="nav">
        <a className="nav-heading" href="/"></a>
        <ul className="nav-list">
            <li><Link to="/about">About</Link></li>
        </ul>
    </div>
  )
}

export default Nav;
