import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      navPosition: {
        display: ''
      },
      isTop: true
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 10;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
      this.handleScroll();
    });
  }

  handleScroll() {
    if(!this.state.isTop) {
      this.setState({
        navPosition: {
          transition: '.5s cubic-bezier(0.25,0.1,0.25,1)',
          transform: 'translateY(-100%)',
        }
      });
    } else {
      this.setState({
        navPosition: {
          transition: '.5s cubic-bezier(0.25,0.1,0.25,1)',
          transform: 'translateY(0%)',
        }
      });
    }
  }

  render() {
    return(
      <div className="nav" style={this.state.navPosition}>
        <div className="nav-left">
          <ul>
            <li><a href="http://jasonrowland.co">jr</a></li>
          </ul>
        </div>
        <div className="nav-hack"></div>
        <div className="nav-right">
          <ul className="nav-list">
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/resume">Resume</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Nav;
