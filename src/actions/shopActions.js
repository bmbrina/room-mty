import * as types from '../constants/shopConstants';
import ShopApi from '../api/ShopApi';

export function getCategories() {
  return function(dispatch) {
    return ShopApi.getCategories()
      .then(categories => {
        dispatch(setCategories(categories));
      })
      .catch(error => error);
  };
}

export function getProducts() {
  return function(dispatch) {
    return ShopApi.getProducts()
      .then(products => {
        dispatch(setProducts(products));
      })
      .catch(error => error);
  };
}

export function getProductById(id) {
  return function(dispatch) {
    return ShopApi.getProductById(id)
      .then(product => {
        dispatch(setProduct(product));
      })
      .catch(error => error);
  };
}

export function setShowSignIn(value) {
  return {
    type: types.SHOW_SIGN_IN,
    value
  };
}

export function setShowSignUp(value) {
  return {
    type: types.SHOW_SIGN_UP,
    value
  };
}

export function setShowRecoverPassword(value) {
  return {
    type: types.SHOW_RECOVER_PASSWORD,
    value
  };
}

export function setCategories(value) {
  return {
    type: types.SET_CATEGORIES,
    value
  };
}

export function setProducts(value) {
  return {
    type: types.SET_PRODUCTS,
    value
  };
}

export function setProduct(value) {
  return {
    type: types.SET_PRODUCT,
    value
  };
}

export function setSelectedMenuItem(value) {
  return {
    type: types.SET_SELECTED_MENU_ITEM,
    value
  };
}

export function setSelectedImage(value) {
  return {
    type: types.SET_SELECTED_IMAGE,
    value
  };
}

export function setSelectedProductID(value) {
  return {
    type: types.SET_SELECTED_PRODUCT_ID,
    value
  };
}

export function setSelectedProductSize(value) {
  return {
    type: types.SET_SELECTED_PRODUCT_SIZE,
    value
  };
}

export function setSelectedProductQuantity(value) {
  return {
    type: types.SET_SELECTED_PRODUCT_QUANTITY,
    value
  };
}
