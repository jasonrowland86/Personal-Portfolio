import React from 'react';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project : this.props,
    }
  }

  componentDidMount() {

  }


  render() {
    if(this.state.project) {
      return(
        <div className="selected-project">
          <h1>{this.state.project.data.name}</h1>
          <br></br>
          <h2 style={{marginBottom: '1em'}}>{this.state.project.data.description}</h2>
          <h3>{this.state.project.data.technologies}</h3>
          <a href={this.state.project.data.appLink} target="blanks">View App</a>
          <br></br>
          <a href={this.state.project.data.githubLink} target="blanks">View on GitHub</a>
          <br></br>
          <br></br>
          <img className="selected-project-img" src={this.state.project.data.image}></img>
        </div>
      )
    }

  }
}

export default Project;
