import * as types from '../constants/checkoutConstants';

export function addProduct(value) {
  return {
    type: types.ADD_PRODUCT,
    value
  };
}
