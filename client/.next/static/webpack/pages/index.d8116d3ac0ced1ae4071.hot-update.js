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
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\components\\Post.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__Container",
  componentId: "sc-1cil2or-0"
})(["width:100%;border-bottom:10px solid #e6ecf0;padding:10px;"]);
_c = Container;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__ProfileImageContainer",
  componentId: "sc-1cil2or-1"
})(["width:55px;height:55px;margin-right:10px;border-radius:50px;overflow:hidden;float:left;"]);
_c2 = ProfileImageContainer;
var InformationContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__InformationContainer",
  componentId: "sc-1cil2or-2"
})(["height:52px;display:flex;justify-content:space-between;margin-left:10px;margin-top:3px;"]);
_c3 = InformationContainer;
var Nickname = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "Post__Nickname",
  componentId: "sc-1cil2or-3"
})(["margin-top:3px;font-size:18px;font-weight:600;"]);
_c4 = Nickname;
var Date = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].span.withConfig({
  displayName: "Post__Date",
  componentId: "sc-1cil2or-4"
})([""]);
var DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__DeleteButton",
  componentId: "sc-1cil2or-5"
})(["display:flex;color:#e8537c;opacity:0.6;font-size:18px;cursor:pointer;padding:10px;border-radius:50%;margin-right:16px;transition:all 0.2s linear;&:hover{opacity:1;}"]);
_c5 = DeleteButton;
var ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__ContentContainer",
  componentId: "sc-1cil2or-6"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;"]);
_c6 = ContentContainer;
var Content = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__Content",
  componentId: "sc-1cil2or-7"
})(["width:85%;min-height:20px;margin-top:20px;line-height:18px;font-size:17px;"]);
_c7 = Content;
var UnderSideContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__UnderSideContainer",
  componentId: "sc-1cil2or-8"
})(["display:flex;justify-content:end;align-items:center;margin-top:10px;margin-right:20px;"]);
_c8 = UnderSideContainer;
var IconsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__IconsContainer",
  componentId: "sc-1cil2or-9"
})(["color:", ";opacity:0.7;padding:7px;border-radius:50%;font-size:20px;transition:all 0.1s linear;cursor:pointer;&:hover{opacity:1;}"], function (props) {
  return props.color;
});
_c9 = IconsContainer;
var Amount = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__Amount",
  componentId: "sc-1cil2or-10"
})(["margin:0px 10px 5px -3px;font-size:16px;opacity:0.7;"]);
_c10 = Amount;
var CommentContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Post__CommentContainer",
  componentId: "sc-1cil2or-11"
})(["width:100%;max-height:500px;margin:10px 0px 0px -10px;padding-top:10px;border-top:2px solid #e6ecf0;"]);
_c11 = CommentContainer;

var Post = function Post(_ref) {
  _s();

  var post = _ref.post;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function (state) {
    return state.user;
  }),
      me = _useState.me;

  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  var liked = post.Likers.find(function (v) {
    return v.id === id;
  });

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      commentFormOpend = _useState2[0],
      setCommentFormOpend = _useState2[1];

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
      data: post.id
    });
  }, [id]);
  var onUnlike = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!id) {
      return alert("로그인이 필요합니다");
    }

    ;
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_9__["UNLIKE_POST_REQUEST"],
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
      lineNumber: 151,
      columnNumber: 7
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: __webpack_require__(/*! ../image/user.png */ "./image/user.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  })), __jsx(InformationContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, post.User.nickname), id && post.User.id === parseInt(id) ? __jsx(DeleteButton, {
    onClick: onRemovePost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 17
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaTrashAlt"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 19
    }
  })) : null), __jsx(ContentContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, post.Images.length >= 1 && __jsx(_PostImages__WEBPACK_IMPORTED_MODULE_5__["default"], {
    images: post.Images,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 39
    }
  }), __jsx(Content, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }, __jsx(_PostContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
    content: post.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  }))), __jsx(UnderSideContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }, __jsx(IconsContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }, liked ? __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_11__["IoIosHeart"], {
    color: "red",
    onClick: onUnlike,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 16
    }
  }) : __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_11__["IoIosHeartEmpty"], {
    color: "red",
    onClick: onLike,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 16
    }
  })), __jsx(Amount, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }
  }, post.Likers.length), __jsx(IconsContainer, {
    onClick: onToggleComment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaRegCommentDots"], {
    color: "#3498db",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  })), __jsx(Amount, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, post.Comments.length)), commentFormOpend && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(CommentContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }, post.Comments.map(function (v) {
    return __jsx(_Comment__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: v.id,
      comment: v,
      postId: post.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 41
      }
    });
  })), __jsx(_CommentForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }
  })));
};

