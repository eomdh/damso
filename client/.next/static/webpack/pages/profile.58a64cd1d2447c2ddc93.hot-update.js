webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ProfileImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfileImage */ "./components/ProfileImage.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
/* harmony import */ var _IntroduceEditForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IntroduceEditForm */ "./components/IntroduceEditForm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\UserProfile.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserProfile__Container",
  componentId: "sc-bk9zf9-0"
})(["width:700px;height:400px;background-color:white;border-radius:20px;display:flex;flex-direction:column;align-items:center;text-align:center;box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);"]);
_c = Container;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserProfile__ProfileImageContainer",
  componentId: "sc-bk9zf9-1"
})(["margin-top:50px;margin-bottom:-40px;width:150px;height:150px;border-radius:70%;overflow:hidden;"]);
_c2 = ProfileImageContainer;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "UserProfile__Form",
  componentId: "sc-bk9zf9-2"
})(["margin-left:100px;"]);
_c3 = Form;
var PlusIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserProfile__PlusIconContainer",
  componentId: "sc-bk9zf9-3"
})(["font-size:27px;color:#1864ab;opacity:0.6;cursor:pointer;:hover{opacity:1;}"]);
_c4 = PlusIconContainer;
var NicknameContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserProfile__NicknameContainer",
  componentId: "sc-bk9zf9-4"
})(["width:100%;display:flex;justify-content:center;margin-top:15px;margin-bottom:5px;"]);
_c5 = NicknameContainer;
var Nickname = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserProfile__Nickname",
  componentId: "sc-bk9zf9-5"
})(["font-weight:600;font-size:25px;color:#212529;"]);
_c6 = Nickname;
var IntroduceContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserProfile__IntroduceContainer",
  componentId: "sc-bk9zf9-6"
})(["display:flex;justify-content:center;"]);
_c7 = IntroduceContainer;
var Introduce = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserProfile__Introduce",
  componentId: "sc-bk9zf9-7"
})(["margin-right:7px;font-weight:500;font-size:18px;color:#868e96;"]);
_c8 = Introduce;
var PencileIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserProfile__PencileIconContainer",
  componentId: "sc-bk9zf9-8"
})(["font-size:15px;margin-top:2px;opacity:0.6;cursor:pointer;:hover{opacity:1;}"]);
_c9 = PencileIconContainer;
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "UserProfile__Button",
  componentId: "sc-bk9zf9-9"
})(["all:unset;border-radius:10px;width:20%;height:30px;padding:8px 15px;margin-top:25px;background-color:#1864ab;color:white;font-weight:700;font-size:17px;text-align:center;cursor:pointer;opacity:0.8;outline:none;&:hover{opacity:1;}"]);
_c10 = Button;

var UserProfile = function UserProfile(_ref) {
  _s();

  var me = _ref.me;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      onClickEditForm = _useState[0],
      setOnClickEditForm = _useState[1];

  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);
  var onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    var imageFormData = new FormData();
    [].forEach.call(e.target.files, function (f) {
      imageFormData.append("image", f);
    });
    console.log(imageFormData);
  });
  var onSubmitProfileImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {}, []);
  var onSubmitIntroduce = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {}, []);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 5
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  })), __jsx(Form, {
    onSubmit: onSubmitProfileImage,
    encType: "multipart/form-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "file",
    multiple: true,
    hidden: true,
    ref: imageInput,
    onChange: onChangeImages,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }), __jsx(PlusIconContainer, {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsPlusCircleFill"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }))), __jsx(NicknameContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, me.nickname)), onClickEditForm ? __jsx(_IntroduceEditForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }) : __jsx(IntroduceContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, __jsx(Introduce, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }, me.introduce), __jsx(PencileIconContainer, {
    onClick: setOnClickEditForm(function (prev) {
      return !prev;
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsPencilFill"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  }))), __jsx(Button, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }
  }, "\uB0B4 \uAC8C\uC2DC\uAE00"));
};

_s(UserProfile, "P6mACE1KS+Tm7ZfvW4bK5jOQ9J4=");

