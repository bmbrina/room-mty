import {
  ADD_PRODUCT,
} from '../constants/checkoutConstants';

import objectAssign from 'object-assign';
import initialState from './checkoutReducer/initialState';

export default function userReducer(
  state = initialState.checkout,
  action
) {
  switch (action.type) {
    case ADD_PRODUCT:
    if (state.product) {
      return objectAssign({}, state, { products: [...state.products, action.value] });
    } else {
      return objectAssign({}, state, { products: [action.value] });
    }
    default:
      return state;
  }
}
