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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _ProfileImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProfileImage */ "./components/ProfileImage.js");
/* harmony import */ var _PostImages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PostImages */ "./components/PostImages.js");
/* harmony import */ var _PostContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PostContent */ "./components/PostContent.js");
/* harmony import */ var _PostUpdateForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./PostUpdateForm */ "./components/PostUpdateForm.js");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Comment */ "./components/Comment.js");
/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CommentForm */ "./components/CommentForm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\components\\Post.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















var Container = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].div.withConfig({
  displayName: "Post__Container",
  componentId: "sc-1cil2or-0"
})(["width:100%;background-color:white;border-bottom:10px solid #e6ecf0;padding:15px 0px;"]);
_c = Container;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].div.withConfig({
  displayName: "Post__ProfileImageContainer",
  componentId: "sc-1cil2or-1"
})(["width:55px;height:55px;margin:0px 15px;border-radius:50px;overflow:hidden;float:left;"]);
_c2 = ProfileImageContainer;
var InformationContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].div.withConfig({
  displayName: "Post__InformationContainer",
  componentId: "sc-1cil2or-2"
})(["height:52px;display:flex;justify-content:space-between;margin-left:10px;margin-top:3px;"]);
_c3 = InformationContainer;
var ALink = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].a.withConfig({
  displayName: "Post__ALink",
  componentId: "sc-1cil2or-3"
})(["color:black;cursor:pointer;"]);
_c4 = ALink;
var Nickname = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].span.withConfig({
  displayName: "Post__Nickname",
  componentId: "sc-1cil2or-4"
})(["margin-top:2px;font-size:18px;font-weight:600;"]);
_c5 = Nickname;
var Date = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].span.withConfig({
  displayName: "Post__Date",
  componentId: "sc-1cil2or-5"
})(["all:unset;position:absolute;margin-top:28px;margin-left:2px;color:#657785;font-size:15px;"]);
_c6 = Date;
var OverIcons = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].div.withConfig({
  displayName: "Post__OverIcons",
  componentId: "sc-1cil2or-6"
})(["display:flex;margin-top:5px;margin-right:20px"]);
_c7 = OverIcons;
var UpdateButton = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].div.withConfig({
  displayName: "Post__UpdateButton",
  componentId: "sc-1cil2or-7"
})(["color:#1864ab;opacity:0.6;font-size:20px;cursor:pointer;margin-right:12px;transition:all 0.2s linear;&:hover{opacity:1;}"]);
_c8 = UpdateButton;
var DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].div.withConfig({
  displayName: "Post__DeleteButton",
  componentId: "sc-1cil2or-8"
})(["color:#e8537c;opacity:0.6;font-size:20px;cursor:pointer;transition:all 0.2s linear;&:hover{opacity:1;}"]);
_c9 = DeleteButton;
var ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].div.withConfig({
  displayName: "Post__ContentContainer",
  componentId: "sc-1cil2or-9"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
_c10 = ContentContainer;
var Content = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].div.withConfig({
  displayName: "Post__Content",
  componentId: "sc-1cil2or-10"
})(["width:85%;min-height:20px;margin-top:35px;line-height:18px;font-size:17px;"]);
_c11 = Content;
var UnderSideContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].div.withConfig({
  displayName: "Post__UnderSideContainer",
  componentId: "sc-1cil2or-11"
})(["display:flex;justify-content:end;align-items:center;margin-top:10px;margin-right:20px;"]);
_c12 = UnderSideContainer;
var UnderIcons = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].div.withConfig({
  displayName: "Post__UnderIcons",
  componentId: "sc-1cil2or-12"
})(["color:", ";opacity:0.7;padding:7px;font-size:20px;transition:all 0.1s linear;cursor:pointer;&:hover{opacity:1;}"], function (props) {
  return props.color;
});
_c13 = UnderIcons;
var Amount = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].div.withConfig({
  displayName: "Post__Amount",
  componentId: "sc-1cil2or-13"
})(["margin:0px 10px 5px -3px;font-size:16px;opacity:0.7;"]);
_c14 = Amount;
var CommentContainer = styled_components__WEBPACK_IMPORTED_MODULE_12__["default"].div.withConfig({
  displayName: "Post__CommentContainer",
  componentId: "sc-1cil2or-14"
})(["width:100%;max-height:500px;margin:10px 0px 0px 0px;padding-top:10px;border-top:2px solid #e6ecf0;"]);
_c15 = CommentContainer;

