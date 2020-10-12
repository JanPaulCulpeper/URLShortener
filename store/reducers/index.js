import { combineReducers } from 'redux';

import authReducer from './auth';
import userReducer from './user';
import urlReducer from './url';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  url: urlReducer
});
