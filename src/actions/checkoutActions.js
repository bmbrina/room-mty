import * as types from '../constants/checkoutConstants';

export function addProduct(value) {
  return {
    type: types.ADD_PRODUCT,
    value
  };
}

export function deleteProduct(value) {
  return {
    type: types.DELETE_PRODUCT,
    value
  };
}

export function updateQuantity(index, value) {
  return {
    type: types.UPDATE_QUANTITY,
    index,
    value
  };
}

export function setName(value) {
  return {
    type: types.SET_NAME,
    value
  };
}

export function setStreet(value) {
  return {
    type: types.SET_STREET,
    value
  };
}

export function setReferences(value) {
  return {
    type: types.SET_REFERENCES,
    value
  };
}

export function setCity(value) {
  return {
    type: types.SET_CITY,
    value
  };
}

export function setState(value) {
  return {
    type: types.SET_STATE,
    value
  };
}

export function setZipcode(value) {
  return {
    type: types.SET_ZIPCODE,
    value
  };
}

export function setCountry(value) {
  return {
    type: types.SET_COUNTRY,
    value
  };
}

export function setPhone(value) {
  return {
    type: types.SET_PHONE,
    value
  };
}
