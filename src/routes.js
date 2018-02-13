// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

// Containers
import Shop from './containers/Shop';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/shop" component={Shop} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;