webpackHotUpdate_N_E("pages/hashtag/[tag]",{

/***/ "./pages/hashtag/[tag].js":
/*!********************************!*\
  !*** ./pages/hashtag/[tag].js ***!
  \********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/user */ "./reducers/user.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Post */ "./components/Post.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_device__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/device */ "./utils/device.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\pages\\hashtag\\[tag].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










var Container = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "tag__Container",
  componentId: "sc-6hbt0c-0"
})(["width:100%;min-height:calc(100vh - 55px);background-color:#e9ecef;display:flex;justify-content:center;"]);
_c = Container;
var GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "tag__GridContainer",
  componentId: "sc-6hbt0c-1"
})(["width:45%;background-color:white;display:gird;grid-template-columns:1fr 2fr 1fr;grid-gap:20px;@media ", "{grid-template-columns:1fr 2.5fr 1fr;grid-gap:0;width:100%;}@media ", "{grid-template-columns:1fr 3fr 1fr;grid-gap:0;width:100%;}@media ", "{grid-template-columns:0fr 1fr 0fr;width:100%;display:flex;}"], _utils_device__WEBPACK_IMPORTED_MODULE_9__["default"].laptop, _utils_device__WEBPACK_IMPORTED_MODULE_9__["default"].tablet, _utils_device__WEBPACK_IMPORTED_MODULE_9__["default"].mobile);
_c2 = GridContainer;
var TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({
  displayName: "tag__TitleContainer",
  componentId: "sc-6hbt0c-2"
})(["display:flex;width:100%;height:70px;border-bottom:1px solid #e6ecf0;justify-content:flex-start;align-items:center;font-size:20px;"]);
_c3 = TitleContainer;
var Tag = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].span.withConfig({
  displayName: "tag__Tag",
  componentId: "sc-6hbt0c-3"
})(["font-size:23px;font-weight:700;margin-left:20px;margin-right:10px;"]);
_c4 = Tag;
var Amout = styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].span.withConfig({
  displayName: "tag__Amout",
  componentId: "sc-6hbt0c-4"
})([""]);
_c5 = Amout;

var HashtagPosts = function HashtagPosts() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var tag = router.query.tag;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector.mainPosts,
      hasMorePosts = _useSelector.hasMorePosts,
      loadPostsLoading = _useSelector.loadPostsLoading;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["LOAD_HASHTAG_POSTS_REQUEST"],
            lastId: mainPosts[mainPosts.length - 1] && mainPosts[mainPosts.length - 1].id,
            data: tag
          });
        }
      }
    }

    ;
    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading, mainPosts, tag]);
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, "Damso | #", tag), __jsx("meta", {
    name: "description",
    content: "#".concat(tag),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:title",
    content: "#".concat(tag),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "#".concat(tag),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "https://localhost:3000/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:url",
    content: "https://localhost:3065/hashtag/".concat(tag),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  })), __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, __jsx(GridContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx(TitleContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx(Tag, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, "#", tag), __jsx(Amout, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, mainPosts.length - 1, "\uAC1C")), mainPosts.map(function (post) {
    return __jsx(_components_Post__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 36
      }
    });
  }))));
};

