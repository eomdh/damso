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
          console.log(action.data.Images);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpbWFnZVBhdGhzIiwic2luZ2xlUG9zdCIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0TG9hZGluZyIsImxvYWRQb3N0RG9uZSIsImxvYWRQb3N0RXJyb3IiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInVwZGF0ZVBvc3RMb2FkaW5nIiwidXBkYXRlUG9zdERvbmUiLCJ1cGRhdGVQb3N0RXJyb3IiLCJyZW1vdmVQb3N0TG9hZGluZyIsInJlbW92ZVBvc3REb25lIiwicmVtb3ZlUG9zdEVycm9yIiwidXBsb2FkSW1hZ2VzTG9hZGluZyIsInVwbG9hZEltYWdlc0RvbmUiLCJ1cGxvYWRJbWFnZXNFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJ1cGRhdGVDb21tZW50TG9hZGluZyIsInVwZGF0ZUNvbW1lbnREb25lIiwidXBkYXRlQ29tbWVudEVycm9yIiwicmVtb3ZlQ29tbWVudExvYWRpbmciLCJyZW1vdmVDb21tZW50RG9uZSIsInJlbW92ZUNvbW1lbnRFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwiTE9BRF9QT1NUX1JFUVVFU1QiLCJMT0FEX1BPU1RfU1VDQ0VTUyIsIkxPQURfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiVVBEQVRFX1BPU1RfUkVRVUVTVCIsIlVQREFURV9QT1NUX1NVQ0NFU1MiLCJVUERBVEVfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiTE9BRF9JTUFHRV9QQVRIUyIsIlJFTU9WRV9JTUFHRV9QQVRIUyIsIlJFTU9WRV9JTUFHRSIsIkFERF9DT01NRU5UX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsIlVQREFURV9DT01NRU5UX1JFUVVFU1QiLCJVUERBVEVfQ09NTUVOVF9TVUNDRVNTIiwiVVBEQVRFX0NPTU1FTlRfRkFJTFVSRSIsIlJFTU9WRV9DT01NRU5UX1JFUVVFU1QiLCJSRU1PVkVfQ09NTUVOVF9TVUNDRVNTIiwiUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiTElLRV9QT1NUX1NVQ0NFU1MiLCJMSUtFX1BPU1RfRkFJTFVSRSIsIlVOTElLRV9QT1NUX1JFUVVFU1QiLCJVTkxJS0VfUE9TVF9TVUNDRVNTIiwiVU5MSUtFX1BPU1RfRkFJTFVSRSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInR5cGUiLCJkYXRhIiwiZXJyb3IiLCJjb25jYXQiLCJsZW5ndGgiLCJ1bnNoaWZ0IiwicG9zdCIsImZpbmQiLCJ2IiwiaWQiLCJQb3N0SWQiLCJjb25zb2xlIiwibG9nIiwiSW1hZ2VzIiwiY29udGVudCIsIkNvbnRlbnQiLCJ1cGRhdGVkQXQiLCJBcnJheSIsImlzQXJyYXkiLCJtYXAiLCJwdXNoIiwic3JjIiwicG9zdElkIiwiZmlsdGVyIiwiaSIsIkNvbW1lbnRzIiwiY29tbWVudCIsIkNvbW1lbnRJZCIsIkxpa2VycyIsIlVzZXJJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0VBQzFCQyxTQUFTLEVBQUUsRUFEZTtFQUUxQkMsVUFBVSxFQUFFLEVBRmM7RUFHMUJDLFVBQVUsRUFBRSxJQUhjO0VBSTFCQyxZQUFZLEVBQUUsSUFKWTtFQUsxQkMsZUFBZSxFQUFFLEtBTFM7RUFNMUJDLFlBQVksRUFBRSxLQU5ZO0VBTzFCQyxhQUFhLEVBQUUsSUFQVztFQVExQkMsZ0JBQWdCLEVBQUUsS0FSUTtFQVMxQkMsYUFBYSxFQUFFLEtBVFc7RUFVMUJDLGNBQWMsRUFBRSxJQVZVO0VBVzFCQyxjQUFjLEVBQUUsS0FYVTtFQVkxQkMsV0FBVyxFQUFFLEtBWmE7RUFhMUJDLFlBQVksRUFBRSxJQWJZO0VBYzFCQyxpQkFBaUIsRUFBRSxLQWRPO0VBZTFCQyxjQUFjLEVBQUUsS0FmVTtFQWdCMUJDLGVBQWUsRUFBRSxJQWhCUztFQWlCMUJDLGlCQUFpQixFQUFFLEtBakJPO0VBa0IxQkMsY0FBYyxFQUFFLEtBbEJVO0VBbUIxQkMsZUFBZSxFQUFFLElBbkJTO0VBb0IxQkMsbUJB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Q0E7O01BQ0Y7UUFDRTtJQXpNSjs7SUEwTUM7RUFDRixDQTVNYSxDQUFkO0FBNk1ELENBOU1EOztBQWdOZU4sc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43YjhjNzNkMTJjNGUyMWViZDRjMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInOyAgXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW10sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgc2luZ2xlUG9zdDogbnVsbCxcclxuICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbiAgbG9hZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0RXJyb3I6IG51bGwsXHJcbiAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcbiAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgdXBkYXRlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHVwZGF0ZVBvc3REb25lOiBmYWxzZSxcclxuICB1cGRhdGVQb3N0RXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgdXBsb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsXHJcbiAgdXBsb2FkSW1hZ2VzRG9uZTogZmFsc2UsXHJcbiAgdXBsb2FkSW1hZ2VzRXJyb3I6IG51bGwsXHJcbiAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcbiAgdXBkYXRlQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIHVwZGF0ZUNvbW1lbnREb25lOiBmYWxzZSxcclxuICB1cGRhdGVDb21tZW50RXJyb3I6IG51bGwsXHJcbiAgcmVtb3ZlQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gIHJlbW92ZUNvbW1lbnREb25lOiBmYWxzZSxcclxuICByZW1vdmVDb21tZW50RXJyb3I6IG51bGwsXHJcbiAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBsaWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gIGxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbiAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gIHVubGlrZVBvc3REb25lOiBmYWxzZSxcclxuICB1bmxpa2VQb3N0RXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1JFUVVFU1QgPSAnTE9BRF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX1NVQ0NFU1MgPSAnTE9BRF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUX0ZBSUxVUkUgPSAnTE9BRF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUERBVEVfUE9TVF9SRVFVRVNUID0gJ1VQREFURV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU1RfU1VDQ0VTUyA9ICdVUERBVEVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NUX0ZBSUxVUkUgPSAnVVBEQVRFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9ICdVUExPQURfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gJ1VQTE9BRF9JTUFHRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX0lNQUdFU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0lNQUdFX1BBVEhTID0gJ0xPQURfSU1BR0VfUEFUSFMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRV9QQVRIUyA9ICdMT0FEX0lNQUdFX1BBVEhTJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSAnUkVNT1ZFX0lNQUdFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBEQVRFX0NPTU1FTlRfUkVRVUVTVCA9ICdVUERBVEVfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQREFURV9DT01NRU5UX1NVQ0NFU1MgPSAnVVBEQVRFX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfQ09NTUVOVF9GQUlMVVJFID0gJ1VQREFURV9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9DT01NRU5UX1JFUVVFU1QgPSAnUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTID0gJ1JFTU9WRV9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSA9ICdSRU1PVkVfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9ICdMSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9ICdMSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9ICdMSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICBjYXNlIExPQURfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuc2luZ2xlUG9zdCA9IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgIGNhc2UgTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgIGNhc2UgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gYWN0aW9uLmRhdGEubGVuZ3RoID09PSAxMDtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19GQUlMVVJFOlxyXG4gICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBEQVRFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC51cGRhdGVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXBkYXRlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGRhdGVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQREFURV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEuSW1hZ2VzKTtcclxuICAgICAgICBwb3N0LmNvbnRlbnQgPSBhY3Rpb24uZGF0YS5Db250ZW50O1xyXG4gICAgICAgIHBvc3QudXBkYXRlZEF0ID0gYWN0aW9uLmRhdGEudXBkYXRlZEF0O1xyXG4gICAgICAgIGlmIChhY3Rpb24uZGF0YS5JbWFnZXMpIHtcclxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFjdGlvbi5kYXRhLkltYWdlcykpIHtcclxuICAgICAgICAgICAgcG9zdC5JbWFnZXMgPSBbXTtcclxuICAgICAgICAgICAgYWN0aW9uLmRhdGEuSW1hZ2VzLm1hcCgodikgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiBwb3N0LkltYWdlcy5wdXNoKHsgc3JjOiB2IH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBvc3QuSW1hZ2VzID0gW3sgc3JjOiBhY3Rpb24uZGF0YS5JbWFnZXMgfV07XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBkYXRlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVVBEQVRFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51cGRhdGVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMucHVzaChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTE9BRF9JTUFHRV9QQVRIUzpcclxuICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX0lNQUdFX1BBVEhTOlxyXG4gICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBbXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfSU1BR0U6XHJcbiAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LCBpKSA9PiBpICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICBjb25zdCBwb3N0ICA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuQ29tbWVudHMucHVzaChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVVBEQVRFX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC51cGRhdGVDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudXBkYXRlQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGRhdGVDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVQREFURV9DT01NRU5UX1NVQ0NFU1M6IHtcclxuICAgICAgICBjb25zdCBwb3N0ICA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgIGNvbnN0IGNvbW1lbnQgPSBwb3N0LkNvbW1lbnRzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLkNvbW1lbnRJZCk7XHJcbiAgICAgICAgY29tbWVudC5jb250ZW50ID0gYWN0aW9uLmRhdGEuQ29udGVudDtcclxuICAgICAgICBjb21tZW50LnVwZGF0ZWRBdCA9IGFjdGlvbi5kYXRhLnVwZGF0ZWRBdDtcclxuICAgICAgICBkcmFmdC51cGRhdGVDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVwZGF0ZUNvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlIFVQREFURV9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQudXBkYXRlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51cGRhdGVDb21tZW50RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICBwb3N0LkNvbW1lbnRzID0gcG9zdC5Db21tZW50cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLkNvbW1lbnRJZCk7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlQ29tbWVudEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==