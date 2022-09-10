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

  var commentDate = comment.createdAt === comment.updatedAt ? createdAt : updatedAt;
  var updated = post.createdAt === post.updatedAt ? false : true;
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
      lineNumber: 112,
      columnNumber: 5
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[id]",
    as: "/profile/".concat(comment.User.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    path: comment.User.profileImagePath ? comment.User.profileImagePath : null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  })))), __jsx(InformationContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[id]",
    as: "/profile/".concat(comment.User.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }, __jsx(ALink, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 20
    }
  }, comment.User.nickname))), __jsx(Date, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, moment__WEBPACK_IMPORTED_MODULE_6___default()(commentDate).format('YYYY/MM/DD h:mm'))), id && comment.User.id === parseInt(id) && !editMode ? __jsx(ButtonContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, __jsx(UpdateButton, {
    onClick: onChangeEditMode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaPen"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  })), __jsx(DeleteButton, {
    onClick: onRemoveComment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 15
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaTrashAlt"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }))) : null), editMode ? __jsx(_CommentUpdateForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
    postId: postId,
    commentId: comment.id,
    commentContent: comment.content,
    setEditMode: setEditMode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 11
    }
  }) : __jsx(ContentContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50LmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkluZm9ybWF0aW9uQ29udGFpbmVyIiwiUHJvZmlsZUltYWdlQ29udGFpbmVyIiwiQUxpbmsiLCJhIiwiTmlja25hbWUiLCJzcGFuIiwiRGF0ZSIsIkJ1dHRvbkNvbnRhaW5lciIsIlVwZGF0ZUJ1dHRvbiIsIkRlbGV0ZUJ1dHRvbiIsIkNvbnRlbnRDb250YWluZXIiLCJDb21tZW50IiwicG9zdElkIiwiY29tbWVudCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpZCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJ1c2VTdGF0ZSIsImVkaXRNb2RlIiwic2V0RWRpdE1vZGUiLCJjb21tZW50RGF0ZSIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInVwZGF0ZWQiLCJwb3N0Iiwib25DaGFuZ2VFZGl0TW9kZSIsInVzZUNhbGxiYWNrIiwib25SZW1vdmVDb21tZW50Iiwid2luZG93IiwiY29uZmlybSIsInR5cGUiLCJSRU1PVkVfQ09NTUVOVF9SRVFVRVNUIiwiZGF0YSIsImNvbW1lbnRJZCIsIlVzZXIiLCJwcm9maWxlSW1hZ2VQYXRoIiwibmlja25hbWUiLCJtb21lbnQiLCJmb3JtYXQiLCJwYXJzZUludCIsImNvbnRlbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxtREFBZjtLQUFNRixTO0FBS04sSUFBTUcsb0JBQW9CLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsMkdB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QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyx5REFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsQ0FKRixDQURGLEdBU0UsSUFoQk4sQ0FSRixFQTJCR1QsUUFBUSxHQUNMLE1BQUMsMERBQUQ7SUFDRSxNQUFNLEVBQUVWLE1BRFY7SUFFRSxTQUFTLEVBQUVDLE9BQU8sQ0FBQ0csRUFGckI7SUFHRSxjQUFjLEVBQUVILE9BQU8sQ0FBQytCLE9BSDFCO0lBSUUsV0FBVyxFQUFFckIsV0FKZjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREssR0FPTCxNQUFDLGdCQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDR1YsT0FBTyxDQUFDK0IsT0FEWCxDQWxDTixDQURGO0FBeUNELENBbEVEOztHQUFNakMsTztVQUNhSSx1RCxFQUNORSx1RDs7O09BRlBOLE87QUFvRU5BLE9BQU8sQ0FBQ2tDLFNBQVIsR0FBb0I7RUFDbEJoQyxPQUFPLEVBQUVpQyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURSLENBQXBCO0FBSWVyQyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42MWRjMTUwYzk3OWE5M2UzM2IzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBSRU1PVkVfQ09NTUVOVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCBQcm9maWxlSW1hZ2UgZnJvbSAnLi9Qcm9maWxlSW1hZ2UnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRmFQZW4sIEZhVHJhc2hBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IENvbW1lbnRVcGRhdGVGb3JtIGZyb20gJy4vQ29tbWVudFVwZGF0ZUZvcm0nO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtaW4taGVpZ2h0OiAzMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4IDE1cHggMzBweDtcclxuYDtcclxuXHJcbmNvbnN0IEluZm9ybWF0aW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDNweCAxMHB4IDBweCAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmbG9hdDogbGVmdDtcclxuYDtcclxuXHJcbmNvbnN0IEFMaW5rID0gc3R5bGVkLmFgXHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IE5pY2tuYW1lID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbmA7XHJcblxyXG5jb25zdCBEYXRlID0gc3R5bGVkLnNwYW5gXHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBjb2xvcjogIzY1Nzc4NTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbmA7XHJcblxyXG5jb25zdCBVcGRhdGVCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAjMTg2NGFiO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgRGVsZXRlQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogI2U4NTM3YztcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBDb21tZW50ID0gKHsgcG9zdElkLCBjb21tZW50IH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuICBjb25zdCBbZWRpdE1vZGUsIHNldEVkaXRNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBjb21tZW50RGF0ZSA9IChjb21tZW50LmNyZWF0ZWRBdCA9PT0gY29tbWVudC51cGRhdGVkQXQpID8gY3JlYXRlZEF0IDogdXBkYXRlZEF0XHJcbiAgY29uc3QgdXBkYXRlZCA9IChwb3N0LmNyZWF0ZWRBdCA9PT0gcG9zdC51cGRhdGVkQXQpID8gZmFsc2UgOiB0cnVlO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUVkaXRNb2RlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0RWRpdE1vZGUodHJ1ZSk7XHJcbiAgfSwgW2VkaXRNb2RlXSk7XHJcblxyXG4gIGNvbnN0IG9uUmVtb3ZlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICh3aW5kb3cuY29uZmlybShcIuygleunkCDsgq3soJztlZjsi5zqsqDsirXri4jquYw/XCIpKSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBSRU1PVkVfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHBvc3RJZDogcG9zdElkLFxyXG4gICAgICAgICAgY29tbWVudElkOiBjb21tZW50LmlkLFxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8UHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9baWRdXCIgYXM9e2AvcHJvZmlsZS8ke2NvbW1lbnQuVXNlci5pZH1gfT5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8UHJvZmlsZUltYWdlIHBhdGg9e2NvbW1lbnQuVXNlci5wcm9maWxlSW1hZ2VQYXRoID8gY29tbWVudC5Vc2VyLnByb2ZpbGVJbWFnZVBhdGggOiBudWxsfSAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9Qcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgIDxJbmZvcm1hdGlvbkNvbnRhaW5lcj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL1tpZF1cIiBhcz17YC9wcm9maWxlLyR7Y29tbWVudC5Vc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICA8QUxpbms+PE5pY2tuYW1lPntjb21tZW50LlVzZXIubmlja25hbWV9PC9OaWNrbmFtZT48L0FMaW5rPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPERhdGU+eyBtb21lbnQoY29tbWVudERhdGUpLmZvcm1hdCgnWVlZWS9NTS9ERCBoOm1tJykgfTwvRGF0ZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7IGlkICYmIGNvbW1lbnQuVXNlci5pZCA9PT0gcGFyc2VJbnQoaWQpICYmICFlZGl0TW9kZVxyXG4gICAgICAgICAgPyA8QnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxVcGRhdGVCdXR0b24gb25DbGljaz17b25DaGFuZ2VFZGl0TW9kZX0+XHJcbiAgICAgICAgICAgICAgICA8RmFQZW4gLz5cclxuICAgICAgICAgICAgICA8L1VwZGF0ZUJ1dHRvbj5cclxuICAgICAgICAgICAgICA8RGVsZXRlQnV0dG9uIG9uQ2xpY2s9e29uUmVtb3ZlQ29tbWVudH0+XHJcbiAgICAgICAgICAgICAgICA8RmFUcmFzaEFsdCAvPlxyXG4gICAgICAgICAgICAgIDwvRGVsZXRlQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0J1dHRvbkNvbnRhaW5lcj5cclxuICAgICAgICAgIDogbnVsbCBcclxuICAgICAgICB9XHJcbiAgICAgIDwvSW5mb3JtYXRpb25Db250YWluZXI+XHJcbiAgICAgIHtlZGl0TW9kZSBcclxuICAgICAgICA/IDxDb21tZW50VXBkYXRlRm9ybVxyXG4gICAgICAgICAgICBwb3N0SWQ9e3Bvc3RJZH1cclxuICAgICAgICAgICAgY29tbWVudElkPXtjb21tZW50LmlkfVxyXG4gICAgICAgICAgICBjb21tZW50Q29udGVudD17Y29tbWVudC5jb250ZW50fVxyXG4gICAgICAgICAgICBzZXRFZGl0TW9kZT17c2V0RWRpdE1vZGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDogPENvbnRlbnRDb250YWluZXI+XHJcbiAgICAgICAgICAgIHtjb21tZW50LmNvbnRlbnR9XHJcbiAgICAgICAgICA8L0NvbnRlbnRDb250YWluZXI+XHJcbiAgICAgIH1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5Db21tZW50LnByb3BUeXBlcyA9IHtcclxuICBjb21tZW50OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50OyJdLCJzb3VyY2VSb290IjoiIn0=