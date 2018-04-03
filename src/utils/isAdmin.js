import cookie from 'react-cookies';

export function isAdmin() {
  const user = cookie.load('user');
  if (user.admin) {
    return true;
  } else {
    return false;
  }
}

export function isLoggedIn() {
  const user = cookie.load('user');
  if (user) {
    return true;
  } else {
    return false;
  }
}
