webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./pages/post/[id].js":
/*!****************************!*\
  !*** ./pages/post/[id].js ***!
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
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/PostCard */ "./components/PostCard.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\pages\\post\\[id].js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var Post = function Post() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      singlePost = _useSelector.singlePost;

  var id = router.query.id;
  return __jsx(_components_AppLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, singlePost.User.nickname, "\uB2D8\uC758 \uAE00"), __jsx("meta", {
    name: "description",
    content: singlePost.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:title",
    content: "".concat(singlePost.User.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:description",
    content: singlePost.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: singlePost.Images[0] ? singlePost.Images[0].src : 'https://localhost:3065/favicon.ico',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:url",
    content: "https://localhost:3065/post/".concat(id),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })), __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    post: singlePost,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }));
};

_s(Post, "mnFtsSWNkMUCzNZlr05ZwL2ppco=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c = Post;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC8uanMiXSwibmFtZXMiOlsiUG9zdCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0Iiwic2luZ2xlUG9zdCIsImlkIiwicXVlcnkiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0VBQUE7O0VBQ2pCLElBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0VBQ0EsbUJBQXVCQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7SUFBQSxPQUFXQSxLQUFLLENBQUNDLElBQWpCO0VBQUEsQ0FBRCxDQUFsQztFQUFBLElBQVFDLFVBQVIsZ0JBQVFBLFVBQVI7O0VBQ0EsSUFBUUMsRUFBUixHQUFlTixNQUFNLENBQUNPLEtBQXRCLENBQVFELEVBQVI7RUFFQSxPQUNFLE1BQUMsNkRBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFLE1BQUMsZ0RBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDR0QsVUFBVSxDQUFDRyxJQUFYLENBQWdCQyxRQURuQix3QkFERixFQUlFO0lBQU0sSUFBSSxFQUFDLGFBQVg7SUFBeUIsT0FBTyxFQUFFSixVQUFVLENBQUNLLE9BQTdDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFKRixFQUtFO0lBQU0sUUFBUSxFQUFDLFVBQWY7SUFBMEIsT0FBTyxZQUFLTCxVQUFVLENBQUNHLElBQVgsQ0FBZ0JDLFFBQXJCLG9DQUFqQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBTEYsRUFNRTtJQUFNLFFBQVEsRUFBQyxnQkFBZjtJQUFnQyxPQUFPLEVBQUVKLFVBQVUsQ0FBQ0ssT0FBcEQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQU5GLEVBT0U7SUFBTSxRQUFRLEVBQUMsVUFBZjtJQUEwQixPQUFPLEVBQUVMLFVBQVUsQ0FBQ00sTUFBWCxDQUFrQixDQUFsQixJQUF1Qk4sVUFBVSxDQUFDTSxNQUFYLENBQWtCLENBQWxCLEVBQXFCQyxHQUE1QyxHQUFrRCxvQ0FBckY7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQVBGLEVBUUU7SUFBTSxRQUFRLEVBQUMsUUFBZjtJQUF3QixPQUFPLHdDQUFpQ04sRUFBakMsQ0FBL0I7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQVJGLENBREYsRUFXRSxNQUFDLDREQUFEO0lBQVUsSUFBSSxFQUFHRCxVQUFqQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBWEYsQ0FERjtBQWVELENBcEJEOztHQUFNTixJO1VBQ1dFLHFELEVBQ1FDLHVEOzs7S0FGbkJILEk7O0FBeUNTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tpZF0uZDFjMWI4MjcyY2NlODQzZjFlMjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExPQURfTVlfSU5GT19SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB7IExPQURfUE9TVF9SRVFVRVNUIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCB7IEVORCB9IGZyb20gJ3JlZHV4LXNhZ2EnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgQXBwTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXBwTGF5b3V0JztcclxuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUG9zdENhcmQnO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi8uLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcblxyXG5jb25zdCBQb3N0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgc2luZ2xlUG9zdCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwTGF5b3V0PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+XHJcbiAgICAgICAgICB7c2luZ2xlUG9zdC5Vc2VyLm5pY2tuYW1lfeuLmOydmCDquIBcclxuICAgICAgICA8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3NpbmdsZVBvc3QuY29udGVudH0gLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17YCR7c2luZ2xlUG9zdC5Vc2VyLm5pY2tuYW1lfeuLmOydmCDqsozsi5zquIBgfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtzaW5nbGVQb3N0LmNvbnRlbnR9IC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e3NpbmdsZVBvc3QuSW1hZ2VzWzBdID8gc2luZ2xlUG9zdC5JbWFnZXNbMF0uc3JjIDogJ2h0dHBzOi8vbG9jYWxob3N0OjMwNjUvZmF2aWNvbi5pY28nfSAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17YGh0dHBzOi8vbG9jYWxob3N0OjMwNjUvcG9zdC8ke2lkfWB9IC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFBvc3RDYXJkIHBvc3Q9eyBzaW5nbGVQb3N0IH0gLz5cclxuICAgIDwvQXBwTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbiAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJztcclxuICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9IGNvb2tpZTtcclxuICB9O1xyXG5cclxuICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIHR5cGU6IExPQURfTVlfSU5GT19SRVFVRVNULFxyXG4gIH0pO1xyXG4gIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgdHlwZTogTE9BRF9QT1NUX1JFUVVFU1QsXHJcbiAgICBkYXRhOiBjb250ZXh0LnBhcmFtcy5pZCxcclxuICB9KTtcclxuXHJcbiAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDsiXSwic291cmNlUm9vdCI6IiJ9