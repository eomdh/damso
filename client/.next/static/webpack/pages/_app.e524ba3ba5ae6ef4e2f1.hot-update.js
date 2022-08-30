webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, generateDummyPost, addPost, removePost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var generateDummyPost = function generateDummyPost(number) {};
initialState.mainPosts = initialState.mainPosts.concat(Array(20).fill().map(function () {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    User: {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      nickname: faker__WEBPACK_IMPORTED_MODULE_1___default.a.name.findName()
    },
    content: faker__WEBPACK_IMPORTED_MODULE_1___default.a.lorem.paragraph(),
    Images: [{
      src: faker__WEBPACK_IMPORTED_MODULE_1___default.a.image.image()
    }, {
      src: faker__WEBPACK_IMPORTED_MODULE_1___default.a.image.image()
    }, {
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
}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJnZW5lcmF0ZUR1bW15UG9zdCIsIm51bWJlciIsImNvbmNhdCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImlkIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiVXNlciIsIm5pY2tuYW1lIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJjb250ZW50IiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJJbWFnZXMiLCJzcmMiLCJpbWFnZSIsIkNvbW1lbnRzIiwic2VudGVuY2UiLCJkdW1teVBvc3QiLCJkYXRhIiwiaW1hZ2VzIiwiZHVtbXlDb21tZW50IiwiYWRkUG9zdCIsInR5cGUiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInVuc2hpZnQiLCJlcnJvciIsImZpbHRlciIsInYiLCJwb3N0IiwiZmluZCIsInBvc3RJZCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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LE9BQU9BLENBQUMsQ0FBQ2hDLEVBQUYsS0FBUzBCLE1BQU0sQ0FBQ1QsSUFBUCxDQUFZa0IsTUFBNUI7UUFBQSxDQUFyQixDQUFiO1FBQ0FGLElBQUksQ0FBQ25CLFFBQUwsQ0FBY3NCLElBQWQsQ0FBbUJqQixZQUFZLENBQUNPLE1BQU0sQ0FBQ1QsSUFBUCxDQUFZVCxPQUFiLENBQS9CO1FBQ0E7O01BQ0YsS0FBS2YsbUJBQUw7UUFDRW1DLEtBQUssQ0FBQzlDLGlCQUFOLEdBQTBCLEtBQTFCO1FBQ0E4QyxLQUFLLENBQUM1QyxlQUFOLEdBQXdCMEMsTUFBTSxDQUFDVCxJQUEvQjtRQUNBOztNQUNGO1FBQ0U7SUE3Q0o7RUErQ0QsQ0FoRGEsQ0FBZDtBQWlERCxDQWxERDs7QUFvRGVPLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZTUyNGJhM2JhNWFlNmVmNGUyZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7ICBcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUR1bW15UG9zdCA9IChudW1iZXIpID0+IHtcclxuXHJcbn07XHJcblxyXG5pbml0aWFsU3RhdGUubWFpblBvc3RzID0gaW5pdGlhbFN0YXRlLm1haW5Qb3N0cy5jb25jYXQoXHJcbiAgQXJyYXkoMjApLmZpbGwoKS5tYXAoKCkgPT4gKHtcclxuICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgICBJbWFnZXM6IFt7XHJcbiAgICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuICAgIH0sIHtcclxuICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpLFxyXG4gICAgfSx7XHJcbiAgICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuICAgIH1dLFxyXG4gICAgQ29tbWVudHM6IFt7XHJcbiAgICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIG5pY2tuYW1lOiBmYWtlci5uYW1lLmZpbmROYW1lKCksXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnNlbnRlbmNlKCksXHJcbiAgICB9XSxcclxuICB9KSlcclxuKTtcclxuXHJcbmNvbnN0IGR1bW15UG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBkYXRhLmlkLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6ICdlb21kaCcsXHJcbiAgfSxcclxuICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbiAgaW1hZ2VzOiBbXSxcclxuICBDb21tZW50czogW10sXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiAnZW9tZGgnLFxyXG4gIH0sXHJcbiAgY29udGVudDogZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gKGRhdGEpID0+ICh7XHJcbiAgdHlwZTogQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICBkYXRhLFxyXG59KTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChkdW1teVBvc3QoYWN0aW9uLmRhdGEpKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLnBvc3RJZCk7XHJcbiAgICAgICAgcG9zdC5Db21tZW50cy5wdXNoKGR1bW15Q29tbWVudChhY3Rpb24uZGF0YS5jb250ZW50KSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=