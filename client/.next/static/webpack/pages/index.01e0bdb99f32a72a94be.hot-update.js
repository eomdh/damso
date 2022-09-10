webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostUpdateForm.js":
/*!**************************************!*\
  !*** ./components/PostUpdateForm.js ***!
  \**************************************/
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
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\components\\PostUpdateForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "PostUpdateForm__Container",
  componentId: "sc-1ps9m8-0"
})(["display:flex;margin-top:10px;"]);
_c = Container;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].form.withConfig({
  displayName: "PostUpdateForm__Form",
  componentId: "sc-1ps9m8-1"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;padding:10px;"]);
_c2 = Form;
var ContentInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "PostUpdateForm__ContentInput",
  componentId: "sc-1ps9m8-2"
})(["width:90%;border:none;font-size:16px;min-height:90px;max-height:400px;margin-bottom:10px;padding:10px;border-radius:10px;background-color:#f8f9fa;"]);
_c3 = ContentInput;
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "PostUpdateForm__ButtonContainer",
  componentId: "sc-1ps9m8-3"
})(["display:flex;justify-content:flex-end;width:93%;"]);
_c4 = ButtonContainer;
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
  displayName: "PostUpdateForm__SubmitButton",
  componentId: "sc-1ps9m8-4"
})(["all:unset;display:flex;justify-content:center;align-items:center;width:60px;height:30px;background-color:#1864ab;border-radius:6px;color:white;cursor:pointer;outline:none;opacity:", ";transition:all 0.2s linear;"], function (props) {
  return props.isAvailablePosting ? 1 : 0.6;
});
_c5 = SubmitButton;
var CancelButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
  displayName: "PostUpdateForm__CancelButton",
  componentId: "sc-1ps9m8-5"
})(["all:unset;display:flex;justify-content:center;align-items:center;width:60px;height:30px;margin-left:5px;background-color:#e8537c;border-radius:6px;color:white;cursor:pointer;outline:none;opacity:0.6;&:hover{opacity:1;}transition:all 0.2s linear;"]);
_c6 = CancelButton;

var PostUpdateForm = function PostUpdateForm(_ref) {
  _s();

  var postId = _ref.postId,
      postContent = _ref.postContent,
      setEditMode = _ref.setEditMode;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(postContent),
      contentInput = _useState[0],
      setContentInput = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isAvailablePosting = _useState2[0],
      setIsAvailablePosting = _useState2[1];

  var onChangeContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    var value = e.target.value;
    setContentInput(e.target.value);

    if (value.trim()) {
      setIsAvailablePosting(true);
    } else if (value.length === 0 || value.length > 500) {
      setIsAvailablePosting(false);
    }

    ;
  }, [contentInput]);
  var onCancelUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setEditMode(false);
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!contentInput || !contentInput.trim()) {
      return alert('글을 작성해주세요.');
    }

    ;

    if (contentInput.length > 500) {
      return alert('글자수가 너무 많습니다.');
    }

    ;
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["UPDATE_POST_REQUEST"],
      data: {
        postId: postId,
        content: contentInput
      }
    });
    setEditMode(false);
  }, [contentInput]);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 5
    }
  }, __jsx(Form, {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx(ContentInput, {
    value: contentInput,
    onChange: onChangeContent,
    style: {
      resize: "none",
      outline: "none",
      overflow: "hidden"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }), __jsx(ButtonContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }, __jsx(SubmitButton, {
    type: "submit",
    isAvailablePosting: isAvailablePosting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 11
    }
  }, "\uC218\uC815"), __jsx(CancelButton, {
    onClick: onCancelUpdate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  }, "\uCDE8\uC18C"))));
};

