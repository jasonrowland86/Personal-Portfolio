import React from 'react';
import projects from '../projects.js';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: projects,
      id: '',
    }
  }

  componentDidMount() {

  }

  componentWillReceiveProps() {
    console.log('props!');
    console.log(this.props);
    this.setState({
      id: this.props.id
    })
    console.log(this.state.id);
  }


  renderProjectData() {
    let project = this.getProject(this.state.id);
    console.log('id', this.state.id);
    console.log('here', project);
    console.log('here', this.state.projects);
    this.setState({
      name: this.state.projects[0].data.name,
      description: this.state.projects[0].data.description,
      technologies: this.state.projects[0].data.technologies,
      image: this.state.projects[0].data.image,
      appLink: this.state.projects[0].data.appLink,
      githubLink: this.state.projects[0].data.githubLink,
    })
  }

  getProject(id) {
    for (var i=0; i < this.state.projects; i++) {
      if (this.state.projects[i].id === id) {
        return this.state.projects[i];
      }
    }
    return null;
  }

  render() {
    return(
      <div className="main">
        <div className="title">
          <div className="content">
            <h2>{this.state.name}</h2>
            <br></br>
            <h3>{this.state.description}</h3>
            <h3>{this.state.technologies}</h3>
            <a href={this.state.appLink} target="blanks">View App</a><br></br>
            <a href={this.state.githubLink} target="blanks">View on GitHub</a><br></br>
            <br></br>
            <img className="project-img" src={this.state.image}></img>
          </div>
        </div>
      </div>
    )
  }
}

export default Project;
