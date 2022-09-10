webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Comment.js":
/*!*******************************!*\
  !*** ./components/Comment.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _ProfileImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProfileImage */ "./components/ProfileImage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _CommentUpdateForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CommentUpdateForm */ "./components/CommentUpdateForm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\components\\Comment.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Container = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Comment__Container",
  componentId: "sc-pzjnng-0"
})(["min-height:30px;padding:5px 15px 15px 30px;"]);
_c = Container;
var InformationContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Comment__InformationContainer",
  componentId: "sc-pzjnng-1"
})(["display:flex;justify-content:space-between;height:20px;align-items:center;margin:3px 10px 0px 10px;"]);
_c2 = InformationContainer;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Comment__ProfileImageContainer",
  componentId: "sc-pzjnng-2"
})(["width:35px;height:35px;margin-right:12px;border-radius:50px;overflow:hidden;float:left;"]);
_c3 = ProfileImageContainer;
var ALink = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].a.withConfig({
  displayName: "Comment__ALink",
  componentId: "sc-pzjnng-3"
})(["color:black;cursor:pointer;"]);
_c4 = ALink;
var Nickname = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].span.withConfig({
  displayName: "Comment__Nickname",
  componentId: "sc-pzjnng-4"
})(["font-size:17px;font-weight:600;"]);
_c5 = Nickname;
var Date = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].span.withConfig({
  displayName: "Comment__Date",
  componentId: "sc-pzjnng-5"
})(["margin-left:8px;color:#657785;font-size:13px;"]);
_c6 = Date;
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Comment__ButtonContainer",
  componentId: "sc-pzjnng-6"
})(["display:flex;margin-right:2px;"]);
_c7 = ButtonContainer;
var UpdateButton = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Comment__UpdateButton",
  componentId: "sc-pzjnng-7"
})(["color:#1864ab;opacity:0.6;font-size:16px;margin-right:8px;cursor:pointer;transition:all 0.2s linear;&:hover{opacity:1;}"]);
_c8 = UpdateButton;
var DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Comment__DeleteButton",
  componentId: "sc-pzjnng-8"
})(["color:#e8537c;opacity:0.6;font-size:16px;cursor:pointer;transition:all 0.2s linear;&:hover{opacity:1;}"]);
_c9 = DeleteButton;
var ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "Comment__ContentContainer",
  componentId: "sc-pzjnng-9"
})(["display:flex;flex-direction:column;padding-top:15px;font-size:15px;"]);
_c10 = ContentContainer;

var Comment = function Comment(_ref) {
  _s();

  var postId = _ref.postId,
      comment = _ref.comment;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      editMode = _useState[0],
      setEditMode = _useState[1];

  var onChangeEditMode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setEditMode(true);
  }, [editMode]);
  var onRemoveComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["REMOVE_COMMENT_REQUEST"],
        data: {
          postId: postId,
          commentId: comment.id
        }
      });
    } else {
      return;
    }

    ;
  }, []);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 5
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[id]",
    as: "/profile/".concat(comment.User.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    path: comment.User.profileImagePath ? comment.User.profileImagePath : null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  })))), __jsx(InformationContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[id]",
    as: "/profile/".concat(comment.User.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, __jsx(ALink, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 20
    }
  }, comment.User.nickname))), __jsx(Date, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }, moment__WEBPACK_IMPORTED_MODULE_6___default()(comment.createdAt).format('YYYY/MM/DD h:mm'))), id && comment.User.id === parseInt(id) ? __jsx(ButtonContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx(UpdateButton, {
    onClick: onChangeEditMode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaPen"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 17
    }
  })), __jsx(DeleteButton, {
    onClick: onRemoveComment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaTrashAlt"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }))) : null), editMode ? __jsx(_CommentUpdateForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
    commentId: comment.id,
    commentContent: comment.content,
    setEditMode: setEditMode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }) : __jsx(ContentContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, comment.content));
};