_s(HashtagPosts, "XuihQYDxbCMqODN9amCxLo+UGrs=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c6 = HashtagPosts;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (HashtagPosts);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "GridContainer");
$RefreshReg$(_c3, "TitleContainer");
$RefreshReg$(_c4, "Tag");
$RefreshReg$(_c5, "Amout");
$RefreshReg$(_c6, "HashtagPosts");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGFzaHRhZy9bdGFnXS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJHcmlkQ29udGFpbmVyIiwiZGV2aWNlIiwibGFwdG9wIiwidGFibGV0IiwibW9iaWxlIiwiVGl0bGVDb250YWluZXIiLCJUYWciLCJzcGFuIiwiQW1vdXQiLCJIYXNodGFnUG9zdHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidGFnIiwicXVlcnkiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJvblNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsInR5cGUiLCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCIsImxhc3RJZCIsImxlbmd0aCIsImlkIiwiZGF0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSw4R0FBZjtLQUFNRixTO0FBUU4sSUFBTUcsYUFBYSxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLDBUQU9SRSxxREFBTSxDQUFDQyxNQVBDLEVBYVJELHFEQUFNLENBQUNFLE1BYkMsRUFtQlJGLHFEQUFNLENBQUNHLE1BbkJDLENBQW5CO01BQU1KLGE7QUEwQk4sSUFBTUssY0FBYyxHQUFHUCx5REFBTSxDQUFDQyxHQUFWO0VB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QTtFQUFBLEdBQ0UsTUFBQyxhQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLGNBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsR0FBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLFFBQVFBLEdBQVIsQ0FERixFQUVFLE1BQUMsS0FBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQVNLLFNBQVMsQ0FBQ2MsTUFBVixHQUFtQixDQUE1QixXQUZGLENBREYsRUFLR2QsU0FBUyxDQUFDbUIsR0FBVixDQUFjLFVBQUNwQixJQUFEO0lBQUEsT0FBVSxNQUFDLHdEQUFEO01BQU0sR0FBRyxFQUFFQSxJQUFJLENBQUNnQixFQUFoQjtNQUFvQixJQUFJLEVBQUVoQixJQUExQjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBQVY7RUFBQSxDQUFkLENBTEgsQ0FERixDQVhGLENBREY7QUF1QkQsQ0EvQ0Q7O0dBQU1ULFk7VUFDYUUsdUQsRUFDRkUscUQsRUFFdUNHLHVEOzs7TUFKbERQLFk7O0FBaUVTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9oYXNodGFnL1t0YWddLmUyYmY0MmVkYjAyOTZmYTExZTNmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QsIExPQURfVVNFUl9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB7IExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IFBvc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0JztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBkZXZpY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGV2aWNlJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDU1cHgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA0NSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZ2lyZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xyXG4gIGdyaWQtZ2FwOiAyMHB4O1xyXG5cclxuICBAbWVkaWEgJHtkZXZpY2UubGFwdG9wfSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyLjVmciAxZnI7XHJcbiAgICBncmlkLWdhcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7ZGV2aWNlLnRhYmxldH0ge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcclxuICAgIGdyaWQtZ2FwOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAke2RldmljZS5tb2JpbGV9IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMGZyIDFmciAwZnI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlY2YwO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuYDtcclxuXHJcbmNvbnN0IFRhZyA9IHN0eWxlZC5zcGFuYFxyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IEFtb3V0ID0gc3R5bGVkLnNwYW5gXHJcblxyXG5gO1xyXG5cclxuY29uc3QgSGFzaHRhZ1Bvc3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IHRhZyB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDApIHtcclxuICAgICAgICBpZiAoaGFzTW9yZVBvc3RzICYmICFsb2FkUG9zdHNMb2FkaW5nKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULFxyXG4gICAgICAgICAgICBsYXN0SWQ6IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0gJiYgbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXS5pZCxcclxuICAgICAgICAgICAgZGF0YTogdGFnLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmcsIG1haW5Qb3N0cywgdGFnXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICBEYW1zbyB8ICN7dGFnfVxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17YCMke3RhZ31gfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgIyR7dGFnfWB9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2AjJHt0YWd9YH0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD0naHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMC9mYXZpY29uLmljbycgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e2BodHRwczovL2xvY2FsaG9zdDozMDY1L2hhc2h0YWcvJHt0YWd9YH0gLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxHcmlkQ29udGFpbmVyPlxyXG4gICAgICAgICAgPFRpdGxlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8VGFnPiN7IHRhZyB9PC9UYWc+XHJcbiAgICAgICAgICAgIDxBbW91dD57IG1haW5Qb3N0cy5sZW5ndGggLSAxIH3qsJw8L0Ftb3V0PlxyXG4gICAgICAgICAgPC9UaXRsZUNvbnRhaW5lcj5cclxuICAgICAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiA8UG9zdCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KX1cclxuICAgICAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9BcHBMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xyXG4gIGlmIChjb250ZXh0LnJlcSAmJiBjb29raWUpIHtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gIH07XHJcblxyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBjb250ZXh0LnBhcmFtcy50YWcsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhhc2h0YWdQb3N0czsiXSwic291cmNlUm9vdCI6IiJ9