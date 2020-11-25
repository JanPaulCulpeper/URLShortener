import { authTypes } from './types';
import URL from '../../constants';

const { AUTH_ACTION_FAILED, AUTH, AUTH_LOADING } = authTypes;

export const verifyAuth = () => async (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  try {
    const res = await fetch(`${URL}api/auth/verify`);
    dispatch({ type: AUTH, payload: (await res.json()).user });
  } catch (err) {
    dispatch({
      type: AUTH_ACTION_FAILED,
      payload: err
    });
  }
};

export const login = (credentials) => async (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  try {
    const res = await fetch(`${URL}api/auth/login`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();

    if (data.errors) {
      dispatch({ type: AUTH_ACTION_FAILED, payload: data.errors });
    }
    if (data.user) {
      dispatch({ type: AUTH, payload: data.user });
    }
  } catch (err) {
    dispatch({ type: AUTH_ACTION_FAILED, payload: err });
  }
};
// export const logouot = () => (dispatch, getState) => {};
export const signup = (credentials) => async (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  try {
    const res = await fetch(`${URL}api/auth/signup`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();

    if (data.errors) {
      dispatch({ type: AUTH_ACTION_FAILED, payload: data.errors });
    }
    if (data.user) {
      dispatch({ type: AUTH, payload: data.user });
    }
  } catch (err) {
    dispatch({ type: AUTH_ACTION_FAILED, payload: err });
  }
};

export const logout = () => async (dispatch) => {
  try {
    const res = await fetch(`${URL}api/auth/logout`);

    const data = await res.json();

    if (data.errors) {
      dispatch({ type: AUTH_ACTION_FAILED, payload: data.errors });
    } else {
      dispatch({ type: AUTH, payload: data.user });
    }
  } catch (err) {
    dispatch({ type: AUTH_ACTION_FAILED, payload: err });
  }
};

export const clearError = () => (dispatch) => {
  dispatch({ type: AUTH_ACTION_FAILED, payload: null });
};
