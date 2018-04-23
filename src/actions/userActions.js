import cookie from 'react-cookies';
import * as types from '../constants/userConstants';
import * as Utils from '../utils/expirationDate';
import UserApi from '../api/UserApi';

export function signUp(user) {
  return function(dispatch) {
    return UserApi.signUp(user)
      .then(userId => {
        dispatch(setUserId(userId));
      })
      .catch(error => error);
  };
}

export function signIn(user) {
  return function(dispatch) {
    return UserApi.signIn(user)
      .then(user => {
        cookie.save('user', user, { path: '/', expires: Utils.getExpirationDate() });
        return dispatch(setUser(user));
      })
      .catch(error => error);
  };
}

export function recoverPassword(user) {
  return function() {
    return UserApi.recoverPassword(user)
      .then(response => response)
      .catch(error => error);
  };
}

export function getUserOrders(id) {
  return function(dispatch) {
    return UserApi.getUserOrders(id)
      .then( orders => {
        dispatch(setUserOrders(orders));
      })
      .catch(error => error);
  };
}

export function getOrderDetail(id) {
  return function(dispatch) {
    return UserApi.getOrder(id)
      .then( order => {
        dispatch(setSelectedOrder(order));
      })
      .catch(error => error);
  };
}

export function signOut() {
  return function(dispatch) {
    return UserApi.signOut()
      .then( () => {
        cookie.remove('user', { path: '/' });
        dispatch(endSession());
      })
      .catch(error => error);
  };
}

export function setUser(user) {
  return {
    type: types.SET_USER,
    user
  };
}

export function setUserId(id) {
  return {
    type: types.SET_USER_ID,
    id
  };
}

export function setUserEmail(email) {
  return {
    type: types.SET_USER_EMAIL,
    email
  };
}

export function setUserPassword(password) {
  return {
    type: types.SET_USER_PASSWORD,
    password
  };
}

export function setUserName(name) {
  return {
    type: types.SET_USER_NAME,
    name
  };
}

export function setUserLastName(lastname) {
  return {
    type: types.SET_USER_LASTNAME,
    lastname
  };
}

export function setUserOrders(orders) {
  return {
    type: types.SET_USER_ORDERS,
    orders
  };
}

export function setSelectedOrder(order) {
  return {
    type: types.SET_SELECTED_ORDER,
    order
  };
}

export function endSession() {
  return {
    type: types.END_SESSION,
  };
}
