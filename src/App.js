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
//Individual Projects
import Project1 from './components/projects/Project1';
import Project2 from './components/projects/Project2';
import Project3 from './components/projects/Project3';
import Project4 from './components/projects/Project4';

class App extends Component {
  constructor(){
    super();
    this.state = {
      about: false,
    };
    this.pageChange = this.pageChange.bind(this);
  }

  pageChange() {
    this.setState = {
      about: false,
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Route exact path="/" component={Main} />
          <Route exact path="/project1" component={Project1} />
          <Route exact path="/project2" component={Project2} />
          <Route exact path="/project3" component={Project3} />
          <Route exact path="/project4" component={Project4} />
          <Route exact path="/about" component={About} pageChange={this.pageChange}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;