var Post = function Post(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  var liked = post.Likers.find(function (v) {
    return v.id === id;
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      editMode = _useState[0],
      setEditMode = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentFormOpend = _useState2[0],
      setCommentFormOpend = _useState2[1];

  var postDate = post.createdAt === post.updatedAt ? post.createdAt : post.updatedAt;
  var updated = post.createdAt === post.updatedAt ? false : true;
  var onChangeEditMode = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setEditMode(true);
  }, [editMode]);
  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["REMOVE_POST_REQUEST"],
        data: post.id
      });
    } else {
      return;
    }

    ;
  }, []);
  var onLike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!id) {
      return alert("로그인이 필요합니다");
    }

    ;
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LIKE_POST_REQUEST"],
      data: post.id
    });
  }, [id]);
  var onUnlike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!id) {
      return alert("로그인이 필요합니다");
    }

    ;
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["UNLIKE_POST_REQUEST"],
      data: post.id
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
      lineNumber: 190,
      columnNumber: 7
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[id]",
    as: "/profile/".concat(post.User.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    path: post.User.profileImagePath ? post.User.profileImagePath : null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 15
    }
  })))), __jsx(InformationContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[id]",
    as: "/profile/".concat(post.User.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 11
    }
  }, __jsx(ALink, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 15
    }
  }, post.User.nickname))), __jsx(Date, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 11
    }
  }, moment__WEBPACK_IMPORTED_MODULE_11___default()(postDate).format('YYYY/MM/DD h:mm'), updated ? " (수정됨)" : null), id && post.User.id === parseInt(id) && !editMode ? __jsx(OverIcons, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 15
    }
  }, __jsx(UpdateButton, {
    onClick: onChangeEditMode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 17
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaPen"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 19
    }
  })), __jsx(DeleteButton, {
    onClick: onRemovePost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 17
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaTrashAlt"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 19
    }
  }))) : null), editMode ? __jsx(_PostUpdateForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    post: post,
    setEditMode: setEditMode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 11
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ContentContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 13
    }
  }, post.Images.length >= 1 && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
    images: post.Images,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 43
    }
  }), __jsx(Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 15
    }
  }, __jsx(_PostContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    content: post.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 17
    }
  }))), __jsx(UnderSideContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 13
    }
  }, __jsx(UnderIcons, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 15
    }
  }, liked ? __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_14__["IoIosHeart"], {
    color: "red",
    onClick: onUnlike,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 19
    }
  }) : __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_14__["IoIosHeartEmpty"], {
    color: "red",
    onClick: onLike,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 19
    }
  })), __jsx(Amount, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 15
    }
  }, post.Likers.length), __jsx(UnderIcons, {
    onClick: onToggleComment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 15
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaRegCommentDots"], {
    color: "#3498db",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 17
    }
  })), __jsx(Amount, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 15
    }
  }, post.Comments.length))), commentFormOpend && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(CommentContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 13
    }
  }, post.Comments.map(function (v) {
    return __jsx(_Comment__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: v.id,
      comment: v,
      postId: post.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 41
      }
    });
  })), __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 13
    }
  })));
};

