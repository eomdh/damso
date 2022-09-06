webpackHotUpdate_N_E("pages/index",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _utils_device__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/device */ "./utils/device.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\components\\AppLayout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Container = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "AppLayout__Container",
  componentId: "sc-10lualo-0"
})(["width:100%;height:55px;position:sticky;top:0;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(var(--b6a,219,219,219),1);background-color:white;z-index:5;box-shadow:0 4px 12px 0 rgba(0,0,0,0.05);@media ", "{position:static;}"], _utils_device__WEBPACK_IMPORTED_MODULE_8__["default"].mobile);
_c = Container;
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "AppLayout__IconContainer",
  componentId: "sc-10lualo-1"
})(["display:flex;justify-content:flex-start;"]);
_c2 = IconContainer;
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "AppLayout__Icon",
  componentId: "sc-10lualo-2"
})(["width:80px;height:70%;font-size:30px;margin-left:10px;color:#1864ab;display:flex;justify-content:center;cursor:pointer;opacity:0.8;&:hover{opacity:1;}@media ", "{width:40px;margin-left:5px;}"], _utils_device__WEBPACK_IMPORTED_MODULE_8__["default"].tablet);
_c3 = Icon;
var SearchForm = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].form.withConfig({
  displayName: "AppLayout__SearchForm",
  componentId: "sc-10lualo-3"
})(["position:relative;justify-content:center;align-items:center;width:380px;height:20px;border:0.5px solid black;border-radius:10px;padding:10px;outline:none;opacity:0.7;&:hover{opacity:1;}@media ", "{width:300px;margin-left:60px;}@media ", "{width:200px;}"], _utils_device__WEBPACK_IMPORTED_MODULE_8__["default"].tablet, _utils_device__WEBPACK_IMPORTED_MODULE_8__["default"].mobile);
_c4 = SearchForm;
var SearchBar = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].input.withConfig({
  displayName: "AppLayout__SearchBar",
  componentId: "sc-10lualo-4"
})(["all:unset;width:100%;height:100%;font-size:16px;display:flex;"]);
_c5 = SearchBar;
var SearchIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "AppLayout__SearchIconContainer",
  componentId: "sc-10lualo-5"
})(["position:absolute;top:10px;right:10px;font-size:19px;display:flex;align-items:center;cursor:pointer;color:#1864ab;"]);
_c6 = SearchIconContainer;
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "AppLayout__ButtonContainer",
  componentId: "sc-10lualo-6"
})(["display:flex;justify-content:flex-end;"]);
_c7 = ButtonContainer;
var Button = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "AppLayout__Button",
  componentId: "sc-10lualo-7"
})(["width:80px;height:35px;border-radius:5px;text-align:center;background-color:", ";color:white;display:flex;justify-content:center;align-items:center;margin-right:15px;cursor:pointer;opacity:0.8;&:hover{transform:scale(0.98);opacity:1;}@media ", "{width:40px;font-size:10px;margin-right:5px;}"], function (props) {
  return props.backgroundColor;
}, _utils_device__WEBPACK_IMPORTED_MODULE_8__["default"].tablet);
_c8 = Button;

var AppLayout = function AppLayout(_ref) {
  _s();

  var children = _ref.children;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var onLogout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_OUT_REQUEST"]
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }, __jsx(IconContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, __jsx(Icon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__["AiFillHome"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  })))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, __jsx(Icon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaUser"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }))))), __jsx(SearchForm, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }
  }, __jsx(SearchBar, {
    type: "text",
    placeholder: "Search...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 11
    }
  }), __jsx(SearchIconContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaSearch"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 13
    }
  }))), __jsx(ButtonContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, me ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }, __jsx(Button, {
    backgroundColor: "#1864ab",
    onClick: onLogout,
    style: {
      marginLeft: '95px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  }, "LOGOUT"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 15
    }
  }, __jsx(Button, {
    backgroundColor: "#1864ab",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 51
    }
  }, "LOGIN"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 15
    }
  }, __jsx(Button, {
    backgroundColor: "#2b8a3e",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 51
    }
  }, "SIGNUP")))))), children);
};

