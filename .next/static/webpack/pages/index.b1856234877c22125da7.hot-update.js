webpackHotUpdate_N_E('pages/index', {
  /***/ './pages/index.js':
    /*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation/index.js");\n/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/selectors */ "./store/selectors/index.js");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions */ "./store/actions/index.js");\n/* harmony import */ var _components_UserIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserIcon */ "./components/UserIcon/index.js");\n\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();\n  var authToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_store_selectors__WEBPACK_IMPORTED_MODULE_5__["authSelectors"].selectAuthToken);\n  var Logout = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_6__["authActions"].logout());\n\n          case 1:\n          case "end":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), [dispatch, _store_actions__WEBPACK_IMPORTED_MODULE_6__["authActions"]]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__["default"], {\n    Title: "URL-shortener",\n    Links: [{\n      title: \'Login\',\n      ref: \'/login\',\n      condition: !!authToken,\n      replacement: __jsx(_components_UserIcon__WEBPACK_IMPORTED_MODULE_7__["default"], {\n        Actions: [{\n          name: \'Dashboard\',\n          act: function act() {}\n        }, {\n          name: \'Logout\',\n          act: function act() {}\n        }],\n        Letter: authToken ? authToken.userName[0] : null\n      })\n    }]\n  }));\n};\n\n_s(Home, "OAjtXmMqb5xCEywb3mdYNHkVxrI=", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__["default"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, "Home");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImF1dGhUb2tlbiIsInVzZVNlbGVjdG9yIiwiYXV0aFNlbGVjdG9ycyIsInNlbGVjdEF1dGhUb2tlbiIsIkxvZ291dCIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJhdXRoQWN0aW9ucyIsImxvZ291dCIsInRpdGxlIiwicmVmIiwiY29uZGl0aW9uIiwicmVwbGFjZW1lbnQiLCJuYW1lIiwiYWN0IiwidXNlck5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLFNBQVMsR0FBR0MsK0RBQVcsQ0FBQ0MsOERBQWEsQ0FBQ0MsZUFBZixDQUE3QjtBQUVBLE1BQU1DLE1BQU0sR0FBR0MsNENBQUssQ0FBQ0MsV0FBTixnTUFBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMvQlIsb0JBQVEsQ0FBQ1MsMERBQVcsQ0FBQ0MsTUFBWixFQUFELENBQVI7O0FBRCtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWxCLElBRVosQ0FBQ1YsUUFBRCxFQUFXUywwREFBWCxDQUZZLENBQWY7QUFHQSxTQUNFLG1FQUNFLE1BQUMsOERBQUQ7QUFDRSxTQUFLLEVBQUMsZUFEUjtBQUVFLFNBQUssRUFBRSxDQUNMO0FBQ0VFLFdBQUssRUFBRSxPQURUO0FBRUVDLFNBQUcsRUFBRSxRQUZQO0FBR0VDLGVBQVMsRUFBRSxDQUFDLENBQUNYLFNBSGY7QUFJRVksaUJBQVcsRUFDVCxNQUFDLDREQUFEO0FBQ0UsZUFBTyxFQUFFLENBQ1A7QUFBRUMsY0FBSSxFQUFFLFdBQVI7QUFBcUJDLGFBQUcsRUFBRSxlQUFNLENBQUU7QUFBbEMsU0FETyxFQUVQO0FBQUVELGNBQUksRUFBRSxRQUFSO0FBQWtCQyxhQUFHLEVBQUUsZUFBTSxDQUFFO0FBQS9CLFNBRk8sQ0FEWDtBQUtFLGNBQU0sRUFBRWQsU0FBUyxHQUFHQSxTQUFTLENBQUNlLFFBQVYsQ0FBbUIsQ0FBbkIsQ0FBSCxHQUEyQjtBQUw5QztBQUxKLEtBREs7QUFGVCxJQURGLENBREY7QUF1QkQsQ0E5QkQ7O0dBQU1sQixJO1VBQ2FFLHVELEVBQ0NFLHVEOzs7S0FGZEosSTtBQWdDU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XG5pbXBvcnQgeyBhdXRoU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzJztcbmltcG9ydCB7IGF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgVXNlckljb24gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VySWNvbic7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgYXV0aFRva2VuID0gdXNlU2VsZWN0b3IoYXV0aFNlbGVjdG9ycy5zZWxlY3RBdXRoVG9rZW4pO1xuXG4gIGNvbnN0IExvZ291dCA9IFJlYWN0LnVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBkaXNwYXRjaChhdXRoQWN0aW9ucy5sb2dvdXQoKSk7XG4gIH0sIFtkaXNwYXRjaCwgYXV0aEFjdGlvbnNdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmlnYXRpb25cbiAgICAgICAgVGl0bGU9XCJVUkwtc2hvcnRlbmVyXCJcbiAgICAgICAgTGlua3M9e1tcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ0xvZ2luJyxcbiAgICAgICAgICAgIHJlZjogJy9sb2dpbicsXG4gICAgICAgICAgICBjb25kaXRpb246ICEhYXV0aFRva2VuLFxuICAgICAgICAgICAgcmVwbGFjZW1lbnQ6IChcbiAgICAgICAgICAgICAgPFVzZXJJY29uXG4gICAgICAgICAgICAgICAgQWN0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnRGFzaGJvYXJkJywgYWN0OiAoKSA9PiB7fSB9LFxuICAgICAgICAgICAgICAgICAgeyBuYW1lOiAnTG9nb3V0JywgYWN0OiAoKSA9PiB7fSB9XG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICBMZXR0ZXI9e2F1dGhUb2tlbiA/IGF1dGhUb2tlbi51c2VyTmFtZVswXSA6IG51bGx9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICBdfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n'
      );

      /***/
    }
});
