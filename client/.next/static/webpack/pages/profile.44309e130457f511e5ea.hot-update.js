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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProfileImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProfileImage */ "./components/ProfileImage.js");
/* harmony import */ var _profileImageEditForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profileImageEditForm */ "./components/profileImageEditForm.js");
/* harmony import */ var _IntroduceEditForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IntroduceEditForm */ "./components/IntroduceEditForm.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\components\\UserProfile.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserProfile__Container",
  componentId: "sc-s6xozi-0"
})(["width:700px;height:400px;background-color:white;border-radius:20px;display:flex;flex-direction:column;align-items:center;text-align:center;box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);"]);
_c = Container;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserProfile__ProfileImageContainer",
  componentId: "sc-s6xozi-1"
})(["margin-top:50px;margin-bottom:-40px;width:150px;height:150px;border-radius:70%;overflow:hidden;"]);
_c2 = ProfileImageContainer;
var NicknameContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserProfile__NicknameContainer",
  componentId: "sc-s6xozi-2"
})(["width:100%;display:flex;justify-content:center;margin-top:15px;margin-bottom:5px;"]);
_c3 = NicknameContainer;
var Nickname = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserProfile__Nickname",
  componentId: "sc-s6xozi-3"
})(["font-weight:600;font-size:25px;color:#212529;"]);
_c4 = Nickname;
var IntroduceContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserProfile__IntroduceContainer",
  componentId: "sc-s6xozi-4"
})(["display:flex;justify-content:center;margin-bottom:30px;"]);
_c5 = IntroduceContainer;
var Introduce = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserProfile__Introduce",
  componentId: "sc-s6xozi-5"
})(["margin-right:7px;font-weight:500;font-size:18px;color:#868e96;"]);
_c6 = Introduce;
var PencilIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "UserProfile__PencilIconContainer",
  componentId: "sc-s6xozi-6"
})(["font-size:15px;margin-top:2px;opacity:0.6;cursor:pointer;:hover{opacity:1;}"]);
_c7 = PencilIconContainer;
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "UserProfile__Button",
  componentId: "sc-s6xozi-7"
})(["all:unset;border-radius:10px;width:20%;height:30px;padding:8px 15px;background-color:#1864ab;color:white;font-weight:700;font-size:17px;text-align:center;cursor:pointer;opacity:0.8;outline:none;&:hover{opacity:1;}"]);
_c8 = Button;

var UserProfile = function UserProfile(_ref) {
  _s();

  var me = _ref.me;
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      onEditForm = _useState[0],
      setOnEditForm = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {}, [me.profileImagePath]);
  var onClickEditForm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setOnEditForm(function (prev) {
      return !prev;
    });
  }, [onEditForm]);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 5
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    path: me.profileImagePath,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  })), id && __jsx(_profileImageEditForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 15
    }
  }), __jsx(NicknameContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, me.nickname)), onEditForm ? __jsx(_IntroduceEditForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setOnEditForm: setOnEditForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }) : __jsx(IntroduceContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx(Introduce, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, me.introduce), id && __jsx(PencilIconContainer, {
    onClick: onClickEditForm,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_7__["BsPencilFill"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }))), __jsx(Button, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, "\uAC8C\uC2DC\uAE00\uBCF4\uAE30"));
};

