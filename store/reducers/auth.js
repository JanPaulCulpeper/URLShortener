import { authTypes } from '../actions/types';

const { AUTH_ACTION_FAILED, AUTH, AUTH_LOADING } = authTypes;

const initialState = {
  error: null,
  authToken: null,
  loading: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTION_FAILED: {
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    }
    case AUTH: {
      return {
        ...state,
        error: null,
        authToken: action.payload,
        loading: false
      };
    }
    case AUTH_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default authReducer;
