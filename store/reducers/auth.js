import { authActions } from '../actions';

const { AUTH_ACTION_FAILED, SIGNIN } = authActions;

const initialState = {
  error: null,
  authToken: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTION_FAILED: {
      return {
        ...state,
        error: action.payload
      };
    }
    case SIGNIN: {
      return {
        ...state,
        error: null,
        authToken: action.payload
      };
    }
    default:
      return state;
  }
};

export default authReducer;
