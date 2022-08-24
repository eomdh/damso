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
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _utils_device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/device */ "./utils/device.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_7__);



var _templateObject,
    _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\PostImages.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  .slick-slide {\n    display: inline-block;\n  }\n"])));
_c = Global;
var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PostImages__Container",
  componentId: "sc-85cvqn-0"
})(["margin:15px 15px 15px 0px;width:90%;overflow:hidden;"]);
_c2 = Container;
var StyledSlider = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_slick__WEBPACK_IMPORTED_MODULE_5___default.a).withConfig({
  displayName: "PostImages__StyledSlider",
  componentId: "sc-85cvqn-1"
})([".slick-slide div{outline:none;}"]);
_c3 = StyledSlider;
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "PostImages__ImageContainer",
  componentId: "sc-85cvqn-2"
})(["@media ", "{margin-left:0px;}"], _utils_device__WEBPACK_IMPORTED_MODULE_4__["default"].mobile);
_c4 = ImageContainer;
var Image = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].img.withConfig({
  displayName: "PostImages__Image",
  componentId: "sc-85cvqn-3"
})(["max-width:400px;width:100%;height:500px;border-radius:5px;"]);
_c5 = Image;

var PostImages = function PostImages(_ref) {
  var images = _ref.images;
  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  if (images.length === 1) {
    return __jsx(Container, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 7
      }
    }, __jsx(Image, {
      src: images[0].src,
      alt: "image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
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
        lineNumber: 59,
        columnNumber: 7
      }
    }, __jsx(Global, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }
    }), __jsx(StyledSlider, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }
    }), images.map(function (image) {
      return __jsx("div", {
        key: image.src,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }
      }, __jsx(ImageContainer, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 15
        }
      }, __jsx(Image, {
        src: image.src,
        alt: "image",
        key: image.src,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }
      })));
    })));
  }

  ;
};