_s(Post, "C89MMynBq+8LhKmVWre1zMQHXvc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c16 = Post;
Post.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    User: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    Comments: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    Likers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    Images: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "ProfileImageContainer");
$RefreshReg$(_c3, "InformationContainer");
$RefreshReg$(_c4, "ALink");
$RefreshReg$(_c5, "Nickname");
$RefreshReg$(_c6, "Date");
$RefreshReg$(_c7, "OverIcons");
$RefreshReg$(_c8, "UpdateButton");
$RefreshReg$(_c9, "DeleteButton");
$RefreshReg$(_c10, "ContentContainer");
$RefreshReg$(_c11, "Content");
$RefreshReg$(_c12, "UnderSideContainer");
$RefreshReg$(_c13, "UnderIcons");
$RefreshReg$(_c14, "Amount");
$RefreshReg$(_c15, "CommentContainer");
$RefreshReg$(_c16, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlByb2ZpbGVJbWFnZUNvbnRhaW5lciIsIkluZm9ybWF0aW9uQ29udGFpbmVyIiwiQUxpbmsiLCJhIiwiTmlja25hbWUiLCJzcGFuIiwiRGF0ZSIsIk92ZXJJY29ucyIsIlVwZGF0ZUJ1dHRvbiIsIkRlbGV0ZUJ1dHRvbiIsIkNvbnRlbnRDb250YWluZXIiLCJDb250ZW50IiwiVW5kZXJTaWRlQ29udGFpbmVyIiwiVW5kZXJJY29ucyIsInByb3BzIiwiY29sb3IiLCJBbW91bnQiLCJDb21tZW50Q29udGFpbmVyIiwiUG9zdCIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwibGlrZWQiLCJMaWtlcnMiLCJmaW5kIiwidiIsInVzZVN0YXRlIiwiZWRpdE1vZGUiLCJzZXRFZGl0TW9kZSIsImNvbW1lbnRGb3JtT3BlbmQiLCJzZXRDb21tZW50Rm9ybU9wZW5kIiwicG9zdERhdGUiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJ1cGRhdGVkIiwib25DaGFuZ2VFZGl0TW9kZSIsInVzZUNhbGxiYWNrIiwib25SZW1vdmVQb3N0Iiwid2luZG93IiwiY29uZmlybSIsInR5cGUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiZGF0YSIsIm9uTGlrZSIsImFsZXJ0IiwiTElLRV9QT1NUX1JFUVVFU1QiLCJvblVubGlrZSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJvblRvZ2dsZUNvbW1lbnQiLCJwcmV2IiwiVXNlciIsInByb2ZpbGVJbWFnZVBhdGgiLCJuaWNrbmFtZSIsIm1vbWVudCIsImZvcm1hdCIsInBhcnNlSW50IiwiSW1hZ2VzIiwibGVuZ3RoIiwiY29udGVudCIsIkNvbW1lbnRzIiwibWFwIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUi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WWV2RCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45Yjg1ZDA2MTE2YTBiNzFjMDE2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBSRU1PVkVfUE9TVF9SRVFVRVNULCBMSUtFX1BPU1RfUkVRVUVTVCwgVU5MSUtFX1BPU1RfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgUHJvZmlsZUltYWdlIGZyb20gJy4vUHJvZmlsZUltYWdlJztcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuaW1wb3J0IFBvc3RDb250ZW50IGZyb20gJy4vUG9zdENvbnRlbnQnO1xyXG5pbXBvcnQgUG9zdFVwZGF0ZUZvcm0gZnJvbSAnLi9Qb3N0VXBkYXRlRm9ybSc7XHJcbmltcG9ydCBDb21tZW50IGZyb20gJy4vQ29tbWVudCc7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tICcuL0NvbW1lbnRGb3JtJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEZhVHJhc2hBbHQsIEZhUGVuLCBGYVJlZ0NvbW1lbnREb3RzIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IElvSW9zSGVhcnRFbXB0eSwgSW9Jb3NIZWFydCB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNlNmVjZjA7XHJcbiAgcGFkZGluZzogMTVweCAwcHg7XHJcbmA7IFxyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTVweDtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgbWFyZ2luOiAwcHggMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbmA7XHJcblxyXG5jb25zdCBJbmZvcm1hdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxuYDtcclxuXHJcbmNvbnN0IEFMaW5rID0gc3R5bGVkLmFgXHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IE5pY2tuYW1lID0gc3R5bGVkLnNwYW5gXHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5gO1xyXG5cclxuY29uc3QgRGF0ZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGFsbDogdW5zZXQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBjb2xvcjogIzY1Nzc4NTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBPdmVySWNvbnMgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweFxyXG5gO1xyXG5cclxuY29uc3QgVXBkYXRlQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogIzE4NjRhYjtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBEZWxldGVCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAjZTg1MzdjO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ29udGVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogODUlO1xyXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbmA7XHJcblxyXG5jb25zdCBVbmRlclNpZGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IFVuZGVySWNvbnMgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yfTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBBbW91bnQgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMHB4IDEwcHggNXB4IC0zcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG9wYWNpdHk6IDAuNztcclxuYDtcclxuXHJcbmNvbnN0IENvbW1lbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgI2U2ZWNmMDtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuICBjb25zdCBsaWtlZCA9IHBvc3QuTGlrZXJzLmZpbmQoKHYpID0+IHYuaWQgPT09IGlkKTtcclxuICBjb25zdCBbZWRpdE1vZGUsIHNldEVkaXRNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29tbWVudEZvcm1PcGVuZCwgc2V0Q29tbWVudEZvcm1PcGVuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgcG9zdERhdGUgPSAocG9zdC5jcmVhdGVkQXQgPT09IHBvc3QudXBkYXRlZEF0KSA/IHBvc3QuY3JlYXRlZEF0IDogcG9zdC51cGRhdGVkQXQ7XHJcbiAgY29uc3QgdXBkYXRlZCA9IChwb3N0LmNyZWF0ZWRBdCA9PT0gcG9zdC51cGRhdGVkQXQpID8gZmFsc2UgOiB0cnVlO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUVkaXRNb2RlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0RWRpdE1vZGUodHJ1ZSk7XHJcbiAgfSwgW2VkaXRNb2RlXSk7XHJcblxyXG4gIGNvbnN0IG9uUmVtb3ZlUG9zdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICh3aW5kb3cuY29uZmlybShcIuygleunkCDsgq3soJztlZjsi5zqsqDsirXri4jquYw/XCIpKSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uTGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KFwi66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpFwiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgIH0pO1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICBjb25zdCBvblVubGlrZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KFwi66Gc6re47J247J20IO2VhOyalO2VqeuLiOuLpFwiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgfSk7XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIGNvbnN0IG9uVG9nZ2xlQ29tbWVudCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldENvbW1lbnRGb3JtT3BlbmQoKHByZXYpID0+ICFwcmV2KTtcclxuICB9LCBbY29tbWVudEZvcm1PcGVuZF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgcG9zdCAmJiAoXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFByb2ZpbGVJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9baWRdXCIgYXM9e2AvcHJvZmlsZS8ke3Bvc3QuVXNlci5pZH1gfT5cclxuICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgPFByb2ZpbGVJbWFnZSBwYXRoPXtwb3N0LlVzZXIucHJvZmlsZUltYWdlUGF0aCA/IHBvc3QuVXNlci5wcm9maWxlSW1hZ2VQYXRoIDogbnVsbH0vPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9Qcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgPEluZm9ybWF0aW9uQ29udGFpbmVyPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL1tpZF1cIiBhcz17YC9wcm9maWxlLyR7cG9zdC5Vc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICA8QUxpbms+XHJcbiAgICAgICAgICAgICAgPE5pY2tuYW1lPntwb3N0LlVzZXIubmlja25hbWV9PC9OaWNrbmFtZT5cclxuICAgICAgICAgICAgPC9BTGluaz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxEYXRlPlxyXG4gICAgICAgICAgICB7bW9tZW50KHBvc3REYXRlKS5mb3JtYXQoJ1lZWVkvTU0vREQgaDptbScpfVxyXG4gICAgICAgICAgICB7dXBkYXRlZCA/IFwiICjsiJjsoJXrkKgpXCIgOiBudWxsfVxyXG4gICAgICAgICAgPC9EYXRlPlxyXG4gICAgICAgICAge2lkICYmIHBvc3QuVXNlci5pZCA9PT0gcGFyc2VJbnQoaWQpICYmICFlZGl0TW9kZVxyXG4gICAgICAgICAgICA/IDxPdmVySWNvbnM+XHJcbiAgICAgICAgICAgICAgICA8VXBkYXRlQnV0dG9uIG9uQ2xpY2s9e29uQ2hhbmdlRWRpdE1vZGV9PlxyXG4gICAgICAgICAgICAgICAgICA8RmFQZW4gLz5cclxuICAgICAgICAgICAgICAgIDwvVXBkYXRlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPERlbGV0ZUJ1dHRvbiBvbkNsaWNrPXtvblJlbW92ZVBvc3R9PlxyXG4gICAgICAgICAgICAgICAgICA8RmFUcmFzaEFsdCAvPlxyXG4gICAgICAgICAgICAgICAgPC9EZWxldGVCdXR0b24+IFxyXG4gICAgICAgICAgICAgIDwvT3Zlckljb25zPlxyXG4gICAgICAgICAgICA6IG51bGwgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9JbmZvcm1hdGlvbkNvbnRhaW5lcj5cclxuICAgICAgICB7ZWRpdE1vZGVcclxuICAgICAgICA/IDxQb3N0VXBkYXRlRm9ybSBcclxuICAgICAgICAgICAgcG9zdD17cG9zdH1cclxuICAgICAgICAgICAgc2V0RWRpdE1vZGU9e3NldEVkaXRNb2RlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA6IDw+XHJcbiAgICAgICAgICAgIDxDb250ZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIHtwb3N0LkltYWdlcy5sZW5ndGggPj0gMSAmJiA8UG9zdEltYWdlcyBpbWFnZXM9e3Bvc3QuSW1hZ2VzfSAvPn1cclxuICAgICAgICAgICAgICA8Q29udGVudD5cclxuICAgICAgICAgICAgICAgIDxQb3N0Q29udGVudCBjb250ZW50PXtwb3N0LmNvbnRlbnR9IC8+XHJcbiAgICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgICA8L0NvbnRlbnRDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxVbmRlclNpZGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPFVuZGVySWNvbnM+XHJcbiAgICAgICAgICAgICAgICB7bGlrZWQgXHJcbiAgICAgICAgICAgICAgICA/IDxJb0lvc0hlYXJ0IGNvbG9yPVwicmVkXCIgb25DbGljaz17b25Vbmxpa2V9IC8+XHJcbiAgICAgICAgICAgICAgICA6IDxJb0lvc0hlYXJ0RW1wdHkgY29sb3I9XCJyZWRcIiBvbkNsaWNrPXtvbkxpa2V9IC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9VbmRlckljb25zPlxyXG4gICAgICAgICAgICAgIDxBbW91bnQ+e3Bvc3QuTGlrZXJzLmxlbmd0aH08L0Ftb3VudD5cclxuICAgICAgICAgICAgICA8VW5kZXJJY29ucyBvbkNsaWNrPXtvblRvZ2dsZUNvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgPEZhUmVnQ29tbWVudERvdHMgY29sb3I9XCIjMzQ5OGRiXCIgLz5cclxuICAgICAgICAgICAgICA8L1VuZGVySWNvbnM+XHJcbiAgICAgICAgICAgICAgPEFtb3VudD57cG9zdC5Db21tZW50cy5sZW5ndGh9PC9BbW91bnQ+XHJcbiAgICAgICAgICAgIDwvVW5kZXJTaWRlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtjb21tZW50Rm9ybU9wZW5kICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDb21tZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIHtwb3N0LkNvbW1lbnRzLm1hcCgodikgPT4gPENvbW1lbnQga2V5PXt2LmlkfSBjb21tZW50PXt2fSBwb3N0SWQ9e3Bvc3QuaWR9IC8+KX1cclxuICAgICAgICAgICAgPC9Db21tZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdD17cG9zdH0vPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbiAgKTtcclxufTtcclxuXHJcblBvc3QucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgQ29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgTGlrZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==