webpackHotUpdate_N_E("pages/profile",{

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _utils_device__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/device */ "./utils/device.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\AppLayout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Container = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "AppLayout__Container",
  componentId: "sc-hi2pmq-0"
})(["width:100%;height:55px;position:sticky;top:0;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(var(--b6a,219,219,219),1);background-color:white;z-index:5;box-shadow:0 4px 12px 0 rgba(0,0,0,0.05);@media ", "{position:static;}"], _utils_device__WEBPACK_IMPORTED_MODULE_9__["default"].mobile);
_c = Container;
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "AppLayout__IconContainer",
  componentId: "sc-hi2pmq-1"
})(["display:flex;justify-content:flex-start;"]);
_c2 = IconContainer;
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "AppLayout__Icon",
  componentId: "sc-hi2pmq-2"
})(["width:80px;height:70%;font-size:30px;margin-left:10px;color:#1864ab;display:flex;justify-content:center;cursor:pointer;opacity:0.8;&:hover{opacity:1;}@media ", "{width:40px;}"], _utils_device__WEBPACK_IMPORTED_MODULE_9__["default"].tablet);
_c3 = Icon;
var SearchForm = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].form.withConfig({
  displayName: "AppLayout__SearchForm",
  componentId: "sc-hi2pmq-3"
})(["position:relative;justify-content:center;align-items:center;width:380px;height:20px;border:0.5px solid black;border-radius:10px;padding:10px;outline:none;opacity:0.7;&:hover{opacity:1;}@media ", "{display:none;}"], _utils_device__WEBPACK_IMPORTED_MODULE_9__["default"].mobileL);
_c4 = SearchForm;
var SearchBar = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].input.withConfig({
  displayName: "AppLayout__SearchBar",
  componentId: "sc-hi2pmq-4"
})(["all:unset;width:100%;height:100%;font-size:16px;display:flex;"]);
_c5 = SearchBar;
var SearchIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "AppLayout__SearchIconContainer",
  componentId: "sc-hi2pmq-5"
})(["position:absolute;top:10px;right:10px;font-size:19px;display:flex;align-items:center;cursor:pointer;color:#1864ab;"]);
_c6 = SearchIconContainer;
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "AppLayout__ButtonContainer",
  componentId: "sc-hi2pmq-6"
})(["display:flex;justify-content:flex-end;"]);
_c7 = ButtonContainer;
var Button = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "AppLayout__Button",
  componentId: "sc-hi2pmq-7"
})(["width:80px;height:35px;border-radius:5px;text-align:center;background-color:", ";color:white;display:flex;justify-content:center;align-items:center;margin-right:15px;cursor:pointer;opacity:0.8;&:hover{transform:scale(0.98);opacity:1;}"], function (props) {
  return props.backgroundColor;
});
_c8 = Button;

var AppLayout = function AppLayout(_ref) {
  _s();

  var children = _ref.children;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.user;
  }),
      isLoggedIn = _useSelector.isLoggedIn;

  var onLogout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_5__["logoutAction"])());
    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
  }, []);
  var onClickProfilePage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/profile');
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }, __jsx(IconContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, __jsx(Icon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__["AiFillHome"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  })))), __jsx(Icon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaUser"], {
    onClick: onClickProfilePage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 15
    }
  })))), __jsx(SearchForm, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, __jsx(SearchBar, {
    type: "text",
    placeholder: "Search...",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }), __jsx(SearchIconContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaSearch"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }))), __jsx(ButtonContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  }, isLoggedIn ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
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
      lineNumber: 161,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 17
    }
  }, "LOGOUT"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 15
    }
  }, __jsx(Button, {
    backgroundColor: "#1864ab",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 51
    }
  }, "LOGIN"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 15
    }
  }, __jsx(Button, {
    backgroundColor: "#2b8a3e",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 51
    }
  }, "SIGNUP")))))), children);
};

