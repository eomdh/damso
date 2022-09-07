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
  }, mainPosts.lengt - 1)), mainPosts.map(function (post) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGFzaHRhZy9bdGFnXS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJHcmlkQ29udGFpbmVyIiwiZGV2aWNlIiwibGFwdG9wIiwidGFibGV0IiwibW9iaWxlIiwiVGl0bGVDb250YWluZXIiLCJUYWciLCJzcGFuIiwiQW1vdXQiLCJIYXNodGFnUG9zdHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidGFnIiwicXVlcnkiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJvblNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsInR5cGUiLCJMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCIsImxhc3RJZCIsImxlbmd0aCIsImlkIiwiZGF0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGVuZ3QiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLDhHQUFmO0tBQU1GLFM7QUFRTixJQUFNRyxhQUFhLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsMFRBT1JFLHFEQUFNLENBQUNDLE1BUEMsRUFhUkQscURBQU0sQ0FBQ0UsTUFiQyxFQW1CUkYscURBQU0sQ0FBQ0csTUFuQkMsQ0FBbkI7TUFBTUosYTtBQTBCTixJQUFNSyxjQUFjLEdBQUdQLHlEQUFNLENBQUND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TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLGFBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsY0FBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxHQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsUUFBUUEsR0FBUixDQURGLEVBRUUsTUFBQyxLQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBU0ssU0FBUyxDQUFDbUIsS0FBVixHQUFrQixDQUEzQixDQUZGLENBREYsRUFLR25CLFNBQVMsQ0FBQ29CLEdBQVYsQ0FBYyxVQUFDckIsSUFBRDtJQUFBLE9BQVUsTUFBQyx3REFBRDtNQUFNLEdBQUcsRUFBRUEsSUFBSSxDQUFDZ0IsRUFBaEI7TUFBb0IsSUFBSSxFQUFFaEIsSUFBMUI7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFWO0VBQUEsQ0FBZCxDQUxILENBREYsQ0FYRixDQURGO0FBdUJELENBL0NEOztHQUFNVCxZO1VBQ2FFLHVELEVBQ0ZFLHFELEVBRXVDRyx1RDs7O01BSmxEUCxZOztBQWlFU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaGFzaHRhZy9bdGFnXS5kMzFmYTczM2VhOWNjYzJlOGE5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNULCBMT0FEX1VTRVJfUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgeyBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCB9IGZyb20gJy4uLy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FwcExheW91dCc7XHJcbmltcG9ydCBQb3N0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdCc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uLy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgZGV2aWNlIGZyb20gJy4uLy4uL3V0aWxzL2RldmljZSc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1NXB4KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmA7XHJcblxyXG5jb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGdpcmQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcclxuICBncmlkLWdhcDogMjBweDtcclxuXHJcbiAgQG1lZGlhICR7ZGV2aWNlLmxhcHRvcH0ge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMi41ZnIgMWZyO1xyXG4gICAgZ3JpZC1nYXA6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke2RldmljZS50YWJsZXR9IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAxZnI7XHJcbiAgICBncmlkLWdhcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgJHtkZXZpY2UubW9iaWxlfSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDBmciAxZnIgMGZyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFRpdGxlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U2ZWNmMDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBUYWcgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBBbW91dCA9IHN0eWxlZC5zcGFuYFxyXG5cclxuYDtcclxuXHJcbmNvbnN0IEhhc2h0YWdQb3N0cyA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyB0YWcgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7IG1haW5Qb3N0cywgaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XHJcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gMzAwKSB7XHJcbiAgICAgICAgaWYgKGhhc01vcmVQb3N0cyAmJiAhbG9hZFBvc3RzTG9hZGluZykge1xyXG4gICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCxcclxuICAgICAgICAgICAgbGFzdElkOiBtYWluUG9zdHNbbWFpblBvc3RzLmxlbmd0aCAtIDFdICYmIG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0uaWQsXHJcbiAgICAgICAgICAgIGRhdGE6IHRhZyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbaGFzTW9yZVBvc3RzLCBsb2FkUG9zdHNMb2FkaW5nLCBtYWluUG9zdHMsIHRhZ10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcExheW91dD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlxyXG4gICAgICAgICAgRGFtc28gfCAje3RhZ31cclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2AjJHt0YWd9YH0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17YCMke3RhZ31gfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtgIyR7dGFnfWB9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9J2h0dHBzOi8vbG9jYWxob3N0OjMwMDAvZmF2aWNvbi5pY28nIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgaHR0cHM6Ly9sb2NhbGhvc3Q6MzA2NS9oYXNodGFnLyR7dGFnfWB9IC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8R3JpZENvbnRhaW5lcj5cclxuICAgICAgICAgIDxUaXRsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFRhZz4jeyB0YWcgfTwvVGFnPlxyXG4gICAgICAgICAgICA8QW1vdXQ+eyBtYWluUG9zdHMubGVuZ3QgLSAxIH08L0Ftb3V0PlxyXG4gICAgICAgICAgPC9UaXRsZUNvbnRhaW5lcj5cclxuICAgICAgICAgIHttYWluUG9zdHMubWFwKChwb3N0KSA9PiA8UG9zdCBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+KX1cclxuICAgICAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9BcHBMYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xyXG4gIGlmIChjb250ZXh0LnJlcSAmJiBjb29raWUpIHtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gIH07XHJcblxyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBjb250ZXh0LnBhcmFtcy50YWcsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhhc2h0YWdQb3N0czsiXSwic291cmNlUm9vdCI6IiJ9