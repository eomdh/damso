webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentUpdateForm.js":
/*!*****************************************!*\
  !*** ./components/CommentUpdateForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\components\\CommentUpdateForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "CommentUpdateForm__Container",
  componentId: "sc-1hhyv42-0"
})(["display:flex;"]);
_c = Container;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].form.withConfig({
  displayName: "CommentUpdateForm__Form",
  componentId: "sc-1hhyv42-1"
})(["width:100%;min-height:50px;padding:10px;display:flex;flex-direction:column;position:relative;"]);
_c2 = Form;
var ContentInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "CommentUpdateForm__ContentInput",
  componentId: "sc-1hhyv42-2"
})(["width:80%;border:none;padding:8px;font-size:16px;min-height:40px;max-height:300px;border-radius:10px;background-color:#f8f9fa;@media ", "{width:72%;}"], device.mobileL);

var CommentUpdateForm = function CommentUpdateForm(_ref) {
  _s();

  var commentId = _ref.commentId,
      commentContent = _ref.commentContent,
      setEditMode = _ref.setEditMode;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      commentInput = _useState[0],
      setCommentInput = _useState[1];

  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {});
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(Form, {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }));
};

_s(CommentUpdateForm, "0YMp09iNOE5c1QGZPPK/tkf/BH4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c3 = CommentUpdateForm;
CommentUpdateForm.propTypes = {
  commentId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  commentContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  setEditMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentUpdateForm);

var _c, _c2, _c3;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Form");
$RefreshReg$(_c3, "CommentUpdateForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50VXBkYXRlRm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIkNvbnRlbnRJbnB1dCIsIlRleHRBcmVhIiwiZGV2aWNlIiwibW9iaWxlTCIsIkNvbW1lbnRVcGRhdGVGb3JtIiwiY29tbWVudElkIiwiY29tbWVudENvbnRlbnQiLCJzZXRFZGl0TW9kZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImNvbW1lbnRJbnB1dCIsInNldENvbW1lbnRJbnB1dCIsIm9uU3VibWl0IiwidXNlQ2FsbGJhY2siLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLHFCQUFmO0tBQU1GLFM7QUFJTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNHLElBQVY7RUFBQTtFQUFBO0FBQUEscUdBQVY7TUFBTUQsSTtBQVNOLElBQU1FLFlBQVksR0FBR0osaUVBQU0sQ0FBQ0ssK0RBQUQsQ0FBVDtFQUFBO0VBQUE7QUFBQSw4SkFVUEMsTUFBTSxDQUFDQyxPQVZBLENBQWxCOztBQWVBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsT0FBZ0Q7RUFBQTs7RUFBQSxJQUE3Q0MsU0FBNkMsUUFBN0NBLFNBQTZDO0VBQUEsSUFBbENDLGNBQWtDLFFBQWxDQSxjQUFrQztFQUFBLElBQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7RUFDeEUsSUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7RUFDQSxnQkFBd0NDLHNEQUFRLEVBQWhEO0VBQUEsSUFBT0MsWUFBUDtFQUFBLElBQXFCQyxlQUFyQjs7RUFFQSxJQUFNQyxRQUFRLEdBQUdDLHlEQUFXLENBQUMsWUFBTSxDQUVsQyxDQUYyQixDQUE1QjtFQUlBLE9BQ0UsTUFBQyxTQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLElBQUQ7SUFBTSxRQUFRLEVBQUVELFFBQWhCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixDQURGO0FBT0QsQ0FmRDs7R0FBTVQsaUI7VUFDYUssdUQ7OztNQURiTCxpQjtBQWlCTkEsaUJBQWlCLENBQUNXLFNBQWxCLEdBQThCO0VBQzVCVixTQUFTLEVBQUVXLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBREE7RUFFNUJaLGNBQWMsRUFBRVUsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkQsVUFGTDtFQUc1QlgsV0FBVyxFQUFFUyxpREFBUyxDQUFDSSxJQUFWLENBQWVGO0FBSEEsQ0FBOUI7QUFNZWQsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjZlNDdjZTFjZDdhNDE5YjY0NmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAncmVhY3QtdGV4dGFyZWEtYXV0b3NpemUnO1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50SW5wdXQgPSBzdHlsZWQoVGV4dEFyZWEpYFxyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcblxyXG4gIEBtZWRpYSAke2RldmljZS5tb2JpbGVMfSB7XHJcbiAgICB3aWR0aDogNzIlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENvbW1lbnRVcGRhdGVGb3JtID0gKHsgY29tbWVudElkLCBjb21tZW50Q29udGVudCwgc2V0RWRpdE1vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbY29tbWVudElucHV0LCBzZXRDb21tZW50SW5wdXRdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcblxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuXHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5Db21tZW50VXBkYXRlRm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgY29tbWVudElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgY29tbWVudENvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBzZXRFZGl0TW9kZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRVcGRhdGVGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=