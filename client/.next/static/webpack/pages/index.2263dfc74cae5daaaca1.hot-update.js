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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ProfileImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProfileImage */ "./components/ProfileImage.js");
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _PostContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostContent */ "./components/PostContent.js");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Comment */ "./components/Comment.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\Post.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__Container",
  componentId: "sc-9qbx5f-0"
})(["width:100%;border-bottom:10px solid #e6ecf0;padding:10px;"]);
_c = Container;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__ProfileImageContainer",
  componentId: "sc-9qbx5f-1"
})(["width:55px;height:55px;margin-right:10px;border-radius:50px;overflow:hidden;float:left;"]);
_c2 = ProfileImageContainer;
var InformationContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__InformationContainer",
  componentId: "sc-9qbx5f-2"
})(["height:52px;display:flex;justify-content:space-between;margin-left:10px;margin-top:3px;"]);
_c3 = InformationContainer;
var Nickname = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "Post__Nickname",
  componentId: "sc-9qbx5f-3"
})(["margin-top:3px;font-size:18px;font-weight:600;"]);
_c4 = Nickname;
var Date = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "Post__Date",
  componentId: "sc-9qbx5f-4"
})([""]);
var DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__DeleteButton",
  componentId: "sc-9qbx5f-5"
})(["display:flex;color:#e8537c;opacity:0.6;font-size:18px;cursor:pointer;padding:10px;border-radius:50%;margin-right:16px;transition:all 0.2s linear;&:hover{opacity:1;}"]);
_c5 = DeleteButton;
var ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__ContentContainer",
  componentId: "sc-9qbx5f-6"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
_c6 = ContentContainer;
var Content = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__Content",
  componentId: "sc-9qbx5f-7"
})(["width:85%;min-height:20px;margin-top:20px;line-height:18px;font-size:17px;"]);
_c7 = Content;
var UnderSideContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__UnderSideContainer",
  componentId: "sc-9qbx5f-8"
})(["display:flex;justify-content:end;align-items:center;margin-top:10px;margin-right:25px;"]);
_c8 = UnderSideContainer;
var IconsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__IconsContainer",
  componentId: "sc-9qbx5f-9"
})(["color:", ";opacity:0.7;padding:7px;border-radius:50%;font-size:20px;transition:all 0.1s linear;cursor:pointer;&:hover{opacity:1;}"], function (props) {
  return props.color;
});
_c9 = IconsContainer;
var Amount = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__Amount",
  componentId: "sc-9qbx5f-10"
})(["margin:0px 10px 5px -3px;font-size:16px;opacity:0.7;"]);
_c10 = Amount;
var CommentContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__CommentContainer",
  componentId: "sc-9qbx5f-11"
})(["width:100%;max-height:500px;margin:10px 0px 0px -10px;padding-top:10px;border-top:2px solid #e6ecf0;"]);
_c11 = CommentContainer;

var Post = function Post(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  var liked = post.Likers.find(function (v) {
    return v.id === id;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentFormOpend = _useState[0],
      setCommentFormOpend = _useState[1];

  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["REMOVE_POST_REQUEST"],
      data: post.id
    });
  }, []);
  var onLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!id) {
      return alert("로그인이 필요합니다");
    }

    ;
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["LIKE_POST_REQUEST"],
      data: {
        postId: post.id,
        userId: id
      }
    });
  }, [id]);
  var onUnlike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!id) {
      return alert("로그인이 필요합니다");
    }

    ;
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["UNLIKE_POST_REQUEST"],
      data: {
        postId: post.id,
        userId: id
      }
    });
  }, [id]);
  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setCommentFormOpend(function (prev) {
      return !prev;
    });
  }, [commentFormOpend]);
  return post && __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 7
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: __webpack_require__(/*! ../image/user.png */ "./image/user.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  })), __jsx(InformationContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 9
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 11
    }
  }, post.User.nickname), id && post.User.id === parseInt(id) ? __jsx(DeleteButton, {
    onClick: onRemovePost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 17
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaTrashAlt"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 19
    }
  })) : null), __jsx(ContentContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }, post.Images && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
    images: post.Images,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 27
    }
  }), __jsx(Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }, __jsx(_PostContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    content: post.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 13
    }
  }))), __jsx(UnderSideContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  }, __jsx(IconsContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, liked ? __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_11__["IoIosHeart"], {
    color: "red",
    onClick: onUnlike,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 16
    }
  }) : __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_11__["IoIosHeartEmpty"], {
    color: "red",
    onClick: onLike,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 16
    }
  })), __jsx(Amount, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }
  }, post.Likers.length), __jsx(IconsContainer, {
    onClick: onToggleComment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaRegCommentDots"], {
    color: "#3498db",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  })), __jsx(Amount, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }, post.Comments.length)), commentFormOpend && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(CommentContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }, post.Comments.map(function (v) {
    return __jsx(_Comment__WEBPACK_IMPORTED_MODULE_7__["default"], {
      comment: v,
      postId: post.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 41
      }
    });
  })), __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  })));
};

