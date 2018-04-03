import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_QUANTITY,
  SET_NAME,
  SET_STREET,
  SET_REFERENCES,
  SET_CITY,
  SET_STATE,
  SET_ZIPCODE,
  SET_COUNTRY,
  SET_PHONE,
  RESET_CHECKOUT
} from '../constants/checkoutConstants';

import objectAssign from 'object-assign';
import initialState from './checkoutReducer/initialState';

const initial=  initialState.checkout;

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
      let remainingProducts = state.products;
      remainingProducts.splice(action.value, 1);
      return objectAssign({}, state, { products: remainingProducts });
    case UPDATE_QUANTITY:
      let products = state.products;
      products[action.index].quantity = action.value;
      return objectAssign({}, state, { products: products });
    case SET_NAME:
      return objectAssign({}, state, { address: {...state.address, name: action.value } });
    case SET_STREET:
      return objectAssign({}, state, { address: {...state.address, street: action.value } });
    case SET_REFERENCES:
      return objectAssign({}, state, { address: {...state.address, references: action.value } });
    case SET_CITY:
      return objectAssign({}, state, { address: {...state.address, city: action.value } });
    case SET_STATE:
      return objectAssign({}, state, { address: {...state.address, state: action.value } });
    case SET_ZIPCODE:
      return objectAssign({}, state, { address: {...state.address, zipcode: action.value } });
    case SET_COUNTRY:
      return objectAssign({}, state, { address: {...state.address, country: action.value } });
    case SET_PHONE:
      return objectAssign({}, state, { address: {...state.address, phone: action.value } });
    case RESET_CHECKOUT:
      return objectAssign({}, state, initial);
    default:
      return state;
  }
}
