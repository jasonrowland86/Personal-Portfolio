import React from 'react';
import FontAwesome from 'react-fontawesome';
import projects from '../projects.js';
import Dot from './Dot';

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: projects,
      index: 0,
      clicked: false,
      showProject: {
        display: 'none'
      }
    }
    this.handleClicked = this.handleClicked.bind(this);
    this.arrowRight = this.arrowRight.bind(this);
    this.arrowLeft = this.arrowLeft.bind(this);
    this.handleArrowKey = this.handleArrowKey.bind(this);
  }

  //Handle clicked on project
  handleClicked(e) {
    console.log('Clicked!', e.currentTarget.id);
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

  // componentDidMount() {
  //   this.setState({
  //     projects: projects,
  //   })
  // }

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

  //Set state to with corresponding project data.
  // renderProjectData(e) {
  //   console.log('Rendering project:', e.currentTarget.id);
  //   let project = this.selectProject(e.currentTarget.id);
  //   if(project) {
  //     this.setState({
  //       name: project.data.name,
  //       description: project.data.description,
  //       technologies: project.data.technologies,
  //       image: project.data.images.image1,
  //       images: project.data.images,
  //       image1: project.data.images[0],
  //       image2: project.data.images[1],
  //       image3: project.data.images[2],
  //       appLink: project.data.appLink,
  //       githubLink: project.data.githubLink,
  //       showProject: {
  //         display: 'block'
  //       },
  //       hide: {
  //         opacity: 0,
  //       }
  //     })
  //   } else {
  //     this.setState({
  //       showProject: {
  //         display: 'none'
  //       },
  //       hide: {
  //         opacity: 1,
  //         transition: 'opacity .5s ease-in-out',
  //       }
  //     })
  //   }
  //   this.scrolltoTop();
  //   console.log('initial index is ' + this.state.index);
  // }
  renderProjectData(e) {
    console.log('Rendering project:', e.currentTarget.id);
    let project = this.selectProject(e.currentTarget.id);
    if(project) {
      this.setState({
        name: project.data.name,
        description: project.data.description,
        technologies: project.data.technologies,
        image: project.data.images.image1,
        images: project.data.images,
        image1: project.data.images[0],
        image2: project.data.images[1],
        image3: project.data.images[2],
        appLink: project.data.appLink,
        githubLink: project.data.githubLink,
        showProject: {
          zIndex: 0,
          opacity: 1,
          transition: 'opacity .5s ease-in-out',
        },
        hide: {
          opacity: 0,
          margin: 0,
        }
      })
    } else {
      this.setState({
        showProject: {
          display: 'none'
        },
        hide: {
          opacity: 1,
          marginTop: '25vh',
          transition: 'opacity .5s ease-in-out',
        }
      })
    }
    this.scrolltoTop();
    console.log('initial index is ' + this.state.index);
  }

  //For single project render
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

  //Render the projects to the component
  renderProjectImages() {
    return (
            <div style={this.state.show}>
              <div className="flex"><h1>Projects I've created or contributed to:</h1></div>
              <div className="projects">
                {this.state.projects.map((project) =>(
                  <div onClick={this.handleClicked} className="project" id={project.id}>
                    <img className="project-img" src={project.data.images[0]}></img>
                  </div>
                ))}
              </div>
            </div>
          )
  }

  //Arrow functions for selected project image slider
  arrowLeft() {
    if (this.state.index > 0) {
      this.setState({
        index: this.state.index - 1
      });
      console.log(this.state.index);
    } else if (this.state.index === 0 ) {
      this.setState({
        index: this.state.images.length - 1
      });
      console.log(this.state.index);
    }
  }

  arrowRight() {
    if (this.state.index < this.state.images.length - 1) {
      this.setState({
        index: this.state.index + 1
      });
      console.log(this.state.index);
    } else if (this.state.index === this.state.images.length - 1){
      this.setState({
        index: 0
      });
      console.log(this.state.index);
    }
  }

  // dotClick(e) {
  //   this.setState({
  //     index: e.currentTarget.index
  //   })
  // }

  renderDots() {
    if (this.state.images) {
      return (
        <div className="dots">
          {this.state.images.map((image, index) => (
            <Dot index={index} currentIndex={this.state.index}/>
          ))}
        </div>
      )
    }
  }

  //Selceted project images
  renderSelectedImages() {
    console.log(this.state.images);
    if (this.state.images) {
      return (
        <div>
          <img className="selected-project-img" src={this.state.images[this.state.index]} ></img>
        </div>
      )
    }
  }

  //Arrow key functionility
  handleArrowKey(e) {
    console.log('key press ' + e.key);
    if(e.key === 'ArrowLeft') {
      this.arrowLeft();
    } else if (e.key === 'ArrowRight') {
      this.arrowRight();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleArrowKey);
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

        <div className="project-container" style={this.state.showProject}>
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
              {this.renderSelectedImages()}

              <div className="arrow-wrapper">
                <div className="left-arrow" onClick={this.arrowLeft}>
                  <FontAwesome className="icon arrow" name="angle-left" size="2x"/>
                </div>
                {this.renderDots()}
                <div className="right-arrow" onClick={this.arrowRight}>
                  <FontAwesome className="icon arrow" name="angle-right" size="2x"/>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Projects;
