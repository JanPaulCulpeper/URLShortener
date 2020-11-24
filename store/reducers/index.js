import { combineReducers } from 'redux';

import authReducer from './auth';

import urlReducer from './url';

export default combineReducers({
  auth: authReducer,

  url: urlReducer
});
