import React, { Component } from 'react';
import './App.css';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Page from './Page';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Page" component={Page} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
