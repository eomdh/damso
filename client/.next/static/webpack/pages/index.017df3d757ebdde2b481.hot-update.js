webpackHotUpdate_N_E("pages/index",{

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
  tablet: "821px",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZGV2aWNlLmpzIl0sIm5hbWVzIjpbInNpemUiLCJtb2JpbGUiLCJtb2JpbGVMIiwidGFibGV0IiwibGFwdG9wIiwiZGV2aWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQSxrREFBTUEsSUFBSSxHQUFHO0VBQ1hDLE1BQU0sRUFBRSxPQURHO0VBRVhDLE9BQU8sRUFBRSxPQUZFO0VBR1hDLE1BQU0sRUFBRSxPQUhHO0VBSVhDLE1BQU0sRUFBRTtBQUpHLENBQWI7QUFPQSxJQUFNQyxNQUFNLEdBQUc7RUFDYkosTUFBTSx3QkFBaUJELElBQUksQ0FBQ0MsTUFBdEIsTUFETztFQUViQyxPQUFPLHdCQUFpQkYsSUFBSSxDQUFDRSxPQUF0QixNQUZNO0VBR2JDLE1BQU0sd0JBQWlCSCxJQUFJLENBQUNHLE1BQXRCLE1BSE87RUFJYkMsTUFBTSx3QkFBaUJKLElBQUksQ0FBQ0ksTUFBdEI7QUFKTyxDQUFmO0FBT2VDLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAxN2RmM2Q3NTdlYmRkZTJiNDgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzaXplID0ge1xyXG4gIG1vYmlsZTogXCIzNTBweFwiLFxyXG4gIG1vYmlsZUw6IFwiNDI1cHhcIixcclxuICB0YWJsZXQ6IFwiODIxcHhcIixcclxuICBsYXB0b3A6IFwiMTAyNHB4XCIsXHJcbn07XHJcblxyXG5jb25zdCBkZXZpY2UgPSB7XHJcbiAgbW9iaWxlOiBgKG1heC13aWR0aDogJHtzaXplLm1vYmlsZX0pYCxcclxuICBtb2JpbGVMOiBgKG1heC13aWR0aDogJHtzaXplLm1vYmlsZUx9KWAsXHJcbiAgdGFibGV0OiBgKG1heC13aWR0aDogJHtzaXplLnRhYmxldH0pYCxcclxuICBsYXB0b3A6IGAobWF4LXdpZHRoOiAke3NpemUubGFwdG9wfSlgLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGV2aWNlOyJdLCJzb3VyY2VSb290IjoiIn0=