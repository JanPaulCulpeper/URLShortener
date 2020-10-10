webpackHotUpdate_N_E('pages/_app', {
  /***/ './store/reducers/auth.js':
    /*!********************************!*\
  !*** ./store/reducers/auth.js ***!
  \********************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");\n/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ "./store/actions/types/index.js");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nvar AUTH_ACTION_FAILED = _actions_types__WEBPACK_IMPORTED_MODULE_1__["authTypes"].AUTH_ACTION_FAILED,\n    SIGNIN = _actions_types__WEBPACK_IMPORTED_MODULE_1__["authTypes"].SIGNIN,\n    AUTH_LOADING = _actions_types__WEBPACK_IMPORTED_MODULE_1__["authTypes"].AUTH_LOADING;\nvar initialState = {\n  error: null,\n  authToken: null,\n  loading: false\n};\n\nvar authReducer = function authReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case AUTH_ACTION_FAILED:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          error: action.payload\n        });\n      }\n\n    case SIGNIN:\n      {\n        return _objectSpread(_objectSpread({}, state), {}, {\n          error: null,\n          authToken: action.payload\n        });\n      }\n\n    case AUTH_LOADING:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        loadin: loadin\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (authReducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvYXV0aC5qcz9mNjY0Il0sIm5hbWVzIjpbIkFVVEhfQUNUSU9OX0ZBSUxFRCIsImF1dGhUeXBlcyIsIlNJR05JTiIsIkFVVEhfTE9BRElORyIsImluaXRpYWxTdGF0ZSIsImVycm9yIiwiYXV0aFRva2VuIiwibG9hZGluZyIsImF1dGhSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCIsImxvYWRpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7SUFFUUEsa0IsR0FBNkNDLHdELENBQTdDRCxrQjtJQUFvQkUsTSxHQUF5QkQsd0QsQ0FBekJDLE07SUFBUUMsWSxHQUFpQkYsd0QsQ0FBakJFLFk7QUFFcEMsSUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxPQUFLLEVBQUUsSUFEWTtBQUVuQkMsV0FBUyxFQUFFLElBRlE7QUFHbkJDLFNBQU8sRUFBRTtBQUhVLENBQXJCOztBQU1BLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQWtDO0FBQUEsTUFBakNDLEtBQWlDLHVFQUF6QkwsWUFBeUI7QUFBQSxNQUFYTSxNQUFXOztBQUNwRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLWCxrQkFBTDtBQUF5QjtBQUN2QiwrQ0FDS1MsS0FETDtBQUVFSixlQUFLLEVBQUVLLE1BQU0sQ0FBQ0U7QUFGaEI7QUFJRDs7QUFDRCxTQUFLVixNQUFMO0FBQWE7QUFDWCwrQ0FDS08sS0FETDtBQUVFSixlQUFLLEVBQUUsSUFGVDtBQUdFQyxtQkFBUyxFQUFFSSxNQUFNLENBQUNFO0FBSHBCO0FBS0Q7O0FBQ0QsU0FBS1QsWUFBTDtBQUNFLDZDQUNLTSxLQURMO0FBRUVJLGNBQU0sRUFBTkE7QUFGRjs7QUFJRjtBQUNFLGFBQU9KLEtBQVA7QUFwQko7QUFzQkQsQ0F2QkQ7O0FBeUJlRCwwRUFBZiIsImZpbGUiOiIuL3N0b3JlL3JlZHVjZXJzL2F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoVHlwZXMgfSBmcm9tICcuLi9hY3Rpb25zL3R5cGVzJztcblxuY29uc3QgeyBBVVRIX0FDVElPTl9GQUlMRUQsIFNJR05JTiwgQVVUSF9MT0FESU5HIH0gPSBhdXRoVHlwZXM7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZXJyb3I6IG51bGwsXG4gIGF1dGhUb2tlbjogbnVsbCxcbiAgbG9hZGluZzogZmFsc2Vcbn07XG5cbmNvbnN0IGF1dGhSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQVVUSF9BQ1RJT05fRkFJTEVEOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIFNJR05JTjoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICBhdXRoVG9rZW46IGFjdGlvbi5wYXlsb2FkXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIEFVVEhfTE9BRElORzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5cbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYXV0aFJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/auth.js\n'
      );

      /***/
    }
});
