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
    if (post.Images) {
      var ImagePaths = post.Images.map(function (v) {
        return v.src;
      });
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LOAD_IMAGE_PATHS"],
        data: ImagePaths
      });
    }

    ;
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
      lineNumber: 198,
      columnNumber: 7
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[id]",
    as: "/profile/".concat(post.User.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    path: post.User.profileImagePath ? post.User.profileImagePath : null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 15
    }
  })))), __jsx(InformationContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[id]",
    as: "/profile/".concat(post.User.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 11
    }
  }, __jsx(ALink, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 13
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 15
    }
  }, post.User.nickname))), __jsx(Date, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 11
    }
  }, moment__WEBPACK_IMPORTED_MODULE_11___default()(postDate).format('YYYY/MM/DD h:mm'), updated ? " (수정됨)" : null), id && post.User.id === parseInt(id) && !editMode ? __jsx(OverIcons, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 15
    }
  }, __jsx(UpdateButton, {
    onClick: onChangeEditMode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 17
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaPen"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 19
    }
  })), __jsx(DeleteButton, {
    onClick: onRemovePost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 17
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaTrashAlt"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 19
    }
  }))) : null), editMode ? __jsx(_PostUpdateForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    post: post,
    setEditMode: setEditMode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 11
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ContentContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 13
    }
  }, post.Images.length >= 1 && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
    images: post.Images,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 43
    }
  }), __jsx(Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 15
    }
  }, __jsx(_PostContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    content: post.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 17
    }
  }))), __jsx(UnderSideContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 13
    }
  }, __jsx(UnderIcons, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 15
    }
  }, liked ? __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_14__["IoIosHeart"], {
    color: "red",
    onClick: onUnlike,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 19
    }
  }) : __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_14__["IoIosHeartEmpty"], {
    color: "red",
    onClick: onLike,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 19
    }
  })), __jsx(Amount, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 15
    }
  }, post.Likers.length), __jsx(UnderIcons, {
    onClick: onToggleComment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 15
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaRegCommentDots"], {
    color: "#3498db",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 17
    }
  })), __jsx(Amount, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 15
    }
  }, post.Comments.length))), commentFormOpend && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(CommentContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
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
        lineNumber: 258,
        columnNumber: 41
      }
    });
  })), __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlByb2ZpbGVJbWFnZUNvbnRhaW5lciIsIkluZm9ybWF0aW9uQ29udGFpbmVyIiwiQUxpbmsiLCJhIiwiTmlja25hbWUiLCJzcGFuIiwiRGF0ZSIsIk92ZXJJY29ucyIsIlVwZGF0ZUJ1dHRvbiIsIkRlbGV0ZUJ1dHRvbiIsIkNvbnRlbnRDb250YWluZXIiLCJDb250ZW50IiwiVW5kZXJTaWRlQ29udGFpbmVyIiwiVW5kZXJJY29ucyIsInByb3BzIiwiY29sb3IiLCJBbW91bnQiLCJDb21tZW50Q29udGFpbmVyIiwiUG9zdCIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwibGlrZWQiLCJMaWtlcnMiLCJmaW5kIiwidiIsInVzZVN0YXRlIiwiZWRpdE1vZGUiLCJzZXRFZGl0TW9kZSIsImNvbW1lbnRGb3JtT3BlbmQiLCJzZXRDb21tZW50Rm9ybU9wZW5kIiwicG9zdERhdGUiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJ1cGRhdGVkIiwib25DaGFuZ2VFZGl0TW9kZSIsInVzZUNhbGxiYWNrIiwiSW1hZ2VzIiwiSW1hZ2VQYXRocyIsIm1hcCIsInNyYyIsInR5cGUiLCJMT0FEX0lNQUdFX1BBVEhTIiwiZGF0YSIsIm9uUmVtb3ZlUG9zdCIsIndpbmRvdyIsImNvbmZpcm0iLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwib25MaWtlIiwiYWxlcnQiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIm9uVW5saWtlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIm9uVG9nZ2xlQ29tbWVudCIsInByZXYiLCJVc2VyIiwicHJvZmlsZUltYWdlUGF0aCIsIm5pY2tuYW1lIiwibW9tZW50IiwiZm9ybWF0IiwicGFyc2VJbnQiLCJsZW5ndGgiLCJjb250ZW50IiwiQ29tbWVudHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsIm9iamVjdCIsInN0cmluZyIsImFycmF5T2YiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMERBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSw0RkFBZjtLQUFNRixTO0FBT04sSUFBTUcscUJBQXFCLEdBQUdGLDBEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsNkZBQTNCO01BQU1DLHFCO0FBU04sSUFBTUMsb0JBQW9CLEdBQUdILDBEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsK0ZBQTFCO01BQU1FLG9CO0FBUU4sSUFBTUMsS0FBSyxHQUFHSiwwREFBTSxDQUFDSyxDQUFWO0VBQUE7RUFBQTtBQUFBLG1DQUFYO01BQU1ELEs7QUFLTixJQUFNRSxRQUFRLEdBQUdOLDBEQUFNLENBQUNPLElBQVY7RUFBQTtFQUFBO0FBQUEsc0RBQWQ7TUFBTUQsUTtBQU1OLElBQU1FLElBQUksR0FBR1IsMERBQU0sQ0FBQ08sSUFBVjtFQUFBO0VBQUE7QUFBQSxpR0FBVjtNQUFNQyxJO0FBU04sSUFBTUMsU0FBUyxHQUFHVCwwREFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLHFEQUFmO01BQU1RLFM7QUFNTixJQUFNQyxZQUFZLEdBQUdWLDBEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsZ0lBQWxCO01BQU1TLFk7QUFZTixJQUFNQyxZQUFZLEdBQUdYLDBEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsOEdBQWxCO01BQU1VLFk7QUFXTixJQUFNQyxnQkFBZ0IsR0FBR1osMERBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxxRkFBdEI7T0FB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QVMsQ0FBQ0ksTUFIQztJQUlwQnJDLFNBQVMsRUFBRWlDLGlEQUFTLENBQUNJLE1BSkQ7SUFLcEJOLFFBQVEsRUFBRUUsaURBQVMsQ0FBQ0ssT0FBVixDQUFrQkwsaURBQVMsQ0FBQ0csTUFBNUIsQ0FMVTtJQU1wQjdDLE1BQU0sRUFBRTBDLGlEQUFTLENBQUNLLE9BQVYsQ0FBa0JMLGlEQUFTLENBQUNHLE1BQTVCLENBTlk7SUFPcEIvQixNQUFNLEVBQUU0QixpREFBUyxDQUFDSyxPQUFWLENBQWtCTCxpREFBUyxDQUFDRyxNQUE1QjtFQVBZLENBQWhCLEVBUUhHO0FBVFksQ0FBakI7QUFZZTFELG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU4MmZlOWY4MDk5NjFhYWYzYWQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJFTU9WRV9QT1NUX1JFUVVFU1QsIExJS0VfUE9TVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9SRVFVRVNULCBMT0FEX0lNQUdFX1BBVEhTIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCBQcm9maWxlSW1hZ2UgZnJvbSAnLi9Qcm9maWxlSW1hZ2UnO1xyXG5pbXBvcnQgUG9zdEltYWdlcyBmcm9tICcuL1Bvc3RJbWFnZXMnO1xyXG5pbXBvcnQgUG9zdENvbnRlbnQgZnJvbSAnLi9Qb3N0Q29udGVudCc7XHJcbmltcG9ydCBQb3N0VXBkYXRlRm9ybSBmcm9tICcuL1Bvc3RVcGRhdGVGb3JtJztcclxuaW1wb3J0IENvbW1lbnQgZnJvbSAnLi9Db21tZW50JztcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gJy4vQ29tbWVudEZvcm0nO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRmFUcmFzaEFsdCwgRmFQZW4sIEZhUmVnQ29tbWVudERvdHMgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgSW9Jb3NIZWFydEVtcHR5LCBJb0lvc0hlYXJ0IH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2U2ZWNmMDtcclxuICBwYWRkaW5nOiAxNXB4IDBweDtcclxuYDsgXHJcblxyXG5jb25zdCBQcm9maWxlSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGhlaWdodDogNTVweDtcclxuICBtYXJnaW46IDBweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmbG9hdDogbGVmdDtcclxuYDtcclxuXHJcbmNvbnN0IEluZm9ybWF0aW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG5gO1xyXG5cclxuY29uc3QgQUxpbmsgPSBzdHlsZWQuYWBcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5gO1xyXG5cclxuY29uc3QgTmlja25hbWUgPSBzdHlsZWQuc3BhbmBcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbmA7XHJcblxyXG5jb25zdCBEYXRlID0gc3R5bGVkLnNwYW5gXHJcbiAgYWxsOiB1bnNldDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMjhweDtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIGNvbG9yOiAjNjU3Nzg1O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuYDtcclxuXHJcbmNvbnN0IE92ZXJJY29ucyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4XHJcbmA7XHJcblxyXG5jb25zdCBVcGRhdGVCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAjMTg2NGFiO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IERlbGV0ZUJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICNlODUzN2M7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWluLWhlaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuYDtcclxuXHJcbmNvbnN0IFVuZGVyU2lkZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgVW5kZXJJY29ucyA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuY29sb3J9O1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEFtb3VudCA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luOiAwcHggMTBweCA1cHggLTNweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgb3BhY2l0eTogMC43O1xyXG5gO1xyXG5cclxuY29uc3QgQ29tbWVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZTZlY2YwO1xyXG5gO1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG4gIGNvbnN0IGxpa2VkID0gcG9zdC5MaWtlcnMuZmluZCgodikgPT4gdi5pZCA9PT0gaWQpO1xyXG4gIGNvbnN0IFtlZGl0TW9kZSwgc2V0RWRpdE1vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5kLCBzZXRDb21tZW50Rm9ybU9wZW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBwb3N0RGF0ZSA9IChwb3N0LmNyZWF0ZWRBdCA9PT0gcG9zdC51cGRhdGVkQXQpID8gcG9zdC5jcmVhdGVkQXQgOiBwb3N0LnVwZGF0ZWRBdDtcclxuICBjb25zdCB1cGRhdGVkID0gKHBvc3QuY3JlYXRlZEF0ID09PSBwb3N0LnVwZGF0ZWRBdCkgPyBmYWxzZSA6IHRydWU7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlRWRpdE1vZGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAocG9zdC5JbWFnZXMpIHtcclxuICAgICAgY29uc3QgSW1hZ2VQYXRocyA9IHBvc3QuSW1hZ2VzLm1hcCgodikgPT4gdi5zcmMpO1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9JTUFHRV9QQVRIUyxcclxuICAgICAgICBkYXRhOiBJbWFnZVBhdGhzLFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHNldEVkaXRNb2RlKHRydWUpO1xyXG4gIH0sIFtlZGl0TW9kZV0pO1xyXG5cclxuICBjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAod2luZG93LmNvbmZpcm0oXCLsoJXrp5Ag7IKt7KCc7ZWY7Iuc6rKg7Iq164uI6rmMP1wiKSkge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvbkxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHJldHVybiBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6RcIik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgY29uc3Qgb25Vbmxpa2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHJldHVybiBhbGVydChcIuuhnOq3uOyduOydtCDtlYTsmpTtlanri4jri6RcIik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgIH0pO1xyXG4gIH0sIFtpZF0pO1xyXG5cclxuICBjb25zdCBvblRvZ2dsZUNvbW1lbnQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRDb21tZW50Rm9ybU9wZW5kKChwcmV2KSA9PiAhcHJldik7XHJcbiAgfSwgW2NvbW1lbnRGb3JtT3BlbmRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIHBvc3QgJiYgKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxQcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvW2lkXVwiIGFzPXtgL3Byb2ZpbGUvJHtwb3N0LlVzZXIuaWR9YH0+XHJcbiAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgIDxQcm9maWxlSW1hZ2UgcGF0aD17cG9zdC5Vc2VyLnByb2ZpbGVJbWFnZVBhdGggPyBwb3N0LlVzZXIucHJvZmlsZUltYWdlUGF0aCA6IG51bGx9Lz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvUHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgIDxJbmZvcm1hdGlvbkNvbnRhaW5lcj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZmlsZS9baWRdXCIgYXM9e2AvcHJvZmlsZS8ke3Bvc3QuVXNlci5pZH1gfT5cclxuICAgICAgICAgICAgPEFMaW5rPlxyXG4gICAgICAgICAgICAgIDxOaWNrbmFtZT57cG9zdC5Vc2VyLm5pY2tuYW1lfTwvTmlja25hbWU+XHJcbiAgICAgICAgICAgIDwvQUxpbms+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8RGF0ZT5cclxuICAgICAgICAgICAge21vbWVudChwb3N0RGF0ZSkuZm9ybWF0KCdZWVlZL01NL0REIGg6bW0nKX1cclxuICAgICAgICAgICAge3VwZGF0ZWQgPyBcIiAo7IiY7KCV65CoKVwiIDogbnVsbH1cclxuICAgICAgICAgIDwvRGF0ZT5cclxuICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IHBhcnNlSW50KGlkKSAmJiAhZWRpdE1vZGVcclxuICAgICAgICAgICAgPyA8T3Zlckljb25zPlxyXG4gICAgICAgICAgICAgICAgPFVwZGF0ZUJ1dHRvbiBvbkNsaWNrPXtvbkNoYW5nZUVkaXRNb2RlfT5cclxuICAgICAgICAgICAgICAgICAgPEZhUGVuIC8+XHJcbiAgICAgICAgICAgICAgICA8L1VwZGF0ZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxEZWxldGVCdXR0b24gb25DbGljaz17b25SZW1vdmVQb3N0fT5cclxuICAgICAgICAgICAgICAgICAgPEZhVHJhc2hBbHQgLz5cclxuICAgICAgICAgICAgICAgIDwvRGVsZXRlQnV0dG9uPiBcclxuICAgICAgICAgICAgICA8L092ZXJJY29ucz5cclxuICAgICAgICAgICAgOiBudWxsIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvSW5mb3JtYXRpb25Db250YWluZXI+XHJcbiAgICAgICAge2VkaXRNb2RlXHJcbiAgICAgICAgPyA8UG9zdFVwZGF0ZUZvcm0gXHJcbiAgICAgICAgICAgIHBvc3Q9e3Bvc3R9XHJcbiAgICAgICAgICAgIHNldEVkaXRNb2RlPXtzZXRFZGl0TW9kZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgOiA8PlxyXG4gICAgICAgICAgICA8Q29udGVudENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICB7cG9zdC5JbWFnZXMubGVuZ3RoID49IDEgJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XHJcbiAgICAgICAgICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8UG9zdENvbnRlbnQgY29udGVudD17cG9zdC5jb250ZW50fSAvPlxyXG4gICAgICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgICAgPC9Db250ZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8VW5kZXJTaWRlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxVbmRlckljb25zPlxyXG4gICAgICAgICAgICAgICAge2xpa2VkIFxyXG4gICAgICAgICAgICAgICAgPyA8SW9Jb3NIZWFydCBjb2xvcj1cInJlZFwiIG9uQ2xpY2s9e29uVW5saWtlfSAvPlxyXG4gICAgICAgICAgICAgICAgOiA8SW9Jb3NIZWFydEVtcHR5IGNvbG9yPVwicmVkXCIgb25DbGljaz17b25MaWtlfSAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvVW5kZXJJY29ucz5cclxuICAgICAgICAgICAgICA8QW1vdW50Pntwb3N0Lkxpa2Vycy5sZW5ndGh9PC9BbW91bnQ+XHJcbiAgICAgICAgICAgICAgPFVuZGVySWNvbnMgb25DbGljaz17b25Ub2dnbGVDb21tZW50fT5cclxuICAgICAgICAgICAgICAgIDxGYVJlZ0NvbW1lbnREb3RzIGNvbG9yPVwiIzM0OThkYlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9VbmRlckljb25zPlxyXG4gICAgICAgICAgICAgIDxBbW91bnQ+e3Bvc3QuQ29tbWVudHMubGVuZ3RofTwvQW1vdW50PlxyXG4gICAgICAgICAgICA8L1VuZGVyU2lkZUNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7Y29tbWVudEZvcm1PcGVuZCAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q29tbWVudENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICB7cG9zdC5Db21tZW50cy5tYXAoKHYpID0+IDxDb21tZW50IGtleT17di5pZH0gY29tbWVudD17dn0gcG9zdElkPXtwb3N0LmlkfSAvPil9XHJcbiAgICAgICAgICAgIDwvQ29tbWVudENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9Lz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG4gICk7XHJcbn07XHJcblxyXG5Qb3N0LnByb3BUeXBlcyA9IHtcclxuICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIExpa2VyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdLCJzb3VyY2VSb290IjoiIn0=