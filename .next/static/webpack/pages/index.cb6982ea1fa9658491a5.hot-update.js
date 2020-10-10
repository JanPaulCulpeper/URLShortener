webpackHotUpdate_N_E('pages/index', {
  /***/ './components/UserIcon/index.js':
    /*!**************************************!*\
  !*** ./components/UserIcon/index.js ***!
  \**************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");\n/* harmony import */ var _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/colors/purple */ "./node_modules/@material-ui/core/colors/purple.js");\n/* harmony import */ var _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({\n  avatar: {\n    backgroundColor: _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_4___default.a[500]\n  }\n});\n\nvar UserIcon = function UserIcon(_ref) {\n  _s();\n\n  var Letter = _ref.Letter;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),\n      anchorEl = _React$useState2[0],\n      setAnchorEl = _React$useState2[1];\n\n  var handleClick = function handleClick(event) {\n    setAnchorEl(event.currentTarget);\n  };\n\n  var handleClose = function handleClose() {\n    setAnchorEl(null);\n  };\n\n  var classes = useStyles();\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {\n    className: classes.avatar\n  }, Letter), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Menu"], {\n    id: "simple-menu",\n    anchorEl: anchorEl,\n    keepMounted: true,\n    open: Boolean(anchorEl),\n    onClose: handleClose\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {\n    onClick: handleClose\n  }, "Profile"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {\n    onClick: handleClose\n  }, "My account"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["MenuItem"], {\n    onClick: handleClose\n  }, "Logout")));\n};\n\n_s(UserIcon, "rR4YbuwDsNH7kIPxRuzEnRkbEdw=", false, function () {\n  return [useStyles];\n});\n\n_c = UserIcon;\nUserIcon.propTypes = {\n  Letter: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string\n};\nUserIcon.defaultProps = {\n  Letter: \'E\'\n};\n/* harmony default export */ __webpack_exports__["default"] = (UserIcon);\n\nvar _c;\n\n$RefreshReg$(_c, "UserIcon");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VySWNvbi9pbmRleC5qcz84NmM0Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJhdmF0YXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwdXJwbGUiLCJVc2VySWNvbiIsIkxldHRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiaGFuZGxlQ2xpY2siLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsImNsYXNzZXMiLCJCb29sZWFuIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzNCQyxRQUFNLEVBQUU7QUFDTkMsbUJBQWUsRUFBRUMsc0VBQU0sQ0FBQyxHQUFEO0FBRGpCO0FBRG1CLENBQUQsQ0FBNUI7O0FBTUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBZ0I7QUFBQTs7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBQUEsd0JBQ0NDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBREQ7QUFBQTtBQUFBLE1BQ3hCQyxRQUR3QjtBQUFBLE1BQ2RDLFdBRGM7O0FBRy9CLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUM3QkYsZUFBVyxDQUFDRSxLQUFLLENBQUNDLGFBQVAsQ0FBWDtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QkosZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNELEdBRkQ7O0FBR0EsTUFBTUssT0FBTyxHQUFHZixTQUFTLEVBQXpCO0FBQ0EsU0FDRSxtRUFDRSxNQUFDLHdEQUFEO0FBQVEsYUFBUyxFQUFFZSxPQUFPLENBQUNiO0FBQTNCLEtBQW9DSSxNQUFwQyxDQURGLEVBRUUsTUFBQyxzREFBRDtBQUNFLE1BQUUsRUFBQyxhQURMO0FBRUUsWUFBUSxFQUFFRyxRQUZaO0FBR0UsZUFBVyxNQUhiO0FBSUUsUUFBSSxFQUFFTyxPQUFPLENBQUNQLFFBQUQsQ0FKZjtBQUtFLFdBQU8sRUFBRUs7QUFMWCxLQU9FLE1BQUMsMERBQUQ7QUFBVSxXQUFPLEVBQUVBO0FBQW5CLGVBUEYsRUFRRSxNQUFDLDBEQUFEO0FBQVUsV0FBTyxFQUFFQTtBQUFuQixrQkFSRixFQVNFLE1BQUMsMERBQUQ7QUFBVSxXQUFPLEVBQUVBO0FBQW5CLGNBVEYsQ0FGRixDQURGO0FBZ0JELENBM0JEOztHQUFNVCxRO1VBVVlMLFM7OztLQVZaSyxRO0FBNkJOQSxRQUFRLENBQUNZLFNBQVQsR0FBcUI7QUFDbkJYLFFBQU0sRUFBRVksaURBQVMsQ0FBQ0M7QUFEQyxDQUFyQjtBQUlBZCxRQUFRLENBQUNlLFlBQVQsR0FBd0I7QUFDdEJkLFFBQU0sRUFBRTtBQURjLENBQXhCO0FBSWVELHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Vc2VySWNvbi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IEF2YXRhciwgTWVudUl0ZW0sIE1lbnUsIEljb25CdXR0b24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBwdXJwbGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3B1cnBsZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgYXZhdGFyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBwdXJwbGVbNTAwXVxuICB9XG59KTtcblxuY29uc3QgVXNlckljb24gPSAoeyBMZXR0ZXIgfSkgPT4ge1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gIH07XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfT57TGV0dGVyfTwvQXZhdGFyPlxuICAgICAgPE1lbnVcbiAgICAgICAgaWQ9XCJzaW1wbGUtbWVudVwiXG4gICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cbiAgICAgICAga2VlcE1vdW50ZWRcbiAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbCl9XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgPlxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlByb2ZpbGU8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9Pk15IGFjY291bnQ8L01lbnVJdGVtPlxuICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PkxvZ291dDwvTWVudUl0ZW0+XG4gICAgICA8L01lbnU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5Vc2VySWNvbi5wcm9wVHlwZXMgPSB7XG4gIExldHRlcjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuVXNlckljb24uZGVmYXVsdFByb3BzID0ge1xuICBMZXR0ZXI6ICdFJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlckljb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UserIcon/index.js\n'
      );

      /***/
    }
});
