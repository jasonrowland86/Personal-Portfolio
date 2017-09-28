import React, { Component } from 'react';
import Header from './Header';
import Project1 from './projects/Project1';
import Project2 from './projects/Project2';
import Project3 from './projects/Project3';
import Project4 from './projects/Project4';
import Projects from './Projects';

class Main extends Component {
  constructor(props) {
    super(props);
    this.State = {
      render: 'header',
    }
    this.handleClick = this.handleClick.bind(this);
    this.renderCurrent = this.renderCurrent.bind(this);
  }

  // setCurrent(content) {
  //   console.log('click');
  //   this.setState({
  //     render: content,
  //   })
  // }

  renderCurrent() {
    switch(this.State.render) {
      case 'header':
        return <Header />;
        break;
      case 'project1':
        return <Project1 />
        break;
      case 'project2':
        return <Project2 />
        break
      case 'project3':
        return <Project3 />
        break;
      case 'project4':
        return <Project4 />
        break;
      default:
        break;
    }
  }

  handleClick(e) {
    e.preventDefault();
    let project = e.target.className;
    this.setState({
      render: project,
    });
  }

  render() {
    return(
      <div className="main">
        {this.renderCurrent()}
        <div className="Projects">
          <div className="projects">
            <div className="project" onClick={this.handleClick}>
              Project 1
            </div>
            <div className="project" onClick={this.handleClick}>
              Project 2
            </div>
            <div className="project" onClick={this.handleClick}>
              Project 3
            </div>
            <div className="project" onClick={this.handleClick}>
              Project 4
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Main;
