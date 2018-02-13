import {
  SHOW_SIGN_IN,
  SHOW_SIGN_UP,
  SHOW_RECOVER_PASSWORD
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
    default:
      return state;
  }
}
