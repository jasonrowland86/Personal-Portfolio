import React from 'react';

class Dot extends React.Component {
  render() {
    let className = 'dot';
    if(this.props.index === this.props.currentIndex) {
      className += ' active-dot';
    }
    return (
      <div className={className} index={this.props.index}></div>
    )
  }
}


export default Dot;
