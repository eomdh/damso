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
})(["border:none;padding:8px;margin-right:13px;font-size:16px;min-height:40px;max-height:300px;border-radius:10px;background-color:#f8f9fa;"]);
_c3 = ContentInput;
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "CommentUpdateForm__ButtonContainer",
  componentId: "sc-1hhyv42-3"
})(["display:flex;justify-content:flex-end;margin-right:13px;margin-top:7px;"]);
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
      lineNumber: 107,
      columnNumber: 5
    }
  }, __jsx(Form, {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 109,
      columnNumber: 9
    }
  }), __jsx(ButtonContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }, __jsx(SubmitButton, {
    type: "submit",
    isAvailablePosting: isAvailablePosting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, "\uC218\uC815"), __jsx(CancelButton, {
    onClick: onCancelUpdate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, "\uCDE8\uC18C"))));
};

_s(CommentUpdateForm, "fTFmdlxKXDSGRoL0pxden1o7dFg=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50VXBkYXRlRm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIkNvbnRlbnRJbnB1dCIsIlRleHRBcmVhIiwiQnV0dG9uQ29udGFpbmVyIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJpc0F2YWlsYWJsZVBvc3RpbmciLCJDYW5jZWxCdXR0b24iLCJDb21tZW50VXBkYXRlRm9ybSIsImNvbW1lbnRJZCIsImNvbW1lbnRDb250ZW50Iiwic2V0RWRpdE1vZGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJjb21tZW50SW5wdXQiLCJzZXRDb21tZW50SW5wdXQiLCJzZXRJc0F2YWlsYWJsZVBvc3RpbmciLCJvbkNoYW5nZUNvbW1lbnQiLCJ1c2VDYWxsYmFjayIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInRyaW0iLCJsZW5ndGgiLCJvbkNhbmNlbFVwZGF0ZSIsIm9uU3VibWl0IiwidHlwZSIsIlVQREFURV9DT01NRU5UX1JFUVVFU1QiLCJkYXRhIiwiY29udGVudCIsInJlc2l6ZSIsIm91dGxpbmUiLCJvdmVyZmxvdyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEscUNBQWY7S0FBTUYsUztBQUtOLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0csSUFBVjtFQUFBO0VBQUE7QUFBQSxxR0FBVjtNQUFNRCxJO0FBU04sSUFBTUUsWUFBWSxHQUFHSixpRUFBTSxDQUFDSywrREFBRCxDQUFUO0VBQUE7RUFBQTtBQUFBLDhJQUFsQjtNQUFN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QUE7RUFBQSxrQkFGRixDQVZGLENBREYsQ0FERjtBQW1CRCxDQWhERDs7R0FBTWpCLGlCO1VBQ2FLLHVEOzs7TUFEYkwsaUI7QUFrRE5BLGlCQUFpQixDQUFDMEIsU0FBbEIsR0FBOEI7RUFDNUJ6QixTQUFTLEVBQUUwQixpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURBO0VBRTVCM0IsY0FBYyxFQUFFeUIsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkQsVUFGTDtFQUc1QjFCLFdBQVcsRUFBRXdCLGlEQUFTLENBQUNJLElBQVYsQ0FBZUY7QUFIQSxDQUE5QjtBQU1lN0IsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzlmY2ZkNWYwODdhYTFmMmRlNTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAncmVhY3QtdGV4dGFyZWEtYXV0b3NpemUnO1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRJbnB1dCA9IHN0eWxlZChUZXh0QXJlYSlgXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEzcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxM3B4O1xyXG4gIG1hcmdpbi10b3A6IDdweDtcclxuYDtcclxuXHJcbmNvbnN0IFN1Ym1pdEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYWxsOiB1bnNldDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4OyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg2NGFiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgb3BhY2l0eTogJHtwcm9wcyA9PiAocHJvcHMuaXNBdmFpbGFibGVQb3N0aW5nID8gMSA6IDAuNil9O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuYDtcclxuXHJcbmNvbnN0IENhbmNlbEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYWxsOiB1bnNldDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4OyBcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlODUzN2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbmA7XHJcblxyXG5cclxuY29uc3QgQ29tbWVudFVwZGF0ZUZvcm0gPSAoeyBjb21tZW50SWQsIGNvbW1lbnRDb250ZW50LCBzZXRFZGl0TW9kZSB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtjb21tZW50SW5wdXQsIHNldENvbW1lbnRJbnB1dF0gPSB1c2VTdGF0ZShjb21tZW50Q29udGVudCk7XHJcbiAgY29uc3QgW2lzQXZhaWxhYmxlUG9zdGluZywgc2V0SXNBdmFpbGFibGVQb3N0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VDb21tZW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnN0IHt0YXJnZXQ6IHt2YWx1ZX19ID0gZTtcclxuICAgIHNldENvbW1lbnRJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpKSB7XHJcbiAgICAgIHNldElzQXZhaWxhYmxlUG9zdGluZyh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID09PSAwIHx8IHZhbHVlLmxlbmd0aCA+IDUwMCkge1xyXG4gICAgICBzZXRJc0F2YWlsYWJsZVBvc3RpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICB9LCBbY29tbWVudElucHV0XSk7XHJcblxyXG4gIGNvbnN0IG9uQ2FuY2VsVXBkYXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCAoe1xyXG4gICAgICB0eXBlOiBVUERBVEVfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgY29tbWVudElkOiBjb21tZW50SWQsXHJcbiAgICAgICAgY29udGVudDogQ29udGVudElucHV0LFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPENvbnRlbnRJbnB1dCBcclxuICAgICAgICAgIHZhbHVlPXtjb21tZW50SW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb21tZW50fVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcmVzaXplOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25Db250YWluZXI+XHJcbiAgICAgICAgICA8U3VibWl0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpc0F2YWlsYWJsZVBvc3Rpbmc9e2lzQXZhaWxhYmxlUG9zdGluZ30+7IiY7KCVPC9TdWJtaXRCdXR0b24+XHJcbiAgICAgICAgICA8Q2FuY2VsQnV0dG9uIG9uQ2xpY2s9e29uQ2FuY2VsVXBkYXRlfT7st6jshow8L0NhbmNlbEJ1dHRvbj5cclxuICAgICAgICA8L0J1dHRvbkNvbnRhaW5lcj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkNvbW1lbnRVcGRhdGVGb3JtLnByb3BUeXBlcyA9IHtcclxuICBjb21tZW50SWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBjb21tZW50Q29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHNldEVkaXRNb2RlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudFVwZGF0ZUZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==