webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, removePost, addComment, default */
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
      nickname: 'eomdh',
      profileImagePath: ''
    },
    content: '첫 번째 게시글 #해시태그1 #해시태그2',
    Images: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg'
    }],
    Comments: [{
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: 'yeji'
      },
      content: '첫 번째 댓글'
    }, {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsInByb2ZpbGVJbWFnZVBhdGgiLCJjb250ZW50IiwiSW1hZ2VzIiwic2hvcnRJZCIsImdlbmVyYXRlIiwic3JjIiwiQ29tbWVudHMiLCJMaWtlcnMiLCJpbWFnZVBhdGhzIiwiYWRkUG9zdExvYWRpbmciLCJhZGRQb3N0RG9uZSIsImFkZFBvc3RFcnJvciIsInJlbW92ZVBvc3RMb2FkaW5nIiwicmVtb3ZlUG9zdERvbmUiLCJyZW1vdmVQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiY29uY2F0IiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJsb3JlbSIsInBhcmFncmFwaCIsImltYWdlIiwic2VudGVuY2UiLCJkdW1teVBvc3QiLCJkYXRhIiwiaW1hZ2VzIiwiZHVtbXlDb21tZW50IiwiYWRkUG9zdCIsInR5cGUiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInVuc2hpZnQiLCJlcnJvciIsImZpbHRlciIsInYiLCJwb3N0IiwiZmluZCIsInBvc3RJZCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFlBQVksR0FBRztFQUMxQkMsU0FBUyxFQUFFLENBQUM7SUFDVkMsRUFBRSxFQUFFLENBRE07SUFFVkMsSUFBSSxFQUFFO01BQ0pELEVBQUUsRUFBRSxDQURBO01BRUpFLFFBQVEsRUFBRSxPQUZOO01BR0pDLGdCQUFnQixFQUFFO0lBSGQsQ0FGSTtJQU9WQyxPQUFPLEVBQUUsd0JBUEM7SUFRVkMsTUFBTSxFQUFFLENBQ1I7TUFDRUwsRUFBRSxFQUFFTSw4Q0FBTyxDQUFDQyxRQUFSLEVBRE47TUFFRUMsR0FBRyxFQUFFO0lBRlAsQ0FEUSxFQUtSO01BQ0VSLEVBQUUsRUFBRU0sOENBQU8sQ0FBQ0MsUUFBUixFQUROO01BRUVDLEdBQUcsRUFBRTtJQUZQLENBTFEsRUFTUjtNQUNFUixFQUFFLEVBQUVNLDhDQUFPLENBQUNDLFFBQVIsRUFETjtNQUVFQyxHQUFHLEVBQUU7SUFGUCxDQVRRLENBUkU7SUFzQlZDLFFBQVEsRUFBRSxDQUFDO01BQ1RULEVBQUUsRUFBRU0sOENBQU8sQ0FBQ0MsUUFBUixFQURLO01BRVROLElBQUksRUFBRTtRQUNKRCxFQUFFLEVBQUVNLDhDQUFPLENBQUNDLFFBQVIsRUFEQTtRQUVKTCxRQUFRLEVBQUU7TUFGTixDQUZHO01BTVRFLE9BQU8sRUFBRTtJQU5BLENBQUQsRUFPUDtNQUNESixFQUFFLEVBQUVNLDhDQUFPLENBQUNDLFFBQVIsRUFESDtNQUVETixJQUFJLEVBQUU7UUFDSkQsRUFBRSxFQUFFTSw4Q0FBTyxDQUFDQyxRQUFSLEVBREE7UUFFSkwsUUFBUSxFQUFFO01BRk4sQ0FGTDtNQU1ERSxPQUFPLEVBQUU7SUFOUixDQVBPLENBdEJBO0lBcUNWTSxNQUFNLEVBQUUsQ0FBQyxFQUFELENBckNFO0lBc0NWQyxVQUFVLEVBQUU7RUF0Q0YsQ0FBRCxDQURlO0VBeUMxQkMsY0FBYyxFQUFFLEtBekNVO0VBMEMxQkMsV0FBVyxFQUFFLEtBMUNhO0VBMkMxQkMsWUFBWSxFQUFFLElBM0NZO0VBNEMxQkMsaUJBQWlCLEVBQUUsS0E1Q087RUE2QzFCQyxjQUFjLEVBQUUsS0E3Q1U7RUE4QzFCQyxlQUFlLEVBQUUsSUE5Q1M7RUErQzFCQyxpQkFBaUIsRUFBRSxLQS9DTztFQWdEMUJDLGNBQWMsRUFBRSxLQWhEVTtFQWlEMUJDLGVBQWUsRUFBRTtBQWpEUyxDQUFyQjtBQW9EQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxJQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFFQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRyxxQkFBNUI7QUFFUC9CLFlBQVksQ0FBQ0MsU0FBYixHQUF5QkQsWUFBWSxDQUFDQyxTQUFiLENBQXVCK0IsTUFBdkIsQ0FDdkJDLEtBQUssQ0FBQyxFQUFELENBQUwsQ0FBVUMsSUFBVixHQUFpQkMsR0FBakIsQ0FBcUI7RUFBQSxPQUFPO0lBQzFCakMsRUFBRSxFQUFFTSw4Q0FBTyxDQUFDQyxRQUFSLEVBRHNCO0lBRTFCTixJQUFJLEVBQUU7TUFDSkQsRUFBRSxFQUFFTSw4Q0FBTyxDQUFDQyxRQUFSLEVBREE7TUFFSkwsUUFBUSxFQUFFZ0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXQyxRQUFYO0lBRk4sQ0FGb0I7SUFNMUJoQyxPQUFPLEVBQUU4Qiw0Q0FBSyxDQUFDRyxLQUFOLENBQVlDLFNBQVosRUFOaUI7SUFPMUJqQyxNQUFNLEVBQUUsQ0FBQztNQUNQRyxHQUFHLEVBQUUwQiw0Q0FBSyxDQUFDSyxLQUFOLENBQVlBLEtBQVo7SUFERSxDQUFELENBUGtCO0lBVTFCOUIsUUFBUSxFQUFFLENBQUM7TUFDVFIsSUFBSSxFQUFFO1FBQ0pELEVBQUUsRUFBRU0sOENBQU8sQ0FBQ0MsUUFBUixFQURBO1FBRUpMLFFBQVEsRUFBRWdDLDRDQUFLLENBQUNDLElBQU4sQ0FBV0MsUUFBWDtNQUZOLENBREc7TUFLVGhDLE9BQU8sRUFBRThCLDRDQUFLLENBQUNHLEtBQU4sQ0FBWUcsUUFBWjtJQUxBLENBQUQ7RUFWZ0IsQ0FBUDtBQUFBLENBQXJCLENBRHVCLENBQXpCOztBQXFCQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFEO0VBQUEsT0FBVztJQUMzQjFDLEVBQUUsRUFBRTBDLElBQUksQ0FBQzFDLEVBRGtCO0lBRTNCQyxJQUFJLEVBQUU7TUFDSkQsRUFBRSxFQUFFLENBREE7TUFFSkUsUUFBUSxFQUFFO0lBRk4sQ0FGcUI7SUFNM0JFLE9BQU8sRUFBRXNDLElBQUksQ0FBQ3RDLE9BTmE7SUFPM0J1QyxNQUFNLEVBQUUsRUFQbUI7SUFRM0JsQyxRQUFRLEVBQUU7RUFSaUIsQ0FBWDtBQUFBLENBQWxCOztBQVdBLElBQU1tQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDRixJQUFEO0VBQUEsT0FBVztJQUM5QjFDLEVBQUUsRUFBRU0sOENBQU8sQ0FBQ0MsUUFBUixFQUQwQjtJQUU5Qk4sSUFBSSxFQUFFO01BQ0pELEVBQUUsRUFBRSxDQURBO01BRUpFLFFBQVEsRUFBRTtJQUZOLENBRndCO0lBTTlCRSxPQUFPLEVBQUVzQztFQU5xQixDQUFYO0FBQUEsQ0FBckI7O0FBU08sSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0gsSUFBRDtFQUFBLE9BQVc7SUFDaENJLElBQUksRUFBRXpCLGdCQUQwQjtJQUVoQ3FCLElBQUksRUFBSkE7RUFGZ0MsQ0FBWDtBQUFBLENBQWhCO0FBS0EsSUFBTUssVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0wsSUFBRDtFQUFBLE9BQVc7SUFDbkNJLElBQUksRUFBRXRCLG1CQUQ2QjtJQUVuQ2tCLElBQUksRUFBSkE7RUFGbUMsQ0FBWDtBQUFBLENBQW5CO0FBS0EsSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ04sSUFBRDtFQUFBLE9BQVc7SUFDbkNJLElBQUksRUFBRW5CLG1CQUQ2QjtJQUVuQ2UsSUFBSSxFQUFKQTtFQUZtQyxDQUFYO0FBQUEsQ0FBbkI7O0FBS1AsSUFBTU8sT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7RUFBQSxJQUFqQ0MsS0FBaUMsdUVBQXpCcEQsWUFBeUI7RUFBQSxJQUFYcUQsTUFBVztFQUNoRCxPQUFPQyxxREFBTyxDQUFDRixLQUFELEVBQVEsVUFBQ0csS0FBRCxFQUFXO0lBQy9CLFFBQVFGLE1BQU0sQ0FBQ0wsSUFBZjtNQUNFLEtBQUt6QixnQkFBTDtRQUNFZ0MsS0FBSyxDQUFDekMsY0FBTixHQUF1QixJQUF2QjtRQUNBeUMsS0FBSyxDQUFDeEMsV0FBTixHQUFvQixLQUFwQjtRQUNBd0MsS0FBSyxDQUFDdkMsWUFBTixHQUFxQixJQUFyQjtRQUNBOztNQUNGLEtBQUtRLGdCQUFMO1FBQ0UrQixLQUFLLENBQUN6QyxjQUFOLEdBQXVCLEtBQXZCO1FBQ0F5QyxLQUFLLENBQUN4QyxXQUFOLEdBQW9CLElBQXBCO1FBQ0F3QyxLQUFLLENBQUN0RCxTQUFOLENBQWdCdUQsT0FBaEIsQ0FBd0JiLFNBQVMsQ0FBQ1UsTUFBTSxDQUFDVCxJQUFSLENBQWpDO1FBQ0E7O01BQ0YsS0FBS25CLGdCQUFMO1FBQ0U4QixLQUFLLENBQUN6QyxjQUFOLEdBQXVCLEtBQXZCO1FBQ0F5QyxLQUFLLENBQUN2QyxZQUFOLEdBQXFCcUMsTUFBTSxDQUFDSSxLQUE1QjtRQUNBOztNQUNGLEtBQUsvQixtQkFBTDtRQUNFNkIsS0FBSyxDQUFDdEMsaUJBQU4sR0FBMEIsSUFBMUI7UUFDQXNDLEtBQUssQ0FBQ3JDLGNBQU4sR0FBdUIsS0FBdkI7UUFDQXFDLEtBQUssQ0FBQ3BDLGVBQU4sR0FBd0IsSUFBeEI7UUFDQTs7TUFDRixLQUFLUSxtQkFBTDtRQUNFNEIsS0FBSyxDQUFDdEMsaUJBQU4sR0FBMEIsS0FBMUI7UUFDQXNDLEtBQUssQ0FBQ3JDLGNBQU4sR0FBdUIsS0FBdkI7UUFDQXFDLEtBQUssQ0FBQ3RELFNBQU4sR0FBa0JzRCxLQUFLLENBQUN0RCxTQUFOLENBQWdCeUQsTUFBaEIsQ0FBdUIsVUFBQ0MsQ0FBRDtVQUFBLE9BQU9BLENBQUMsQ0FBQ3pELEVBQUYsS0FBU21ELE1BQU0sQ0FBQ1QsSUFBdkI7UUFBQSxDQUF2QixDQUFsQjtRQUNBOztNQUNGLEtBQUtoQixtQkFBTDtRQUNFMkIsS0FBSyxDQUFDdEMsaUJBQU4sR0FBMEIsS0FBMUI7UUFDQXNDLEtBQUssQ0FBQ3BDLGVBQU4sR0FBd0JrQyxNQUFNLENBQUNJLEtBQS9CO1FBQ0E7O01BQ0YsS0FBSzVCLG1CQUFMO1FBQ0UwQixLQUFLLENBQUNuQyxpQkFBTixHQUEwQixJQUExQjtRQUNBbUMsS0FBSyxDQUFDbEMsY0FBTixHQUF1QixLQUF2QjtRQUNBa0MsS0FBSyxDQUFDakMsZUFBTixHQUF3QixJQUF4QjtRQUNBOztNQUNGLEtBQUtRLG1CQUFMO1FBQ0V5QixLQUFLLENBQUNuQyxpQkFBTixHQUEwQixLQUExQjtRQUNBbUMsS0FBSyxDQUFDbEMsY0FBTixHQUF1QixJQUF2QjtRQUNBLElBQU11QyxJQUFJLEdBQUdMLEtBQUssQ0FBQ3RELFNBQU4sQ0FBZ0I0RCxJQUFoQixDQUFxQixVQUFDRixDQUFEO1VBQUEsT0FBT0EsQ0FBQyxDQUFDekQsRUFBRixLQUFTbUQsTUFBTSxDQUFDVCxJQUFQLENBQVlrQixNQUE1QjtRQUFBLENBQXJCLENBQWI7UUFDQUYsSUFBSSxDQUFDakQsUUFBTCxDQUFjb0QsSUFBZCxDQUFtQmpCLFlBQVksQ0FBQ08sTUFBTSxDQUFDVCxJQUFQLENBQVl0QyxPQUFiLENBQS9CO1FBQ0E7O01BQ0YsS0FBS3lCLG1CQUFMO1FBQ0V3QixLQUFLLENBQUNuQyxpQkFBTixHQUEwQixLQUExQjtRQUNBbUMsS0FBSyxDQUFDakMsZUFBTixHQUF3QitCLE1BQU0sQ0FBQ1QsSUFBL0I7UUFDQTs7TUFDRjtRQUNFO0lBN0NKO0VBK0NELENBaERhLENBQWQ7QUFpREQsQ0FsREQ7O0FBb0RlTyxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmU1OWIzMDg2N2U2ZDNlNDlkMTEwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInOyAgXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW3tcclxuICAgIGlkOiAxLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmlja25hbWU6ICdlb21kaCcsXHJcbiAgICAgIHByb2ZpbGVJbWFnZVBhdGg6ICcnLFxyXG4gICAgfSxcclxuICAgIGNvbnRlbnQ6ICfssqsg67KI7Ke4IOqyjOyLnOq4gCAj7ZW07Iuc7YOc6re4MSAj7ZW07Iuc7YOc6re4MicsXHJcbiAgICBJbWFnZXM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgc3JjOiAnaHR0cHM6Ly9ib29rdGh1bWItcGhpbmYucHN0YXRpYy5uZXQvY292ZXIvMTM3Lzk5NS8xMzc5OTU4NS5qcGc/dWRhdGU9MjAxODA3MjYnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnJyxcclxuICAgIH0sIFxyXG4gICAge1xyXG4gICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5OTgvcm5fdmlld19CTjAwMTk5OC5qcGcnLFxyXG4gICAgfVxyXG4gICAgXSxcclxuICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTogJ3llamknLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDrjJPquIAnXHJcbiAgICB9LCB7XHJcbiAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgIFVzZXI6IHtcclxuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIG5pY2tuYW1lOiAnZGVva2h5ZW9uJyxcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogJ+uRkCDrsojsp7gg64yT6riAJ1xyXG4gICAgfV0sXHJcbiAgICBMaWtlcnM6IFt7fV0sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICB9XSxcclxuICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmluaXRpYWxTdGF0ZS5tYWluUG9zdHMgPSBpbml0aWFsU3RhdGUubWFpblBvc3RzLmNvbmNhdChcclxuICBBcnJheSgyMCkuZmlsbCgpLm1hcCgoKSA9PiAoe1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgbmlja25hbWU6IGZha2VyLm5hbWUuZmluZE5hbWUoKSxcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiBmYWtlci5sb3JlbS5wYXJhZ3JhcGgoKSxcclxuICAgIEltYWdlczogW3tcclxuICAgICAgc3JjOiBmYWtlci5pbWFnZS5pbWFnZSgpXHJcbiAgICB9XSxcclxuICAgIENvbW1lbnRzOiBbe1xyXG4gICAgICBVc2VyOiB7XHJcbiAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgfV0sXHJcbiAgfSkpXHJcbik7XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICBpZDogZGF0YS5pZCxcclxuICBVc2VyOiB7XHJcbiAgICBpZDogMSxcclxuICAgIG5pY2tuYW1lOiAnZW9tZGgnLFxyXG4gIH0sXHJcbiAgY29udGVudDogZGF0YS5jb250ZW50LFxyXG4gIGltYWdlczogW10sXHJcbiAgQ29tbWVudHM6IFtdLFxyXG59KTtcclxuXHJcbmNvbnN0IGR1bW15Q29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogJ2VvbWRoJyxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuQ29tbWVudHMucHVzaChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9