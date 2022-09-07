webpackHotUpdate_N_E("pages/user/[id]",{

/***/ "./pages/user/[id].js":
/*!****************************!*\
  !*** ./pages/user/[id].js ***!
  \****************************/
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
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers/post */ "./reducers/post.js");
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Post */ "./components/Post.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_device__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/device */ "./utils/device.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\pages\\user\\[id].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Container = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "id__Container",
  componentId: "sc-1gtm02b-0"
})(["width:100%;min-height:calc(100vh - 55px);background-color:#e9ecef;display:flex;justify-content:center;"]);
_c = Container;
var GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "id__GridContainer",
  componentId: "sc-1gtm02b-1"
})(["width:45%;background-color:white;display:gird;grid-template-columns:1fr 2fr 1fr;grid-gap:20px;@media ", "{grid-template-columns:1fr 2.5fr 1fr;grid-gap:0;width:100%;}@media ", "{grid-template-columns:1fr 3fr 1fr;grid-gap:0;width:100%;}@media ", "{grid-template-columns:0fr 1fr 0fr;width:100%;display:flex;}"], _utils_device__WEBPACK_IMPORTED_MODULE_8__["default"].laptop, _utils_device__WEBPACK_IMPORTED_MODULE_8__["default"].tablet, _utils_device__WEBPACK_IMPORTED_MODULE_8__["default"].mobile);
_c2 = GridContainer;
var TitleContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div.withConfig({
  displayName: "id__TitleContainer",
  componentId: "sc-1gtm02b-2"
})(["display:flex;width:100%;height:70px;border-bottom:1px solid #e6ecf0;justify-content:space-between;align-items:center;font-size:18px;"]);
_c3 = TitleContainer;
var Nickname = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].span.withConfig({
  displayName: "id__Nickname",
  componentId: "sc-1gtm02b-3"
})(["font-size:23px;font-weight:700;margin-left:20px;"]);
_c4 = Nickname;
var Amount = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].span.withConfig({
  displayName: "id__Amount",
  componentId: "sc-1gtm02b-4"
})(["font-size:17px;color:#657785;padding-top:8px;margin-right:20px;"]);
_c5 = Amount;

var UserPosts = function UserPosts() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      userInfo = _useSelector.userInfo;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      hasMorePosts = _useSelector2.hasMorePosts,
      loadPostsLoading = _useSelector2.loadPostsLoading;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePosts && !loadPostsLoading) {
          dispatch({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["LOAD_USER_POSTS_REQUEST"],
            lastId: mainPosts[mainPosts.length - 1] && mainPosts[mainPosts.length - 1].id,
            data: id
          });
        }
      }
    }

    ;
    window.addEventListener('scroll', onScroll);
    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, loadPostsLoading, mainPosts, id]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, userInfo ? __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, "Damso | ", userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00"), __jsx("meta", {
    name: "description",
    content: "".concat(userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:title",
    content: "".concat(userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "".concat(userInfo.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "https://localhost:3000/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }), __jsx("meta", {
    property: "og:url",
    content: "https://localhost:3065/user/".concat(id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  })), __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx(GridContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx(TitleContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }, __jsx(Nickname, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, userInfo.nickname), "\uB2D8\uC758 \uAC8C\uC2DC\uAE00"), __jsx(Amount, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, mainPosts.length, "\uAC1C")), mainPosts.map(function (post) {
    return __jsx(_components_Post__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: post.id,
      post: post,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 38
      }
    });
  })))) : null);
};

