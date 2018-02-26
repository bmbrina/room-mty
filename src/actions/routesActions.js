import { push, replace } from 'react-router-redux';

const ROOT_PATH = '/';
const BACKOFFICE_PATH = '/backoffice';
const EDIT_PRODUCT_PATH = id => {
  return `/backoffice/products/edit/${id}`;
};

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

export function goToEditProduct(id) {
  return function(dispatch) {
    dispatch(push(EDIT_PRODUCT_PATH(id)));
  };
}
