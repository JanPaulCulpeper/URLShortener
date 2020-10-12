import { urlTypes } from '../actions/types';

const { SHORTEN_ERROR, SHORTEN_LOADING, SHORTEN_URL_SUCCESS } = urlTypes;

const initialState = {
  urls: null,
  loading: false,
  error: null
};

const urlReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHORTEN_URL_SUCCESS: {
      return {
        ...state,
        loading: false,
        urls: action.payload,
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
