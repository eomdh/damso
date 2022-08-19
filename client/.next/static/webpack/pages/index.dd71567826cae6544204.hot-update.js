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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ProfileImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfileImage */ "./components/ProfileImage.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\PostCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostCard__Container",
  componentId: "sc-t7sfa8-0"
})(["width:100%;max-height:700px;border-bottom:5px solid #e6ecf0;padding:10px;"]);
_c = Container;
var UpsideContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostCard__UpsideContainer",
  componentId: "sc-t7sfa8-1"
})(["display:flex;width:100%;"]);
_c2 = UpsideContainer;
var PostInformationContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostCard__PostInformationContainer",
  componentId: "sc-t7sfa8-2"
})(["width:100%;display:flex;margin-left:10px;margin-top:3px;"]);
_c3 = PostInformationContainer;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostCard__ProfileImageContainer",
  componentId: "sc-t7sfa8-3"
})(["width:75px;height:60px;margin-right:10px;border-radius:50px;overflow:hidden;"]);
_c4 = ProfileImageContainer;
var Nickname = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "PostCard__Nickname",
  componentId: "sc-t7sfa8-4"
})(["font-size:18px;font-weight:600;"]);
_c5 = Nickname;
var Date = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "PostCard__Date",
  componentId: "sc-t7sfa8-5"
})([""]);
var DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostCard__DeleteButton",
  componentId: "sc-t7sfa8-6"
})(["display:flex;justify-content:center;color:#e8537c;opacity:0.6;font-size:17px;cursor:pointer;padding:10px;border-radius:50%;margin-right:10px;transition:all 0.2s linear;&:hover{opacity:1;}"]);
_c6 = DeleteButton;
var ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostCard__ContentContainer",
  componentId: "sc-t7sfa8-7"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
_c7 = ContentContainer;
var Description = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "PostCard__Description",
  componentId: "sc-t7sfa8-8"
})(["width:85%;padding-left:10px;overflow:auto;min-height:20px;margin-top:20px;white-space:pre;line-height:18px;-ms-overflow-style:none;&::-webkit-scrollbar{display:none !important;}"]);
_c8 = Description;

var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  return post && __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }
  }, __jsx(UpsideContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: __webpack_require__(/*! ../image/user.png */ "./image/user.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  })), __jsx(PostInformationContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, post.User.nickname)), __jsx(DeleteButton, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaTrashAlt"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }))), __jsx(ContentContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, post.Image && post.Image.length > 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), __jsx(Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, post.content)));
};

