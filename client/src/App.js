import React, { Component } from 'react';
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
import Projects from './components/Projects';
import Resume from './components/Resume';
//Individual Projects
import Project from './components/Project';

class App extends Component {
  constructor(){
    super();
    this.state = {
      about: false,
      resume: false,
    };
    this.pageChange = this.pageChange.bind(this);
  }

  pageChange() {
    this.setState = {
      about: false,
      resume: false,
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Main} />
          <Route exact path="/projects" component={Projects} pageChange={this.pageChange}/>
          <Route exact path="/resume" component={Resume} pageChange={this.pageChange}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
