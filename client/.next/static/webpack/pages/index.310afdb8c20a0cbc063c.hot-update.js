webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\PostForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PostForm__Container",
  componentId: "sc-z6wuxo-0"
})(["width:100%;max-height:500px;"]);
_c = Container;
var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form.withConfig({
  displayName: "PostForm__FormContainer",
  componentId: "sc-z6wuxo-1"
})(["width:100%;min-height:120px;border-bottom:1px solid #e6ecf0;padding:10px;display:flex;position:relative;"]);
_c2 = FormContainer;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PostForm__ProfileImageContainer",
  componentId: "sc-z6wuxo-2"
})(["width:60px;height:60px;margin-right:10px;border-radius:50px;overflow:hidden;"]);
_c3 = ProfileImageContainer;
var ProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "PostForm__ProfileImage",
  componentId: "sc-z6wuxo-3"
})(["width:100%;height:100%;object-fit:cover;"]);
_c4 = ProfileImage;
var ContentInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "PostForm__ContentInput",
  componentId: "sc-z6wuxo-4"
})(["width:80%;border:none;font-size:16px;min-height:50px;max-height:300px;margin-bottom:50px;"]);
_c5 = ContentInput;
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "PostForm__SubmitButton",
  componentId: "sc-z6wuxo-5"
})(["all:unset;position:absolute;background-color:#1864ab;color:white;letter-spacing:2px;font-weight:600;font-size:14px;width:70px;height:30px;border-radius:6px;bottom:10px;right:30px;cursor:pointer;opacity:", ";transition:all 0.3s linear;display:flex;justify-content:center;align-items:center;outline:none;&:focus{outline:none;}"], function (props) {
  return props.isAvailablePosting ? 1 : 0.8;
});
_c6 = SubmitButton;

var PostForm = function PostForm() {
  _s();

  var _useSelector = useSelector(function (state) {
    return state.user;
  }),
      isLoggedIn = _useSelector.isLoggedIn;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      content = _useState[0],
      setContent = _useState[1];

  var onChangeContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    var value = e.target.value;
    setContent(e.target.value);

    if (value.trim()) {
      setIsAvailablePosting(true);
    } else if (value.length === 0 || value.length > 500) {
      setIsAvailablePosting(false);
    }

    ;
  }, [content]);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isAvailablePosting = _useState2[0],
      setIsAvailablePosting = _useState2[1];

  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx(FormContainer, {
    encType: "multipart/form-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx(ProfileImage, {
    src: __webpack_require__(/*! ../image/user.png */ "./image/user.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  })), __jsx(ContentInput, {
    placeholder: "\uC624\uB298\uC740 \uC5B4\uB5A4 \uC77C\uC774 \uC788\uC5C8\uB098\uC694?",
    value: content,
    onChange: onChangeContent,
    style: {
      resize: "none",
      outline: "none",
      overflow: "hidden"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }), __jsx(SubmitButton, {
    type: "submit",
    isAvailablePosting: isAvailablePosting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  }, "\uAC8C\uC2DC")));
};

_s(PostForm, "6ESioN4jafUYSBdCBRiUvVcAGxc=", true);

