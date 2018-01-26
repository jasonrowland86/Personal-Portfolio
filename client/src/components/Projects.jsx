import React from 'react';
import FontAwesome from 'react-fontawesome';
import projects from '../projects.js';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: projects,
      clicked: false,
      show: {
        zIndex: -5,
        opacity: 0,
      }
    }
    this.handleClicked = this.handleClicked.bind(this);
  }

  //Handle clicked on project
  handleClicked(e) {
    console.log('Clicked!', e.currentTarget.id);
    const id = e.currentTarget.id;
    if(!this.state.clicked) {
      this.setState({
        clicked: true,
        id: e.currentTarget.id,
      });
    } else {
      this.setState({
        clicked: false,
        id: '',
      });
    }
    //Call on click to hide project links and
    //to render the selected project. See below.
    this.showOrHideProjects();
    this.renderProjectData(e);
  }

  //Hide projects with css animation. Called on click.
  showOrHideProjects() {
    if(this.state.clicked) {
      this.setState({
        dropDown: {
          transition: '1s cubic-bezier(0.25,0.1,0.25,1)',
          transform: 'translateY(0%)',
        }
      });
    } else {
      this.setState({
        dropDown: {
          transition: '.5s cubic-bezier(0.25,0.1,0.25,1)',
          transform: 'translateY(-130%)',
        }
      });
    }
  }

  //Set state to with corresponding project data.
  renderProjectData(e) {
    console.log('Rendering project:', e.currentTarget.id);
    let project = this.selectProject(e.currentTarget.id);
    if(project) {
      this.setState({
        name: project.data.name,
        description: project.data.description,
        technologies: project.data.technologies,
        image: project.data.image,
        appLink: project.data.appLink,
        githubLink: project.data.githubLink,
        show: {
          zIndex: 0,
          opacity: 1,
          transition: 'opacity .5s ease-in-out',
        },
        hide: {
          opacity: 0,
        }
      })
    } else {
      this.setState({
        show: {
          zIndex: -5,
          opacity: 0,
        },
        hide: {
          opacity: 1,
          transition: 'opacity .5s ease-in-out',
        }
      })
    }
    this.scrolltoTop();
    // setTimeout(this.setState({
    //   dropDown: {
    //     display: 'none'
    //   }
    // }), 3000);
  }

  scrolltoTop() {
    window.scroll({top: 0, left: 0, behavior: 'smooth'});
  }

  //Specifically get the project by matching the
  //project image id to the project id. Return in
  //renderProjectData function above.
  selectProject(id) {
    for (var i=0; i < this.state.projects.length; i++) {
      if (this.state.projects[i].id == id) {
        return this.state.projects[i];
      }
    }
  }

  //Render the projects to the component
  renderProjectImages() {
    return (
            <div style={this.state.dropDown}>
              <div className="flex"><h1>Projects I've created or contributed to:</h1></div>
              <div className="projects">
                {this.state.projects.map((project) =>(
                  <div onClick={this.handleClicked} className="project" id={project.id}>
                    <img className="project-img" src={project.data.image}></img>
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

        <div className="numbered-links">
          <div className="links">
            {this.state.projects.map((project) =>(
              <h1 onClick={this.handleClicked} id={project.id}>{count++}</h1>
            ))}
          </div>
          <h1 className="select-project" style={this.state.hide}>Select a Project</h1>
        </div>

        <div className="project-container" style={this.state.show}>
          <div className="main project-content">
            <FontAwesome onClick={this.handleClicked} className="x-icon" name="times" size="lg"/>
            <div className="selected-project">
              <h1>{this.state.name}</h1>
              <br></br>
              <h2 style={{marginBottom: '1em'}}>{this.state.description}</h2>
              <h3>{this.state.technologies}</h3>
              <a href={this.state.appLink} target="blanks">View App</a>
              <br></br>
              <a href={this.state.githubLink} target="blanks">View on GitHub</a>
              <br></br>
              <br></br>
              <img className="selected-project-img" src={this.state.image}></img>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Projects;
