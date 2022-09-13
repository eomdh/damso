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
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["OPEN_EDIT_MODE"]
    });
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
      lineNumber: 193,
      columnNumber: 7
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[id]",
    as: "/profile/".concat(post.User.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 13
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    path: post.User.profileImagePath ? post.User.profileImagePath : null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 15
    }
  })))), __jsx(InformationContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/profile/[id]",
    as: "/profile/".concat(post.User.id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  }, __jsx(ALink, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 13
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 15
    }
  }, post.User.nickname))), __jsx(Date, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 11
    }
  }, moment__WEBPACK_IMPORTED_MODULE_11___default()(postDate).format('YYYY/MM/DD h:mm'), updated ? " (수정됨)" : null), id && post.User.id === parseInt(id) && !editMode ? __jsx(OverIcons, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 15
    }
  }, __jsx(UpdateButton, {
    onClick: onChangeEditMode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 17
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaPen"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 19
    }
  })), __jsx(DeleteButton, {
    onClick: onRemovePost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 17
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaTrashAlt"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 19
    }
  }))) : null), editMode ? __jsx(_PostUpdateForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    post: post,
    editMode: editMode,
    setEditMode: setEditMode,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 11
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(ContentContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 13
    }
  }, post.Images.length >= 1 && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_6__["default"], {
    images: post.Images,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 43
    }
  }), __jsx(Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 15
    }
  }, __jsx(_PostContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    content: post.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 17
    }
  }))), __jsx(UnderSideContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 13
    }
  }, __jsx(UnderIcons, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 15
    }
  }, liked ? __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_14__["IoIosHeart"], {
    color: "red",
    onClick: onUnlike,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 19
    }
  }) : __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_14__["IoIosHeartEmpty"], {
    color: "red",
    onClick: onLike,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 19
    }
  })), __jsx(Amount, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 15
    }
  }, post.Likers.length), __jsx(UnderIcons, {
    onClick: onToggleComment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 15
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__["FaRegCommentDots"], {
    color: "#3498db",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 17
    }
  })), __jsx(Amount, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 15
    }
  }, post.Comments.length))), commentFormOpend && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(CommentContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
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
        lineNumber: 254,
        columnNumber: 41
      }
    });
  })), __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlByb2ZpbGVJbWFnZUNvbnRhaW5lciIsIkluZm9ybWF0aW9uQ29udGFpbmVyIiwiQUxpbmsiLCJhIiwiTmlja25hbWUiLCJzcGFuIiwiRGF0ZSIsIk92ZXJJY29ucyIsIlVwZGF0ZUJ1dHRvbiIsIkRlbGV0ZUJ1dHRvbiIsIkNvbnRlbnRDb250YWluZXIiLCJDb250ZW50IiwiVW5kZXJTaWRlQ29udGFpbmVyIiwiVW5kZXJJY29ucyIsInByb3BzIiwiY29sb3IiLCJBbW91bnQiLCJDb21tZW50Q29udGFpbmVyIiwiUG9zdCIsInBvc3QiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaWQiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwibGlrZWQiLCJMaWtlcnMiLCJmaW5kIiwidiIsInVzZVN0YXRlIiwiZWRpdE1vZGUiLCJzZXRFZGl0TW9kZSIsImNvbW1lbnRGb3JtT3BlbmQiLCJzZXRDb21tZW50Rm9ybU9wZW5kIiwicG9zdERhdGUiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJ1cGRhdGVkIiwib25DaGFuZ2VFZGl0TW9kZSIsInVzZUNhbGxiYWNrIiwidHlwZSIsIk9QRU5fRURJVF9NT0RFIiwib25SZW1vdmVQb3N0Iiwid2luZG93IiwiY29uZmlybSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJkYXRhIiwib25MaWtlIiwiYWxlcnQiLCJMSUtFX1BPU1RfUkVRVUVTVCIsIm9uVW5saWtlIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIm9uVG9nZ2xlQ29tbWVudCIsInByZXYiLCJVc2VyIiwicHJvZmlsZUltYWdlUGF0aCIsIm5pY2tuYW1lIiwibW9tZW50IiwiZm9ybWF0IiwicGFyc2VJbnQiLCJJbWFnZXMiLCJsZW5ndGgiLCJjb250ZW50IiwiQ29tbWVudHMiLCJtYXAiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzaGFwZSIsIm51bWJlciIsIm9iamVjdCIsInN0cmluZyIsImFycmF5T2YiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMERBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSw0RkFBZjtLQUFNRixTO0FBT04sSUFBTUcscUJBQXFCLEdBQUdGLDBEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsNkZBQTNCO01BQU1DLHFCO0FBU04sSUFBTUMsb0JBQW9CLEdBQUdILDBEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsK0ZBQTFCO01BQU1FLG9CO0FBUU4sSUFBTUMsS0FBSyxHQUFHSiwwREFBTSxDQUFDSyxDQUFWO0VBQUE7RUFBQTtBQUFBLG1DQUFYO01BQU1ELEs7QUFLTixJQUFNRSxRQUFRLEdBQUdOLDBEQUFNLENBQUNPLElBQVY7RUFBQTtFQUFBO0FBQUEsc0RBQWQ7TUFBTUQsUTtBQU1OLElBQU1FLElBQUksR0FBR1IsMERBQU0sQ0FBQ08sSUFBVjtFQUFBO0VBQUE7QUFBQSxpR0FBVjtNQUFNQyxJO0FBU04sSUFBTUMsU0FBUyxHQUFHVCwwREFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLHFEQUFmO01BQU1RLFM7QUFNTixJQUFNQyxZQUFZLEdBQUdWLDBEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsZ0lBQWxCO01BQU1TLFk7QUFZTixJQUFNQyxZQUFZLEdBQUdYLDBEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsOEdBQWxCO01BQU1VLFk7QUFXTixJQUFNQyxnQkFBZ0IsR0FBR1osMERBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxxRkFBdEI7T0FBTVcsZ0I7QUFPTixJQUFNQyxPQUFP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Q0FOWTtJQU9wQlQsTUFBTSxFQUFFTSxpREFBUyxDQUFDSyxPQUFWLENBQWtCTCxpREFBUyxDQUFDRyxNQUE1QjtFQVBZLENBQWhCLEVBUUhHO0FBVFksQ0FBakI7QUFZZXhELG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM3NDQyMTA5MTJkOTA2M2I5ZjM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJFTU9WRV9QT1NUX1JFUVVFU1QsIExJS0VfUE9TVF9SRVFVRVNULCBVTkxJS0VfUE9TVF9SRVFVRVNULCBPUEVOX0VESVRfTU9ERSB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgUHJvZmlsZUltYWdlIGZyb20gJy4vUHJvZmlsZUltYWdlJztcclxuaW1wb3J0IFBvc3RJbWFnZXMgZnJvbSAnLi9Qb3N0SW1hZ2VzJztcclxuaW1wb3J0IFBvc3RDb250ZW50IGZyb20gJy4vUG9zdENvbnRlbnQnO1xyXG5pbXBvcnQgUG9zdFVwZGF0ZUZvcm0gZnJvbSAnLi9Qb3N0VXBkYXRlRm9ybSc7XHJcbmltcG9ydCBDb21tZW50IGZyb20gJy4vQ29tbWVudCc7XHJcbmltcG9ydCBDb21tZW50Rm9ybSBmcm9tICcuL0NvbW1lbnRGb3JtJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEZhVHJhc2hBbHQsIEZhUGVuLCBGYVJlZ0NvbW1lbnREb3RzIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IElvSW9zSGVhcnRFbXB0eSwgSW9Jb3NIZWFydCB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNlNmVjZjA7XHJcbiAgcGFkZGluZzogMTVweCAwcHg7XHJcbmA7IFxyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTVweDtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgbWFyZ2luOiAwcHggMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbmA7XHJcblxyXG5jb25zdCBJbmZvcm1hdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxuYDtcclxuXHJcbmNvbnN0IEFMaW5rID0gc3R5bGVkLmFgXHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IE5pY2tuYW1lID0gc3R5bGVkLnNwYW5gXHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5gO1xyXG5cclxuY29uc3QgRGF0ZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGFsbDogdW5zZXQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBjb2xvcjogIzY1Nzc4NTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBPdmVySWNvbnMgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweFxyXG5gO1xyXG5cclxuY29uc3QgVXBkYXRlQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogIzE4NjRhYjtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBEZWxldGVCdXR0b24gPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAjZTg1MzdjO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQ29udGVudENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogODUlO1xyXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzVweDtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbmA7XHJcblxyXG5jb25zdCBVbmRlclNpZGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IFVuZGVySWNvbnMgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yfTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBBbW91bnQgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMHB4IDEwcHggNXB4IC0zcHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG9wYWNpdHk6IDAuNztcclxuYDtcclxuXHJcbmNvbnN0IENvbW1lbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgI2U2ZWNmMDtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuICBjb25zdCBsaWtlZCA9IHBvc3QuTGlrZXJzLmZpbmQoKHYpID0+IHYuaWQgPT09IGlkKTtcclxuICBjb25zdCBbZWRpdE1vZGUsIHNldEVkaXRNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY29tbWVudEZvcm1PcGVuZCwgc2V0Q29tbWVudEZvcm1PcGVuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgcG9zdERhdGUgPSAocG9zdC5jcmVhdGVkQXQgPT09IHBvc3QudXBkYXRlZEF0KSA/IHBvc3QuY3JlYXRlZEF0IDogcG9zdC51cGRhdGVkQXQ7XHJcbiAgY29uc3QgdXBkYXRlZCA9IChwb3N0LmNyZWF0ZWRBdCA9PT0gcG9zdC51cGRhdGVkQXQpID8gZmFsc2UgOiB0cnVlO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUVkaXRNb2RlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBPUEVOX0VESVRfTU9ERSxcclxuICAgIH0pXHJcbiAgICBzZXRFZGl0TW9kZSh0cnVlKTtcclxuICB9LCBbZWRpdE1vZGVdKTtcclxuXHJcbiAgY29uc3Qgb25SZW1vdmVQb3N0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5jb25maXJtKFwi7KCV66eQIOyCreygnO2VmOyLnOqyoOyKteuLiOq5jD9cIikpIHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgICAgZGF0YTogcG9zdC5pZCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25MaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCFpZCkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoXCLroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukXCIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgfSk7XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIGNvbnN0IG9uVW5saWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCFpZCkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoXCLroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukXCIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0Q29tbWVudEZvcm1PcGVuZCgocHJldikgPT4gIXByZXYpO1xyXG4gIH0sIFtjb21tZW50Rm9ybU9wZW5kXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBwb3N0ICYmIChcclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8UHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9maWxlL1tpZF1cIiBhcz17YC9wcm9maWxlLyR7cG9zdC5Vc2VyLmlkfWB9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICA8UHJvZmlsZUltYWdlIHBhdGg9e3Bvc3QuVXNlci5wcm9maWxlSW1hZ2VQYXRoID8gcG9zdC5Vc2VyLnByb2ZpbGVJbWFnZVBhdGggOiBudWxsfS8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L1Byb2ZpbGVJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICA8SW5mb3JtYXRpb25Db250YWluZXI+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGUvW2lkXVwiIGFzPXtgL3Byb2ZpbGUvJHtwb3N0LlVzZXIuaWR9YH0+XHJcbiAgICAgICAgICAgIDxBTGluaz5cclxuICAgICAgICAgICAgICA8Tmlja25hbWU+e3Bvc3QuVXNlci5uaWNrbmFtZX08L05pY2tuYW1lPlxyXG4gICAgICAgICAgICA8L0FMaW5rPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPERhdGU+XHJcbiAgICAgICAgICAgIHttb21lbnQocG9zdERhdGUpLmZvcm1hdCgnWVlZWS9NTS9ERCBoOm1tJyl9XHJcbiAgICAgICAgICAgIHt1cGRhdGVkID8gXCIgKOyImOygleuQqClcIiA6IG51bGx9XHJcbiAgICAgICAgICA8L0RhdGU+XHJcbiAgICAgICAgICB7aWQgJiYgcG9zdC5Vc2VyLmlkID09PSBwYXJzZUludChpZCkgJiYgIWVkaXRNb2RlXHJcbiAgICAgICAgICAgID8gPE92ZXJJY29ucz5cclxuICAgICAgICAgICAgICAgIDxVcGRhdGVCdXR0b24gb25DbGljaz17b25DaGFuZ2VFZGl0TW9kZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxGYVBlbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9VcGRhdGVCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8RGVsZXRlQnV0dG9uIG9uQ2xpY2s9e29uUmVtb3ZlUG9zdH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGYVRyYXNoQWx0IC8+XHJcbiAgICAgICAgICAgICAgICA8L0RlbGV0ZUJ1dHRvbj4gXHJcbiAgICAgICAgICAgICAgPC9PdmVySWNvbnM+XHJcbiAgICAgICAgICAgIDogbnVsbCBcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L0luZm9ybWF0aW9uQ29udGFpbmVyPlxyXG4gICAgICAgIHtlZGl0TW9kZVxyXG4gICAgICAgID8gPFBvc3RVcGRhdGVGb3JtIFxyXG4gICAgICAgICAgICBwb3N0PXtwb3N0fVxyXG4gICAgICAgICAgICBlZGl0TW9kZT17ZWRpdE1vZGV9XHJcbiAgICAgICAgICAgIHNldEVkaXRNb2RlPXtzZXRFZGl0TW9kZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgOiA8PlxyXG4gICAgICAgICAgICA8Q29udGVudENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICB7cG9zdC5JbWFnZXMubGVuZ3RoID49IDEgJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XHJcbiAgICAgICAgICAgICAgPENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8UG9zdENvbnRlbnQgY29udGVudD17cG9zdC5jb250ZW50fSAvPlxyXG4gICAgICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICAgICAgPC9Db250ZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8VW5kZXJTaWRlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxVbmRlckljb25zPlxyXG4gICAgICAgICAgICAgICAge2xpa2VkIFxyXG4gICAgICAgICAgICAgICAgPyA8SW9Jb3NIZWFydCBjb2xvcj1cInJlZFwiIG9uQ2xpY2s9e29uVW5saWtlfSAvPlxyXG4gICAgICAgICAgICAgICAgOiA8SW9Jb3NIZWFydEVtcHR5IGNvbG9yPVwicmVkXCIgb25DbGljaz17b25MaWtlfSAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIDwvVW5kZXJJY29ucz5cclxuICAgICAgICAgICAgICA8QW1vdW50Pntwb3N0Lkxpa2Vycy5sZW5ndGh9PC9BbW91bnQ+XHJcbiAgICAgICAgICAgICAgPFVuZGVySWNvbnMgb25DbGljaz17b25Ub2dnbGVDb21tZW50fT5cclxuICAgICAgICAgICAgICAgIDxGYVJlZ0NvbW1lbnREb3RzIGNvbG9yPVwiIzM0OThkYlwiIC8+XHJcbiAgICAgICAgICAgICAgPC9VbmRlckljb25zPlxyXG4gICAgICAgICAgICAgIDxBbW91bnQ+e3Bvc3QuQ29tbWVudHMubGVuZ3RofTwvQW1vdW50PlxyXG4gICAgICAgICAgICA8L1VuZGVyU2lkZUNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7Y29tbWVudEZvcm1PcGVuZCAmJiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q29tbWVudENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICB7cG9zdC5Db21tZW50cy5tYXAoKHYpID0+IDxDb21tZW50IGtleT17di5pZH0gY29tbWVudD17dn0gcG9zdElkPXtwb3N0LmlkfSAvPil9XHJcbiAgICAgICAgICAgIDwvQ29tbWVudENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPENvbW1lbnRGb3JtIHBvc3Q9e3Bvc3R9Lz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG4gICk7XHJcbn07XHJcblxyXG5Qb3N0LnByb3BUeXBlcyA9IHtcclxuICBwb3N0OiBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICBVc2VyOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGNyZWF0ZWRBdDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIENvbW1lbnRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIExpa2VyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgICBJbWFnZXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gIH0pLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdLCJzb3VyY2VSb290IjoiIn0=