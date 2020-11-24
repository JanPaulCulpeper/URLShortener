module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: ./store/actions/index.js + 2 modules
var actions = __webpack_require__("Xp8U");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: external "redux-devtools-extension/developmentOnly"
var developmentOnly_ = __webpack_require__("LEBW");

// EXTERNAL MODULE: ./store/actions/types/index.js + 2 modules
var types = __webpack_require__("MhZ2");

// CONCATENATED MODULE: ./store/reducers/auth.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const {
  AUTH_ACTION_FAILED,
  AUTH,
  AUTH_LOADING
} = types["a" /* authTypes */];
const initialState = {
  error: null,
  authToken: null,
  loading: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTION_FAILED:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: action.payload,
          loading: false
        });
      }

    case AUTH:
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          error: null,
          authToken: action.payload,
          loading: false
        });
      }

    case AUTH_LOADING:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    default:
      return state;
  }
};

/* harmony default export */ var auth = (authReducer);
// CONCATENATED MODULE: ./store/reducers/url.js
function url_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function url_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { url_ownKeys(Object(source), true).forEach(function (key) { url_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { url_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function url_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const {
  SHORTEN_ERROR,
  SHORTEN_LOADING,
  SHORTEN_URL_SUCCESS,
  FETCH_URLS_SUCCESS,
  DELETE_URL_SUCCESS
} = types["b" /* urlTypes */];
const url_initialState = {
  urls: null,
  loading: false,
  error: null
};

const urlReducer = (state = url_initialState, action) => {
  switch (action.type) {
    case DELETE_URL_SUCCESS:
      {
        return url_objectSpread(url_objectSpread({}, state), {}, {
          urls: action.payload,
          loading: false,
          currentUrl: null,
          error: null
        });
      }

    case FETCH_URLS_SUCCESS:
      {
        return url_objectSpread(url_objectSpread({}, state), {}, {
          error: null,
          loading: null,
          urls: action.payload
        });
      }

    case SHORTEN_URL_SUCCESS:
      {
        return url_objectSpread(url_objectSpread({}, state), {}, {
          loading: false,
          currentUrl: action.payload,
          error: null
        });
      }

    case SHORTEN_ERROR:
      {
        return url_objectSpread(url_objectSpread({}, state), {}, {
          error: action.payload,
          loading: false
        });
      }

    case SHORTEN_LOADING:
      {
        return url_objectSpread(url_objectSpread({}, state), {}, {
          loading: true
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ var url = (urlReducer);
// CONCATENATED MODULE: ./store/reducers/index.js



/* harmony default export */ var reducers = (Object(external_redux_["combineReducers"])({
  auth: auth,
  url: url
}));
// CONCATENATED MODULE: ./services/redux.js




const store = Object(external_redux_["createStore"])(reducers, Object(developmentOnly_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a)));
/* harmony default export */ var redux = (store);
// EXTERNAL MODULE: ./app.css
var app = __webpack_require__("PAfn");

// EXTERNAL MODULE: ./node_modules/fontsource-roboto/index.css
var fontsource_roboto = __webpack_require__("B1U6");

// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__("jDDT");

// CONCATENATED MODULE: ./pages/_app.js
var __jsx = external_react_default.a.createElement;









const theme = {};

const Child = ({
  Component,
  pageProps
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const init = external_react_default.a.useCallback(() => {
    dispatch(actions["a" /* authActions */].verifyAuth());
  }, [dispatch]);
  external_react_default.a.useEffect(() => {
    init();
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles);
  }, []);
  return __jsx(external_react_default.a.Fragment, null, __jsx(Component, pageProps));
};

const App = props => {
  return __jsx(external_react_default.a.Fragment, null, __jsx(external_react_redux_["Provider"], {
    store: redux
  }, __jsx(external_styled_components_["ThemeProvider"], {
    theme: theme
  }, __jsx("div", null, __jsx(Child, props)))));
};

Child.defaultProps = {
  pageProps: {}
};

const makestore = () => redux;

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(makestore);
/* harmony default export */ var _app = __webpack_exports__["default"] = (wrapper.withRedux(App));

/***/ }),

/***/ "B1U6":
/***/ (function(module, exports) {



/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "LEBW":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension/developmentOnly");

/***/ }),

/***/ "MhZ2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ auth_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ url_namespaceObject; });

// NAMESPACE OBJECT: ./store/actions/types/auth.js
var auth_namespaceObject = {};
__webpack_require__.r(auth_namespaceObject);
__webpack_require__.d(auth_namespaceObject, "AUTH", function() { return AUTH; });
__webpack_require__.d(auth_namespaceObject, "AUTH_ACTION_FAILED", function() { return AUTH_ACTION_FAILED; });
__webpack_require__.d(auth_namespaceObject, "AUTH_LOADING", function() { return AUTH_LOADING; });

// NAMESPACE OBJECT: ./store/actions/types/url.js
var url_namespaceObject = {};
__webpack_require__.r(url_namespaceObject);
__webpack_require__.d(url_namespaceObject, "SHORTEN_URL_SUCCESS", function() { return SHORTEN_URL_SUCCESS; });
__webpack_require__.d(url_namespaceObject, "SHORTEN_LOADING", function() { return SHORTEN_LOADING; });
__webpack_require__.d(url_namespaceObject, "SHORTEN_ERROR", function() { return SHORTEN_ERROR; });
__webpack_require__.d(url_namespaceObject, "FETCH_URLS_SUCCESS", function() { return FETCH_URLS_SUCCESS; });
__webpack_require__.d(url_namespaceObject, "DELETE_URL_SUCCESS", function() { return DELETE_URL_SUCCESS; });

// CONCATENATED MODULE: ./store/actions/types/auth.js
const AUTH = 'AUTH';
const AUTH_ACTION_FAILED = 'AUTH_ACTION_FAILED';
const AUTH_LOADING = 'AUTH_LOADING';
// CONCATENATED MODULE: ./store/actions/types/url.js
const SHORTEN_URL_SUCCESS = 'SHORTEN_URL_SUCCESS';
const SHORTEN_LOADING = 'SHORTEN_LOADING';
const SHORTEN_ERROR = 'SHORTEN_ERROR';
const FETCH_URLS_SUCCESS = 'FETCH_URLS_SUCCESS';
const DELETE_URL_SUCCESS = 'DELETE_URL_SUCCESS';
// CONCATENATED MODULE: ./store/actions/types/index.js




/***/ }),

/***/ "PAfn":
/***/ (function(module, exports) {



/***/ }),

/***/ "Xp8U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ auth_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ url_namespaceObject; });

// NAMESPACE OBJECT: ./store/actions/auth.js
var auth_namespaceObject = {};
__webpack_require__.r(auth_namespaceObject);
__webpack_require__.d(auth_namespaceObject, "verifyAuth", function() { return verifyAuth; });
__webpack_require__.d(auth_namespaceObject, "login", function() { return login; });
__webpack_require__.d(auth_namespaceObject, "signup", function() { return signup; });
__webpack_require__.d(auth_namespaceObject, "logout", function() { return logout; });
__webpack_require__.d(auth_namespaceObject, "clearError", function() { return clearError; });

// NAMESPACE OBJECT: ./store/actions/url.js
var url_namespaceObject = {};
__webpack_require__.r(url_namespaceObject);
__webpack_require__.d(url_namespaceObject, "shorten", function() { return shorten; });
__webpack_require__.d(url_namespaceObject, "fetchUrls", function() { return fetchUrls; });
__webpack_require__.d(url_namespaceObject, "deleteUrl", function() { return deleteUrl; });

// EXTERNAL MODULE: ./store/actions/types/index.js + 2 modules
var types = __webpack_require__("MhZ2");

// EXTERNAL MODULE: ./constants.js
var constants = __webpack_require__("xPX6");

// CONCATENATED MODULE: ./store/actions/auth.js


const {
  AUTH_ACTION_FAILED,
  AUTH,
  AUTH_LOADING
} = types["a" /* authTypes */];
const verifyAuth = () => async dispatch => {
  dispatch({
    type: AUTH_LOADING
  });

  try {
    const res = await fetch(`${constants["a" /* default */]}api/auth/verify`);
    dispatch({
      type: AUTH,
      payload: (await res.json()).user
    });
  } catch (err) {
    dispatch({
      type: AUTH_ACTION_FAILED,
      payload: err
    });
  }
};
const login = credentials => async dispatch => {
  dispatch({
    type: AUTH_LOADING
  });

  try {
    const res = await fetch(`${constants["a" /* default */]}api/auth/login`, {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    if (data.errors) {
      dispatch({
        type: AUTH_ACTION_FAILED,
        payload: data.errors
      });
    }

    if (data.user) {
      dispatch({
        type: AUTH,
        payload: data.user
      });
    }
  } catch (err) {
    dispatch({
      type: AUTH_ACTION_FAILED,
      payload: err
    });
  }
}; // export const logouot = () => (dispatch, getState) => {};

const signup = ({
  email,
  password,
  userName
}) => async dispatch => {
  dispatch({
    type: AUTH_LOADING
  });

  try {
    const res = await fetch(`${constants["a" /* default */]}api/auth/signup`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
        userName
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();

    if (data.errors) {
      dispatch({
        type: AUTH_ACTION_FAILED,
        payload: data.errors
      });
    }

    if (data.user) {
      dispatch({
        type: AUTH,
        payload: data.user
      });
    }
  } catch (err) {
    dispatch({
      type: AUTH_ACTION_FAILED,
      payload: err
    });
  }
};
const logout = () => async dispatch => {
  try {
    const res = await fetch(`${constants["a" /* default */]}api/auth/logout`);
    const data = await res.json();

    if (data.errors) {
      dispatch({
        type: AUTH_ACTION_FAILED,
        payload: data.errors
      });
    } else {
      dispatch({
        type: AUTH,
        payload: data.user
      });
    }
  } catch (err) {
    dispatch({
      type: AUTH_ACTION_FAILED,
      payload: err
    });
  }
};
const clearError = () => dispatch => {
  dispatch({
    type: AUTH_ACTION_FAILED,
    payload: null
  });
};
// CONCATENATED MODULE: ./store/actions/url.js


const {
  SHORTEN_ERROR,
  SHORTEN_LOADING,
  SHORTEN_URL_SUCCESS,
  FETCH_URLS_SUCCESS,
  DELETE_URL_SUCCESS
} = types["b" /* urlTypes */];
const shorten = ({
  url,
  custom
}) => async dispatch => {
  dispatch({
    type: SHORTEN_LOADING
  });

  try {
    const res = await fetch(`${constants["a" /* default */]}api/url/create`, {
      method: 'POST',
      body: JSON.stringify({
        url,
        custom
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    if (res.status === 201) dispatch({
      type: SHORTEN_URL_SUCCESS,
      payload: data
    });else {
      dispatch({
        type: SHORTEN_ERROR,
        payload: data
      });
    }
  } catch (err) {
    dispatch({
      type: SHORTEN_ERROR,
      payload: err
    });
  }
};
const fetchUrls = () => async dispatch => {
  dispatch({
    type: SHORTEN_LOADING
  });

  try {
    const res = await fetch(`${constants["a" /* default */]}api/url/all`);
    const data = await res.json();
    dispatch({
      type: FETCH_URLS_SUCCESS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: SHORTEN_ERROR,
      payload: err
    });
  }
};
const deleteUrl = key => async dispatch => {
  dispatch({
    type: SHORTEN_LOADING
  });

  try {
    const res = await fetch(`${constants["a" /* default */]}api/url/delete`, {
      method: 'POST',
      body: JSON.stringify({
        key
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    dispatch({
      type: DELETE_URL_SUCCESS,
      payload: data
    });
  } catch (err) {
    dispatch({
      type: SHORTEN_ERROR,
      payload: err
    });
  }
};
// CONCATENATED MODULE: ./store/actions/index.js




/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "jDDT":
/***/ (function(module, exports) {



/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "xPX6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const URL = process.env.production ? '' : 'http://localhost:3000/';
/* harmony default export */ __webpack_exports__["a"] = (URL);

/***/ })

/******/ });