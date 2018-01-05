import React from 'react';

const Contact = () => {
  return(
    <div className="contact">
      <div className="contact-form">
        <h1 id="connect">Say Hello:</h1>

        <form id="gform" action="https://script.google.com/macros/s/AKfycbykilkmzLY8Y0ZjvNTiDsxWociKdvOBCbftGNRGJdkUlt8NXxs/exec" method="POST">
          <label for="name">Name:</label><br></br>
          <input id="name" type="text" name="name" size="30"></input><br></br>

          <label for="email">Your Email:</label><br></br>
          <input type="text" name="mail" size="30"></input><br></br>
          <span id="email-invalid">Must be a valid email address</span>

          <label for="message">Message:</label><br></br>
          <textarea type="text" name="comment"></textarea><br></br>

          <input className="submit" type="submit" value="Send"></input>
        </form>

      </div>
    </div>
  )
}

export default Contact;
