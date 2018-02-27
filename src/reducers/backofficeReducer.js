import {
  SET_SELECTED_MENU_ITEM,
} from '../constants/backofficeConstants';

import objectAssign from 'object-assign';
import initialState from './backofficeReducer/initialState';

export default function userReducer(
  state = initialState.backoffice,
  action
) {
  switch (action.type) {
    case SET_SELECTED_MENU_ITEM:
      return objectAssign({}, state, { selectedMenuItem: action.value });
    default:
      return state;
  }
}
