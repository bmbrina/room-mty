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

export function setSelectedImage(value) {
  return {
    type: types.SET_SELECTED_IMAGE,
    value
  };
}

export function setSelectedProduct(value) {
  return {
    type: types.SET_SELECTED_PRODUCT,
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
