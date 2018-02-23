import { combineReducers } from 'redux';
import userReducer from './userReducer';
import shopReducer from './shopReducer';
import backofficeReducer from './backofficeReducer';
import adminReducer from './adminReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  shop: shopReducer,
  admin: adminReducer,
  backoffice: backofficeReducer
});

export default rootReducer;