_s(AppLayout, "BcaqTwCeOq4yzZBX19m6pE5p+JA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c9 = AppLayout;
AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "IconContainer");
$RefreshReg$(_c3, "Icon");
$RefreshReg$(_c4, "SearchForm");
$RefreshReg$(_c5, "SearchBar");
$RefreshReg$(_c6, "SearchIconContainer");
$RefreshReg$(_c7, "ButtonContainer");
$RefreshReg$(_c8, "Button");
$RefreshReg$(_c9, "AppLayout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiZGV2aWNlIiwibW9iaWxlIiwiSWNvbkNvbnRhaW5lciIsIkljb24iLCJ0YWJsZXQiLCJTZWFyY2hGb3JtIiwiZm9ybSIsIlNlYXJjaEJhciIsImlucHV0IiwiU2VhcmNoSWNvbkNvbnRhaW5lciIsIkJ1dHRvbkNvbnRhaW5lciIsIkJ1dHRvbiIsInByb3BzIiwiYmFja2dyb3VuZENvbG9yIiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsIm9uTG9nb3V0IiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiTE9HX09VVF9SRVFVRVNUIiwibWFyZ2luTGVmdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLGtSQWFKQyxxREFBTSxDQUFDQyxNQWJILENBQWY7S0FBTUosUztBQWtCTixJQUFNSyxhQUFhLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsZ0RBQW5CO01BQU1HLGE7QUFLTixJQUFNQyxJQUFJLEdBQUdMLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsdU1BZUNDLHFEQUFNLENBQUNJLE1BZlIsQ0FBVjtNQUFNRCxJO0FBcUJOLElBQU1FLFVBQVUsR0FBR1AseURBQU0sQ0FBQ1EsSUFBVjtFQUFBO0VBQUE7QUFBQSxxUUFlTE4scURBQU0sQ0FBQ0ksTUFmRixFQW9CTEoscURBQU0sQ0FBQ0MsTUFwQkYs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QTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBSUU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxZQUpGLENBREYsQ0FEQyxHQVVELG1FQUNFLE1BQUMsZ0RBQUQ7SUFBTSxJQUFJLEVBQUMsUUFBWDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxNQUFEO0lBQVEsZUFBZSxFQUFDLFNBQXhCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBa0M7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxXQUFsQyxDQURGLENBREYsRUFJRSxNQUFDLGdEQUFEO0lBQU0sSUFBSSxFQUFDLFNBQVg7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsTUFBRDtJQUFRLGVBQWUsRUFBQyxTQUF4QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQWtDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsWUFBbEMsQ0FERixDQUpGLENBWEosQ0F2QkYsQ0FERixFQThDR1gsUUE5Q0gsQ0FERjtBQWtERCxDQTdERDs7R0FBTUQsUztVQUNhRyx1RCxFQUVGQyx1RDs7O01BSFhKLFM7QUErRE5BLFNBQVMsQ0FBQ2EsU0FBVixHQUFzQjtFQUNwQlosUUFBUSxFQUFFYSxpREFBUyxDQUFDQyxJQUFWLENBQWVDO0FBREwsQ0FBdEI7QUFJZWhCLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUxNWY1Nzc0ZTZkODhmMjk1NGMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTE9HX09VVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgQWlGaWxsSG9tZSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcclxuaW1wb3J0IHsgRmFVc2VyLCBGYVNlYXJjaCB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IGRldmljZSBmcm9tICcuLi91dGlscy9kZXZpY2UnO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSh2YXIoLS1iNmEsIDIxOSwgMjE5LCAyMTkpLCAxKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiA1O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG5cclxuICBAbWVkaWEgJHtkZXZpY2UubW9iaWxlfSB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEljb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5gO1xyXG5cclxuY29uc3QgSWNvbiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA3MCU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIGNvbG9yOiAjMTg2NGFiO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7ZGV2aWNlLnRhYmxldH0ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNlYXJjaEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMzgwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke2RldmljZS50YWJsZXR9IHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7ZGV2aWNlLm1vYmlsZX0ge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNlYXJjaEJhciA9IHN0eWxlZC5pbnB1dGBcclxuICBhbGw6IHVuc2V0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuYDtcclxuXHJcbmNvbnN0IFNlYXJjaEljb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxOXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICMxODY0YWI7XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAwLjg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtkZXZpY2UudGFibGV0fSB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IG9uTG9nb3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxJY29uQ29udGFpbmVyPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPEljb24+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8QWlGaWxsSG9tZSAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9JY29uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlXCI+XHJcbiAgICAgICAgICAgIDxJY29uPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPEZhVXNlciAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9JY29uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvSWNvbkNvbnRhaW5lcj5cclxuICAgICAgICA8U2VhcmNoRm9ybT5cclxuICAgICAgICAgIDxTZWFyY2hCYXIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIC8+XHJcbiAgICAgICAgICA8U2VhcmNoSWNvbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEZhU2VhcmNoIC8+XHJcbiAgICAgICAgICA8L1NlYXJjaEljb25Db250YWluZXI+XHJcbiAgICAgICAgPC9TZWFyY2hGb3JtPlxyXG4gICAgICAgIDxCdXR0b25Db250YWluZXI+XHJcbiAgICAgICAgICB7bWUgPyAoXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiMxODY0YWJcIiBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uTG9nb3V0fSBcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luTGVmdDogJzk1cHgnfX0+XHJcbiAgICAgICAgICAgICAgICA8YT5MT0dPVVQ8L2E+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBiYWNrZ3JvdW5kQ29sb3I9XCIjMTg2NGFiXCI+PGE+TE9HSU48L2E+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGJhY2tncm91bmRDb2xvcj1cIiMyYjhhM2VcIj48YT5TSUdOVVA8L2E+PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9CdXR0b25Db250YWluZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuQXBwTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9