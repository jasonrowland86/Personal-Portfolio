import React from 'react';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: true,
      dropDown: {
        display: 'none'
      },
    }
    this.handleClicked = this.handleClicked.bind(this);
  }

  handleClicked() {
    if(!this.state.clicked) {
      this.setState({
        clicked: true,
      });
    } else {
      this.setState({
        clicked: false,
      });
    }
    this.showContactForm();
  }

  showContactForm() {
    if(this.state.clicked) {
      this.setState({
        dropDown: {
          display: 'inline-block'
        },
        switchStyle: {
          cursor: 'text',
          fontSize: '1.5em',
          marginBottom: '3vh',
          color: '#222324',
          transition: 'none',
          transform: 'none'
        }
      });
    }
    setTimeout(this.scrollDown, 100);
  }

  scrollDown() {
    window.scrollTo({top: 1000, left: 0, behavior: 'smooth'});
  }

  render() {
    return(
      <div className="contact">

        <div className="contact-form">

          <h1 onClick={this.handleClicked} style={this.state.switchStyle}>Contact</h1>

          <form style={this.state.dropDown} id="gform" action="https://script.google.com/macros/s/AKfycbykilkmzLY8Y0ZjvNTiDsxWociKdvOBCbftGNRGJdkUlt8NXxs/exec" method="POST">
            <label for="name">Name:</label><br></br>
            <input id="name" type="text" name="name" size="30"></input><br></br>

            <label for="email">Your Email:</label><br></br>
            <input type="text" name="mail" size="30"></input><br></br>
            <span id="email-invalid" style={{color: 'black'}}>Must be a valid email address</span>

            <label for="message">Message:</label><br></br>

            <textarea className="comment" type="text" name="comment"></textarea><br></br>

            <input className="submit" type="submit" value="Send"></input>
          </form>

        </div>
      </div>
    )
  }
}

export default Contact;
