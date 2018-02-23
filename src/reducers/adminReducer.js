import {
  SET_CLIENTS,
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
    default:
      return state;
  }
}
