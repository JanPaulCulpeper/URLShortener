webpackHotUpdate_N_E('pages/index', {
  /***/ './components/UserIcon/index.js':
    /*!**************************************!*\
  !*** ./components/UserIcon/index.js ***!
  \**************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");\n/* harmony import */ var _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/colors/purple */ "./node_modules/@material-ui/core/colors/purple.js");\n/* harmony import */ var _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {\n  return {\n    root: {\n      display: \'flex\'\n    },\n    paper: {\n      marginRight: theme.spacing(2)\n    },\n    avatar: {\n      backgroundColor: _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_4___default.a[500]\n    }\n  };\n});\n\nvar UserIcon = function UserIcon(_ref) {\n  _s();\n\n  var Letter = _ref.Letter;\n  var classes = useStyles();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),\n      open = _React$useState2[0],\n      setOpen = _React$useState2[1];\n\n  var anchorRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);\n\n  var handleToggle = function handleToggle() {\n    setOpen(function (prevOpen) {\n      return !prevOpen;\n    });\n  };\n\n  var handleClose = function handleClose(event) {\n    if (anchorRef.current && anchorRef.current.contains(event.target)) {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {\n    onClick: handleClick\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {\n    className: classes.avatar\n  }, Letter)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Menu"], {\n    id: "simple-menu",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handleClose\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {\n    onClick: handleClose\n  }, "Profile"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {\n    onClick: handleClose\n  }, "My account"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {\n    onClick: handleClose\n  }, "Logout")));\n};\n\n_s(UserIcon, "ofUJ/6lNXZzC79SHYgq4elyC9Ww=", false, function () {\n  return [useStyles];\n});\n\n_c = UserIcon;\nUserIcon.propTypes = {\n  Letter: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string\n};\nUserIcon.defaultProps = {\n  Letter: \'E\'\n};\n/* harmony default export */ __webpack_exports__["default"] = (UserIcon);\n\nvar _c;\n\n$RefreshReg$(_c, "UserIcon");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VySWNvbi9pbmRleC5qcz84NmM0Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwicGFwZXIiLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJhdmF0YXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwdXJwbGUiLCJVc2VySWNvbiIsIkxldHRlciIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJhbmNob3JSZWYiLCJ1c2VSZWYiLCJoYW5kbGVUb2dnbGUiLCJwcmV2T3BlbiIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJoYW5kbGVDbGljayIsImFuY2hvckVsIiwiQm9vbGVhbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRTtBQURMLEtBRGlDO0FBSXZDQyxTQUFLLEVBQUU7QUFDTEMsaUJBQVcsRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZDtBQURSLEtBSmdDO0FBT3ZDQyxVQUFNLEVBQUU7QUFDTkMscUJBQWUsRUFBRUMsc0VBQU0sQ0FBQyxHQUFEO0FBRGpCO0FBUCtCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQVlBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWdCO0FBQUE7O0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQy9CLE1BQU1DLE9BQU8sR0FBR2IsU0FBUyxFQUF6Qjs7QUFEK0Isd0JBRVBjLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRk87QUFBQTtBQUFBLE1BRXhCQyxJQUZ3QjtBQUFBLE1BRWxCQyxPQUZrQjs7QUFHL0IsTUFBTUMsU0FBUyxHQUFHSiw0Q0FBSyxDQUFDSyxNQUFOLENBQWEsSUFBYixDQUFsQjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCSCxXQUFPLENBQUMsVUFBQ0ksUUFBRDtBQUFBLGFBQWMsQ0FBQ0EsUUFBZjtBQUFBLEtBQUQsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzdCLFFBQUlMLFNBQVMsQ0FBQ00sT0FBVixJQUFxQk4sU0FBUyxDQUFDTSxPQUFWLENBQWtCQyxRQUFsQixDQUEyQkYsS0FBSyxDQUFDRyxNQUFqQyxDQUF6QixFQUFtRTtBQUNqRTtBQUNEOztBQUVEVCxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0QsR0FORDs7QUFPQSxTQUNFLG1FQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUVVO0FBQXJCLEtBQ0UsTUFBQyx3REFBRDtBQUFRLGFBQVMsRUFBRWQsT0FBTyxDQUFDTDtBQUEzQixLQUFvQ0ksTUFBcEMsQ0FERixDQURGLEVBSUUsTUFBQyxzREFBRDtBQUNFLE1BQUUsRUFBQyxhQURMO0FBRUUsWUFBUSxFQUFFZ0IsUUFGWjtBQUdFLGVBQVcsTUFIYjtBQUlFLFFBQUksRUFBRUMsT0FBTyxDQUFDRCxRQUFELENBSmY7QUFLRSxXQUFPLEVBQUVOO0FBTFgsS0FPRSxNQUFDLDBEQUFEO0FBQVUsV0FBTyxFQUFFQTtBQUFuQixlQVBGLEVBUUUsTUFBQywwREFBRDtBQUFVLFdBQU8sRUFBRUE7QUFBbkIsa0JBUkYsRUFTRSxNQUFDLDBEQUFEO0FBQVUsV0FBTyxFQUFFQTtBQUFuQixjQVRGLENBSkYsQ0FERjtBQWtCRCxDQWxDRDs7R0FBTVgsUTtVQUNZWCxTOzs7S0FEWlcsUTtBQW9DTkEsUUFBUSxDQUFDbUIsU0FBVCxHQUFxQjtBQUNuQmxCLFFBQU0sRUFBRW1CLGlEQUFTLENBQUNDO0FBREMsQ0FBckI7QUFJQXJCLFFBQVEsQ0FBQ3NCLFlBQVQsR0FBd0I7QUFDdEJyQixRQUFNLEVBQUU7QUFEYyxDQUF4QjtBQUllRCx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVXNlckljb24vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBBdmF0YXIsIE1lbnVJdGVtLCBNZW51LCBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgcHVycGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9wdXJwbGUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKVxuICB9LFxuICBhdmF0YXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHB1cnBsZVs1MDBdXG4gIH1cbn0pKTtcblxuY29uc3QgVXNlckljb24gPSAoeyBMZXR0ZXIgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgYW5jaG9yUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRPcGVuKChwcmV2T3BlbikgPT4gIXByZXZPcGVuKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChldmVudCkgPT4ge1xuICAgIGlmIChhbmNob3JSZWYuY3VycmVudCAmJiBhbmNob3JSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfT57TGV0dGVyfTwvQXZhdGFyPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPE1lbnVcbiAgICAgICAgaWQ9XCJzaW1wbGUtbWVudVwiXG4gICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgPlxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlByb2ZpbGU8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9Pk15IGFjY291bnQ8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PkxvZ291dDwvTWVudUl0ZW0+XG4gICAgICA8L01lbnU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5Vc2VySWNvbi5wcm9wVHlwZXMgPSB7XG4gIExldHRlcjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuVXNlckljb24uZGVmYXVsdFByb3BzID0ge1xuICBMZXR0ZXI6ICdFJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlckljb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UserIcon/index.js\n'
      );

      /***/
    }
});
