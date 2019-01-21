import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home.js';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
