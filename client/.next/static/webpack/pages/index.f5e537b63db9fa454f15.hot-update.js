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
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\components\\CommentUpdateForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Container = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "CommentUpdateForm__Container",
  componentId: "sc-1hhyv42-0"
})(["display:flex;margin-top:15px;"]);
_c = Container;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].form.withConfig({
  displayName: "CommentUpdateForm__Form",
  componentId: "sc-1hhyv42-1"
})(["width:100%;min-height:50px;padding:10px;display:flex;flex-direction:column;position:relative;"]);
_c2 = Form;
var ContentInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "CommentUpdateForm__ContentInput",
  componentId: "sc-1hhyv42-2"
})(["border:none;padding:8px;margin-right:13px;font-size:16px;min-height:40px;max-height:300px;border-radius:10px;background-color:#f8f9fa;"]);
_c3 = ContentInput;
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "CommentUpdateForm__ButtonContainer",
  componentId: "sc-1hhyv42-3"
})(["display:flex;justify-content:flex-end;margin-right:13px;margin-top:7px;"]);
_c4 = ButtonContainer;
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.withConfig({
  displayName: "CommentUpdateForm__SubmitButton",
  componentId: "sc-1hhyv42-4"
})(["all:unset;display:flex;justify-content:center;align-items:center;width:60px;height:30px;background-color:#1864ab;border-radius:6px;color:white;cursor:pointer;outline:none;opacity:", ";transition:all 0.2s linear;"], function (props) {
  return props.isAvailablePosting ? 1 : 0.6;
});
_c5 = SubmitButton;
var CancelButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.withConfig({
  displayName: "CommentUpdateForm__CancelButton",
  componentId: "sc-1hhyv42-5"
})(["all:unset;display:flex;justify-content:center;align-items:center;width:60px;height:30px;margin-left:5px;background-color:#e8537c;border-radius:6px;color:white;cursor:pointer;outline:none;opacity:0.6;&:hover{opacity:1;}transition:all 0.2s linear;"]);
_c6 = CancelButton;

var CommentUpdateForm = function CommentUpdateForm(_ref) {
  _s();

  var postId = _ref.postId,
      commentId = _ref.commentId,
      commentContent = _ref.commentContent,
      setEditMode = _ref.setEditMode;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(commentContent),
      commentInput = _useState[0],
      setCommentInput = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isAvailablePosting = _useState2[0],
      setIsAvailablePosting = _useState2[1];

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
  var onCancelUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setEditMode(false);
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPDATE_COMMENT_REQUEST"],
      data: {
        postId: postId,
        commentId: commentId,
        content: ContentInput
      }
    });
  }, [ContentInput]);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 5
    }
  }, __jsx(Form, {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
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
      lineNumber: 111,
      columnNumber: 9
    }
  }), __jsx(ButtonContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx(SubmitButton, {
    type: "submit",
    isAvailablePosting: isAvailablePosting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, "\uC218\uC815"), __jsx(CancelButton, {
    onClick: onCancelUpdate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, "\uCDE8\uC18C"))));
};

