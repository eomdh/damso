webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
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
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Comment */ "./components/Comment.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\Post.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Post__Container",
  componentId: "sc-9qbx5f-0"
})(["width:100%;max-height:700px;border-bottom:5px solid #e6ecf0;padding:10px;"]);
_c = Container;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Post__ProfileImageContainer",
  componentId: "sc-9qbx5f-1"
})(["width:55px;height:55px;margin-right:18px;border-radius:50px;overflow:hidden;float:left;"]);
_c2 = ProfileImageContainer;
var PostInformationContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Post__PostInformationContainer",
  componentId: "sc-9qbx5f-2"
})(["height:52px;display:flex;justify-content:space-between;margin-left:10px;margin-top:3px;"]);
_c3 = PostInformationContainer;
var Nickname = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "Post__Nickname",
  componentId: "sc-9qbx5f-3"
})(["margin-top:3px;font-size:18px;font-weight:600;"]);
_c4 = Nickname;
var Date = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "Post__Date",
  componentId: "sc-9qbx5f-4"
})([""]);
var DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Post__DeleteButton",
  componentId: "sc-9qbx5f-5"
})(["display:flex;color:#e8537c;opacity:0.6;font-size:18px;cursor:pointer;padding:10px;border-radius:50%;margin-right:16px;transition:all 0.2s linear;&:hover{opacity:1;}"]);
_c5 = DeleteButton;
var ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Post__ContentContainer",
  componentId: "sc-9qbx5f-6"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
_c6 = ContentContainer;
var Description = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "Post__Description",
  componentId: "sc-9qbx5f-7"
})(["width:85%;padding-left:10px;overflow:auto;min-height:20px;margin-top:20px;white-space:pre;line-height:18px;-ms-overflow-style:none;&::-webkit-scrollbar{display:none !important;}"]);
_c7 = Description;
var UnderSideContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Post__UnderSideContainer",
  componentId: "sc-9qbx5f-8"
})(["display:flex;justify-content:end;align-items:center;margin-top:10px;margin-right:20px;"]);
_c8 = UnderSideContainer;
var IconsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Post__IconsContainer",
  componentId: "sc-9qbx5f-9"
})(["color:", ";opacity:0.7;padding:7px;border-radius:50%;font-size:20px;transition:all 0.1s linear;cursor:pointer;&:hover{opacity:1;}"], function (props) {
  return props.color;
});
_c9 = IconsContainer;
var Amount = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Post__Amount",
  componentId: "sc-9qbx5f-10"
})(["margin-left:-2px;margin-bottom:5px;font-size:16px;opacity:0.7;"]);
_c10 = Amount;
var CommentContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Post__CommentContainer",
  componentId: "sc-9qbx5f-11"
})(["width:100%;max-height:500px;border-top:2px solid #e6ecf0;"]);
_c11 = CommentContainer;

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
      lineNumber: 129,
      columnNumber: 7
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: __webpack_require__(/*! ../image/user.png */ "./image/user.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }
  })), __jsx(PostInformationContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, post.User.nickname), id && post.User.id === id ? __jsx(DeleteButton, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaTrashAlt"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 19
    }
  })) : null), __jsx(ContentContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, post.Images && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    images: post.Images,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 27
    }
  }), __jsx(Description, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 11
    }
  }, post.content)), __jsx(UnderSideContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 9
    }
  }, __jsx(IconsContainer, {
    onClick: onToggleLike,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 11
    }
  }, liked ? __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosHeartEmpty"], {
    color: "red",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 16
    }
  }) : __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_8__["IoIosHeart"], {
    color: "red",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 16
    }
  })), __jsx(IconsContainer, {
    onClick: onToggleCommnet,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaRegCommentDots"], {
    color: "#3498db",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  })), __jsx(Amount, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }, post.Comments.length)), commentFormOpend && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(CommentContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }, post.Comments.map(function (v) {
    return __jsx(_Comment__WEBPACK_IMPORTED_MODULE_5__["default"], {
      comment: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 41
      }
    });
  })), __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 13
    }
  })));
};

