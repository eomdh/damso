webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shortid */ "./node_modules/shortid/index.js");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


var initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'eomdh',
      profileImagePath: ''
    },
    content: '첫 번째 게시글 #해시태그1 #해시태그2',
    Images: [{
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'
    }],
    Comments: [{
      User: {
        nickname: 'yeji'
      },
      content: '첫 번째 댓글'
    }, {
      User: {
        nickname: 'deokhyeon'
      },
      content: '두 번째 댓글'
    }],
    Likers: [{}],
    imagePaths: []
  }],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};

var dummyPost = function dummyPost(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
    User: {
      id: 1,
      nickname: 'eomdh'
    },
    content: data,
    images: [],
    Comments: []
  };
};

var dummyComment = function dummyComment(data) {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_2___default.a.generate(),
    User: {
      id: 1,
      nickname: 'eomdh'
    },
    content: data,
    images: [],
    Comments: []
  };
};

var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
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

  switch (action.type) {
    case ADD_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      });

    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostDone: true,
        mainPosts: [dummyPost(action.data)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts))
      });

    case ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addPostLoading: false,
        addPostError: action.error
      });

    case ADD_COMMENT_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null
      });

    case ADD_COMMENT_SUCCESS:
      var postIndex = state.mainPosts.findIndex(function (v) {
        return v.id === action.data.postId;
      });

      var post = _objectSpread({}, state.mainPosts[postIndex]);

      post.Comments = [dummyComment(action.data.content)].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(post.Comments));

      var mainPosts = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts);

      mainPosts[postIndex] = post;
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: mainPosts,
        addCommentLoading: false,
        addCommentDone: true
      });

    case ADD_COMMENT_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        addCommentLoading: false,
        addCommentError: action.error
      });

    default:
      return state;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsInByb2ZpbGVJbWFnZVBhdGgiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJMaWtlcnMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJkdW1teVBvc3QiLCJkYXRhIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiaW1hZ2VzIiwiZHVtbXlDb21tZW50IiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiYWRkUG9zdCIsInR5cGUiLCJhZGRDb21tZW50IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwiZXJyb3IiLCJwb3N0SW5kZXgiLCJmaW5kSW5kZXgiLCJ2IiwicG9zdElkIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsWUFBWSxHQUFHO0VBQzFCQyxTQUFTLEVBQUUsQ0FBQztJQUNWQyxFQUFFLEVBQUUsQ0FETTtJQUVWQyxJQUFJLEVBQUU7TUFDSkQsRUFBRSxFQUFFLENBREE7TUFFSkUsUUFBUSxFQUFFLE9BRk47TUFHSkMsZ0JBQWdCLEVBQUU7SUFIZCxDQUZJO0lBT1ZDLE9BQU8sRUFBRSx3QkFQQztJQVFWQyxNQUFNLEVBQUUsQ0FDUjtNQUNFQyxHQUFHLEVBQUU7SUFEUCxDQURRLEVBSVI7TUFDRUEsR0FBRyxFQUFFO0lBRFAsQ0FKUSxFQU9SO01B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TUFIdkI7O0lBS0YsS0FBS1QsbUJBQUw7TUFDRSx1Q0FDS08sS0FETDtRQUVFbkIsaUJBQWlCLEVBQUUsSUFGckI7UUFHRUMsY0FBYyxFQUFFLEtBSGxCO1FBSUVDLGVBQWUsRUFBRTtNQUpuQjs7SUFNRixLQUFLVyxtQkFBTDtNQUNFLElBQU1TLFNBQVMsR0FBR0gsS0FBSyxDQUFDakMsU0FBTixDQUFnQnFDLFNBQWhCLENBQTBCLFVBQUNDLENBQUQ7UUFBQSxPQUFPQSxDQUFDLENBQUNyQyxFQUFGLEtBQVNpQyxNQUFNLENBQUNoQixJQUFQLENBQVlxQixNQUE1QjtNQUFBLENBQTFCLENBQWxCOztNQUNBLElBQU1DLElBQUkscUJBQVFQLEtBQUssQ0FBQ2pDLFNBQU4sQ0FBZ0JvQyxTQUFoQixDQUFSLENBQVY7O01BQ0FJLElBQUksQ0FBQ2hDLFFBQUwsSUFBaUJjLFlBQVksQ0FBQ1ksTUFBTSxDQUFDaEIsSUFBUCxDQUFZYixPQUFiLENBQTdCLHNHQUF1RG1DLElBQUksQ0FBQ2hDLFFBQTVEOztNQUNBLElBQU1SLFNBQVMsR0FBRyw2RkFBSWlDLEtBQUssQ0FBQ2pDLFNBQWIsQ0FBZjs7TUFDQUEsU0FBUyxDQUFDb0MsU0FBRCxDQUFULEdBQXVCSSxJQUF2QjtNQUNBLHVDQUNLUCxLQURMO1FBRUVqQyxTQUFTLEVBQVRBLFNBRkY7UUFHRWMsaUJBQWlCLEVBQUUsS0FIckI7UUFJRUMsY0FBYyxFQUFFO01BSmxCOztJQU1GLEtBQUthLG1CQUFMO01BQ0UsdUNBQ0tLLEtBREw7UUFFRW5CLGlCQUFpQixFQUFFLEtBRnJCO1FBR0VFLGVBQWUsRUFBRWtCLE1BQU0sQ0FBQ0M7TUFIMUI7O0lBS0Y7TUFDRSxPQUFPRixLQUFQO0VBL0NKO0FBaURELENBbEREOztBQW9EZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40ZTMyN2QyYmU4YjgyZWY4MDk4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW3tcclxuICAgIGlkOiAxLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmlja25hbWU6ICdlb21kaCcsXHJcbiAgICAgIHByb2ZpbGVJbWFnZVBhdGg6ICcnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6ICfssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4MSAj7ZW07Iuc7YOc6re4MicsXHJcbiAgICBJbWFnZXM6IFtcclxuICAgIHtcclxuICAgICAgc3JjOiAnaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dWRhdGU9MjAxODA3MjYnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnJyxcclxuICAgIH0sIFxyXG4gICAge1xyXG4gICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5OTgvcm5fdmlld19CTjAwMTk5OC5qcGcnLFxyXG4gICAgfVxyXG4gICAgXSxcclxuICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgbmlja25hbWU6ICd5ZWppJyxcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogJ+yyqyDrsojsp7gg64yT6riAJ1xyXG4gICAgfSwge1xyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgbmlja25hbWU6ICdkZW9raHllb24nLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiAn65GQIOuyiOynuCDrjJPquIAnXHJcbiAgICB9XSxcclxuICAgIExpa2VyczogW3t9XSxcclxuICAgIGltYWdlUGF0aHM6IFtdLFxyXG4gIH1dLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+ICh7XHJcbiAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiAnZW9tZGgnLFxyXG4gIH0sXHJcbiAgY29udGVudDogZGF0YSxcclxuICBpbWFnZXM6IFtdLFxyXG4gIENvbW1lbnRzOiBbXSxcclxufSk7XHJcblxyXG5jb25zdCBkdW1teUNvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6ICdlb21kaCcsXHJcbiAgfSxcclxuICBjb250ZW50OiBkYXRhLFxyXG4gIGltYWdlczogW10sXHJcbiAgQ29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGFkZFBvc3RMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgICAgICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGFkZFBvc3REb25lOiB0cnVlLFxyXG4gICAgICAgIG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkKTtcclxuICAgICAgY29uc3QgcG9zdCA9IHsgLi4uc3RhdGUubWFpblBvc3RzW3Bvc3RJbmRleF0gfTtcclxuICAgICAgcG9zdC5Db21tZW50cyA9IFtkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCksIC4uLnBvc3QuQ29tbWVudHNdO1xyXG4gICAgICBjb25zdCBtYWluUG9zdHMgPSBbLi4uc3RhdGUubWFpblBvc3RzXTtcclxuICAgICAgbWFpblBvc3RzW3Bvc3RJbmRleF0gPSBwb3N0O1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1haW5Qb3N0cyxcclxuICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIGFkZENvbW1lbnRFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9