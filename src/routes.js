// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

// Containers
import Shop from './containers/Shop';
import Backoffice from './containers/Backoffice';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/shop" component={Shop} />
    <Route path="/backoffice" component={Backoffice} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
