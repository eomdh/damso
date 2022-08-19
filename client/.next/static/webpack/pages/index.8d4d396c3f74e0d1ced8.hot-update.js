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
})(["width:80px;height:60px;margin-right:10px;border-radius:50px;overflow:hidden;"]);
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
})(["display:flex;justify-content:center;color:#e8537c;opacity:0.6;font-size:18px;cursor:pointer;padding:10px;border-radius:50%;margin-right:16px;transition:all 0.2s linear;&:hover{opacity:1;}"]);
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
var UnderSideContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostCard__UnderSideContainer",
  componentId: "sc-t7sfa8-9"
})(["display:flex;justify-content:end;align-items:center;margin-top:10px;margin-right:20px;"]);
_c9 = UnderSideContainer;
var IconsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostCard__IconsContainer",
  componentId: "sc-t7sfa8-10"
})(["color:", ";opacity:0.7;padding:7px;border-radius:50%;font-size:20px;transition:all 0.1s linear;cursor:pointer;&:hover{opacity:1;}"], function (props) {
  return props.color;
});
_c10 = IconsContainer;
var Amount = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostCard__Amount",
  componentId: "sc-t7sfa8-11"
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
  return post && __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, __jsx(UpsideContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: __webpack_require__(/*! ../image/user.png */ "./image/user.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  })), __jsx(PostInformationContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, post.User.nickname)), id && post.User.id === id ? __jsx(DeleteButton, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaTrashAlt"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  })) : null), __jsx(ContentContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 9
    }
  }, post.Images && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    images: post.Images,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 27
    }
  }), __jsx(Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 11
    }
  }, post.content)), __jsx(UnderSideContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, __jsx(IconsContainer, {
    onClick: onToggleLike,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, liked ? __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoIosHeartEmpty"], {
    color: "red",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 16
    }
  }) : __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoIosHeart"], {
    color: "red",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 16
    }
  })), __jsx(IconsContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaRegCommentDots"], {
    color: "#3498db",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }))));
};