_s(UserPosts, "vuPCMAHcy42H79KMujS6N4dS5GI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c6 = UserPosts;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (UserPosts);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "GridContainer");
$RefreshReg$(_c3, "TitleContainer");
$RefreshReg$(_c4, "Nickname");
$RefreshReg$(_c5, "Amount");
$RefreshReg$(_c6, "UserPosts");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci8uanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiR3JpZENvbnRhaW5lciIsImRldmljZSIsImxhcHRvcCIsInRhYmxldCIsIm1vYmlsZSIsIlRpdGxlQ29udGFpbmVyIiwiTmlja25hbWUiLCJzcGFuIiwiQW1vdW50IiwiVXNlclBvc3RzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsImlkIiwicXVlcnkiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInVzZXJJbmZvIiwicG9zdCIsIm1haW5Qb3N0cyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJ1c2VFZmZlY3QiLCJvblNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsInNjcm9sbEhlaWdodCIsInR5cGUiLCJMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCIsImxhc3RJZCIsImxlbmd0aCIsImRhdGEiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm5pY2tuYW1lIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSw4R0FBZjtLQUFNRixTO0FBUU4sSUFBTUcsYUFBYSxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLDBUQU9SRSxxREFBTSxDQUFDQyxNQVBDLEVBYVJELHFEQUFNLENBQUNFLE1BYkMsRUFtQlJGLHFEQUFNLENBQUNHLE1BbkJDLENBQW5CO01BQU1KLGE7QUEwQk4sSUFBTUssY0FBYyxHQUFHUCx5REFBTSxDQUFD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b0NBQWxDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFQRixFQVFFO0lBQU0sUUFBUSxFQUFDLFFBQWY7SUFBd0IsT0FBTyx3Q0FBaUN6QixFQUFqQyxDQUEvQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBUkYsQ0FEQSxFQVdBLE1BQUMsU0FBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxhQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLGNBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLFFBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFZSyxRQUFRLENBQUNvQixRQUFyQixDQURGLG9DQURGLEVBSUUsTUFBQyxNQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBVWxCLFNBQVMsQ0FBQ2MsTUFBcEIsV0FKRixDQURGLEVBT0dkLFNBQVMsQ0FBQ21CLEdBQVYsQ0FBYyxVQUFDcEIsSUFBRDtJQUFBLE9BQVUsTUFBQyx3REFBRDtNQUFNLEdBQUcsRUFBRUEsSUFBSSxDQUFDTixFQUFoQjtNQUFvQixJQUFJLEVBQUVNLElBQTFCO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFBVjtFQUFBLENBQWQsQ0FQSCxDQURGLENBWEEsQ0FETyxHQXdCTCxJQXpCTixDQURGO0FBNkJELENBdEREOztHQUFNWCxTO1VBQ2FFLHVELEVBQ0ZFLHFELEVBRU1HLHVELEVBQ2lDQSx1RDs7O01BTGxEUCxTOztBQStFU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9baWRdLjM5ZGVjZGMyZDJmNzM5ZGJlMjg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTE9BRF9NWV9JTkZPX1JFUVVFU1QsIExPQURfVVNFUl9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB7IExPQURfVVNFUl9QT1NUU19SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IFBvc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qb3N0JztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBkZXZpY2UgZnJvbSAnLi4vLi4vdXRpbHMvZGV2aWNlJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDU1cHgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYDtcclxuXHJcbmNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA0NSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgZGlzcGxheTogZ2lyZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xyXG4gIGdyaWQtZ2FwOiAyMHB4O1xyXG5cclxuICBAbWVkaWEgJHtkZXZpY2UubGFwdG9wfSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyLjVmciAxZnI7XHJcbiAgICBncmlkLWdhcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7ZGV2aWNlLnRhYmxldH0ge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyIDFmcjtcclxuICAgIGdyaWQtZ2FwOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAke2RldmljZS5tb2JpbGV9IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMGZyIDFmciAwZnI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgVGl0bGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlY2YwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuYDtcclxuXHJcbmNvbnN0IE5pY2tuYW1lID0gc3R5bGVkLnNwYW5gXHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBBbW91bnQgPSBzdHlsZWQuc3BhbmBcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgY29sb3I6ICM2NTc3ODU7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBVc2VyUG9zdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCB7IHVzZXJJbmZvIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgbWFpblBvc3RzLCBoYXNNb3JlUG9zdHMsIGxvYWRQb3N0c0xvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbCgpIHtcclxuICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQgLSAzMDApIHtcclxuICAgICAgICBpZiAoaGFzTW9yZVBvc3RzICYmICFsb2FkUG9zdHNMb2FkaW5nKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19SRVFVRVNULFxyXG4gICAgICAgICAgICBsYXN0SWQ6IG1haW5Qb3N0c1ttYWluUG9zdHMubGVuZ3RoIC0gMV0gJiYgbWFpblBvc3RzW21haW5Qb3N0cy5sZW5ndGggLSAxXS5pZCxcclxuICAgICAgICAgICAgZGF0YTogaWQsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSwgW2hhc01vcmVQb3N0cywgbG9hZFBvc3RzTG9hZGluZywgbWFpblBvc3RzLGlkXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7dXNlckluZm8gPyAoXHJcbiAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgICAgRGFtc28gfCB7dXNlckluZm8ubmlja25hbWV964uY7J2YIOqyjOyLnOq4gFxyXG4gICAgICAgICAgPC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Ake3VzZXJJbmZvLm5pY2tuYW1lfeuLmOydmCDqsozsi5zquIBgfSAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2Ake3VzZXJJbmZvLm5pY2tuYW1lfeuLmOydmCDqsozsi5zquIBgfSAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Ake3VzZXJJbmZvLm5pY2tuYW1lfeuLmOydmCDqsozsi5zquIBgfSAvPlxyXG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9J2h0dHBzOi8vbG9jYWxob3N0OjMwMDAvZmF2aWNvbi5pY28nIC8+XHJcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e2BodHRwczovL2xvY2FsaG9zdDozMDY1L3VzZXIvJHtpZH1gfSAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEdyaWRDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxUaXRsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPE5pY2tuYW1lPnsgdXNlckluZm8ubmlja25hbWUgfTwvTmlja25hbWU+64uY7J2YIOqyjOyLnOq4gFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxBbW91bnQ+eyBtYWluUG9zdHMubGVuZ3RoIH3qsJw8L0Ftb3VudD5cclxuICAgICAgICAgICAgPC9UaXRsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAge21haW5Qb3N0cy5tYXAoKHBvc3QpID0+IDxQb3N0IGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz4pfVxyXG4gICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0FwcExheW91dD5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgfTtcclxuXHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICB9KTtcclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgZGF0YTogY29udGV4dC5wYXJhbXMuaWQsXHJcbiAgfSk7XHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICB0eXBlOiBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCxcclxuICAgIGRhdGE6IGNvbnRleHQucGFyYW1zLmlkLFxyXG4gIH0pO1xyXG5cclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgYXdhaXQgY29udGV4dC5zdG9yZS5zYWdhVGFzay50b1Byb21pc2UoKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyUG9zdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==