webpackHotUpdate_N_E("pages/index",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, generateDummyPost, addPost, removePost, addComment, default */
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
  mainPosts: [],
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
  addCommentError: null
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJoYXNNb3JlUG9zdHMiLCJsb2FkUG9zdHNMb2FkaW5nIiwibG9hZFBvc3RzRG9uZSIsImxvYWRQb3N0c0Vycm9yIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiZ2VuZXJhdGVEdW1teVBvc3QiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJpZCIsInNob3J0SWQiLCJnZW5lcmF0ZSIsIlVzZXIiLCJuaWNrbmFtZSIsImZha2VyIiwibmFtZSIsImZpbmROYW1lIiwiY29udGVudCIsImxvcmVtIiwicGFyYWdyYXBoIiwiSW1hZ2VzIiwic3JjIiwiaW1hZ2UiLCJDb21tZW50cyIsInNlbnRlbmNlIiwiZHVtbXlQb3N0IiwiZGF0YSIsImltYWdlcyIsImR1bW15Q29tbWVudCIsImFkZFBvc3QiLCJ0eXBlIiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJjb25jYXQiLCJsZW5ndGgiLCJlcnJvciIsInVuc2hpZnQiLCJmaWx0ZXIiLCJ2IiwicG9zdCIsImZpbmQiLCJwb3N0SWQiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRztFQUMxQkMsU0FBUyxFQUFFLEVBRGU7RUFFMUJDLFlBQVksRUFBRSxJQUZZO0VBRzFCQyxnQkFBZ0IsRUFBRSxLQUhRO0VBSTFCQyxhQUFhLEVBQUUsS0FKVztFQUsxQkMsY0FBYyxFQUFFLElBTFU7RUFNMUJDLGNBQWMsRUFBRSxLQU5VO0VBTzFCQyxXQUFXLEVBQUUsS0FQYTtFQVExQkMsWUFBWSxFQUFFLElBUlk7RUFTMUJDLGlCQUFpQixFQUFFLEtBVE87RUFVMUJDLGNBQWMsRUFBRSxLQVZVO0VBVzFCQyxlQUFlLEVBQUUsSUFYUztFQVkxQkMsaUJBQWlCLEVBQUUsS0FaTztFQWExQkMsY0FBYyxFQUFFLEtBYlU7RUFjMUJDLGVBQWUsRUFBRTtBQWRTLENBQXJCO0FBaUJBLElBQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUNBLElBQU1DLGtCQUFrQixHQUFHLG9CQUEzQjtBQUVBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUVBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUVBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1QjtBQUNBLElBQU1DLG1CQUFtQixHQUFHLHFCQUE1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TixHQUF3QjRDLE1BQU0sQ0FBQ1QsSUFBL0I7UUFDQTs7TUFDRjtRQUNFO0lBNURKO0VBOERELENBL0RhLENBQWQ7QUFnRUQsQ0FqRUQ7O0FBbUVlTyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yMzY3ZmI4MzY5ZmE5MmQzYjBjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcbmltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJzsgIFxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFtdLFxyXG4gIGhhc01vcmVQb3N0czogdHJ1ZSxcclxuICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiBBcnJheShudW1iZXIpLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gIH0sXHJcbiAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgSW1hZ2VzOiBbe1xyXG4gICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gIH1dLFxyXG4gIENvbW1lbnRzOiBbe1xyXG4gICAgVXNlcjoge1xyXG4gICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgfV0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBkYXRhLmlkLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6ICdlb21kaCcsXHJcbiAgfSxcclxuICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbiAgaW1hZ2VzOiBbXSxcclxuICBDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiAnZW9tZGgnLFxyXG4gIH0sXHJcbiAgY29udGVudDogZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgICBwb3N0LkNvbW1lbnRzLnB1c2goZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==