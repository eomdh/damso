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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\PostForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostForm__Container",
  componentId: "sc-z6wuxo-0"
})(["width:100%;max-height:500px;"]);
_c = Container;
var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "PostForm__FormContainer",
  componentId: "sc-z6wuxo-1"
})(["width:100%;min-height:120px;border-bottom:1px solid #e6ecf0;padding:10px;position:relative;"]);
_c2 = FormContainer;
var FormUpSideContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostForm__FormUpSideContainer",
  componentId: "sc-z6wuxo-2"
})(["display:flex;width:100%;"]);
_c3 = FormUpSideContainer;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostForm__ProfileImageContainer",
  componentId: "sc-z6wuxo-3"
})(["width:60px;height:60px;margin-right:10px;border-radius:50px;overflow:hidden;"]);
_c4 = ProfileImageContainer;
var ProfileImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "PostForm__ProfileImage",
  componentId: "sc-z6wuxo-4"
})(["width:100%;height:100%;object-fit:cover;"]);
_c5 = ProfileImage;
var ContentInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "PostForm__ContentInput",
  componentId: "sc-z6wuxo-5"
})(["width:80%;border:none;font-size:16px;min-height:50px;max-height:300px;margin-bottom:50px;:disabled{background-color:white;}"]);
_c6 = ContentInput;
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostForm__IconContainer",
  componentId: "sc-z6wuxo-6"
})(["position:absolute;bottom:-3.5px;right:107px;color:#1864ab;font-size:38px;opacity:0.5;cursor:pointer;&:hover{opacity:1;transform:scale(0.98);}"]);
_c7 = IconContainer;
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "PostForm__SubmitButton",
  componentId: "sc-z6wuxo-7"
})(["all:unset;position:absolute;background-color:#1864ab;color:white;letter-spacing:2px;font-weight:600;font-size:14px;width:70px;height:30px;border-radius:6px;bottom:10px;right:30px;cursor:pointer;opacity:", ";transition:all 0.3s linear;display:flex;justify-content:center;align-items:center;outline:none;&:focus{outline:none;}"], function (props) {
  return props.isAvailablePosting ? 1 : 0.5;
});
_c8 = SubmitButton;
var ImageUploadContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostForm__ImageUploadContainer",
  componentId: "sc-z6wuxo-8"
})(["display:flex;width:50%;"]);
_c9 = ImageUploadContainer;
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostForm__ImageContainer",
  componentId: "sc-z6wuxo-9"
})(["position:relative;"]);
_c10 = ImageContainer;
var Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "PostForm__Image",
  componentId: "sc-z6wuxo-10"
})(["width:150px;margin-top:5px;"]);
_c11 = Image;
var ImageDeleteContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostForm__ImageDeleteContainer",
  componentId: "sc-z6wuxo-11"
})(["position:absolute;top:2px;right:2px;color:red;font-size:2px;border:1px solid red;border-radius:50%;padding:1px;opacity:0.7;cursor:pointer;&:hover{opacity:1;transform:scale(0.98);}"]);
_c12 = ImageDeleteContainer;

var PostForm = function PostForm() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      isLoggedIn = _useSelector.isLoggedIn;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      imagePaths = _useSelector2.imagePaths;

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
  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);
  var onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    var imageFormData = new FormData();
    [].forEach.call(e.target.files, function (f) {
      imageFormData.append("image", f);
    });
    console.log(imageFormData);
  });

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isAvailablePosting = _useState2[0],
      setIsAvailablePosting = _useState2[1];

  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 5
    }
  }, __jsx(FormContainer, {
    encType: "multipart/form-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, __jsx(FormUpSideContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 11
    }
  }, __jsx(ProfileImage, {
    src: __webpack_require__(/*! ../image/user.png */ "./image/user.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
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
      lineNumber: 160,
      columnNumber: 11
    }
  }), __jsx("input", {
    type: "file",
    multiple: true,
    hidden: true,
    ref: imageInput,
    onChange: onChangeImages,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 11
    }
  }), __jsx(IconContainer, {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaRegImage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  })), __jsx(SubmitButton, {
    type: "submit",
    isAvailablePosting: isAvailablePosting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 11
    }
  }, "\uAC8C\uC2DC")), __jsx(ImageUploadContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }, imagePaths && imagePaths.map(function (path, i) {
    return __jsx(ImageContainer, {
      key: path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 13
      }
    }, __jsx(Image, {
      src: "".concat(path),
      alt: path,
      style: {
        width: "50px"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 15
      }
    }), __jsx(ImageDeleteContainer, {
      onClick: onClickDeleteImage(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 15
      }
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoMdRemove"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }
    })));
  }))));
};

