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
/* harmony import */ var _utils_device__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/device */ "./utils/device.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_6__);


var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\PostImages.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostImages__Container",
  componentId: "sc-85cvqn-0"
})(["margin:15px 15px 15px 0px;width:90%;overflow:hidden;"]); // const StyledSlider = styled(Slider)`
//   .slick-slide div {
//     outline: none;
//   }
// `;

_c = Container;
var StyledSlider = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a).withConfig({
  displayName: "PostImages__StyledSlider",
  componentId: "sc-85cvqn-1"
})(["height:100%;.slick-list{height:100%;object-fit:cover;display:flex;align-items:center;}.slick-track{display:flex;align-items:center;}"]);
_c2 = StyledSlider;
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostImages__ImageContainer",
  componentId: "sc-85cvqn-2"
})([""]);
_c3 = ImageContainer;
var Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "PostImages__Image",
  componentId: "sc-85cvqn-3"
})(["max-width:400px;width:380px;height:500px;"]);
_c4 = Image;

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
        lineNumber: 64,
        columnNumber: 7
      }
    }, __jsx(Image, {
      src: images[0].src,
      alt: "image",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
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
        lineNumber: 72,
        columnNumber: 7
      }
    }, __jsx(StyledSlider, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, settings, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }
    }), images.map(function (image) {
      return __jsx("div", {
        key: image.src,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }
      }, __jsx(ImageContainer, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 15
        }
      }, __jsx(Image, {
        src: image.src,
        alt: "image",
        key: image.src,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 17
        }
      })));
    })));
  }

  ;
};

_c5 = PostImages;
/* harmony default export */ __webpack_exports__["default"] = (PostImages);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "StyledSlider");
$RefreshReg$(_c3, "ImageContainer");
$RefreshReg$(_c4, "Image");
$RefreshReg$(_c5, "PostImages");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0SW1hZ2VzLmpzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlN0eWxlZFNsaWRlciIsIlNsaWRlciIsIkltYWdlQ29udGFpbmVyIiwiSW1hZ2UiLCJpbWciLCJQb3N0SW1hZ2VzIiwiaW1hZ2VzIiwic2V0dGluZ3MiLCJhcnJvd3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsImxlbmd0aCIsInNyYyIsIm1hcCIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLDREQUFmLEMsQ0FNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztLQVZNRixTO0FBWU4sSUFBTUcsWUFBWSxHQUFHRixpRUFBTSxDQUFDRyxrREFBRCxDQUFUO0VBQUE7RUFBQTtBQUFBLDRJQUFsQjtNQUFNRCxZO0FBY04sSUFBTUUsY0FBYyxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLFFBQXBCO01BQU1HLGM7QUFZTixJQUFNQyxLQUFLLEdBQUdMLHlEQUFNLENBQUNNLEdBQVY7RUFBQTtFQUFBO0FBQUEsaURBQVg7TUFBTUQsSzs7QUFNTixJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFnQjtFQUFBLElBQWJDLE1BQWEsUUFBYkEsTUFBYTtFQUNqQyxJQUFNQyxRQUFRLEdBQUc7SUFDZkMsTUFBTSxFQUFFLEtBRE87SUFFZkMsSUFBSSxFQUFFLElBRlM7SUFHZkMsUUFBUSxFQUFFLElBSEs7SUFJZkMsWUFBWSxFQUFFLENBSkM7SUFLZkMsY0FBYyxFQUFFO0VBTEQsQ0FBakI7O0VBUUEsSUFBSU4sTUFBTSxDQUFDTyxNQUFQLEtBQWtCLENBQXRCLEVBQXlCO0lBQ3ZCLE9BQ0UsTUFBQyxTQUFEO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FDRSxNQUFDLEtBQUQ7TUFBTyxHQUFHLEVBQUVQLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVVEsR0FBdEI7TUFBMkIsR0FBRyxFQUFDLE9BQS9CO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFERixDQURGO0VBS0Q7O0VBQUE7O0VBRUQsSUFBSVIsTUFBTSxDQUFDTyxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0lBQ3JCLE9BQ0UsTUFBQyxTQUFEO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FDRSxNQUFDLFlBQUQseUZBQWtCTixRQUFsQjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLElBQ0dELE1BQU0sQ0FBQ1MsR0FBUCxDQUFXLFVBQUFDLEtBQUs7TUFBQSxPQUNmO1FBQUssR0FBRyxFQUFFQSxLQUFLLENBQUNGLEdBQWhCO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsR0FDRSxNQUFDLGNBQUQ7UUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUE7TUFBQSxHQUNFLE1BQUMsS0FBRDtRQUFPLEdBQUcsRUFBRUUsS0FBSyxDQUFDRixHQUFsQjtRQUF1QixHQUFHLEVBQUMsT0FBM0I7UUFBbUMsR0FBRyxFQUFFRSxLQUFLLENBQUNGLEdBQTlDO1FBQUE7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BQUEsRUFERixDQURGLENBRGU7SUFBQSxDQUFoQixDQURILENBREYsQ0FERjtFQWFEOztFQUFBO0FBQ0YsQ0FoQ0Q7O01BQU1ULFU7QUFrQ1NBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY2NTYxZjAyNTA4NjA1ZWRmOTM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGRldmljZSBmcm9tICcuLi91dGlscy9kZXZpY2UnO1xyXG5cclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0ICdzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3MnO1xyXG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMTVweCAxNXB4IDE1cHggMHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYDtcclxuXHJcbi8vIGNvbnN0IFN0eWxlZFNsaWRlciA9IHN0eWxlZChTbGlkZXIpYFxyXG4vLyAgIC5zbGljay1zbGlkZSBkaXYge1xyXG4vLyAgICAgb3V0bGluZTogbm9uZTtcclxuLy8gICB9XHJcbi8vIGA7XHJcblxyXG5jb25zdCBTdHlsZWRTbGlkZXIgPSBzdHlsZWQoU2xpZGVyKWBcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLnNsaWNrLWxpc3Qge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLnNsaWNrLXRyYWNrIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbi8vICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG5cclxuLy8gICBAbWVkaWEgJHtkZXZpY2UudGFibGV0fSB7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMTQwcHg7XHJcbi8vICAgfVxyXG5cclxuLy8gICBAbWVkaWEgJHtkZXZpY2UubW9iaWxlTH0ge1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuLy8gICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICB3aWR0aDogMzgwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RJbWFnZXMgPSAoeyBpbWFnZXMgfSkgPT4ge1xyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIH1cclxuXHJcbiAgaWYgKGltYWdlcy5sZW5ndGggPT09IDEpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEltYWdlIHNyYz17aW1hZ2VzWzBdLnNyY30gYWx0PVwiaW1hZ2VcIiAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGltYWdlcy5sZW5ndGggPiAxKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTdHlsZWRTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgIHtpbWFnZXMubWFwKGltYWdlID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2ltYWdlLnNyY30+XHJcbiAgICAgICAgICAgICAgPEltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aW1hZ2Uuc3JjfSBhbHQ9XCJpbWFnZVwiIGtleT17aW1hZ2Uuc3JjfSAvPlxyXG4gICAgICAgICAgICAgIDwvSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TdHlsZWRTbGlkZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKTtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEltYWdlczsiXSwic291cmNlUm9vdCI6IiJ9