import { push, replace } from 'react-router-redux';

const ROOT_PATH = '/';
const BACKOFFICE_PATH = '/backoffice';
const SHOP_PATH = '/shop';
const EDIT_PRODUCT_PATH = id => {
  return `/backoffice/products/edit/${id}`;
};
const SHOW_PRODUCT_PATH = id => {
  return `/shop/${id}`;
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

export function goToShop() {
  return function(dispatch) {
    dispatch(push(SHOP_PATH));
  };
}

export function goToEditProduct(id) {
  return function(dispatch) {
    dispatch(push(EDIT_PRODUCT_PATH(id)));
  };
}

export function showProduct(id) {
  return function(dispatch) {
    dispatch(push(SHOW_PRODUCT_PATH(id)));
  };
}
