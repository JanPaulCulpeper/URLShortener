import { authTypes } from './types';

const { AUTH_ACTION_FAILED, SIGNIN } = authTypes;

// export const logouot = () => (dispatch, getState) => {};
export const signup = ({ email, password }) => async (dispatch) => {
  try {
    const res = await fetch('http://localhost:5000/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();

    if (data.errors) {
      dispatch({ type: AUTH_ACTION_FAILED, payload: data.errors });
    }
    if (data.user) {
      dispatch({ type: SIGNIN, payload: data.user });
    }
  } catch (err) {
    dispatch({ type: AUTH_ACTION_FAILED, payload: err });
  }
};

export const login = () => {};
