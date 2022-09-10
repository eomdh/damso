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
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();

    if (commentInput.length > 200) {
      alert("글자수가 너무 많습니다.");
      return;
    }

    ;

    if (!commentInput || !commentInput.trim()) {
      return alert("댓글을 작성해주세요.");
    }

    ;
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPDATE_COMMENT_REQUEST"],
      data: {
        postId: postId,
        commentId: commentId,
        content: commentInput
      }
    });
    setEditMode(false);
  }, [commentInput]);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }
  }, __jsx(Form, {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
      lineNumber: 123,
      columnNumber: 9
    }
  }), __jsx(ButtonContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  }, __jsx(SubmitButton, {
    type: "submit",
    isAvailablePosting: isAvailablePosting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, "\uC218\uC815"), __jsx(CancelButton, {
    onClick: onCancelUpdate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50VXBkYXRlRm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIkNvbnRlbnRJbnB1dCIsIlRleHRBcmVhIiwiQnV0dG9uQ29udGFpbmVyIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJpc0F2YWlsYWJsZVBvc3RpbmciLCJDYW5jZWxCdXR0b24iLCJDb21tZW50VXBkYXRlRm9ybSIsInBvc3RJZCIsImNvbW1lbnRJZCIsImNvbW1lbnRDb250ZW50Iiwic2V0RWRpdE1vZGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJjb21tZW50SW5wdXQiLCJzZXRDb21tZW50SW5wdXQiLCJzZXRJc0F2YWlsYWJsZVBvc3RpbmciLCJvbkNoYW5nZUNvbW1lbnQiLCJ1c2VDYWxsYmFjayIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInRyaW0iLCJsZW5ndGgiLCJvbkNhbmNlbFVwZGF0ZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsInR5cGUiLCJVUERBVEVfQ09NTUVOVF9SRVFVRVNUIiwiZGF0YSIsImNvbnRlbnQiLCJyZXNpemUiLCJvdXRsaW5lIiwib3ZlcmZsb3ciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLHFDQUFmO0tBQU1GLFM7QUFLTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNHLElBQVY7RUFBQTtFQUFBO0FBQUEscUdBQVY7TUFBTUQsSTtBQVNOLElBQU1FLFlBQVksR0FBR0osaUVBQU0sQ0FB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RUFBRVgsWUFEVDtJQUVFLFFBQVEsRUFBRUcsZUFGWjtJQUdFLEtBQUssRUFBRTtNQUNMZSxNQUFNLEVBQUUsTUFESDtNQUVMQyxPQUFPLEVBQUUsTUFGSjtNQUdMQyxRQUFRLEVBQUU7SUFITCxDQUhUO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixFQVVFLE1BQUMsZUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxZQUFEO0lBQWMsSUFBSSxFQUFDLFFBQW5CO0lBQTRCLGtCQUFrQixFQUFFOUIsa0JBQWhEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsa0JBREYsRUFFRSxNQUFDLFlBQUQ7SUFBYyxPQUFPLEVBQUVvQixjQUF2QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGtCQUZGLENBVkYsQ0FERixDQURGO0FBbUJELENBN0REOztHQUFNbEIsaUI7VUFDYU0sdUQ7OztNQURiTixpQjtBQStETkEsaUJBQWlCLENBQUM2QixTQUFsQixHQUE4QjtFQUM1QjVCLE1BQU0sRUFBRTZCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBREc7RUFFNUI5QixTQUFTLEVBQUU0QixpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUZBO0VBRzVCN0IsY0FBYyxFQUFFMkIsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkQsVUFITDtFQUk1QjVCLFdBQVcsRUFBRTBCLGlEQUFTLENBQUNJLElBQVYsQ0FBZUY7QUFKQSxDQUE5QjtBQU9laEMsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmZjY2IxYjg1OTRhNTQzNWEyMmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBVUERBVEVfQ09NTUVOVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tICdyZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZSc7XHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuY29uc3QgQ29udGVudElucHV0ID0gc3R5bGVkKFRleHRBcmVhKWBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTNweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWluLWhlaWdodDogNDBweDtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtYXJnaW4tcmlnaHQ6IDEzcHg7XHJcbiAgbWFyZ2luLXRvcDogN3B4O1xyXG5gO1xyXG5cclxuY29uc3QgU3VibWl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBhbGw6IHVuc2V0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDMwcHg7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODY0YWI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5pc0F2YWlsYWJsZVBvc3RpbmcgPyAxIDogMC42KX07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FuY2VsQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBhbGw6IHVuc2V0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDMwcHg7IFxyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4NTM3YztcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuYDtcclxuXHJcblxyXG5jb25zdCBDb21tZW50VXBkYXRlRm9ybSA9ICh7IHBvc3RJZCwgY29tbWVudElkLCBjb21tZW50Q29udGVudCwgc2V0RWRpdE1vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbY29tbWVudElucHV0LCBzZXRDb21tZW50SW5wdXRdID0gdXNlU3RhdGUoY29tbWVudENvbnRlbnQpO1xyXG4gIGNvbnN0IFtpc0F2YWlsYWJsZVBvc3RpbmcsIHNldElzQXZhaWxhYmxlUG9zdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlQ29tbWVudCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zdCB7dGFyZ2V0OiB7dmFsdWV9fSA9IGU7XHJcbiAgICBzZXRDb21tZW50SW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSkge1xyXG4gICAgICBzZXRJc0F2YWlsYWJsZVBvc3RpbmcodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCB2YWx1ZS5sZW5ndGggPiA1MDApIHtcclxuICAgICAgc2V0SXNBdmFpbGFibGVQb3N0aW5nKGZhbHNlKTtcclxuICAgIH07XHJcbiAgfSwgW2NvbW1lbnRJbnB1dF0pO1xyXG5cclxuICBjb25zdCBvbkNhbmNlbFVwZGF0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldEVkaXRNb2RlKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChjb21tZW50SW5wdXQubGVuZ3RoID4gMjAwKSB7XHJcbiAgICAgIGFsZXJ0KFwi6riA7J6Q7IiY6rCAIOuEiOustCDrp47sirXri4jri6QuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAoIWNvbW1lbnRJbnB1dCB8fCAhY29tbWVudElucHV0LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoXCLrjJPquIDsnYQg7J6R7ISx7ZW07KO87IS47JqULlwiKTtcclxuICAgIH07XHJcblxyXG4gICAgZGlzcGF0Y2ggKHtcclxuICAgICAgdHlwZTogVVBEQVRFX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHBvc3RJZDogcG9zdElkLFxyXG4gICAgICAgIGNvbW1lbnRJZDogY29tbWVudElkLFxyXG4gICAgICAgIGNvbnRlbnQ6IGNvbW1lbnRJbnB1dCxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xyXG4gIH0sIFtjb21tZW50SW5wdXRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPENvbnRlbnRJbnB1dCBcclxuICAgICAgICAgIHZhbHVlPXtjb21tZW50SW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb21tZW50fVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcmVzaXplOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25Db250YWluZXI+XHJcbiAgICAgICAgICA8U3VibWl0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpc0F2YWlsYWJsZVBvc3Rpbmc9e2lzQXZhaWxhYmxlUG9zdGluZ30+7IiY7KCVPC9TdWJtaXRCdXR0b24+XHJcbiAgICAgICAgICA8Q2FuY2VsQnV0dG9uIG9uQ2xpY2s9e29uQ2FuY2VsVXBkYXRlfT7st6jshow8L0NhbmNlbEJ1dHRvbj5cclxuICAgICAgICA8L0J1dHRvbkNvbnRhaW5lcj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkNvbW1lbnRVcGRhdGVGb3JtLnByb3BUeXBlcyA9IHtcclxuICBwb3N0SWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBjb21tZW50SWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICBjb21tZW50Q29udGVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHNldEVkaXRNb2RlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudFVwZGF0ZUZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==