import { combineReducers } from 'redux';
import userReducer from './userReducer';
import shopReducer from './shopReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  shop: shopReducer
});

export default rootReducer;