_s(Comment, "i0LqtNDofKIbcDkuWtTgM+ostXs=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c11 = Comment;
Comment.propTypes = {
  comment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Comment);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "InformationContainer");
$RefreshReg$(_c3, "ProfileImageContainer");
$RefreshReg$(_c4, "ALink");
$RefreshReg$(_c5, "Nickname");
$RefreshReg$(_c6, "Date");
$RefreshReg$(_c7, "ButtonContainer");
$RefreshReg$(_c8, "UpdateButton");
$RefreshReg$(_c9, "DeleteButton");
$RefreshReg$(_c10, "ContentContainer");
$RefreshReg$(_c11, "Comment");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50LmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkluZm9ybWF0aW9uQ29udGFpbmVyIiwiUHJvZmlsZUltYWdlQ29udGFpbmVyIiwiQUxpbmsiLCJhIiwiTmlja25hbWUiLCJzcGFuIiwiRGF0ZSIsIkJ1dHRvbkNvbnRhaW5lciIsIlVwZGF0ZUJ1dHRvbiIsIkRlbGV0ZUJ1dHRvbiIsIkNvbnRlbnRDb250YWluZXIiLCJDb21tZW50IiwicG9zdElkIiwiY29tbWVudCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VTdGF0ZSIsImVkaXRNb2RlIiwic2V0RWRpdE1vZGUiLCJvbkNoYW5nZUVkaXRNb2RlIiwidXNlQ2FsbGJhY2siLCJvblJlbW92ZUNvbW1lbnQiLCJ3aW5kb3ciLCJjb25maXJtIiwidHlwZSIsIlJFTU9WRV9DT01NRU5UX1JFUVVFU1QiLCJkYXRhIiwiY29tbWVudElkIiwiVXNlciIsInByb2ZpbGVJbWFnZVBhdGgiLCJuaWNrbmFtZSIsIm1vbWVudCIsImNyZWF0ZWRBdCIsImZvcm1hdCIsInBhcnNlSW50IiwiY29udGVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLG1EQUFmO0tBQU1GLFM7QUFLTixJQUFNRyxvQkFBb0IsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSwyR0FBMUI7TUFBTUMsb0I7QUFRTixJQUFNQyxxQkFBcUIsR0FBR0gseURBQU0s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QUVqQixXQUhmO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFESyxHQU1MLE1BQUMsZ0JBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNHVixPQUFPLENBQUMyQixPQURYLENBakNOLENBREY7QUF3Q0QsQ0EvREQ7O0dBQU03QixPO1VBQ2FJLHVELEVBQ05FLHVEOzs7T0FGUE4sTztBQWlFTkEsT0FBTyxDQUFDOEIsU0FBUixHQUFvQjtFQUNsQjVCLE9BQU8sRUFBRTZCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBRFIsQ0FBcEI7QUFJZWpDLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjI5OTRmZDZkNDViZDIyODJjZTZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJFTU9WRV9DT01NRU5UX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IFByb2ZpbGVJbWFnZSBmcm9tICcuL1Byb2ZpbGVJbWFnZSc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBGYVBlbiwgRmFUcmFzaEFsdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgQ29tbWVudFVwZGF0ZUZvcm0gZnJvbSAnLi9Db21tZW50VXBkYXRlRm9ybSc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1pbi1oZWlnaHQ6IDMwcHg7XHJcbiAgcGFkZGluZzogNXB4IDE1cHggMTVweCAzMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSW5mb3JtYXRpb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGhlaWdodDogMjBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogM3B4IDEwcHggMHB4IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBQcm9maWxlSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG5gO1xyXG5cclxuY29uc3QgQUxpbmsgPSBzdHlsZWQuYWBcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuY29uc3QgTmlja25hbWUgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuYDtcclxuXHJcbmNvbnN0IERhdGUgPSBzdHlsZWQuc3BhbmBcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIGNvbG9yOiAjNjU3Nzg1O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuYDtcclxuXHJcbmNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuYDtcclxuXHJcbmNvbnN0IFVwZGF0ZUJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICMxODY0YWI7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBEZWxldGVCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAjZTg1MzdjO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ29udGVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuYDtcclxuXHJcbmNvbnN0IENvbW1lbnQgPSAoeyBwb3N0SWQsIGNvbW1lbnQgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG4gIGNvbnN0IFtlZGl0TW9kZSwgc2V0RWRpdE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUVkaXRNb2RlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0RWRpdE1vZGUodHJ1ZSk7XHJcbiAgfSwgW2VkaXRNb2RlXSk7XHJcblxyXG4gIGNvbnN0IG9uUmVtb3ZlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICh3aW5kb3cuY29uZmlybShcIuygleunkCDsgq3soJztlZjsi5zqsqDsirXri4jquYw/XCIpKSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBSRU1PVkVfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHBvc3RJZDogcG9zdElkLFxyXG4gICAgICAgICAgY29tbWVudElkOiBjb21tZW50LmlkLFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8UHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9baWRdXCIgYXM9e2AvcHJvZmlsZS8ke2NvbW1lbnQuVXNlci5pZH1gfT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8UHJvZmlsZUltYWdlIHBhdGg9e2NvbW1lbnQuVXNlci5wcm9maWxlSW1hZ2VQYXRoID8gY29tbWVudC5Vc2VyLnByb2ZpbGVJbWFnZVBhdGggOiBudWxsfSAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9Qcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgIDxJbmZvcm1hdGlvbkNvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL1tpZF1cIiBhcz17YC9wcm9maWxlLyR7Y29tbWVudC5Vc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICA8QUxpbms+PE5pY2tuYW1lPntjb21tZW50LlVzZXIubmlja25hbWV9PC9OaWNrbmFtZT48L0FMaW5rPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPERhdGU+eyBtb21lbnQoY29tbWVudC5jcmVhdGVkQXQpLmZvcm1hdCgnWVlZWS9NTS9ERCBoOm1tJykgfTwvRGF0ZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7IGlkICYmIGNvbW1lbnQuVXNlci5pZCA9PT0gcGFyc2VJbnQoaWQpXHJcbiAgICAgICAgICA/IDxCdXR0b25Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgPFVwZGF0ZUJ1dHRvbiBvbkNsaWNrPXtvbkNoYW5nZUVkaXRNb2RlfT5cclxuICAgICAgICAgICAgICAgIDxGYVBlbiAvPlxyXG4gICAgICAgICAgICAgIDwvVXBkYXRlQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxEZWxldGVCdXR0b24gb25DbGljaz17b25SZW1vdmVDb21tZW50fT5cclxuICAgICAgICAgICAgICAgIDxGYVRyYXNoQWx0IC8+XHJcbiAgICAgICAgICAgICAgPC9EZWxldGVCdXR0b24+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICAgICAgOiBudWxsIFxyXG4gICAgICAgIH1cclxuICAgICAgPC9JbmZvcm1hdGlvbkNvbnRhaW5lcj5cclxuICAgICAge2VkaXRNb2RlIFxyXG4gICAgICAgID8gPENvbW1lbnRVcGRhdGVGb3JtIFxyXG4gICAgICAgICAgICBjb21tZW50SWQ9e2NvbW1lbnQuaWR9XHJcbiAgICAgICAgICAgIGNvbW1lbnRDb250ZW50PXtjb21tZW50LmNvbnRlbnR9XHJcbiAgICAgICAgICAgIHNldEVkaXRNb2RlPXtzZXRFZGl0TW9kZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgOiA8Q29udGVudENvbnRhaW5lcj5cclxuICAgICAgICAgICAge2NvbW1lbnQuY29udGVudH1cclxuICAgICAgICAgIDwvQ29udGVudENvbnRhaW5lcj5cclxuICAgICAgfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkNvbW1lbnQucHJvcFR5cGVzID0ge1xyXG4gIGNvbW1lbnQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==