_s(PostCard, "ryIUz5dfyzONSeSrUdh8llBu/wg=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c11 = PostCard;
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "UpsideContainer");
$RefreshReg$(_c3, "PostInformationContainer");
$RefreshReg$(_c4, "ProfileImageContainer");
$RefreshReg$(_c5, "Nickname");
$RefreshReg$(_c6, "DeleteButton");
$RefreshReg$(_c7, "ContentContainer");
$RefreshReg$(_c8, "Description");
$RefreshReg$(_c9, "UnderSideContainer");
$RefreshReg$(_c10, "IconsContainer");
$RefreshReg$(_c11, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJVcHNpZGVDb250YWluZXIiLCJQb3N0SW5mb3JtYXRpb25Db250YWluZXIiLCJQcm9maWxlSW1hZ2VDb250YWluZXIiLCJOaWNrbmFtZSIsInNwYW4iLCJEYXRlIiwiRGVsZXRlQnV0dG9uIiwiQ29udGVudENvbnRhaW5lciIsIkRlc2NyaXB0aW9uIiwiVW5kZXJTaWRlQ29udGFpbmVyIiwiSWNvbnNDb250YWluZXIiLCJwcm9wcyIsImNvbG9yIiwiQW1vdW50IiwiUG9zdENhcmQiLCJwb3N0IiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlU3RhdGUiLCJsaWtlZCIsInNldExpa2VkIiwiY29tbWVudEZvcm1PcGVuZCIsInNldENvbW1lbnRGb3JtT3BlbmQiLCJvblRvZ2dsZUxpa2UiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJyZXF1aXJlIiwiVXNlciIsIm5pY2tuYW1lIiwiSW1hZ2VzIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsaUZBQWY7S0FBTUYsUztBQU9OLElBQU1HLGVBQWUsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxnQ0FBckI7TUFBTUMsZTtBQUtOLElBQU1DLHdCQUF3QixHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLGdFQUE5QjtNQUFNRSx3QjtBQU9OLElBQU1DLHFCQUFxQixHQUFHSix5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLG9GQUEzQjtNQUFNRyxxQjtBQVFOLElBQU1DLFFBQVEsR0FBR0wseURBQU0s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QURsQixFQUVFLE1BQUMsV0FBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0dqQixJQUFJLENBQUNrQixPQURSLENBRkYsQ0FoQkYsRUFzQkUsTUFBQyxrQkFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxjQUFEO0lBQWdCLE9BQU8sRUFBRVAsWUFBekI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNHSixLQUFLLEdBQ0gsTUFBQyw4REFBRDtJQUFpQixLQUFLLEVBQUMsS0FBdkI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURHLEdBRUgsTUFBQyx5REFBRDtJQUFZLEtBQUssRUFBQyxLQUFsQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBSEwsQ0FERixFQU9FLE1BQUMsY0FBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQywrREFBRDtJQUFrQixLQUFLLEVBQUMsU0FBeEI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURGLENBUEYsQ0F0QkYsQ0FGSjtBQXNDRCxDQS9DRDs7R0FBTVIsUTtVQUNPRyx1RDs7O09BRFBILFE7QUFpRFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhkNGQzOTZjM2Y3NGUwZDFjZWQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9maWxlSW1hZ2UgZnJvbSAnLi9Qcm9maWxlSW1hZ2UnO1xyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tICcuL1Bvc3RJbWFnZXMnO1xyXG5pbXBvcnQgeyBGYVRyYXNoQWx0LCBGYVJlZ0NvbW1lbnREb3RzIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IElvSW9zSGVhcnRFbXB0eSwgSW9Jb3NIZWFydCB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiA3MDBweDtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2U2ZWNmMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5gOyBcclxuXHJcbmNvbnN0IFVwc2lkZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RJbmZvcm1hdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbmA7XHJcblxyXG5jb25zdCBQcm9maWxlSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gO1xyXG5cclxuY29uc3QgTmlja25hbWUgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuYDtcclxuXHJcbmNvbnN0IERhdGUgPSBzdHlsZWQuc3BhbmBcclxuYDtcclxuXHJcbmNvbnN0IERlbGV0ZUJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjb2xvcjogI2U4NTM3YztcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IERlc2NyaXB0aW9uID0gc3R5bGVkLnNwYW5gXHJcbiAgd2lkdGg6IDg1JTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgbWluLWhlaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvLyBJReyXkOyEnCDsiqTtgazroaTrsJQg6rCQ7LakXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyAvLyDsnIjrj4TsmrAg7YGs66GsIOuTsVxyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFVuZGVyU2lkZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSWNvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yfTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQW1vdW50ID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG4gIGNvbnN0IFtsaWtlZCwgc2V0TGlrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5kLCBzZXRDb21tZW50Rm9ybU9wZW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBcclxuICBjb25zdCBvblRvZ2dsZUxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRMaWtlZCgocHJldikgPT4gIXByZXYpO1xyXG4gIH0sIFtsaWtlZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgcG9zdCAmJiAoXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFVwc2lkZUNvbnRhaW5lcj5cclxuICAgICAgICAgIDxQcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxQcm9maWxlSW1hZ2Ugc3JjPXtyZXF1aXJlKCcuLi9pbWFnZS91c2VyLnBuZycpfSAvPiBcclxuICAgICAgICAgIDwvUHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPFBvc3RJbmZvcm1hdGlvbkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPE5pY2tuYW1lPnsgcG9zdC5Vc2VyLm5pY2tuYW1lIH08L05pY2tuYW1lPlxyXG4gICAgICAgICAgPC9Qb3N0SW5mb3JtYXRpb25Db250YWluZXI+XHJcbiAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZFxyXG4gICAgICAgICAgICA/IChcclxuICAgICAgICAgICAgPERlbGV0ZUJ1dHRvbj5cclxuICAgICAgICAgICAgICA8RmFUcmFzaEFsdCAvPlxyXG4gICAgICAgICAgICA8L0RlbGV0ZUJ1dHRvbj5cclxuICAgICAgICAgICAgKSA6IFxyXG4gICAgICAgICAgICBudWxsIH1cclxuICAgICAgICA8L1Vwc2lkZUNvbnRhaW5lcj5cclxuICAgICAgICA8Q29udGVudENvbnRhaW5lcj5cclxuICAgICAgICAgIHtwb3N0LkltYWdlcyAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuICAgICAgICAgIDxEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAge3Bvc3QuY29udGVudH1cclxuICAgICAgICAgIDwvRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPC9Db250ZW50Q29udGFpbmVyPlxyXG4gICAgICAgIDxVbmRlclNpZGVDb250YWluZXI+XHJcbiAgICAgICAgICA8SWNvbnNDb250YWluZXIgb25DbGljaz17b25Ub2dnbGVMaWtlfT5cclxuICAgICAgICAgICAge2xpa2VkIFxyXG4gICAgICAgICAgICAgPyA8SW9Jb3NIZWFydEVtcHR5IGNvbG9yPVwicmVkXCIgLz5cclxuICAgICAgICAgICAgIDogPElvSW9zSGVhcnQgY29sb3I9XCJyZWRcIiAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L0ljb25zQ29udGFpbmVyPlxyXG4gICAgICAgICAgPEljb25zQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8RmFSZWdDb21tZW50RG90cyBjb2xvcj1cIiMzNDk4ZGJcIi8+XHJcbiAgICAgICAgICA8L0ljb25zQ29udGFpbmVyPlxyXG4gICAgICAgIDwvVW5kZXJTaWRlQ29udGFpbmVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9