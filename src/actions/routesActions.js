import { push, replace } from 'react-router-redux';

const ROOT_PATH = '/';
const BACKOFFICE_PATH = '/backoffice'

export function redirectToRoot() {
  return function(dispatch) {
    dispatch(replace(ROOT_PATH));
  };
}

export function goToRoot() {
  return function(dispatch) {
    dispatch(push(ROOT_PATH));
  };
}

export function goToBackoffice() {
  return function(dispatch) {
    dispatch(push(BACKOFFICE_PATH));
  };
}
