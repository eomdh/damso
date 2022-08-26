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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
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

_s(UserProfile, "MRsfaXYjceJ2+eo67zWPp0v8AQ8=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJQcm9maWxlSW1hZ2VDb250YWluZXIiLCJGb3JtIiwiZm9ybSIsIlBsdXNJY29uQ29udGFpbmVyIiwiTmlja25hbWVDb250YWluZXIiLCJOaWNrbmFtZSIsIkludHJvZHVjZUNvbnRhaW5lciIsIkludHJvZHVjZSIsIlBlbmNpbGVJY29uQ29udGFpbmVyIiwiQnV0dG9uIiwiYnV0dG9uIiwiVXNlclByb2ZpbGUiLCJtZSIsInVzZVN0YXRlIiwib25DbGlja0VkaXRGb3JtIiwic2V0T25DbGlja0VkaXRGb3JtIiwiaW1hZ2VJbnB1dCIsInVzZVJlZiIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsImNsaWNrIiwib25DaGFuZ2VJbWFnZXMiLCJlIiwiaW1hZ2VGb3JtRGF0YSIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsImNhbGwiLCJ0YXJnZXQiLCJmaWxlcyIsImYiLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXRQcm9maWxlSW1hZ2UiLCJvblN1Ym1pdEludHJvZHVjZSIsIm5pY2tuYW1lIiwiaW50cm9kdWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsc05BQWY7S0FBTUYsUztBQVlOLElBQU1HLHFCQUFxQixHQUFHRix5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLHVHQUEzQjtNQUFNQyxxQjtBQVNOLElBQU1DLElBQUksR0FBR0gseURBQU0sQ0FBQ0ksSUFBVjtFQUFBO0VBQUE7QUFBQSwwQkFBVjtNQUFNRCxJO0FBSU4sSUFBTUUsaUJBQWlCLEdBQUdMLHlEQUFNLENBQUND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QUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFZTixFQUFFLENBQUN3QixRQUFmLENBREYsQ0FoQkYsRUFtQkd0QixlQUFlLEdBQ2QsTUFBQywwREFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBRGMsR0FHZCxNQUFDLGtCQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLFNBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFhRixFQUFFLENBQUN5QixTQUFoQixDQURGLEVBRUUsTUFBQyxvQkFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQywyREFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsQ0FGRixDQXRCSixFQTRCRSxNQUFDLE1BQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSwrQkE1QkYsQ0FERjtBQWtDRCxDQTVERDs7R0FBTTFCLFc7O09BQUFBLFc7QUE4RFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuYTdhNWFhMDdhNGE1M2E5MzMxYTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFByb2ZpbGVJbWFnZSBmcm9tICcuL1Byb2ZpbGVJbWFnZSc7XHJcbmltcG9ydCB7IEJzUGx1c0NpcmNsZUZpbGwsIEJzUGVuY2lsRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcclxuaW1wb3J0IEludHJvZHVjZUVkaXRGb3JtIGZyb20gJy4vSW50cm9kdWNlRWRpdEZvcm0nO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNzAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcclxuYDtcclxuXHJcbmNvbnN0IFByb2ZpbGVJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAtNDBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA3MCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBQbHVzSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIGNvbG9yOiAjMTg2NGFiO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgTmlja25hbWVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBOaWNrbmFtZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY29sb3I6ICMyMTI1Mjk7XHJcbmA7XHJcblxyXG5jb25zdCBJbnRyb2R1Y2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBJbnRyb2R1Y2UgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjODY4ZTk2O1xyXG5gO1xyXG5cclxuY29uc3QgUGVuY2lsZUljb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICA6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGFsbDogdW5zZXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogMjAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwYWRkaW5nOiA4cHggMTVweDtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODY0YWI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKHsgbWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtvbkNsaWNrRWRpdEZvcm0sIHNldE9uQ2xpY2tFZGl0Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlSW1hZ2VzID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgZiA9PiB7XHJcbiAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgZik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhpbWFnZUZvcm1EYXRhKTtcclxuICB9KTtcclxuXHJcblxyXG4gIGNvbnN0IG9uU3VibWl0UHJvZmlsZUltYWdlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0SW50cm9kdWNlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8UHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgIDxQcm9maWxlSW1hZ2UgLz5cclxuICAgICAgPC9Qcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdFByb2ZpbGVJbWFnZX0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgIHJlZj17aW1hZ2VJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxQbHVzSWNvbkNvbnRhaW5lciBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PlxyXG4gICAgICAgICAgPEJzUGx1c0NpcmNsZUZpbGwgLz5cclxuICAgICAgICA8L1BsdXNJY29uQ29udGFpbmVyPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICAgIDxOaWNrbmFtZUNvbnRhaW5lcj5cclxuICAgICAgICA8Tmlja25hbWU+eyBtZS5uaWNrbmFtZSB9PC9OaWNrbmFtZT5cclxuICAgICAgPC9OaWNrbmFtZUNvbnRhaW5lcj5cclxuICAgICAge29uQ2xpY2tFZGl0Rm9ybSBcclxuICAgICAgPyA8SW50cm9kdWNlRWRpdEZvcm0gLz5cclxuICAgICAgOiAoXHJcbiAgICAgICAgPEludHJvZHVjZUNvbnRhaW5lcj5cclxuICAgICAgICAgIDxJbnRyb2R1Y2U+eyBtZS5pbnRyb2R1Y2UgfTwvSW50cm9kdWNlPlxyXG4gICAgICAgICAgPFBlbmNpbGVJY29uQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8QnNQZW5jaWxGaWxsIC8+XHJcbiAgICAgICAgICA8L1BlbmNpbGVJY29uQ29udGFpbmVyPlxyXG4gICAgICAgIDwvSW50cm9kdWNlQ29udGFpbmVyPil9XHJcbiAgICAgIDxCdXR0b24+XHJcbiAgICAgICAg64K0IOqyjOyLnOq4gFxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlOyJdLCJzb3VyY2VSb290IjoiIn0=