_s(CommentUpdateForm, "fTFmdlxKXDSGRoL0pxden1o7dFg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c7 = CommentUpdateForm;
CommentUpdateForm.propTypes = {
  postId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50VXBkYXRlRm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIkNvbnRlbnRJbnB1dCIsIlRleHRBcmVhIiwiQnV0dG9uQ29udGFpbmVyIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJpc0F2YWlsYWJsZVBvc3RpbmciLCJDYW5jZWxCdXR0b24iLCJDb21tZW50VXBkYXRlRm9ybSIsInBvc3RJZCIsImNvbW1lbnRJZCIsImNvbW1lbnRDb250ZW50Iiwic2V0RWRpdE1vZGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJjb21tZW50SW5wdXQiLCJzZXRDb21tZW50SW5wdXQiLCJzZXRJc0F2YWlsYWJsZVBvc3RpbmciLCJvbkNoYW5nZUNvbW1lbnQiLCJ1c2VDYWxsYmFjayIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInRyaW0iLCJsZW5ndGgiLCJvbkNhbmNlbFVwZGF0ZSIsIm9uU3VibWl0IiwidHlwZSIsIlVQREFURV9DT01NRU5UX1JFUVVFU1QiLCJkYXRhIiwiY29udGVudCIsInJlc2l6ZSIsIm91dGxpbmUiLCJvdmVyZmxvdyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEscUNBQWY7S0FBTUYsUztBQUtOLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0csSUFBVjtFQUFBO0VBQUE7QUFBQSxxR0FBVjtNQUFNRCxJO0FBU04sSUFBTUUsWUFBWSxHQUFHSixpRUFBTSxDQUFDSywrREFBRCxDQUFUO0VBQUE7RUFBQTtB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TUFBQTtNQUFBO0lBQUE7RUFBQSxrQkFERixFQUVFLE1BQUMsWUFBRDtJQUFjLE9BQU8sRUFBRW9CLGNBQXZCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsa0JBRkYsQ0FWRixDQURGLENBREY7QUFtQkQsQ0FqREQ7O0dBQU1sQixpQjtVQUNhTSx1RDs7O01BRGJOLGlCO0FBbUROQSxpQkFBaUIsQ0FBQzJCLFNBQWxCLEdBQThCO0VBQzVCMUIsTUFBTSxFQUFFMkIsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFERztFQUU1QjVCLFNBQVMsRUFBRTBCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRkE7RUFHNUIzQixjQUFjLEVBQUV5QixpREFBUyxDQUFDRyxNQUFWLENBQWlCRCxVQUhMO0VBSTVCMUIsV0FBVyxFQUFFd0IsaURBQVMsQ0FBQ0ksSUFBVixDQUFlRjtBQUpBLENBQTlCO0FBT2U5QixnRkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNWU1MzdiNjNkYjlmYTQ1NGYxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFVQREFURV9DT01NRU5UX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IFRleHRBcmVhIGZyb20gJ3JlYWN0LXRleHRhcmVhLWF1dG9zaXplJztcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50SW5wdXQgPSBzdHlsZWQoVGV4dEFyZWEpYFxyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi1yaWdodDogMTNweDtcclxuICBtYXJnaW4tdG9wOiA3cHg7XHJcbmA7XHJcblxyXG5jb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGFsbDogdW5zZXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogMzBweDsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4NjRhYjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmlzQXZhaWxhYmxlUG9zdGluZyA/IDEgOiAwLjYpfTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbmA7XHJcblxyXG5jb25zdCBDYW5jZWxCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGFsbDogdW5zZXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogMzBweDsgXHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg1MzdjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IENvbW1lbnRVcGRhdGVGb3JtID0gKHsgcG9zdElkLCBjb21tZW50SWQsIGNvbW1lbnRDb250ZW50LCBzZXRFZGl0TW9kZSB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtjb21tZW50SW5wdXQsIHNldENvbW1lbnRJbnB1dF0gPSB1c2VTdGF0ZShjb21tZW50Q29udGVudCk7XHJcbiAgY29uc3QgW2lzQXZhaWxhYmxlUG9zdGluZywgc2V0SXNBdmFpbGFibGVQb3N0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VDb21tZW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnN0IHt0YXJnZXQ6IHt2YWx1ZX19ID0gZTtcclxuICAgIHNldENvbW1lbnRJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpKSB7XHJcbiAgICAgIHNldElzQXZhaWxhYmxlUG9zdGluZyh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID09PSAwIHx8IHZhbHVlLmxlbmd0aCA+IDUwMCkge1xyXG4gICAgICBzZXRJc0F2YWlsYWJsZVBvc3RpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICB9LCBbY29tbWVudElucHV0XSk7XHJcblxyXG4gIGNvbnN0IG9uQ2FuY2VsVXBkYXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCAoe1xyXG4gICAgICB0eXBlOiBVUERBVEVfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcG9zdElkOiBwb3N0SWQsXHJcbiAgICAgICAgY29tbWVudElkOiBjb21tZW50SWQsXHJcbiAgICAgICAgY29udGVudDogQ29udGVudElucHV0LFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9LCBbQ29udGVudElucHV0XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxDb250ZW50SW5wdXQgXHJcbiAgICAgICAgICB2YWx1ZT17Y29tbWVudElucHV0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29tbWVudH1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHJlc2l6ZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICAgICAgPFN1Ym1pdEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaXNBdmFpbGFibGVQb3N0aW5nPXtpc0F2YWlsYWJsZVBvc3Rpbmd9PuyImOyglTwvU3VibWl0QnV0dG9uPlxyXG4gICAgICAgICAgPENhbmNlbEJ1dHRvbiBvbkNsaWNrPXtvbkNhbmNlbFVwZGF0ZX0+7Leo7IaMPC9DYW5jZWxCdXR0b24+XHJcbiAgICAgICAgPC9CdXR0b25Db250YWluZXI+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5Db21tZW50VXBkYXRlRm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgY29tbWVudElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgY29tbWVudENvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBzZXRFZGl0TW9kZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRVcGRhdGVGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=