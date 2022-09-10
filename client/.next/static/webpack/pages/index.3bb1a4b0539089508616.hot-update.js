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
})(["display:flex;margin-top:15px;"]);
_c = Container;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].form.withConfig({
  displayName: "CommentUpdateForm__Form",
  componentId: "sc-1hhyv42-1"
})(["width:100%;min-height:50px;padding:10px;display:flex;flex-direction:column;position:relative;"]);
_c2 = Form;
var ContentInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "CommentUpdateForm__ContentInput",
  componentId: "sc-1hhyv42-2"
})(["border:none;padding:8px;margin-right:10px;font-size:16px;min-height:40px;max-height:300px;border-radius:10px;background-color:#f8f9fa;"]);
_c3 = ContentInput;
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "CommentUpdateForm__ButtonContainer",
  componentId: "sc-1hhyv42-3"
})(["display:flex;justify-content:flex-end;margin-right:10px;margin-top:7px;"]);
_c4 = ButtonContainer;
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
  displayName: "CommentUpdateForm__SubmitButton",
  componentId: "sc-1hhyv42-4"
})(["all:unset;display:flex;justify-content:center;align-items:center;width:60px;height:30px;background-color:#1864ab;border-radius:6px;color:white;cursor:pointer;outline:none;opacity:", ";transition:all 0.2s linear;"], function (props) {
  return props.isAvailablePosting ? 1 : 0.6;
});
_c5 = SubmitButton;
var CancelButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
  displayName: "CommentUpdateForm__CancelButton",
  componentId: "sc-1hhyv42-5"
})(["all:unset;display:flex;justify-content:center;align-items:center;width:60px;height:30px;margin-left:5px;background-color:#e8537c;border-radius:6px;color:white;cursor:pointer;outline:none;opacity:0.6;&:hover{opacity:1;}transition:all 0.2s linear;"]);
_c6 = CancelButton;

var CommentUpdateForm = function CommentUpdateForm(_ref) {
  _s();

  var commentId = _ref.commentId,
      commentContent = _ref.commentContent,
      setEditMode = _ref.setEditMode;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(commentContent),
      commentInput = _useState[0],
      setCommentInput = _useState[1];

  var onChangeComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    var value = e.target.value;
    setCommentInput(e.target.value);

    if (value.trim()) {
      setIsAvailablePosting(true);
    } else if (value.length === 0 || value.length > 500) {
      setIsAvailablePosting(false);
    }

    ;
  }, [commentInput]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: UPDATE_COMMENT_REQUEST,
      data: {
        commentId: commentId,
        content: ContentInput
      }
    });
  });
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 5
    }
  }, __jsx(Form, {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }
  }, __jsx(ContentInput, {
    value: commentInput,
    onChange: onChangeComment,
    style: {
      resize: "none",
      outline: "none",
      overflow: "hidden"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }), __jsx(ButtonContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx(SubmitButton, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, "\uC218\uC815"), __jsx(CancelButton, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, "\uC0AD\uC81C"))));
};

