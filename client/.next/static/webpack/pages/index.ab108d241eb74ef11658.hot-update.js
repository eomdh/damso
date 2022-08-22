webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentForm.js":
/*!***********************************!*\
  !*** ./components/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\CommentForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "CommentForm__Container",
  componentId: "sc-4gemyq-0"
})(["width:100%;max-height:500px;display:flex;justify-content:center;align-items:center;"]);
_c = Container;
var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "CommentForm__FormContainer",
  componentId: "sc-4gemyq-1"
})(["width:100%;min-height:50px;border-bottom:1px solid #e6ecf0;padding:10px;display:flex;flex-direction:column;position:relative;"]);
_c2 = FormContainer;
var ContentInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "CommentForm__ContentInput",
  componentId: "sc-4gemyq-2"
})(["margin-left:10px;width:80%;border:none;font-size:16px;min-height:30px;max-height:300px;&:focus{outline:none;}"]);
_c3 = ContentInput;

var CommentForm = function CommentForm() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
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
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {}, []);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }
  }, __jsx(FormContainer, {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }
  }, __jsx(ContentInput, {
    placeholder: isLoggedIn ? "댓글을 남겨주세요." : "로그인 후 사용해주세요.",
    disabled: isLoggedIn ? false : true,
    value: content,
    onChange: onChangeContent,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  })));
};

_s(CommentForm, "Dxr/9OxdFX8X5y99Zr4Hle40z4w=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c4 = CommentForm;
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "FormContainer");
$RefreshReg$(_c3, "ContentInput");
$RefreshReg$(_c4, "CommentForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtQ29udGFpbmVyIiwiZm9ybSIsIkNvbnRlbnRJbnB1dCIsIlRleHRBcmVhIiwiQ29tbWVudEZvcm0iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImlzTG9nZ2VkSW4iLCJ1c2VTdGF0ZSIsImNvbnRlbnQiLCJzZXRDb250ZW50Iiwib25DaGFuZ2VDb250ZW50IiwidXNlQ2FsbGJhY2siLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJ0cmltIiwic2V0SXNBdmFpbGFibGVQb3N0aW5nIiwibGVuZ3RoIiwib25TdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLDJGQUFmO0tBQU1GLFM7QUFRTixJQUFNRyxhQUFhLEdBQUdGLHlEQUFNLENBQUNHLElBQVY7RUFBQTtFQUFBO0FBQUEscUlBQW5CO01BQU1ELGE7QUFVTixJQUFNRSxZQUFZLEdBQUdKLGlFQUFNLENBQUNLLCtEQUFELENBQVQ7RUFBQTtFQUFBO0FBQUEscUhBQWxCO01BQU1ELFk7O0FBYU4sSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtFQUFBOztFQUN4QixtQkFBdUJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtJQUFBLE9BQVdBLEtBQUssQ0FBQ0MsSUFBakI7RUFBQSxDQUFELENBQWxDO0VBQUEsSUFBUUMsVUFBUixnQkFBUUEsVUFBUjs7RUFFQSxnQkFBOEJDLHNEQUFRLENBQUMsRUFBRCxDQUF0QztFQUFBLElBQU9DLE9BQVA7RUFBQSxJQUFnQkMsVUFBaEI7O0VBQ0EsSUFBTUMsZUFBZSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztJQUN6QyxJQUFnQkMsS0FBaEIsR0FBMEJELENBQTFCLENBQU9FLE1BQVAsQ0FBZ0JELEtBQWhCO0lBQ0FKLFVBQVUsQ0FBQ0csQ0FBQyxDQUFDRSxNQUFGLENBQVNELEtBQVYsQ0FBVjs7SUFDQSxJQUFJQSxLQUFLLENBQUNFLElBQU4sRUFBSixFQUFrQjtNQUNoQkMscUJBQXFCLENBQUMsSUFBRCxDQUFyQjtJQUNELENBRkQsTUFFTyxJQUFJSCxLQUFLLENBQUNJLE1BQU4sS0FBaUIsQ0FBakIsSUFBc0JKLEtBQUssQ0FBQ0ksTUFBTixHQUFlLEdBQXpDLEVBQThDO01BQ25ERCxxQkFBcUIsQ0FBQyxLQUFELENBQXJCO0lBQ0Q7O0lBQUE7RUFDRixDQVJrQyxFQVFoQyxDQUFDUixPQUFELENBUmdDLENBQW5DO0VBVUEsSUFBTVUsUUFBUSxHQUFHUCx5REFBVyxDQUFDLFlBQU0sQ0FFbEMsQ0FGMkIsRUFFekIsRUFGeUIsQ0FBNUI7RUFJQSxPQUNFLE1BQUMsU0FBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxhQUFEO0lBQWUsUUFBUSxFQUFFTyxRQUF6QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxZQUFEO0lBQ0UsV0FBVyxFQUFFWixVQUFVLEdBQUcsWUFBSCxHQUFrQixlQUQzQztJQUVFLFFBQVEsRUFBRUEsVUFBVSxHQUFHLEtBQUgsR0FBVyxJQUZqQztJQUdFLEtBQUssRUFBRUUsT0FIVDtJQUlFLFFBQVEsRUFBRUUsZUFKWjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsQ0FERixDQURGO0FBWUQsQ0E5QkQ7O0dBQU1SLFc7VUFDbUJDLHVEOzs7TUFEbkJELFc7QUFnQ1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFiMTA4ZDI0MWViNzRlZjExNjU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tICdyZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZSc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm1Db250YWluZXIgPSBzdHlsZWQuZm9ybWBcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlY2YwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRJbnB1dCA9IHN0eWxlZChUZXh0QXJlYSlgXHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcblxyXG5jb25zdCBDb21tZW50Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB7IGlzTG9nZ2VkSW4gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBvbkNoYW5nZUNvbnRlbnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc3Qge3RhcmdldDoge3ZhbHVlfX0gPSBlO1xyXG4gICAgc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpKSB7XHJcbiAgICAgIHNldElzQXZhaWxhYmxlUG9zdGluZyh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID09PSAwIHx8IHZhbHVlLmxlbmd0aCA+IDUwMCkge1xyXG4gICAgICBzZXRJc0F2YWlsYWJsZVBvc3RpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICB9LCBbY29udGVudF0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Rm9ybUNvbnRhaW5lciBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxDb250ZW50SW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtpc0xvZ2dlZEluID8gXCLrjJPquIDsnYQg64Ko6rKo7KO87IS47JqULlwiIDogXCLroZzqt7jsnbgg7ZuEIOyCrOyaqe2VtOyjvOyEuOyalC5cIn1cclxuICAgICAgICAgIGRpc2FibGVkPXtpc0xvZ2dlZEluID8gZmFsc2UgOiB0cnVlfVxyXG4gICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb250ZW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRm9ybUNvbnRhaW5lcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==