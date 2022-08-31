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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useInput */ "./hooks/useInput.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\components\\SignupForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "SignupForm__Container",
  componentId: "sc-zvqt41-0"
})(["width:450px;height:530px;background-color:#e9ecef;border-radius:20px;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 80px;box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);"]);
_c = Container;
var TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "SignupForm__TitleContainer",
  componentId: "sc-zvqt41-1"
})(["width:100%;display:flex;justify-content:center;margin-top:30px;"]);
_c2 = TitleContainer;
var Title = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "SignupForm__Title",
  componentId: "sc-zvqt41-2"
})(["font-weight:600;font-size:27px;color:#212529;"]);
_c3 = Title;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].form.withConfig({
  displayName: "SignupForm__Form",
  componentId: "sc-zvqt41-3"
})(["width:100%;height:80%;display:flex;flex-direction:column;align-items:center;margin-top:30px;"]);
_c4 = Form;
var Input = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].input.withConfig({
  displayName: "SignupForm__Input",
  componentId: "sc-zvqt41-4"
})(["all:unset;border-radius:10px;width:85%;height:30px;padding:8px 15px;background-color:white;opacity:0.8;margin-bottom:25px;&:hover,&:focus{opacity:1;}"]);
_c5 = Input;
var CheckBoxContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "SignupForm__CheckBoxContainer",
  componentId: "sc-zvqt41-5"
})(["display:flex;width:85%;justify-content:flex-start;margin-top:-10px;margin-bottom:20px;"]);
_c6 = CheckBoxContainer;
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].button.withConfig({
  displayName: "SignupForm__SubmitButton",
  componentId: "sc-zvqt41-6"
})(["all:unset;border-radius:10px;width:85%;height:30px;padding:8px 15px;background-color:#1864ab;color:white;font-weight:700;font-size:17px;text-align:center;cursor:pointer;opacity:0.9;outline:none;&:hover{opacity:1;}"]);
_c7 = SubmitButton;
var ErrorMessage = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span.withConfig({
  displayName: "SignupForm__ErrorMessage",
  componentId: "sc-zvqt41-7"
})(["margin-top:-10px;margin-bottom:15px;color:red;"]);
_c8 = ErrorMessage;

var SignupForm = function SignupForm() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      signUpDone = _useSelector.signUpDone,
      signUpError = _useSelector.signUpError;

  var _useInput = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(''),
      _useInput2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput, 2),
      email = _useInput2[0],
      onChangeEmail = _useInput2[1];

  var _useInput3 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(''),
      _useInput4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput3, 2),
      nickname = _useInput4[0],
      onChangeNickname = _useInput4[1];

  var _useInput5 = Object(_hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"])(''),
      _useInput6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useInput5, 2),
      password = _useInput6[0],
      onChangePassword = _useInput6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (signUpDone) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    }
  }, [signUpDone]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

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

    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["SIGN_UP_REQUEST"],
      data: {
        email: email,
        password: password,
        nickname: nickname
      }
    });
    console.log(email, password, nickname);
  }, [email, password, verifyPassword, term]);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 5
    }
  }, __jsx(TitleContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }
  }, __jsx(Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, "Signup")), __jsx(Form, {
    onSubmit: onSignupSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
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
      lineNumber: 145,
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
      lineNumber: 153,
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
      lineNumber: 161,
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
      lineNumber: 168,
      columnNumber: 9
    }
  }), __jsx(CheckBoxContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, __jsx("input", {
    type: "checkbox",
    value: term,
    onChange: onChangeTerm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }), __jsx("label", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD569\uB2C8\uB2E4.")), passwordError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 27
    }
  }, "\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."), termError && __jsx(ErrorMessage, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 23
    }
  }, "\uC57D\uAD00\uC5D0 \uB3D9\uC758\uD558\uC154\uC57C \uD569\uB2C8\uB2E4."), __jsx(SubmitButton, {
    type: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 9
    }
  }, "SIGNUP")));
};

_s(SignupForm, "yUOj0kKloz4rAYIz1JKLfJ3Re7w=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_5__["default"]];
});

