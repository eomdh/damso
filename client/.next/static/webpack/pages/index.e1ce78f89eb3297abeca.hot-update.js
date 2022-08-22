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
})(["width:90%;min-height:50px;padding:10px;display:flex;flex-direction:column;position:relative;"]);
_c2 = FormContainer;
var ContentInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "CommentForm__ContentInput",
  componentId: "sc-4gemyq-2"
})(["margin-left:10px;width:80%;border:none;font-size:16px;min-height:30px;max-height:300px;:disabled{background-color:white;}"]);
_c3 = ContentInput;
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "CommentForm__SubmitButton",
  componentId: "sc-4gemyq-3"
})(["all:unset;position:absolute;background-color:#1864ab;color:white;letter-spacing:2px;font-weight:600;font-size:14px;width:70px;height:30px;border-radius:6px;bottom:18px;right:20px;cursor:pointer;opacity:", ";transition:opacity 0.3s linear;display:flex;justify-content:center;align-items:center;"], function (props) {
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
  }, []);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 5
    }
  }, __jsx(FormContainer, {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
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
      lineNumber: 87,
      columnNumber: 9
    }
  }), __jsx(SubmitButton, {
    type: "submit",
    isAvailableUpload: isAvailablePosting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtQ29udGFpbmVyIiwiZm9ybSIsIkNvbnRlbnRJbnB1dCIsIlRleHRBcmVhIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJpc0F2YWlsYWJsZVVwbG9hZCIsIkNvbW1lbnRGb3JtIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJpc0xvZ2dlZEluIiwidXNlU3RhdGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsIm9uQ2hhbmdlQ29udGVudCIsInVzZUNhbGxiYWNrIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwidHJpbSIsInNldElzQXZhaWxhYmxlUG9zdGluZyIsImxlbmd0aCIsImlzQXZhaWxhYmxlUG9zdGluZyIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsInJlc2l6ZSIsIm91dGxpbmUiLCJvdmVyZmxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsMkZBQWY7S0FBTUYsUztBQVFOLElBQU1HLGFBQWEsR0FBR0YseURBQU0sQ0FBQ0csSUFBVjtFQUFBO0VBQUE7QUFBQSxvR0FBbkI7TUFBTUQsYTtBQVNOLElBQU1FLFlBQVksR0FBR0osaUVBQU0sQ0FBQ0ssK0RBQUQsQ0FBVDtFQUFBO0VBQUE7QUFBQSxpSUFBbEI7TUFBTUQsWTtBQVlOLElBQU1FLFlBQVksR0FBR04seURBQU0sQ0FBQ08sTUFBVjtFQUFBO0VBQUE7QUFBQSw4U0FjTCxVQUFBQyxLQUFLO0VBQUEsT0FBS0EsS0FBSyxDQUFDQyxpQkFBTixHQUEwQixDQUExQixHQUE4QixHQUFuQztBQUFBLENBZEEsQ0FBbEI7TUFBTUgsWTs7QUFzQk4sSUFBTUksV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtFQUFBOztFQUN4QixtQkFBdUJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtJQUFBLE9BQVdBLEtBQUssQ0FBQ0MsSUFBakI7RUFBQSxDQUFELENBQWxDO0VBQUEsSUFBUUMsVUFBUixnQkFBUUEsVUFBUjs7RUFFQSxnQkFBOEJDLHNEQUFRLENBQUMsRUFBRCxDQUF0QztFQUFBLElBQU9DLE9BQVA7RUFBQSxJQUFnQkMsVUFBaEI7O0VBQ0EsSUFBTUMsZUFBZSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztJQUN6QyxJQUFnQkMsS0FBaEIsR0FBMEJELENBQTFCLENBQU9FLE1BQVAsQ0FBZ0JELEtBQWhCO0lBQ0FKLFVBQVUsQ0FBQ0csQ0FBQyxDQUFDRSxNQUFGLENBQVNELEtBQVYsQ0FBVjs7SUFDQSxJQUFJQSxLQUFLLENBQUNFLElBQU4sRUFBSixFQUFrQjtNQUNoQkMscUJBQXFCLENBQUMsSUFBRCxDQUFyQjtJQUNELENBRkQsTUFFTyxJQUFJSCxLQUFLLENBQUNJLE1BQU4sS0FBaUIsQ0FBakIsSUFBc0JKLEtBQUssQ0FBQ0ksTUFBTixHQUFlLEdBQXpDLEVBQThDO01BQ25ERCxxQkFBcUIsQ0FBQyxLQUFELENBQXJCO0lBQ0Q7O0lBQUE7RUFDRixDQVJrQyxFQVFoQyxDQUFDUixPQUFELENBUmdDLENBQW5DOztFQVVBLGlCQUFvREQsc0RBQVEsQ0FBQyxLQUFELENBQTVEO0VBQUEsSUFBT1csa0JBQVA7RUFBQSxJQUEyQkYscUJBQTNCOztFQUVBLElBQU1HLFFBQVEsR0FBR1IseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU87SUFDbENBLENBQUMsQ0FBQ1EsY0FBRjs7SUFDQSxJQUFJWixPQUFPLENBQUNTLE1BQVIsR0FBaUIsR0FBckIsRUFBMEI7TUFDeEJJLEtBQUssQ0FBQyxlQUFELENBQUw7TUFDQTtJQUNEOztJQUNELElBQUksQ0FBQ2IsT0FBRCxJQUFZLENBQUNBLE9BQU8sQ0FBQ08sSUFBUixFQUFqQixFQUFpQztNQUMvQixPQUFPTSxLQUFLLENBQUMsYUFBRCxDQUFaO0lBQ0Q7RUFDRixDQVQyQixFQVN6QixFQVR5QixDQUE1QjtFQVdBLE9BQ0UsTUFBQyxTQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLGFBQUQ7SUFBZSxRQUFRLEVBQUVGLFFBQXpCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLFlBQUQ7SUFDRSxXQUFXLEVBQUViLFVBQVUsR0FBRyxZQUFILEdBQWtCLGVBRDNDO0lBRUUsUUFBUSxFQUFFQSxVQUFVLEdBQUcsS0FBSCxHQUFXLElBRmpDO0lBR0UsS0FBSyxFQUFFRSxPQUhUO0lBSUUsUUFBUSxFQUFFRSxlQUpaO0lBS0UsS0FBSyxFQUFFO01BQ0xZLE1BQU0sRUFBRSxNQURIO01BRUxDLE9BQU8sRUFBRSxNQUZKO01BR0xDLFFBQVEsRUFBRTtJQUhMLENBTFQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURGLEVBWUUsTUFBQyxZQUFEO0lBQWMsSUFBSSxFQUFDLFFBQW5CO0lBQTRCLGlCQUFpQixFQUFFTixrQkFBL0M7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxrQkFaRixDQURGLENBREY7QUFrQkQsQ0E3Q0Q7O0dBQU1oQixXO1VBQ21CQyx1RDs7O01BRG5CRCxXO0FBK0NTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMWNlNzhmODllYjMyOTdhYmVjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAncmVhY3QtdGV4dGFyZWEtYXV0b3NpemUnO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkLmZvcm1gXHJcbiAgd2lkdGg6IDkwJTtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRJbnB1dCA9IHN0eWxlZChUZXh0QXJlYSlgXHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFN1Ym1pdEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYWxsOiB1bnNldDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4NjRhYjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJvdHRvbTogMThweDtcclxuICByaWdodDogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogJHtwcm9wcyA9PiAocHJvcHMuaXNBdmFpbGFibGVVcGxvYWQgPyAxIDogMC42KX07XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGxpbmVhcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5cclxuY29uc3QgQ29tbWVudEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBpc0xvZ2dlZEluIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgb25DaGFuZ2VDb250ZW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnN0IHt0YXJnZXQ6IHt2YWx1ZX19ID0gZTtcclxuICAgIHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSkge1xyXG4gICAgICBzZXRJc0F2YWlsYWJsZVBvc3RpbmcodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCB2YWx1ZS5sZW5ndGggPiA1MDApIHtcclxuICAgICAgc2V0SXNBdmFpbGFibGVQb3N0aW5nKGZhbHNlKTtcclxuICAgIH07XHJcbiAgfSwgW2NvbnRlbnRdKTtcclxuXHJcbiAgY29uc3QgW2lzQXZhaWxhYmxlUG9zdGluZywgc2V0SXNBdmFpbGFibGVQb3N0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGNvbnRlbnQubGVuZ3RoID4gNTAwKSB7XHJcbiAgICAgIGFsZXJ0KFwi6riA7J6Q7IiY6rCAIOuEiOustCDrp47sirXri4jri6QuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIWNvbnRlbnQgfHwgIWNvbnRlbnQudHJpbSgpKSB7XHJcbiAgICAgIHJldHVybiBhbGVydChcIuuMk+q4gOydhCDsnpHshLHtlbTso7zshLjsmpQuXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEZvcm1Db250YWluZXIgb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8Q29udGVudElucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17aXNMb2dnZWRJbiA/IFwi64yT6riA7J2EIOuCqOqyqOyjvOyEuOyalC5cIiA6IFwi66Gc6re47J24IO2bhCDsgqzsmqntlbTso7zshLjsmpQuXCJ9XHJcbiAgICAgICAgICBkaXNhYmxlZD17aXNMb2dnZWRJbiA/IGZhbHNlIDogdHJ1ZX1cclxuICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29udGVudH1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHJlc2l6ZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8U3VibWl0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpc0F2YWlsYWJsZVVwbG9hZD17aXNBdmFpbGFibGVQb3N0aW5nfT7snoXroKU8L1N1Ym1pdEJ1dHRvbj5cclxuICAgICAgPC9Gb3JtQ29udGFpbmVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9