webpackHotUpdate_N_E("pages/signup",{

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _utils_device__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/device */ "./utils/device.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\components\\AppLayout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var Container = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "AppLayout__Container",
  componentId: "sc-10lualo-0"
})(["width:100%;height:55px;position:sticky;top:0;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid rgba(var(--b6a,219,219,219),1);background-color:white;z-index:5;box-shadow:0 4px 12px 0 rgba(0,0,0,0.05);@media ", "{position:static;}"], _utils_device__WEBPACK_IMPORTED_MODULE_11__["default"].mobile);
_c = Container;
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "AppLayout__IconContainer",
  componentId: "sc-10lualo-1"
})(["display:flex;justify-content:flex-start;"]);
_c2 = IconContainer;
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "AppLayout__Icon",
  componentId: "sc-10lualo-2"
})(["width:80px;height:70%;font-size:30px;margin-left:10px;color:#1864ab;display:flex;justify-content:center;cursor:pointer;opacity:0.8;&:hover{opacity:1;}@media ", "{width:40px;margin-left:5px;}"], _utils_device__WEBPACK_IMPORTED_MODULE_11__["default"].tablet);
_c3 = Icon;
var SearchForm = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].form.withConfig({
  displayName: "AppLayout__SearchForm",
  componentId: "sc-10lualo-3"
})(["position:relative;justify-content:center;align-items:center;width:380px;height:20px;border:0.5px solid black;border-radius:10px;padding:10px;outline:none;opacity:0.7;&:hover{opacity:1;}@media ", "{width:175px;}@media ", "{width:350px;margin-left:70px;}"], _utils_device__WEBPACK_IMPORTED_MODULE_11__["default"].mobile, _utils_device__WEBPACK_IMPORTED_MODULE_11__["default"].tablet);
_c4 = SearchForm;
var SearchBar = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].input.withConfig({
  displayName: "AppLayout__SearchBar",
  componentId: "sc-10lualo-4"
})(["all:unset;width:100%;height:100%;font-size:16px;display:flex;"]);
_c5 = SearchBar;
var SearchIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].button.withConfig({
  displayName: "AppLayout__SearchIconContainer",
  componentId: "sc-10lualo-5"
})(["position:absolute;top:7px;right:6px;font-size:22px;align-items:center;cursor:pointer;background:none;border:none;color:#1864ab;"]);
_c6 = SearchIconContainer;
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "AppLayout__ButtonContainer",
  componentId: "sc-10lualo-6"
})(["display:flex;justify-content:flex-end;"]);
_c7 = ButtonContainer;
var Button = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "AppLayout__Button",
  componentId: "sc-10lualo-7"
})(["width:80px;height:35px;border-radius:5px;text-align:center;background-color:", ";color:white;display:flex;justify-content:center;align-items:center;margin-right:15px;cursor:pointer;opacity:0.8;&:hover{transform:scale(0.98);opacity:1;}@media ", "{width:40px;font-size:10px;margin-right:5px;}"], function (props) {
  return props.backgroundColor;
}, _utils_device__WEBPACK_IMPORTED_MODULE_11__["default"].tablet);
_c8 = Button;

var AppLayout = function AppLayout(_ref) {
  _s();

  var children = _ref.children;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      tag = _useInput2[0],
      onChangeTag = _useInput2[1];

  var onLogout = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["LOG_OUT_REQUEST"]
    });
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    e.preventDefault();
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/hashtag/".concat(tag));
  }, [tag]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }, __jsx(IconContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, __jsx(Icon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 15
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__["AiFillHome"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  })))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 11
    }
  }, __jsx(Icon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaUser"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 17
    }
  }))))), __jsx(SearchForm, {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }, __jsx(SearchBar, {
    value: tag,
    type: "text",
    placeholder: "Search...",
    onChange: onChangeTag,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }), __jsx(SearchIconContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaSearch"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }
  }))), __jsx(ButtonContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  }, me ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
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
      lineNumber: 184,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 17
    }
  }, "LOGOUT"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/login",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 15
    }
  }, __jsx(Button, {
    backgroundColor: "#1864ab",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 51
    }
  }, "LOGIN"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/signup",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 15
    }
  }, __jsx(Button, {
    backgroundColor: "#2b8a3e",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 51
    }
  }, "SIGNUP")))))), children);
};

_s(AppLayout, "uGXBGAob4JYiDE/bd/SD/O/iPks=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_7__["default"]];
});

