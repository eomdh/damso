webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/IntroduceEditForm.js":
/*!*****************************************!*\
  !*** ./components/IntroduceEditForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\IntroduceEditForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "IntroduceEditForm__FormContainer",
  componentId: "sc-aylvvj-0"
})(["height:53px;"]);
_c = FormContainer;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].form.withConfig({
  displayName: "IntroduceEditForm__Form",
  componentId: "sc-aylvvj-1"
})(["display:flex;align-items:center;justify-content:center;width:100%;margin-bottom:18px;"]);
_c2 = Form;
var Input = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "IntroduceEditForm__Input",
  componentId: "sc-aylvvj-2"
})(["font-size:16px;width:350px;max-height:50px;border:1px solid gray;border-radius:5px;"]);
_c3 = Input;
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "IntroduceEditForm__IconContainer",
  componentId: "sc-aylvvj-3"
})(["all:unset;margin-top:2px;margin-left:8px;font-size:22px;color:#1864ab;cursor:pointer;opacity:0.6;:hover{opacity:1;}"]);
_c4 = IconContainer;

var IntroduceEditForm = function IntroduceEditForm(_ref) {
  _s();

  var setOnEditForm = _ref.setOnEditForm;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user.me;
  }),
      introduce = _useSelector.introduce;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    introduce: introduce
  }),
      introduceInput = _useState[0],
      setIntroduceInput = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isAvailablePosting = _useState2[0],
      setIsAvailablePosting = _useState2[1];

  var onClickEditForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setOnEditForm(function (prev) {
      return !prev;
    });
  }, []);
  var onChangeIntroduce = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    var value = e.target.value;
    setIntroduceInput(e.target.value);

    if (value.trim()) {
      setIsAvailablePosting(true);
    } else if (value.length === 0 || value.length > 100) {
      setIsAvailablePosting(false);
    }

    ;
  }, [introduceInput]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault(); // if (!isAvailablePosting) {
    //   return alert("글자수가 너무 많습니다.");
    // }

    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["changeIntroduce"])(introduceInput));
  }, [introduceInput]);
  return __jsx(FormContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  }, __jsx(Form, {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx(Input, {
    value: introduceInput,
    onChange: onChangeIntroduce,
    style: {
      resize: "none",
      outline: "none",
      overflow: "hidden"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }), __jsx(IconContainer, {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__["BsCheckCircleFill"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }))));
};

_s(IntroduceEditForm, "q1aAhzPPyiBFKKNFWlTJjDCW3p8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c5 = IntroduceEditForm;
/* harmony default export */ __webpack_exports__["default"] = (IntroduceEditForm);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "FormContainer");
$RefreshReg$(_c2, "Form");
$RefreshReg$(_c3, "Input");
$RefreshReg$(_c4, "IconContainer");
$RefreshReg$(_c5, "IntroduceEditForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnRyb2R1Y2VFZGl0Rm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiRm9ybSIsImZvcm0iLCJJbnB1dCIsIlRleHRBcmVhIiwiSWNvbkNvbnRhaW5lciIsImJ1dHRvbiIsIkludHJvZHVjZUVkaXRGb3JtIiwic2V0T25FZGl0Rm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiaW50cm9kdWNlIiwidXNlU3RhdGUiLCJpbnRyb2R1Y2VJbnB1dCIsInNldEludHJvZHVjZUlucHV0IiwiaXNBdmFpbGFibGVQb3N0aW5nIiwic2V0SXNBdmFpbGFibGVQb3N0aW5nIiwib25DbGlja0VkaXRGb3JtIiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwib25DaGFuZ2VJbnRyb2R1Y2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJ0cmltIiwibGVuZ3RoIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZUludHJvZHVjZSIsInJlc2l6ZSIsIm91dGxpbmUiLCJvdmVyZmxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsb0JBQW5CO0tBQU1GLGE7QUFJTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNHLElBQVY7RUFBQTtFQUFBO0FBQUEsNkZBQVY7TUFBTUQsSTtBQVFOLElBQU1FLEtBQUssR0FBR0osaUVBQU0sQ0FBQ0ssK0RBQUQsQ0FBVDtFQUFBO0VBQUE7QUFBQSwyRkFBWDtNQUFNRCxLO0FBUU4sSUFBTUUsYUFBYSxHQUFHTix5REFBTSxDQUFDTyxNQUFWO0VBQUE7RUFBQTtBQUFBLDJIQUFuQjtNQUFNRCxhOztBQWFOLElBQU1FLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsT0FBdUI7RUFBQTs7RUFBQSxJQUFwQkMsYUFBb0IsUUFBcEJBLGFBQW9CO0VBQy9DLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0VBRUEsbUJBQXNCQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7SUFBQSxPQUFXQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsRUFBdEI7RUFBQSxDQUFELENBQWpDO0VBQUEsSUFBUUMsU0FBUixnQkFBUUEsU0FBUjs7RUFDQSxnQkFBNENDLHNEQUFRLENBQUM7SUFBRUQsU0FBUyxFQUFUQTtFQUFGLENBQUQsQ0FBcEQ7RUFBQSxJQUFPRSxjQUFQO0VBQUEsSUFBdUJDLGlCQUF2Qjs7RUFDQSxpQkFBb0RGLHNEQUFRLENBQUMsS0FBRCxDQUE1RDtFQUFBLElBQU9HLGtCQUFQO0VBQUEsSUFBMkJDLHFCQUEzQjs7RUFFQSxJQUFNQyxlQUFlLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUN4Q2QsYUFBYSxDQUFDLFVBQUFlLElBQUk7TUFBQSxPQUFJLENBQUNBLElBQUw7SUFBQSxDQUFMLENBQWI7RUFDRCxDQUZrQyxFQUVoQyxFQUZnQyxDQUFuQztFQUlBLElBQU1DLGlCQUFpQixHQUFHRix5REFBVyxDQUFDLFVBQUNHLENBQUQsRUFBTztJQUMzQyxJQUFnQkMsS0FBaEIsR0FBMEJELENBQTFCLENBQU9FLE1BQVAsQ0FBZ0JELEtBQWhCO0lBQ0FSLGlCQUFpQixDQUFDTyxDQUFDLENBQUNFLE1BQUYsQ0FBU0QsS0FBVixDQUFqQjs7SUFDQSxJQUFJQSxLQUFLLENBQUNFLElBQU4sRUFBSixFQUFrQjtNQUNoQlIscUJBQXFCLENBQUMsSUFBRCxDQUFyQjtJQUNELENBRkQsTUFFTyxJQUFJTSxLQUFLLENBQUNHLE1BQU4sS0FBaUIsQ0FBakIsSUFBc0JILEtBQUssQ0FBQ0csTUFBTixHQUFlLEdBQXpDLEVBQThDO01BQ25EVCxxQkFBcUIsQ0FBQyxLQUFELENBQXJCO0lBQ0Q7O0lBQUE7RUFDRixDQVJvQyxFQVFsQyxDQUFDSCxjQUFELENBUmtDLENBQXJDO0VBVUEsSUFBTWEsUUFBUSxHQUFHUix5REFBVyxDQUFDLFVBQUNHLENBQUQsRUFBTztJQUNsQ0EsQ0FBQyxDQUFDTSxjQUFGLEdBRGtDLENBRWxDO0lBQ0E7SUFDQTs7SUFDQXRCLFFBQVEsQ0FBQ3VCLHNFQUFlLENBQUNmLGNBQUQsQ0FBaEIsQ0FBUjtFQUNELENBTjJCLEVBTXpCLENBQUNBLGNBQUQsQ0FOeUIsQ0FBNUI7RUFRQSxPQUNFLE1BQUMsYUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxJQUFEO0lBQU0sUUFBUSxFQUFFYSxRQUFoQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxLQUFEO0lBQ0UsS0FBSyxFQUFFYixjQURUO0lBRUUsUUFBUSxFQUFFTyxpQkFGWjtJQUdFLEtBQUssRUFBRTtNQUNMUyxNQUFNLEVBQUUsTUFESDtNQUVMQyxPQUFPLEVBQUUsTUFGSjtNQUdMQyxRQUFRLEVBQUU7SUFITCxDQUhUO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixFQVNJLE1BQUMsYUFBRDtJQUFlLElBQUksRUFBQyxRQUFwQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxnRUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsQ0FUSixDQURGLENBREY7QUFpQkQsQ0E5Q0Q7O0dBQU01QixpQjtVQUNhRyx1RCxFQUVLQyx1RDs7O01BSGxCSixpQjtBQWdEU0EsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS45MmZiOTdjOTA2MGFmZjE0NDE0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBjaGFuZ2VJbnRyb2R1Y2UgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tICdyZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZSc7XHJcbmltcG9ydCB7IEJzQ2hlY2tDaXJjbGVGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xyXG5cclxuY29uc3QgRm9ybUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiA1M3B4O1xyXG5gXHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dCA9IHN0eWxlZChUZXh0QXJlYSlgXHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHdpZHRoOiAzNTBweDtcclxuICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5idXR0b25gXHJcbiAgYWxsOiB1bnNldDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6ICMxODY0YWI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICA6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbnRyb2R1Y2VFZGl0Rm9ybSA9ICh7IHNldE9uRWRpdEZvcm0gfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBcclxuICBjb25zdCB7IGludHJvZHVjZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lKTtcclxuICBjb25zdCBbaW50cm9kdWNlSW5wdXQsIHNldEludHJvZHVjZUlucHV0XSA9IHVzZVN0YXRlKHsgaW50cm9kdWNlIH0pO1xyXG4gIGNvbnN0IFtpc0F2YWlsYWJsZVBvc3RpbmcsIHNldElzQXZhaWxhYmxlUG9zdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tFZGl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldE9uRWRpdEZvcm0ocHJldiA9PiAhcHJldik7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUludHJvZHVjZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zdCB7dGFyZ2V0OiB7dmFsdWV9fSA9IGU7XHJcbiAgICBzZXRJbnRyb2R1Y2VJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpKSB7XHJcbiAgICAgIHNldElzQXZhaWxhYmxlUG9zdGluZyh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID09PSAwIHx8IHZhbHVlLmxlbmd0aCA+IDEwMCkge1xyXG4gICAgICBzZXRJc0F2YWlsYWJsZVBvc3RpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICB9LCBbaW50cm9kdWNlSW5wdXRdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gaWYgKCFpc0F2YWlsYWJsZVBvc3RpbmcpIHtcclxuICAgIC8vICAgcmV0dXJuIGFsZXJ0KFwi6riA7J6Q7IiY6rCAIOuEiOustCDrp47sirXri4jri6QuXCIpO1xyXG4gICAgLy8gfVxyXG4gICAgZGlzcGF0Y2goY2hhbmdlSW50cm9kdWNlKGludHJvZHVjZUlucHV0KSk7XHJcbiAgfSwgW2ludHJvZHVjZUlucHV0XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUNvbnRhaW5lcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtpbnRyb2R1Y2VJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUludHJvZHVjZX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHJlc2l6ZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgIH19Lz5cclxuICAgICAgICAgIDxJY29uQ29udGFpbmVyIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgPEJzQ2hlY2tDaXJjbGVGaWxsIC8+XHJcbiAgICAgICAgICA8L0ljb25Db250YWluZXI+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvRm9ybUNvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW50cm9kdWNlRWRpdEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==