webpackHotUpdate_N_E("pages/index",{

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
        var addCommentPost = draft.mainPosts.find(function (v) {
          return v.id === action.data.postId;
        });
        addCommentPost.Comments.push(dummyComment(action.data.content));
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
        var removeCommentPost = draft.mainPosts.find(function (v) {
          return v.id === action.data.postId;
        });
        console.log(removeCommentPost);
        removeCommentPost.Comments = removeCommentPost.Comments.filter(function (v) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImltYWdlcyIsImNvbnRlbnQiLCJDb21tZW50cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJyZW1vdmVDb21tZW50TG9hZGluZyIsInJlbW92ZUNvbW1lbnREb25lIiwicmVtb3ZlQ29tbWVudEVycm9yIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCIsIlJFTU9WRV9DT01NRU5UX1NVQ0NFU1MiLCJSRU1PVkVfQ09NTUVOVF9GQUlMVVJFIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJzaG9ydElkIiwiZ2VuZXJhdGUiLCJmYWtlciIsIm5hbWUiLCJmaW5kTmFtZSIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2VzIiwic3JjIiwiaW1hZ2UiLCJzZW50ZW5jZSIsImR1bW15UG9zdCIsImRhdGEiLCJkdW1teUNvbW1lbnQiLCJhZGRQb3N0IiwidHlwZSIsInJlbW92ZVBvc3QiLCJhZGRDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uY2F0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwidiIsImFkZENvbW1lbnRQb3N0IiwiZmluZCIsInBvc3RJZCIsInB1c2giLCJyZW1vdmVDb21tZW50UG9zdCIsImNvbnNvbGUiLCJsb2ciLCJjb21tZW50SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0VBQzFCQyxTQUFTLEVBQUUsQ0FBQztJQUNWQyxFQUFFLEVBQUUsQ0FETTtJQUVWQyxJQUFJLEVBQUU7TUFDSkQsRUFBRSxFQUFFLENBREE7TUFFSkUsUUFBUSxFQUFFO0lBRk4sQ0FGSTtJQU1WQyxNQUFNLEVBQUUsRUFORTtJQU9WQyxPQUFPLEVBQUUsVUFQQztJQVFWQyxRQUFRLEVBQUUsQ0FBQztNQUNUSixJQUFJLEVBQUU7UUFDSkQsRUFBRSxFQUFFLENBREE7UUFFSkUsUUFBUSxFQUFFO01BRk4sQ0FERztNQUtURSxPQUFPLEVBQUU7SUFMQSxDQUFEO0VBUkEsQ0FBRCxDQURlO0VBaUIxQkUsWUFBWSxFQUFFLElBakJZO0VBa0IxQkMsZ0JBQWdCLEVBQUUsS0FsQlE7RUFtQjFCQyxhQUFhLEVBQUUsS0FuQlc7RUFvQjFCQyxjQUFjLEVBQUUsSUFwQlU7RUFxQjFCQyxjQUFjLEVBQUUsS0FyQlU7RUFzQjFCQyxXQUFXLEVBQUUsS0F0QmE7RUF1QjFCQyxZQUFZLEVBQUUs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LHNCQUFMO1FBQ0U2QixLQUFLLENBQUM3QyxvQkFBTixHQUE2QixLQUE3QjtRQUNBNkMsS0FBSyxDQUFDNUMsaUJBQU4sR0FBMEIsSUFBMUI7UUFDQSxJQUFNdUQsaUJBQWlCLEdBQUdYLEtBQUssQ0FBQ2pFLFNBQU4sQ0FBZ0J5RSxJQUFoQixDQUFxQixVQUFDRixDQUFEO1VBQUEsT0FBT0EsQ0FBQyxDQUFDdEUsRUFBRixLQUFTOEQsTUFBTSxDQUFDUixJQUFQLENBQVltQixNQUE1QjtRQUFBLENBQXJCLENBQTFCO1FBQ0FHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixpQkFBWjtRQUNBQSxpQkFBaUIsQ0FBQ3RFLFFBQWxCLEdBQTZCc0UsaUJBQWlCLENBQUN0RSxRQUFsQixDQUEyQmdFLE1BQTNCLENBQWtDLFVBQUNDLENBQUQ7VUFBQSxPQUFPQSxDQUFDLENBQUN0RSxFQUFGLEtBQVM4RCxNQUFNLENBQUNSLElBQVAsQ0FBWXdCLFNBQTVCO1FBQUEsQ0FBbEMsQ0FBN0I7UUFDQTs7TUFDRixLQUFLMUMsc0JBQUw7UUFDRTRCLEtBQUssQ0FBQzdDLG9CQUFOLEdBQTZCLEtBQTdCO1FBQ0E2QyxLQUFLLENBQUMzQyxrQkFBTixHQUEyQnlDLE1BQU0sQ0FBQ1IsSUFBbEM7UUFDQTs7TUFDRjtRQUNFO0lBNUVKO0VBOEVELENBL0VhLENBQWQ7QUFnRkQsQ0FqRkQ7O0FBbUZlTSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40M2Y5MjJkM2FhMjY4NGM5ZDQzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJzsgIFxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFt7XHJcbiAgICBpZDogMSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIG5pY2tuYW1lOiAnZW9tZGgnLFxyXG4gICAgfSxcclxuICAgIGltYWdlczogW10sXHJcbiAgICBjb250ZW50OiAn64yT6riAIOyCreygnCDquLDriqUnLFxyXG4gICAgQ29tbWVudHM6IFt7XHJcbiAgICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBuaWNrbmFtZTogJ2VvbWRoJyxcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogJ+uMk+q4gCDsgq3soJwg6riw64qlJyxcclxuICAgIH1dXHJcbiAgfV0sXHJcbiAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZUNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlQ29tbWVudEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ09NTUVOVF9SRVFVRVNUID0gJ1JFTU9WRV9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyA9ICdSRU1PVkVfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX0ZBSUxVUkUgPSAnUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gIH0sXHJcbiAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgSW1hZ2VzOiBbe1xyXG4gICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gIH1dLFxyXG4gIENvbW1lbnRzOiBbe1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gIH1dLFxyXG59KSk7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogZGF0YS5pZCxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiAnZW9tZGgnLFxyXG4gIH0sXHJcbiAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gIGltYWdlczogW10sXHJcbiAgQ29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogJ2VvbWRoJyxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuY29uY2F0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMubGVuZ3RoIDwgNTA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBhZGRDb21tZW50UG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgIGFkZENvbW1lbnRQb3N0LkNvbW1lbnRzLnB1c2goZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlQ29tbWVudFBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZW1vdmVDb21tZW50UG9zdCk7XHJcbiAgICAgICAgcmVtb3ZlQ29tbWVudFBvc3QuQ29tbWVudHMgPSByZW1vdmVDb21tZW50UG9zdC5Db21tZW50cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLmNvbW1lbnRJZCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=