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
  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);
  var formData = new FormData();
  var onChangeImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    console.log('image', e.target.files);
    var formData = new FormData();
    formData.append('image', e.target.files);
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_PROFILE_IMAGE_REQUEST"],
      data: formData
    });
  });
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_PROFILE_IMAGE_REQUEST"],
      data: formData
    });
  }, []);
  return __jsx(Form, {
    onSubmit: onSubmit,
    encType: "multipart/form-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx(PlusIconContainer, {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsPlusCircleFill"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  })));
};

_s(ProfileImageEditForm, "EHXyapPz0Vf7YyIGKKgZUbrxQAM=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlSW1hZ2VFZGl0Rm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtIiwic3R5bGVkIiwiZm9ybSIsIlBsdXNJY29uQ29udGFpbmVyIiwiZGl2IiwiUHJvZmlsZUltYWdlRWRpdEZvcm0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaW1hZ2VJbnB1dCIsInVzZVJlZiIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsImNsaWNrIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIm9uQ2hhbmdlSW1hZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImZpbGVzIiwiYXBwZW5kIiwidHlwZSIsIkNIQU5HRV9QUk9GSUxFX0lNQUdFX1JFUVVFU1QiLCJkYXRhIiwib25TdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0VBQUE7RUFBQTtBQUFBLDBCQUFWO0tBQU1GLEk7QUFJTixJQUFNRyxpQkFBaUIsR0FBR0YseURBQU0sQ0FBQ0csR0FBVjtFQUFBO0VBQUE7QUFBQSxrRkFBdkI7TUFBTUQsaUI7O0FBVU4sSUFBTUUsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0VBQUE7O0VBQ2pDLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7RUFFQSxJQUFNQyxVQUFVLEdBQUdDLG9EQUFNLEVBQXpCO0VBQ0EsSUFBTUMsa0JBQWtCLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUMzQ0gsVUFBVSxDQUFDSSxPQUFYLENBQW1CQyxLQUFuQjtFQUNELENBRnFDLEVBRW5DLENBQUNMLFVBQVUsQ0FBQ0ksT0FBWixDQUZtQyxDQUF0QztFQUlBLElBQU1FLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCO0VBRUEsSUFBTUMsYUFBYSxHQUFHTCx5REFBVyxDQUFDLFVBQUNNLENBQUQsRUFBTztJQUN2Q0MsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkYsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLEtBQTlCO0lBQ0EsSUFBTVAsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakI7SUFDQUQsUUFBUSxDQUFDUSxNQUFULENBQWdCLE9BQWhCLEVBQXlCTCxDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBbEM7SUFFQWYsUUFBUSxDQUFDO01BQ1BpQixJQUFJLEVBQUVDLDJFQURDO01BRVBDLElBQUksRUFBRVg7SUFGQyxDQUFELENBQVI7RUFJRCxDQVRnQyxDQUFqQztFQVdBLElBQU1ZLFFBQVEsR0FBR2YseURBQVcsQ0FBQyxZQUFNO0lBQ2pDLE9BQU9MLFFBQVEsQ0FBQztNQUNkaUIsSUFBSSxFQUFFQywyRUFEUTtNQUVkQyxJQUFJLEVBQUVYO0lBRlEsQ0FBRCxDQUFmO0VBSUQsQ0FMMkIsRUFLekIsRUFMeUIsQ0FBNUI7RUFPQSxPQUNFLE1BQUMsSUFBRDtJQUFNLFFBQVEsRUFBRVksUUFBaEI7SUFBMEIsT0FBTyxFQUFDLHFCQUFsQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0U7SUFDRSxJQUFJLEVBQUMsTUFEUDtJQUVFLElBQUksRUFBQyxPQUZQO0lBR0UsTUFBTSxNQUhSO0lBSUUsR0FBRyxFQUFFbEIsVUFKUDtJQUtFLFFBQVEsRUFBRVEsYUFMWjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsRUFRRSxNQUFDLGlCQUFEO0lBQW1CLE9BQU8sRUFBRU4sa0JBQTVCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLCtEQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixDQVJGLENBREY7QUFjRCxDQTFDRDs7R0FBTUwsb0I7VUFDYUUsdUQ7OztNQURiRixvQjtBQTRDU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5mYjY0ZDVjM2U4MTc2YTM0OTJlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IENIQU5HRV9QUk9GSUxFX0lNQUdFX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuaW1wb3J0IHsgQnNQbHVzQ2lyY2xlRmlsbCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBQbHVzSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIGNvbG9yOiAjMTg2NGFiO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlRWRpdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcbiAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG5cclxuICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUltYWdlID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdpbWFnZScsIGUudGFyZ2V0LmZpbGVzKTtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgZS50YXJnZXQuZmlsZXMpO1xyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ0hBTkdFX1BST0ZJTEVfSU1BR0VfUkVRVUVTVCxcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICB9KVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9QUk9GSUxFX0lNQUdFX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgbmFtZT1cImltYWdlXCJcclxuICAgICAgICBoaWRkZW5cclxuICAgICAgICByZWY9e2ltYWdlSW5wdXR9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW1hZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxQbHVzSWNvbkNvbnRhaW5lciBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PlxyXG4gICAgICAgIDxCc1BsdXNDaXJjbGVGaWxsIC8+XHJcbiAgICAgIDwvUGx1c0ljb25Db250YWluZXI+XHJcbiAgICA8L0Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVJbWFnZUVkaXRGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=