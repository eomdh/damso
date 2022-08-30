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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ProfileImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfileImage */ "./components/ProfileImage.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\Comment.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Comment__Container",
  componentId: "sc-1cesasf-0"
})(["min-height:30px;padding:5px 15px 15px 30px;"]);
_c = Container;
var InformationContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Comment__InformationContainer",
  componentId: "sc-1cesasf-1"
})(["display:flex;height:20px;justify-content:space-between;margin-left:10px;margin-top:3px;"]);
_c2 = InformationContainer;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Comment__ProfileImageContainer",
  componentId: "sc-1cesasf-2"
})(["width:35px;height:35px;margin-right:12px;border-radius:50px;overflow:hidden;float:left;"]);
_c3 = ProfileImageContainer;
var Nickname = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].span.withConfig({
  displayName: "Comment__Nickname",
  componentId: "sc-1cesasf-3"
})(["font-size:16px;font-weight:600;"]);
_c4 = Nickname;
var DeleteButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Comment__DeleteButton",
  componentId: "sc-1cesasf-4"
})(["display:flex;color:#e8537c;opacity:0.6;font-size:16px;cursor:pointer;border-radius:50%;transition:all 0.2s linear;&:hover{opacity:1;}"]);
_c5 = DeleteButton;
var ContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Comment__ContentContainer",
  componentId: "sc-1cesasf-5"
})(["display:flex;flex-direction:column;padding-top:10px;"]);
_c6 = ContentContainer;

var Comment = function Comment(_ref) {
  _s();

  var comment = _ref.comment;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var id = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    var _state$user$me;

    return (_state$user$me = state.user.me) === null || _state$user$me === void 0 ? void 0 : _state$user$me.id;
  });
  var onRemoveComment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__["REMOVE_COMMENT_REQUEST"],
      data: comment.id
    });
  }, []);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: __webpack_require__(/*! ../image/user.png */ "./image/user.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  })), __jsx(InformationContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, comment.User.nickname), id && comment.User.id === parseInt(id) ? __jsx(DeleteButton, {
    onClick: onRemoveComment,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaTrashAlt"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  })) : null), __jsx(ContentContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, comment.content));
};

_s(Comment, "AZTdJt9qu48FAOWTJharl3nWuAc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c7 = Comment;
Comment.propType = {
  comment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Comment);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "InformationContainer");
$RefreshReg$(_c3, "ProfileImageContainer");
$RefreshReg$(_c4, "Nickname");
$RefreshReg$(_c5, "DeleteButton");
$RefreshReg$(_c6, "ContentContainer");
$RefreshReg$(_c7, "Comment");

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

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_COMMENT_REQUEST, REMOVE_COMMENT_SUCCESS, REMOVE_COMMENT_FAILURE, generateDummyPost, addPost, removePost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMMENT_REQUEST", function() { return REMOVE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMMENT_SUCCESS", function() { return REMOVE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMMENT_FAILURE", function() { return REMOVE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePost", function() { return removePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");



var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'eomdh'
    },
    images: [],
    content: '댓글 삭제 기능',
    Comments: [{
      User: {
        id: 1,
        nickname: 'eomdh'
      },
      content: '댓글 삭제 기능'
    }]
  }],
  hasMorePosts: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: null
};
var LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
var LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
var LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST';
var REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS';
var REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE';
var generateDummyPost = function generateDummyPost(number) {
  return Array(number).fill().map(function () {
    return {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: faker__WEBPACK_IMPORTED_MODULE_1___default.a.name.findName()
      },
      content: faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.paragraph(),
      Images: [{
        src: faker__WEBPACK_IMPORTED_MODULE_1___default.a.image.image()
      }],
      Comments: [{
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        User: {
          id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
          nickname: faker__WEBPACK_IMPORTED_MODULE_1___default.a.name.findName()
        },
        content: faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.sentence()
      }]
    };
  });
};

var dummyPost = function dummyPost(data) {
  return {
    id: data.id,
    User: {
      id: 1,
      nickname: 'eomdh'
    },
    content: data.content,
    images: [],
    Comments: []
  };
};

var dummyComment = function dummyComment(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    User: {
      id: 1,
      nickname: 'eomdh'
    },
    content: data
  };
};

