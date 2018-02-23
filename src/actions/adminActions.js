import * as types from '../constants/adminConstants';
import AdminApi from '../api/AdminApi';

export function getClients() {
  return function(dispatch) {
    return AdminApi.getClients()
      .then(clients => {
        dispatch(setClients(clients));
      })
      .catch(error => error);
  };
}

export function setClients(value) {
  return {
    type: types.SET_CLIENTS,
    value
  };
}