_c9 = AppLayout;
AppLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node.isRequired
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBMYXlvdXQuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiZGV2aWNlIiwibW9iaWxlIiwiSWNvbkNvbnRhaW5lciIsIkljb24iLCJ0YWJsZXQiLCJTZWFyY2hGb3JtIiwiZm9ybSIsIlNlYXJjaEJhciIsImlucHV0IiwiU2VhcmNoSWNvbkNvbnRhaW5lciIsImJ1dHRvbiIsIkJ1dHRvbkNvbnRhaW5lciIsIkJ1dHRvbiIsInByb3BzIiwiYmFja2dyb3VuZENvbG9yIiwiQXBwTGF5b3V0IiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZUlucHV0IiwidGFnIiwib25DaGFuZ2VUYWciLCJvbkxvZ291dCIsInVzZUNhbGxiYWNrIiwidHlwZSIsIkxPR19PVVRfUkVRVUVTVCIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiUm91dGVyIiwicHVzaCIsIm1hcmdpbkxlZnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsa1JBYUpDLHNEQUFNLENBQUNDLE1BYkgsQ0FBZjtLQUFNSixTO0FBa0JOLElBQU1LLGFBQWEsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxnREFBbkI7TUFBTUcsYTtBQUtOLElBQU1DLElBQUksR0FBR0wseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSx1TUFlQ0Msc0RBQU0sQ0FBQ0ksTUFmUixDQUFWO01BQU1ELEk7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REY7QUF1REQsQ0F4RUQ7O0dBQU1ELFM7VUFDYUcsdUQsRUFFRkMsdUQsRUFDWUksdUQ7OztNQUp2QlIsUztBQTBFTkEsU0FBUyxDQUFDcUIsU0FBVixHQUFzQjtFQUNwQnBCLFFBQVEsRUFBRXFCLGlEQUFTLENBQUNDLElBQVYsQ0FBZUM7QUFETCxDQUF0QjtBQUlleEIsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLmFiOWU4NzE4MGRkNTBlOTYwYmYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTE9HX09VVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEFpRmlsbEhvbWUgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XHJcbmltcG9ydCB7IEZhVXNlciwgRmFTZWFyY2ggfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCBkZXZpY2UgZnJvbSAnLi4vdXRpbHMvZGV2aWNlJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEodmFyKC0tYjZhLCAyMTksIDIxOSwgMjE5KSwgMSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgei1pbmRleDogNTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuXHJcbiAgQG1lZGlhICR7ZGV2aWNlLm1vYmlsZX0ge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuYDtcclxuXHJcbmNvbnN0IEljb24gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogNzAlO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBjb2xvcjogIzE4NjRhYjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAwLjg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke2RldmljZS50YWJsZXR9IHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTZWFyY2hGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDM4MHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtkZXZpY2UubW9iaWxlfSB7XHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtkZXZpY2UudGFibGV0fSB7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTZWFyY2hCYXIgPSBzdHlsZWQuaW5wdXRgXHJcbiAgYWxsOiB1bnNldDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmA7XHJcblxyXG5jb25zdCBTZWFyY2hJY29uQ29udGFpbmVyID0gc3R5bGVkLmJ1dHRvbmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3cHg7XHJcbiAgcmlnaHQ6IDZweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICMxODY0YWI7XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAwLjg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtkZXZpY2UudGFibGV0fSB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgW3RhZywgb25DaGFuZ2VUYWddID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICBjb25zdCBvbkxvZ291dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTE9HX09VVF9SRVFVRVNULFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBSb3V0ZXIucHVzaChgL2hhc2h0YWcvJHt0YWd9YCk7XHJcbiAgfSwgW3RhZ10pOyBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEljb25Db250YWluZXI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICA8SWNvbj5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxBaUZpbGxIb21lIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0ljb24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5cclxuICAgICAgICAgICAgPEljb24+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8RmFVc2VyIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0ljb24+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9JY29uQ29udGFpbmVyPlxyXG4gICAgICAgIDxTZWFyY2hGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgICA8U2VhcmNoQmFyXHJcbiAgICAgICAgICAgIHZhbHVlPXt0YWd9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUYWd9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFNlYXJjaEljb25Db250YWluZXI+XHJcbiAgICAgICAgICAgIDxGYVNlYXJjaCAvPlxyXG4gICAgICAgICAgPC9TZWFyY2hJY29uQ29udGFpbmVyPlxyXG4gICAgICAgIDwvU2VhcmNoRm9ybT5cclxuICAgICAgICA8QnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICAgICAge21lID8gKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9XCIjMTg2NGFiXCIgXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkxvZ291dH0gXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbkxlZnQ6ICc5NXB4J319PlxyXG4gICAgICAgICAgICAgICAgPGE+TE9HT1VUPC9hPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gYmFja2dyb3VuZENvbG9yPVwiIzE4NjRhYlwiPjxhPkxPR0lOPC9hPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBiYWNrZ3JvdW5kQ29sb3I9XCIjMmI4YTNlXCI+PGE+U0lHTlVQPC9hPjwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvQnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbkFwcExheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7Il0sInNvdXJjZVJvb3QiOiIifQ==