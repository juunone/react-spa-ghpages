import React, { Component } from 'react';
import './App.css';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import Home from './Home';
// import Page from './Page';
// import NotFound from './NotFound';

import Loading from './Loading';

const AsyncPage = importedComponent(() => import(/* webpackChunkName:'Page' */ './Page'),
  {
    LoadingComponent: Loading
  }
);
const AsyncNotFound = importedComponent(() => import(/* webpackChunkName:'NotFound' */ './NotFound'),
  {
    LoadingComponent: Loading
  }
);

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/page" render={(props)=> <AsyncPage {...props} />} />
        <Route render={(props)=> <AsyncNotFound {...props} />} />
      </Switch>
    </Router>
  );
};

export default App;
