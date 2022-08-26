webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



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
    imagePaths: [],
    postAdded: false
  }]
};
var dummyPost = {
  id: 2,
  User: {
    id: 1,
    nickname: 'eomdh'
  },
  content: '더미데이터입니다.',
  images: [],
  Comments: []
};
var ADD_POST_REQUEST = 'ADD_POST_REQUEST';
var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var addPost = function addPost(data) {
  return {
    type: ADD_POST_REQUEST,
    data: data
  };
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST_REQUEST:
      return _objectSpread({}, state);

    case ADD_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        postAdded: true
      });

    case ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.mainPosts)),
        postAdded: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsInByb2ZpbGVJbWFnZVBhdGgiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJMaWtlcnMiLCJpbWFnZVBhdGhzIiwicG9zdEFkZGVkIiwiZHVtbXlQb3N0IiwiaW1hZ2VzIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiYWRkUG9zdCIsImRhdGEiLCJ0eXBlIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0VBQzFCQyxTQUFTLEVBQUUsQ0FBQztJQUNWQyxFQUFFLEVBQUUsQ0FETTtJQUVWQyxJQUFJLEVBQUU7TUFDSkQsRUFBRSxFQUFFLENBREE7TUFFSkUsUUFBUSxFQUFFLE9BRk47TUFHSkMsZ0JBQWdCLEVBQUU7SUFIZCxDQUZJO0lBT1ZDLE9BQU8sRUFBRSx3QkFQQztJQVFWQyxNQUFNLEVBQUUsQ0FDUjtNQUNFQyxHQUFHLEVBQUU7SUFEUCxDQURRLEVBSVI7TUFDRUEsR0FBRyxFQUFFO0lBRFAsQ0FKUSxFQU9SO01BQ0VBLEdBQUcsRUFBRTtJQURQLENBUFEsQ0FSRTtJQW1CVkMsUUFBUSxFQUFFLENBQUM7TUFDVE4sSUFBSSxFQUFFO1FBQ0pDLFFBQVEsRUFBRTtNQUROLENBREc7TUFJVEUsT0FBTyxFQUFFO0lBSkEsQ0FBRCxFQUtQO01BQ0RILElBQUksRUFBRTtRQUNKQyxRQUFRLEVBQUU7TUFETixDQURMO01BSURFLE9BQU8sRUFBRTtJQUpSLENBTE8sQ0FuQkE7SUE4QlZJLE1BQU0sRUFBRSxDQUFDLEVBQUQsQ0E5QkU7SUErQlZDLFVBQVUsRUFBRSxFQS9CRjtJQWdDVkMsU0FBUyxFQUFFO0VBaENELENBQUQ7QUFEZSxDQUFyQjtBQXFDUCxJQUFNQyxTQUFTLEdBQUc7RUFDaEJYLEVBQUUsRUFBRSxDQURZO0VBRWhCQyxJQUFJLEVBQUU7SUFDSkQsRUFBRSxFQUFFLENBREE7SUFFSkUsUUFBUSxFQUFFO0VBRk4sQ0FGVTtFQU1oQkUsT0FBTyxFQUFFLFdBTk87RUFPaEJRLE1BQU0sRUFBRSxFQVBRO0VBUWhCTCxRQUFRLEVBQUU7QUFSTSxDQUFsQjtBQVdPLElBQU1NLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLElBQU1DLGdCQUFnQixHQUFHLGtCQUF6QjtBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLElBQUQ7RUFBQSxPQUFXO0lBQ2hDQyxJQUFJLEVBQUVMLGdCQUQwQjtJQUVoQ0ksSUFBSSxFQUFKQTtFQUZnQyxDQUFYO0FBQUEsQ0FBaEI7O0FBS1AsSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBa0M7RUFBQSxJQUFqQ0MsS0FBaUMsdUVBQXpCdEIsWUFBeUI7RUFBQSxJQUFYdUIsTUFBVzs7RUFDaEQsUUFBUUEsTUFBTSxDQUFDSCxJQUFmO0lBQ0UsS0FBS0wsZ0JBQUw7TUFDRSx5QkFDS08sS0FETDs7SUFHRixLQUFLTixnQkFBTDtNQUNFLHVDQUNLTSxLQURMO1FBRUVyQixTQUFTLEdBQUdZLFNBQUgsc0dBQWlCUyxLQUFLLENBQUNyQixTQUF2QixFQUZYO1FBR0VXLFNBQVMsRUFBRTtNQUhiOztJQUtGLEtBQUtLLGdCQUFMO01BQ0UsdUNBQ0tLLEtBREw7UUFFRXJCLFNBQVMsR0FBR1ksU0FBSCxzR0FBaUJTLEtBQUssQ0FBQ3JCLFNBQXZCLEVBRlg7UUFHRVcsU0FBUyxFQUFFO01BSGI7O0lBS0Y7TUFDRSxPQUFPVSxLQUFQO0VBbEJKO0FBb0JELENBckJEOztBQXVCZUQsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40ZWMzN2I1MzI0YzE5YThiMDVlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluUG9zdHM6IFt7XHJcbiAgICBpZDogMSxcclxuICAgIFVzZXI6IHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIG5pY2tuYW1lOiAnZW9tZGgnLFxyXG4gICAgICBwcm9maWxlSW1hZ2VQYXRoOiAnJyxcclxuICAgIH0sXHJcbiAgICBjb250ZW50OiAn7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uDEgI+2VtOyLnO2DnOq3uDInLFxyXG4gICAgSW1hZ2VzOiBbXHJcbiAgICB7XHJcbiAgICAgIHNyYzogJ2h0dHBzOi8vYm9va3RodW1iLXBoaW5mLnBzdGF0aWMubmV0L2NvdmVyLzEzNy85OTUvMTM3OTk1ODUuanBnP3VkYXRlPTIwMTgwNzI2JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk1OC9ybl92aWV3X0JOMDAxOTU4LmpwZycsXHJcbiAgICB9LCBcclxuICAgIHtcclxuICAgICAgc3JjOiAnaHR0cHM6Ly9naW1nLmdpbGJ1dC5jby5rci9ib29rL0JOMDAxOTk4L3JuX3ZpZXdfQk4wMDE5OTguanBnJyxcclxuICAgIH1cclxuICAgIF0sXHJcbiAgICBDb21tZW50czogW3tcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIG5pY2tuYW1lOiAneWVqaScsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6ICfssqsg67KI7Ke4IOuMk+q4gCdcclxuICAgIH0sIHtcclxuICAgICAgVXNlcjoge1xyXG4gICAgICAgIG5pY2tuYW1lOiAnZGVva2h5ZW9uJyxcclxuICAgICAgfSxcclxuICAgICAgY29udGVudDogJ+uRkCDrsojsp7gg64yT6riAJ1xyXG4gICAgfV0sXHJcbiAgICBMaWtlcnM6IFt7fV0sXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIHBvc3RBZGRlZDogZmFsc2UsXHJcbiAgfV0sXHJcbn07XHJcblxyXG5jb25zdCBkdW1teVBvc3QgPSB7XHJcbiAgaWQ6IDIsXHJcbiAgVXNlcjoge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuaWNrbmFtZTogJ2VvbWRoJyxcclxuICB9LFxyXG4gIGNvbnRlbnQ6ICfrjZTrr7jrjbDsnbTthLDsnoXri4jri6QuJyxcclxuICBpbWFnZXM6IFtdLFxyXG4gIENvbW1lbnRzOiBbXSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IChkYXRhKSA9PiAoe1xyXG4gIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgZGF0YSxcclxufSk7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxyXG4gICAgICAgIHBvc3RBZGRlZDogdHJ1ZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgcG9zdEFkZGVkOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==