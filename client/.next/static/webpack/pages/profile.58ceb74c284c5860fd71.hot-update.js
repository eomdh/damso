webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/IntroduceEditForm.js":
/*!*****************************************!*\
  !*** ./components/IntroduceEditForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\IntroduceEditForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "IntroduceEditForm__FormContainer",
  componentId: "sc-aylvvj-0"
})(["height:53px;"]);
_c = FormContainer;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].form.withConfig({
  displayName: "IntroduceEditForm__Form",
  componentId: "sc-aylvvj-1"
})(["display:flex;align-items:center;justify-content:center;width:100%;margin-bottom:18px;"]);
_c2 = Form;
var Input = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "IntroduceEditForm__Input",
  componentId: "sc-aylvvj-2"
})(["font-size:16px;width:350px;max-height:50px;border:1px solid gray;border-radius:5px;"]);
_c3 = Input;
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
  displayName: "IntroduceEditForm__IconContainer",
  componentId: "sc-aylvvj-3"
})(["all:unset;margin-top:2px;margin-left:8px;font-size:22px;color:#1864ab;cursor:pointer;opacity:0.6;:hover{opacity:1;}"]);
_c4 = IconContainer;

var IntroduceEditForm = function IntroduceEditForm(_ref) {
  _s();

  var setOnEditForm = _ref.setOnEditForm;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.me;
  }),
      introduce = _useSelector.introduce;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  }),
      changeIntroduceDone = _useSelector2.changeIntroduceDone;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    introduce: introduce
  }),
      introduceInput = _useState[0],
      setIntroduceInput = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isAvailablePosting = _useState2[0],
      setIsAvailablePosting = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (changeIntroduceDone) {
      setOnEditForm(function (prev) {
        return !prev;
      });
      false, Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("changeIntroduceDone");
    }

    ;
  }, [changeIntroduceDone]);
  var onClickEditForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setOnEditForm(function (prev) {
      return !prev;
    });
  }, []);
  var onChangeIntroduce = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    var value = e.target.value;
    setIntroduceInput(e.target.value);

    if (value.trim()) {
      setIsAvailablePosting(true);
    } else if (value.length === 0 || value.length > 100) {
      setIsAvailablePosting(false);
    }

    ;
  }, [introduceInput]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    e.preventDefault(); // if (!isAvailablePosting) {
    //   return alert("글자수가 너무 많습니다.");
    // }

    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_3__["changeIntroduce"])(introduceInput));
  }, [introduceInput]);
  return __jsx(FormContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }, __jsx(Form, {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
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
      lineNumber: 81,
      columnNumber: 9
    }
  }), __jsx(IconContainer, {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__["BsCheckCircleFill"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }))));
};

_s(IntroduceEditForm, "LY5OoocWloKxV1NRvNmtfzaK73I=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnRyb2R1Y2VFZGl0Rm9ybS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiXSwibmFtZXMiOlsiRm9ybUNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkZvcm0iLCJmb3JtIiwiSW5wdXQiLCJUZXh0QXJlYSIsIkljb25Db250YWluZXIiLCJidXR0b24iLCJJbnRyb2R1Y2VFZGl0Rm9ybSIsInNldE9uRWRpdEZvcm0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImludHJvZHVjZSIsImNoYW5nZUludHJvZHVjZURvbmUiLCJ1c2VTdGF0ZSIsImludHJvZHVjZUlucHV0Iiwic2V0SW50cm9kdWNlSW5wdXQiLCJpc0F2YWlsYWJsZVBvc3RpbmciLCJzZXRJc0F2YWlsYWJsZVBvc3RpbmciLCJ1c2VFZmZlY3QiLCJwcmV2Iiwib25DbGlja0VkaXRGb3JtIiwidXNlQ2FsbGJhY2siLCJvbkNoYW5nZUludHJvZHVjZSIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInRyaW0iLCJsZW5ndGgiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY2hhbmdlSW50cm9kdWNlIiwicmVzaXplIiwib3V0bGluZSIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxvQkFBbkI7S0FBTUYsYTtBQUlOLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0csSUFBVjtFQUFBO0VBQUE7QUFBQSw2RkFBVjtNQUFNRCxJO0FBUU4sSUFBTUUsS0FBSyxHQUFHSixpRUFBTSxDQUFDSywrREFB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LEVBREYsRUFTSSxNQUFDLGFBQUQ7SUFBZSxJQUFJLEVBQUMsUUFBcEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsZ0VBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURGLENBVEosQ0FERixDQURGO0FBaUJELENBdEREOztHQUFNOUIsaUI7VUFDYUcsdUQsRUFFS0MsdUQsRUFDVUEsdUQ7OztNQUo1QkosaUI7QUF3RFNBLGdGQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS41OGNlYjc0YzI4NGM1ODYwZmQ3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGNoYW5nZUludHJvZHVjZSB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFRleHRBcmVhIGZyb20gJ3JlYWN0LXRleHRhcmVhLWF1dG9zaXplJztcclxuaW1wb3J0IHsgQnNDaGVja0NpcmNsZUZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XHJcblxyXG5jb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDUzcHg7XHJcbmBcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0ID0gc3R5bGVkKFRleHRBcmVhKWBcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBJY29uQ29udGFpbmVyID0gc3R5bGVkLmJ1dHRvbmBcclxuICBhbGw6IHVuc2V0O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjb2xvcjogIzE4NjRhYjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIDpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEludHJvZHVjZUVkaXRGb3JtID0gKHsgc2V0T25FZGl0Rm9ybSB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIFxyXG4gIGNvbnN0IHsgaW50cm9kdWNlIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWUpO1xyXG4gIGNvbnN0IHsgY2hhbmdlSW50cm9kdWNlRG9uZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBbaW50cm9kdWNlSW5wdXQsIHNldEludHJvZHVjZUlucHV0XSA9IHVzZVN0YXRlKHsgaW50cm9kdWNlIH0pO1xyXG4gIGNvbnN0IFtpc0F2YWlsYWJsZVBvc3RpbmcsIHNldElzQXZhaWxhYmxlUG9zdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoY2hhbmdlSW50cm9kdWNlRG9uZSkge1xyXG4gICAgICBzZXRPbkVkaXRGb3JtKHByZXYgPT4gIXByZXYpO1xyXG4gICAgICBjaGFuZ2VJbnRyb2R1Y2VEb25lID0gZmFsc2U7XHJcbiAgICB9O1xyXG4gIH0sIFtjaGFuZ2VJbnRyb2R1Y2VEb25lXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tFZGl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldE9uRWRpdEZvcm0ocHJldiA9PiAhcHJldik7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUludHJvZHVjZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zdCB7dGFyZ2V0OiB7dmFsdWV9fSA9IGU7XHJcbiAgICBzZXRJbnRyb2R1Y2VJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpKSB7XHJcbiAgICAgIHNldElzQXZhaWxhYmxlUG9zdGluZyh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID09PSAwIHx8IHZhbHVlLmxlbmd0aCA+IDEwMCkge1xyXG4gICAgICBzZXRJc0F2YWlsYWJsZVBvc3RpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICB9LCBbaW50cm9kdWNlSW5wdXRdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gaWYgKCFpc0F2YWlsYWJsZVBvc3RpbmcpIHtcclxuICAgIC8vICAgcmV0dXJuIGFsZXJ0KFwi6riA7J6Q7IiY6rCAIOuEiOustCDrp47sirXri4jri6QuXCIpO1xyXG4gICAgLy8gfVxyXG4gICAgZGlzcGF0Y2goY2hhbmdlSW50cm9kdWNlKGludHJvZHVjZUlucHV0KSk7XHJcbiAgfSwgW2ludHJvZHVjZUlucHV0XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUNvbnRhaW5lcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtpbnRyb2R1Y2VJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUludHJvZHVjZX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHJlc2l6ZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgIH19Lz5cclxuICAgICAgICAgIDxJY29uQ29udGFpbmVyIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgPEJzQ2hlY2tDaXJjbGVGaWxsIC8+XHJcbiAgICAgICAgICA8L0ljb25Db250YWluZXI+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvRm9ybUNvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW50cm9kdWNlRWRpdEZvcm07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3JlYWRPbmx5RXJyb3IobmFtZSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJcXFwiXCIgKyBuYW1lICsgXCJcXFwiIGlzIHJlYWQtb25seVwiKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9