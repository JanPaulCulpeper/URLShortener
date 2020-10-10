webpackHotUpdate_N_E('pages/index', {
  /***/ './components/UserIcon/index.js':
    /*!**************************************!*\
  !*** ./components/UserIcon/index.js ***!
  \**************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");\n/* harmony import */ var _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/colors/purple */ "./node_modules/@material-ui/core/colors/purple.js");\n/* harmony import */ var _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {\n  return {\n    root: {\n      display: \'flex\'\n    },\n    paper: {\n      marginRight: theme.spacing(2)\n    },\n    avatar: {\n      backgroundColor: _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_5___default.a[500]\n    }\n  };\n});\n\nvar UserIcon = function UserIcon(_ref) {\n  _s();\n\n  var Letter = _ref.Letter;\n  var classes = useStyles();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),\n      open = _React$useState2[0],\n      setOpen = _React$useState2[1];\n\n  var anchorRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);\n\n  var handleToggle = function handleToggle() {\n    setOpen(function (prevOpen) {\n      return !prevOpen;\n    });\n  };\n\n  var handleClose = function handleClose(event) {\n    if (anchorRef.current && anchorRef.current.contains(event.target)) {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  function handleListKeyDown(event) {\n    if (event.key === \'Tab\') {\n      event.preventDefault();\n      setOpen(false);\n    }\n  } // return focus to the button when we transitioned from !open -> open\n\n\n  var prevOpen = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(open);\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    if (prevOpen.current === true && open === false) {\n      anchorRef.current.focus();\n    }\n\n    prevOpen.current = open;\n  }, [open]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {\n    onClick: prevOpen\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {\n    className: classes.avatar\n  }, Letter)), __jsx("div", {\n    className: classes.root\n  }, __jsx(Paper, {\n    className: classes.paper\n  }, __jsx(MenuList, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], null, "Profile"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], null, "My account"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], null, "Logout"))), __jsx("div", null, __jsx(Button, {\n    ref: anchorRef,\n    "aria-controls": open ? \'menu-list-grow\' : undefined,\n    "aria-haspopup": "true",\n    onClick: handleToggle\n  }, "Toggle Menu Grow"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Popper"], {\n    open: open,\n    anchorEl: anchorRef.current,\n    role: undefined,\n    transition: true,\n    disablePortal: true\n  }, function (_ref2) {\n    var TransitionProps = _ref2.TransitionProps,\n        placement = _ref2.placement;\n    return __jsx(Grow, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TransitionProps, {\n      style: {\n        transformOrigin: placement === \'bottom\' ? \'center top\' : \'center bottom\'\n      }\n    }), __jsx(Paper, null, __jsx(ClickAwayListener, {\n      onClickAway: handleClose\n    }, __jsx(MenuList, {\n      autoFocusItem: open,\n      id: "menu-list-grow",\n      onKeyDown: handleListKeyDown\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {\n      onClick: handleClose\n    }, "Profile"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {\n      onClick: handleClose\n    }, "My account"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {\n      onClick: handleClose\n    }, "Logout")))));\n  }))));\n};\n\n_s(UserIcon, "U8jTkOa8UNZB+VqxzZ/A29KzAyQ=", false, function () {\n  return [useStyles];\n});\n\n_c = UserIcon;\nUserIcon.propTypes = {\n  Letter: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string\n};\nUserIcon.defaultProps = {\n  Letter: \'E\'\n};\n/* harmony default export */ __webpack_exports__["default"] = (UserIcon);\n\nvar _c;\n\n$RefreshReg$(_c, "UserIcon");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VySWNvbi9pbmRleC5qcz84NmM0Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwicGFwZXIiLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJhdmF0YXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwdXJwbGUiLCJVc2VySWNvbiIsIkxldHRlciIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJhbmNob3JSZWYiLCJ1c2VSZWYiLCJoYW5kbGVUb2dnbGUiLCJwcmV2T3BlbiIsImhhbmRsZUNsb3NlIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJoYW5kbGVMaXN0S2V5RG93biIsImtleSIsInByZXZlbnREZWZhdWx0IiwidXNlRWZmZWN0IiwiZm9jdXMiLCJ1bmRlZmluZWQiLCJUcmFuc2l0aW9uUHJvcHMiLCJwbGFjZW1lbnQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRTtBQURMLEtBRGlDO0FBSXZDQyxTQUFLLEVBQUU7QUFDTEMsaUJBQVcsRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZDtBQURSLEtBSmdDO0FBT3ZDQyxVQUFNLEVBQUU7QUFDTkMscUJBQWUsRUFBRUMsc0VBQU0sQ0FBQyxHQUFEO0FBRGpCO0FBUCtCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQVlBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWdCO0FBQUE7O0FBQUEs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REFBRDtBQUFVLGFBQU8sRUFBRUw7QUFBbkIsaUJBTEYsRUFNRSxNQUFDLDBEQUFEO0FBQVUsYUFBTyxFQUFFQTtBQUFuQixvQkFORixFQU9FLE1BQUMsMERBQUQ7QUFBVSxhQUFPLEVBQUVBO0FBQW5CLGdCQVBGLENBREYsQ0FERixDQVBGLENBREQ7QUFBQSxHQVBILENBVEYsQ0FSRixDQUpGLENBREY7QUF5REQsQ0ExRkQ7O0dBQU1YLFE7VUFDWVgsUzs7O0tBRFpXLFE7QUE0Rk5BLFFBQVEsQ0FBQ3lCLFNBQVQsR0FBcUI7QUFDbkJ4QixRQUFNLEVBQUV5QixpREFBUyxDQUFDQztBQURDLENBQXJCO0FBSUEzQixRQUFRLENBQUM0QixZQUFULEdBQXdCO0FBQ3RCM0IsUUFBTSxFQUFFO0FBRGMsQ0FBeEI7QUFJZUQsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJJY29uL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQXZhdGFyLCBNZW51SXRlbSwgUG9wcGVyLCBJY29uQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgcHVycGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9wdXJwbGUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKVxuICB9LFxuICBhdmF0YXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHB1cnBsZVs1MDBdXG4gIH1cbn0pKTtcblxuY29uc3QgVXNlckljb24gPSAoeyBMZXR0ZXIgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgYW5jaG9yUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRPcGVuKChwcmV2T3BlbikgPT4gIXByZXZPcGVuKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChldmVudCkgPT4ge1xuICAgIGlmIChhbmNob3JSZWYuY3VycmVudCAmJiBhbmNob3JSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlTGlzdEtleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnVGFiJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJldHVybiBmb2N1cyB0byB0aGUgYnV0dG9uIHdoZW4gd2UgdHJhbnNpdGlvbmVkIGZyb20gIW9wZW4gLT4gb3BlblxuICBjb25zdCBwcmV2T3BlbiA9IFJlYWN0LnVzZVJlZihvcGVuKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJldk9wZW4uY3VycmVudCA9PT0gdHJ1ZSAmJiBvcGVuID09PSBmYWxzZSkge1xuICAgICAgYW5jaG9yUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBwcmV2T3Blbi5jdXJyZW50ID0gb3BlbjtcbiAgfSwgW29wZW5dKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEljb25CdXR0b24gb25DbGljaz17cHJldk9wZW59PlxuICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PntMZXR0ZXJ9PC9BdmF0YXI+XG4gICAgICA8L0ljb25CdXR0b24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XG4gICAgICAgICAgPE1lbnVMaXN0PlxuICAgICAgICAgICAgPE1lbnVJdGVtPlByb2ZpbGU8L01lbnVJdGVtPlxuICAgICAgICAgICAgPE1lbnVJdGVtPk15IGFjY291bnQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgPE1lbnVJdGVtPkxvZ291dDwvTWVudUl0ZW0+XG4gICAgICAgICAgPC9NZW51TGlzdD5cbiAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICByZWY9e2FuY2hvclJlZn1cbiAgICAgICAgICAgIGFyaWEtY29udHJvbHM9e29wZW4gPyAnbWVudS1saXN0LWdyb3cnIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFRvZ2dsZSBNZW51IEdyb3dcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8UG9wcGVyXG4gICAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvclJlZi5jdXJyZW50fVxuICAgICAgICAgICAgcm9sZT17dW5kZWZpbmVkfVxuICAgICAgICAgICAgdHJhbnNpdGlvblxuICAgICAgICAgICAgZGlzYWJsZVBvcnRhbFxuICAgICAgICAgID5cbiAgICAgICAgICAgIHsoeyBUcmFuc2l0aW9uUHJvcHMsIHBsYWNlbWVudCB9KSA9PiAoXG4gICAgICAgICAgICAgIDxHcm93XG4gICAgICAgICAgICAgICAgey4uLlRyYW5zaXRpb25Qcm9wc31cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOlxuICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQgPT09ICdib3R0b20nID8gJ2NlbnRlciB0b3AnIDogJ2NlbnRlciBib3R0b20nXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxQYXBlcj5cbiAgICAgICAgICAgICAgICAgIDxDbGlja0F3YXlMaXN0ZW5lciBvbkNsaWNrQXdheT17aGFuZGxlQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICA8TWVudUxpc3RcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNJdGVtPXtvcGVufVxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwibWVudS1saXN0LWdyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlTGlzdEtleURvd259XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlByb2ZpbGU8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+TXkgYWNjb3VudDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5Mb2dvdXQ8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L01lbnVMaXN0PlxuICAgICAgICAgICAgICAgICAgPC9DbGlja0F3YXlMaXN0ZW5lcj5cbiAgICAgICAgICAgICAgICA8L1BhcGVyPlxuICAgICAgICAgICAgICA8L0dyb3c+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvUG9wcGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuVXNlckljb24ucHJvcFR5cGVzID0ge1xuICBMZXR0ZXI6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblVzZXJJY29uLmRlZmF1bHRQcm9wcyA9IHtcbiAgTGV0dGVyOiAnRSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJJY29uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UserIcon/index.js\n'
      );

      /***/
    }
});
