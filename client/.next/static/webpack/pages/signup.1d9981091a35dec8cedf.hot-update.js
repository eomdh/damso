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
  }, [term]);
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
      lineNumber: 119,
      columnNumber: 5
    }
  }, __jsx(TitleContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, "Signup")), __jsx(Form, {
    onSubmit: onSignupSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
      lineNumber: 124,
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
      lineNumber: 132,
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
      lineNumber: 140,
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
      lineNumber: 147,
      columnNumber: 9
    }
  }), passwordError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 27
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), __jsx(CheckBoxContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, __jsx(CheckBox, {
    type: "checkbox",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }), __jsx("label", {
    htmlFor: CheckBox,
    onChange: onChangeTerm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4.")), termError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 23
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4."), __jsx(Button, {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWdudXBGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlRpdGxlQ29udGFpbmVyIiwiVGl0bGUiLCJGb3JtIiwiZm9ybSIsIklucHV0IiwiaW5wdXQiLCJDaGVja0JveENvbnRhaW5lciIsIkNoZWNrQm94IiwiQnV0dG9uIiwiYnV0dG9uIiwiRXJyb3JNZXNzYWdlIiwic3BhbiIsIlNpZ251cEZvcm0iLCJ1c2VJbnB1dCIsImVtYWlsIiwib25DaGFuZ2VFbWFpbCIsIm5pY2tuYW1lIiwib25DaGFuZ2VOaWNrbmFtZSIsInBhc3N3b3JkIiwib25DaGFuZ2VQYXNzd29yZCIsInVzZVN0YXRlIiwidmVyaWZ5UGFzc3dvcmQiLCJzZXRWZXJpZnlQYXNzd29yZCIsInBhc3N3b3JkRXJyb3IiLCJzZXRQYXNzd29yZEVycm9yIiwib25DaGFuZ2VWZXJpZnlQYXNzd29yZCIsInVzZUNhbGxiYWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwidGVybSIsInNldFRlcm0iLCJ0ZXJtRXJyb3IiLCJzZXRUZXJtRXJyb3IiLCJvbkNoYW5nZVRlcm0iLCJjaGVja2VkIiwib25TaWdudXBTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLHFLQUFmO0tBQU1GLFM7QUFZTixJQUFNRyxjQUFjLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsdUVBQXBCO01BQU1DLGM7QUFPTixJQUFNQyxLQUFLLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEscURBQVg7TUFBTUUsSztBQU1OLElBQU1DLElBQUksR0FBR0oseURBQU0sQ0FBQ0ssSUFBVjtFQUFB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QyxVQUFmO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixFQUVFO0lBQU8sT0FBTyxFQUFFaEIsUUFBaEI7SUFBMEIsUUFBUSxFQUFFMkIsWUFBcEM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSx3REFGRixDQWhDRixFQW9DR0YsU0FBUyxJQUFJLE1BQUMsWUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLDJFQXBDaEIsRUFxQ0UsTUFBQyxNQUFEO0lBQVEsSUFBSSxFQUFDLFFBQWI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSw4QkFyQ0YsQ0FKRixDQURGO0FBOENELENBNUVEOztHQUFNcEIsVTtVQUMyQkMsdUQsRUFDTUEsdUQsRUFDQUEsdUQ7OztPQUhqQ0QsVTtBQThFU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbnVwLjFkOTk4MTA5MWEzNWRlYzhjZWRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDMwJTtcclxuICBoZWlnaHQ6IDc1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCA4MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlID0gc3R5bGVkLmRpdmBcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBjb2xvcjogIzIxMjUyOTtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDgwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgYWxsOiB1bnNldDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENoZWNrQm94Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBDaGVja0JveCA9IHN0eWxlZC5pbnB1dGBgO1xyXG5cclxuY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBhbGw6IHVuc2V0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4NjRhYjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAwLjk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRXJyb3JNZXNzYWdlID0gc3R5bGVkLnNwYW5gXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogcmVkO1xyXG5gO1xyXG5cclxuY29uc3QgU2lnbnVwRm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBbZW1haWwsIG9uQ2hhbmdlRW1haWxdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFtuaWNrbmFtZSwgb25DaGFuZ2VOaWNrbmFtZV0gPSB1c2VJbnB1dCgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBvbkNoYW5nZVBhc3N3b3JkXSA9IHVzZUlucHV0KCcnKTtcclxuXHJcbiAgY29uc3QgW3ZlcmlmeVBhc3N3b3JkLCBzZXRWZXJpZnlQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkRXJyb3IsIHNldFBhc3N3b3JkRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlVmVyaWZ5UGFzc3dvcmQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0VmVyaWZ5UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0UGFzc3dvcmRFcnJvcihlLnRhcmdldC52YWx1ZSAhPT0gcGFzc3dvcmQpO1xyXG4gIH0sIFtwYXNzd29yZF0pO1xyXG5cclxuICBjb25zdCBbdGVybSwgc2V0VGVybV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Rlcm1FcnJvciwgc2V0VGVybUVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkNoYW5nZVRlcm0gPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgc2V0VGVybShlLnRhcmdldC5jaGVja2VkKTtcclxuICAgIHNldFRlcm1FcnJvcihmYWxzZSk7XHJcbiAgfSwgW3Rlcm1dKTtcclxuXHJcbiAgY29uc3Qgb25TaWdudXBTdWJtaXQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHBhc3N3b3JkICE9PSB2ZXJpZnlQYXNzd29yZCkge1xyXG4gICAgICByZXR1cm4gc2V0UGFzc3dvcmRFcnJvcih0cnVlKTtcclxuICAgIH1cclxuICAgIGlmICghdGVybSkge1xyXG4gICAgICByZXR1cm4gc2V0VGVybUVycm9yKHRydWUpO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZW1haWwsIG5pY2tuYW1lLCBwYXNzd29yZCApXHJcbiAgfSwgW2VtYWlsLCBwYXNzd29yZCwgdmVyaWZ5UGFzc3dvcmQsIHRlcm1dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxUaXRsZUNvbnRhaW5lcj5cclxuICAgICAgICA8VGl0bGU+U2lnbnVwPC9UaXRsZT5cclxuICAgICAgPC9UaXRsZUNvbnRhaW5lcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU2lnbnVwU3VibWl0fT5cclxuICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcclxuICAgICAgICAgIG5hbWU9XCJ1c2VyLWVtYWlsXCJcclxuICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUVtYWlsfT5cclxuICAgICAgICA8L0lucHV0PlxyXG4gICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJ1c2VyLW5pY2tuYW1lXCJcclxuICAgICAgICAgIHZhbHVlPXtuaWNrbmFtZX1cclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5pY2tuYW1lXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZU5pY2tuYW1lfT5cclxuICAgICAgICA8L0lucHV0PlxyXG4gICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBuYW1lPVwidXNlci1wYXNzd29yZFwiXHJcbiAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVBhc3N3b3JkfT5cclxuICAgICAgICA8L0lucHV0PlxyXG4gICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBuYW1lPVwidmVyaWZ5LXBhc3N3b3JkXCJcclxuICAgICAgICAgIHZhbHVlPXt2ZXJpZnlQYXNzd29yZH1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVmVyaWZ5IFBhc3N3b3JkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVZlcmlmeVBhc3N3b3JkfT5cclxuICAgICAgICA8L0lucHV0PlxyXG4gICAgICAgIHtwYXNzd29yZEVycm9yICYmIDxFcnJvck1lc3NhZ2U+67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuPC9FcnJvck1lc3NhZ2U+fVxyXG4gICAgICAgIDxDaGVja0JveENvbnRhaW5lcj5cclxuICAgICAgICAgIDxDaGVja0JveCB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e0NoZWNrQm94fSBvbkNoYW5nZT17b25DaGFuZ2VUZXJtfT7slb3qtIDsl5Ag64+Z7J2Y7ZWp64uI64ukLjwvbGFiZWw+XHJcbiAgICAgICAgPC9DaGVja0JveENvbnRhaW5lcj5cclxuICAgICAgICB7dGVybUVycm9yICYmIDxFcnJvck1lc3NhZ2U+7JW96rSA7JeQIOuPmeydmO2VmOyFlOyVvCDtlanri4jri6QuPC9FcnJvck1lc3NhZ2U+fVxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiPuqwgOyehe2VmOq4sDwvQnV0dG9uPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0NvbnRhaW5lcj4gIFxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ251cEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==