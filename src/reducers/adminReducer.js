import {
  SET_CLIENTS,
  SET_PRODUCT_IMAGE,
  SET_SELECTED_IMAGE,
  SET_CATEGORIES,
  SET_PRODUCT_NAME,
  SET_PRODUCT_PRICE,
  SET_PRODUCT_CATEGORY,
  SET_PRODUCT_STOCK_S,
  SET_PRODUCT_STOCK_M,
  SET_PRODUCT_STOCK_L,
} from '../constants/adminConstants';

import objectAssign from 'object-assign';
import initialState from './adminReducer/initialState';

export default function userReducer(
  state = initialState.admin,
  action
) {
  switch (action.type) {
    case SET_CLIENTS:
      return objectAssign({}, state, { clients: action.value });
    case SET_CATEGORIES:
      return objectAssign({}, state, { categories: action.value });
    case SET_PRODUCT_NAME:
      return objectAssign({}, state, { product: {...state.product, name: action.value } });
    case SET_PRODUCT_PRICE:
      return objectAssign({}, state, { product: {...state.product, price: action.value } });
    case SET_PRODUCT_CATEGORY:
      return objectAssign({}, state, { product: {...state.product, category: action.value } });
    case SET_PRODUCT_STOCK_S:
      return objectAssign({}, state, { product: {...state.product, stock: {...state.product.stock, small: action.value } } });
    case SET_PRODUCT_STOCK_M:
      return objectAssign({}, state, { product: {...state.product, stock: {...state.product.stock, medium: action.value } } });
    case SET_PRODUCT_STOCK_L:
      return objectAssign({}, state, { product: {...state.product, stock: {...state.product.stock, large: action.value } } });
    case SET_PRODUCT_IMAGE:
      if (state.product.images) {
        return objectAssign({}, state, { product: {...state.product, images: [...state.product.images, action.value] } });
      } else {
        return objectAssign({}, state, { product: {...state.product, images: [action.value] } });
      }
    case SET_SELECTED_IMAGE:
      return objectAssign({}, state, { product: {...state.product, selectedImage: action.value } });
    default:
      return state;
  }
}
