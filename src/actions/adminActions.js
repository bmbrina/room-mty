import * as types from '../constants/adminConstants';
import * as routesActions from './routesActions';
import AdminApi from '../api/AdminApi';

export function getClients() {
  return function(dispatch) {
    return AdminApi.getClients()
      .then(clients => {
        dispatch(setClients(clients));
      })
      .catch(error => error);
  };
}

export function getCategories() {
  return function(dispatch) {
    return AdminApi.getCategories()
      .then(categories => {
        dispatch(setCategories(categories));
      })
      .catch(error => error);
  };
}

export function getProducts() {
  return function(dispatch) {
    return AdminApi.getProducts()
      .then(products => {
        dispatch(setProducts(products));
      })
      .catch(error => error);
  };
}

export function uploadProductImage(file) {
  return function(dispatch) {
    return AdminApi.uploadProductImage(file)
      .then(url => {
        dispatch(setProductImage(url));
      })
      .catch(error => error);
  };
}

export function addProduct(product) {
  return function(dispatch) {
    return AdminApi.addProduct(product)
      .then( () => {
        dispatch(routesActions.goToBackoffice());
      })
      .catch(error => error);
  };
}

export function setClients(value) {
  return {
    type: types.SET_CLIENTS,
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

export function setProductName(value) {
  return {
    type: types.SET_PRODUCT_NAME,
    value
  };
}

export function setProductPrice(value) {
  return {
    type: types.SET_PRODUCT_PRICE,
    value
  };
}

export function setProductCategory(value) {
  return {
    type: types.SET_PRODUCT_CATEGORY,
    value
  };
}

export function setProductImage(value) {
  return {
    type: types.SET_PRODUCT_IMAGE,
    value
  };
}

export function setProductStockS(value) {
  return {
    type: types.SET_PRODUCT_STOCK_S,
    value
  };
}

export function setProductStockM(value) {
  return {
    type: types.SET_PRODUCT_STOCK_M,
    value
  };
}

export function setProductStockL(value) {
  return {
    type: types.SET_PRODUCT_STOCK_L,
    value
  };
}

export function setSelectedImage(value) {
  return {
    type: types.SET_SELECTED_IMAGE,
    value
  };
}
