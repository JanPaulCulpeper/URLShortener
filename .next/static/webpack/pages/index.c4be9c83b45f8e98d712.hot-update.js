webpackHotUpdate_N_E('pages/index', {
  /***/ './components/UserIcon/index.js':
    /*!**************************************!*\
  !*** ./components/UserIcon/index.js ***!
  \**************************************/
    /*! exports provided: default */
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      'use strict';
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");\n/* harmony import */ var _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/colors/purple */ "./node_modules/@material-ui/core/colors/purple.js");\n/* harmony import */ var _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\nvar _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {\n  return {\n    root: {\n      display: \'flex\'\n    },\n    paper: {\n      marginRight: theme.spacing(2)\n    },\n    avatar: {\n      backgroundColor: _material_ui_core_colors_purple__WEBPACK_IMPORTED_MODULE_5___default.a[500]\n    }\n  };\n});\n\nvar UserIcon = function UserIcon(_ref) {\n  _s();\n\n  var Letter = _ref.Letter,\n      Actions = _ref.Actions;\n  var classes = useStyles();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),\n      open = _React$useState2[0],\n      setOpen = _React$useState2[1];\n\n  var anchorRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(null);\n\n  var handleToggle = function handleToggle() {\n    setOpen(function (prevOpen) {\n      return !prevOpen;\n    });\n  };\n\n  var handleClose = function handleClose(event) {\n    if (anchorRef.current && anchorRef.current.contains(event.target)) {\n      return;\n    }\n\n    setOpen(false);\n  };\n\n  function handleListKeyDown(event) {\n    if (event.key === \'Tab\') {\n      event.preventDefault();\n      setOpen(false);\n    }\n  } // return focus to the button when we transitioned from !open -> open\n\n\n  var prevOpen = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(open);\n  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {\n    if (prevOpen.current === true && open === false) {\n      anchorRef.current.focus();\n    }\n\n    prevOpen.current = open;\n  }, [open]);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {\n    ref: anchorRef,\n    "aria-controls": open ? \'menu-list-grow\' : undefined,\n    "aria-haspopup": "true",\n    onClick: handleToggle\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {\n    className: classes.avatar\n  }, Letter)), __jsx("div", {\n    className: classes.root\n  }, __jsx("div", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Popper"], {\n    open: open,\n    anchorEl: anchorRef.current,\n    role: undefined,\n    transition: true,\n    disablePortal: true\n  }, function (_ref2) {\n    var TransitionProps = _ref2.TransitionProps,\n        placement = _ref2.placement;\n    return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grow"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, TransitionProps, {\n      style: {\n        transformOrigin: placement === \'bottom\' ? \'center top\' : \'center bottom\'\n      }\n    }), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Paper"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ClickAwayListener"], {\n      onClickAway: handleClose\n    }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuList"], {\n      autoFocusItem: open,\n      id: "menu-list-grow",\n      onKeyDown: handleListKeyDown\n    }, Actions.map(function (action) {\n      return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {\n        onClick: handleClose\n      }, action.name);\n    })))));\n  }))));\n};\n\n_s(UserIcon, "U8jTkOa8UNZB+VqxzZ/A29KzAyQ=", false, function () {\n  return [useStyles];\n});\n\n_c = UserIcon;\nUserIcon.propTypes = {\n  Letter: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(Object),\n  Actions: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(Object)\n};\nUserIcon.defaultProps = {\n  Letter: \'E\',\n  Actions: [{\n    name: \'ex1\'\n  }, {\n    name: \'ex2\'\n  }, {\n    name: \'ex3\'\n  }]\n};\n/* harmony default export */ __webpack_exports__["default"] = (UserIcon);\n\nvar _c;\n\n$RefreshReg$(_c, "UserIcon");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we\'re in a\n    // browser context before continuing.\n    if (typeof self !== \'undefined\' &&\n        // AMP / No-JS mode does not inject these helpers:\n        \'$RefreshHelpers$\' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we\'ll check if it\'s\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we\'ll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it\'s possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VySWNvbi9pbmRleC5qcz84NmM0Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJkaXNwbGF5IiwicGFwZXIiLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJhdmF0YXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwdXJwbGUiLCJVc2VySWNvbiIsIkxldHRlciIsIkFjdGlvbnMiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiYW5jaG9yUmVmIiwidXNlUmVmIiwiaGFuZGxlVG9nZ2xlIiwicHJldk9wZW4iLCJoYW5kbGVDbG9zZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiaGFuZGxlTGlzdEtleURvd24iLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsInVzZUVmZmVjdCIsImZvY3VzIiwidW5kZWZpbmVkIiwiVHJhbnNpdGlvblByb3BzIiwicGxhY2VtZW50IiwidHJhbnNmb3JtT3JpZ2luIiwibWFwIiwiYWN0aW9uIiwibmFtZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJPYmplY3QiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQVVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGFBQU8sRUFBRTtBQURMLEtBRGlDO0FBSXZDQyxTQUFLLEVBQUU7QUFDTEMsaUJBQVcsRUFBRUosS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZDtBQURSLEtBSmdDO0FBT3ZDQyxVQUFNLEVBQUU7QUFDTkMscUJBQWUsRUFBRUMsc0VBQU0sQ0FBQyxHQUFEO0FBRGpCO0FBUCtCLEdBQVo7QUFBQSxDQUFELENBQTVCOztBQVlBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXlCO0FBQUE7O0FBQUEsTUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUN4QyxNQUFNQyxPQUFPLEdBQUdkLFNBQVMsRUFBekI7O0FBRHdDLHdCQUVoQmUsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FGZ0I7QUFBQTtBQUFBLE1BRWpDQyxJQUZpQztBQUFBLE1BRTNCQyxPQUYyQjs7QUFHeEMsTUFBTUMsU0FBUyxHQUFHSiw0Q0FBSyxDQUFDSyxNQUFOLENBQWEsSUFBYixDQUFsQjs7QUFFQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCSCxXQUFPLENBQUMsVUFBQ0ksUUFBRDtBQUFBLGFBQWMsQ0FBQ0EsUUFBZjtBQUFBLEtBQUQsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzdCLFFBQUlMLFNBQVMsQ0FBQ00sT0FBVixJQUFxQk4sU0FBUyxDQUFDTSxPQUFWLENBQWtCQyxRQUFsQixDQUEyQkYsS0FBSyxDQUFDRyxNQUFqQyxDQUF6QixFQUFtRTtBQUNqRTtBQUNEOztBQUVEVCxXQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0QsR0FORDs7QUFRQSxXQUFTVSxpQkFBVCxDQUEyQkosS0FBM0IsRUFBa0M7QUFDaEMsUUFBSUEsS0FBSyxDQUFDSyxHQUFOLEtBQWMsS0FBbEIsRUFBeUI7QUFDdkJMLFdBQUssQ0FBQ00sY0FBTjtBQUNBWixhQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0Q7QUFDRixHQXRCdUMsQ0F3QnhDOzs7QUFDQSxNQUFNSSxRQUFRLEdBQUdQLDRDQUFLLENBQUNLLE1BQU4sQ0FBYUgsSUFBYixDQUFqQjtBQUNBRiw4Q0FBSyxDQUFDZ0IsU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQUlULFFBQVEsQ0FBQ0csT0FBVCxLQUFxQixJQUFyQixJQUE2QlIsSUFBSSxLQUFLLEtBQTFDLEVBQWlEO0FBQy9DRSxlQUFTLENBQUNNLE9BQVYsQ0FBa0JPLEtBQWxCO0FBQ0Q7O0FBRURWLFlBQVEsQ0FBQ0csT0FBVCxHQUFtQlIsSUFBbkI7QUFDRCxHQU5ELEVBTUcsQ0FBQ0EsSUFBRCxDQU5IO0FBT0EsU0FDRSxtRUFDRSxNQUFDLDREQUFEO0FBQ0UsT0FBRyxFQUFFRSxTQURQO0FBRUUscUJBQWVGLElBQUksR0FBRyxnQkFBSCxHQUFzQmdCLFNBRjNDO0FBR0UscUJBQWMsTUFIaEI7QUFJRSxXQUFPLEVBQUVaO0FBSlgsS0FNRSxNQUFDLHdEQUFEO0FBQVEsYUFBUyxFQUFFUCxPQUFPLENBQUNOO0FBQTNCLEtBQW9DSSxNQUFwQyxDQU5GLENBREYsRUFTRTtBQUFLLGFBQVMsRUFBRUUsT0FBTyxDQUFDWDtBQUF4QixLQUNFLG1CQUNFLE1BQUMsd0RBQUQ7QUFDRSxRQUFJLEVBQUVjLElBRFI7QUFFRSxZQUFRLEVBQUVFLFNBQVMsQ0FBQ00sT0FGdEI7QUFHRSxRQUFJLEVBQUVRLFNBSFI7QUFJRSxjQUFVLE1BSlo7QUFLRSxpQkFBYTtBQUxmLEtBT0c7QUFBQSxRQUFHQyxlQUFILFNBQUdBLGVBQUg7QUFBQSxRQUFvQkMsU0FBcEIsU0FBb0JBLFNBQXBCO0FBQUEsV0FDQyxNQUFDLHNEQUFELHlGQUNNRCxlQUROO0FBRUUsV0FBSyxFQUFFO0FBQ0xFLHVCQUFlLEVBQ2JELFNBQVMsS0FBSyxRQUFkLEdBQXlCLFlBQXpCLEdBQXdDO0FBRnJDO0FBRlQsUUFPRSxNQUFDLHVEQUFELFFBQ0UsTUFBQyxtRUFBRDtBQUFtQixpQkFBVyxFQUFFWjtBQUFoQyxPQUNFLE1BQUMsMERBQUQ7QUFDRSxtQkFBYSxFQUFFTixJQURqQjtBQUVFLFFBQUUsRUFBQyxnQkFGTDtBQUdFLGVBQVMsRUFBRVc7QUFIYixPQUtHZixPQUFPLENBQUN3QixHQUFSLENBQVksVUFBQ0MsTUFBRCxFQUFZO0FBQ3ZCLGFBQ0UsTUFBQywwREFBRDtBQUFVLGVBQU8sRUFBRWY7QUFBbkIsU0FDR2UsTUFBTSxDQUFDQyxJQURWLENBREY7QUFLRCxLQU5BLENBTEgsQ0FERixDQURGLENBUEYsQ0FERDtBQUFBLEdBUEgsQ0FERixDQURGLENBVEYsQ0FERjtBQW1ERCxDQXBGRDs7R0FBTTVCLFE7VUFDWVgsUzs7O0tBRFpXLFE7QUFzRk5BLFFBQVEsQ0FBQzZCLFNBQVQsR0FBcUI7QUFDbkI1QixRQUFNLEVBQUU2QixpREFBUyxDQUFDQyxPQUFWLENBQWtCQyxNQUFsQixDQURXO0FBRW5COUIsU0FBTyxFQUFFNEIsaURBQVMsQ0FBQ0MsT0FBVixDQUFrQkMsTUFBbEI7QUFGVSxDQUFyQjtBQUtBaEMsUUFBUSxDQUFDaUMsWUFBVCxHQUF3QjtBQUN0QmhDLFFBQU0sRUFBRSxHQURjO0FBRXRCQyxTQUFPLEVBQUUsQ0FBQztBQUFFMEIsUUFBSSxFQUFFO0FBQVIsR0FBRCxFQUFrQjtBQUFFQSxRQUFJLEVBQUU7QUFBUixHQUFsQixFQUFtQztBQUFFQSxRQUFJLEVBQUU7QUFBUixHQUFuQztBQUZhLENBQXhCO0FBS2U1Qix1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVXNlckljb24vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICBBdmF0YXIsXG4gIE1lbnVJdGVtLFxuICBQb3BwZXIsXG4gIEljb25CdXR0b24sXG4gIFBhcGVyLFxuICBNZW51TGlzdCxcbiAgR3JvdyxcbiAgQ2xpY2tBd2F5TGlzdGVuZXJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgcHVycGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycy9wdXJwbGUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnZmxleCdcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKVxuICB9LFxuICBhdmF0YXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHB1cnBsZVs1MDBdXG4gIH1cbn0pKTtcblxuY29uc3QgVXNlckljb24gPSAoeyBMZXR0ZXIsIEFjdGlvbnMgfSkgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgYW5jaG9yUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRPcGVuKChwcmV2T3BlbikgPT4gIXByZXZPcGVuKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChldmVudCkgPT4ge1xuICAgIGlmIChhbmNob3JSZWYuY3VycmVudCAmJiBhbmNob3JSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gaGFuZGxlTGlzdEtleURvd24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnVGFiJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHJldHVybiBmb2N1cyB0byB0aGUgYnV0dG9uIHdoZW4gd2UgdHJhbnNpdGlvbmVkIGZyb20gIW9wZW4gLT4gb3BlblxuICBjb25zdCBwcmV2T3BlbiA9IFJlYWN0LnVzZVJlZihvcGVuKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAocHJldk9wZW4uY3VycmVudCA9PT0gdHJ1ZSAmJiBvcGVuID09PSBmYWxzZSkge1xuICAgICAgYW5jaG9yUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBwcmV2T3Blbi5jdXJyZW50ID0gb3BlbjtcbiAgfSwgW29wZW5dKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgcmVmPXthbmNob3JSZWZ9XG4gICAgICAgIGFyaWEtY29udHJvbHM9e29wZW4gPyAnbWVudS1saXN0LWdyb3cnIDogdW5kZWZpbmVkfVxuICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX1cbiAgICAgID5cbiAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfT57TGV0dGVyfTwvQXZhdGFyPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPFBvcHBlclxuICAgICAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JSZWYuY3VycmVudH1cbiAgICAgICAgICAgIHJvbGU9e3VuZGVmaW5lZH1cbiAgICAgICAgICAgIHRyYW5zaXRpb25cbiAgICAgICAgICAgIGRpc2FibGVQb3J0YWxcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7KHsgVHJhbnNpdGlvblByb3BzLCBwbGFjZW1lbnQgfSkgPT4gKFxuICAgICAgICAgICAgICA8R3Jvd1xuICAgICAgICAgICAgICAgIHsuLi5UcmFuc2l0aW9uUHJvcHN9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjpcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50ID09PSAnYm90dG9tJyA/ICdjZW50ZXIgdG9wJyA6ICdjZW50ZXIgYm90dG9tJ1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UGFwZXI+XG4gICAgICAgICAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e2hhbmRsZUNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzSXRlbT17b3Blbn1cbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIm1lbnUtbGlzdC1ncm93XCJcbiAgICAgICAgICAgICAgICAgICAgICBvbktleURvd249e2hhbmRsZUxpc3RLZXlEb3dufVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge0FjdGlvbnMubWFwKChhY3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9NZW51TGlzdD5cbiAgICAgICAgICAgICAgICAgIDwvQ2xpY2tBd2F5TGlzdGVuZXI+XG4gICAgICAgICAgICAgICAgPC9QYXBlcj5cbiAgICAgICAgICAgICAgPC9Hcm93PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L1BvcHBlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cblVzZXJJY29uLnByb3BUeXBlcyA9IHtcbiAgTGV0dGVyOiBQcm9wVHlwZXMuYXJyYXlPZihPYmplY3QpLFxuICBBY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXlPZihPYmplY3QpXG59O1xuXG5Vc2VySWNvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIExldHRlcjogJ0UnLFxuICBBY3Rpb25zOiBbeyBuYW1lOiAnZXgxJyB9LCB7IG5hbWU6ICdleDInIH0sIHsgbmFtZTogJ2V4MycgfV1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJJY29uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UserIcon/index.js\n'
      );

      /***/
    }
});
