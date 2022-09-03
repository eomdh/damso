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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      imagePath = _useState[0],
      setImagePath = _useState[1];

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
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["CHANGE_PROFILE_IMAGE_REQUEST"],
      data: formData
    });
  });
  return __jsx(Form, {
    encType: "multipart/form-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx(PlusIconContainer, {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__["BsPlusCircleFill"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  })));
};

_s(ProfileImageEditForm, "A+RywWgDMQsWpIcAO9/GPc8nb3s=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlSW1hZ2VFZGl0Rm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtIiwic3R5bGVkIiwiZm9ybSIsIlBsdXNJY29uQ29udGFpbmVyIiwiZGl2IiwiUHJvZmlsZUltYWdlRWRpdEZvcm0iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJpbWFnZVBhdGgiLCJzZXRJbWFnZVBhdGgiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiaW1hZ2VJbnB1dCIsInVzZVJlZiIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsInVzZUNhbGxiYWNrIiwiY3VycmVudCIsImNsaWNrIiwib25DaGFuZ2VJbWFnZSIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiZmlsZXMiLCJmb3JFYWNoIiwiY2FsbCIsImZpbGUiLCJhcHBlbmQiLCJ0eXBlIiwiQ0hBTkdFX1BST0ZJTEVfSU1BR0VfUkVRVUVTVCIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0VBQUE7RUFBQTtBQUFBLDBCQUFWO0tBQU1GLEk7QUFJTixJQUFNRyxpQkFBaUIsR0FBR0YseURBQU0sQ0FBQ0csR0FBVjtFQUFBO0VBQUE7QUFBQSxrRkFBdkI7TUFBTUQsaUI7O0FBVU4sSUFBTUUsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixHQUFNO0VBQUE7O0VBQ2pDLElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0VBRUEsZ0JBQWtDQyxzREFBUSxDQUFDLEVBQUQsQ0FBMUM7RUFBQSxJQUFPQyxTQUFQO0VBQUEsSUFBa0JDLFlBQWxCOztFQUNBLElBQU1DLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCO0VBRUEsSUFBTUMsVUFBVSxHQUFHQyxvREFBTSxFQUF6QjtFQUNBLElBQU1DLGtCQUFrQixHQUFHQyx5REFBVyxDQUFDLFlBQU07SUFDM0NILFVBQVUsQ0FBQ0ksT0FBWCxDQUFtQkMsS0FBbkI7RUFDRCxDQUZxQyxFQUVuQyxDQUFDTCxVQUFVLENBQUNJLE9BQVosQ0FGbUMsQ0FBdEM7RUFJQSxJQUFNRSxhQUFhLEdBQUdILHlEQUFXLENBQUMsVUFBQ0ksQ0FBRCxFQUFPO0lBQ3ZDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBOUI7SUFDQSxHQUFHQyxPQUFILENBQVdDLElBQVgsQ0FBZ0JOLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUF6QixFQUFnQyxVQUFDRyxJQUFELEVBQVU7TUFDeENoQixRQUFRLENBQUNpQixNQUFULENBQWdCLE9BQWhCLEVBQXlCRCxJQUF6QjtJQUNELENBRkQ7SUFJQXJCLFFBQVEsQ0FBQztNQUNQdUIsSUFBSSxFQUFFQywyRUFEQztNQUVQQyxJQUFJLEVBQUVwQjtJQUZDLENBQUQsQ0FBUjtFQUlELENBVmdDLENBQWpDO0VBWUEsT0FDRSxNQUFDLElBQUQ7SUFBTSxPQUFPLEVBQUMscUJBQWQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNFO0lBQ0UsSUFBSSxFQUFDLE1BRFA7SUFFRSxJQUFJLEVBQUMsT0FGUDtJQUdFLE1BQU0sTUFIUjtJQUlFLEdBQUcsRUFBRUUsVUFKUDtJQUtFLFFBQVEsRUFBRU0sYUFMWjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsRUFRRSxNQUFDLGlCQUFEO0lBQW1CLE9BQU8sRUFBRUosa0JBQTVCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLCtEQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixDQVJGLENBREY7QUFjRCxDQXJDRDs7R0FBTVYsb0I7VUFDYUUsdUQ7OztNQURiRixvQjtBQXVDU0EsbUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS41ZDM0ZTk3NmE4NjlmNWNmZTEwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgQ0hBTkdFX1BST0ZJTEVfSU1BR0VfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgeyBCc1BsdXNDaXJjbGVGaWxsIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuYDtcclxuXHJcbmNvbnN0IFBsdXNJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgY29sb3I6ICMxODY0YWI7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICA6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcm9maWxlSW1hZ2VFZGl0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IFtpbWFnZVBhdGgsIHNldEltYWdlUGF0aF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VJbWFnZSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnaW1hZ2UnLCBlLnRhcmdldC5maWxlcyk7XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmaWxlKSA9PiB7XHJcbiAgICAgIGZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ0hBTkdFX1BST0ZJTEVfSU1BR0VfUkVRVUVTVCxcclxuICAgICAgZGF0YTogZm9ybURhdGEsXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgIGhpZGRlblxyXG4gICAgICAgIHJlZj17aW1hZ2VJbnB1dH1cclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZX1cclxuICAgICAgLz5cclxuICAgICAgPFBsdXNJY29uQ29udGFpbmVyIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+XHJcbiAgICAgICAgPEJzUGx1c0NpcmNsZUZpbGwgLz5cclxuICAgICAgPC9QbHVzSWNvbkNvbnRhaW5lcj5cclxuICAgIDwvRm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUltYWdlRWRpdEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==