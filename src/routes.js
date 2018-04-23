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
import ShowProduct from './containers/Shop/ShowProduct';
import Checkout from './containers/Checkout';
import Profile from './containers/Profile';
import Payment from './containers/Payment';
import Order from './containers/Order';
import ShowOrder from './containers/Backoffice/OrderDetail';

const AuthenticatedAdminRoute = ({ component: Component, ...rest }) => (
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

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Utils.isLoggedIn() ? (
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
    <Route exact path="/shop" component={Shop} />
    <Route exact path="/shop/:id" component={ShowProduct} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/profile" component={Profile} />
    <AuthenticatedRoute path="/payment" component={Payment} />
    <AuthenticatedRoute path="/order/:id" component={Order} />
    <AuthenticatedAdminRoute exact path="/backoffice" component={Backoffice} />
    <AuthenticatedAdminRoute exact path="/backoffice/products/new" component={NewProduct} />
    <AuthenticatedAdminRoute exact path="/backoffice/products/edit/:id" component={EditProduct} />
    <AuthenticatedAdminRoute exact path="/backoffice/order/:id" component={ShowOrder} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Routes;
