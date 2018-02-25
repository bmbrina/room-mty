// Dependencies
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import cookie from 'react-cookies';

// Components
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

// Containers
import Shop from './containers/Shop';
import Backoffice from './containers/Backoffice';
import NewProduct from './containers/Backoffice/NewProduct';

const user = cookie.load('user');

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user.admin ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/shop',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/about" component={AboutPage} />
    <Route path="/shop" component={Shop} />
    <AuthenticatedRoute exact path="/backoffice" component={Backoffice} />
    <AuthenticatedRoute exact path="/backoffice/products/new" component={NewProduct} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
