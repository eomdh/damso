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
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\PostCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostCard__Container",
  componentId: "sc-t7sfa8-0"
})(["width:100%;max-height:700px;border-bottom:5px solid #e6ecf0;padding:10px;"]);
_c = Container;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostCard__ProfileImageContainer",
  componentId: "sc-t7sfa8-1"
})(["width:55px;height:55px;margin-right:18px;border-radius:50px;overflow:hidden;float:left;"]);
_c2 = ProfileImageContainer;
var PostInformationContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostCard__PostInformationContainer",
  componentId: "sc-t7sfa8-2"
})(["height:58px;display:flex;justify-content:space-between;margin-left:10px;margin-top:3px;"]);
_c3 = PostInformationContainer;
var Nickname = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "PostCard__Nickname",
  componentId: "sc-t7sfa8-3"
})(["font-size:18px;font-weight:600;"]);
_c4 = Nickname;
var Date = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "PostCard__Date",
  componentId: "sc-t7sfa8-4"
})([""]);
var DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostCard__DeleteButton",
  componentId: "sc-t7sfa8-5"
})(["display:flex;color:#e8537c;opacity:0.6;font-size:18px;cursor:pointer;padding:10px;border-radius:50%;margin-right:16px;transition:all 0.2s linear;&:hover{opacity:1;}"]);
_c5 = DeleteButton;
var ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostCard__ContentContainer",
  componentId: "sc-t7sfa8-6"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
_c6 = ContentContainer;
var Description = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "PostCard__Description",
  componentId: "sc-t7sfa8-7"
})(["width:85%;padding-left:10px;overflow:auto;min-height:20px;margin-top:20px;white-space:pre;line-height:18px;-ms-overflow-style:none;&::-webkit-scrollbar{display:none !important;}"]);
_c7 = Description;
var UnderSideContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostCard__UnderSideContainer",
  componentId: "sc-t7sfa8-8"
})(["display:flex;justify-content:end;align-items:center;margin-top:10px;margin-right:20px;"]);
_c8 = UnderSideContainer;
var IconsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostCard__IconsContainer",
  componentId: "sc-t7sfa8-9"
})(["color:", ";opacity:0.7;padding:7px;border-radius:50%;font-size:20px;transition:all 0.1s linear;cursor:pointer;&:hover{opacity:1;}"], function (props) {
  return props.color;
});
_c9 = IconsContainer;
var Amount = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostCard__Amount",
  componentId: "sc-t7sfa8-10"
})(["font-size:16px;opacity:0.8;"]);

var PostCard = function PostCard(_ref) {
  _s();

  var post = _ref.post;
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      liked = _useState[0],
      setLiked = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentFormOpend = _useState2[0],
      setCommentFormOpend = _useState2[1];

  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setLiked(function (prev) {
      return !prev;
    });
  }, [liked]);
  var onToggleCommnet = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCommentFormOpend(function (prev) {
      return !prev;
    });
  }, [commentFormOpend]);
  return post && __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: __webpack_require__(/*! ../image/user.png */ "./image/user.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  })), __jsx(PostInformationContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, post.User.nickname), id && post.User.id === id ? __jsx(DeleteButton, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 17
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaTrashAlt"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 19
    }
  })) : null), __jsx(ContentContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, post.Images && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    images: post.Images,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 27
    }
  }), __jsx(Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, post.content)), __jsx(UnderSideContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, __jsx(IconsContainer, {
    onClick: onToggleLike,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, liked ? __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoIosHeartEmpty"], {
    color: "red",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 16
    }
  }) : __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoIosHeart"], {
    color: "red",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 16
    }
  })), __jsx(IconsContainer, {
    onClick: onToggleCommnet,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaRegCommentDots"], {
    color: "#3498db",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  }))), commentFormOpend && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }, "\uB313\uAE00\uCC3D"));
};

