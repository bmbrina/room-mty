import * as types from '../constants/shopConstants';
import ShopApi from '../api/ShopApi';

export function getCategories() {
  return function(dispatch) {
    return ShopApi.getCategories()
      .then(categories => {
        dispatch(setCategories(categories));
      })
      .catch(error => error);
  };
}

export function setShowSignIn(value) {
  return {
    type: types.SHOW_SIGN_IN,
    value
  };
}

export function setShowSignUp(value) {
  return {
    type: types.SHOW_SIGN_UP,
    value
  };
}

export function setShowRecoverPassword(value) {
  return {
    type: types.SHOW_RECOVER_PASSWORD,
    value
  };
}

export function setCategories(value) {
  return {
    type: types.SET_CATEGORIES,
    value
  };
}

export function setSelectedMenuItem(value) {
  return {
    type: types.SET_SELECTED_MENU_ITEM,
    value
  };
}
