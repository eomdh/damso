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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
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
})(["display:flex;justify-content:center;margin-bottom:30px;"]);
_c7 = IntroduceContainer;
var Introduce = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserProfile__Introduce",
  componentId: "sc-bk9zf9-7"
})(["margin-right:7px;font-weight:500;font-size:18px;color:#868e96;"]);
_c8 = Introduce;
var PencilIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserProfile__PencilIconContainer",
  componentId: "sc-bk9zf9-8"
})(["font-size:15px;margin-top:2px;opacity:0.6;cursor:pointer;:hover{opacity:1;}"]);
_c9 = PencilIconContainer;
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "UserProfile__Button",
  componentId: "sc-bk9zf9-9"
})(["all:unset;border-radius:10px;width:20%;height:30px;padding:8px 15px;background-color:#1864ab;color:white;font-weight:700;font-size:17px;text-align:center;cursor:pointer;opacity:0.8;outline:none;&:hover{opacity:1;}"]);
_c10 = Button;

var UserProfile = function UserProfile(_ref) {
  _s();

  var me = _ref.me;
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      onEditForm = _useState[0],
      setOnEditForm = _useState[1];

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
  var onClickEditForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setOnEditForm(function (prev) {
      return !prev;
    });
  }, [onEditForm]);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();
  }, []);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 5
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 7
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  })), __jsx(Form, {
    onSubmit: onSubmit,
    encType: "multipart/form-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
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
      lineNumber: 132,
      columnNumber: 9
    }
  }), id && __jsx(PlusIconContainer, {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsPlusCircleFill"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }))), __jsx(NicknameContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 9
    }
  }, me.nickname)), onEditForm ? __jsx(_IntroduceEditForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setOnEditForm: setOnEditForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }) : __jsx(IntroduceContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, __jsx(Introduce, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, me.introduce), id && __jsx(PencilIconContainer, {
    onClick: onClickEditForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsPencilFill"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }))), __jsx(Button, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }, "\uB0B4 \uAC8C\uC2DC\uAE00"));
};

_s(UserProfile, "x7QUrHOdB3VSWiBQwR8MDeX5BOA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
});

_c11 = UserProfile;
UserProfile.propType = {
  me: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
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
$RefreshReg$(_c9, "PencilIconContainer");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJQcm9maWxlSW1hZ2VDb250YWluZXIiLCJGb3JtIiwiZm9ybSIsIlBsdXNJY29uQ29udGFpbmVyIiwiTmlja25hbWVDb250YWluZXIiLCJOaWNrbmFtZSIsIkludHJvZHVjZUNvbnRhaW5lciIsIkludHJvZHVjZSIsIlBlbmNpbEljb25Db250YWluZXIiLCJCdXR0b24iLCJidXR0b24iLCJVc2VyUHJvZmlsZSIsIm1lIiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInVzZVN0YXRlIiwib25FZGl0Rm9ybSIsInNldE9uRWRpdEZvcm0iLCJpbWFnZUlucHV0IiwidXNlUmVmIiwib25DbGlja0ltYWdlVXBsb2FkIiwidXNlQ2FsbGJhY2siLCJjdXJyZW50IiwiY2xpY2siLCJvbkNoYW5nZUltYWdlcyIsImUiLCJpbWFnZUZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiY2FsbCIsInRhcmdldCIsImZpbGVzIiwiZiIsImFwcGVuZCIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrRWRpdEZvcm0iLCJwcmV2Iiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIm5pY2tuYW1lIiwiaW50cm9kdWNlIiwicHJvcFR5cGUiLCJQcm9wVHlwZSIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxzTkFBZjtLQUFNRixTO0FBWU4sSUFBTUcscUJBQXFCLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsdUdBQTNCO01BQU1DLHFCO0FBU04sSUFBTUMsSUFBSSxHQUFH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QyxFQUFFLEVBQUVpQyxpREFBUSxDQUFDQyxNQUFULENBQWdCQztBQURDLENBQXZCO0FBSWVwQywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjAwNjgwMTA4MjYxZjg3ZWZiOTUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9maWxlSW1hZ2UgZnJvbSAnLi9Qcm9maWxlSW1hZ2UnO1xyXG5pbXBvcnQgeyBCc1BsdXNDaXJjbGVGaWxsLCBCc1BlbmNpbEZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XHJcbmltcG9ydCBJbnRyb2R1Y2VFZGl0Rm9ybSBmcm9tICcuL0ludHJvZHVjZUVkaXRGb3JtJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA3MDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG5gO1xyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC00MHB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDcwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuYDtcclxuXHJcbmNvbnN0IFBsdXNJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgY29sb3I6ICMxODY0YWI7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICA6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBOaWNrbmFtZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuYDtcclxuXHJcbmNvbnN0IE5pY2tuYW1lID0gc3R5bGVkLmRpdmBcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogIzIxMjUyOTtcclxuYDtcclxuXHJcbmNvbnN0IEludHJvZHVjZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSW50cm9kdWNlID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzg2OGU5NjtcclxuYDtcclxuXHJcbmNvbnN0IFBlbmNpbEljb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICA6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGFsbDogdW5zZXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogMjAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwYWRkaW5nOiA4cHggMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg2NGFiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBVc2VyUHJvZmlsZSA9ICh7IG1lIH0pID0+IHtcclxuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG4gIGNvbnN0IFtvbkVkaXRGb3JtLCBzZXRPbkVkaXRGb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKGUudGFyZ2V0LmZpbGVzLCBmID0+IHtcclxuICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBmKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGltYWdlRm9ybURhdGEpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvbkNsaWNrRWRpdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRPbkVkaXRGb3JtKHByZXYgPT4gIXByZXYpO1xyXG4gIH0sIFtvbkVkaXRGb3JtXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8UHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgIDxQcm9maWxlSW1hZ2UgLz5cclxuICAgICAgPC9Qcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXsgb25TdWJtaXQgfSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgcmVmPXtpbWFnZUlucHV0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW1hZ2VzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgeyBpZCAmJiBcclxuICAgICAgICA8UGx1c0ljb25Db250YWluZXIgb25DbGljaz17IG9uQ2xpY2tJbWFnZVVwbG9hZCB9PlxyXG4gICAgICAgICAgPEJzUGx1c0NpcmNsZUZpbGwgLz5cclxuICAgICAgICA8L1BsdXNJY29uQ29udGFpbmVyPiB9XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAgPE5pY2tuYW1lQ29udGFpbmVyPlxyXG4gICAgICAgIDxOaWNrbmFtZT57IG1lLm5pY2tuYW1lIH08L05pY2tuYW1lPlxyXG4gICAgICA8L05pY2tuYW1lQ29udGFpbmVyPlxyXG4gICAgICB7b25FZGl0Rm9ybSBcclxuICAgICAgPyA8SW50cm9kdWNlRWRpdEZvcm0gc2V0T25FZGl0Rm9ybT17IHNldE9uRWRpdEZvcm0gfSAvPlxyXG4gICAgICA6IChcclxuICAgICAgICA8SW50cm9kdWNlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPEludHJvZHVjZT57IG1lLmludHJvZHVjZSB9PC9JbnRyb2R1Y2U+XHJcbiAgICAgICAgICB7IGlkICYmIFxyXG4gICAgICAgICAgPFBlbmNpbEljb25Db250YWluZXIgb25DbGljaz17IG9uQ2xpY2tFZGl0Rm9ybSB9PlxyXG4gICAgICAgICAgICA8QnNQZW5jaWxGaWxsIC8+XHJcbiAgICAgICAgICA8L1BlbmNpbEljb25Db250YWluZXI+IH1cclxuICAgICAgICA8L0ludHJvZHVjZUNvbnRhaW5lcj4pfVxyXG4gICAgICA8QnV0dG9uPlxyXG4gICAgICAgIOuCtCDqsozsi5zquIBcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuVXNlclByb2ZpbGUucHJvcFR5cGUgPSB7XHJcbiAgbWU6IFByb3BUeXBlLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==