import * as types from '../constants/backofficeConstants';

export function setSelectedMenuItem(value) {
  return {
    type: types.SET_SELECTED_MENU_ITEM,
    value
  };
}
