import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './reset.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Redirect,
} from 'react-router-dom';
//Main Content
import Nav from './components/Nav';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
//Individual Projects
import Project1 from './components/projects/Project1';
import Project2 from './components/projects/Project2';
import Project3 from './components/projects/Project3';
import Project4 from './components/projects/Project4';

class App extends Component {
  constructor(){
    super();
    this.state = {

    };
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
