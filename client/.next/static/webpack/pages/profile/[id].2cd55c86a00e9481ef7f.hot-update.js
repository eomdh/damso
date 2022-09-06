webpackHotUpdate_N_E("pages/profile/[id]",{

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ProfileImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfileImage */ "./components/ProfileImage.js");
/* harmony import */ var _profileImageEditForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profileImageEditForm */ "./components/profileImageEditForm.js");
/* harmony import */ var _IntroduceEditForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IntroduceEditForm */ "./components/IntroduceEditForm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\components\\UserProfile.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Container = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "UserProfile__Container",
  componentId: "sc-s6xozi-0"
})(["width:700px;height:400px;background-color:white;border-radius:20px;display:flex;flex-direction:column;align-items:center;text-align:center;box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);"]);
_c = Container;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "UserProfile__ProfileImageContainer",
  componentId: "sc-s6xozi-1"
})(["margin-top:50px;margin-bottom:-40px;width:150px;height:150px;border-radius:70%;overflow:hidden;"]);
_c2 = ProfileImageContainer;
var NicknameContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "UserProfile__NicknameContainer",
  componentId: "sc-s6xozi-2"
})(["width:100%;display:flex;justify-content:center;margin-top:", ";margin-bottom:5px;"], function (props) {
  return props.me ? "15px" : "55px";
});
_c3 = NicknameContainer;
var Nickname = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "UserProfile__Nickname",
  componentId: "sc-s6xozi-3"
})(["font-weight:600;font-size:25px;color:#212529;"]);
_c4 = Nickname;
var IntroduceContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "UserProfile__IntroduceContainer",
  componentId: "sc-s6xozi-4"
})(["display:flex;justify-content:center;margin-bottom:30px;"]);
_c5 = IntroduceContainer;
var Introduce = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "UserProfile__Introduce",
  componentId: "sc-s6xozi-5"
})(["margin-right:", ";font-weight:500;font-size:18px;color:#868e96;"], function (props) {
  return props.me ? "7px" : null;
});
_c6 = Introduce;
var PencilIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "UserProfile__PencilIconContainer",
  componentId: "sc-s6xozi-6"
})(["font-size:15px;margin-top:2px;opacity:0.6;cursor:pointer;:hover{opacity:1;}"]);
_c7 = PencilIconContainer;
var Button = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].button.withConfig({
  displayName: "UserProfile__Button",
  componentId: "sc-s6xozi-7"
})(["all:unset;border-radius:10px;width:20%;height:30px;padding:8px 15px;background-color:#1864ab;color:white;font-weight:700;font-size:17px;text-align:center;cursor:pointer;opacity:0.8;outline:none;&:hover{opacity:1;}"]);
_c8 = Button;

var UserProfile = function UserProfile(_ref) {
  _s();

  var user = _ref.user;
  var me = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user.me.id === user.id;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      onEditForm = _useState[0],
      setOnEditForm = _useState[1];

  var onClickEditForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setOnEditForm(function (prev) {
      return !prev;
    });
  }, [onEditForm]);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 5
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    path: user.profileImagePath,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }
  })), me && __jsx(_profileImageEditForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 15
    }
  }), __jsx(NicknameContainer, {
    me: me,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, user.nickname)), onEditForm ? __jsx(_IntroduceEditForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    setOnEditForm: setOnEditForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }) : __jsx(IntroduceContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx(Introduce, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, user.introduce), me && __jsx(PencilIconContainer, {
    onClick: onClickEditForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__["BsPencilFill"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }))), __jsx(Button, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, "\uAC8C\uC2DC\uAE00\uBCF4\uAE30"));
};

