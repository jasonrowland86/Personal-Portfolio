import React from 'react';
import FontAwesome from 'react-fontawesome';
import projects from '../projects.js';
import Project from './Project';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projects,
      project: {},
      clicked: false,
      showProject: {
        display: 'none'
      },
      hover: false
    }
    this.handleClicked = this.handleClicked.bind(this);
  }

  //Handle clicked on project
  handleClicked(e) {
    console.log('Clicked!', e.currentTarget.id);
    if(!this.state.clicked) {
      this.setState({
        clicked: true,
        id: e.currentTarget.id,
      });
    }
    //Call on click to hide project links and
    //to render the selected project. See below.
    this.showOrHideProjects();
    this.renderProject(e);
  }

  //Hide projects with css animation. Called on click.
  showOrHideProjects() {
    if(this.state.clicked) {
      this.setState({
        show: {
          display: 'block'
        }
      });
    } else {
      this.setState({
        show: {
        display: 'none'
        },
        index: 0
      });
    }
  }

  showProjects() {
    this.setState({
      show: {
        display: 'block'
      },
      clicked: false,
      id: '',
      showProject: {
        display: "none"
      }
    });
  }

  //Render the selected project
  renderProject(e) {
    console.log('Rendering project:', e.currentTarget.id);
    let project = this.selectProject(e.currentTarget.id);
    this.scrolltoTop();
    console.log(project);
    this.setState({
      project: project,
      showProject: {
        // display: "block",
        opacity: 1,
        transition: 'opacity .5s ease-in-out',
      },
      hide: {
        opacity: 0,
        margin: 0,
      }
    })
    // this.scrolltoTop();
    // console.log('initial index is ' + this.state.index);
  }

  //For selected project render ^^^^
  scrolltoTop() {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
  }

  //Specifically get the project by matching the
  //project image id to the project id. Return in
  //renderProjectData function above.
  selectProject(id) {
    for (var i=0; i < this.state.projects.length; i++) {
      if (this.state.projects[i].id === id) {
        return this.state.projects[i];
      }
    }
  }

  //Render all project thumbnails to the component
  renderProjectImages() {
    return (
      <div className='fade' style={this.state.show}>
        <div className="flex"><h1>Projects I've created or contributed to:</h1></div>
        <div className="projects">
          {this.state.projects.map((project) =>(
            <div onClick={this.handleClicked} className="project" id={project.id}>
              <img className="project-img" src={project.data.images[0]} alt="Selected Project"></img>
              <div className="view-project"><h1>View Project</h1></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  render() {
    let count = 1;
    return(
      <div className="projects-component">

        <div className="projects-container">
          {this.renderProjectImages()}
        </div>

        <div className="numbered-links fade">
          <div className="links">
            {this.state.projects.map((project) =>(
              <h1 onClick={this.handleClicked} id={project.id}>{count++}</h1>
            ))}
          </div>
          <h1 className="select-project" style={this.state.hide}>Select a Project</h1>
        </div>

        <div className="project-container fade" style={this.state.showProject}>
          <Project project={this.state.project} showProjects={this.showProjects.bind(this)} key={this.state.projects.id}/>
        </div>

        <div className="portfolio-link" style={this.state.show}>
          <h1><a href="https://github.com/jasonrowland86/Personal-Portfolio" target="blanks">View this site on GitHub here</a></h1>
        </div>

      </div>
    )
  }
}

export default Projects;
