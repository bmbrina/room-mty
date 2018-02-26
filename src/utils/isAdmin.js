import cookie from 'react-cookies';

export function isAdmin() {
  const user = cookie.load('user');
  if (user.admin) {
    return true;
  } else {
    return false;
  }
}
