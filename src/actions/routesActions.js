import { push, replace } from 'react-router-redux';

const ROOT_PATH = '/';

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