_c9 = SignupForm;
/* harmony default export */ __webpack_exports__["default"] = (SignupForm);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "TitleContainer");
$RefreshReg$(_c3, "Title");
$RefreshReg$(_c4, "Form");
$RefreshReg$(_c5, "Input");
$RefreshReg$(_c6, "CheckBoxContainer");
$RefreshReg$(_c7, "SubmitButton");
$RefreshReg$(_c8, "ErrorMessage");
$RefreshReg$(_c9, "SignupForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWdudXBGb3JtLmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlRpdGxlQ29udGFpbmVyIiwiVGl0bGUiLCJGb3JtIiwiZm9ybSIsIklucHV0IiwiaW5wdXQiLCJDaGVja0JveENvbnRhaW5lciIsIlN1Ym1pdEJ1dHRvbiIsImJ1dHRvbiIsIkVycm9yTWVzc2FnZSIsInNwYW4iLCJTaWdudXBGb3JtIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwidXNlSW5wdXQiLCJlbWFpbCIsIm9uQ2hhbmdlRW1haWwiLCJuaWNrbmFtZSIsIm9uQ2hhbmdlTmlja25hbWUiLCJwYXNzd29yZCIsIm9uQ2hhbmdlUGFzc3dvcmQiLCJ1c2VFZmZlY3QiLCJSb3V0ZXIiLCJwdXNoIiwiYWxlcnQiLCJ1c2VTdGF0ZSIsInZlcmlmeVBhc3N3b3JkIiwic2V0VmVyaWZ5UGFzc3dvcmQiLCJwYXNzd29yZEVycm9yIiwic2V0UGFzc3dvcmRFcnJvciIsIm9uQ2hhbmdlVmVyaWZ5UGFzc3dvcmQiLCJ1c2VDYWxsYmFjayIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRlcm0iLCJzZXRUZXJtIiwidGVybUVycm9yIiwic2V0VGVybUVycm9yIiwib25DaGFuZ2VUZXJtIiwiY2hlY2tlZCIsIm9uU2lnbnVwU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ0eXBlIiwiU0lHTl9VUF9SRVFVRVNUIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSw0T0FBZjtLQUFNRixTO0FBYU4sSUFBTUcsY0FBYyxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLHVFQUFwQjtNQUFNQyxjO0FBT04sSUFBTUMsS0FBSyxHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLHFEQUFYO01BQU1FLEs7QUFNTixJQUFNQyxJQUFJLEdBQUdKLHlEQUFNLENBQUNLLElBQVY7RUFBQTtFQUFBO0FBQUEsb0dBQVY7TUFBTUQsSTtBQVNOLElBQU1FLEtBQUssR0FBR04seURBQU0sQ0FBQ08sS0FBVjtFQUFBO0VBQUE7QUFBQSw2SkFBWDtNQUFNRCxLO0FBZU4sSUFBTUUsaUJBQWlCLEdBQUdSLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsOEZBQXZCO01BQU1PLGlCO0FBUU4sSUFBTUMsWUFBWSxHQUFHVCx5REFBTSxDQUFDVSxNQUFWO0VBQUE7RUFBQTtBQUFBLDZOQUFsQjtNQUFNRCxZO0FBbUJOLElBQU1FLFlBQVksR0FBR1gseURBQU0sQ0FBQ1ksSUFBVjtFQUFBO0VBQUE7QUFBQSxzREFBbEI7TUFBTUQsWTs7QUFNTixJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0VBQUE7O0VBQ3ZCLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0VBQ0EsbUJBQW9DQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7SUFBQSxPQUFXQSxLQUFLLENBQUNDLElBQWpCO0VBQUEsQ0FBRCxDQUEvQztFQUFBLElBQVFDLFVBQVIsZ0JBQVFBLFVBQVI7RUFBQSxJQUFvQkMsV0FBcEIsZ0JBQW9CQSxXQUFwQjs7RUFDQSxnQkFBK0JDLCtEQUFRLENBQUMsRUFBRCxDQUF2QztFQUFBO0VBQUEsSUFBT0MsS0FBUDtFQUFBLElBQWNDLGFBQWQ7O0VBQ0EsaUJBQXFDRiwrREFBUSxDQUFDLEVBQUQsQ0FBN0M7RUFBQTtFQUFBLElBQU9HLFFBQVA7RUFBQSxJQUFpQkMsZ0JBQWpCOztFQUNBLGlCQUFxQ0osK0RBQVEsQ0FBQyxFQUFELENBQTdDO0VBQUE7RUFBQSxJQUFPSyxRQUFQO0VBQUEsSUFBaUJDLGdCQUFqQjs7RUFFQUMsdURBQVMsQ0FBQyxZQUFNO0lBQ2QsSUFBSVQsVUFBSixFQUFnQjtNQUNkVSxrREFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtJQUNEO0VBQ0YsQ0FKUSxFQUlOLENBQUNYLFVBQUQsQ0FKTSxDQUFUO0VBTUFTLHVEQUFTLENBQUMsWUFBTTtJQUNkLElBQUlSLFdBQUosRUFBaUI7TUFDZlcsS0FBSyxDQUFDWCxXQUFELENBQUw7SUFDRDtFQUNGLENBSlEsRUFJTixDQUFDQSxXQUFELENBSk0sQ0FBVDs7RUFNQSxnQkFBNENZLHNEQUFRLENBQUMsRUFBRCxDQUFwRDtFQUFBLElBQU9DLGNBQVA7RUFBQSxJQUF1QkMsaUJBQXZCOztFQUNBLGlCQUEwQ0Ysc0RBQVEsQ0FBQyxLQUFELENBQWxEO0VBQUEsSUFBT0csYUFBUDtFQUFBLElBQXNCQyxnQkFBdEI7O0VBQ0EsSUFBTUMsc0JBQXNCLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQ2hETCxpQkFBaUIsQ0FBQ0ssQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBakI7SUFDQUwsZ0JBQWdCLENBQUNHLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFULEtBQW1CZixRQUFwQixDQUFoQjtFQUNELENBSHlDLEVBR3ZDLENBQUNBLFFBQUQsQ0FIdUMsQ0FBMUM7O0VBS0EsaUJBQXdCTSxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7RUFBQSxJQUFPVSxJQUFQO0VBQUEsSUFBYUMsT0FBYjs7RUFDQSxpQkFBa0NYLHNEQUFRLENBQUMsS0FBRCxDQUExQztFQUFBLElBQU9ZLFNBQVA7RUFBQSxJQUFrQkMsWUFBbEI7O0VBQ0EsSUFBTUMsWUFBWSxHQUFHUix5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztJQUN0Q0ksT0FBTyxDQUFDSixDQUFDLENBQUNDLE1BQUYsQ0FBU08sT0FBVixDQUFQO0lBQ0FGLFlBQVksQ0FBQyxLQUFELENBQVo7RUFDRCxDQUgrQixFQUc3QixDQUFDSCxJQUFELENBSDZCLENBQWhDO0VBS0EsSUFBTU0sY0FBYyxHQUFHVix5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztJQUN4Q0EsQ0FBQyxDQUFDVSxjQUFGOztJQUNBLElBQUl2QixRQUFRLEtBQUtPLGNBQWpCLEVBQWlDO01BQy9CLE9BQU9HLGdCQUFnQixDQUFDLElBQUQsQ0FBdkI7SUFDRDs7SUFDRCxJQUFJLENBQUNNLElBQUwsRUFBVztNQUNULE9BQU9HLFlBQVksQ0FBQyxJQUFELENBQW5CO0lBQ0Q7O0lBQ0QvQixRQUFRLENBQUM7TUFDUG9DLElBQUksRUFBRUMsOERBREM7TUFFUEMsSUFBSSxFQUFFO1FBQUU5QixLQUFLLEVBQUxBLEtBQUY7UUFBU0ksUUFBUSxFQUFSQSxRQUFUO1FBQW1CRixRQUFRLEVBQVJBO01BQW5CO0lBRkMsQ0FBRCxDQUFSO0lBSUE2QixPQUFPLENBQUNDLEdBQVIsQ0FBWWhDLEtBQVosRUFBbUJJLFFBQW5CLEVBQTZCRixRQUE3QjtFQUNELENBYmlDLEVBYS9CLENBQUNGLEtBQUQsRUFBUUksUUFBUixFQUFrQk8sY0FBbEIsRUFBa0NTLElBQWxDLENBYitCLENBQWxDO0VBZUEsT0FDRSxNQUFDLFNBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsY0FBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxLQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsWUFERixDQURGLEVBSUUsTUFBQyxJQUFEO0lBQU0sUUFBUSxFQUFFTSxjQUFoQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxLQUFEO0lBQ0UsSUFBSSxFQUFDLE9BRFA7SUFFRSxJQUFJLEVBQUMsWUFGUDtJQUdFLEtBQUssRUFBRTFCLEtBSFQ7SUFJRSxRQUFRLE1BSlY7SUFLRSxXQUFXLEVBQUMsT0FMZDtJQU1FLFFBQVEsRUFBRUMsYUFOWjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsRUFTRSxNQUFDLEtBQUQ7SUFDRSxJQUFJLEVBQUMsTUFEUDtJQUVFLElBQUksRUFBQyxlQUZQO0lBR0UsS0FBSyxFQUFFQyxRQUhUO0lBSUUsUUFBUSxNQUpWO0lBS0UsV0FBVyxFQUFDLFVBTGQ7SUFNRSxRQUFRLEVBQUVDLGdCQU5aO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFURixFQWlCRSxNQUFDLEtBQUQ7SUFDRSxJQUFJLEVBQUMsVUFEUDtJQUVFLElBQUksRUFBQyxlQUZQO0lBR0UsS0FBSyxFQUFFQyxRQUhUO0lBSUUsV0FBVyxFQUFDLFVBSmQ7SUFLRSxRQUFRLEVBQUVDLGdCQUxaO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFqQkYsRUF3QkUsTUFBQyxLQUFEO0lBQ0UsSUFBSSxFQUFDLFVBRFA7SUFFRSxJQUFJLEVBQUMsaUJBRlA7SUFHRSxLQUFLLEVBQUVNLGNBSFQ7SUFJRSxXQUFXLEVBQUMsaUJBSmQ7SUFLRSxRQUFRLEVBQUVJLHNCQUxaO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUF4QkYsRUErQkUsTUFBQyxpQkFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0U7SUFBTyxJQUFJLEVBQUMsVUFBWjtJQUF1QixLQUFLLEVBQUVLLElBQTlCO0lBQW9DLFFBQVEsRUFBRUksWUFBOUM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURGLEVBRUU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSx3REFGRixDQS9CRixFQW1DR1gsYUFBYSxJQUFJLE1BQUMsWUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLHVGQW5DcEIsRUFvQ0dTLFNBQVMsSUFBSSxNQUFDLFlBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSwyRUFwQ2hCLEVBcUNFLE1BQUMsWUFBRDtJQUFjLElBQUksRUFBQyxRQUFuQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLFlBckNGLENBSkYsQ0FERjtBQThDRCxDQTlGRDs7R0FBTS9CLFU7VUFDYUUsdUQsRUFDbUJDLHVELEVBQ0xLLHVELEVBQ01BLHVELEVBQ0FBLHVEOzs7TUFMakNSLFU7QUFnR1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC45N2VmMThiNDIxZmU5ZTdkMjgwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uL2hvb2tzL3VzZUlucHV0JztcclxuaW1wb3J0IHsgU0lHTl9VUF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA0NTBweDtcclxuICBoZWlnaHQ6IDUzMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDgwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dCA9IHN0eWxlZC5pbnB1dGBcclxuICBhbGw6IHVuc2V0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgcGFkZGluZzogOHB4IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ2hlY2tCb3hDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IFN1Ym1pdEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYWxsOiB1bnNldDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHdpZHRoOiA4NSU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODY0YWI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEVycm9yTWVzc2FnZSA9IHN0eWxlZC5zcGFuYFxyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgY29sb3I6IHJlZDtcclxuYDtcclxuXHJcbmNvbnN0IFNpZ251cEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgc2lnblVwRG9uZSwgc2lnblVwRXJyb3IgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgW2VtYWlsLCBvbkNoYW5nZUVtYWlsXSA9IHVzZUlucHV0KCcnKTtcclxuICBjb25zdCBbbmlja25hbWUsIG9uQ2hhbmdlTmlja25hbWVdID0gdXNlSW5wdXQoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgb25DaGFuZ2VQYXNzd29yZF0gPSB1c2VJbnB1dCgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2lnblVwRG9uZSkge1xyXG4gICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgfVxyXG4gIH0sIFtzaWduVXBEb25lXSk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzaWduVXBFcnJvcikge1xyXG4gICAgICBhbGVydChzaWduVXBFcnJvcik7XHJcbiAgICB9XHJcbiAgfSwgW3NpZ25VcEVycm9yXSk7XHJcblxyXG4gIGNvbnN0IFt2ZXJpZnlQYXNzd29yZCwgc2V0VmVyaWZ5UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwYXNzd29yZEVycm9yLCBzZXRQYXNzd29yZEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkNoYW5nZVZlcmlmeVBhc3N3b3JkID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFZlcmlmeVBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIHNldFBhc3N3b3JkRXJyb3IoZS50YXJnZXQudmFsdWUgIT09IHBhc3N3b3JkKTtcclxuICB9LCBbcGFzc3dvcmRdKTtcclxuXHJcbiAgY29uc3QgW3Rlcm0sIHNldFRlcm1dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFt0ZXJtRXJyb3IsIHNldFRlcm1FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgb25DaGFuZ2VUZXJtID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIHNldFRlcm0oZS50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICBzZXRUZXJtRXJyb3IoZmFsc2UpO1xyXG4gIH0sIFt0ZXJtXSk7XHJcblxyXG4gIGNvbnN0IG9uU2lnbnVwU3VibWl0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChwYXNzd29yZCAhPT0gdmVyaWZ5UGFzc3dvcmQpIHtcclxuICAgICAgcmV0dXJuIHNldFBhc3N3b3JkRXJyb3IodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIXRlcm0pIHtcclxuICAgICAgcmV0dXJuIHNldFRlcm1FcnJvcih0cnVlKTtcclxuICAgIH1cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7IGVtYWlsLCBwYXNzd29yZCwgbmlja25hbWUgfSxcclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQsIG5pY2tuYW1lKTtcclxuICB9LCBbZW1haWwsIHBhc3N3b3JkLCB2ZXJpZnlQYXNzd29yZCwgdGVybV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFRpdGxlQ29udGFpbmVyPlxyXG4gICAgICAgIDxUaXRsZT5TaWdudXA8L1RpdGxlPlxyXG4gICAgICA8L1RpdGxlQ29udGFpbmVyPlxyXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TaWdudXBTdWJtaXR9PlxyXG4gICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxyXG4gICAgICAgICAgbmFtZT1cInVzZXItZW1haWxcIlxyXG4gICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRW1haWx9PlxyXG4gICAgICAgIDwvSW5wdXQ+XHJcbiAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cInVzZXItbmlja25hbWVcIlxyXG4gICAgICAgICAgdmFsdWU9e25pY2tuYW1lfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmlja25hbWVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlTmlja25hbWV9PlxyXG4gICAgICAgIDwvSW5wdXQ+XHJcbiAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIG5hbWU9XCJ1c2VyLXBhc3N3b3JkXCJcclxuICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9PlxyXG4gICAgICAgIDwvSW5wdXQ+XHJcbiAgICAgICAgPElucHV0IFxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIG5hbWU9XCJ2ZXJpZnktcGFzc3dvcmRcIlxyXG4gICAgICAgICAgdmFsdWU9e3ZlcmlmeVBhc3N3b3JkfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJWZXJpZnkgUGFzc3dvcmRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVmVyaWZ5UGFzc3dvcmR9PlxyXG4gICAgICAgIDwvSW5wdXQ+XHJcbiAgICAgICAgPENoZWNrQm94Q29udGFpbmVyPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPXt0ZXJtfSBvbkNoYW5nZT17b25DaGFuZ2VUZXJtfSAvPlxyXG4gICAgICAgICAgPGxhYmVsPuyVveq0gOyXkCDrj5nsnZjtlanri4jri6QuPC9sYWJlbD5cclxuICAgICAgICA8L0NoZWNrQm94Q29udGFpbmVyPlxyXG4gICAgICAgIHtwYXNzd29yZEVycm9yICYmIDxFcnJvck1lc3NhZ2U+67mE67CA67KI7Zi46rCAIOydvOy5mO2VmOyngCDslYrsirXri4jri6QuPC9FcnJvck1lc3NhZ2U+fVxyXG4gICAgICAgIHt0ZXJtRXJyb3IgJiYgPEVycm9yTWVzc2FnZT7slb3qtIDsl5Ag64+Z7J2Y7ZWY7IWU7JW8IO2VqeuLiOuLpC48L0Vycm9yTWVzc2FnZT59XHJcbiAgICAgICAgPFN1Ym1pdEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U0lHTlVQPC9TdWJtaXRCdXR0b24+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvQ29udGFpbmVyPiAgXHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lnbnVwRm9ybTsiXSwic291cmNlUm9vdCI6IiJ9