var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};
var removePost = function removePost(data) {
  return {
    type: REMOVE_POST_REQUEST,
    data: data
  };
};
var addComment = function addComment(data) {
  return {
    type: ADD_COMMENT_REQUEST,
    data: data
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_2__["default"])(state, function (draft) {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = draft.mainPosts.length < 50;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.mainPosts.unshift(dummyPost(action.data));
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = false;
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data;
        });
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        var post = draft.mainPosts.find(function (v) {
          return v.id === action.data.postId;
        });
        post.Comments.push(dummyComment(action.data.content));
        break;

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.data;
        break;

      case REMOVE_COMMENT_REQUEST:
        draft.removeCommentLoading = true;
        draft.removeCommentDone = false;
        draft.removeCommentError = null;
        break;

      case REMOVE_COMMENT_SUCCESS:
        draft.removeCommentLoading = false;
        draft.removeCommentDone = true;
        post.Comments.filter(function (v) {
          return v.id !== action.data.commentId;
        });
        break;

      case REMOVE_COMMENT_FAILURE:
        draft.removeCommentLoading = false;
        draft.removeCommentError = action.data;
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50LmpzIiwid2VicGFjazovL19OX0UvLi9yZWR1Y2Vycy9wb3N0LmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkluZm9ybWF0aW9uQ29udGFpbmVyIiwiUHJvZmlsZUltYWdlQ29udGFpbmVyIiwiTmlja25hbWUiLCJzcGFuIiwiRGVsZXRlQnV0dG9uIiwiQ29udGVudENvbnRhaW5lciIsIkNvbW1lbnQiLCJjb21tZW50IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImlkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsIm9uUmVtb3ZlQ29tbWVudCIsInVzZUNhbGxiYWNrIiwidHlwZSIsIlJFTU9WRV9DT01NRU5UX1JFUVVFU1QiLCJkYXRhIiwicmVxdWlyZSIsIlVzZXIiLCJuaWNrbmFtZSIsInBhcnNlSW50IiwiY29udGVudCIsInByb3BUeXBlIiwiUHJvcFR5cGUiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VzIiwiQ29tbWVudHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwicmVtb3ZlQ29tbWVudExvYWRpbmciLCJyZW1vdmVDb21tZW50RG9uZSIsInJlbW92ZUNvbW1lbnRFcnJvciIsIkxPQURfUE9TVFNfUkVRVUVTVCIsIkxPQURfUE9TVFNfU1VDQ0VTUyIsIkxPQURfUE9TVFNfRkFJTFVSRSIsIkFERF9QT1NUX1JFUVVFU1QiLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfRkFJTFVSRSIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJSRU1PVkVfUE9TVF9TVUNDRVNTIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9DT01NRU5UX1NVQ0NFU1MiLCJSRU1PVkVfQ09NTUVOVF9GQUlMVVJFIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2VzIiwic3JjIiwiaW1hZ2UiLCJzZW50ZW5jZSIsImR1bW15UG9zdCIsImR1bW15Q29tbWVudCIsImFkZFBvc3QiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25jYXQiLCJsZW5ndGgiLCJlcnJvciIsInVuc2hpZnQiLCJmaWx0ZXIiLCJ2IiwicG9zdCIsImZpbmQiLCJwb3N0SWQiLCJwdXNoIiwiY29tbWVudElkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsbURBQWY7S0FBTUYsUztBQUtOLElBQU1HLG9CQUFvQixHQUFHRix5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLCtGQUExQjtNQUFNQyxvQjtBQVFOLElBQU1DLHFCQUFxQixHQUFHSCx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLCtGQUEzQjtNQUFNRSxxQjtBQVNOLElBQU1DLFFBQVEsR0FBR0oseURBQU0sQ0FBQ0ssSUFBVjtFQUFBO0VBQUE7QUFB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QixLQUFLLENBQUM1QyxpQkFBTixHQUEwQixLQUExQjtRQUNBNEMsS0FBSyxDQUFDMUMsZUFBTixHQUF3QndDLE1BQU0sQ0FBQ2xFLElBQS9CO1FBQ0E7O01BQ0YsS0FBS0Qsc0JBQUw7UUFDRXFFLEtBQUssQ0FBQ3pDLG9CQUFOLEdBQTZCLElBQTdCO1FBQ0F5QyxLQUFLLENBQUN4QyxpQkFBTixHQUEwQixLQUExQjtRQUNBd0MsS0FBSyxDQUFDdkMsa0JBQU4sR0FBMkIsSUFBM0I7UUFDQTs7TUFDRixLQUFLYSxzQkFBTDtRQUNFMEIsS0FBSyxDQUFDekMsb0JBQU4sR0FBNkIsS0FBN0I7UUFDQXlDLEtBQUssQ0FBQ3hDLGlCQUFOLEdBQTBCLElBQTFCO1FBQ0ErQyxJQUFJLENBQUM5RCxRQUFMLENBQWM0RCxNQUFkLENBQXFCLFVBQUNDLENBQUQ7VUFBQSxPQUFPQSxDQUFDLENBQUNuRixFQUFGLEtBQVMyRSxNQUFNLENBQUNsRSxJQUFQLENBQVkrRSxTQUE1QjtRQUFBLENBQXJCO1FBQ0E7O01BQ0YsS0FBS3BDLHNCQUFMO1FBQ0V5QixLQUFLLENBQUN6QyxvQkFBTixHQUE2QixLQUE3QjtRQUNBeUMsS0FBSyxDQUFDdkMsa0JBQU4sR0FBMkJxQyxNQUFNLENBQUNsRSxJQUFsQztRQUNBOztNQUNGO1FBQ0U7SUExRUo7RUE0RUQsQ0E3RWEsQ0FBZDtBQThFRCxDQS9FRDs7QUFpRmVpRSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zMmUxYTU3ZTY1ZTE3M2I0M2YxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGUgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgUHJvZmlsZUltYWdlIGZyb20gJy4vUHJvZmlsZUltYWdlJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBGYVRyYXNoQWx0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IFJFTU9WRV9DT01NRU5UX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLWhlaWdodDogMzBweDtcclxuICBwYWRkaW5nOiA1cHggMTVweCAxNXB4IDMwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBJbmZvcm1hdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxuYDtcclxuXHJcbmNvbnN0IFByb2ZpbGVJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbmA7XHJcblxyXG5jb25zdCBOaWNrbmFtZSA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5gO1xyXG5cclxuY29uc3QgRGVsZXRlQnV0dG9uID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiAjZTg1MzdjO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IENvbW1lbnQgPSAoeyBjb21tZW50IH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIubWU/LmlkKTtcclxuXHJcbiAgY29uc3Qgb25SZW1vdmVDb21tZW50ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBjb21tZW50LmlkLFxyXG4gICAgfSlcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8UHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPFByb2ZpbGVJbWFnZSBzcmM9e3JlcXVpcmUoJy4uL2ltYWdlL3VzZXIucG5nJyl9IC8+XHJcbiAgICAgIDwvUHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICA8SW5mb3JtYXRpb25Db250YWluZXI+XHJcbiAgICAgICAgPE5pY2tuYW1lPntjb21tZW50LlVzZXIubmlja25hbWV9PC9OaWNrbmFtZT5cclxuICAgICAgICB7IGlkICYmIGNvbW1lbnQuVXNlci5pZCA9PT0gcGFyc2VJbnQoaWQpXHJcbiAgICAgICAgICA/ICggPERlbGV0ZUJ1dHRvbiBvbkNsaWNrPXtvblJlbW92ZUNvbW1lbnR9PlxyXG4gICAgICAgICAgICAgICAgPEZhVHJhc2hBbHQgLz5cclxuICAgICAgICAgICAgICA8L0RlbGV0ZUJ1dHRvbj4gKVxyXG4gICAgICAgICAgOiBudWxsIH1cclxuICAgICAgPC9JbmZvcm1hdGlvbkNvbnRhaW5lcj5cclxuICAgICAgPENvbnRlbnRDb250YWluZXI+XHJcbiAgICAgICAge2NvbW1lbnQuY29udGVudH1cclxuICAgICAgPC9Db250ZW50Q29udGFpbmVyPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbkNvbW1lbnQucHJvcFR5cGUgPSB7XHJcbiAgY29tbWVudDogUHJvcFR5cGUub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50OyIsImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7ICBcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbe1xyXG4gICAgaWQ6IDEsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBuaWNrbmFtZTogJ2VvbWRoJyxcclxuICAgIH0sXHJcbiAgICBpbWFnZXM6IFtdLFxyXG4gICAgY29udGVudDogJ+uMk+q4gCDsgq3soJwg6riw64qlJyxcclxuICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgbmlja25hbWU6ICdlb21kaCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6ICfrjJPquIAg7IKt7KCcIOq4sOuKpScsXHJcbiAgICB9XVxyXG4gIH1dLFxyXG4gIGhhc01vcmVQb3N0czogdHJ1ZSxcclxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICByZW1vdmVDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZUNvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCA9ICdSRU1PVkVfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX1NVQ0NFU1MgPSAnUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFID0gJ1JFTU9WRV9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT4gQXJyYXkobnVtYmVyKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbiAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gIEltYWdlczogW3tcclxuICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuICB9XSxcclxuICBDb21tZW50czogW3tcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogZmFrZXIubG9yZW0uc2VudGVuY2UoKSxcclxuICB9XSxcclxufSkpO1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IGRhdGEuaWQsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogJ2VvbWRoJyxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IGRhdGEuY29udGVudCxcclxuICBpbWFnZXM6IFtdLFxyXG4gIENvbW1lbnRzOiBbXSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6ICdlb21kaCcsXHJcbiAgfSxcclxuICBjb250ZW50OiBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gZHJhZnQubWFpblBvc3RzLmxlbmd0aCA8IDUwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuQ29tbWVudHMucHVzaChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBwb3N0LkNvbW1lbnRzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuY29tbWVudElkKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==