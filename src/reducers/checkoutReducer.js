import {
  ADD_PRODUCT,
  DELETE_PRODUCT
} from '../constants/checkoutConstants';

import objectAssign from 'object-assign';
import initialState from './checkoutReducer/initialState';

export default function userReducer(
  state = initialState.checkout,
  action
) {
  switch (action.type) {
    case ADD_PRODUCT:
    if (state.products) {
      return objectAssign({}, state, { products: [...state.products, action.value] });
    } else {
      return objectAssign({}, state, { products: [action.value] });
    }
    case DELETE_PRODUCT:
      let products = state.products;
      products.splice(action.value, 1);
      return objectAssign({}, state, { products: products });
    default:
      return state;
  }
}