_s(Post, "jaSDPvwrpkKA2Q93fBtigz+xUVY=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c12 = Post;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlByb2ZpbGVJbWFnZUNvbnRhaW5lciIsIkluZm9ybWF0aW9uQ29udGFpbmVyIiwiTmlja25hbWUiLCJzcGFuIiwiRGF0ZSIsIkRlbGV0ZUJ1dHRvbiIsIkNvbnRlbnRDb250YWluZXIiLCJDb250ZW50IiwiVW5kZXJTaWRlQ29udGFpbmVyIiwiSWNvbnNDb250YWluZXIiLCJwcm9wcyIsImNvbG9yIiwiQW1vdW50IiwiQ29tbWVudENvbnRhaW5lciIsIlBvc3QiLCJwb3N0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJpZCIsInVzZVNlbGVjdG9yIiwibGlrZWQiLCJMaWtlcnMiLCJmaW5kIiwidiIsImNvbW1lbnRGb3JtT3BlbmQiLCJzZXRDb21tZW50Rm9ybU9wZW5kIiwib25SZW1vdmVQb3N0IiwidXNlQ2FsbGJhY2siLCJ0eXBlIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsImRhdGEiLCJvbkxpa2UiLCJhbGVydCIsIkxJS0VfUE9TVF9SRVFVRVNUIiwib25Vbmxpa2UiLCJVTkxJS0VfUE9TVF9SRVFVRVNUIiwib25Ub2dnbGVDb21tZW50IiwicHJldiIsInJlcXVpcmUiLCJVc2VyIiwibmlja25hbWUiLCJwYXJzZUludCIsIkltYWdlcyIsImxlbmd0aCIsImNvbnRlbnQiLCJDb21tZW50cyIsIm1hcCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInNoYXBlIiwibnVtYmVyIiwib2JqZWN0Iiwic3RyaW5nIiwiY3JlYXRlZEF0IiwiYXJyYXlPZiIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVB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RUFBRTJCLGlEQUFTLENBQUNNLE9BQVYsQ0FBa0JOLGlEQUFTLENBQUNHLE1BQTVCLENBTlk7SUFPcEJULE1BQU0sRUFBRU0saURBQVMsQ0FBQ00sT0FBVixDQUFrQk4saURBQVMsQ0FBQ0csTUFBNUI7RUFQWSxDQUFoQixFQVFISTtBQVRZLENBQWpCO0FBWWU3QyxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kODExNmQzYWMwY2VkMWFlNDA3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFByb2ZpbGVJbWFnZSBmcm9tICcuL1Byb2ZpbGVJbWFnZSc7XHJcbmltcG9ydCBQb3N0SW1hZ2VzIGZyb20gJy4vUG9zdEltYWdlcyc7XHJcbmltcG9ydCBQb3N0Q29udGVudCBmcm9tICcuL1Bvc3RDb250ZW50JztcclxuaW1wb3J0IENvbW1lbnQgZnJvbSAnLi9Db21tZW50JztcclxuaW1wb3J0IENvbW1lbnRGb3JtIGZyb20gJy4vQ29tbWVudEZvcm0nO1xyXG5pbXBvcnQgeyBSRU1PVkVfUE9TVF9SRVFVRVNULCBMSUtFX1BPU1RfUkVRVUVTVCwgVU5MSUtFX1BPU1RfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBGYVRyYXNoQWx0LCBGYVJlZ0NvbW1lbnREb3RzIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IElvSW9zSGVhcnRFbXB0eSwgSW9Jb3NIZWFydCB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNlNmVjZjA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuYDsgXHJcblxyXG5jb25zdCBQcm9maWxlSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGhlaWdodDogNTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG5gO1xyXG5cclxuY29uc3QgSW5mb3JtYXRpb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogNTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbmA7XHJcblxyXG5jb25zdCBOaWNrbmFtZSA9IHN0eWxlZC5zcGFuYFxyXG4gIG1hcmdpbi10b3A6IDNweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuYDtcclxuXHJcbmNvbnN0IERhdGUgPSBzdHlsZWQuc3BhbmBcclxuYDtcclxuXHJcbmNvbnN0IERlbGV0ZUJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogI2U4NTM3YztcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA4NSU7XHJcbiAgbWluLWhlaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuYDtcclxuXHJcbmNvbnN0IFVuZGVyU2lkZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgSWNvbnNDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yfTtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQW1vdW50ID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDBweCAxMHB4IDVweCAtM3B4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbmA7XHJcblxyXG5jb25zdCBDb21tZW50Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICBtYXJnaW46IDEwcHggMHB4IDBweCAtMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgI2U2ZWNmMDtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBwb3N0IH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU3RhdGUoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBpZCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlci5tZT8uaWQpO1xyXG4gIGNvbnN0IGxpa2VkID0gcG9zdC5MaWtlcnMuZmluZCgodikgPT4gdi5pZCA9PT0gaWQpO1xyXG4gIGNvbnN0IFtjb21tZW50Rm9ybU9wZW5kLCBzZXRDb21tZW50Rm9ybU9wZW5kXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBcclxuICBjb25zdCBvblJlbW92ZVBvc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25MaWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCFpZCkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoXCLroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukXCIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBwb3N0LmlkLFxyXG4gICAgfSk7XHJcbiAgfSwgW2lkXSk7XHJcblxyXG4gIGNvbnN0IG9uVW5saWtlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCFpZCkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoXCLroZzqt7jsnbjsnbQg7ZWE7JqU7ZWp64uI64ukXCIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHBvc3QuaWQsXHJcbiAgICB9KTtcclxuICB9LCBbaWRdKTtcclxuXHJcbiAgY29uc3Qgb25Ub2dnbGVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0Q29tbWVudEZvcm1PcGVuZCgocHJldikgPT4gIXByZXYpO1xyXG4gIH0sIFtjb21tZW50Rm9ybU9wZW5kXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBwb3N0ICYmIChcclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8UHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPFByb2ZpbGVJbWFnZSBzcmM9e3JlcXVpcmUoJy4uL2ltYWdlL3VzZXIucG5nJyl9IC8+XHJcbiAgICAgICAgPC9Qcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgPEluZm9ybWF0aW9uQ29udGFpbmVyPlxyXG4gICAgICAgICAgPE5pY2tuYW1lPntwb3N0LlVzZXIubmlja25hbWV9PC9OaWNrbmFtZT5cclxuICAgICAgICAgIHtpZCAmJiBwb3N0LlVzZXIuaWQgPT09IHBhcnNlSW50KGlkKVxyXG4gICAgICAgICAgICA/ICggPERlbGV0ZUJ1dHRvbiBvbkNsaWNrPXtvblJlbW92ZVBvc3R9PlxyXG4gICAgICAgICAgICAgICAgICA8RmFUcmFzaEFsdCAvPlxyXG4gICAgICAgICAgICAgICAgPC9EZWxldGVCdXR0b24+IClcclxuICAgICAgICAgICAgOiBudWxsIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvSW5mb3JtYXRpb25Db250YWluZXI+XHJcbiAgICAgICAgPENvbnRlbnRDb250YWluZXI+XHJcbiAgICAgICAgICB7cG9zdC5JbWFnZXMubGVuZ3RoID49IDEgJiYgPFBvc3RJbWFnZXMgaW1hZ2VzPXtwb3N0LkltYWdlc30gLz59XHJcbiAgICAgICAgICA8Q29udGVudD5cclxuICAgICAgICAgICAgPFBvc3RDb250ZW50IGNvbnRlbnQ9e3Bvc3QuY29udGVudH0gLz5cclxuICAgICAgICAgIDwvQ29udGVudD5cclxuICAgICAgICA8L0NvbnRlbnRDb250YWluZXI+XHJcbiAgICAgICAgPFVuZGVyU2lkZUNvbnRhaW5lcj5cclxuICAgICAgICAgIDxJY29uc0NvbnRhaW5lcj5cclxuICAgICAgICAgICAge2xpa2VkIFxyXG4gICAgICAgICAgICAgPyA8SW9Jb3NIZWFydCBjb2xvcj1cInJlZFwiIG9uQ2xpY2s9e29uVW5saWtlfS8+XHJcbiAgICAgICAgICAgICA6IDxJb0lvc0hlYXJ0RW1wdHkgY29sb3I9XCJyZWRcIiBvbkNsaWNrPXtvbkxpa2V9IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvSWNvbnNDb250YWluZXI+XHJcbiAgICAgICAgICA8QW1vdW50Pntwb3N0Lkxpa2Vycy5sZW5ndGh9PC9BbW91bnQ+XHJcbiAgICAgICAgICA8SWNvbnNDb250YWluZXIgb25DbGljaz17b25Ub2dnbGVDb21tZW50fT5cclxuICAgICAgICAgICAgPEZhUmVnQ29tbWVudERvdHMgY29sb3I9XCIjMzQ5OGRiXCIvPlxyXG4gICAgICAgICAgPC9JY29uc0NvbnRhaW5lcj5cclxuICAgICAgICAgIDxBbW91bnQ+e3Bvc3QuQ29tbWVudHMubGVuZ3RofTwvQW1vdW50PlxyXG4gICAgICAgIDwvVW5kZXJTaWRlQ29udGFpbmVyPlxyXG4gICAgICAgIHtjb21tZW50Rm9ybU9wZW5kICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDb21tZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIHtwb3N0LkNvbW1lbnRzLm1hcCgodikgPT4gPENvbW1lbnQga2V5PXt2LmlkfSBjb21tZW50PXt2fSBwb3N0SWQ9e3Bvc3QuaWR9IC8+KX1cclxuICAgICAgICAgICAgPC9Db21tZW50Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8Q29tbWVudEZvcm0gcG9zdD17cG9zdH0vPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbiAgKTtcclxufTtcclxuXHJcblBvc3QucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIFVzZXI6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgY3JlYXRlZEF0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgQ29tbWVudHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxyXG4gICAgTGlrZXJzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcclxuICAgIEltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXHJcbiAgfSkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==