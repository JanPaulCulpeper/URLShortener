webpackHotUpdate_N_E('pages/index', {
  /***/ './pages/index.js':
    /*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation/index.js");\n/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/selectors */ "./store/selectors/index.js");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/actions */ "./store/actions/index.js");\n/* harmony import */ var _components_UserIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/UserIcon */ "./components/UserIcon/index.js");\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var authToken = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(_store_selectors__WEBPACK_IMPORTED_MODULE_3__["authSelectors"].selectAuthToken);\n  var Logout = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function () {}, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__["default"], {\n    Title: "URL-shortener",\n    Links: [{\n      title: \'Login\',\n      ref: \'/login\',\n      condition: !!authToken,\n      replacement: __jsx(_components_UserIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {\n        Actions: [{\n          name: \'Dashboard\',\n          act: function act() {}\n        }, {\n          name: \'Logout\',\n          act: function act() {}\n        }],\n        Letter: authToken ? authToken.userName[0] : null\n      })\n    }]\n  }));\n};\n\n_s(Home, "V73bNACX/comjnVxvH2QTpvTb4w=", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__["default"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, "Home");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiYXV0aFRva2VuIiwidXNlU2VsZWN0b3IiLCJhdXRoU2VsZWN0b3JzIiwic2VsZWN0QXV0aFRva2VuIiwiTG9nb3V0IiwiUmVhY3QiLCJ1c2VDYWxsYmFjayIsInRpdGxlIiwicmVmIiwiY29uZGl0aW9uIiwicmVwbGFjZW1lbnQiLCJuYW1lIiwiYWN0IiwidXNlck5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsU0FBUyxHQUFHQywrREFBVyxDQUFDQyw4REFBYSxDQUFDQyxlQUFmLENBQTdCO0FBRUEsTUFBTUMsTUFBTSxHQUFHQyw0Q0FBSyxDQUFDQyxXQUFOLENBQWtCLFlBQU0sQ0FBRSxDQUExQixFQUE0QixFQUE1QixDQUFmO0FBQ0EsU0FDRSxtRUFDRSxNQUFDLDhEQUFEO0FBQ0UsU0FBSyxFQUFDLGVBRFI7QUFFRSxTQUFLLEVBQUUsQ0FDTDtBQUNFQyxXQUFLLEVBQUUsT0FEVDtBQUVFQyxTQUFHLEVBQUUsUUFGUDtBQUdFQyxlQUFTLEVBQUUsQ0FBQyxDQUFDVCxTQUhmO0FBSUVVLGlCQUFXLEVBQ1QsTUFBQyw0REFBRDtBQUNFLGVBQU8sRUFBRSxDQUNQO0FBQUVDLGNBQUksRUFBRSxXQUFSO0FBQXFCQyxhQUFHLEVBQUUsZUFBTSxDQUFFO0FBQWxDLFNBRE8sRUFFUDtBQUFFRCxjQUFJLEVBQUUsUUFBUjtBQUFrQkMsYUFBRyxFQUFFLGVBQU0sQ0FBRTtBQUEvQixTQUZPLENBRFg7QUFLRSxjQUFNLEVBQUVaLFNBQVMsR0FBR0EsU0FBUyxDQUFDYSxRQUFWLENBQW1CLENBQW5CLENBQUgsR0FBMkI7QUFMOUM7QUFMSixLQURLO0FBRlQsSUFERixDQURGO0FBdUJELENBM0JEOztHQUFNZCxJO1VBQ2NFLHVEOzs7S0FEZEYsSTtBQTZCU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlRGlzcGF0Y2gsIHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XG5pbXBvcnQgeyBhdXRoU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzJztcbmltcG9ydCB7IGF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucyc7XG5pbXBvcnQgVXNlckljb24gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VySWNvbic7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGF1dGhUb2tlbiA9IHVzZVNlbGVjdG9yKGF1dGhTZWxlY3RvcnMuc2VsZWN0QXV0aFRva2VuKTtcblxuICBjb25zdCBMb2dvdXQgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7fSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2aWdhdGlvblxuICAgICAgICBUaXRsZT1cIlVSTC1zaG9ydGVuZXJcIlxuICAgICAgICBMaW5rcz17W1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnTG9naW4nLFxuICAgICAgICAgICAgcmVmOiAnL2xvZ2luJyxcbiAgICAgICAgICAgIGNvbmRpdGlvbjogISFhdXRoVG9rZW4sXG4gICAgICAgICAgICByZXBsYWNlbWVudDogKFxuICAgICAgICAgICAgICA8VXNlckljb25cbiAgICAgICAgICAgICAgICBBY3Rpb25zPXtbXG4gICAgICAgICAgICAgICAgICB7IG5hbWU6ICdEYXNoYm9hcmQnLCBhY3Q6ICgpID0+IHt9IH0sXG4gICAgICAgICAgICAgICAgICB7IG5hbWU6ICdMb2dvdXQnLCBhY3Q6ICgpID0+IHt9IH1cbiAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIExldHRlcj17YXV0aFRva2VuID8gYXV0aFRva2VuLnVzZXJOYW1lWzBdIDogbnVsbH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIF19XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n'
      );

      /***/
    }
});
