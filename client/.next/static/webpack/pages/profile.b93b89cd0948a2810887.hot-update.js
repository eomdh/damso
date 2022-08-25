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
})(["margin-top:50px;width:150px;height:150px;border-radius:70%;overflow:hidden;"]);
_c2 = ProfileImageContainer;
var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "UserProfile__FormContainer",
  componentId: "sc-bk9zf9-2"
})(["width:100%;min-height:120px;border-bottom:5px solid #e6ecf0;padding:10px;position:relative;"]);
_c3 = FormContainer;
var NicknameContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserProfile__NicknameContainer",
  componentId: "sc-bk9zf9-3"
})(["width:100%;display:flex;justify-content:center;margin-top:15px;margin-bottom:10px;"]);
_c4 = NicknameContainer;
var Nickname = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "UserProfile__Nickname",
  componentId: "sc-bk9zf9-4"
})(["font-weight:600;font-size:25px;color:#212529;"]);
_c5 = Nickname;

var UserProfile = function UserProfile(_ref) {
  _s();

  var me = _ref.me;
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {}, []);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), __jsx(FormContainer, {
    onSubmit: onSubmit,
    encType: "multipart/form-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsPlusCircleFill"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  })))), __jsx(NicknameContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, me.nickname)));
};

_s(UserProfile, "n48B5Cx+nCBgkwtdslSIEffu5bQ=");

_c6 = UserProfile;
/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "ProfileImageContainer");
$RefreshReg$(_c3, "FormContainer");
$RefreshReg$(_c4, "NicknameContainer");
$RefreshReg$(_c5, "Nickname");
$RefreshReg$(_c6, "UserProfile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJQcm9maWxlSW1hZ2VDb250YWluZXIiLCJGb3JtQ29udGFpbmVyIiwiZm9ybSIsIk5pY2tuYW1lQ29udGFpbmVyIiwiTmlja25hbWUiLCJVc2VyUHJvZmlsZSIsIm1lIiwib25TdWJtaXQiLCJ1c2VDYWxsYmFjayIsIm5pY2tuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsc05BQWY7S0FBTUYsUztBQVlOLElBQU1HLHFCQUFxQixHQUFHRix5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLG1GQUEzQjtNQUFNQyxxQjtBQVFOLElBQU1DLGFBQWEsR0FBR0gseURBQU0sQ0FBQ0ksSUFBVjtFQUFBO0VBQUE7QUFBQSxtR0FBbkI7TUFBTUQsYTtBQVFOLElBQU1FLGlCQUFpQixHQUFHTCx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLDBGQUF2QjtNQUFNSSxpQjtBQVFOLElBQU1DLFFBQVEsR0FBR04seURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxxREFBZDtNQUFNSyxROztBQU1OLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQVk7RUFBQTs7RUFBQSxJQUFUQyxFQUFTLFFBQVRBLEVBQVM7RUFDOUIsSUFBTUMsUUFBUSxHQUFHQyx5REFBVyxDQUFDLFlBQU0sQ0FFbEMsQ0FGMkIsRUFFekIsRUFGeUIsQ0FBNUI7RUFJQSxPQUNFLE1BQUMsU0FBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxxQkFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxxREFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsRUFFRSxNQUFDLGFBQUQ7SUFBZSxRQUFRLEVBQUVELFFBQXpCO0lBQW1DLE9BQU8sRUFBQyxxQkFBM0M7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBUSxNQUFDLCtEQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBUixDQURGLENBRkYsQ0FERixFQU9FLE1BQUMsaUJBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsUUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQVlELEVBQUUsQ0FBQ0csUUFBZixDQURGLENBUEYsQ0FERjtBQWFELENBbEJEOztHQUFNSixXOztNQUFBQSxXO0FBb0JTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmI5M2I4OWNkMDk0OGEyODEwODg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZSBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9maWxlSW1hZ2UgZnJvbSAnLi9Qcm9maWxlSW1hZ2UnO1xyXG5pbXBvcnQgeyBCc1BsdXNDaXJjbGVGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNzAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcclxuYDtcclxuXHJcbmNvbnN0IFByb2ZpbGVJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA3MCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm1Db250YWluZXIgPSBzdHlsZWQuZm9ybWBcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2U2ZWNmMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IE5pY2tuYW1lQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IE5pY2tuYW1lID0gc3R5bGVkLmRpdmBcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogIzIxMjUyOTtcclxuYDtcclxuXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKHsgbWUgfSkgPT4ge1xyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG5cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8UHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgIDxQcm9maWxlSW1hZ2UgLz5cclxuICAgICAgICA8Rm9ybUNvbnRhaW5lciBvblN1Ym1pdD17b25TdWJtaXR9IGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XHJcbiAgICAgICAgICA8YnV0dG9uPjxCc1BsdXNDaXJjbGVGaWxsIC8+PC9idXR0b24+XHJcbiAgICAgICAgPC9Gb3JtQ29udGFpbmVyPlxyXG4gICAgICA8L1Byb2ZpbGVJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgPE5pY2tuYW1lQ29udGFpbmVyPlxyXG4gICAgICAgIDxOaWNrbmFtZT57IG1lLm5pY2tuYW1lIH08L05pY2tuYW1lPlxyXG4gICAgICA8L05pY2tuYW1lQ29udGFpbmVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==