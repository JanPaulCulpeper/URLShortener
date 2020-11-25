import { urlTypes } from '../actions/types';

const {
  SHORTEN_ERROR,
  SHORTEN_LOADING,
  SHORTEN_URL_SUCCESS,
  FETCH_URLS_SUCCESS,
  DELETE_URL_SUCCESS,
  CLEAR
} = urlTypes;

const initialState = {
  urls: null,
  loading: false,
  error: null
};

const urlReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR: {
      return {
        ...state,
        error: null,
        currentUrl: null
      };
    }
    case DELETE_URL_SUCCESS: {
      return {
        ...state,
        urls: action.payload,
        loading: false,
        currentUrl: null,
        error: null
      };
    }
    case FETCH_URLS_SUCCESS: {
      return {
        ...state,
        error: null,
        loading: null,
        urls: action.payload
      };
    }
    case SHORTEN_URL_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentUrl: action.payload,
        error: null
      };
    }
    case SHORTEN_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    }
    case SHORTEN_LOADING: {
      return {
        ...state,
        loading: true
      };
    }
    default:
      return state;
  }
};

export default urlReducer;
