webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, LOAD_IMAGE_PATHS, REMOVE_IMAGE_PATHS, REMOVE_IMAGE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, UPDATE_COMMENT_REQUEST, UPDATE_COMMENT_SUCCESS, UPDATE_COMMENT_FAILURE, REMOVE_COMMENT_REQUEST, REMOVE_COMMENT_SUCCESS, REMOVE_COMMENT_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_REQUEST", function() { return UPDATE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_SUCCESS", function() { return UPDATE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_FAILURE", function() { return UPDATE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_IMAGE_PATHS", function() { return LOAD_IMAGE_PATHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE_PATHS", function() { return REMOVE_IMAGE_PATHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_COMMENT_REQUEST", function() { return UPDATE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_COMMENT_SUCCESS", function() { return UPDATE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_COMMENT_FAILURE", function() { return UPDATE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMMENT_REQUEST", function() { return REMOVE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMMENT_SUCCESS", function() { return REMOVE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_COMMENT_FAILURE", function() { return REMOVE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");

var initialState = {
  mainPosts: [],
  imagePaths: [],
  singlePost: null,
  hasMorePosts: true,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  updatePostLoading: false,
  updatePostDone: false,
  updatePostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  updateCommentLoading: false,
  updateCommentDone: false,
  updateCommentError: null,
  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null
};
var LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
var LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
var LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
var LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
var LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
var LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
var LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
var LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
var LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
var LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
var LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
var LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
var UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
var UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
var UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
var UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
var LOAD_IMAGE_PATHS = 'LOAD_IMAGE_PATHS';
var REMOVE_IMAGE_PATHS = 'LOAD_IMAGE_PATHS';
var REMOVE_IMAGE = 'REMOVE_IMAGE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var UPDATE_COMMENT_REQUEST = 'UPDATE_COMMENT_REQUEST';
var UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS';
var UPDATE_COMMENT_FAILURE = 'UPDATE_COMMENT_FAILURE';
var REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST';
var REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS';
var REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE';
var LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
var LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
var LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
var UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
var UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
var UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, function (draft) {
    switch (action.type) {
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_POST_SUCCESS:
        draft.singlePost = action.data, draft.loadPostLoading = false;
        draft.loadPostDone = true;
        break;

      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;

      case LOAD_POSTS_REQUEST:
      case LOAD_USER_POSTS_REQUEST:
      case LOAD_HASHTAG_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
      case LOAD_USER_POSTS_SUCCESS:
      case LOAD_HASHTAG_POSTS_SUCCESS:
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        break;

      case LOAD_POSTS_FAILURE:
      case LOAD_USER_POSTS_FAILURE:
      case LOAD_HASHTAG_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.mainPosts.unshift(action.data);
        draft.imagePaths = [];
        draft.addPostLoading = false;
        draft.addPostDone = true;
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case UPDATE_POST_REQUEST:
        draft.updatePostLoading = true;
        draft.updatePostDone = false;
        draft.updatePostError = null;
        break;

      case UPDATE_POST_SUCCESS:
        {
          var post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });
          post.content = action.data.Content;
          post.updatedAt = action.data.updatedAt;

          if (action.data.Images) {
            if (Array.isArray(action.data.Images)) {
              post.Images = [];
              action.data.Images.map(function (v) {
                return post.Images.push({
                  src: v
                });
              });
            } else {
              post.Images = [{
                src: action.data.Images
              }];
            }

            ;
          }

          ;
          draft.imagePaths = [];
          draft.updatePostLoading = false;
          draft.updatePostDone = true;
          break;
        }

      case UPDATE_POST_FAILURE:
        draft.updatePostLoading = false;
        draft.updatePostError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.mainPosts.find(function (v) {
          return v.id === action.data.postId;
        });
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter(function (v) {
          return v.id !== action.data.PostId;
        });
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;

      case UPLOAD_IMAGES_SUCCESS:
        draft.imagePaths.push(action.data);
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;

      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;

      case LOAD_IMAGE_PATHS:
        draft.imagePaths = action.data;
        break;

      case REMOVE_IMAGE_PATHS:
        draft.imagePaths = [];
        break;

      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter(function (v, i) {
          return i !== action.data;
        });
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        {
          var _post = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post.Comments.push(action.data);

          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break;
        }

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.data;
        break;

      case UPDATE_COMMENT_REQUEST:
        draft.updateCommentLoading = true;
        draft.updateCommentDone = false;
        draft.updateCommentError = null;
        break;

      case UPDATE_COMMENT_SUCCESS:
        {
          var _post2 = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          var comment = _post2.Comments.find(function (v) {
            return v.id === action.data.CommentId;
          });

          comment.content = action.data.Content;
          comment.updatedAt = action.data.updatedAt;
          draft.updateCommentLoading = false;
          draft.updateCommentDone = true;
          break;
        }

      case UPDATE_COMMENT_FAILURE:
        draft.updateCommentLoading = false;
        draft.updateCommentError = action.data;
        break;

      case REMOVE_COMMENT_REQUEST:
        draft.removeCommentLoading = true;
        draft.removeCommentDone = false;
        draft.removeCommentError = null;
        break;

      case REMOVE_COMMENT_SUCCESS:
        {
          var _post3 = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post3.Comments = _post3.Comments.filter(function (v) {
            return v.id !== action.data.CommentId;
          });
          draft.removeCommentLoading = false;
          draft.removeCommentDone = true;
          break;
        }

      case REMOVE_COMMENT_FAILURE:
        draft.removeCommentLoading = false;
        draft.removeCommentError = action.data;
        break;

      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;

      case LIKE_POST_SUCCESS:
        {
          var _post4 = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post4.Likers.push({
            id: action.data.UserId
          });

          draft.likePostLoading = false;
          draft.likePostDone = true;
          break;
        }

      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.data;
        break;

      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;

      case UNLIKE_POST_SUCCESS:
        {
          var _post5 = draft.mainPosts.find(function (v) {
            return v.id === action.data.PostId;
          });

          _post5.Likers = _post5.Likers.filter(function (v) {
            return v.id !== action.data.UserId;
          });
          draft.unlikePostLoading = false;
          draft.unlikePostDone = true;
          break;
        }

      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.data;
        break;

      default:
        break;
    }

    ;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwic2luZ2xlUG9zdCIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInVwZGF0ZVBvc3RMb2FkaW5nIiwidXBkYXRlUG9zdERvbmUiLCJ1cGRhdGVQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJ1cGRhdGVDb21tZW50TG9hZGluZyIsInVwZGF0ZUNvbW1lbnREb25lIiwidXBkYXRlQ29tbWVudEVycm9yIiwicmVtb3ZlQ29tbWVudExvYWRpbmciLCJyZW1vdmVDb21tZW50RG9uZSIsInJlbW92ZUNvbW1lbnRFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiVVBEQVRFX1BPU1RfUkVRVUVTVCIsIlVQREFURV9QT1NUX1NVQ0NFU1MiLCJVUERBVEVfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiTE9BRF9JTUFHRV9QQVRIUyIsIlJFTU9WRV9JTUFHRV9QQVRIUyIsIlJFTU9WRV9JTUFHRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlVQREFURV9DT01NRU5UX1JFUVVFU1QiLCJVUERBVEVfQ09NTUVOVF9TVUNDRVNTIiwiVVBEQVRFX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9DT01NRU5UX1JFUVVFU1QiLCJSRU1PVkVfQ09NTUVOVF9TVUNDRVNTIiwiUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInR5cGUiLCJkYXRhIiwiZXJyb3IiLCJjb25jYXQiLCJsZW5ndGgiLCJ1bnNoaWZ0IiwicG9zdCIsImZpbmQiLCJ2IiwiaWQiLCJQb3N0SWQiLCJjb250ZW50IiwiQ29udGVudCIsInVwZGF0ZWRBdCIsIkltYWdlcyIsIkFycmF5IiwiaXNBcnJheSIsIm1hcCIsInB1c2giLCJzcmMiLCJwb3N0SWQiLCJmaWx0ZXIiLCJpIiwiQ29tbWVudHMiLCJjb21tZW50IiwiQ29tbWVudElkIiwiTGlrZXJzIiwiVXNlcklkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNQSxZQUFZLEdBQUc7RUFDMUJDLFNBQVMsRUFBRSxFQURlO0VBRTFCQyxVQUFVLEVBQUUsRUFGYztFQUcxQkMsVUFBVSxFQUFFLElBSGM7RUFJMUJDLFlBQVksRUFBRSxJQUpZO0VBSzFCQyxlQUFlLEVBQUUsS0FMUztFQU0xQkMsWUFBWSxFQUFFLEtBTlk7RUFPMUJDLGFBQWEsRUFBRSxJQVBXO0VBUTFCQyxnQkFBZ0IsRUFBRSxLQVJRO0VBUzFCQyxhQUFhLEVBQUUsS0FUVztFQVUxQkMsY0FBYyxFQUFFLElBVlU7RUFXMUJDLGNBQWMsRUFBRSxLQVhVO0VBWTFCQyxXQUFXLEVBQUUsS0FaYTtFQWExQkMsWUFBWSxFQUFFLElBYlk7RUFjMUJDLGlCQUFpQixFQUFFLEtBZE87RUFlMUJDLGNBQWMsRUFBRSxLQWZVO0VBZ0IxQkMsZUFBZSxFQUFFLElBaEJTO0VBaUIxQkMsaUJBQWlCLEVBQUUsS0FqQk87RUFrQjFCQyxjQUFjLEVBQUUsS0FsQlU7RUFtQjFCQyxlQUFlLEVBQUUsSUFuQlM7RUFvQjFCQyxtQkFBbUIsRUFBRSxLQXBCSztF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InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDFkYjZiNzJhZmUyMzE5NzM4OTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJzsgIFxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtdLFxyXG4gIGltYWdlUGF0aHM6IFtdLFxyXG4gIHNpbmdsZVBvc3Q6IG51bGwsXHJcbiAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG4gIGxvYWRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3REb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdEVycm9yOiBudWxsLFxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIHVwZGF0ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICB1cGRhdGVQb3N0RG9uZTogZmFsc2UsXHJcbiAgdXBkYXRlUG9zdEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gIHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0RvbmU6IGZhbHNlLFxyXG4gIHVwbG9hZEltYWdlc0Vycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gIHVwZGF0ZUNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICB1cGRhdGVDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgdXBkYXRlQ29tbWVudEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZUNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlQ29tbWVudEVycm9yOiBudWxsLFxyXG4gIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgbGlrZVBvc3REb25lOiBmYWxzZSxcclxuICBsaWtlUG9zdEVycm9yOiBudWxsLFxyXG4gIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9SRVFVRVNUID0gJ0xPQURfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9TVUNDRVNTID0gJ0xPQURfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVF9GQUlMVVJFID0gJ0xPQURfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUID0gJ0xPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTID0gJ0xPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFID0gJ0xPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU1RfUkVRVUVTVCA9ICdVUERBVEVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NUX1NVQ0NFU1MgPSAnVVBEQVRFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TVF9GQUlMVVJFID0gJ1VQREFURV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gJ1VQTE9BRF9JTUFHRVNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9JTUFHRV9QQVRIUyA9ICdMT0FEX0lNQUdFX1BBVEhTJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0VfUEFUSFMgPSAnTE9BRF9JTUFHRV9QQVRIUyc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gJ1JFTU9WRV9JTUFHRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQREFURV9DT01NRU5UX1JFUVVFU1QgPSAnVVBEQVRFX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfQ09NTUVOVF9TVUNDRVNTID0gJ1VQREFURV9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0NPTU1FTlRfRkFJTFVSRSA9ICdVUERBVEVfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ09NTUVOVF9SRVFVRVNUID0gJ1JFTU9WRV9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyA9ICdSRU1PVkVfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX0ZBSUxVUkUgPSAnUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBMT0FEX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnNpbmdsZVBvc3QgPSBhY3Rpb24uZGF0YSxcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19SRVFVRVNUOlxyXG4gICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19TVUNDRVNTOlxyXG4gICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBbXTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQREFURV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudXBkYXRlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBkYXRlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUERBVEVfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuY29udGVudCA9IGFjdGlvbi5kYXRhLkNvbnRlbnQ7XHJcbiAgICAgICAgcG9zdC51cGRhdGVkQXQgPSBhY3Rpb24uZGF0YS51cGRhdGVkQXQ7XHJcbiAgICAgICAgaWYgKGFjdGlvbi5kYXRhLkltYWdlcykge1xyXG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYWN0aW9uLmRhdGEuSW1hZ2VzKSkge1xyXG4gICAgICAgICAgICBwb3N0LkltYWdlcyA9IFtdO1xyXG4gICAgICAgICAgICBhY3Rpb24uZGF0YS5JbWFnZXMubWFwKCh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHBvc3QuSW1hZ2VzLnB1c2goeyBzcmM6IHYgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcG9zdC5JbWFnZXMgPSBbeyBzcmM6IGFjdGlvbi5kYXRhLkltYWdlcyB9XTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gW107XHJcbiAgICAgICAgZHJhZnQudXBkYXRlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGRhdGVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBVUERBVEVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBkYXRlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocy5wdXNoKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX0lNQUdFX1BBVEhTOlxyXG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfSU1BR0VfUEFUSFM6XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9JTUFHRTpcclxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgcG9zdC5Db21tZW50cy5wdXNoKGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVUERBVEVfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZUNvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC51cGRhdGVDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZUNvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBEQVRFX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgY29uc3QgY29tbWVudCA9IHBvc3QuQ29tbWVudHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuQ29tbWVudElkKTtcclxuICAgICAgICBjb21tZW50LmNvbnRlbnQgPSBhY3Rpb24uZGF0YS5Db250ZW50O1xyXG4gICAgICAgIGNvbW1lbnQudXBkYXRlZEF0ID0gYWN0aW9uLmRhdGEudXBkYXRlZEF0O1xyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBkYXRlQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVVBEQVRFX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51cGRhdGVDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZUNvbW1lbnRFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuQ29tbWVudHMgPSBwb3N0LkNvbW1lbnRzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuQ29tbWVudElkKTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFJFTU9WRV9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuTGlrZXJzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9O1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9