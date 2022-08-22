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
})(["width:100%;min-height:50px;padding:10px;display:flex;flex-direction:column;position:relative;"]);
_c2 = FormContainer;
var ContentInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "CommentForm__ContentInput",
  componentId: "sc-4gemyq-2"
})(["width:85%;border:none;font-size:16px;min-height:50px;max-height:300px;border-radius:6px;background-color:#f8f9fa;"]);
_c3 = ContentInput;
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "CommentForm__SubmitButton",
  componentId: "sc-4gemyq-3"
})(["all:unset;position:absolute;background-color:#1864ab;color:white;letter-spacing:2px;font-weight:600;font-size:14px;width:70px;height:30px;border-radius:6px;bottom:22px;right:20px;cursor:pointer;opacity:", ";transition:opacity 0.3s linear;display:flex;justify-content:center;align-items:center;"], function (props) {
  return props.isAvailableUpload ? 1 : 0.6;
});
_c4 = SubmitButton;

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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isAvailablePosting = _useState2[0],
      setIsAvailablePosting = _useState2[1];

  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();

    if (content.length > 500) {
      alert("글자수가 너무 많습니다.");
      return;
    }

    if (!content || !content.trim()) {
      return alert("댓글을 작성해주세요.");
    }
  }, [content]);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, __jsx(FormContainer, {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx(ContentInput, {
    placeholder: isLoggedIn ? "댓글을 남겨주세요." : "로그인 후 사용해주세요.",
    disabled: isLoggedIn ? false : true,
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
      lineNumber: 85,
      columnNumber: 9
    }
  }), __jsx(SubmitButton, {
    type: "submit",
    isAvailableUpload: isAvailablePosting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "\uC785\uB825")));
};

