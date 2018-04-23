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

export function getOrders() {
  return function(dispatch) {
    return AdminApi.getOrders()
      .then(orders => {
        dispatch(setOrders(orders));
      })
      .catch(error => error);
  };
}

export function getProductById(id) {
  return function(dispatch) {
    return AdminApi.getProductById(id)
      .then(product => {
        dispatch(setProduct(product));
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

export function editProduct(product) {
  return function(dispatch) {
    return AdminApi.editProduct(product)
      .then( () => {
        dispatch(routesActions.goToBackoffice());
      })
      .catch(error => error);
  };
}

export function deleteProduct(product) {
  return function(dispatch) {
    return AdminApi.deleteProduct(product)
      .then( () => {
        dispatch(routesActions.goToBackoffice());
      })
      .catch(error => error);
  };
}

export function deleteProductImage(product) {
  return function(dispatch) {
    return AdminApi.deleteProductImage(product)
      .then( () => {
        dispatch(setSelectedImage(0));
        dispatch(removeProductImage(product.selectedImage));
      })
      .catch(error => error);
  };
}

export function finishOrder(id, number, status) {
  return function(dispatch) {
    return AdminApi.finishOrder(id, number, status)
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

export function setOrders(value) {
  return {
    type: types.SET_ORDERS,
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

export function removeProductImage(value) {
  return {
    type: types.REMOVE_PRODUCT_IMAGE,
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

export function cleanProductImages() {
  return {
    type: types.CLEAN_PRODUCT_IMAGES
  };
}

export function updateTrackingNumber(value) {
  return {
    type: types.UPDATE_TRACKING_NUMBER,
    value
  };
}
