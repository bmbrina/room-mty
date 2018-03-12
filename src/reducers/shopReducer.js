import {
  SHOW_SIGN_IN,
  SHOW_SIGN_UP,
  SHOW_RECOVER_PASSWORD,
  SET_CATEGORIES,
  SET_SELECTED_MENU_ITEM,
  SET_PRODUCTS,
  SET_PRODUCT,
  SET_SELECTED_IMAGE,
  SET_SELECTED_PRODUCT_ID,
  SET_SELECTED_PRODUCT_SIZE,
  SET_SELECTED_PRODUCT_QUANTITY
} from '../constants/shopConstants';

import objectAssign from 'object-assign';
import initialState from './shopReducer/initialState';

export default function userReducer(
  state = initialState.shop,
  action
) {
  switch (action.type) {
    case SHOW_SIGN_IN:
      return objectAssign({}, state, { showSignIn: action.value });
    case SHOW_SIGN_UP:
      return objectAssign({}, state, { showSignUp: action.value });
    case SHOW_RECOVER_PASSWORD:
      return objectAssign({}, state, { showRecoverPassword: action.value });
    case SET_SELECTED_MENU_ITEM:
      return objectAssign({}, state, { selectedMenuItem: action.value });
    case SET_CATEGORIES:
      return objectAssign({}, state, { categories: action.value });
    case SET_PRODUCTS:
      return objectAssign({}, state, { products: action.value });
    case SET_PRODUCT:
      return objectAssign({}, state, { product: action.value });
    case SET_SELECTED_IMAGE:
      return objectAssign({}, state, { product: {...state.product, selectedImage: action.value } });
    case SET_SELECTED_PRODUCT_ID:
      return objectAssign({}, state, { selectedProduct: {...state.selectedProduct, id: action.value } });
    case SET_SELECTED_PRODUCT_SIZE:
      return objectAssign({}, state, { selectedProduct: {...state.selectedProduct, size: action.value } });
    case SET_SELECTED_PRODUCT_QUANTITY:
      return objectAssign({}, state, { selectedProduct: {...state.selectedProduct, quantity: action.value } });
    default:
      return state;
  }
}
