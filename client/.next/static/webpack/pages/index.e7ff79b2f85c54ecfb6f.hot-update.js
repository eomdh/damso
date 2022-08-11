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
})(["width:93%;min-height:120px;border-bottom:1px solid #e6ecf0;padding:10px;display:flex;flex-direction:row;position:relative;"]);
_c2 = FormContainer;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PostForm__ProfileImageContainer",
  componentId: "sc-z6wuxo-2"
})(["margin-top:50px;width:150px;height:150px;border-radius:50%;overflow:hidden;"]);
_c3 = ProfileImageContainer;
var ProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "PostForm__ProfileImage",
  componentId: "sc-z6wuxo-3"
})(["width:100%;height:100%;object-fit:cover;"]);
_c4 = ProfileImage;
var ContentInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "PostForm__ContentInput",
  componentId: "sc-z6wuxo-4"
})(["width:95%;border:none;font-size:16px;min-height:50px;max-height:300px;margin-bottom:50px;"]);
_c5 = ContentInput;

var PostForm = function PostForm() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      content = _useState[0],
      setContent = _useState[1];

  var onChangeContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setContent(e.target.value);
  }, [content]);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx(FormContainer, {
    encType: "multipart/form-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx(ProfileImage, {
    src: __webpack_require__(/*! ../image/user.png */ "./image/user.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 55,
      columnNumber: 9
    }
  })));
};

_s(PostForm, "tuVvykntmIbFbLFQTc7hO3VDfGY=");

_c6 = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "FormContainer");
$RefreshReg$(_c3, "ProfileImageContainer");
$RefreshReg$(_c4, "ProfileImage");
$RefreshReg$(_c5, "ContentInput");
$RefreshReg$(_c6, "PostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtQ29udGFpbmVyIiwiZm9ybSIsIlByb2ZpbGVJbWFnZUNvbnRhaW5lciIsIlByb2ZpbGVJbWFnZSIsImltZyIsIkNvbnRlbnRJbnB1dCIsIlRleHRBcmVhIiwiUG9zdEZvcm0iLCJ1c2VTdGF0ZSIsImNvbnRlbnQiLCJzZXRDb250ZW50Iiwib25DaGFuZ2VDb250ZW50IiwidXNlQ2FsbGJhY2siLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyZXF1aXJlIiwicmVzaXplIiwib3V0bGluZSIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxvQ0FBZjtLQUFNRixTO0FBS04sSUFBTUcsYUFBYSxHQUFHRix5REFBTSxDQUFDRyxJQUFWO0VBQUE7RUFBQTtBQUFBLGtJQUFuQjtNQUFNRCxhO0FBVU4sSUFBTUUscUJBQXFCLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsbUZBQTNCO01BQU1HLHFCO0FBUU4sSUFBTUMsWUFBWSxHQUFHTCx5REFBTSxDQUFDTSxHQUFWO0VBQUE7RUFBQTtBQUFBLGdEQUFsQjtNQUFNRCxZO0FBTU4sSUFBTUUsWUFBWSxHQUFHUCxpRUFBTSxDQUFDUSwrREFBRCxDQUFUO0VBQUE7RUFBQTtBQUFBLGlHQUFsQjtNQUFNRCxZOztBQVNOLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07RUFBQTs7RUFDckIsZ0JBQThCQyxzREFBUSxDQUFDLEVBQUQsQ0FBdEM7RUFBQSxJQUFPQyxPQUFQO0VBQUEsSUFBZ0JDLFVBQWhCOztFQUNBLElBQU1DLGVBQWUsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU87SUFDekNILFVBQVUsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBVjtFQUNELENBRmtDLEVBRWhDLENBQUNOLE9BQUQsQ0FGZ0MsQ0FBbkM7RUFJQSxPQUNFLE1BQUMsU0FBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxhQUFEO0lBQWUsT0FBTyxFQUFDLHFCQUF2QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxxQkFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxZQUFEO0lBQWMsR0FBRyxFQUFFTyxtQkFBTyxDQUFDLDJDQUFELENBQTFCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixDQURGLEVBSUUsTUFBQyxZQUFEO0lBQ0UsV0FBVyxFQUFDLHdFQURkO0lBRUUsS0FBSyxFQUFFUCxPQUZUO0lBR0UsUUFBUSxFQUFFRSxlQUhaO0lBSUUsS0FBSyxFQUFFO01BQ0xNLE1BQU0sRUFBRSxNQURIO01BRUxDLE9BQU8sRUFBRSxNQUZKO01BR0xDLFFBQVEsRUFBRTtJQUhMLENBSlQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUpGLENBREYsQ0FERjtBQW1CRCxDQXpCRDs7R0FBTVosUTs7TUFBQUEsUTtBQTJCU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZTdmZjc5YjJmODVjNTRlY2ZiNmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tICdyZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZSc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybUNvbnRhaW5lciA9IHN0eWxlZC5mb3JtYFxyXG4gIHdpZHRoOiA5MyU7XHJcbiAgbWluLWhlaWdodDogMTIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNmVjZjA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gO1xyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7IFxyXG5gO1xyXG5cclxuY29uc3QgQ29udGVudElucHV0ID0gc3R5bGVkKFRleHRBcmVhKWBcclxuICB3aWR0aDogOTUlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlQ29udGVudCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9LCBbY29udGVudF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEZvcm1Db250YWluZXIgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cclxuICAgICAgICA8UHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPFByb2ZpbGVJbWFnZSBzcmM9e3JlcXVpcmUoJy4uL2ltYWdlL3VzZXIucG5nJyl9IC8+XHJcbiAgICAgICAgPC9Qcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgPENvbnRlbnRJbnB1dCBcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7Jik64qY7J2AIOyWtOuWpCDsnbzsnbQg7J6I7JeI64KY7JqUP1wiXHJcbiAgICAgICAgICB2YWx1ZT17Y29udGVudH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbnRlbnR9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICByZXNpemU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm1Db250YWluZXI+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9