webpackHotUpdate_N_E("pages/signup",{

/***/ "./utils/device.js":
/*!*************************!*\
  !*** ./utils/device.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var size = {
  mobile: "350px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px"
};
var device = {
  mobile: "(max-width: ".concat(size.mobile, ")"),
  mobileL: "(max-width: ".concat(size.mobileL, ")"),
  tablet: "(max-width: ".concat(size.tablet, ")"),
  laptop: "(max-width: ".concat(size.laptop, ")")
};
/* harmony default export */ __webpack_exports__["default"] = (device);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZGV2aWNlLmpzIl0sIm5hbWVzIjpbInNpemUiLCJtb2JpbGUiLCJtb2JpbGVMIiwidGFibGV0IiwibGFwdG9wIiwiZGV2aWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQSxrREFBTUEsSUFBSSxHQUFHO0VBQ1hDLE1BQU0sRUFBRSxPQURHO0VBRVhDLE9BQU8sRUFBRSxPQUZFO0VBR1hDLE1BQU0sRUFBRSxPQUhHO0VBSVhDLE1BQU0sRUFBRTtBQUpHLENBQWI7QUFPQSxJQUFNQyxNQUFNLEdBQUc7RUFDYkosTUFBTSx3QkFBaUJELElBQUksQ0FBQ0MsTUFBdEIsTUFETztFQUViQyxPQUFPLHdCQUFpQkYsSUFBSSxDQUFDRSxPQUF0QixNQUZNO0VBR2JDLE1BQU0sd0JBQWlCSCxJQUFJLENBQUNHLE1BQXRCLE1BSE87RUFJYkMsTUFBTSx3QkFBaUJKLElBQUksQ0FBQ0ksTUFBdEI7QUFKTyxDQUFmO0FBT2VDLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC4xMDA3MjNkOTE2MjI1MWRkMjY1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc2l6ZSA9IHtcclxuICBtb2JpbGU6IFwiMzUwcHhcIixcclxuICBtb2JpbGVMOiBcIjQyNXB4XCIsXHJcbiAgdGFibGV0OiBcIjc2OHB4XCIsXHJcbiAgbGFwdG9wOiBcIjEwMjRweFwiLFxyXG59O1xyXG5cclxuY29uc3QgZGV2aWNlID0ge1xyXG4gIG1vYmlsZTogYChtYXgtd2lkdGg6ICR7c2l6ZS5tb2JpbGV9KWAsXHJcbiAgbW9iaWxlTDogYChtYXgtd2lkdGg6ICR7c2l6ZS5tb2JpbGVMfSlgLFxyXG4gIHRhYmxldDogYChtYXgtd2lkdGg6ICR7c2l6ZS50YWJsZXR9KWAsXHJcbiAgbGFwdG9wOiBgKG1heC13aWR0aDogJHtzaXplLmxhcHRvcH0pYCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRldmljZTsiXSwic291cmNlUm9vdCI6IiJ9