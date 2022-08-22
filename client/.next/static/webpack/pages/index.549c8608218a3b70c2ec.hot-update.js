webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ProfileImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileImage */ "./components/ProfileImage.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\Comment.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Comment__Container",
  componentId: "sc-1cesasf-0"
})(["min-height:30px;padding:10px 30px;"]);
_c = Container;
var UpsideContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Comment__UpsideContainer",
  componentId: "sc-1cesasf-1"
})(["display:flex;flex-direction:column;height:20px;"]);
_c2 = UpsideContainer;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Comment__ProfileImageContainer",
  componentId: "sc-1cesasf-2"
})(["width:30px;height:30px;margin-right:18px;border-radius:50px;overflow:hidden;float:left;"]);
_c3 = ProfileImageContainer;
var Nickname = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Comment__Nickname",
  componentId: "sc-1cesasf-3"
})(["font-size:16px;font-weight:600;"]);
_c4 = Nickname;
var ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Comment__ContentContainer",
  componentId: "sc-1cesasf-4"
})([""]);

var Comment = function Comment(_ref) {
  var comment = _ref.comment;
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: __webpack_require__(/*! ../image/user.png */ "./image/user.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  })), __jsx(UpsideContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, comment.User.nickname)), comment.content);
};

_c5 = Comment;
/* harmony default export */ __webpack_exports__["default"] = (Comment);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "UpsideContainer");
$RefreshReg$(_c3, "ProfileImageContainer");
$RefreshReg$(_c4, "Nickname");
$RefreshReg$(_c5, "Comment");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50LmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlVwc2lkZUNvbnRhaW5lciIsIlByb2ZpbGVJbWFnZUNvbnRhaW5lciIsIk5pY2tuYW1lIiwic3BhbiIsIkNvbnRlbnRDb250YWluZXIiLCJDb21tZW50IiwiY29tbWVudCIsInJlcXVpcmUiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLDBDQUFmO0tBQU1GLFM7QUFLTixJQUFNRyxlQUFlLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsdURBQXJCO01BQU1DLGU7QUFNTixJQUFNQyxxQkFBcUIsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSwrRkFBM0I7TUFBTUUscUI7QUFTTixJQUFNQyxRQUFRLEdBQUdKLHlEQUFNLENBQUNLLElBQVY7RUFBQTtFQUFBO0FBQUEsdUNBQWQ7TUFBTUQsUTtBQUtOLElBQU1FLGdCQUFnQixHQUFHTix5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLFFBQXRCOztBQUdBLElBQU1NLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BQWlCO0VBQUEsSUFBZEMsT0FBYyxRQUFkQSxPQUFjO0VBQy9CLE9BQ0UsTUFBQyxTQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLHFCQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDSSxNQUFDLHFEQUFEO0lBQWMsR0FBRyxFQUFFQyxtQkFBTyxDQUFDLDJDQUFELENBQTFCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFESixDQURGLEVBSUUsTUFBQyxlQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLFFBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFXRCxPQUFPLENBQUNFLElBQVIsQ0FBYUMsUUFBeEIsQ0FERixDQUpGLEVBT0tILE9BQU8sQ0FBQ0ksT0FQYixDQURGO0FBV0QsQ0FaRDs7TUFBTUwsTztBQWNTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NDljODYwODIxOGEzYjcwYzJlYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9maWxlSW1hZ2UgZnJvbSAnLi9Qcm9maWxlSW1hZ2UnO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcclxuYDtcclxuXHJcbmNvbnN0IFVwc2lkZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IFByb2ZpbGVJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMThweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbmA7XHJcblxyXG5jb25zdCBOaWNrbmFtZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5gO1xyXG5cclxuY29uc3QgQ29udGVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbmA7XHJcblxyXG5jb25zdCBDb21tZW50ID0gKHsgY29tbWVudCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxQcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgICA8UHJvZmlsZUltYWdlIHNyYz17cmVxdWlyZSgnLi4vaW1hZ2UvdXNlci5wbmcnKX0gLz5cclxuICAgICAgPC9Qcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgIDxVcHNpZGVDb250YWluZXI+XHJcbiAgICAgICAgPE5pY2tuYW1lPntjb21tZW50LlVzZXIubmlja25hbWV9PC9OaWNrbmFtZT5cclxuICAgICAgPC9VcHNpZGVDb250YWluZXI+XHJcbiAgICAgICAge2NvbW1lbnQuY29udGVudH1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50OyJdLCJzb3VyY2VSb290IjoiIn0=