_s(PostForm, "hphQOaG7CW2uwr8LozXuBrprWa4=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c13 = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "FormContainer");
$RefreshReg$(_c3, "FormUpSideContainer");
$RefreshReg$(_c4, "ProfileImageContainer");
$RefreshReg$(_c5, "ProfileImage");
$RefreshReg$(_c6, "ContentInput");
$RefreshReg$(_c7, "IconContainer");
$RefreshReg$(_c8, "SubmitButton");
$RefreshReg$(_c9, "ImageUploadContainer");
$RefreshReg$(_c10, "ImageContainer");
$RefreshReg$(_c11, "Image");
$RefreshReg$(_c12, "ImageDeleteContainer");
$RefreshReg$(_c13, "PostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtQ29udGFpbmVyIiwiZm9ybSIsIkZvcm1VcFNpZGVDb250YWluZXIiLCJQcm9maWxlSW1hZ2VDb250YWluZXIiLCJQcm9maWxlSW1hZ2UiLCJpbWciLCJDb250ZW50SW5wdXQiLCJUZXh0QXJlYSIsIkljb25Db250YWluZXIiLCJTdWJtaXRCdXR0b24iLCJidXR0b24iLCJwcm9wcyIsImlzQXZhaWxhYmxlUG9zdGluZyIsIkltYWdlVXBsb2FkQ29udGFpbmVyIiwiSW1hZ2VDb250YWluZXIiLCJJbWFnZSIsIkltYWdlRGVsZXRlQ29udGFpbmVyIiwiUG9zdEZvcm0iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImlzTG9nZ2VkSW4iLCJwb3N0IiwiaW1hZ2VQYXRocyIsInVzZVN0YXRlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJvbkNoYW5nZUNvbnRlbnQiLCJ1c2VDYWxsYmFjayIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInRyaW0iLCJzZXRJc0F2YWlsYWJsZVBvc3RpbmciLCJsZW5ndGgiLCJpbWFnZUlucHV0IiwidXNlUmVmIiwib25DbGlja0ltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwib25DaGFuZ2VJbWFnZXMiLCJpbWFnZUZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiY2FsbCIsImZpbGVzIiwiZiIsImFwcGVuZCIsImNvbnNvbGUiLCJsb2ciLCJyZXF1aXJlIiwicmVzaXplIiwib3V0bGluZSIsIm92ZXJmbG93IiwibWFwIiwicGF0aCIsImkiLCJ3aWR0aCIsIm9uQ2xpY2tEZWxldGVJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENB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QUEsRUFERixDQU5GLENBRDRCO0VBQUEsQ0FBZixDQURqQixDQWxDRixDQURGLENBREY7QUFxREQsQ0FuRkQ7O0dBQU12QyxRO1VBQ21CQyx1RCxFQUNBQSx1RDs7O09BRm5CRCxRO0FBcUZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40YTg0MWQxNGZlMTFmYWYzZTAxMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAncmVhY3QtdGV4dGFyZWEtYXV0b3NpemUnO1xyXG5pbXBvcnQgeyBGYVJlZ0ltYWdlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBJb01kUmVtb3ZlIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybUNvbnRhaW5lciA9IHN0eWxlZC5mb3JtYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTZlY2YwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybVVwU2lkZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IFByb2ZpbGVJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbmA7XHJcblxyXG5jb25zdCBQcm9maWxlSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvYmplY3QtZml0OiBjb3ZlcjsgXHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50SW5wdXQgPSBzdHlsZWQoVGV4dEFyZWEpYFxyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblxyXG4gIDpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtMy41cHg7XHJcbiAgcmlnaHQ6IDEwN3B4O1xyXG4gIGNvbG9yOiAjMTg2NGFiO1xyXG4gIGZvbnQtc2l6ZTogMzhweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3VibWl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBhbGw6IHVuc2V0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg2NGFiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5pc0F2YWlsYWJsZVBvc3RpbmcgPyAxIDogMC41KX07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZVVwbG9hZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogNTAlO1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VEZWxldGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDJweDtcclxuICByaWdodDogMnB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFBvc3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IGltYWdlUGF0aHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBvbkNoYW5nZUNvbnRlbnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc3Qge3RhcmdldDoge3ZhbHVlfX0gPSBlO1xyXG4gICAgc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpKSB7XHJcbiAgICAgIHNldElzQXZhaWxhYmxlUG9zdGluZyh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID09PSAwIHx8IHZhbHVlLmxlbmd0aCA+IDUwMCkge1xyXG4gICAgICBzZXRJc0F2YWlsYWJsZVBvc3RpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICB9LCBbY29udGVudF0pO1xyXG5cclxuICBjb25zdCBpbWFnZUlucHV0ID0gdXNlUmVmKCk7XHJcbiAgY29uc3Qgb25DbGlja0ltYWdlVXBsb2FkID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaW1hZ2VJbnB1dC5jdXJyZW50LmNsaWNrKCk7XHJcbiAgfSwgW2ltYWdlSW5wdXQuY3VycmVudF0pO1xyXG4gIFxyXG4gIGNvbnN0IG9uQ2hhbmdlSW1hZ2VzID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnN0IGltYWdlRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIFtdLmZvckVhY2guY2FsbChlLnRhcmdldC5maWxlcywgZiA9PiB7XHJcbiAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKFwiaW1hZ2VcIiwgZik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhpbWFnZUZvcm1EYXRhKTtcclxuICB9KTtcclxuICBjb25zdCBbaXNBdmFpbGFibGVQb3N0aW5nLCBzZXRJc0F2YWlsYWJsZVBvc3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEZvcm1Db250YWluZXIgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cclxuICAgICAgICA8Rm9ybVVwU2lkZUNvbnRhaW5lcj5cclxuICAgICAgICAgIDxQcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxQcm9maWxlSW1hZ2Ugc3JjPXtyZXF1aXJlKCcuLi9pbWFnZS91c2VyLnBuZycpfSAvPlxyXG4gICAgICAgICAgPC9Qcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgICA8Q29udGVudElucHV0IFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17YCR7XHJcbiAgICAgICAgICAgICAgaXNMb2dnZWRJblxyXG4gICAgICAgICAgICAgICAgPyBcIuyYpOuKmOydgCDslrTrlqQg7J287J20IOyeiOyXiOuCmOyalD9cIlxyXG4gICAgICAgICAgICAgICAgOiBcIuuhnOq3uOyduCDtm4Qg7IKs7Jqp7ZW07KO87IS47JqULlwiXHJcbiAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNMb2dnZWRJbiA/IGZhbHNlIDogdHJ1ZX1cclxuICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbnRlbnR9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcmVzaXplOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgICAgcmVmPXtpbWFnZUlucHV0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEljb25Db250YWluZXIgb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT5cclxuICAgICAgICAgICAgPEZhUmVnSW1hZ2UgLz5cclxuICAgICAgICAgIDwvSWNvbkNvbnRhaW5lcj5cclxuICAgICAgICAgIDxTdWJtaXRCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGlzQXZhaWxhYmxlUG9zdGluZz17aXNBdmFpbGFibGVQb3N0aW5nfT5cclxuICAgICAgICAgICAg6rKM7IucXHJcbiAgICAgICAgICA8L1N1Ym1pdEJ1dHRvbj5cclxuICAgICAgICA8L0Zvcm1VcFNpZGVDb250YWluZXI+XHJcbiAgICAgICAgPEltYWdlVXBsb2FkQ29udGFpbmVyPlxyXG4gICAgICAgICAge2ltYWdlUGF0aHMgJiYgaW1hZ2VQYXRocy5tYXAoKHBhdGgsIGkpID0+IChcclxuICAgICAgICAgICAgPEltYWdlQ29udGFpbmVyIGtleT17cGF0aH0+XHJcbiAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgc3JjPXtgJHtwYXRofWB9IFxyXG4gICAgICAgICAgICAgICAgYWx0PXtwYXRofVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW1hZ2VEZWxldGVDb250YWluZXIgb25DbGljaz17b25DbGlja0RlbGV0ZUltYWdlKGkpfT5cclxuICAgICAgICAgICAgICAgIDxJb01kUmVtb3ZlIC8+XHJcbiAgICAgICAgICAgICAgPC9JbWFnZURlbGV0ZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9JbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvSW1hZ2VVcGxvYWRDb250YWluZXI+XHJcbiAgICAgIDwvRm9ybUNvbnRhaW5lcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9