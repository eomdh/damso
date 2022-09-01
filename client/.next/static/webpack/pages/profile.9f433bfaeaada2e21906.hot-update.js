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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\components\\IntroduceEditForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "IntroduceEditForm__FormContainer",
  componentId: "sc-hl73kd-0"
})(["height:53px;"]);
_c = FormContainer;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].form.withConfig({
  displayName: "IntroduceEditForm__Form",
  componentId: "sc-hl73kd-1"
})(["display:flex;align-items:center;justify-content:center;width:100%;margin-bottom:18px;"]);
_c2 = Form;
var Input = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "IntroduceEditForm__Input",
  componentId: "sc-hl73kd-2"
})(["font-size:16px;width:350px;max-height:50px;border:1px solid gray;border-radius:5px;"]);
_c3 = Input;
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
  displayName: "IntroduceEditForm__IconContainer",
  componentId: "sc-hl73kd-3"
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(introduce),
      introduceInput = _useState[0],
      setIntroduceInput = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isAvailablePosting = _useState2[0],
      setIsAvailablePosting = _useState2[1];

  var onChangeIntroduce = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    var value = e.target.value;
    setIntroduceInput(e.target.value);

    if (value.length > 100) {
      setIsAvailablePosting(false);
    }

    ;
  }, [introduceInput]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();

    if (!isAvailablePosting) {
      return alert("글자수가 너무 많습니다.");
    }

    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_INTRODUCE_REQUEST"],
      data: introduceInput
    });
    setOnEditForm(function (prev) {
      return !prev;
    });
  }, [introduceInput]);
  return __jsx(FormContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx(Form, {
    onSubmit: onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
      lineNumber: 72,
      columnNumber: 9
    }
  }), __jsx(IconContainer, {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__["BsCheckCircleFill"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }))));
};