_s(CommentUpdateForm, "Rt5ZOOuu+VYbdWX1lXznY7ZnH6A=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c7 = CommentUpdateForm;
CommentUpdateForm.propTypes = {
  commentId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  commentContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  setEditMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CommentUpdateForm);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Form");
$RefreshReg$(_c3, "ContentInput");
$RefreshReg$(_c4, "ButtonContainer");
$RefreshReg$(_c5, "SubmitButton");
$RefreshReg$(_c6, "CancelButton");
$RefreshReg$(_c7, "CommentUpdateForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50VXBkYXRlRm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIkNvbnRlbnRJbnB1dCIsIlRleHRBcmVhIiwiQnV0dG9uQ29udGFpbmVyIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJpc0F2YWlsYWJsZVBvc3RpbmciLCJDYW5jZWxCdXR0b24iLCJDb21tZW50VXBkYXRlRm9ybSIsImNvbW1lbnRJZCIsImNvbW1lbnRDb250ZW50Iiwic2V0RWRpdE1vZGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJjb21tZW50SW5wdXQiLCJzZXRDb21tZW50SW5wdXQiLCJvbkNoYW5nZUNvbW1lbnQiLCJ1c2VDYWxsYmFjayIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInRyaW0iLCJzZXRJc0F2YWlsYWJsZVBvc3RpbmciLCJsZW5ndGgiLCJvblN1Ym1pdCIsInR5cGUiLCJVUERBVEVfQ09NTUVOVF9SRVFVRVNUIiwiZGF0YSIsImNvbnRlbnQiLCJyZXNpemUiLCJvdXRsaW5lIiwib3ZlcmZsb3ciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLHFDQUFmO0tBQU1GLFM7QUFLTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNHLElBQVY7RUFBQTtFQUFBO0FBQUEscUdBQVY7TUFBTUQsSTtBQVNOLElBQU1FLFlBQVksR0FBR0osaUVBQU0sQ0FBQ0ssK0RBQUQsQ0FBVDtFQUFBO0VBQUE7QUFBQSw4SUFBbEI7TUFBTUQsWTtBQVdOLElBQU1FLGVB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OUI7QUFNZTVCLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNiYjFhNGIwNTM5MDg5NTA4NjE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFRleHRBcmVhIGZyb20gJ3JlYWN0LXRleHRhcmVhLWF1dG9zaXplJztcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50SW5wdXQgPSBzdHlsZWQoVGV4dEFyZWEpYFxyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXJnaW4tdG9wOiA3cHg7XHJcbmA7XHJcblxyXG5jb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGFsbDogdW5zZXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogMzBweDsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4NjRhYjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmlzQXZhaWxhYmxlUG9zdGluZyA/IDEgOiAwLjYpfTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbmA7XHJcblxyXG5jb25zdCBDYW5jZWxCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGFsbDogdW5zZXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogMzBweDsgXHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg1MzdjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IENvbW1lbnRVcGRhdGVGb3JtID0gKHsgY29tbWVudElkLCBjb21tZW50Q29udGVudCwgc2V0RWRpdE1vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbY29tbWVudElucHV0LCBzZXRDb21tZW50SW5wdXRdID0gdXNlU3RhdGUoY29tbWVudENvbnRlbnQpO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc3Qge3RhcmdldDoge3ZhbHVlfX0gPSBlO1xyXG4gICAgc2V0Q29tbWVudElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmICh2YWx1ZS50cmltKCkpIHtcclxuICAgICAgc2V0SXNBdmFpbGFibGVQb3N0aW5nKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPT09IDAgfHwgdmFsdWUubGVuZ3RoID4gNTAwKSB7XHJcbiAgICAgIHNldElzQXZhaWxhYmxlUG9zdGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtjb21tZW50SW5wdXRdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCAoe1xyXG4gICAgICB0eXBlOiBVUERBVEVfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgY29tbWVudElkOiBjb21tZW50SWQsXHJcbiAgICAgICAgY29udGVudDogQ29udGVudElucHV0LFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPENvbnRlbnRJbnB1dCBcclxuICAgICAgICAgIHZhbHVlPXtjb21tZW50SW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb21tZW50fVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcmVzaXplOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25Db250YWluZXI+XHJcbiAgICAgICAgICA8U3VibWl0QnV0dG9uPuyImOyglTwvU3VibWl0QnV0dG9uPlxyXG4gICAgICAgICAgPENhbmNlbEJ1dHRvbj7sgq3soJw8L0NhbmNlbEJ1dHRvbj5cclxuICAgICAgICA8L0J1dHRvbkNvbnRhaW5lcj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkNvbW1lbnRVcGRhdGVGb3JtLnByb3BUeXBlcyA9IHtcclxuICBjb21tZW50SWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBjb21tZW50Q29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHNldEVkaXRNb2RlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudFVwZGF0ZUZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==