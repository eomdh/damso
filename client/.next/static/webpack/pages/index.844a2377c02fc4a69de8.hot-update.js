webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostForm.js":
/*!********************************!*\
  !*** ./components/PostForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\PostForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PostForm__Container",
  componentId: "sc-z6wuxo-0"
})(["width:100%;max-height:500px;"]);
_c = Container;
var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form.withConfig({
  displayName: "PostForm__FormContainer",
  componentId: "sc-z6wuxo-1"
})(["width:100%;min-height:120px;border-bottom:1px solid #e6ecf0;padding:10px;display:flex;position:relative;"]);
_c2 = FormContainer;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "PostForm__ProfileImageContainer",
  componentId: "sc-z6wuxo-2"
})(["width:60px;height:60px;margin-right:10px;border-radius:50px;overflow:hidden;"]);
_c3 = ProfileImageContainer;
var ProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "PostForm__ProfileImage",
  componentId: "sc-z6wuxo-3"
})(["width:100%;height:100%;object-fit:cover;"]);
_c4 = ProfileImage;
var ContentInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__["default"]).withConfig({
  displayName: "PostForm__ContentInput",
  componentId: "sc-z6wuxo-4"
})(["width:80%;border:none;font-size:16px;min-height:50px;max-height:300px;margin-bottom:50px;"]);
_c5 = ContentInput;
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "PostForm__SubmitButton",
  componentId: "sc-z6wuxo-5"
})(["all:unset;position:absolute;background-color:#1864ab;color:white;letter-spacing:2px;font-weight:600;font-size:14px;width:70px;height:30px;border-radius:6px;bottom:10px;right:30px;cursor:pointer;opacity:", ";transition:all 0.3s linear;display:flex;justify-content:center;align-items:center;outline:none;&:focus{outline:none;}"], function (props) {
  return props.isAvailablePosting ? 1 : 0.8;
});
_c6 = SubmitButton;

var PostForm = function PostForm() {
  _s();

  var _useSelector = useSelector(function (state) {
    return state.user;
  }),
      isLoggedIn = _useSelector.isLoggedIn;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      content = _useState[0],
      setContent = _useState[1];

  var onChangeContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    var value = e.target.value;
    setContent(e.target.value);

    if (value.trim()) {
      setIsAvailablePosting(true);
    } else if (value.length === 0 || value.length > 500) {
      setIsAvailablePosting(false);
    }

    ;
  }, [content]);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isAvailablePosting = _useState2[0],
      setIsAvailablePosting = _useState2[1];

  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx(FormContainer, {
    encType: "multipart/form-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx(ProfileImage, {
    src: __webpack_require__(/*! ../image/user.png */ "./image/user.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  })), __jsx(ContentInput, {
    placeholder: "".concat(isLoggedIn ? "오늘은 어떤 일이 있었나요?" : "로그인 후 사용해주세요."),
    disabled: isLoggedIn ? false : true,
    value: content,
    onChange: onChangeContent,
    style: {
      resize: "none",
      outline: "none",
      overflow: "hidden"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }), __jsx(SubmitButton, {
    type: "submit",
    isAvailablePosting: isAvailablePosting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, "\uAC8C\uC2DC")));
};

_s(PostForm, "6ESioN4jafUYSBdCBRiUvVcAGxc=", true);