_c6 = PostImages;
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Global");
$RefreshReg$(_c2, "Container");
$RefreshReg$(_c3, "StyledSlider");
$RefreshReg$(_c4, "ImageContainer");
$RefreshReg$(_c5, "Image");
$RefreshReg$(_c6, "PostImages");

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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsLmpzIl0sIm5hbWVzIjpbIkdsb2JhbCIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiU3R5bGVkU2xpZGVyIiwiU2xpZGVyIiwiSW1hZ2VDb250YWluZXIiLCJkZXZpY2UiLCJtb2JpbGUiLCJJbWFnZSIsImltZyIsIlBvc3RJbWFnZXMiLCJpbWFnZXMiLCJzZXR0aW5ncyIsImFycm93cyIsImRvdHMiLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwibGVuZ3RoIiwic3JjIiwibWFwIiwiaW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLDJFQUFILG9NQUFaO0tBQU1ELE07QUFLTixJQUFNRSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsNERBQWY7TUFBTUYsUztBQU1OLElBQU1HLFlBQVksR0FBR0YsaUVBQU0sQ0FBQ0csa0RBQUQsQ0FBVDtFQUFBO0VBQUE7QUFBQSx1Q0FBbEI7TUFBTUQsWTtBQU1OLElBQU1FLGNBQWMsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxzQ0FFVEkscURBQU0sQ0FBQ0MsTUFGRSxDQUFwQjtNQUFNRixjO0FBT04sSUFBTUcsS0FBSyxHQUFHUCx5REFBTSxDQUFDUSxHQUFWO0VBQUE7RUFBQTtBQUFBLGtFQUFYO01BQU1ELEs7O0FBT04sSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBZ0I7RUFBQSxJQUFiQyxNQUFhLFFBQWJBLE1BQWE7RUFDakMsSUFBTUMsUUFBUSxHQUFHO0lBQ2ZDLE1BQU0sRUFBRSxLQURPO0lBRWZDLElBQUksRUFBRSxJQUZTO0lBR2ZDLFFBQVEsRUFBRSxJQUhLO0lBSWZDLFlBQVksRUFBRSxDQUpDO0lBS2ZDLGNBQWMsRUFBRTtFQUxELENBQWpCOztFQVFBLElBQUlOLE1BQU0sQ0FBQ08sTUFBUCxLQUFrQixDQUF0QixFQUF5QjtJQUN2QixPQUNFLE1BQUMsU0FBRDtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQ0UsTUFBQyxLQUFEO01BQU8sR0FBRyxFQUFFUCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVRLEdBQXRCO01BQTJCLEdBQUcsRUFBQyxPQUEvQjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBREYsQ0FERjtFQUtEOztFQUFBOztFQUVELElBQUlSLE1BQU0sQ0FBQ08sTUFBUCxHQUFnQixDQUFwQixFQUF1QjtJQUNyQixPQUNFLE1BQUMsU0FBRDtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQ0UsTUFBQyxNQUFEO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFERixFQUVFLE1BQUMsWUFBRCx5RkFBa0JOLFFBQWxCO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsSUFDR0QsTUFBTSxDQUFDUyxHQUFQLENBQVcsVUFBQUMsS0FBSztNQUFBLE9BQ2Y7UUFBSyxHQUFHLEVBQUVBLEtBQUssQ0FBQ0YsR0FBaEI7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNFLE1BQUMsY0FBRDtRQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQTtNQUFBLEdBQ0UsTUFBQyxLQUFEO1FBQU8sR0FBRyxFQUFFRSxLQUFLLENBQUNGLEdBQWxCO1FBQXVCLEdBQUcsRUFBQyxPQUEzQjtRQUFtQyxHQUFHLEVBQUVFLEtBQUssQ0FBQ0YsR0FBOUM7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxFQURGLENBREYsQ0FEZTtJQUFBLENBQWhCLENBREgsQ0FGRixDQURGO0VBY0Q7O0VBQUE7QUFDRixDQWpDRDs7TUFBTVQsVTtBQW1DU0EseUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41ZmQzNmQ5YTU3NThmMTZhZDUzYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGRldmljZSBmcm9tICcuLi91dGlscy9kZXZpY2UnO1xyXG5cclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MnO1xyXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XHJcblxyXG5jb25zdCBHbG9iYWwgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAuc2xpY2stc2xpZGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuYDtcclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDE1cHggMTVweCAxNXB4IDBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRTbGlkZXIgPSBzdHlsZWQoU2xpZGVyKWBcclxuICAuc2xpY2stc2xpZGUgZGl2e1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcblxyXG4gIEBtZWRpYSAke2RldmljZS5tb2JpbGV9IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0SW1hZ2VzID0gKHsgaW1hZ2VzIH0pID0+IHtcclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICB9XHJcblxyXG4gIGlmIChpbWFnZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlc1swXS5zcmN9IGFsdD1cImltYWdlXCIgLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGlmIChpbWFnZXMubGVuZ3RoID4gMSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8R2xvYmFsIC8+XHJcbiAgICAgICAgPFN0eWxlZFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAge2ltYWdlcy5tYXAoaW1hZ2UgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW1hZ2Uuc3JjfT5cclxuICAgICAgICAgICAgICA8SW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWFnZS5zcmN9IGFsdD1cImltYWdlXCIga2V5PXtpbWFnZS5zcmN9IC8+XHJcbiAgICAgICAgICAgICAgPC9JbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1N0eWxlZFNsaWRlcj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICApO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0SW1hZ2VzOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoc3RyaW5ncywgcmF3KSB7XG4gIGlmICghcmF3KSB7XG4gICAgcmF3ID0gc3RyaW5ncy5zbGljZSgwKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0cmluZ3MsIHtcbiAgICByYXc6IHtcbiAgICAgIHZhbHVlOiBPYmplY3QuZnJlZXplKHJhdylcbiAgICB9XG4gIH0pKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9