_s(Post, "iV/2G9XG5AiFCSbTwTdEv/Ml1ws=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c12 = Post;
Post.propType = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "ProfileImageContainer");
$RefreshReg$(_c3, "InformationContainer");
$RefreshReg$(_c4, "Nickname");
$RefreshReg$(_c5, "DeleteButton");
$RefreshReg$(_c6, "ContentContainer");
$RefreshReg$(_c7, "Content");
$RefreshReg$(_c8, "UnderSideContainer");
$RefreshReg$(_c9, "IconsContainer");
$RefreshReg$(_c10, "Amount");
$RefreshReg$(_c11, "CommentContainer");
$RefreshReg$(_c12, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlByb2ZpbGVJbWFnZUNvbnRhaW5lciIsIkluZm9ybWF0aW9uQ29udGFpbmVyIiwiTmlja25hbWUiLCJzcGFuIiwiRGF0ZSIsIkRlbGV0ZUJ1dHRvbiIsIkNvbnRlbnRDb250YWluZXIiLCJDb250ZW50IiwiVW5kZXJTaWRlQ29udGFpbmVyIiwiSWNvbnNDb250YWluZXIiLCJwcm9wcyIsImNvbG9yIiwiQW1vdW50IiwiQ29tbWVudENvbnRhaW5lciIsIlBvc3QiLCJwb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImlkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsImxpa2VkIiwiTGlrZXJzIiwiZmluZCIsInYiLCJ1c2VTdGF0ZSIsImNvbW1lbnRGb3JtT3BlbmQiLCJzZXRDb21tZW50Rm9ybU9wZW5kIiwib25SZW1vdmVQb3N0IiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJvbkxpa2UiLCJhbGVydCIsIkxJS0VfUE9TVF9SRVFVRVNUIiwicG9zdElkIiwidXNlcklkIiwib25Vbmxpa2UiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwib25Ub2dnbGVDb21tZW50IiwicHJldiIsInJlcXVpcmUiLCJVc2VyIiwibmlja25hbWUiLCJwYXJzZUludCIsIkltYWdlcyIsImNvbnRlbnQiLCJsZW5ndGgiLCJDb21tZW50cyIsIm1hcCIsInByb3BUeXBlIiwiUHJvcFR5cGUiLCJvYmplY3QiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdB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REYsQ0FSRixFQVdFLE1BQUMsTUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQVMzQixJQUFJLENBQUNvQyxRQUFMLENBQWNELE1BQXZCLENBWEYsQ0FuQkYsRUFnQ0d0QixnQkFBZ0IsSUFDZixtRUFDRSxNQUFDLGdCQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDR2IsSUFBSSxDQUFDb0MsUUFBTCxDQUFjQyxHQUFkLENBQWtCLFVBQUMxQixDQUFEO0lBQUEsT0FBTyxNQUFDLGdEQUFEO01BQVMsT0FBTyxFQUFFQSxDQUFsQjtNQUFxQixNQUFNLEVBQUVYLElBQUksQ0FBQ0csRUFBbEM7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFQO0VBQUEsQ0FBbEIsQ0FESCxDQURGLEVBSUUsTUFBQyxvREFBRDtJQUFhLElBQUksRUFBRUgsSUFBbkI7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUpGLENBakNKLENBRko7QUE2Q0QsQ0F4RkQ7O0dBQU1ELEk7VUFDYUcsdUQsRUFDTkUsdUQ7OztPQUZQTCxJO0FBMEZOQSxJQUFJLENBQUN1QyxRQUFMLEdBQWdCO0VBQ2R0QyxJQUFJLEVBQUV1QyxpREFBUSxDQUFDQyxNQUFULENBQWdCQztBQURSLENBQWhCO0FBSWUxQyxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yMjYzZGZjNzRjYWU1ZGFhYWNhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUHJvZmlsZUltYWdlIGZyb20gJy4vUHJvZmlsZUltYWdlJztcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuaW1wb3J0IFBvc3RDb250ZW50IGZyb20gJy4vUG9zdENvbnRlbnQnO1xyXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuL0NvbW1lbnQnO1xyXG5pbXBvcnQgQ29tbWVudEZvcm0gZnJvbSAnLi9Db21tZW50Rm9ybSc7XHJcbmltcG9ydCB7IFJFTU9WRV9QT1NUX1JFUVVFU1QsIExJS0VfUE9TVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IEZhVHJhc2hBbHQsIEZhUmVnQ29tbWVudERvdHMgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgSW9Jb3NIZWFydEVtcHR5LCBJb0lvc0hlYXJ0IH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2U2ZWNmMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5gOyBcclxuXHJcbmNvbnN0IFByb2ZpbGVJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDU1cHg7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbmA7XHJcblxyXG5jb25zdCBJbmZvcm1hdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxuYDtcclxuXHJcbmNvbnN0IE5pY2tuYW1lID0gc3R5bGVkLnNwYW5gXHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5gO1xyXG5cclxuY29uc3QgRGF0ZSA9IHN0eWxlZC5zcGFuYFxyXG5gO1xyXG5cclxuY29uc3QgRGVsZXRlQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiAjZTg1MzdjO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDg1JTtcclxuICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG5gO1xyXG5cclxuY29uc3QgVW5kZXJTaWRlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBJY29uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3J9O1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBBbW91bnQgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMHB4IDEwcHggNXB4IC0zcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG9wYWNpdHk6IDAuNztcclxuYDtcclxuXHJcbmNvbnN0IENvbW1lbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIG1hcmdpbjogMTBweCAwcHggMHB4IC0xMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZTZlY2YwO1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG4gIGNvbnN0IGxpa2VkID0gcG9zdC5MaWtlcnMuZmluZCgodikgPT4gdi5pZCA9PT0gaWQpO1xyXG4gIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5kLCBzZXRDb21tZW50Rm9ybU9wZW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBcclxuICBjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25MaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCFpZCkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoXCLroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukXCIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcG9zdElkOiBwb3N0LmlkLFxyXG4gICAgICAgIHVzZXJJZDogaWQsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICBjb25zdCBvblVubGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KFwi66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpFwiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcG9zdElkOiBwb3N0LmlkLFxyXG4gICAgICAgIHVzZXJJZDogaWQsXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICBjb25zdCBvblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRDb21tZW50Rm9ybU9wZW5kKChwcmV2KSA9PiAhcHJldik7XHJcbiAgfSwgW2NvbW1lbnRGb3JtT3BlbmRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIHBvc3QgJiYgKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxQcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgICA8UHJvZmlsZUltYWdlIHNyYz17cmVxdWlyZSgnLi4vaW1hZ2UvdXNlci5wbmcnKX0gLz5cclxuICAgICAgICA8L1Byb2ZpbGVJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICA8SW5mb3JtYXRpb25Db250YWluZXI+XHJcbiAgICAgICAgICA8Tmlja25hbWU+e3Bvc3QuVXNlci5uaWNrbmFtZX08L05pY2tuYW1lPlxyXG4gICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gcGFyc2VJbnQoaWQpXHJcbiAgICAgICAgICAgID8gKCA8RGVsZXRlQnV0dG9uIG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGYVRyYXNoQWx0IC8+XHJcbiAgICAgICAgICAgICAgICA8L0RlbGV0ZUJ1dHRvbj4gKVxyXG4gICAgICAgICAgICA6IG51bGwgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9JbmZvcm1hdGlvbkNvbnRhaW5lcj5cclxuICAgICAgICA8Q29udGVudENvbnRhaW5lcj5cclxuICAgICAgICAgIHtwb3N0LkltYWdlcyAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuICAgICAgICAgIDxDb250ZW50PlxyXG4gICAgICAgICAgICA8UG9zdENvbnRlbnQgY29udGVudD17cG9zdC5jb250ZW50fSAvPlxyXG4gICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgIDwvQ29udGVudENvbnRhaW5lcj5cclxuICAgICAgICA8VW5kZXJTaWRlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPEljb25zQ29udGFpbmVyPlxyXG4gICAgICAgICAgICB7bGlrZWQgXHJcbiAgICAgICAgICAgICA/IDxJb0lvc0hlYXJ0IGNvbG9yPVwicmVkXCIgb25DbGljaz17b25Vbmxpa2V9Lz5cclxuICAgICAgICAgICAgIDogPElvSW9zSGVhcnRFbXB0eSBjb2xvcj1cInJlZFwiIG9uQ2xpY2s9e29uTGlrZX0gLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9JY29uc0NvbnRhaW5lcj5cclxuICAgICAgICAgIDxBbW91bnQ+e3Bvc3QuTGlrZXJzLmxlbmd0aH08L0Ftb3VudD5cclxuICAgICAgICAgIDxJY29uc0NvbnRhaW5lciBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9PlxyXG4gICAgICAgICAgICA8RmFSZWdDb21tZW50RG90cyBjb2xvcj1cIiMzNDk4ZGJcIi8+XHJcbiAgICAgICAgICA8L0ljb25zQ29udGFpbmVyPlxyXG4gICAgICAgICAgPEFtb3VudD57cG9zdC5Db21tZW50cy5sZW5ndGh9PC9BbW91bnQ+XHJcbiAgICAgICAgPC9VbmRlclNpZGVDb250YWluZXI+XHJcbiAgICAgICAge2NvbW1lbnRGb3JtT3BlbmQgJiYgKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPENvbW1lbnRDb250YWluZXI+XHJcbiAgICAgICAgICAgICAge3Bvc3QuQ29tbWVudHMubWFwKCh2KSA9PiA8Q29tbWVudCBjb21tZW50PXt2fSBwb3N0SWQ9e3Bvc3QuaWR9IC8+KX1cclxuICAgICAgICAgICAgPC9Db21tZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdD17cG9zdH0vPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbiAgKTtcclxufTtcclxuXHJcblBvc3QucHJvcFR5cGUgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGUub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdLCJzb3VyY2VSb290IjoiIn0=