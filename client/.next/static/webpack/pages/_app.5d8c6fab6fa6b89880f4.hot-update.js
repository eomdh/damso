webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, generateDummyPost, addPost, removePost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_REQUEST", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_SUCCESS", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POST_FAILURE", function() { return LOAD_POST_FAILURE; });
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
var LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
var LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
var LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJMT0FEX1BPU1RfUkVRVUVTVCIsIkxPQURfUE9TVF9TVUNDRVNTIiwiTE9BRF9QT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJnZW5lcmF0ZUR1bW15UG9zdCIsIm51bWJlciIsImNvbmNhdCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImlkIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiVXNlciIsIm5pY2tuYW1lIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJjb250ZW50IiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJJbWFnZXMiLCJzcmMiLCJpbWFnZSIsIkNvbW1lbnRzIiwic2VudGVuY2UiLCJkdW1teVBvc3QiLCJkYXRhIiwiaW1hZ2VzIiwiZHVtbXlDb21tZW50IiwiYWRkUG9zdCIsInR5cGUiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInVuc2hpZnQiLCJlcnJvciIsImZpbHRlciIsInYiLCJwb3N0IiwiZmluZCIsInBvc3RJZCIsInB1c2giXSwi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TUFDRixLQUFLVyxtQkFBTDtRQUNFb0MsS0FBSyxDQUFDakQsaUJBQU4sR0FBMEIsS0FBMUI7UUFDQWlELEtBQUssQ0FBQ2hELGNBQU4sR0FBdUIsSUFBdkI7UUFDQSxJQUFNcUQsSUFBSSxHQUFHTCxLQUFLLENBQUN4RCxTQUFOLENBQWdCOEQsSUFBaEIsQ0FBcUIsVUFBQ0YsQ0FBRDtVQUFBLE9BQU9BLENBQUMsQ0FBQ2hDLEVBQUYsS0FBUzBCLE1BQU0sQ0FBQ1QsSUFBUCxDQUFZa0IsTUFBNUI7UUFBQSxDQUFyQixDQUFiO1FBQ0FGLElBQUksQ0FBQ25CLFFBQUwsQ0FBY3NCLElBQWQsQ0FBbUJqQixZQUFZLENBQUNPLE1BQU0sQ0FBQ1QsSUFBUCxDQUFZVCxPQUFiLENBQS9CO1FBQ0E7O01BQ0YsS0FBS2YsbUJBQUw7UUFDRW1DLEtBQUssQ0FBQ2pELGlCQUFOLEdBQTBCLEtBQTFCO1FBQ0FpRCxLQUFLLENBQUMvQyxlQUFOLEdBQXdCNkMsTUFBTSxDQUFDVCxJQUEvQjtRQUNBOztNQUNGO1FBQ0U7SUE3Q0o7RUErQ0QsQ0FoRGEsQ0FBZDtBQWlERCxDQWxERDs7QUFvRGVPLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNWQ4YzZmYWI2ZmE2Yjg5ODgwZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7ICBcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpblBvc3RzOiBbXSxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfUkVRVUVTVCA9ICdMT0FEX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfU1VDQ0VTUyA9ICdMT0FEX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RfRkFJTFVSRSA9ICdMT0FEX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVEdW1teVBvc3QgPSAobnVtYmVyKSA9PiB7XHJcblxyXG59O1xyXG5cclxuaW5pdGlhbFN0YXRlLm1haW5Qb3N0cyA9IGluaXRpYWxTdGF0ZS5tYWluUG9zdHMuY29uY2F0KFxyXG4gIEFycmF5KDIwKS5maWxsKCkubWFwKCgpID0+ICh7XHJcbiAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6IGZha2VyLmxvcmVtLnBhcmFncmFwaCgpLFxyXG4gICAgSW1hZ2VzOiBbe1xyXG4gICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbiAgICB9LCB7XHJcbiAgICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuICAgIH0se1xyXG4gICAgICBzcmM6IGZha2VyLmltYWdlLmltYWdlKCksXHJcbiAgICB9XSxcclxuICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgfV0sXHJcbiAgfSkpXHJcbik7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogZGF0YS5pZCxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiAnZW9tZGgnLFxyXG4gIH0sXHJcbiAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gIGltYWdlczogW10sXHJcbiAgQ29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogJ2VvbWRoJyxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuQ29tbWVudHMucHVzaChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9