_s(PostUpdateForm, "DvZpvcgUy/m7wAvZ8zNL8qRTCv0=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c7 = PostUpdateForm;
PostUpdateForm.propTypes = {
  postId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  postContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  setEditMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostUpdateForm);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Form");
$RefreshReg$(_c3, "ContentInput");
$RefreshReg$(_c4, "ButtonContainer");
$RefreshReg$(_c5, "SubmitButton");
$RefreshReg$(_c6, "CancelButton");
$RefreshReg$(_c7, "PostUpdateForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0VXBkYXRlRm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIkNvbnRlbnRJbnB1dCIsIlRleHRBcmVhIiwiQnV0dG9uQ29udGFpbmVyIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJpc0F2YWlsYWJsZVBvc3RpbmciLCJDYW5jZWxCdXR0b24iLCJQb3N0VXBkYXRlRm9ybSIsInBvc3RJZCIsInBvc3RDb250ZW50Iiwic2V0RWRpdE1vZGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJjb250ZW50SW5wdXQiLCJzZXRDb250ZW50SW5wdXQiLCJzZXRJc0F2YWlsYWJsZVBvc3RpbmciLCJvbkNoYW5nZUNvbnRlbnQiLCJ1c2VDYWxsYmFjayIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInRyaW0iLCJsZW5ndGgiLCJvbkNhbmNlbFVwZGF0ZSIsIm9uU3VibWl0IiwiYWxlcnQiLCJ0eXBlIiwiVVBEQVRFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJjb250ZW50IiwicmVzaXplIiwib3V0bGluZSIsIm92ZXJmbG93IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxxQ0FBZjtLQUFNRixTO0FBS04sSUFBTUcsSUFBSSxHQUFHRix5REFBTSxDQUFDRyxJQUFWO0VBQUE7RUFBQTtBQUFBLDZHQUFWO01BQU1ELEk7QUFTTixJQUFNRSxZQUFZLEdBQUdKLGlFQUFNLENBQUNLLCtEQUFELENBQVQ7RUFBQTtFQUFBO0FBQUEsMEpBQWxCO01BQU1E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QUE7TUFBQTtJQUFBO0VBQUEsRUFERixFQVVFLE1BQUMsZUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxZQUFEO0lBQWMsSUFBSSxFQUFDLFFBQW5CO0lBQTRCLGtCQUFrQixFQUFFNUIsa0JBQWhEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsa0JBREYsRUFFRSxNQUFDLFlBQUQ7SUFBYyxPQUFPLEVBQUVtQixjQUF2QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGtCQUZGLENBVkYsQ0FERixDQURGO0FBbUJELENBM0REOztHQUFNakIsYztVQUNhSyx1RDs7O01BRGJMLGM7QUE2RE5BLGNBQWMsQ0FBQzJCLFNBQWYsR0FBMkI7RUFDekIxQixNQUFNLEVBQUUyQixpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURBO0VBRXpCNUIsV0FBVyxFQUFFMEIsaURBQVMsQ0FBQ0csTUFBVixDQUFpQkQsVUFGTDtFQUd6QjNCLFdBQVcsRUFBRXlCLGlEQUFTLENBQUNJLElBQVYsQ0FBZUY7QUFISCxDQUEzQjtBQU1lOUIsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDFlMGJkYjk5ZjMyYTcyYTk0YmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAncmVhY3QtdGV4dGFyZWEtYXV0b3NpemUnO1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IFVQREFURV9QT1NUX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50SW5wdXQgPSBzdHlsZWQoVGV4dEFyZWEpYFxyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtaW4taGVpZ2h0OiA5MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB3aWR0aDogOTMlO1xyXG5gO1xyXG5cclxuY29uc3QgU3VibWl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBhbGw6IHVuc2V0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDMwcHg7IFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODY0YWI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5pc0F2YWlsYWJsZVBvc3RpbmcgPyAxIDogMC42KX07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FuY2VsQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBhbGw6IHVuc2V0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDMwcHg7IFxyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4NTM3YztcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RVcGRhdGVGb3JtID0gKHsgcG9zdElkLCBwb3N0Q29udGVudCwgc2V0RWRpdE1vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgW2NvbnRlbnRJbnB1dCwgc2V0Q29udGVudElucHV0XSA9IHVzZVN0YXRlKHBvc3RDb250ZW50KTtcclxuICBjb25zdCBbaXNBdmFpbGFibGVQb3N0aW5nLCBzZXRJc0F2YWlsYWJsZVBvc3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUNvbnRlbnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc3Qge3RhcmdldDoge3ZhbHVlfX0gPSBlO1xyXG4gICAgc2V0Q29udGVudElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmICh2YWx1ZS50cmltKCkpIHtcclxuICAgICAgc2V0SXNBdmFpbGFibGVQb3N0aW5nKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPT09IDAgfHwgdmFsdWUubGVuZ3RoID4gNTAwKSB7XHJcbiAgICAgIHNldElzQXZhaWxhYmxlUG9zdGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtjb250ZW50SW5wdXRdKTtcclxuXHJcbiAgY29uc3Qgb25DYW5jZWxVcGRhdGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRFZGl0TW9kZShmYWxzZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghY29udGVudElucHV0IHx8ICFjb250ZW50SW5wdXQudHJpbSgpICkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ+q4gOydhCDsnpHshLHtlbTso7zshLjsmpQuJylcclxuICAgIH07XHJcbiAgICBcclxuICAgIGlmIChjb250ZW50SW5wdXQubGVuZ3RoID4gNTAwKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn6riA7J6Q7IiY6rCAIOuEiOustCDrp47sirXri4jri6QuJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogVVBEQVRFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHBvc3RJZDogcG9zdElkLFxyXG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRJbnB1dCxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xyXG4gIH0sIFtjb250ZW50SW5wdXRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPENvbnRlbnRJbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2NvbnRlbnRJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbnRlbnR9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICByZXNpemU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvbkNvbnRhaW5lcj5cclxuICAgICAgICAgIDxTdWJtaXRCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGlzQXZhaWxhYmxlUG9zdGluZz17aXNBdmFpbGFibGVQb3N0aW5nfT7siJjsoJU8L1N1Ym1pdEJ1dHRvbj5cclxuICAgICAgICAgIDxDYW5jZWxCdXR0b24gb25DbGljaz17b25DYW5jZWxVcGRhdGV9Puy3qOyGjDwvQ2FuY2VsQnV0dG9uPlxyXG4gICAgICAgIDwvQnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn07XHJcblxyXG5Qb3N0VXBkYXRlRm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdElkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgcG9zdENvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBzZXRFZGl0TW9kZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RVcGRhdGVGb3JtO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==