_s(AppLayout, "4iplul1hlgDBkGI3NLG+8NEHUbU=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiZGV2aWNlIiwibW9iaWxlIiwiSWNvbkNvbnRhaW5lciIsIkljb24iLCJ0YWJsZXQiLCJTZWFyY2hGb3JtIiwiZm9ybSIsIm1vYmlsZUwiLCJTZWFyY2hCYXIiLCJpbnB1dCIsIlNlYXJjaEljb25Db250YWluZXIiLCJCdXR0b25Db250YWluZXIiLCJCdXR0b24iLCJwcm9wcyIsImJhY2tncm91bmRDb2xvciIsIkFwcExheW91dCIsImNoaWxkcmVuIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiaXNMb2dnZWRJbiIsIm9uTG9nb3V0IiwidXNlQ2FsbGJhY2siLCJsb2dvdXRBY3Rpb24iLCJSb3V0ZXIiLCJwdXNoIiwib25DbGlja1Byb2ZpbGVQYWdlIiwiYWxlcnQiLCJtYXJnaW5MZWZ0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLGtSQWFKQyxxREFBTSxDQUFDQyxNQWJILENBQWY7S0FBTUosUztBQWtCTixJQUFNSyxhQUFhLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsZ0RBQW5CO01BQU1HLGE7QUFLTixJQUFNQyxJQUFJLEdBQUdMLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsdUxBYUNDLHFEQUFNLENBQUNJLE1BYlIsQ0FBVjtNQUFNRCxJO0FBa0JOLElBQU1FLFVBQVUsR0FBR1AseURBQU0sQ0FBQ1EsSUFBVjtFQUFB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QTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsTUFBRDtJQUNFLGVBQWUsRUFBQyxTQURsQjtJQUVFLE9BQU8sRUFBRUMsUUFGWDtJQUdFLEtBQUssRUFBRTtNQUFDTyxVQUFVLEVBQUU7SUFBYixDQUhUO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FJRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLFlBSkYsQ0FERixDQURTLEdBVVQsbUVBQ0UsTUFBQyxnREFBRDtJQUFNLElBQUksRUFBQyxRQUFYO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLE1BQUQ7SUFBUSxlQUFlLEVBQUMsU0FBeEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFrQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLFdBQWxDLENBREYsQ0FERixFQUlFLE1BQUMsZ0RBQUQ7SUFBTSxJQUFJLEVBQUMsU0FBWDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxNQUFEO0lBQVEsZUFBZSxFQUFDLFNBQXhCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBa0M7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxZQUFsQyxDQURGLENBSkYsQ0FYSixDQXJCRixDQURGLEVBNENHZCxRQTVDSCxDQURGO0FBZ0RELENBbEVEOztHQUFNRCxTO1VBQ2FHLHVELEVBRU1DLHVEOzs7TUFIbkJKLFM7QUFvRU5BLFNBQVMsQ0FBQ2dCLFNBQVYsR0FBc0I7RUFDcEJmLFFBQVEsRUFBRWdCLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFETCxDQUF0QjtBQUllbkIsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS41ZTBmYmM4MWM2ZGRkNzdhZTg5Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2dvdXRBY3Rpb24gfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBBaUZpbGxIb21lIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xyXG5pbXBvcnQgeyBGYVVzZXIsIEZhU2VhcmNoIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgZGV2aWNlIGZyb20gJy4uL3V0aWxzL2RldmljZSc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTVweDtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKHZhcigtLWI2YSwgMjE5LCAyMTksIDIxOSksIDEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcblxyXG4gIEBtZWRpYSAke2RldmljZS5tb2JpbGV9IHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbmA7XHJcblxyXG5jb25zdCBJY29uID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDcwJTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgY29sb3I6ICMxODY0YWI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgQG1lZGlhICR7ZGV2aWNlLnRhYmxldH0ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2VhcmNoRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAzODBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7ZGV2aWNlLm1vYmlsZUx9IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2VhcmNoQmFyID0gc3R5bGVkLmlucHV0YFxyXG4gIGFsbDogdW5zZXQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5gO1xyXG5cclxuY29uc3QgU2VhcmNoSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTBweDtcclxuICBmb250LXNpemU6IDE5cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzE4NjRhYjtcclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLmJhY2tncm91bmRDb2xvcn07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3Qgb25Mb2dvdXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChsb2dvdXRBY3Rpb24oKSk7XHJcbiAgICBSb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tQcm9maWxlUGFnZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghaXNMb2dnZWRJbikge1xyXG4gICAgICBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6QuXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgUm91dGVyLnB1c2goJy9wcm9maWxlJyk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SWNvbkNvbnRhaW5lcj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxJY29uPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPEFpRmlsbEhvbWUgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvSWNvbj5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxJY29uPlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8RmFVc2VyIG9uQ2xpY2s9e29uQ2xpY2tQcm9maWxlUGFnZX0vPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0ljb24+XHJcbiAgICAgICAgPC9JY29uQ29udGFpbmVyPlxyXG4gICAgICAgIDxTZWFyY2hGb3JtPlxyXG4gICAgICAgICAgPFNlYXJjaEJhciB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgLz5cclxuICAgICAgICAgIDxTZWFyY2hJY29uQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8RmFTZWFyY2ggLz5cclxuICAgICAgICAgIDwvU2VhcmNoSWNvbkNvbnRhaW5lcj5cclxuICAgICAgICA8L1NlYXJjaEZvcm0+XHJcbiAgICAgICAgPEJ1dHRvbkNvbnRhaW5lcj5cclxuICAgICAgICAgIHtpc0xvZ2dlZEluID8gKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjMTg2NGFiXCIgXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkxvZ291dH0gXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6ICc5NXB4J319PlxyXG4gICAgICAgICAgICAgICAgPGE+TE9HT1VUPC9hPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gYmFja2dyb3VuZENvbG9yPVwiIzE4NjRhYlwiPjxhPkxPR0lOPC9hPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBiYWNrZ3JvdW5kQ29sb3I9XCIjMmI4YTNlXCI+PGE+U0lHTlVQPC9hPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC8+XHJcbiAgKVxyXG59O1xyXG5cclxuQXBwTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDsiXSwic291cmNlUm9vdCI6IiJ9