_c7 = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "FormContainer");
$RefreshReg$(_c3, "ProfileImageContainer");
$RefreshReg$(_c4, "ProfileImage");
$RefreshReg$(_c5, "ContentInput");
$RefreshReg$(_c6, "SubmitButton");
$RefreshReg$(_c7, "PostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtQ29udGFpbmVyIiwiZm9ybSIsIlByb2ZpbGVJbWFnZUNvbnRhaW5lciIsIlByb2ZpbGVJbWFnZSIsImltZyIsIkNvbnRlbnRJbnB1dCIsIlRleHRBcmVhIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJpc0F2YWlsYWJsZVBvc3RpbmciLCJQb3N0Rm9ybSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwiaXNMb2dnZWRJbiIsInVzZVN0YXRlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJvbkNoYW5nZUNvbnRlbnQiLCJ1c2VDYWxsYmFjayIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInRyaW0iLCJzZXRJc0F2YWlsYWJsZVBvc3RpbmciLCJsZW5ndGgiLCJyZXF1aXJlIiwicmVzaXplIiwib3V0bGluZSIsIm92ZXJmbG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxvQ0FBZjtLQUFNRixTO0FBS04sSUFBTUcsYUFBYSxHQUFHRix5REFBTSxDQUFDRyxJQUFWO0VBQUE7RUFBQTtBQUFBLGdIQUFuQjtNQUFNRCxhO0FBU04sSUFBTUUscUJBQXFCLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsb0ZBQTNCO01BQU1HLHFCO0FBUU4sSUFBTUMsWUFBWSxHQUFHTCx5REFBTSxDQUFDTSxHQUFWO0VBQUE7RUFBQTtBQUFBLGdEQUFsQjtNQUFNRCxZO0FBTU4sSUFBTUUsWUFBWSxHQUFHUCxpRUFBTSxDQUFDUSwrREFBRCxDQUFUO0VBQUE7RUFBQTtBQUFBLGlHQUFsQjtNQUFNRCxZO0FBU04sSUFBTUUsWUFBWSxHQUFHVCx5REFBTSxDQUFDVSxNQUFWO0VBQUE7RUFBQTtBQUFBLDZVQWNMLFVBQUFDLEtBQUs7RUFBQSxPQUFLQSxLQUFLLENBQUNDLGtCQUFOLEdBQTJCLENBQTNCLEdBQStCLEdBQXBDO0FBQUEsQ0FkQSxDQUFsQjtNQUFNSCxZOztBQXlCTixJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0VBQUE7O0VBQ3JCLG1CQUF1QkMsV0FBVyxDQUFDLFVBQUNDLEtBQUQ7SUFBQSxPQUFXQSxLQUFLLENBQUNDLElBQWpCO0VBQUEsQ0FBRCxDQUFsQztFQUFBLElBQVFDLFVBQVIsZ0JBQVFBLFVBQVI7O0VBRUEsZ0JBQThCQyxzREFBUSxDQUFDLEVBQUQsQ0FBdEM7RUFBQSxJQUFPQyxPQUFQO0VBQUEsSUFBZ0JDLFVBQWhCOztFQUNBLElBQU1DLGVBQWUsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU87SUFDekMsSUFBZ0JDLEtBQWhCLEdBQTBCRCxDQUExQixDQUFPRSxNQUFQLENBQWdCRCxLQUFoQjtJQUNBSixVQUFVLENBQUNHLENBQUMsQ0FBQ0UsTUFBRixDQUFTRCxLQUFWLENBQVY7O0lBQ0EsSUFBSUEsS0FBSyxDQUFDRSxJQUFOLEVBQUosRUFBa0I7TUFDaEJDLHFCQUFxQixDQUFDLElBQUQsQ0FBckI7SUFDRCxDQUZELE1BRU8sSUFBSUgsS0FBSyxDQUFDSSxNQUFOLEtBQWlCLENBQWpCLElBQXNCSixLQUFLLENBQUNJLE1BQU4sR0FBZSxHQUF6QyxFQUE4QztNQUNuREQscUJBQXFCLENBQUMsS0FBRCxDQUFyQjtJQUNEOztJQUFBO0VBQ0YsQ0FSa0MsRUFRaEMsQ0FBQ1IsT0FBRCxDQVJnQyxDQUFuQzs7RUFVQSxpQkFBb0RELHNEQUFRLENBQUMsS0FBRCxDQUE1RDtFQUFBLElBQU9OLGtCQUFQO0VBQUEsSUFBMkJlLHFCQUEzQjs7RUFFQSxPQUNFLE1BQUMsU0FBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxhQUFEO0lBQWUsT0FBTyxFQUFDLHFCQUF2QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxxQkFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxZQUFEO0lBQWMsR0FBRyxFQUFFRSxtQkFBTyxDQUFDLDJDQUFELENBQTFCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixDQURGLEVBSUUsTUFBQyxZQUFEO0lBQ0UsV0FBVyxZQUNUWixVQUFVLEdBQ04saUJBRE0sR0FFTixlQUhLLENBRGI7SUFNRSxRQUFRLEVBQUVBLFVBQVUsR0FBRyxLQUFILEdBQVcsSUFOakM7SUFPRSxLQUFLLEVBQUVFLE9BUFQ7SUFRRSxRQUFRLEVBQUVFLGVBUlo7SUFTRSxLQUFLLEVBQUU7TUFDTFMsTUFBTSxFQUFFLE1BREg7TUFFTEMsT0FBTyxFQUFFLE1BRko7TUFHTEMsUUFBUSxFQUFFO0lBSEwsQ0FUVDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBSkYsRUFtQkUsTUFBQyxZQUFEO0lBQWMsSUFBSSxFQUFDLFFBQW5CO0lBQTRCLGtCQUFrQixFQUFFcEIsa0JBQWhEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsa0JBbkJGLENBREYsQ0FERjtBQTJCRCxDQTNDRDs7R0FBTUMsUTs7TUFBQUEsUTtBQTZDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODQ0YTIzNzdjMDJmYzRhNjlkZTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tICdyZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZSc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybUNvbnRhaW5lciA9IHN0eWxlZC5mb3JtYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlY2YwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5jb25zdCBQcm9maWxlSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5gO1xyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7IFxyXG5gO1xyXG5cclxuY29uc3QgQ29udGVudElucHV0ID0gc3R5bGVkKFRleHRBcmVhKWBcclxuICB3aWR0aDogODAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgU3VibWl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBhbGw6IHVuc2V0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg2NGFiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5pc0F2YWlsYWJsZVBvc3RpbmcgPyAxIDogMC44KX07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB7IGlzTG9nZ2VkSW4gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcblxyXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBvbkNoYW5nZUNvbnRlbnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc3Qge3RhcmdldDoge3ZhbHVlfX0gPSBlO1xyXG4gICAgc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpKSB7XHJcbiAgICAgIHNldElzQXZhaWxhYmxlUG9zdGluZyh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID09PSAwIHx8IHZhbHVlLmxlbmd0aCA+IDUwMCkge1xyXG4gICAgICBzZXRJc0F2YWlsYWJsZVBvc3RpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICB9LCBbY29udGVudF0pO1xyXG4gIFxyXG4gIGNvbnN0IFtpc0F2YWlsYWJsZVBvc3RpbmcsIHNldElzQXZhaWxhYmxlUG9zdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Rm9ybUNvbnRhaW5lciBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxyXG4gICAgICAgIDxQcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgICA8UHJvZmlsZUltYWdlIHNyYz17cmVxdWlyZSgnLi4vaW1hZ2UvdXNlci5wbmcnKX0gLz5cclxuICAgICAgICA8L1Byb2ZpbGVJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICA8Q29udGVudElucHV0IFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e2Ake1xyXG4gICAgICAgICAgICBpc0xvZ2dlZEluXHJcbiAgICAgICAgICAgICAgPyBcIuyYpOuKmOydgCDslrTrlqQg7J287J20IOyeiOyXiOuCmOyalD9cIlxyXG4gICAgICAgICAgICAgIDogXCLroZzqt7jsnbgg7ZuEIOyCrOyaqe2VtOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgfWB9XHJcbiAgICAgICAgICBkaXNhYmxlZD17aXNMb2dnZWRJbiA/IGZhbHNlIDogdHJ1ZX1cclxuICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29udGVudH1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHJlc2l6ZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFN1Ym1pdEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaXNBdmFpbGFibGVQb3N0aW5nPXtpc0F2YWlsYWJsZVBvc3Rpbmd9PlxyXG4gICAgICAgICAg6rKM7IucXHJcbiAgICAgICAgPC9TdWJtaXRCdXR0b24+XHJcbiAgICAgIDwvRm9ybUNvbnRhaW5lcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=