_s(IntroduceEditForm, "+GHO78oGTJ5JEO85IIspKlu/tYM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c5 = IntroduceEditForm;
IntroduceEditForm.propType = {
  setOnEditForm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnRyb2R1Y2VFZGl0Rm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiRm9ybSIsImZvcm0iLCJJbnB1dCIsIlRleHRBcmVhIiwiSWNvbkNvbnRhaW5lciIsImJ1dHRvbiIsIkludHJvZHVjZUVkaXRGb3JtIiwic2V0T25FZGl0Rm9ybSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwiaW50cm9kdWNlIiwidXNlU3RhdGUiLCJpbnRyb2R1Y2VJbnB1dCIsInNldEludHJvZHVjZUlucHV0IiwiaXNBdmFpbGFibGVQb3N0aW5nIiwic2V0SXNBdmFpbGFibGVQb3N0aW5nIiwib25DaGFuZ2VJbnRyb2R1Y2UiLCJ1c2VDYWxsYmFjayIsImUiLCJ2YWx1ZSIsInRhcmdldCIsImxlbmd0aCIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsInR5cGUiLCJDSEFOR0VfSU5UUk9EVUNFX1JFUVVFU1QiLCJkYXRhIiwicHJldiIsInJlc2l6ZSIsIm91dGxpbmUiLCJvdmVyZmxvdyIsInByb3BUeXBlIiwiUHJvcFR5cGUiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLG9CQUFuQjtLQUFNRixhO0FBSU4sSUFBTUcsSUFBSSxHQUFHRix5REFBTSxDQUFDRyxJQUFWO0VBQUE7RUFBQTtBQUFBLDZGQUFWO01BQU1ELEk7QUFRTixJQUFNRSxLQUFLLEdBQUdKLGlFQUFNLENBQUNLLCtEQUFELENBQVQ7RUFBQTtFQUFBO0FBQUEsMkZBQVg7TUFBTUQsSztBQVFOLElBQU1FLGFBQWEsR0FBR04seURBQU0sQ0FBQ08sTUFBVjtFQUFBO0VBQUE7QUFBQSwySEFBbkI7TUFBTUQsYTs7QUFhTixJQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQXVCO0VBQUE7O0VBQUEsSUFBcEJDLGFBQW9CLFFBQXBCQSxhQUFvQjtFQUMvQyxJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztFQUVBLG1CQUFzQkMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0lBQUEsT0FBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEVBQXRCO0VBQUEsQ0FBRCxDQUFqQztFQUFBLElBQVFDLFNBQVIsZ0JBQVFBLFNBQVI7O0VBQ0EsZ0JBQTRDQyxzREFBUSxDQUFDRCxTQUFELENBQXBEO0VBQUEsSUFBT0UsY0FBUDtFQUFBLElBQXVCQyxpQkFBdkI7O0VBQ0EsaUJBQW9ERixzREFBUSxDQUFDLElBQUQsQ0FBNUQ7RUFBQSxJQUFPRyxrQkFBUDtFQUFBLElBQTJCQyxxQkFBM0I7O0VBRUEsSUFBTUMsaUJBQWlCLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQzNDLElBQWdCQyxLQUFoQixHQUEwQkQsQ0FBMUIsQ0FBT0UsTUFBUCxDQUFnQkQsS0FBaEI7SUFDQU4saUJBQWlCLENBQUNLLENBQUMsQ0FBQ0UsTUFBRixDQUFTRCxLQUFWLENBQWpCOztJQUNBLElBQUlBLEtBQUssQ0FBQ0UsTUFBTixHQUFlLEdBQW5CLEVBQXdCO01BQ3RCTixxQkFBcUIsQ0FBQyxLQUFELENBQXJCO0lBQ0Q7O0lBQUE7RUFDRixDQU5vQyxFQU1sQyxDQUFDSCxjQUFELENBTmtDLENBQXJDO0VBUUEsSUFBTVUsUUFBUSxHQUFHTCx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztJQUNsQ0EsQ0FBQyxDQUFDSyxjQUFGOztJQUNBLElBQUksQ0FBQ1Qsa0JBQUwsRUFBeUI7TUFDdkIsT0FBT1UsS0FBSyxDQUFDLGVBQUQsQ0FBWjtJQUNEOztJQUNEcEIsUUFBUSxDQUFDO01BQ1BxQixJQUFJLEVBQUVDLHVFQURDO01BRVBDLElBQUksRUFBRWY7SUFGQyxDQUFELENBQVI7SUFJQVQsYUFBYSxDQUFDLFVBQUF5QixJQUFJO01BQUEsT0FBSSxDQUFDQSxJQUFMO0lBQUEsQ0FBTCxDQUFiO0VBQ0QsQ0FWMkIsRUFVekIsQ0FBQ2hCLGNBQUQsQ0FWeUIsQ0FBNUI7RUFZQSxPQUNFLE1BQUMsYUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxJQUFEO0lBQU0sUUFBUSxFQUFFVSxRQUFoQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxLQUFEO0lBQ0UsS0FBSyxFQUFFVixjQURUO0lBRUUsUUFBUSxFQUFFSSxpQkFGWjtJQUdFLEtBQUssRUFBRTtNQUNMYSxNQUFNLEVBQUUsTUFESDtNQUVMQyxPQUFPLEVBQUUsTUFGSjtNQUdMQyxRQUFRLEVBQUU7SUFITCxDQUhUO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixFQVNJLE1BQUMsYUFBRDtJQUFlLElBQUksRUFBQyxRQUFwQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxnRUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsQ0FUSixDQURGLENBREY7QUFpQkQsQ0E1Q0Q7O0dBQU03QixpQjtVQUNhRyx1RCxFQUVLQyx1RDs7O01BSGxCSixpQjtBQThDTkEsaUJBQWlCLENBQUM4QixRQUFsQixHQUE2QjtFQUMzQjdCLGFBQWEsRUFBRThCLGlEQUFRLENBQUNDLElBQVQsQ0FBY0M7QUFERixDQUE3QjtBQUllakMsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS45ZjQzM2JmYWVhYWRhMmUyMTkwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGNoYW5nZUludHJvZHVjZSwgQ0hBTkdFX0lOVFJPRFVDRV9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAncmVhY3QtdGV4dGFyZWEtYXV0b3NpemUnO1xyXG5pbXBvcnQgeyBCc0NoZWNrQ2lyY2xlRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcclxuXHJcbmNvbnN0IEZvcm1Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogNTNweDtcclxuYFxyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQoVGV4dEFyZWEpYFxyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgbWF4LWhlaWdodDogNTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuYDtcclxuXHJcbmNvbnN0IEljb25Db250YWluZXIgPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGFsbDogdW5zZXQ7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAjMTg2NGFiO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW50cm9kdWNlRWRpdEZvcm0gPSAoeyBzZXRPbkVkaXRGb3JtIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgXHJcbiAgY29uc3QgeyBpbnRyb2R1Y2UgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZSk7XHJcbiAgY29uc3QgW2ludHJvZHVjZUlucHV0LCBzZXRJbnRyb2R1Y2VJbnB1dF0gPSB1c2VTdGF0ZShpbnRyb2R1Y2UpO1xyXG4gIGNvbnN0IFtpc0F2YWlsYWJsZVBvc3RpbmcsIHNldElzQXZhaWxhYmxlUG9zdGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VJbnRyb2R1Y2UgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc3Qge3RhcmdldDoge3ZhbHVlfX0gPSBlO1xyXG4gICAgc2V0SW50cm9kdWNlSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlLmxlbmd0aCA+IDEwMCkge1xyXG4gICAgICBzZXRJc0F2YWlsYWJsZVBvc3RpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICB9LCBbaW50cm9kdWNlSW5wdXRdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCFpc0F2YWlsYWJsZVBvc3RpbmcpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KFwi6riA7J6Q7IiY6rCAIOuEiOustCDrp47sirXri4jri6QuXCIpO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfSU5UUk9EVUNFX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGludHJvZHVjZUlucHV0LFxyXG4gICAgfSk7XHJcbiAgICBzZXRPbkVkaXRGb3JtKHByZXYgPT4gIXByZXYpO1xyXG4gIH0sIFtpbnRyb2R1Y2VJbnB1dF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Db250YWluZXI+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB2YWx1ZT17aW50cm9kdWNlSW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnRyb2R1Y2V9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICByZXNpemU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICA8SWNvbkNvbnRhaW5lciB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIDxCc0NoZWNrQ2lyY2xlRmlsbCAvPlxyXG4gICAgICAgICAgPC9JY29uQ29udGFpbmVyPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0Zvcm1Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkludHJvZHVjZUVkaXRGb3JtLnByb3BUeXBlID0ge1xyXG4gIHNldE9uRWRpdEZvcm06IFByb3BUeXBlLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEludHJvZHVjZUVkaXRGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=