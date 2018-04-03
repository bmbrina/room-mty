import {
  SET_CATEGORIES,
  SET_PRODUCTS,
  SET_PRODUCT,
  SET_SELECTED_IMAGE,
  SET_SELECTED_PRODUCT,
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
    case SET_CATEGORIES:
      return objectAssign({}, state, { categories: action.value });
    case SET_PRODUCTS:
      return objectAssign({}, state, { products: action.value });
    case SET_PRODUCT:
      return objectAssign({}, state, { product: action.value });
    case SET_SELECTED_IMAGE:
      return objectAssign({}, state, { product: {...state.product, selectedImage: action.value } });
    case SET_SELECTED_PRODUCT:
      return objectAssign({}, state, { selectedProduct: {...state.selectedProduct, product: action.value } });
    case SET_SELECTED_PRODUCT_ID:
      return objectAssign({}, state, { selectedProduct: {...state.selectedProduct, productId: action.value } });
    case SET_SELECTED_PRODUCT_SIZE:
      return objectAssign({}, state, { selectedProduct: {...state.selectedProduct, size: action.value } });
    case SET_SELECTED_PRODUCT_QUANTITY:
      return objectAssign({}, state, { selectedProduct: {...state.selectedProduct, quantity: action.value } });
    default:
      return state;
  }
}
