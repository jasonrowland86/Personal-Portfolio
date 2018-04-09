import React from 'react';

class SelectedImage extends React.Component {
  // constructor() {
  //   super();
  //
  // }

  render() {
    return(
      <div>
        <img className="selected-project-img" src={this.props.image} style={{border: '1px solid #9C9CA3'}} alt="Selected"></img>
      </div>
    )
  }
}


export default SelectedImage;
