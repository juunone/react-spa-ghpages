import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Page from './Page';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Page" component={Page} />
          <Route exact path="/NotFound" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
