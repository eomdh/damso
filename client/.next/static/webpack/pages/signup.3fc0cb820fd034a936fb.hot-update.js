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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isChecked = _useState3[0],
      setIsChecked = _useState3[1];

  var onChangeChecked = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    setIsChecked(e.target.checked);
  }, [term]);
  var onSignupSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    e.preventDefault();

    if (password !== verifyPassword) {
      return setPasswordError(true);
    }

    if (!isChecked) {
      return;
    }

    console.log(email, nickname, password);
  }, [email, password, verifyPassword, term]);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, __jsx(TitleContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, "Signup")), __jsx(Form, {
    onSubmit: onSignupSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
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
      lineNumber: 122,
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
      lineNumber: 130,
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
      lineNumber: 138,
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
      lineNumber: 145,
      columnNumber: 9
    }
  }), passwordError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 27
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), __jsx(CheckBoxContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 9
    }
  }, __jsx(CheckBox, {
    type: "checkbox",
    onChange: onChangeChecked,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 11
    }
  }), __jsx("label", {
    htmlFor: CheckBox,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4.")), termError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 23
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4."), __jsx(Button, {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  }, "\uAC00\uC785\uD558\uAE30")));
};

_s(SignupForm, "g5I3QgCS6mKSsVS/Krb5bMmPsks=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWdudXBGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlRpdGxlQ29udGFpbmVyIiwiVGl0bGUiLCJGb3JtIiwiZm9ybSIsIklucHV0IiwiaW5wdXQiLCJDaGVja0JveENvbnRhaW5lciIsIkNoZWNrQm94IiwiQnV0dG9uIiwiYnV0dG9uIiwiRXJyb3JNZXNzYWdlIiwic3BhbiIsIlNpZ251cEZvcm0iLCJ1c2VJbnB1dCIsImVtYWlsIiwib25DaGFuZ2VFbWFpbCIsIm5pY2tuYW1lIiwib25DaGFuZ2VOaWNrbmFtZSIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsInVzZVN0YXRlIiwidmVyaWZ5UGFzc3dvcmQiLCJzZXRWZXJpZnlQYXNzd29yZCIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwib25DaGFuZ2VWZXJpZnlQYXNzd29yZCIsInVzZUNhbGxiYWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaXNDaGVja2VkIiwic2V0SXNDaGVja2VkIiwib25DaGFuZ2VDaGVja2VkIiwiY2hlY2tlZCIsInRlcm0iLCJvblNpZ251cFN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRlcm1FcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEscUtBQWY7S0FBTUYsUztBQVlOLElBQU1HLGNBQWMsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSx1RUFBcEI7TUFBTUMsYztBQU9OLElBQU1DLEtBQUssR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxxREFBWDtNQUFNRSxLO0FBTU4sSUFBTUMsSUFBSSxHQUFHSix5REFBTSxDQUFDSyxJQUFW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QUE7TUFBQTtJQUFBO0VBQUEsd0RBRkYsQ0FoQ0YsRUFvQ0dnQyxTQUFTLElBQUksTUFBQyxZQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsMkVBcENoQixFQXFDRSxNQUFDLE1BQUQ7SUFBUSxJQUFJLEVBQUMsUUFBYjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDhCQXJDRixDQUpGLENBREY7QUE4Q0QsQ0ExRUQ7O0dBQU0zQixVO1VBQzJCQyx1RCxFQUNNQSx1RCxFQUNBQSx1RDs7O09BSGpDRCxVO0FBNEVTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWdudXAuM2ZjMGNiODIwZmQwMzRhOTM2ZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgdXNlSW5wdXQgZnJvbSAnLi4vaG9va3MvdXNlSW5wdXQnO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMzAlO1xyXG4gIGhlaWdodDogNzUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDgwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICBhbGw6IHVuc2V0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2hlY2tCb3hDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IENoZWNrQm94ID0gc3R5bGVkLmlucHV0YGA7XHJcblxyXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGFsbDogdW5zZXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogODUlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwYWRkaW5nOiA4cHggMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg2NGFiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBFcnJvck1lc3NhZ2UgPSBzdHlsZWQuc3BhbmBcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbmA7XHJcblxyXG5jb25zdCBTaWdudXBGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtlbWFpbCwgb25DaGFuZ2VFbWFpbF0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgY29uc3QgW25pY2tuYW1lLCBvbkNoYW5nZU5pY2tuYW1lXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIG9uQ2hhbmdlUGFzc3dvcmRdID0gdXNlSW5wdXQoJycpO1xyXG5cclxuICBjb25zdCBbdmVyaWZ5UGFzc3dvcmQsIHNldFZlcmlmeVBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmRFcnJvciwgc2V0UGFzc3dvcmRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgb25DaGFuZ2VWZXJpZnlQYXNzd29yZCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBzZXRWZXJpZnlQYXNzd29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRQYXNzd29yZEVycm9yKGUudGFyZ2V0LnZhbHVlICE9PSBwYXNzd29yZCk7XHJcbiAgfSwgW3Bhc3N3b3JkXSk7XHJcblxyXG4gIGNvbnN0IFtpc0NoZWNrZWQsIHNldElzQ2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgb25DaGFuZ2VDaGVja2VkID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldElzQ2hlY2tlZChlLnRhcmdldC5jaGVja2VkKTtcclxuICB9LCBbdGVybV0pO1xyXG5cclxuICBjb25zdCBvblNpZ251cFN1Ym1pdCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAocGFzc3dvcmQgIT09IHZlcmlmeVBhc3N3b3JkKSB7XHJcbiAgICAgIHJldHVybiBzZXRQYXNzd29yZEVycm9yKHRydWUpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc0NoZWNrZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZW1haWwsIG5pY2tuYW1lLCBwYXNzd29yZCApXHJcbiAgfSwgW2VtYWlsLCBwYXNzd29yZCwgdmVyaWZ5UGFzc3dvcmQsIHRlcm1dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxUaXRsZUNvbnRhaW5lcj5cclxuICAgICAgICA8VGl0bGU+U2lnbnVwPC9UaXRsZT5cclxuICAgICAgPC9UaXRsZUNvbnRhaW5lcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU2lnbnVwU3VibWl0fT5cclxuICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICAgIG5hbWU9XCJ1c2VyLWVtYWlsXCJcclxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfT5cclxuICAgICAgICA8L0lucHV0PlxyXG4gICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJ1c2VyLW5pY2tuYW1lXCJcclxuICAgICAgICAgIHZhbHVlPXtuaWNrbmFtZX1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5pY2tuYW1lXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2tuYW1lfT5cclxuICAgICAgICA8L0lucHV0PlxyXG4gICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfT5cclxuICAgICAgICA8L0lucHV0PlxyXG4gICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBuYW1lPVwidmVyaWZ5LXBhc3N3b3JkXCJcclxuICAgICAgICAgIHZhbHVlPXt2ZXJpZnlQYXNzd29yZH1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVmVyaWZ5IFBhc3N3b3JkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVZlcmlmeVBhc3N3b3JkfT5cclxuICAgICAgICA8L0lucHV0PlxyXG4gICAgICAgIHtwYXNzd29yZEVycm9yICYmIDxFcnJvck1lc3NhZ2U+67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuPC9FcnJvck1lc3NhZ2U+fVxyXG4gICAgICAgIDxDaGVja0JveENvbnRhaW5lcj5cclxuICAgICAgICAgIDxDaGVja0JveCB0eXBlPVwiY2hlY2tib3hcIiBvbkNoYW5nZT17b25DaGFuZ2VDaGVja2VkfSAvPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e0NoZWNrQm94fT7slb3qtIDsl5Ag64+Z7J2Y7ZWp64uI64ukLjwvbGFiZWw+XHJcbiAgICAgICAgPC9DaGVja0JveENvbnRhaW5lcj5cclxuICAgICAgICB7dGVybUVycm9yICYmIDxFcnJvck1lc3NhZ2U+7JW96rSA7JeQIOuPmeydmO2VmOyFlOyVvCDtlanri4jri6QuPC9FcnJvck1lc3NhZ2U+fVxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPuqwgOyehe2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0NvbnRhaW5lcj4gIFxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==