_s(PostCard, "aQaAbC4Wl/3Qfp0Vb0DZi7l6ftA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c10 = PostCard;
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "ProfileImageContainer");
$RefreshReg$(_c3, "PostInformationContainer");
$RefreshReg$(_c4, "Nickname");
$RefreshReg$(_c5, "DeleteButton");
$RefreshReg$(_c6, "ContentContainer");
$RefreshReg$(_c7, "Description");
$RefreshReg$(_c8, "UnderSideContainer");
$RefreshReg$(_c9, "IconsContainer");
$RefreshReg$(_c10, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJQcm9maWxlSW1hZ2VDb250YWluZXIiLCJQb3N0SW5mb3JtYXRpb25Db250YWluZXIiLCJOaWNrbmFtZSIsInNwYW4iLCJEYXRlIiwiRGVsZXRlQnV0dG9uIiwiQ29udGVudENvbnRhaW5lciIsIkRlc2NyaXB0aW9uIiwiVW5kZXJTaWRlQ29udGFpbmVyIiwiSWNvbnNDb250YWluZXIiLCJwcm9wcyIsImNvbG9yIiwiQW1vdW50IiwiUG9zdENhcmQiLCJwb3N0IiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlU3RhdGUiLCJsaWtlZCIsInNldExpa2VkIiwiY29tbWVudEZvcm1PcGVuZCIsInNldENvbW1lbnRGb3JtT3BlbmQiLCJvblRvZ2dsZUxpa2UiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJvblRvZ2dsZUNvbW1uZXQiLCJyZXF1aXJlIiwiVXNlciIsIm5pY2tuYW1lIiwiSW1hZ2VzIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsaUZBQWY7S0FBTUYsUztBQU9OLElBQU1HLHFCQUFxQixHQUFHRix5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLCtGQUEzQjtNQUFNQyxxQjtBQVNOLElBQU1DLHdCQUF3QixHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLCtGQUE5QjtNQUFNRSx3QjtBQVFOLElBQU1DLFFBQVEsR0FBR0oseURBQU0sQ0FBQ0ssSUFBVjtFQUFBO0VBQUE7QUFBQSx1Q0FBZDtNQUFNRCxRO0FBS04sSUFBTUUsSUFBSSxHQUFHTix5REFBTSxD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QTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBRGxCLEVBRUUsTUFBQyxXQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDR2xCLElBQUksQ0FBQ21CLE9BRFIsQ0FGRixDQWJGLEVBbUJFLE1BQUMsa0JBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsY0FBRDtJQUFnQixPQUFPLEVBQUVSLFlBQXpCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDR0osS0FBSyxHQUNILE1BQUMsOERBQUQ7SUFBaUIsS0FBSyxFQUFDLEtBQXZCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERyxHQUVILE1BQUMseURBQUQ7SUFBWSxLQUFLLEVBQUMsS0FBbEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUhMLENBREYsRUFPRSxNQUFDLGNBQUQ7SUFBZ0IsT0FBTyxFQUFFTyxlQUF6QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQywrREFBRDtJQUFrQixLQUFLLEVBQUMsU0FBeEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURGLENBUEYsQ0FuQkYsRUE4QkdMLGdCQUFnQixJQUNmO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsd0JBL0JKLENBRko7QUFzQ0QsQ0FuREQ7O0dBQU1WLFE7VUFDT0csdUQ7OztPQURQSCxRO0FBcURTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZDNiNjk2ZGNhZTM1OTUxZWFmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUHJvZmlsZUltYWdlIGZyb20gJy4vUHJvZmlsZUltYWdlJztcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuaW1wb3J0IHsgRmFUcmFzaEFsdCwgRmFSZWdDb21tZW50RG90cyB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBJb0lvc0hlYXJ0RW1wdHksIElvSW9zSGVhcnQgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogNzAwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNlNmVjZjA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuYDsgXHJcblxyXG5jb25zdCBQcm9maWxlSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGhlaWdodDogNTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdEluZm9ybWF0aW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDU4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG5gO1xyXG5cclxuY29uc3QgTmlja25hbWUgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuYDtcclxuXHJcbmNvbnN0IERhdGUgPSBzdHlsZWQuc3BhbmBcclxuYDtcclxuXHJcbmNvbnN0IERlbGV0ZUJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogI2U4NTM3YztcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLnNwYW5gXHJcbiAgd2lkdGg6IDg1JTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvLyBJReyXkOyEnCDsiqTtgazroaTrsJQg6rCQ7LakXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyAvLyDsnIjrj4TsmrAg7YGs66GsIOuTsVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFVuZGVyU2lkZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSWNvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yfTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQW1vdW50ID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG4gIGNvbnN0IFtsaWtlZCwgc2V0TGlrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5kLCBzZXRDb21tZW50Rm9ybU9wZW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBcclxuICBjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRMaWtlZCgocHJldikgPT4gIXByZXYpO1xyXG4gIH0sIFtsaWtlZF0pO1xyXG5cclxuICBjb25zdCBvblRvZ2dsZUNvbW1uZXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRDb21tZW50Rm9ybU9wZW5kKChwcmV2KSA9PiAhcHJldik7XHJcbiAgfSwgW2NvbW1lbnRGb3JtT3BlbmRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIHBvc3QgJiYgKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxQcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgICA8UHJvZmlsZUltYWdlIHNyYz17cmVxdWlyZSgnLi4vaW1hZ2UvdXNlci5wbmcnKX0gLz4gXHJcbiAgICAgICAgPC9Qcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgPFBvc3RJbmZvcm1hdGlvbkNvbnRhaW5lcj5cclxuICAgICAgICAgIDxOaWNrbmFtZT57IHBvc3QuVXNlci5uaWNrbmFtZSB9PC9OaWNrbmFtZT5cclxuICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IGlkXHJcbiAgICAgICAgICAgID8gKCA8RGVsZXRlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8RmFUcmFzaEFsdCAvPlxyXG4gICAgICAgICAgICAgICAgPC9EZWxldGVCdXR0b24+ICkgXHJcbiAgICAgICAgICAgIDogbnVsbCBcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L1Bvc3RJbmZvcm1hdGlvbkNvbnRhaW5lcj5cclxuICAgICAgICA8Q29udGVudENvbnRhaW5lcj5cclxuICAgICAgICAgIHtwb3N0LkltYWdlcyAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuICAgICAgICAgIDxEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAge3Bvc3QuY29udGVudH1cclxuICAgICAgICAgIDwvRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPC9Db250ZW50Q29udGFpbmVyPlxyXG4gICAgICAgIDxVbmRlclNpZGVDb250YWluZXI+XHJcbiAgICAgICAgICA8SWNvbnNDb250YWluZXIgb25DbGljaz17b25Ub2dnbGVMaWtlfT5cclxuICAgICAgICAgICAge2xpa2VkIFxyXG4gICAgICAgICAgICAgPyA8SW9Jb3NIZWFydEVtcHR5IGNvbG9yPVwicmVkXCIgLz5cclxuICAgICAgICAgICAgIDogPElvSW9zSGVhcnQgY29sb3I9XCJyZWRcIiAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L0ljb25zQ29udGFpbmVyPlxyXG4gICAgICAgICAgPEljb25zQ29udGFpbmVyIG9uQ2xpY2s9e29uVG9nZ2xlQ29tbW5ldH0+XHJcbiAgICAgICAgICAgIDxGYVJlZ0NvbW1lbnREb3RzIGNvbG9yPVwiIzM0OThkYlwiLz5cclxuICAgICAgICAgIDwvSWNvbnNDb250YWluZXI+XHJcbiAgICAgICAgPC9VbmRlclNpZGVDb250YWluZXI+XHJcbiAgICAgICAge2NvbW1lbnRGb3JtT3BlbmQgJiYgKFxyXG4gICAgICAgICAgPGRpdj7rjJPquIDssL08L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9