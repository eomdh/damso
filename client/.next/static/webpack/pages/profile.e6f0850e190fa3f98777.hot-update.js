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
    e.preventDefault();

    if (!isAvailablePosting) {
      return alert("글자수가 너무 많습니다.");
    }

    dispatch(Object(_reducers_user__WEBPACK_IMPORTED_MODULE_2__["changeIntroduce"])(introduceInput));
    setOnEditForm(function (prev) {
      return !prev;
    });
  }, [introduceInput]);
  return __jsx(FormContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, __jsx(Form, {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx(Input, {
    value: introduce,
    onChange: onChangeIntroduce,
    style: {
      resize: "none",
      outline: "none",
      overflow: "hidden"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }), __jsx(IconContainer, {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__["BsCheckCircleFill"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnRyb2R1Y2VFZGl0Rm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiRm9ybSIsImZvcm0iLCJJbnB1dCIsIlRleHRBcmVhIiwiSWNvbkNvbnRhaW5lciIsImJ1dHRvbiIsIkludHJvZHVjZUVkaXRGb3JtIiwic2V0T25FZGl0Rm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiaW50cm9kdWNlIiwidXNlU3RhdGUiLCJpbnRyb2R1Y2VJbnB1dCIsInNldEludHJvZHVjZUlucHV0IiwiaXNBdmFpbGFibGVQb3N0aW5nIiwic2V0SXNBdmFpbGFibGVQb3N0aW5nIiwib25DbGlja0VkaXRGb3JtIiwidXNlQ2FsbGJhY2siLCJwcmV2Iiwib25DaGFuZ2VJbnRyb2R1Y2UiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJ0cmltIiwibGVuZ3RoIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwiY2hhbmdlSW50cm9kdWNlIiwicmVzaXplIiwib3V0bGluZSIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxvQkFBbkI7S0FBTUYsYTtBQUlOLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0csSUFBVjtFQUFBO0VBQUE7QUFBQSw2RkFBVjtNQUFNRCxJO0FBUU4sSUFBTUUsS0FBSyxHQUFHSixpRUFBTSxDQUFDSywrREFBRCxDQUFUO0VBQUE7RUFBQTtBQUFBLDJGQUFYO01BQU1ELEs7QUFRTixJQUFNRSxhQUFhLEdBQUdOLHlEQUFNLENBQUNPLE1BQVY7RUFBQTtFQUFBO0FBQUEsMkhBQW5CO01BQU1ELGE7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cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgY2hhbmdlSW50cm9kdWNlIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAncmVhY3QtdGV4dGFyZWEtYXV0b3NpemUnO1xyXG5pbXBvcnQgeyBCc0NoZWNrQ2lyY2xlRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcclxuXHJcbmNvbnN0IEZvcm1Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogNTNweDtcclxuYFxyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQoVGV4dEFyZWEpYFxyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgbWF4LWhlaWdodDogNTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuYDtcclxuXHJcbmNvbnN0IEljb25Db250YWluZXIgPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGFsbDogdW5zZXQ7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAjMTg2NGFiO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW50cm9kdWNlRWRpdEZvcm0gPSAoeyBzZXRPbkVkaXRGb3JtIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgXHJcbiAgY29uc3QgeyBpbnRyb2R1Y2UgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZSk7XHJcbiAgY29uc3QgW2ludHJvZHVjZUlucHV0LCBzZXRJbnRyb2R1Y2VJbnB1dF0gPSB1c2VTdGF0ZSh7IGludHJvZHVjZSB9KTtcclxuICBjb25zdCBbaXNBdmFpbGFibGVQb3N0aW5nLCBzZXRJc0F2YWlsYWJsZVBvc3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvbkNsaWNrRWRpdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRPbkVkaXRGb3JtKHByZXYgPT4gIXByZXYpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VJbnRyb2R1Y2UgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc3Qge3RhcmdldDoge3ZhbHVlfX0gPSBlO1xyXG4gICAgc2V0SW50cm9kdWNlSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSkge1xyXG4gICAgICBzZXRJc0F2YWlsYWJsZVBvc3RpbmcodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCB2YWx1ZS5sZW5ndGggPiAxMDApIHtcclxuICAgICAgc2V0SXNBdmFpbGFibGVQb3N0aW5nKGZhbHNlKTtcclxuICAgIH07XHJcbiAgfSwgW2ludHJvZHVjZUlucHV0XSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghaXNBdmFpbGFibGVQb3N0aW5nKSB7XHJcbiAgICAgIHJldHVybiBhbGVydChcIuq4gOyekOyImOqwgCDrhIjrrLQg66eO7Iq164uI64ukLlwiKTtcclxuICAgIH1cclxuICAgIGRpc3BhdGNoKGNoYW5nZUludHJvZHVjZShpbnRyb2R1Y2VJbnB1dCkpO1xyXG4gICAgc2V0T25FZGl0Rm9ybShwcmV2ID0+ICFwcmV2KTtcclxuICB9LCBbaW50cm9kdWNlSW5wdXRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtQ29udGFpbmVyPlxyXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2ludHJvZHVjZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUludHJvZHVjZX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHJlc2l6ZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgIH19Lz5cclxuICAgICAgICAgIDxJY29uQ29udGFpbmVyIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgPEJzQ2hlY2tDaXJjbGVGaWxsIC8+XHJcbiAgICAgICAgICA8L0ljb25Db250YWluZXI+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvRm9ybUNvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW50cm9kdWNlRWRpdEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==