import { urlTypes } from './types';

const {
  SHORTEN_ERROR,
  SHORTEN_LOADING,
  SHORTEN_URL_SUCCESS,
  FETCH_URLS_SUCCESS,
  DELETE_URL_SUCCESS
} = urlTypes;

export const shorten = ({ url, custom }) => async (dispatch) => {
  dispatch({ type: SHORTEN_LOADING });
  try {
    const res = await fetch('http://localhost:3000/api/url/create', {
      method: 'POST',
      body: JSON.stringify({ url, custom }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();
    if (res.status === 200)
      dispatch({ type: SHORTEN_URL_SUCCESS, payload: data });
    else {
      dispatch({ type: SHORTEN_ERROR, payload: data });
    }
  } catch (err) {
    dispatch({ type: SHORTEN_ERROR, payload: err });
  }
};

export const fetchUrls = () => async (dispatch) => {
  dispatch({ type: SHORTEN_LOADING });

  try {
    const res = await fetch('http://localhost:3000/api/url/all');
    const data = await res.json();

    dispatch({ type: FETCH_URLS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: SHORTEN_ERROR, payload: err });
  }
};

export const deleteUrl = (key) => async (dispatch) => {
  dispatch({ type: SHORTEN_LOADING });

  try {
    const res = await fetch('http://localhost:3000/api/url/delete', {
      method: 'POST',
      body: JSON.stringify({ key }),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await res.json();

    dispatch({ type: DELETE_URL_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: SHORTEN_ERROR, payload: err });
  }
};