_s(UserProfile, "4pXDaMW0qxSTlplivr0m79FVbU4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c9 = UserProfile;
UserProfile.propTypes = {
  me: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "ProfileImageContainer");
$RefreshReg$(_c3, "NicknameContainer");
$RefreshReg$(_c4, "Nickname");
$RefreshReg$(_c5, "IntroduceContainer");
$RefreshReg$(_c6, "Introduce");
$RefreshReg$(_c7, "PencilIconContainer");
$RefreshReg$(_c8, "Button");
$RefreshReg$(_c9, "UserProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJQcm9maWxlSW1hZ2VDb250YWluZXIiLCJOaWNrbmFtZUNvbnRhaW5lciIsInByb3BzIiwibWUiLCJOaWNrbmFtZSIsIkludHJvZHVjZUNvbnRhaW5lciIsIkludHJvZHVjZSIsIlBlbmNpbEljb25Db250YWluZXIiLCJCdXR0b24iLCJidXR0b24iLCJVc2VyUHJvZmlsZSIsInVzZXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiaWQiLCJ1c2VTdGF0ZSIsIm9uRWRpdEZvcm0iLCJzZXRPbkVkaXRGb3JtIiwib25DbGlja0VkaXRGb3JtIiwidXNlQ2FsbGJhY2siLCJwcmV2IiwicHJvZmlsZUltYWdlUGF0aCIsIm5pY2tuYW1lIiwiaW50cm9kdWNlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLHNOQUFmO0tBQU1GLFM7QUFZTixJQUFNRyxxQkFBcUIsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSx1R0FBM0I7TUFBTUMscUI7QUFTTixJQUFNQyxpQkFBaUIsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSwwRkFJUCxVQUFBRyxLQUFLO0VBQUEsT0FBSUEsS0FBSyxDQUFDQyxFQUFOLEdBQVcsTUFBWCxHQUFvQixNQUF4QjtBQUFBLENBSkUsQ0FBdkI7TUFBTUYsaUI7QUFRTixJQUFNRyxRQUFRLEdBQUdOLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEscURBQWQ7TUFBTUssUTtBQU1O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ZmlsZS9baWRdLjJjZDU1Yzg2YTAwZTk0ODFlZjdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFByb2ZpbGVJbWFnZSBmcm9tICcuL1Byb2ZpbGVJbWFnZSc7XHJcbmltcG9ydCBQcm9maWxlSW1hZ2VFZGl0Rm9ybSBmcm9tICcuL3Byb2ZpbGVJbWFnZUVkaXRGb3JtJztcclxuaW1wb3J0IEludHJvZHVjZUVkaXRGb3JtIGZyb20gJy4vSW50cm9kdWNlRWRpdEZvcm0nO1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEJzUGVuY2lsRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDcwMHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE5KSwgMCA2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XHJcbmA7XHJcblxyXG5jb25zdCBQcm9maWxlSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNzAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbmA7XHJcblxyXG5jb25zdCBOaWNrbmFtZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAke3Byb3BzID0+IHByb3BzLm1lID8gXCIxNXB4XCIgOiBcIjU1cHhcIn07XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgTmlja25hbWUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG5gO1xyXG5cclxuY29uc3QgSW50cm9kdWNlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBJbnRyb2R1Y2UgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1yaWdodDogJHtwcm9wcyA9PiBwcm9wcy5tZSA/IFwiN3B4XCIgOiBudWxsfTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzg2OGU5NjtcclxuYDtcclxuXHJcbmNvbnN0IFBlbmNpbEljb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICA6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGFsbDogdW5zZXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB3aWR0aDogMjAlO1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwYWRkaW5nOiA4cHggMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg2NGFiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBVc2VyUHJvZmlsZSA9ICh7IHVzZXIgfSkgPT4ge1xyXG4gIGNvbnN0IG1lID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lLmlkID09PSB1c2VyLmlkKTtcclxuICBjb25zdCBbb25FZGl0Rm9ybSwgc2V0T25FZGl0Rm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tFZGl0Rm9ybSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldE9uRWRpdEZvcm0ocHJldiA9PiAhcHJldik7XHJcbiAgfSwgW29uRWRpdEZvcm1dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxQcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgPFByb2ZpbGVJbWFnZSBwYXRoPXsgdXNlci5wcm9maWxlSW1hZ2VQYXRoIH0gLz5cclxuICAgICAgPC9Qcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgIHsgbWUgJiYgPFByb2ZpbGVJbWFnZUVkaXRGb3JtIC8+IH1cclxuICAgICAgPE5pY2tuYW1lQ29udGFpbmVyIG1lPXttZX0+XHJcbiAgICAgICAgPE5pY2tuYW1lPnsgdXNlci5uaWNrbmFtZSB9PC9OaWNrbmFtZT5cclxuICAgICAgPC9OaWNrbmFtZUNvbnRhaW5lcj5cclxuICAgICAge29uRWRpdEZvcm0gXHJcbiAgICAgID8gPEludHJvZHVjZUVkaXRGb3JtIHNldE9uRWRpdEZvcm09e3NldE9uRWRpdEZvcm19IC8+XHJcbiAgICAgIDogKFxyXG4gICAgICAgIDxJbnRyb2R1Y2VDb250YWluZXI+XHJcbiAgICAgICAgICA8SW50cm9kdWNlPnsgdXNlci5pbnRyb2R1Y2UgfTwvSW50cm9kdWNlPlxyXG4gICAgICAgICAgeyBtZSAmJiBcclxuICAgICAgICAgIDxQZW5jaWxJY29uQ29udGFpbmVyIG9uQ2xpY2s9e29uQ2xpY2tFZGl0Rm9ybX0+XHJcbiAgICAgICAgICAgIDxCc1BlbmNpbEZpbGwgLz5cclxuICAgICAgICAgIDwvUGVuY2lsSWNvbkNvbnRhaW5lcj4gfVxyXG4gICAgICAgIDwvSW50cm9kdWNlQ29udGFpbmVyPlxyXG4gICAgICApfVxyXG4gICAgICA8QnV0dG9uPlxyXG4gICAgICAgIOqyjOyLnOq4gOuztOq4sFxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5Vc2VyUHJvZmlsZS5wcm9wVHlwZXMgPSB7XHJcbiAgbWU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlOyJdLCJzb3VyY2VSb290IjoiIn0=