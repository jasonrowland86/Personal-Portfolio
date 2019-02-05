import React from 'react';
import FontAwesome from 'react-fontawesome';
import Dot from './Dot';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: '',
      index: 0
    }
    this.arrowRight = this.arrowRight.bind(this);
    this.arrowLeft = this.arrowLeft.bind(this);
    this.handleArrowKey = this.handleArrowKey.bind(this);
  }

  componentDidMount() {
    this.setState({project: this.props.project});
    window.addEventListener('keydown', this.handleArrowKey);
  }

  componentWillReceiveProps(props) {
    console.log(props);
    this.setState({
      name: props.project.name,
      description: props.project.data.description,
      technologies: props.project.data.technologies,
      image: props.project.data.images.image1,
      images: props.project.data.images,
      appLink: props.project.data.appLink,
      githubLink: props.project.data.githubLink,
      showProject: {
        display: 'block'
      },
    })
  }

  // dotClick(e) {
  //   this.setState({
  //     index: e.currentTarget.index
  //   })
  // }

  //Map dot nav indicators to selected project
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

  //Return the selected project image that mathes the current index
  renderSelectedImage() {
    console.log(this.state.images);
    console.log(this.props.id);
    if (this.state.images) {
      if (this.props.project.id == 1) {
        return (
          <img className="selected-project-img border" src={this.state.images[this.state.index]} alt=''/>
        )
      } else {
        return (
          <img className="selected-project-img" src={this.state.images[this.state.index]} alt=''/>
        )
      }
    }
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

  //Arrow key functionility
  handleArrowKey(e) {
    console.log('key press ' + e.key);
    if(e.key === 'ArrowLeft') {
      this.arrowLeft();
    } else if (e.key === 'ArrowRight') {
      this.arrowRight();
    }
  }

  //Close Project on x-icon click
  close() {
   this.setState({
     showProject: {
       display: 'none'
     },
     hide: {
       opacity: 1,
       marginTop: '25vh',
       transition: 'opacity .5s ease-in-out',
     },
     index: 0,
   })
   this.props.showProjects();
   }

  render() {
    if(this.props.project) {
      return(
        <div className="main project-content" style={this.state.show}>
          <FontAwesome onClick={this.close.bind(this)} className="x-icon" name="times" size="lg"/>
          <div className="selected-project">
            <h1>{this.state.name}</h1>
            <br></br>
            <h3 style={{marginBottom: '1em'}}>{this.state.description}</h3>
            <h3>{this.state.technologies}</h3>
            <a href={this.state.appLink} target="blanks">View App</a>
            <br></br>
            <a href={this.state.githubLink} target="blanks">View on GitHub</a>
            <br></br>
            <br></br>

            {this.renderSelectedImage()}

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
      )
    }

  }
}

export default Project;
