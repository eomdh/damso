webpackHotUpdate_N_E("pages/signup",{

/***/ "./components/SignupForm.js":
/*!**********************************!*\
  !*** ./components/SignupForm.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\SignupForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "SignupForm__Container",
  componentId: "sc-1sfl0s-0"
})(["width:30%;height:75%;background-color:#e9ecef;border-radius:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 80px;"]);
_c = Container;
var TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "SignupForm__TitleContainer",
  componentId: "sc-1sfl0s-1"
})(["width:100%;display:flex;justify-content:center;margin-top:30px;"]);
_c2 = TitleContainer;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "SignupForm__Title",
  componentId: "sc-1sfl0s-2"
})(["font-weight:600;font-size:27px;color:#212529;"]);
_c3 = Title;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "SignupForm__Form",
  componentId: "sc-1sfl0s-3"
})(["width:100%;height:80%;display:flex;flex-direction:column;align-items:center;margin-top:30px;"]);
_c4 = Form;
var Input = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "SignupForm__Input",
  componentId: "sc-1sfl0s-4"
})(["all:unset;border-radius:10px;width:85%;height:30px;padding:8px 15px;background-color:white;opacity:0.8;margin-bottom:25px;&:hover,&:focus{opacity:1;}"]);
_c5 = Input;
var CheckBoxContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "SignupForm__CheckBoxContainer",
  componentId: "sc-1sfl0s-5"
})(["display:flex;width:85%;justify-content:flex-start;margin-top:-10px;margin-bottom:20px;"]);
_c6 = CheckBoxContainer;
var CheckBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "SignupForm__CheckBox",
  componentId: "sc-1sfl0s-6"
})([""]);
_c7 = CheckBox;
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "SignupForm__Button",
  componentId: "sc-1sfl0s-7"
})(["all:unset;border-radius:10px;width:85%;height:30px;padding:8px 15px;background-color:#1864ab;color:white;font-weight:700;font-size:17px;text-align:center;cursor:pointer;opacity:0.9;outline:none;&:hover{opacity:1;}"]);
_c8 = Button;
var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "SignupForm__ErrorMessage",
  componentId: "sc-1sfl0s-8"
})(["margin-bottom:10px;color:red;"]);
_c9 = ErrorMessage;

var SignupForm = function SignupForm() {
  _s();

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      nickname = _useInput4[0],
      onChangeNickname = _useInput4[1];

  var _useInput5 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"])(''),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      password = _useInput6[0],
      onChangePassword = _useInput6[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      verifyPassword = _useState[0],
      setVerifyPassword = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      passwordError = _useState2[0],
      setPasswordError = _useState2[1];

  var onChangeVerifyPassword = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setVerifyPassword(e.target.value);
    setPasswordError(e.target.value !== password);
  }, [password]);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      term = _useState3[0],
      setTerm = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      termError = _useState4[0],
      setTermError = _useState4[1];

  var onChangeTerm = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);
  var onSignupSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    e.preventDefault();

    if (password !== verifyPassword) {
      return setPasswordError(true);
    }

    if (!term) {
      return setTermError(true);
    }

    console.log(email, nickname, password);
  }, [email, password, verifyPassword, term]);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 5
    }
  }, __jsx(TitleContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, "Signup")), __jsx(Form, {
    onSubmit: onSignupSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, __jsx(Input, {
    type: "email",
    name: "user-email",
    value: email,
    required: true,
    placeholder: "Email",
    onChange: onChangeEmail,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }), __jsx(Input, {
    type: "text",
    name: "user-nickname",
    value: nickname,
    required: true,
    placeholder: "Nickname",
    onChange: onChangeNickname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }), __jsx(Input, {
    type: "password",
    name: "user-password",
    value: password,
    placeholder: "Password",
    onChange: onChangePassword,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }), __jsx(Input, {
    type: "password",
    name: "verify-password",
    value: verifyPassword,
    placeholder: "Verify Password",
    onChange: onChangeVerifyPassword,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }), passwordError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 27
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), __jsx(CheckBoxContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, __jsx(CheckBox, {
    type: "checkbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }), __jsx("label", {
    htmlFor: CheckBox,
    onChange: onChangeTerm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4.")), termError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 23
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4."), __jsx(Button, {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }
  }, "\uAC00\uC785\uD558\uAE30")));
};

_s(SignupForm, "6VTJfwLwC4QTGVAykpKeA49Zuk8=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c10 = SignupForm;
/* harmony default export */ __webpack_exports__["default"] = (SignupForm);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "TitleContainer");
$RefreshReg$(_c3, "Title");
$RefreshReg$(_c4, "Form");
$RefreshReg$(_c5, "Input");
$RefreshReg$(_c6, "CheckBoxContainer");
$RefreshReg$(_c7, "CheckBox");
$RefreshReg$(_c8, "Button");
$RefreshReg$(_c9, "ErrorMessage");
$RefreshReg$(_c10, "SignupForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWdudXBGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlRpdGxlQ29udGFpbmVyIiwiVGl0bGUiLCJGb3JtIiwiZm9ybSIsIklucHV0IiwiaW5wdXQiLCJDaGVja0JveENvbnRhaW5lciIsIkNoZWNrQm94IiwiQnV0dG9uIiwiYnV0dG9uIiwiRXJyb3JNZXNzYWdlIiwic3BhbiIsIlNpZ251cEZvcm0iLCJ1c2VJbnB1dCIsImVtYWlsIiwib25DaGFuZ2VFbWFpbCIsIm5pY2tuYW1lIiwib25DaGFuZ2VOaWNrbmFtZSIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsInVzZVN0YXRlIiwidmVyaWZ5UGFzc3dvcmQiLCJzZXRWZXJpZnlQYXNzd29yZCIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwib25DaGFuZ2VWZXJpZnlQYXNzd29yZCIsInVzZUNhbGxiYWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwidGVybSIsInNldFRlcm0iLCJ0ZXJtRXJyb3IiLCJzZXRUZXJtRXJyb3IiLCJvbkNoYW5nZVRlcm0iLCJjaGVja2VkIiwib25TaWdudXBTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLHFLQUFmO0tBQU1GLFM7QUFZTixJQUFNRyxjQUFjLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsdUVBQXBCO01BQU1DLGM7QUFPTixJQUFNQyxLQUFLLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEscURBQVg7TUFBTUUsSztBQU1OLElBQU1DLElBQUksR0FBR0oseURBQU0sQ0FBQ0ssSUFBVjtFQUFB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O0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsRUFFRTtJQUFPLE9BQU8sRUFBRWhCLFFBQWhCO0lBQTBCLFFBQVEsRUFBRTJCLFlBQXBDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsd0RBRkYsQ0FoQ0YsRUFvQ0dGLFNBQVMsSUFBSSxNQUFDLFlBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSwyRUFwQ2hCLEVBcUNFLE1BQUMsTUFBRDtJQUFRLElBQUksRUFBQyxRQUFiO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsOEJBckNGLENBSkYsQ0FERjtBQThDRCxDQTdFRDs7R0FBTXBCLFU7VUFDMkJDLHVELEVBQ01BLHVELEVBQ0FBLHVEOzs7T0FIakNELFU7QUErRVNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC44NmJiYzg5MjdlOTgyNWYzMGU4OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi9ob29rcy91c2VJbnB1dCc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiA3NSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgODBweDtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgY29sb3I6ICMyMTI1Mjk7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA4MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIGFsbDogdW5zZXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogODUlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwYWRkaW5nOiA4cHggMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAmOmhvdmVyLFxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDaGVja0JveENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogODUlO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgQ2hlY2tCb3ggPSBzdHlsZWQuaW5wdXRgYDtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYWxsOiB1bnNldDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODY0YWI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5zcGFuYFxyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgY29sb3I6IHJlZDtcclxuYDtcclxuXHJcbmNvbnN0IFNpZ251cEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbbmlja25hbWUsIG9uQ2hhbmdlTmlja25hbWVdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gIGNvbnN0IFt2ZXJpZnlQYXNzd29yZCwgc2V0VmVyaWZ5UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkNoYW5nZVZlcmlmeVBhc3N3b3JkID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFZlcmlmeVBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIHNldFBhc3N3b3JkRXJyb3IoZS50YXJnZXQudmFsdWUgIT09IHBhc3N3b3JkKTtcclxuICB9LCBbcGFzc3dvcmRdKTtcclxuXHJcbiAgY29uc3QgW3Rlcm0sIHNldFRlcm1dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0ZXJtRXJyb3IsIHNldFRlcm1FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgb25DaGFuZ2VUZXJtID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFRlcm0oZS50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICBzZXRUZXJtRXJyb3IoZmFsc2UpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25TaWdudXBTdWJtaXQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICBpZiAocGFzc3dvcmQgIT09IHZlcmlmeVBhc3N3b3JkKSB7XHJcbiAgICAgIHJldHVybiBzZXRQYXNzd29yZEVycm9yKHRydWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0ZXJtKSB7XHJcbiAgICAgIHJldHVybiBzZXRUZXJtRXJyb3IodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCwgbmlja25hbWUsIHBhc3N3b3JkIClcclxuICB9LCBbZW1haWwsIHBhc3N3b3JkLCB2ZXJpZnlQYXNzd29yZCwgdGVybV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFRpdGxlQ29udGFpbmVyPlxyXG4gICAgICAgIDxUaXRsZT5TaWdudXA8L1RpdGxlPlxyXG4gICAgICA8L1RpdGxlQ29udGFpbmVyPlxyXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TaWdudXBTdWJtaXR9PlxyXG4gICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgbmFtZT1cInVzZXItZW1haWxcIlxyXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9PlxyXG4gICAgICAgIDwvSW5wdXQ+XHJcbiAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cInVzZXItbmlja25hbWVcIlxyXG4gICAgICAgICAgdmFsdWU9e25pY2tuYW1lfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmlja25hbWVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9PlxyXG4gICAgICAgIDwvSW5wdXQ+XHJcbiAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCJcclxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9PlxyXG4gICAgICAgIDwvSW5wdXQ+XHJcbiAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIG5hbWU9XCJ2ZXJpZnktcGFzc3dvcmRcIlxyXG4gICAgICAgICAgdmFsdWU9e3ZlcmlmeVBhc3N3b3JkfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJWZXJpZnkgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVmVyaWZ5UGFzc3dvcmR9PlxyXG4gICAgICAgIDwvSW5wdXQ+XHJcbiAgICAgICAge3Bhc3N3b3JkRXJyb3IgJiYgPEVycm9yTWVzc2FnZT7ruYTrsIDrsojtmLjqsIAg7J287LmY7ZWY7KeAIOyViuyKteuLiOuLpC48L0Vycm9yTWVzc2FnZT59XHJcbiAgICAgICAgPENoZWNrQm94Q29udGFpbmVyPlxyXG4gICAgICAgICAgPENoZWNrQm94IHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17Q2hlY2tCb3h9IG9uQ2hhbmdlPXtvbkNoYW5nZVRlcm19PuyVveq0gOyXkCDrj5nsnZjtlanri4jri6QuPC9sYWJlbD5cclxuICAgICAgICA8L0NoZWNrQm94Q29udGFpbmVyPlxyXG4gICAgICAgIHt0ZXJtRXJyb3IgJiYgPEVycm9yTWVzc2FnZT7slb3qtIDsl5Ag64+Z7J2Y7ZWY7IWU7JW8IO2VqeuLiOuLpC48L0Vycm9yTWVzc2FnZT59XHJcbiAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+6rCA7J6F7ZWY6riwPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvQ29udGFpbmVyPiAgXHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwRm9ybTsiXSwic291cmNlUm9vdCI6IiJ9