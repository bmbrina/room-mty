import * as types from '../constants/shopConstants';

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
