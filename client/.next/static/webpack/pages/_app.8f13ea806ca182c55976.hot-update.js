webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
      nickname: 'eomdh'
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
var ADD_POST = 'ADD_POST';
var addPost = {
  type: ADD_POST
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsIlVzZXIiLCJuaWNrbmFtZSIsImNvbnRlbnQiLCJJbWFnZXMiLCJzcmMiLCJDb21tZW50cyIsIkxpa2VycyIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJkdW1teVBvc3QiLCJpbWFnZXMiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsWUFBWSxHQUFHO0VBQzFCQyxTQUFTLEVBQUUsQ0FBQztJQUNWQyxFQUFFLEVBQUUsQ0FETTtJQUVWQyxJQUFJLEVBQUU7TUFDSkQsRUFBRSxFQUFFLENBREE7TUFFSkUsUUFBUSxFQUFFO0lBRk4sQ0FGSTtJQU1WQyxPQUFPLEVBQUUsd0JBTkM7SUFPVkMsTUFBTSxFQUFFLENBQ1I7TUFDRUMsR0FBRyxFQUFFO0lBRFAsQ0FEUSxFQUlSO01BQ0VBLEdBQUcsRUFBRTtJQURQLENBSlEsRUFPUjtNQUNFQSxHQUFHLEVBQUU7SUFEUCxDQVBRLENBUEU7SUFrQlZDLFFBQVEsRUFBRSxDQUFDO01BQ1RMLElBQUksRUFBRTtRQUNKQyxRQUFRLEVBQUU7TUFETixDQURHO01BSVRDLE9BQU8sRUFBRTtJQUpBLENBQUQsRUFLUDtNQUNERixJQUFJLEVBQUU7UUFDSkMsUUFBUSxFQUFFO01BRE4sQ0FETDtNQUlEQyxPQUFPLEVBQUU7SUFKUixDQUxPLENBbEJBO0lBNkJWSSxNQUFNLEVBQUUsQ0FBQyxFQUFELENBN0JFO0lBOEJWQyxVQUFVLEVBQUUsRUE5QkY7SUErQlZDLFNBQVMsRUFBRTtFQS9CRCxDQUFEO0FBRGUsQ0FBckI7QUFvQ1AsSUFBTUMsU0FBUyxHQUFHO0VBQ2hCVixFQUFFLEVBQUUsQ0FEWTtFQUVoQkMsSUFBSSxFQUFFO0lBQ0pELEVBQUUsRUFBRSxDQURBO0lBRUpFLFFBQVEsRUFBRTtFQUZOLENBRlU7RUFNaEJDLE9BQU8sRUFBRSxXQU5PO0VBT2hCUSxNQUFNLEVBQUUsRUFQUTtFQVFoQkwsUUFBUSxFQUFFO0FBUk0sQ0FBbEI7QUFXQSxJQUFNTSxRQUFRLEdBQUcsVUFBakI7QUFDTyxJQUFNQyxPQUFPLEdBQUc7RUFDckJDLElBQUksRUFBRUY7QUFEZSxDQUFoQjs7QUFJUCxJQUFNRyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztFQUFBLElBQWpDQyxLQUFpQyx1RUFBekJsQixZQUF5QjtFQUFBLElBQVhtQixNQUFXOztFQUNoRCxRQUFRQSxNQUFNLENBQUNILElBQWY7SUFDRSxLQUFLRixRQUFMO01BQ0UsdUNBQ0tJLEtBREw7UUFFRWpCLFNBQVMsR0FBR1csU0FBSCxzR0FBaUJNLEtBQUssQ0FBQ2pCLFNBQXZCLEVBRlg7UUFHRVUsU0FBUyxFQUFFO01BSGI7O0lBS0Y7TUFDRSxPQUFPTyxLQUFQO0VBUko7QUFVRCxDQVhEOztBQWFlRCxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjhmMTNlYTgwNmNhMTgyYzU1OTc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW3tcclxuICAgIGlkOiAxLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmlja25hbWU6ICdlb21kaCcsXHJcbiAgICB9LFxyXG4gICAgY29udGVudDogJ+yyqyDrsojsp7gg6rKM7Iuc6riAICPtlbTsi5ztg5zqt7gxICPtlbTsi5ztg5zqt7gyJyxcclxuICAgIEltYWdlczogW1xyXG4gICAge1xyXG4gICAgICBzcmM6ICdodHRwczovL2Jvb2t0aHVtYi1waGluZi5wc3RhdGljLm5ldC9jb3Zlci8xMzcvOTk1LzEzNzk5NTg1LmpwZz91ZGF0ZT0yMDE4MDcyNicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6ICdodHRwczovL2dpbWcuZ2lsYnV0LmNvLmtyL2Jvb2svQk4wMDE5NTgvcm5fdmlld19CTjAwMTk1OC5qcGcnLFxyXG4gICAgfSwgXHJcbiAgICB7XHJcbiAgICAgIHNyYzogJ2h0dHBzOi8vZ2ltZy5naWxidXQuY28ua3IvYm9vay9CTjAwMTk5OC9ybl92aWV3X0JOMDAxOTk4LmpwZycsXHJcbiAgICB9XHJcbiAgICBdLFxyXG4gICAgQ29tbWVudHM6IFt7XHJcbiAgICAgIFVzZXI6IHtcclxuICAgICAgICBuaWNrbmFtZTogJ3llamknLFxyXG4gICAgICB9LFxyXG4gICAgICBjb250ZW50OiAn7LKrIOuyiOynuCDrjJPquIAnXHJcbiAgICB9LCB7XHJcbiAgICAgIFVzZXI6IHtcclxuICAgICAgICBuaWNrbmFtZTogJ2Rlb2toeWVvbicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRlbnQ6ICfrkZAg67KI7Ke4IOuMk+q4gCdcclxuICAgIH1dLFxyXG4gICAgTGlrZXJzOiBbe31dLFxyXG4gICAgaW1hZ2VQYXRoczogW10sXHJcbiAgICBwb3N0QWRkZWQ6IGZhbHNlLFxyXG4gIH1dLFxyXG59O1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0ge1xyXG4gIGlkOiAyLFxyXG4gIFVzZXI6IHtcclxuICAgIGlkOiAxLFxyXG4gICAgbmlja25hbWU6ICdlb21kaCcsXHJcbiAgfSxcclxuICBjb250ZW50OiAn642U66+4642w7J207YSw7J6F64uI64ukLicsXHJcbiAgaW1hZ2VzOiBbXSxcclxuICBDb21tZW50czogW10sXHJcbn07XHJcblxyXG5jb25zdCBBRERfUE9TVCA9ICdBRERfUE9TVCc7XHJcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xyXG4gIHR5cGU6IEFERF9QT1NULFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBRERfUE9TVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXHJcbiAgICAgICAgcG9zdEFkZGVkOiB0cnVlLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==