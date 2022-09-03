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
      lineNumber: 48,
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
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx(PlusIconContainer, {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsPlusCircleFill"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlSW1hZ2VFZGl0Rm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtIiwic3R5bGVkIiwiZm9ybSIsIlBsdXNJY29uQ29udGFpbmVyIiwiZGl2IiwiUHJvZmlsZUltYWdlRWRpdEZvcm0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaW1hZ2VJbnB1dCIsInVzZVJlZiIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsImNsaWNrIiwib25DaGFuZ2VJbWFnZSIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiZmlsZXMiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidHlwZSIsIkNIQU5HRV9QUk9GSUxFX0lNQUdFX1JFUVVFU1QiLCJkYXRhIiwib25TdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0VBQUE7RUFBQTtBQUFBLDBCQUFWO0tBQU1GLEk7QUFJTixJQUFNRyxpQkFBaUIsR0FBR0YseURBQU0sQ0FBQ0csR0FBVjtFQUFBO0VBQUE7QUFBQSxrRkFBdkI7TUFBTUQsaUI7O0FBVU4sSUFBTUUsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0VBQUE7O0VBQ2pDLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7RUFFQSxJQUFNQyxVQUFVLEdBQUdDLG9EQUFNLEVBQXpCO0VBQ0EsSUFBTUMsa0JBQWtCLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtJQUMzQ0gsVUFBVSxDQUFDSSxPQUFYLENBQW1CQyxLQUFuQjtFQUNELENBRnFDLEVBRW5DLENBQUNMLFVBQVUsQ0FBQ0ksT0FBWixDQUZtQyxDQUF0QztFQUlBLElBQU1FLGFBQWEsR0FBR0gseURBQVcsQ0FBQyxVQUFDSSxDQUFELEVBQU87SUFDdkNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUE5QjtJQUNBLElBQU1DLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCO0lBQ0FELFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQixPQUFoQixFQUF5QlAsQ0FBQyxDQUFDRyxNQUFGLENBQVNDLEtBQWxDO0lBRUFiLFFBQVEsQ0FBQztNQUNQaUIsSUFBSSxFQUFFQywyRUFEQztNQUVQQyxJQUFJLEVBQUVMO0lBRkMsQ0FBRCxDQUFSO0VBSUQsQ0FUZ0MsQ0FBakM7RUFXQSxJQUFNTSxRQUFRLEdBQUdmLHlEQUFXLENBQUMsWUFBTTtJQUNqQyxPQUFPTCxRQUFRLENBQUM7TUFDZGlCLElBQUksRUFBRUMsMkVBRFE7TUFFZEMsSUFBSSxFQUFFTDtJQUZRLENBQUQsQ0FBZjtFQUlELENBTDJCLEVBS3pCLEVBTHlCLENBQTVCO0VBT0EsT0FDRSxNQUFDLElBQUQ7SUFBTSxRQUFRLEVBQUVNLFFBQWhCO0lBQTBCLE9BQU8sRUFBQyxxQkFBbEM7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFO0lBQ0UsSUFBSSxFQUFDLE1BRFA7SUFFRSxJQUFJLEVBQUMsT0FGUDtJQUdFLE1BQU0sTUFIUjtJQUlFLEdBQUcsRUFBRWxCLFVBSlA7SUFLRSxRQUFRLEVBQUVNLGFBTFo7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQURGLEVBUUUsTUFBQyxpQkFBRDtJQUFtQixPQUFPLEVBQUVKLGtCQUE1QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQywrREFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsQ0FSRixDQURGO0FBY0QsQ0F4Q0Q7O0dBQU1MLG9CO1VBQ2FFLHVEOzs7TUFEYkYsb0I7QUEwQ1NBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuOThmYmNlNDE5ZWNlMDlkODUyNzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDSEFOR0VfUFJPRklMRV9JTUFHRV9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB7IEJzUGx1c0NpcmNsZUZpbGwgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUGx1c0ljb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBjb2xvcjogIzE4NjRhYjtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIDpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFByb2ZpbGVJbWFnZUVkaXRGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VJbWFnZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnaW1hZ2UnLCBlLnRhcmdldC5maWxlcyk7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGUudGFyZ2V0LmZpbGVzKTtcclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IENIQU5HRV9QUk9GSUxFX0lNQUdFX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxyXG4gICAgfSlcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDSEFOR0VfUFJPRklMRV9JTUFHRV9SRVFVRVNULFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgcmVmPXtpbWFnZUlucHV0fVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlfVxyXG4gICAgICAvPlxyXG4gICAgICA8UGx1c0ljb25Db250YWluZXIgb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT5cclxuICAgICAgICA8QnNQbHVzQ2lyY2xlRmlsbCAvPlxyXG4gICAgICA8L1BsdXNJY29uQ29udGFpbmVyPlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlSW1hZ2VFZGl0Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9