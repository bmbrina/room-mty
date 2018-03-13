import * as types from '../constants/checkoutConstants';

export function addProduct(value) {
  return {
    type: types.ADD_PRODUCT,
    value
  };
}

export function deleteProduct(value) {
  return {
    type: types.DELETE_PRODUCT,
    value
  };
}
