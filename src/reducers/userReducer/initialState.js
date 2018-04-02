import cookie from 'react-cookies';

const user = cookie.load('user');
let state;

if (user != undefined) {
  state = {
    user
  };
} else {
  state = {
    user: {
      id: "",
      email: "",
      password: "",
      name: "",
      lastname: "",
      admin: false,
      orders: []
    }
  };
}

export default state;