_s(CommentForm, "c9E1IWe5zBNn1ltJPTGNZEqSoVs=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c5 = CommentForm;
/* harmony default export */ __webpack_exports__["default"] = (CommentForm);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "FormContainer");
$RefreshReg$(_c3, "ContentInput");
$RefreshReg$(_c4, "SubmitButton");
$RefreshReg$(_c5, "CommentForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtQ29udGFpbmVyIiwiZm9ybSIsIkNvbnRlbnRJbnB1dCIsIlRleHRBcmVhIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJpc0F2YWlsYWJsZVVwbG9hZCIsIkNvbW1lbnRGb3JtIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJpc0xvZ2dlZEluIiwidXNlU3RhdGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsIm9uQ2hhbmdlQ29udGVudCIsInVzZUNhbGxiYWNrIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwidHJpbSIsInNldElzQXZhaWxhYmxlUG9zdGluZyIsImxlbmd0aCIsImlzQXZhaWxhYmxlUG9zdGluZyIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsInJlc2l6ZSIsIm91dGxpbmUiLCJvdmVyZmxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsMkZBQWY7S0FBTUYsUztBQVFOLElBQU1HLGFBQWEsR0FBR0YseURBQU0sQ0FBQ0csSUFBVjtFQUFBO0VBQUE7QUFBQSxxR0FBbkI7TUFBTUQsYTtBQVNOLElBQU1FLFlBQVksR0FBR0osaUVBQU0sQ0FBQ0ssK0RBQUQsQ0FBVDtFQUFBO0VBQUE7QUFBQSx5SEFBbEI7TUFBTUQsWTtBQVVOLElBQU1FLFlBQVksR0FBR04seURBQU0sQ0FBQ08sTUFBVjtFQUFBO0VBQUE7QUFBQSw4U0FjTCxVQUFBQyxLQUFLO0VBQUEsT0FBS0EsS0FBSyxDQUFDQyxpQkFBTixHQUEwQixDQUExQixHQUE4QixHQUFuQztBQUFBLENBZEEsQ0FBbEI7TUFBTUgsWTs7QUFzQk4sSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtFQUFBOztFQUN4QixtQkFBdUJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtJQUFBLE9BQVdBLEtBQUssQ0FBQ0MsSUFBakI7RUFBQSxDQUFELENBQWxDO0VBQUEsSUFBUUMsVUFBUixnQkFBUUEsVUFBUjs7RUFFQSxnQkFBOEJDLHNEQUFRLENBQUMsRUFBRCxDQUF0QztFQUFBLElBQU9DLE9BQVA7RUFBQSxJQUFnQkMsVUFBaEI7O0VBQ0EsSUFBTUMsZUFBZSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztJQUN6QyxJQUFnQkMsS0FBaEIsR0FBMEJELENBQTFCLENBQU9FLE1BQVAsQ0FBZ0JELEtBQWhCO0lBQ0FKLFVBQVUsQ0FBQ0csQ0FBQyxDQUFDRSxNQUFGLENBQVNELEtBQVYsQ0FBVjs7SUFDQSxJQUFJQSxLQUFLLENBQUNFLElBQU4sRUFBSixFQUFrQjtNQUNoQkMscUJBQXFCLENBQUMsSUFBRCxDQUFyQjtJQUNELENBRkQsTUFFTyxJQUFJSCxLQUFLLENBQUNJLE1BQU4sS0FBaUIsQ0FBakIsSUFBc0JKLEtBQUssQ0FBQ0ksTUFBTixHQUFlLEdBQXpDLEVBQThDO01BQ25ERCxxQkFBcUIsQ0FBQyxLQUFELENBQXJCO0lBQ0Q7O0lBQUE7RUFDRixDQVJrQyxFQVFoQyxDQUFDUixPQUFELENBUmdDLENBQW5DOztFQVVBLGlCQUFvREQsc0RBQVEsQ0FBQyxLQUFELENBQTVEO0VBQUEsSUFBT1csa0JBQVA7RUFBQSxJQUEyQkYscUJBQTNCOztFQUVBLElBQU1HLFFBQVEsR0FBR1IseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU87SUFDbENBLENBQUMsQ0FBQ1EsY0FBRjs7SUFDQSxJQUFJWixPQUFPLENBQUNTLE1BQVIsR0FBaUIsR0FBckIsRUFBMEI7TUFDeEJJLEtBQUssQ0FBQyxlQUFELENBQUw7TUFDQTtJQUNEOztJQUNELElBQUksQ0FBQ2IsT0FBRCxJQUFZLENBQUNBLE9BQU8sQ0FBQ08sSUFBUixFQUFqQixFQUFpQztNQUMvQixPQUFPTSxLQUFLLENBQUMsYUFBRCxDQUFaO0lBQ0Q7RUFDRixDQVQyQixFQVN6QixDQUFDYixPQUFELENBVHlCLENBQTVCO0VBV0EsT0FDRSxNQUFDLFNBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsYUFBRDtJQUFlLFFBQVEsRUFBRVcsUUFBekI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsWUFBRDtJQUNFLFdBQVcsRUFBRWIsVUFBVSxHQUFHLFlBQUgsR0FBa0IsZUFEM0M7SUFFRSxRQUFRLEVBQUVBLFVBQVUsR0FBRyxLQUFILEdBQVcsSUFGakM7SUFHRSxLQUFLLEVBQUVFLE9BSFQ7SUFJRSxRQUFRLEVBQUVFLGVBSlo7SUFLRSxLQUFLLEVBQUU7TUFDTFksTUFBTSxFQUFFLE1BREg7TUFFTEMsT0FBTyxFQUFFLE1BRko7TUFHTEMsUUFBUSxFQUFFO0lBSEwsQ0FMVDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsRUFZRSxNQUFDLFlBQUQ7SUFBYyxJQUFJLEVBQUMsUUFBbkI7SUFBNEIsaUJBQWlCLEVBQUVOLGtCQUEvQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGtCQVpGLENBREYsQ0FERjtBQWtCRCxDQTdDRDs7R0FBTWhCLFc7VUFDbUJDLHVEOzs7TUFEbkJELFc7QUErQ1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjExYTQ3NzliMDQ4YjIwMGYyOTdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tICdyZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZSc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm1Db250YWluZXIgPSBzdHlsZWQuZm9ybWBcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRJbnB1dCA9IHN0eWxlZChUZXh0QXJlYSlgXHJcbiAgd2lkdGg6IDg1JTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbmA7XHJcblxyXG5jb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGFsbDogdW5zZXQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODY0YWI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBib3R0b206IDIycHg7XHJcbiAgcmlnaHQ6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmlzQXZhaWxhYmxlVXBsb2FkID8gMSA6IDAuNil9O1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBsaW5lYXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuXHJcbmNvbnN0IENvbW1lbnRGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlQ29udGVudCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zdCB7dGFyZ2V0OiB7dmFsdWV9fSA9IGU7XHJcbiAgICBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmICh2YWx1ZS50cmltKCkpIHtcclxuICAgICAgc2V0SXNBdmFpbGFibGVQb3N0aW5nKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPT09IDAgfHwgdmFsdWUubGVuZ3RoID4gNTAwKSB7XHJcbiAgICAgIHNldElzQXZhaWxhYmxlUG9zdGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtjb250ZW50XSk7XHJcblxyXG4gIGNvbnN0IFtpc0F2YWlsYWJsZVBvc3RpbmcsIHNldElzQXZhaWxhYmxlUG9zdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChjb250ZW50Lmxlbmd0aCA+IDUwMCkge1xyXG4gICAgICBhbGVydChcIuq4gOyekOyImOqwgCDrhIjrrLQg66eO7Iq164uI64ukLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCFjb250ZW50IHx8ICFjb250ZW50LnRyaW0oKSkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoXCLrjJPquIDsnYQg7J6R7ISx7ZW07KO87IS47JqULlwiKTtcclxuICAgIH1cclxuICB9LCBbY29udGVudF0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Rm9ybUNvbnRhaW5lciBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxDb250ZW50SW5wdXRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtpc0xvZ2dlZEluID8gXCLrjJPquIDsnYQg64Ko6rKo7KO87IS47JqULlwiIDogXCLroZzqt7jsnbgg7ZuEIOyCrOyaqe2VtOyjvOyEuOyalC5cIn1cclxuICAgICAgICAgIGRpc2FibGVkPXtpc0xvZ2dlZEluID8gZmFsc2UgOiB0cnVlfVxyXG4gICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb250ZW50fVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcmVzaXplOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTdWJtaXRCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGlzQXZhaWxhYmxlVXBsb2FkPXtpc0F2YWlsYWJsZVBvc3Rpbmd9PuyeheugpTwvU3VibWl0QnV0dG9uPlxyXG4gICAgICA8L0Zvcm1Db250YWluZXI+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=