_s(UserProfile, "wciFz+1Atko8onP2vgP5SKdbKLY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c9 = UserProfile;
UserProfile.propTypes = {
  me: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJQcm9maWxlSW1hZ2VDb250YWluZXIiLCJOaWNrbmFtZUNvbnRhaW5lciIsIk5pY2tuYW1lIiwiSW50cm9kdWNlQ29udGFpbmVyIiwiSW50cm9kdWNlIiwiUGVuY2lsSWNvbkNvbnRhaW5lciIsIkJ1dHRvbiIsImJ1dHRvbiIsIlVzZXJQcm9maWxlIiwibWUiLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwidXNlU3RhdGUiLCJvbkVkaXRGb3JtIiwic2V0T25FZGl0Rm9ybSIsInVzZUVmZmVjdCIsInByb2ZpbGVJbWFnZVBhdGgiLCJvbkNsaWNrRWRpdEZvcm0iLCJ1c2VDYWxsYmFjayIsInByZXYiLCJuaWNrbmFtZSIsImludHJvZHVjZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxzTkFBZjtLQUFNRixTO0FBWU4sSUFBTUcscUJBQXFCLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsdUdBQTNCO01BQU1DLHFCO0FBU04sSUFBTUMsaUJBQWlCLEdBQUdILHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEseUZBQXZCO01BQU1FLGlCO0FBUU4sSUFBTUMsUUFBUSxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLHFEQUFkO01BQU1HLFE7QUFNTixJQUFNQyxrQkFBa0IsR0FBR0wseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSwrREFBeEI7TUFBTUksa0I7QUFNTixJQUFNQyxTQUFTLEdBQUdOLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsc0VBQWY7TUFBTUssUztBQU9OLElBQU1DLG1CQUFtQixHQUFHUCx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLG1GQUF6QjtNQUFNTSxtQjtBQVVOLElBQU1DLE1BQU0sR0FBR1IseURBQU0sQ0FBQ1MsTUFBVjtFQUFBO0VBQUE7QUFBQSw2TkFBWjtNQUFNRCxNOztBQW1CTixJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFZO0VBQUE7O0VBQUEsSUFBVEMsRUFBUyxRQUFUQSxFQUFTO0VBQzlCLElBQU1DLEVBQUUsR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0lBQUE7O0lBQUEseUJBQVdBLEtBQUssQ0FBQ0MsSUFBTixDQUFXSixFQUF0QixtREFBVyxlQUFlQyxFQUExQjtFQUFBLENBQUQsQ0FBdEI7O0VBQ0EsZ0JBQW9DSSxzREFBUSxDQUFDLEtBQUQsQ0FBNUM7RUFBQSxJQUFPQyxVQUFQO0VBQUEsSUFBbUJDLGFBQW5COztFQUVBQyx1REFBUyxDQUFDLFlBQU0sQ0FFZixDQUZRLEVBRU4sQ0FBQ1IsRUFBRSxDQUFDUyxnQkFBSixDQUZNLENBQVQ7RUFJQSxJQUFNQyxlQUFlLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUN4Q0osYUFBYSxDQUFDLFVBQUFLLElBQUk7TUFBQSxPQUFJLENBQUNBLElBQUw7SUFBQSxDQUFMLENBQWI7RUFDRCxDQUZrQyxFQUVoQyxDQUFDTixVQUFELENBRmdDLENBQW5DO0VBSUEsT0FDRSxNQUFDLFNBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMscUJBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMscURBQUQ7SUFBYyxJQUFJLEVBQUdOLEVBQUUsQ0FBQ1MsZ0JBQXhCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixDQURGLEVBSUlSLEVBQUUsSUFBSSxNQUFDLDZEQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFKVixFQUtFLE1BQUMsaUJBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsUUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQVlELEVBQUUsQ0FBQ2EsUUFBZixDQURGLENBTEYsRUFRR1AsVUFBVSxHQUNULE1BQUMsMERBQUQ7SUFBbUIsYUFBYSxFQUFFQyxhQUFsQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBRFMsR0FHVCxNQUFDLGtCQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLFNBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFhUCxFQUFFLENBQUNjLFNBQWhCLENBREYsRUFFSWIsRUFBRSxJQUNKLE1BQUMsbUJBQUQ7SUFBcUIsT0FBTyxFQUFFUyxlQUE5QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQywyREFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsQ0FIRixDQVhKLEVBbUJFLE1BQUMsTUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLG9DQW5CRixDQURGO0FBeUJELENBckNEOztHQUFNWCxXO1VBQ09HLHVEOzs7TUFEUEgsVztBQXVDTkEsV0FBVyxDQUFDZ0IsU0FBWixHQUF3QjtFQUN0QmYsRUFBRSxFQUFFZ0IsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFEQyxDQUF4QjtBQUllbkIsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS40NDMwOWUxMzA0NTdmNTExZTVlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBQcm9maWxlSW1hZ2UgZnJvbSAnLi9Qcm9maWxlSW1hZ2UnO1xyXG5pbXBvcnQgUHJvZmlsZUltYWdlRWRpdEZvcm0gZnJvbSAnLi9wcm9maWxlSW1hZ2VFZGl0Rm9ybSc7XHJcbmltcG9ydCBJbnRyb2R1Y2VFZGl0Rm9ybSBmcm9tICcuL0ludHJvZHVjZUVkaXRGb3JtJztcclxuaW1wb3J0IHsgQnNQZW5jaWxGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNzAwcHg7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMTkpLCAwIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcclxuYDtcclxuXHJcbmNvbnN0IFByb2ZpbGVJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAtNDBweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA3MCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYDtcclxuXHJcbmNvbnN0IE5pY2tuYW1lQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgTmlja25hbWUgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAjMjEyNTI5O1xyXG5gO1xyXG5cclxuY29uc3QgSW50cm9kdWNlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBJbnRyb2R1Y2UgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjODY4ZTk2O1xyXG5gO1xyXG5cclxuY29uc3QgUGVuY2lsSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIDpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYWxsOiB1bnNldDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODY0YWI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFVzZXJQcm9maWxlID0gKHsgbWUgfSkgPT4ge1xyXG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XHJcbiAgY29uc3QgW29uRWRpdEZvcm0sIHNldE9uRWRpdEZvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgXHJcbiAgfSwgW21lLnByb2ZpbGVJbWFnZVBhdGhdKVxyXG5cclxuICBjb25zdCBvbkNsaWNrRWRpdEZvcm0gPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRPbkVkaXRGb3JtKHByZXYgPT4gIXByZXYpO1xyXG4gIH0sIFtvbkVkaXRGb3JtXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8UHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgIDxQcm9maWxlSW1hZ2UgcGF0aD17IG1lLnByb2ZpbGVJbWFnZVBhdGggfSAvPlxyXG4gICAgICA8L1Byb2ZpbGVJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgeyBpZCAmJiA8UHJvZmlsZUltYWdlRWRpdEZvcm0gLz4gfVxyXG4gICAgICA8Tmlja25hbWVDb250YWluZXI+XHJcbiAgICAgICAgPE5pY2tuYW1lPnsgbWUubmlja25hbWUgfTwvTmlja25hbWU+XHJcbiAgICAgIDwvTmlja25hbWVDb250YWluZXI+XHJcbiAgICAgIHtvbkVkaXRGb3JtIFxyXG4gICAgICA/IDxJbnRyb2R1Y2VFZGl0Rm9ybSBzZXRPbkVkaXRGb3JtPXtzZXRPbkVkaXRGb3JtfSAvPlxyXG4gICAgICA6IChcclxuICAgICAgICA8SW50cm9kdWNlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPEludHJvZHVjZT57IG1lLmludHJvZHVjZSB9PC9JbnRyb2R1Y2U+XHJcbiAgICAgICAgICB7IGlkICYmIFxyXG4gICAgICAgICAgPFBlbmNpbEljb25Db250YWluZXIgb25DbGljaz17b25DbGlja0VkaXRGb3JtfT5cclxuICAgICAgICAgICAgPEJzUGVuY2lsRmlsbCAvPlxyXG4gICAgICAgICAgPC9QZW5jaWxJY29uQ29udGFpbmVyPiB9XHJcbiAgICAgICAgPC9JbnRyb2R1Y2VDb250YWluZXI+XHJcbiAgICAgICl9XHJcbiAgICAgIDxCdXR0b24+XHJcbiAgICAgICAg6rKM7Iuc6riA67O06riwXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcblVzZXJQcm9maWxlLnByb3BUeXBlcyA9IHtcclxuICBtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==