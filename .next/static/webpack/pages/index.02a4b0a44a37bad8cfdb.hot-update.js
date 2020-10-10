webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navigation */ \"./components/Navigation/index.js\");\n/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/selectors */ \"./store/selectors/index.js\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions */ \"./store/actions/index.js\");\n/* harmony import */ var _components_UserIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserIcon */ \"./components/UserIcon/index.js\");\n\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var authToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(_store_selectors__WEBPACK_IMPORTED_MODULE_5__[\"authSelectors\"].selectAuthToken);\n  var Logout = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_6__[\"authActions\"].logout());\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), [, dispatch, _store_actions__WEBPACK_IMPORTED_MODULE_6__[\"authActions\"]]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    Title: \"URL-shortener\",\n    Links: [{\n      title: 'Login',\n      ref: '/login',\n      condition: !!authToken,\n      replacement: __jsx(_components_UserIcon__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        Actions: [{\n          name: 'Dashboard',\n          act: function act() {}\n        }, {\n          name: 'Logout',\n          act: function act() {}\n        }],\n        Letter: authToken ? authToken.userName[0] : null\n      })\n    }]\n  }));\n};\n\n_s(Home, \"V73bNACX/comjnVxvH2QTpvTb4w=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiYXV0aFRva2VuIiwidXNlU2VsZWN0b3IiLCJhdXRoU2VsZWN0b3JzIiwic2VsZWN0QXV0aFRva2VuIiwiTG9nb3V0IiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsImRpc3BhdGNoIiwiYXV0aEFjdGlvbnMiLCJsb2dvdXQiLCJ0aXRsZSIsInJlZiIsImNvbmRpdGlvbiIsInJlcGxhY2VtZW50IiwibmFtZSIsImFjdCIsInVzZXJOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLFNBQVMsR0FBR0MsK0RBQVcsQ0FBQ0MsOERBQWEsQ0FBQ0MsZUFBZixDQUE3QjtBQUVBLE1BQU1DLE1BQU0sR0FBR0MsNENBQUssQ0FBQ0MsV0FBTixnTUFBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMvQkMsb0JBQVEsQ0FBQ0MsMERBQVcsQ0FBQ0MsTUFBWixFQUFELENBQVI7O0FBRCtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQWxCLElBRVosR0FBR0YsUUFBSCxFQUFhQywwREFBYixDQUZZLENBQWY7QUFHQSxTQUNFLG1FQUNFLE1BQUMsOERBQUQ7QUFDRSxTQUFLLEVBQUMsZUFEUjtBQUVFLFNBQUssRUFBRSxDQUNMO0FBQ0VFLFdBQUssRUFBRSxPQURUO0FBRUVDLFNBQUcsRUFBRSxRQUZQO0FBR0VDLGVBQVMsRUFBRSxDQUFDLENBQUNaLFNBSGY7QUFJRWEsaUJBQVcsRUFDVCxNQUFDLDREQUFEO0FBQ0UsZUFBTyxFQUFFLENBQ1A7QUFBRUMsY0FBSSxFQUFFLFdBQVI7QUFBcUJDLGFBQUcsRUFBRSxlQUFNLENBQUU7QUFBbEMsU0FETyxFQUVQO0FBQUVELGNBQUksRUFBRSxRQUFSO0FBQWtCQyxhQUFHLEVBQUUsZUFBTSxDQUFFO0FBQS9CLFNBRk8sQ0FEWDtBQUtFLGNBQU0sRUFBRWYsU0FBUyxHQUFHQSxTQUFTLENBQUNnQixRQUFWLENBQW1CLENBQW5CLENBQUgsR0FBMkI7QUFMOUM7QUFMSixLQURLO0FBRlQsSUFERixDQURGO0FBdUJELENBN0JEOztHQUFNakIsSTtVQUNjRSx1RDs7O0tBRGRGLEk7QUErQlNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL05hdmlnYXRpb24nO1xuaW1wb3J0IHsgYXV0aFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycyc7XG5pbXBvcnQgeyBhdXRoQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMnO1xuaW1wb3J0IFVzZXJJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckljb24nO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBhdXRoVG9rZW4gPSB1c2VTZWxlY3RvcihhdXRoU2VsZWN0b3JzLnNlbGVjdEF1dGhUb2tlbik7XG5cbiAgY29uc3QgTG9nb3V0ID0gUmVhY3QudXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAgIGRpc3BhdGNoKGF1dGhBY3Rpb25zLmxvZ291dCgpKTtcbiAgfSwgWywgZGlzcGF0Y2gsIGF1dGhBY3Rpb25zXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZpZ2F0aW9uXG4gICAgICAgIFRpdGxlPVwiVVJMLXNob3J0ZW5lclwiXG4gICAgICAgIExpbmtzPXtbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdMb2dpbicsXG4gICAgICAgICAgICByZWY6ICcvbG9naW4nLFxuICAgICAgICAgICAgY29uZGl0aW9uOiAhIWF1dGhUb2tlbixcbiAgICAgICAgICAgIHJlcGxhY2VtZW50OiAoXG4gICAgICAgICAgICAgIDxVc2VySWNvblxuICAgICAgICAgICAgICAgIEFjdGlvbnM9e1tcbiAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0Rhc2hib2FyZCcsIGFjdDogKCkgPT4ge30gfSxcbiAgICAgICAgICAgICAgICAgIHsgbmFtZTogJ0xvZ291dCcsIGFjdDogKCkgPT4ge30gfVxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgTGV0dGVyPXthdXRoVG9rZW4gPyBhdXRoVG9rZW4udXNlck5hbWVbMF0gOiBudWxsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgXX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})