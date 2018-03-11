import {
  SHOW_SIGN_IN,
  SHOW_SIGN_UP,
  SHOW_RECOVER_PASSWORD,
  SET_CATEGORIES,
  SET_SELECTED_MENU_ITEM
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
    default:
      return state;
  }
}