_s(PostCard, "FJdoDJNyUlJ5WKWdRipc5DguCUQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c9 = PostCard;
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "UpsideContainer");
$RefreshReg$(_c3, "PostInformationContainer");
$RefreshReg$(_c4, "ProfileImageContainer");
$RefreshReg$(_c5, "Nickname");
$RefreshReg$(_c6, "DeleteButton");
$RefreshReg$(_c7, "ContentContainer");
$RefreshReg$(_c8, "Description");
$RefreshReg$(_c9, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJVcHNpZGVDb250YWluZXIiLCJQb3N0SW5mb3JtYXRpb25Db250YWluZXIiLCJQcm9maWxlSW1hZ2VDb250YWluZXIiLCJOaWNrbmFtZSIsInNwYW4iLCJEYXRlIiwiRGVsZXRlQnV0dG9uIiwiQ29udGVudENvbnRhaW5lciIsIkRlc2NyaXB0aW9uIiwiUG9zdENhcmQiLCJwb3N0IiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicmVxdWlyZSIsIlVzZXIiLCJuaWNrbmFtZSIsIkltYWdlIiwibGVuZ3RoIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsaUZBQWY7S0FBTUYsUztBQU9OLElBQU1HLGVBQWUsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxnQ0FBckI7TUFBTUMsZTtBQUtOLElBQU1DLHdCQUF3QixHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLGdFQUE5QjtNQUFNRSx3QjtBQU9OLElBQU1DLHFCQUFxQixHQUFHSix5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLG9GQUEzQjtNQUFNRyxxQjtBQVFOLElBQU1DLFFBQVEsR0FBR0wseURBQU0sQ0FBQ00sSUFBVjtFQUFBO0VBQUE7QUFBQSx1Q0FBZDtNQUFNRCxRO0FBS04sSUFBTUUsSUFBSSxHQUFHUCx5REFBTSxDQUFDTSxJQUFWO0VBQUE7RUFBQTtBQUFBLFFBQVY7QUFHQSxJQUFNRSxZQUFZLEdBQUdSLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsbU1BQWxCO01BQU1PLFk7QUFnQk4sSUFBTUMsZ0JBQWdCLEdBQUdULHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEscUZBQXRCO01BQU1RLGdCO0FBT04sSUFBTUMsV0FBVyxHQUFHVix5REFBTSxDQUFDTSxJQUFWO0VBQUE7RUFBQTtBQUFBLHlMQUFqQjtNQUFNSSxXOztBQWVOLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQWM7RUFBQTs7RUFBQSxJQUFYQyxJQUFXLFFBQVhBLElBQVc7RUFDN0IsSUFBTUMsRUFBRSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7SUFBQTs7SUFBQSx5QkFBV0EsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEVBQXRCLG1EQUFXLGVBQWVKLEVBQTFCO0VBQUEsQ0FBRCxDQUF0QjtFQUVBLE9BQ0VELElBQUksSUFDRixNQUFDLFNBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsZUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxxQkFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxxREFBRDtJQUFjLEdBQUcsRUFBRU0sbUJBQU8sQ0FBQywyQ0FBRCxDQUExQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsQ0FERixFQUlFLE1BQUMsd0JBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsUUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQVlOLElBQUksQ0FBQ08sSUFBTCxDQUFVQyxRQUF0QixDQURGLENBSkYsRUFPRSxNQUFDLFlBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMseURBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURGLENBUEYsQ0FERixFQVlFLE1BQUMsZ0JBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNHUixJQUFJLENBQUNTLEtBQUwsSUFBY1QsSUFBSSxDQUFDUyxLQUFMLENBQVdDLE1BQVgsR0FBb0IsQ0FBbEMsSUFDQyxrRUFGSixFQU1FLE1BQUMsV0FBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0dWLElBQUksQ0FBQ1csT0FEUixDQU5GLENBWkYsQ0FGSjtBQTJCRCxDQTlCRDs7R0FBTVosUTtVQUNPRyx1RDs7O01BRFBILFE7QUFnQ1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRkNzE1Njc4MjZjYWU2NTQ0MjA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9maWxlSW1hZ2UgZnJvbSAnLi9Qcm9maWxlSW1hZ2UnO1xyXG5cclxuaW1wb3J0IHsgRmFUcmFzaEFsdCwgRmFSZWdDb21tZW50RG90cyB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiA3MDBweDtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2U2ZWNmMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5gOyBcclxuXHJcbmNvbnN0IFVwc2lkZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RJbmZvcm1hdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbmA7XHJcblxyXG5jb25zdCBQcm9maWxlSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA3NXB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gO1xyXG5cclxuY29uc3QgTmlja25hbWUgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuYDtcclxuXHJcbmNvbnN0IERhdGUgPSBzdHlsZWQuc3BhbmBcclxuYDtcclxuXHJcbmNvbnN0IERlbGV0ZUJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogI2U4NTM3YztcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLnNwYW5gXHJcbiAgd2lkdGg6IDg1JTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvLyBJReyXkOyEnCDsiqTtgazroaTrsJQg6rCQ7LakXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyAvLyDsnIjrj4TsmrAg7YGs66GsIOuTsVxyXG4gIH1cclxuYDtcclxuXHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIHBvc3QgJiYgKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxVcHNpZGVDb250YWluZXI+XHJcbiAgICAgICAgICA8UHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8UHJvZmlsZUltYWdlIHNyYz17cmVxdWlyZSgnLi4vaW1hZ2UvdXNlci5wbmcnKX0gLz4gXHJcbiAgICAgICAgICA8L1Byb2ZpbGVJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICAgIDxQb3N0SW5mb3JtYXRpb25Db250YWluZXI+XHJcbiAgICAgICAgICAgIDxOaWNrbmFtZT57IHBvc3QuVXNlci5uaWNrbmFtZSB9PC9OaWNrbmFtZT5cclxuICAgICAgICAgIDwvUG9zdEluZm9ybWF0aW9uQ29udGFpbmVyPlxyXG4gICAgICAgICAgPERlbGV0ZUJ1dHRvbj5cclxuICAgICAgICAgICAgPEZhVHJhc2hBbHQgLz5cclxuICAgICAgICAgIDwvRGVsZXRlQnV0dG9uPlxyXG4gICAgICAgIDwvVXBzaWRlQ29udGFpbmVyPlxyXG4gICAgICAgIDxDb250ZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAge3Bvc3QuSW1hZ2UgJiYgcG9zdC5JbWFnZS5sZW5ndGggPiAxICYmIChcclxuICAgICAgICAgICAgPD5cclxuXHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAge3Bvc3QuY29udGVudH1cclxuICAgICAgICAgIDwvRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPC9Db250ZW50Q29udGFpbmVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9