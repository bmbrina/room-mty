import * as types from '../constants/userConstants';
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
        dispatch(setUser(user));
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