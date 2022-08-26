webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/IntroduceEditForm.js":
/*!*****************************************!*\
  !*** ./components/IntroduceEditForm.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");


var _templateObject,
    _templateObject2,
    _templateObject3,
    _templateObject4,
    _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\IntroduceEditForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 53px;\n"])));
_c = FormContainer;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form(_templateObject2 || (_templateObject2 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin-bottom: 18px;\n"])));
_c2 = Form;
var Input = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__["default"])(_templateObject3 || (_templateObject3 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  font-size: 16px;\n  width: 350px;\n  max-height: 50px;\n  border: 1px solid gray;\n  border-radius: 5px;\n"])));
_c3 = Input;
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject4 || (_templateObject4 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  all: unset;\n  margin-top: 2px;\n  margin-left: 8px;\n  font-size: 22px;\n  color: #1864ab;\n  cursor: pointer;\n  opacity: 0.6;\n  :hover {\n    opacity: 1;\n  }\n"])));
_c4 = IconContainer;

var IntroduceEditForm = function IntroduceEditForm(_ref) {
  _s();

  var setOnEditForm = _ref.setOnEditForm,
      data = _ref.data;
  var onClickEditForm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setOnEditForm(function (prev) {
      return !prev;
    });
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    e.preventDefault();
  });
  return __jsx(FormContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(Form, {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx(Input, {
    placeholder: data,
    style: {
      resize: "none",
      outline: "none",
      overflow: "hidden"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), __jsx(IconContainer, {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsCheckCircleFill"], {
    onClick: onClickEditForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }))));
};

_s(IntroduceEditForm, "piY0nUJoTFXwW3ARNuiyoVW0Meg=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnRyb2R1Y2VFZGl0Rm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiRm9ybSIsImZvcm0iLCJJbnB1dCIsIlRleHRBcmVhIiwiSWNvbkNvbnRhaW5lciIsImJ1dHRvbiIsIkludHJvZHVjZUVkaXRGb3JtIiwic2V0T25FZGl0Rm9ybSIsImRhdGEiLCJvbkNsaWNrRWRpdEZvcm0iLCJ1c2VDYWxsYmFjayIsInByZXYiLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc2l6ZSIsIm91dGxpbmUiLCJvdmVyZmxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLGtLQUFuQjtLQUFNRixhO0FBSU4sSUFBTUcsSUFBSSxHQUFHRix5REFBTSxDQUFDRyxJQUFWLGlRQUFWO01BQU1ELEk7QUFRTixJQUFNRSxLQUFLLEdBQUdKLGlFQUFNLENBQUNLLCtEQUFELENBQVQsK1BBQVg7TUFBTUQsSztBQVFOLElBQU1FLGFBQWEsR0FBR04seURBQU0sQ0FBQ08sTUFBVix5VEFBbkI7TUFBTUQsYTs7QUFhTixJQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQTZCO0VBQUE7O0VBQUEsSUFBMUJDLGFBQTBCLFFBQTFCQSxhQUEwQjtFQUFBLElBQVhDLElBQVcsUUFBWEEsSUFBVztFQUNyRCxJQUFNQyxlQUFlLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUN4Q0gsYUFBYSxDQUFDLFVBQUFJLElBQUk7TUFBQSxPQUFJLENBQUNBLElBQUw7SUFBQSxDQUFMLENBQWI7RUFDRCxDQUZrQyxFQUVoQyxFQUZnQyxDQUFuQztFQUlBLElBQU1DLFFBQVEsR0FBR0YseURBQVcsQ0FBQyxVQUFDRyxDQUFELEVBQU87SUFDbENBLENBQUMsQ0FBQ0MsY0FBRjtFQUNELENBRjJCLENBQTVCO0VBSUEsT0FDRSxNQUFDLGFBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsSUFBRDtJQUFNLFFBQVEsRUFBRUYsUUFBaEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsS0FBRDtJQUNFLFdBQVcsRUFBR0osSUFEaEI7SUFFRSxLQUFLLEVBQUU7TUFDTE8sTUFBTSxFQUFFLE1BREg7TUFFTEMsT0FBTyxFQUFFLE1BRko7TUFHTEMsUUFBUSxFQUFFO0lBSEwsQ0FGVDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsRUFRSSxNQUFDLGFBQUQ7SUFBZSxJQUFJLEVBQUMsUUFBcEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsZ0VBQUQ7SUFBbUIsT0FBTyxFQUFFUixlQUE1QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsQ0FSSixDQURGLENBREY7QUFnQkQsQ0F6QkQ7O0dBQU1ILGlCOztNQUFBQSxpQjtBQTJCU0EsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5mM2QzMjc2NDg5Y2Y4NmIwZmJjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFRleHRBcmVhIGZyb20gJ3JlYWN0LXRleHRhcmVhLWF1dG9zaXplJztcclxuaW1wb3J0IHsgQnNDaGVja0NpcmNsZUZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XHJcblxyXG5jb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDUzcHg7XHJcbmBcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0ID0gc3R5bGVkKFRleHRBcmVhKWBcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBJY29uQ29udGFpbmVyID0gc3R5bGVkLmJ1dHRvbmBcclxuICBhbGw6IHVuc2V0O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBjb2xvcjogIzE4NjRhYjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIDpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEludHJvZHVjZUVkaXRGb3JtID0gKHsgc2V0T25FZGl0Rm9ybSwgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3Qgb25DbGlja0VkaXRGb3JtID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0T25FZGl0Rm9ybShwcmV2ID0+ICFwcmV2KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9KTtcclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Db250YWluZXI+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17IGRhdGEgfVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcmVzaXplOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgfX0vPlxyXG4gICAgICAgICAgPEljb25Db250YWluZXIgdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICA8QnNDaGVja0NpcmNsZUZpbGwgb25DbGljaz17b25DbGlja0VkaXRGb3JtfS8+XHJcbiAgICAgICAgICA8L0ljb25Db250YWluZXI+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvRm9ybUNvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW50cm9kdWNlRWRpdEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==