_c11 = UserProfile;
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "ProfileImageContainer");
$RefreshReg$(_c3, "Form");
$RefreshReg$(_c4, "PlusIconContainer");
$RefreshReg$(_c5, "NicknameContainer");
$RefreshReg$(_c6, "Nickname");
$RefreshReg$(_c7, "IntroduceContainer");
$RefreshReg$(_c8, "Introduce");
$RefreshReg$(_c9, "PencileIconContainer");
$RefreshReg$(_c10, "Button");
$RefreshReg$(_c11, "UserProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJQcm9maWxlSW1hZ2VDb250YWluZXIiLCJGb3JtIiwiZm9ybSIsIlBsdXNJY29uQ29udGFpbmVyIiwiTmlja25hbWVDb250YWluZXIiLCJOaWNrbmFtZSIsIkludHJvZHVjZUNvbnRhaW5lciIsIkludHJvZHVjZSIsIlBlbmNpbGVJY29uQ29udGFpbmVyIiwiQnV0dG9uIiwiYnV0dG9uIiwiVXNlclByb2ZpbGUiLCJtZSIsInVzZVN0YXRlIiwib25DbGlja0VkaXRGb3JtIiwic2V0T25DbGlja0VkaXRGb3JtIiwiaW1hZ2VJbnB1dCIsInVzZVJlZiIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsImNsaWNrIiwib25DaGFuZ2VJbWFnZXMiLCJlIiwiaW1hZ2VGb3JtRGF0YSIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsImNhbGwiLCJ0YXJnZXQiLCJmaWxlcyIsImYiLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXRQcm9maWxlSW1hZ2UiLCJvblN1Ym1pdEludHJvZHVjZSIsIm5pY2tuYW1lIiwiaW50cm9kdWNlIiwicHJldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLHNOQUFmO0tBQU1GLFM7QUFZTixJQUFNRyxxQkFBcUIsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSx1R0FBM0I7TUFBTUMscUI7QUFTTixJQUFNQyxJQUFJLEdBQUdILHlEQUFNLENBQUNJLElBQVY7RUFBQTtFQUFBO0FBQUEsMEJBQVY7TUFBTUQsSTtBQUlOLElBQU1FLGlCQUFpQixHQUFHTCx5REFB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O0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBWU4sRUFBRSxDQUFDd0IsUUFBZixDQURGLENBaEJGLEVBbUJHdEIsZUFBZSxHQUNkLE1BQUMsMERBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURjLEdBR2QsTUFBQyxrQkFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxTQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBYUYsRUFBRSxDQUFDeUIsU0FBaEIsQ0FERixFQUVFLE1BQUMsb0JBQUQ7SUFBc0IsT0FBTyxFQUFFdEIsa0JBQWtCLENBQUMsVUFBQXVCLElBQUk7TUFBQSxPQUFJLENBQUNBLElBQUw7SUFBQSxDQUFMLENBQWpEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLDJEQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixDQUZGLENBdEJKLEVBNEJFLE1BQUMsTUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLCtCQTVCRixDQURGO0FBa0NELENBNUREOztHQUFNM0IsVzs7T0FBQUEsVztBQThEU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS41OGE2NGNkMWQyNDQ3YzJkZGM5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGUgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUHJvZmlsZUltYWdlIGZyb20gJy4vUHJvZmlsZUltYWdlJztcclxuaW1wb3J0IHsgQnNQbHVzQ2lyY2xlRmlsbCwgQnNQZW5jaWxGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xyXG5pbXBvcnQgSW50cm9kdWNlRWRpdEZvcm0gZnJvbSAnLi9JbnRyb2R1Y2VFZGl0Rm9ybSc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA3MDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG5gO1xyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC00MHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDcwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuYDtcclxuXHJcbmNvbnN0IFBsdXNJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgY29sb3I6ICMxODY0YWI7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICA6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBOaWNrbmFtZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuYDtcclxuXHJcbmNvbnN0IE5pY2tuYW1lID0gc3R5bGVkLmRpdmBcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogIzIxMjUyOTtcclxuYDtcclxuXHJcbmNvbnN0IEludHJvZHVjZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEludHJvZHVjZSA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICM4NjhlOTY7XHJcbmA7XHJcblxyXG5jb25zdCBQZW5jaWxlSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIDpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYWxsOiB1bnNldDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4NjRhYjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVXNlclByb2ZpbGUgPSAoeyBtZSB9KSA9PiB7XHJcbiAgY29uc3QgW29uQ2xpY2tFZGl0Rm9ybSwgc2V0T25DbGlja0VkaXRGb3JtXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcbiAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIGYgPT4ge1xyXG4gICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGYpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coaW1hZ2VGb3JtRGF0YSk7XHJcbiAgfSk7XHJcblxyXG5cclxuICBjb25zdCBvblN1Ym1pdFByb2ZpbGVJbWFnZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdEludHJvZHVjZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuXHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFByb2ZpbGVJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICA8UHJvZmlsZUltYWdlIC8+XHJcbiAgICAgIDwvUHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXRQcm9maWxlSW1hZ2V9IGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICByZWY9e2ltYWdlSW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8UGx1c0ljb25Db250YWluZXIgb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT5cclxuICAgICAgICAgIDxCc1BsdXNDaXJjbGVGaWxsIC8+XHJcbiAgICAgICAgPC9QbHVzSWNvbkNvbnRhaW5lcj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICA8Tmlja25hbWVDb250YWluZXI+XHJcbiAgICAgICAgPE5pY2tuYW1lPnsgbWUubmlja25hbWUgfTwvTmlja25hbWU+XHJcbiAgICAgIDwvTmlja25hbWVDb250YWluZXI+XHJcbiAgICAgIHtvbkNsaWNrRWRpdEZvcm0gXHJcbiAgICAgID8gPEludHJvZHVjZUVkaXRGb3JtIC8+XHJcbiAgICAgIDogKFxyXG4gICAgICAgIDxJbnRyb2R1Y2VDb250YWluZXI+XHJcbiAgICAgICAgICA8SW50cm9kdWNlPnsgbWUuaW50cm9kdWNlIH08L0ludHJvZHVjZT5cclxuICAgICAgICAgIDxQZW5jaWxlSWNvbkNvbnRhaW5lciBvbkNsaWNrPXtzZXRPbkNsaWNrRWRpdEZvcm0ocHJldiA9PiAhcHJldil9PlxyXG4gICAgICAgICAgICA8QnNQZW5jaWxGaWxsIC8+XHJcbiAgICAgICAgICA8L1BlbmNpbGVJY29uQ29udGFpbmVyPlxyXG4gICAgICAgIDwvSW50cm9kdWNlQ29udGFpbmVyPil9XHJcbiAgICAgIDxCdXR0b24+XHJcbiAgICAgICAg64K0IOqyjOyLnOq4gFxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlOyJdLCJzb3VyY2VSb290IjoiIn0=