_c7 = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "FormContainer");
$RefreshReg$(_c3, "ProfileImageContainer");
$RefreshReg$(_c4, "ProfileImage");
$RefreshReg$(_c5, "ContentInput");
$RefreshReg$(_c6, "SubmitButton");
$RefreshReg$(_c7, "PostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtQ29udGFpbmVyIiwiZm9ybSIsIlByb2ZpbGVJbWFnZUNvbnRhaW5lciIsIlByb2ZpbGVJbWFnZSIsImltZyIsIkNvbnRlbnRJbnB1dCIsIlRleHRBcmVhIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJpc0F2YWlsYWJsZVBvc3RpbmciLCJQb3N0Rm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiaXNMb2dnZWRJbiIsInVzZVN0YXRlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJvbkNoYW5nZUNvbnRlbnQiLCJ1c2VDYWxsYmFjayIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInRyaW0iLCJzZXRJc0F2YWlsYWJsZVBvc3RpbmciLCJsZW5ndGgiLCJyZXF1aXJlIiwicmVzaXplIiwib3V0bGluZSIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxvQ0FBZjtLQUFNRixTO0FBS04sSUFBTUcsYUFBYSxHQUFHRix5REFBTSxDQUFDRyxJQUFWO0VBQUE7RUFBQTtBQUFBLGdIQUFuQjtNQUFNRCxhO0FBU04sSUFBTUUscUJBQXFCLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsb0ZBQTNCO01BQU1HLHFCO0FBUU4sSUFBTUMsWUFBWSxHQUFHTCx5REFBTSxDQUFDTSxHQUFWO0VBQUE7RUFBQTtBQUFBLGdEQUFsQjtNQUFNRCxZO0FBTU4sSUFBTUUsWUFBWSxHQUFHUCxpRUFBTSxDQUFDUSwrREFBRCxDQUFUO0VBQUE7RUFBQTtBQUFBLGlHQUFsQjtNQUFNRCxZO0FBU04sSUFBTUUsWUFBWSxHQUFHVCx5REFBTSxDQUFDVSxNQUFWO0VBQUE7RUFBQTtBQUFBLDZVQWNMLFVBQUFDLEtBQUs7RUFBQSxPQUFLQSxLQUFLLENBQUNDLGtCQUFOLEdBQTJCLENBQTNCLEdBQStCLEdBQXBDO0FBQUEsQ0FkQSxDQUFsQjtNQUFNSCxZOztBQXlCTixJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0VBQUE7O0VBQ3JCLG1CQUF1QkMsV0FBVyxDQUFDLFVBQUNDLEtBQUQ7SUFBQSxPQUFXQSxLQUFLLENBQUNDLElBQWpCO0VBQUEsQ0FBRCxDQUFsQztFQUFBLElBQVFDLFVBQVIsZ0JBQVFBLFVBQVI7O0VBRUEsZ0JBQThCQyxzREFBUSxDQUFDLEVBQUQsQ0FBdEM7RUFBQSxJQUFPQyxPQUFQO0VBQUEsSUFBZ0JDLFVBQWhCOztFQUNBLElBQU1DLGVBQWUsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU87SUFDekMsSUFBZ0JDLEtBQWhCLEdBQTBCRCxDQUExQixDQUFPRSxNQUFQLENBQWdCRCxLQUFoQjtJQUNBSixVQUFVLENBQUNHLENBQUMsQ0FBQ0UsTUFBRixDQUFTRCxLQUFWLENBQVY7O0lBQ0EsSUFBSUEsS0FBSyxDQUFDRSxJQUFOLEVBQUosRUFBa0I7TUFDaEJDLHFCQUFxQixDQUFDLElBQUQsQ0FBckI7SUFDRCxDQUZELE1BRU8sSUFBSUgsS0FBSyxDQUFDSSxNQUFOLEtBQWlCLENBQWpCLElBQXNCSixLQUFLLENBQUNJLE1BQU4sR0FBZSxHQUF6QyxFQUE4QztNQUNuREQscUJBQXFCLENBQUMsS0FBRCxDQUFyQjtJQUNEOztJQUFBO0VBQ0YsQ0FSa0MsRUFRaEMsQ0FBQ1IsT0FBRCxDQVJnQyxDQUFuQzs7RUFVQSxpQkFBb0RELHNEQUFRLENBQUMsS0FBRCxDQUE1RDtFQUFBLElBQU9OLGtCQUFQO0VBQUEsSUFBMkJlLHFCQUEzQjs7RUFFQSxPQUNFLE1BQUMsU0FBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxhQUFEO0lBQWUsT0FBTyxFQUFDLHFCQUF2QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxxQkFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxZQUFEO0lBQWMsR0FBRyxFQUFFRSxtQkFBTyxDQUFDLDJDQUFELENBQTFCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixDQURGLEVBSUUsTUFBQyxZQUFEO0lBQ0UsV0FBVyxFQUFDLHdFQURkO0lBRUUsS0FBSyxFQUFFVixPQUZUO0lBR0UsUUFBUSxFQUFFRSxlQUhaO0lBSUUsS0FBSyxFQUFFO01BQ0xTLE1BQU0sRUFBRSxNQURIO01BRUxDLE9BQU8sRUFBRSxNQUZKO01BR0xDLFFBQVEsRUFBRTtJQUhMLENBSlQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUpGLEVBY0UsTUFBQyxZQUFEO0lBQWMsSUFBSSxFQUFDLFFBQW5CO0lBQTRCLGtCQUFrQixFQUFFcEIsa0JBQWhEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsa0JBZEYsQ0FERixDQURGO0FBc0JELENBdENEOztHQUFNQyxROztNQUFBQSxRO0FBd0NTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMTBhZmRiOGMyMGEwY2JjMDYzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFRleHRBcmVhIGZyb20gJ3JlYWN0LXRleHRhcmVhLWF1dG9zaXplJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkLmZvcm1gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmVjZjA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IFByb2ZpbGVJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbmA7XHJcblxyXG5jb25zdCBQcm9maWxlSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjsgXHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50SW5wdXQgPSBzdHlsZWQoVGV4dEFyZWEpYFxyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGFsbDogdW5zZXQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODY0YWI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBib3R0b206IDEwcHg7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmlzQXZhaWxhYmxlUG9zdGluZyA/IDEgOiAwLjgpfTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFBvc3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlQ29udGVudCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zdCB7dGFyZ2V0OiB7dmFsdWV9fSA9IGU7XHJcbiAgICBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmICh2YWx1ZS50cmltKCkpIHtcclxuICAgICAgc2V0SXNBdmFpbGFibGVQb3N0aW5nKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPT09IDAgfHwgdmFsdWUubGVuZ3RoID4gNTAwKSB7XHJcbiAgICAgIHNldElzQXZhaWxhYmxlUG9zdGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtjb250ZW50XSk7XHJcbiAgXHJcbiAgY29uc3QgW2lzQXZhaWxhYmxlUG9zdGluZywgc2V0SXNBdmFpbGFibGVQb3N0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxGb3JtQ29udGFpbmVyIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XHJcbiAgICAgICAgPFByb2ZpbGVJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICAgIDxQcm9maWxlSW1hZ2Ugc3JjPXtyZXF1aXJlKCcuLi9pbWFnZS91c2VyLnBuZycpfSAvPlxyXG4gICAgICAgIDwvUHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgIDxDb250ZW50SW5wdXQgXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyYpOuKmOydgCDslrTrlqQg7J287J20IOyeiOyXiOuCmOyalD9cIlxyXG4gICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb250ZW50fVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcmVzaXplOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8U3VibWl0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpc0F2YWlsYWJsZVBvc3Rpbmc9e2lzQXZhaWxhYmxlUG9zdGluZ30+XHJcbiAgICAgICAgICDqsozsi5xcclxuICAgICAgICA8L1N1Ym1pdEJ1dHRvbj5cclxuICAgICAgPC9Gb3JtQ29udGFpbmVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==