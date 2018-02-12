import {
  SET_USER_ID,
  SET_USER_EMAIL,
  SET_USER_PASSWORD,
  SET_USER_NAME,
  SET_USER_LASTNAME
} from '../constants/userConstants';

import objectAssign from 'object-assign';
import initialState from './userReducer/initialState';

export default function userReducer(
  state = initialState.user,
  action
) {
  let newState;

  switch (action.type) {
    case SET_USER_ID:
      return objectAssign({}, state, { id: action.id });
    case SET_USER_EMAIL:
      return objectAssign({}, state, { email: action.email });
    case SET_USER_PASSWORD:
      return objectAssign({}, state, { password: action.password });
    case SET_USER_NAME:
      return objectAssign({}, state, { name: action.name });
    case SET_USER_LASTNAME:
      return objectAssign({}, state, { lastname: action.lastname });
    default:
      return state;
  }
}
