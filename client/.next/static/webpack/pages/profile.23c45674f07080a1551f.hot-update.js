webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/profileImageEditForm.js":
/*!********************************************!*\
  !*** ./components/profileImageEditForm.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/bs */ "./node_modules/react-icons/bs/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\components\\profileImageEditForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Form = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form.withConfig({
  displayName: "profileImageEditForm__Form",
  componentId: "sc-c0c8g-0"
})(["margin-left:100px;"]);
_c = Form;
var PlusIconContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "profileImageEditForm__PlusIconContainer",
  componentId: "sc-c0c8g-1"
})(["font-size:27px;color:#1864ab;opacity:0.6;cursor:pointer;:hover{opacity:1;}"]);
_c2 = PlusIconContainer;

var ProfileImageEditForm = function ProfileImageEditForm() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var formData = new FormData();
  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);
  var onChangeImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    console.log('image', e.target.files);
    [].forEach.call(e.target.files, function (file) {
      formData.append('image', file);
    });
    return dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_PROFILE_IMAGE_REQUEST"],
      data: formData
    });
  });
  return __jsx(Form, {
    encType: "multipart/form-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("input", {
    type: "file",
    name: "image",
    hidden: true,
    ref: imageInput,
    onChange: onChangeImage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx(PlusIconContainer, {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsPlusCircleFill"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  })));
};

_s(ProfileImageEditForm, "pdpJYEyOawVKzWEXy3SuBKDOCjk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c3 = ProfileImageEditForm;
/* harmony default export */ __webpack_exports__["default"] = (ProfileImageEditForm);

var _c, _c2, _c3;

$RefreshReg$(_c, "Form");
$RefreshReg$(_c2, "PlusIconContainer");
$RefreshReg$(_c3, "ProfileImageEditForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlSW1hZ2VFZGl0Rm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtIiwic3R5bGVkIiwiZm9ybSIsIlBsdXNJY29uQ29udGFpbmVyIiwiZGl2IiwiUHJvZmlsZUltYWdlRWRpdEZvcm0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImZpbGVzIiwiZm9yRWFjaCIsImNhbGwiLCJmaWxlIiwiYXBwZW5kIiwidHlwZSIsIkNIQU5HRV9QUk9GSUxFX0lNQUdFX1JFUVVFU1QiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtFQUFBO0VBQUE7QUFBQSwwQkFBVjtLQUFNRixJO0FBSU4sSUFBTUcsaUJBQWlCLEdBQUdGLHlEQUFNLENBQUNHLEdBQVY7RUFBQTtFQUFBO0FBQUEsa0ZBQXZCO01BQU1ELGlCOztBQVVOLElBQU1FLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtFQUFBOztFQUNqQyxJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCO0VBRUEsSUFBTUMsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakI7RUFFQSxJQUFNQyxVQUFVLEdBQUdDLG9EQUFNLEVBQXpCO0VBQ0EsSUFBTUMsa0JBQWtCLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUMzQ0gsVUFBVSxDQUFDSSxPQUFYLENBQW1CQyxLQUFuQjtFQUNELENBRnFDLEVBRW5DLENBQUNMLFVBQVUsQ0FBQ0ksT0FBWixDQUZtQyxDQUF0QztFQUlBLElBQU1FLGFBQWEsR0FBR0gseURBQVcsQ0FBQyxVQUFDSSxDQUFELEVBQU87SUFDdkNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUE5QjtJQUNBLEdBQUdDLE9BQUgsQ0FBV0MsSUFBWCxDQUFnQk4sQ0FBQyxDQUFDRyxNQUFGLENBQVNDLEtBQXpCLEVBQWdDLFVBQUNHLElBQUQsRUFBVTtNQUN4Q2hCLFFBQVEsQ0FBQ2lCLE1BQVQsQ0FBZ0IsT0FBaEIsRUFBeUJELElBQXpCO0lBQ0QsQ0FGRDtJQUlBLE9BQU9sQixRQUFRLENBQUM7TUFDZG9CLElBQUksRUFBRUMsMkVBRFE7TUFFZEMsSUFBSSxFQUFFcEI7SUFGUSxDQUFELENBQWY7RUFJRCxDQVZnQyxDQUFqQztFQVlBLE9BQ0UsTUFBQyxJQUFEO0lBQU0sT0FBTyxFQUFDLHFCQUFkO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRTtJQUNFLElBQUksRUFBQyxNQURQO0lBRUUsSUFBSSxFQUFDLE9BRlA7SUFHRSxNQUFNLE1BSFI7SUFJRSxHQUFHLEVBQUVFLFVBSlA7SUFLRSxRQUFRLEVBQUVNLGFBTFo7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURGLEVBUUUsTUFBQyxpQkFBRDtJQUFtQixPQUFPLEVBQUVKLGtCQUE1QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQywrREFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsQ0FSRixDQURGO0FBY0QsQ0FwQ0Q7O0dBQU1QLG9CO1VBQ2FFLHVEOzs7TUFEYkYsb0I7QUFzQ1NBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuMjNjNDU2NzRmMDcwODBhMTU1MWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IENIQU5HRV9QUk9GSUxFX0lNQUdFX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgQnNQbHVzQ2lyY2xlRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBQbHVzSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIGNvbG9yOiAjMTg2NGFiO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlRWRpdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcbiAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUltYWdlID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdpbWFnZScsIGUudGFyZ2V0LmZpbGVzKTtcclxuICAgIFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgKGZpbGUpID0+IHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGZpbGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ0hBTkdFX1BST0ZJTEVfSU1BR0VfUkVRVUVTVCxcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgIGhpZGRlblxyXG4gICAgICAgIHJlZj17aW1hZ2VJbnB1dH1cclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZX1cclxuICAgICAgLz5cclxuICAgICAgPFBsdXNJY29uQ29udGFpbmVyIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+XHJcbiAgICAgICAgPEJzUGx1c0NpcmNsZUZpbGwgLz5cclxuICAgICAgPC9QbHVzSWNvbkNvbnRhaW5lcj5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUltYWdlRWRpdEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==