_s(PostCard, "aQaAbC4Wl/3Qfp0Vb0DZi7l6ftA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c12 = PostCard;
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "ProfileImageContainer");
$RefreshReg$(_c3, "PostInformationContainer");
$RefreshReg$(_c4, "Nickname");
$RefreshReg$(_c5, "DeleteButton");
$RefreshReg$(_c6, "ContentContainer");
$RefreshReg$(_c7, "Description");
$RefreshReg$(_c8, "UnderSideContainer");
$RefreshReg$(_c9, "IconsContainer");
$RefreshReg$(_c10, "Amount");
$RefreshReg$(_c11, "CommentContainer");
$RefreshReg$(_c12, "PostCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlByb2ZpbGVJbWFnZUNvbnRhaW5lciIsIlBvc3RJbmZvcm1hdGlvbkNvbnRhaW5lciIsIk5pY2tuYW1lIiwic3BhbiIsIkRhdGUiLCJEZWxldGVCdXR0b24iLCJDb250ZW50Q29udGFpbmVyIiwiRGVzY3JpcHRpb24iLCJVbmRlclNpZGVDb250YWluZXIiLCJJY29uc0NvbnRhaW5lciIsInByb3BzIiwiY29sb3IiLCJBbW91bnQiLCJDb21tZW50Q29udGFpbmVyIiwiUG9zdENhcmQiLCJwb3N0IiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlU3RhdGUiLCJsaWtlZCIsInNldExpa2VkIiwiY29tbWVudEZvcm1PcGVuZCIsInNldENvbW1lbnRGb3JtT3BlbmQiLCJvblRvZ2dsZUxpa2UiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJvblRvZ2dsZUNvbW1uZXQiLCJyZXF1aXJlIiwiVXNlciIsIm5pY2tuYW1lIiwiSW1hZ2VzIiwiY29udGVudCIsIkNvbW1lbnRzIiwibGVuZ3RoIiwibWFwIiwidiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsaUZBQWY7S0FBTUYsUztBQU9OLElBQU1HLHFCQUFxQixHQUFHRix5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLCtGQUEzQjtNQUFNQyxxQjtBQVNOLElBQU1DLHdCQUF3QixHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLCtGQUE5QjtNQUFNRSx3QjtBQVFOLElBQU1DLFFBQVEsR0FBR0oseURBQU0sQ0FBQ0ssSUFBVjtF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ZCxDQUFrQixVQUFDQyxDQUFEO0lBQUEsT0FBTyxNQUFDLGdEQUFEO01BQVMsT0FBTyxFQUFFQSxDQUFsQjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQVA7RUFBQSxDQUFsQixDQURILENBREYsRUFJRSxNQUFDLG9EQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFKRixDQWhDSixDQUZKO0FBNENELENBekREOztHQUFNeEIsUTtVQUNPRyx1RDs7O09BRFBILFE7QUEyRFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI4NDJjYmJmNTk0YjkwYTE3YzQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9maWxlSW1hZ2UgZnJvbSAnLi9Qcm9maWxlSW1hZ2UnO1xyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tICcuL1Bvc3RJbWFnZXMnO1xyXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuL0NvbW1lbnQnO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSAnLi9Db21tZW50Rm9ybSc7XHJcbmltcG9ydCB7IEZhVHJhc2hBbHQsIEZhUmVnQ29tbWVudERvdHMgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgSW9Jb3NIZWFydEVtcHR5LCBJb0lvc0hlYXJ0IH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZTZlY2YwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbmA7IFxyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTVweDtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmbG9hdDogbGVmdDtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RJbmZvcm1hdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxuYDtcclxuXHJcbmNvbnN0IE5pY2tuYW1lID0gc3R5bGVkLnNwYW5gXHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5gO1xyXG5cclxuY29uc3QgRGF0ZSA9IHN0eWxlZC5zcGFuYFxyXG5gO1xyXG5cclxuY29uc3QgRGVsZXRlQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiAjZTg1MzdjO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgRGVzY3JpcHRpb24gPSBzdHlsZWQuc3BhbmBcclxuICB3aWR0aDogODUlO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgd2hpdGUtc3BhY2U6IHByZTtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IC8vIElF7JeQ7IScIOyKpO2BrOuhpOuwlCDqsJDstqRcclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IC8vIOyciOuPhOyasCDtgazroawg65OxXHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVW5kZXJTaWRlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBJY29uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3J9O1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBBbW91bnQgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1sZWZ0OiAtMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgb3BhY2l0eTogMC43O1xyXG5gO1xyXG5cclxuY29uc3QgQ29tbWVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNlNmVjZjA7XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGlkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyLm1lPy5pZCk7XHJcbiAgY29uc3QgW2xpa2VkLCBzZXRMaWtlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2NvbW1lbnRGb3JtT3BlbmQsIHNldENvbW1lbnRGb3JtT3BlbmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIFxyXG4gIGNvbnN0IG9uVG9nZ2xlTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldExpa2VkKChwcmV2KSA9PiAhcHJldik7XHJcbiAgfSwgW2xpa2VkXSk7XHJcblxyXG4gIGNvbnN0IG9uVG9nZ2xlQ29tbW5ldCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldENvbW1lbnRGb3JtT3BlbmQoKHByZXYpID0+ICFwcmV2KTtcclxuICB9LCBbY29tbWVudEZvcm1PcGVuZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgcG9zdCAmJiAoXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFByb2ZpbGVJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICAgIDxQcm9maWxlSW1hZ2Ugc3JjPXtyZXF1aXJlKCcuLi9pbWFnZS91c2VyLnBuZycpfSAvPlxyXG4gICAgICAgIDwvUHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgIDxQb3N0SW5mb3JtYXRpb25Db250YWluZXI+XHJcbiAgICAgICAgICA8Tmlja25hbWU+eyBwb3N0LlVzZXIubmlja25hbWUgfTwvTmlja25hbWU+XHJcbiAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBpZFxyXG4gICAgICAgICAgICA/ICggPERlbGV0ZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEZhVHJhc2hBbHQgLz5cclxuICAgICAgICAgICAgICAgIDwvRGVsZXRlQnV0dG9uPiApIFxyXG4gICAgICAgICAgICA6IG51bGwgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9Qb3N0SW5mb3JtYXRpb25Db250YWluZXI+XHJcbiAgICAgICAgPENvbnRlbnRDb250YWluZXI+XHJcbiAgICAgICAgICB7cG9zdC5JbWFnZXMgJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XHJcbiAgICAgICAgICA8RGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgIHtwb3N0LmNvbnRlbnR9XHJcbiAgICAgICAgICA8L0Rlc2NyaXB0aW9uPlxyXG4gICAgICAgIDwvQ29udGVudENvbnRhaW5lcj5cclxuICAgICAgICA8VW5kZXJTaWRlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPEljb25zQ29udGFpbmVyIG9uQ2xpY2s9e29uVG9nZ2xlTGlrZX0+XHJcbiAgICAgICAgICAgIHtsaWtlZCBcclxuICAgICAgICAgICAgID8gPElvSW9zSGVhcnRFbXB0eSBjb2xvcj1cInJlZFwiIC8+XHJcbiAgICAgICAgICAgICA6IDxJb0lvc0hlYXJ0IGNvbG9yPVwicmVkXCIgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9JY29uc0NvbnRhaW5lcj5cclxuICAgICAgICAgIDxJY29uc0NvbnRhaW5lciBvbkNsaWNrPXtvblRvZ2dsZUNvbW1uZXR9PlxyXG4gICAgICAgICAgICA8RmFSZWdDb21tZW50RG90cyBjb2xvcj1cIiMzNDk4ZGJcIi8+XHJcbiAgICAgICAgICA8L0ljb25zQ29udGFpbmVyPlxyXG4gICAgICAgICAgPEFtb3VudD57cG9zdC5Db21tZW50cy5sZW5ndGh9PC9BbW91bnQ+XHJcbiAgICAgICAgPC9VbmRlclNpZGVDb250YWluZXI+XHJcbiAgICAgICAge2NvbW1lbnRGb3JtT3BlbmQgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPENvbW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAge3Bvc3QuQ29tbWVudHMubWFwKCh2KSA9PiA8Q29tbWVudCBjb21tZW50PXt2fSAvPil9XHJcbiAgICAgICAgICAgIDwvQ29tbWVudENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPENvbW1lbnRGb3JtIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9