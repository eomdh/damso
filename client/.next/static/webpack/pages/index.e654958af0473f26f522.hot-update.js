webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\PostImages.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostImages__Container",
  componentId: "sc-85cvqn-0"
})(["margin-top:5px;width:100px;"]);
_c = Container;
var StyledSlider = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "PostImages__StyledSlider",
  componentId: "sc-85cvqn-1"
})([".slick-slide{display:inline-block;}"]);
_c2 = StyledSlider;
var Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "PostImages__Image",
  componentId: "sc-85cvqn-2"
})(["max-width:400px;width:100%;height:500px;border-radius:5px;"]);
_c3 = Image;

var PostImages = function PostImages(_ref) {
  var images = _ref.images;
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };

  if (images.length === 1) {
    return __jsx(Container, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, __jsx(Image, {
      src: images[0].src,
      alt: "image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }));
  }

  ;

  if (images.length > 1) {
    return __jsx(Container, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }
    }, __jsx(StyledSlider, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }), images.map(function (image) {
      return __jsx("div", {
        key: image.src,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }
      }, __jsx(Image, {
        src: image.src,
        alt: "image",
        key: image.src,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 15
        }
      }));
    })));
  }

  ;
};

_c4 = PostImages;
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "StyledSlider");
$RefreshReg$(_c3, "Image");
$RefreshReg$(_c4, "PostImages");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlN0eWxlZFNsaWRlciIsIlNsaWRlciIsIkltYWdlIiwiaW1nIiwiUG9zdEltYWdlcyIsImltYWdlcyIsInNldHRpbmdzIiwiYXJyb3dzIiwiZG90cyIsImluZmluaXRlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJ2YXJpYWJsZVdpZHRoIiwibGVuZ3RoIiwic3JjIiwibWFwIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsbUNBQWY7S0FBTUYsUztBQUtOLElBQU1HLFlBQVksR0FBR0YsaUVBQU0sQ0FBQ0csa0RBQUQsQ0FBVDtFQUFBO0VBQUE7QUFBQSwyQ0FBbEI7TUFBTUQsWTtBQU1OLElBQU1FLEtBQUssR0FBR0oseURBQU0sQ0FBQ0ssR0FBVjtFQUFBO0VBQUE7QUFBQSxrRUFBWDtNQUFNRCxLOztBQU9OLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQWdCO0VBQUEsSUFBYkMsTUFBYSxRQUFiQSxNQUFhO0VBQ2pDLElBQU1DLFFBQVEsR0FBRztJQUNmQyxNQUFNLEVBQUUsS0FETztJQUVmQyxJQUFJLEVBQUUsSUFGUztJQUdmQyxRQUFRLEVBQUUsSUFISztJQUlmQyxZQUFZLEVBQUUsQ0FKQztJQUtmQyxjQUFjLEVBQUUsQ0FMRDtJQU1mQyxhQUFhLEVBQUU7RUFOQSxDQUFqQjs7RUFTQSxJQUFJUCxNQUFNLENBQUNRLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7SUFDdkIsT0FDRSxNQUFDLFNBQUQ7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUNFLE1BQUMsS0FBRDtNQUFPLEdBQUcsRUFBRVIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVUyxHQUF0QjtNQUEyQixHQUFHLEVBQUMsT0FBL0I7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQURGLENBREY7RUFLRDs7RUFBQTs7RUFFRCxJQUFJVCxNQUFNLENBQUNRLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7SUFDckIsT0FDRSxNQUFDLFNBQUQ7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUNFLE1BQUMsWUFBRCx5RkFBa0JQLFFBQWxCO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsSUFDR0QsTUFBTSxDQUFDVSxHQUFQLENBQVcsVUFBQUMsS0FBSztNQUFBLE9BQ2Y7UUFBSyxHQUFHLEVBQUVBLEtBQUssQ0FBQ0YsR0FBaEI7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNFLE1BQUMsS0FBRDtRQUFPLEdBQUcsRUFBRUUsS0FBSyxDQUFDRixHQUFsQjtRQUF1QixHQUFHLEVBQUMsT0FBM0I7UUFBbUMsR0FBRyxFQUFFRSxLQUFLLENBQUNGLEdBQTlDO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFERixDQURlO0lBQUEsQ0FBaEIsQ0FESCxDQURGLENBREY7RUFXRDs7RUFBQTtBQUNGLENBL0JEOztNQUFNVixVO0FBaUNTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNjU0OTU4YWYwNDczZjI2ZjUyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyc7XHJcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwvc2xpY2svc2xpY2stdGhlbWUuY3NzJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZFNsaWRlciA9IHN0eWxlZChTbGlkZXIpYFxyXG4gIC5zbGljay1zbGlkZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0SW1hZ2VzID0gKHsgaW1hZ2VzIH0pID0+IHtcclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIHZhcmlhYmxlV2lkdGg6IHRydWUsXHJcbiAgfVxyXG5cclxuICBpZiAoaW1hZ2VzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZXNbMF0uc3JjfSBhbHQ9XCJpbWFnZVwiIC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBpZiAoaW1hZ2VzLmxlbmd0aCA+IDEpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFN0eWxlZFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAge2ltYWdlcy5tYXAoaW1hZ2UgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW1hZ2Uuc3JjfT5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZS5zcmN9IGFsdD1cImltYWdlXCIga2V5PXtpbWFnZS5zcmN9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TdHlsZWRTbGlkZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEltYWdlczsiXSwic291cmNlUm9vdCI6IiJ9