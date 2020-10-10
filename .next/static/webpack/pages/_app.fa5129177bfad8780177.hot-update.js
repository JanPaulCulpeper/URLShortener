webpackHotUpdate_N_E('pages/_app', {
  /***/ './store/actions/auth.js':
    /*!*******************************!*\
  !*** ./store/actions/auth.js ***!
  \*******************************/
    /*! exports provided: verifyAuth, login, signup, logout */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyAuth", function() { return verifyAuth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./types */ "./store/actions/types/index.js");\n\n\n\nvar AUTH_ACTION_FAILED = _types__WEBPACK_IMPORTED_MODULE_2__["authTypes"].AUTH_ACTION_FAILED,\n    AUTH = _types__WEBPACK_IMPORTED_MODULE_2__["authTypes"].AUTH,\n    AUTH_LOADING = _types__WEBPACK_IMPORTED_MODULE_2__["authTypes"].AUTH_LOADING;\nvar verifyAuth = function verifyAuth() {\n  return /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              dispatch({\n                type: AUTH_LOADING\n              });\n              _context.prev = 1;\n              _context.next = 4;\n              return fetch(\'http://localhost:5000/api/auth/verify\');\n\n            case 4:\n              res = _context.sent;\n              _context.t0 = dispatch;\n              _context.t1 = AUTH;\n              _context.next = 9;\n              return res.json();\n\n            case 9:\n              _context.t2 = _context.sent.user;\n              _context.t3 = {\n                type: _context.t1,\n                payload: _context.t2\n              };\n              (0, _context.t0)(_context.t3);\n              _context.next = 17;\n              break;\n\n            case 14:\n              _context.prev = 14;\n              _context.t4 = _context["catch"](1);\n              dispatch({\n                type: AUTH_ACTION_FAILED,\n                payload: _context.t4\n              });\n\n            case 17:\n            case "end":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 14]]);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar login = function login(credentials) {\n  return /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {\n      var res, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              dispatch({\n                type: AUTH_LOADING\n              });\n              _context2.prev = 1;\n              _context2.next = 4;\n              return fetch(\'http://localhost:5000/api/auth/login\', {\n                method: \'POST\',\n                body: JSON.stringify(credentials),\n                headers: {\n                  \'Content-Type\': \'application/json\'\n                }\n              });\n\n            case 4:\n              res = _context2.sent;\n              _context2.next = 7;\n              return res.json();\n\n            case 7:\n              data = _context2.sent;\n\n              if (data.errors) {\n                dispatch({\n                  type: AUTH_ACTION_FAILED,\n                  payload: data.errors\n                });\n              }\n\n              if (data.user) {\n                dispatch({\n                  type: AUTH,\n                  payload: data.user\n                });\n              }\n\n              _context2.next = 15;\n              break;\n\n            case 12:\n              _context2.prev = 12;\n              _context2.t0 = _context2["catch"](1);\n              dispatch({\n                type: AUTH_ACTION_FAILED,\n                payload: _context2.t0\n              });\n\n            case 15:\n            case "end":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[1, 12]]);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n}; // export const logouot = () => (dispatch, getState) => {};\n\nvar signup = function signup(_ref3) {\n  var email = _ref3.email,\n      password = _ref3.password,\n      userName = _ref3.userName;\n  return /*#__PURE__*/function () {\n    var _ref4 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {\n      var res, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              dispatch({\n                type: AUTH_LOADING\n              });\n              _context3.prev = 1;\n              _context3.next = 4;\n              return fetch(\'http://localhost:5000/api/auth/signup\', {\n                method: \'POST\',\n                body: JSON.stringify({\n                  email: email,\n                  password: password,\n                  userName: userName\n                }),\n                headers: {\n                  \'Content-Type\': \'application/json\'\n                }\n              });\n\n            case 4:\n              res = _context3.sent;\n              _context3.next = 7;\n              return res.json();\n\n            case 7:\n              data = _context3.sent;\n\n              if (data.errors) {\n                dispatch({\n                  type: AUTH_ACTION_FAILED,\n                  payload: data.errors\n                });\n              }\n\n              if (data.user) {\n                dispatch({\n                  type: AUTH,\n                  payload: data.user\n                });\n              }\n\n              _context3.next = 15;\n              break;\n\n            case 12:\n              _context3.prev = 12;\n              _context3.t0 = _context3["catch"](1);\n              dispatch({\n                type: AUTH_ACTION_FAILED,\n                payload: _context3.t0\n              });\n\n            case 15:\n            case "end":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[1, 12]]);\n    }));\n\n    return function (_x3) {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n};\nvar logout = function logout() {\n  return /*#__PURE__*/function () {\n    var _ref5 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {\n      var res, data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.prev = 0;\n              _context4.next = 3;\n              return fetch(\'http://localhost:5000/api/auth/logout\');\n\n            case 3:\n              res = _context4.sent;\n              _context4.next = 6;\n              return res.json();\n\n            case 6:\n              data = _context4.sent;\n              console.log(data);\n\n              if (data.errors) {\n                dispatch({\n                  type: AUTH_ACTION_FAILED,\n                  payload: data.errors\n                });\n              }\n\n              if (data.user) {\n                dispatch({\n                  type: AUTH,\n                  payload: data.user\n                });\n              }\n\n              _context4.next = 15;\n              break;\n\n            case 12:\n              _context4.prev = 12;\n              _context4.t0 = _context4["catch"](0);\n              dispatch({\n                type: AUTH_ACTION_FAILED,\n                payload: _context4.t0\n              });\n\n            case 15:\n            case "end":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, null, [[0, 12]]);\n    }));\n\n    return function (_x4) {\n      return _ref5.apply(this, arguments);\n    };\n  }();\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9hdXRoLmpzPzM3YmUiXSwibmFtZXMiOlsiQVVUSF9BQ1RJT05fRkFJTEVEIiwiYXV0aFR5cGVzIiwiQVVUSCIsIkFVVEhfTE9BRElORyIsInZlcmlmeUF1dGgiLCJkaXNwYXRjaCIsInR5cGUiLCJmZXRjaCIsInJlcyIsImpzb24iLCJ1c2VyIiwicGF5bG9hZCIsImxvZ2luIiwiY3JlZGVudGlhbHMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJkYXRhIiwiZXJyb3JzIiwic2lnbnVwIiwiZW1haWwiLCJwYXNzd29yZCIsInVzZXJOYW1lIiwibG9nb3V0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtJQUVRQSxrQixHQUEyQ0MsZ0QsQ0FBM0NELGtCO0lBQW9CRSxJLEdBQXVCRCxnRCxDQUF2QkMsSTtJQUFNQyxZLEdBQWlCRixnRCxDQUFqQkUsWTtBQUUzQixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBO0FBQUEsZ01BQU0saUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzlCQSxzQkFBUSxDQUFDO0FBQUVDLG9CQUFJLEVBQUVIO0FBQVIsZUFBRCxDQUFSO0FBRDhCO0FBQUE7QUFBQSxxQkFHVkksS0FBSyxDQUFDLHVDQUFELENBSEs7O0FBQUE7QUFHdEJDLGlCQUhzQjtBQUFBLDRCQUk1QkgsUUFKNEI7QUFBQSw0QkFJWEgsSUFKVztBQUFBO0FBQUEscUJBSVdNLEdBQUcsQ0FBQ0MsSUFBSixFQUpYOztBQUFBO0FBQUEsMENBSXVCQyxJQUp2QjtBQUFBO0FBSWpCSixvQkFKaUI7QUFJTEssdUJBSks7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFNNUJOLHNCQUFRLENBQUM7QUFDUEMsb0JBQUksRUFBRU4sa0JBREM7QUFFUFcsdUJBQU87QUFGQSxlQUFELENBQVI7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O0FBQW5DLGVBQUQsQ0FBUjs7QUFqQnFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW5DOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBZjtBQXFCQSxJQUFNYyxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBO0FBQUEsaU1BQU0sa0JBQU9wQixRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFTkUsS0FBSyxDQUFDLHVDQUFELENBRkM7O0FBQUE7QUFFbEJDLGlCQUZrQjtBQUFBO0FBQUEscUJBSUxBLEdBQUcsQ0FBQ0MsSUFBSixFQUpLOztBQUFBO0FBSWxCVSxrQkFKa0I7QUFLeEJPLHFCQUFPLENBQUNDLEdBQVIsQ0FBWVIsSUFBWjs7QUFFQSxrQkFBSUEsSUFBSSxDQUFDQyxNQUFULEVBQWlCO0FBQ2ZmLHdCQUFRLENBQUM7QUFBRUMsc0JBQUksRUFBRU4sa0JBQVI7QUFBNEJXLHlCQUFPLEVBQUVRLElBQUksQ0FBQ0M7QUFBMUMsaUJBQUQsQ0FBUjtBQUNEOztBQUNELGtCQUFJRCxJQUFJLENBQUNULElBQVQsRUFBZTtBQUNiTCx3QkFBUSxDQUFDO0FBQUVDLHNCQUFJLEVBQUVKLElBQVI7QUFBY1MseUJBQU8sRUFBRVEsSUFBSSxDQUFDVDtBQUE1QixpQkFBRCxDQUFSO0FBQ0Q7O0FBWnVCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBY3hCTCxzQkFBUSxDQUFDO0FBQUVDLG9CQUFJLEVBQUVOLGtCQUFSO0FBQTRCVyx1QkFBTztBQUFuQyxlQUFELENBQVI7O0FBZHdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU47O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFmIiwiZmlsZSI6Ii4vc3RvcmUvYWN0aW9ucy9hdXRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXV0aFR5cGVzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IHsgQVVUSF9BQ1RJT05fRkFJTEVELCBBVVRILCBBVVRIX0xPQURJTkcgfSA9IGF1dGhUeXBlcztcblxuZXhwb3J0IGNvbnN0IHZlcmlmeUF1dGggPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goeyB0eXBlOiBBVVRIX0xPQURJTkcgfSk7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvYXV0aC92ZXJpZnknKTtcbiAgICBkaXNwYXRjaCh7IHR5cGU6IEFVVEgsIHBheWxvYWQ6IChhd2FpdCByZXMuanNvbigpKS51c2VyIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBBVVRIX0FDVElPTl9GQUlMRUQsXG4gICAgICBwYXlsb2FkOiBlcnJcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gKGNyZWRlbnRpYWxzKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goeyB0eXBlOiBBVVRIX0xPQURJTkcgfSk7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvYXV0aC9sb2dpbicsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY3JlZGVudGlhbHMpLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgICB9KTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGlmIChkYXRhLmVycm9ycykge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBVVRIX0FDVElPTl9GQUlMRUQsIHBheWxvYWQ6IGRhdGEuZXJyb3JzIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS51c2VyKSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEFVVEgsIHBheWxvYWQ6IGRhdGEudXNlciB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQVVUSF9BQ1RJT05fRkFJTEVELCBwYXlsb2FkOiBlcnIgfSk7XG4gIH1cbn07XG4vLyBleHBvcnQgY29uc3QgbG9nb3VvdCA9ICgpID0+IChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHt9O1xuZXhwb3J0IGNvbnN0IHNpZ251cCA9ICh7IGVtYWlsLCBwYXNzd29yZCwgdXNlck5hbWUgfSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHsgdHlwZTogQVVUSF9MT0FESU5HIH0pO1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2F1dGgvc2lnbnVwJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCwgdXNlck5hbWUgfSksXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgaWYgKGRhdGEuZXJyb3JzKSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEFVVEhfQUNUSU9OX0ZBSUxFRCwgcGF5bG9hZDogZGF0YS5lcnJvcnMgfSk7XG4gICAgfVxuICAgIGlmIChkYXRhLnVzZXIpIHtcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogQVVUSCwgcGF5bG9hZDogZGF0YS51c2VyIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZGlzcGF0Y2goeyB0eXBlOiBBVVRIX0FDVElPTl9GQUlMRUQsIHBheWxvYWQ6IGVyciB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2F1dGgvbG9nb3V0Jyk7XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgIGlmIChkYXRhLmVycm9ycykge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBBVVRIX0FDVElPTl9GQUlMRUQsIHBheWxvYWQ6IGRhdGEuZXJyb3JzIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS51c2VyKSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6IEFVVEgsIHBheWxvYWQ6IGRhdGEudXNlciB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQVVUSF9BQ1RJT05fRkFJTEVELCBwYXlsb2FkOiBlcnIgfSk7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/actions/auth.js\n'
      );

      /***/
    }
});
