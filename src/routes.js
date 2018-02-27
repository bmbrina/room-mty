// Dependencies
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import * as Utils from './utils/isAdmin';

// Components
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import LocationPage from './components/LocationPage';
import NotFoundPage from './components/NotFoundPage';

// Containers
import Shop from './containers/Shop';
import Backoffice from './containers/Backoffice';
import NewProduct from './containers/Backoffice/NewProduct';
import EditProduct from './containers/Backoffice/EditProduct';

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Utils.isAdmin() ? (
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
    <Route path="/contact" component={ContactPage} />
    <Route path="/location" component={LocationPage} />
    <Route path="/shop" component={Shop} />
    <AuthenticatedRoute exact path="/backoffice" component={Backoffice} />
    <AuthenticatedRoute exact path="/backoffice/products/new" component={NewProduct} />
    <AuthenticatedRoute exact path="/backoffice/products/edit/:id" component={EditProduct} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
