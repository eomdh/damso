webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ProfileImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProfileImage */ "./components/ProfileImage.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\PostCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PostCard__Container",
  componentId: "sc-t7sfa8-0"
})(["width:100%;max-height:700px;border-bottom:5px solid #e6ecf0;padding:10px;"]);
_c = Container;
var UpsideContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PostCard__UpsideContainer",
  componentId: "sc-t7sfa8-1"
})(["display:flex;width:100%;"]);
_c2 = UpsideContainer;
var PostInformationContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PostCard__PostInformationContainer",
  componentId: "sc-t7sfa8-2"
})(["width:100%;display:flex;margin-left:10px;margin-top:3px;"]);
_c3 = PostInformationContainer;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PostCard__ProfileImageContainer",
  componentId: "sc-t7sfa8-3"
})(["width:75px;height:60px;margin-right:10px;border-radius:50px;overflow:hidden;"]);
_c4 = ProfileImageContainer;
var Nickname = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "PostCard__Nickname",
  componentId: "sc-t7sfa8-4"
})(["font-size:18px;font-weight:600;"]);
_c5 = Nickname;
var Date = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "PostCard__Date",
  componentId: "sc-t7sfa8-5"
})([""]);
var DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PostCard__DeleteButton",
  componentId: "sc-t7sfa8-6"
})(["display:flex;justify-content:center;color:#e8537c;opacity:0.6;font-size:17px;cursor:pointer;padding:10px;border-radius:50%;margin-right:10px;transition:all 0.2s linear;&:hover{opacity:1;}"]);
_c6 = DeleteButton;
var ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PostCard__ContentContainer",
  componentId: "sc-t7sfa8-7"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]);

var PostCard = function PostCard(_ref) {
  var post = _ref.post;
  return post && __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(UpsideContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: __webpack_require__(/*! ../image/user.png */ "./image/user.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  })), __jsx(PostInformationContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, post.User.nickname)), __jsx(DeleteButton, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaTrashAlt"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }))));
};

_c7 = PostCard;
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "UpsideContainer");
$RefreshReg$(_c3, "PostInformationContainer");
$RefreshReg$(_c4, "ProfileImageContainer");
$RefreshReg$(_c5, "Nickname");
$RefreshReg$(_c6, "DeleteButton");
$RefreshReg$(_c7, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJVcHNpZGVDb250YWluZXIiLCJQb3N0SW5mb3JtYXRpb25Db250YWluZXIiLCJQcm9maWxlSW1hZ2VDb250YWluZXIiLCJOaWNrbmFtZSIsInNwYW4iLCJEYXRlIiwiRGVsZXRlQnV0dG9uIiwiQ29udGVudENvbnRhaW5lciIsIlBvc3RDYXJkIiwicG9zdCIsInJlcXVpcmUiLCJVc2VyIiwibmlja25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsaUZBQWY7S0FBTUYsUztBQU9OLElBQU1HLGVBQWUsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxnQ0FBckI7TUFBTUMsZTtBQUtOLElBQU1DLHdCQUF3QixHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLGdFQUE5QjtNQUFNRSx3QjtBQU9OLElBQU1DLHFCQUFxQixHQUFHSix5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLG9GQUEzQjtNQUFNRyxxQjtBQVFOLElBQU1DLFFBQVEsR0FBR0wseURBQU0sQ0FBQ00sSUFBVjtFQUFBO0VBQUE7QUFBQSx1Q0FBZDtNQUFNRCxRO0FBS04sSUFBTUUsSUFBSSxHQUFHUCx5REFBTSxDQUFDTSxJQUFWO0VBQUE7RUFBQTtBQUFBLFFBQVY7QUFHQSxJQUFNRSxZQUFZLEdBQUdSLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsbU1BQWxCO01BQU1PLFk7QUFnQk4sSUFBTUMsZ0JBQWdCLEdBQUdULHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEscUZBQXRCOztBQU9BLElBQU1TLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7RUFBQSxJQUFYQyxJQUFXLFFBQVhBLElBQVc7RUFDN0IsT0FDRUEsSUFBSSxJQUNGLE1BQUMsU0FBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxlQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLHFCQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLHFEQUFEO0lBQWMsR0FBRyxFQUFFQyxtQkFBTyxDQUFDLDJDQUFELENBQTFCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixDQURGLEVBSUUsTUFBQyx3QkFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxRQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBWUQsSUFBSSxDQUFDRSxJQUFMLENBQVVDLFFBQXRCLENBREYsQ0FKRixFQU9FLE1BQUMsWUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyx5REFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsQ0FQRixDQURGLENBRko7QUFpQkQsQ0FsQkQ7O01BQU1KLFE7QUFvQlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk2OGZhM2IxY2EwMGI2YWFkMTNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFByb2ZpbGVJbWFnZSBmcm9tICcuL1Byb2ZpbGVJbWFnZSc7XHJcblxyXG5pbXBvcnQgeyBGYVRyYXNoQWx0LCBGYVJlZ0NvbW1lbnREb3RzIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZTZlY2YwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbmA7IFxyXG5cclxuY29uc3QgVXBzaWRlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdEluZm9ybWF0aW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxuYDtcclxuXHJcbmNvbnN0IFByb2ZpbGVJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDc1cHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbmA7XHJcblxyXG5jb25zdCBOaWNrbmFtZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5gO1xyXG5cclxuY29uc3QgRGF0ZSA9IHN0eWxlZC5zcGFuYFxyXG5gO1xyXG5cclxuY29uc3QgRGVsZXRlQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiAjZTg1MzdjO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgcG9zdCAmJiAoXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFVwc2lkZUNvbnRhaW5lcj5cclxuICAgICAgICAgIDxQcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxQcm9maWxlSW1hZ2Ugc3JjPXtyZXF1aXJlKCcuLi9pbWFnZS91c2VyLnBuZycpfSAvPiBcclxuICAgICAgICAgIDwvUHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPFBvc3RJbmZvcm1hdGlvbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPE5pY2tuYW1lPnsgcG9zdC5Vc2VyLm5pY2tuYW1lIH08L05pY2tuYW1lPlxyXG4gICAgICAgICAgPC9Qb3N0SW5mb3JtYXRpb25Db250YWluZXI+XHJcbiAgICAgICAgICA8RGVsZXRlQnV0dG9uPlxyXG4gICAgICAgICAgICA8RmFUcmFzaEFsdCAvPlxyXG4gICAgICAgICAgPC9EZWxldGVCdXR0b24+XHJcbiAgICAgICAgPC9VcHNpZGVDb250YWluZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=