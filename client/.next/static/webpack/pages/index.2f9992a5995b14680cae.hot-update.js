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
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _ProfileImage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProfileImage */ "./components/ProfileImage.js");
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
})(["width:100%;min-height:120px;border-bottom:5px solid #e6ecf0;padding:10px;position:relative;"]);
_c2 = FormContainer;
var FormUpSideContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostForm__FormUpSideContainer",
  componentId: "sc-z6wuxo-2"
})(["display:flex;width:100%;"]);
_c3 = FormUpSideContainer;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostForm__ProfileImageContainer",
  componentId: "sc-z6wuxo-3"
})(["width:55px;height:55px;margin-right:15px;border-radius:50px;overflow:hidden;"]);
_c4 = ProfileImageContainer;
var ContentsInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "PostForm__ContentsInput",
  componentId: "sc-z6wuxo-4"
})(["width:80%;border:none;font-size:16px;min-height:50px;max-height:300px;margin-bottom:50px;:disabled{background-color:white;}"]);
_c5 = ContentsInput;
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostForm__IconContainer",
  componentId: "sc-z6wuxo-5"
})(["position:absolute;bottom:-3.5px;right:107px;color:#1864ab;font-size:38px;opacity:0.5;cursor:pointer;&:hover{opacity:1;transform:scale(0.98);}"]);
_c6 = IconContainer;
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "PostForm__SubmitButton",
  componentId: "sc-z6wuxo-6"
})(["all:unset;position:absolute;background-color:#1864ab;color:white;letter-spacing:2px;font-weight:600;font-size:14px;width:70px;height:30px;border-radius:6px;bottom:10px;right:30px;cursor:pointer;opacity:", ";transition:all 0.3s linear;display:flex;justify-content:center;align-items:center;outline:none;&:focus{outline:none;}"], function (props) {
  return props.isAvailablePosting ? 1 : 0.5;
});
_c7 = SubmitButton;
var ImageUploadContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostForm__ImageUploadContainer",
  componentId: "sc-z6wuxo-7"
})(["display:flex;width:50%;"]);
_c8 = ImageUploadContainer;
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostForm__ImageContainer",
  componentId: "sc-z6wuxo-8"
})(["position:relative;"]);
_c9 = ImageContainer;
var Image = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "PostForm__Image",
  componentId: "sc-z6wuxo-9"
})(["width:150px;margin-top:5px;"]);
_c10 = Image;
var ImageDeleteContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostForm__ImageDeleteContainer",
  componentId: "sc-z6wuxo-10"
})(["position:absolute;top:2px;right:2px;color:red;font-size:2px;border:1px solid red;border-radius:50%;padding:1px;opacity:0.7;cursor:pointer;&:hover{opacity:1;transform:scale(0.98);}"]);
_c11 = ImageDeleteContainer;

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

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

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

  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();
    dispatch(_reducers_post__WEBPACK_IMPORTED_MODULE_6__["addPost"]);
    setContent('');
  }, []);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 5
    }
  }, __jsx(FormContainer, {
    onSubmit: onSubmit,
    encType: "multipart/form-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 7
    }
  }, __jsx(FormUpSideContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 9
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 11
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_7__["default"], {
    src: __webpack_require__(/*! ../image/user.png */ "./image/user.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  })), __jsx(ContentsInput, {
    placeholder: isLoggedIn ? "오늘은 어떤 일이 있었나요?" : "로그인 후 사용해주세요.",
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
      lineNumber: 162,
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
      lineNumber: 173,
      columnNumber: 11
    }
  }), __jsx(IconContainer, {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaRegImage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  })), __jsx(SubmitButton, {
    type: "submit",
    isAvailablePosting: isAvailablePosting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, "\uAC8C\uC2DC")), __jsx(ImageUploadContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  }, imagePaths && imagePaths.map(function (path, i) {
    return __jsx(ImageContainer, {
      key: path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
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
        lineNumber: 190,
        columnNumber: 15
      }
    }), __jsx(ImageDeleteContainer, {
      onClick: onClickDeleteImage(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 15
      }
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_5__["IoMdRemove"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 17
      }
    })));
  }))));
};

_s(PostForm, "Fe5idadbm6PTcWjaRMySa10nwyQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"]];
});

_c12 = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "FormContainer");
$RefreshReg$(_c3, "FormUpSideContainer");
$RefreshReg$(_c4, "ProfileImageContainer");
$RefreshReg$(_c5, "ContentsInput");
$RefreshReg$(_c6, "IconContainer");
$RefreshReg$(_c7, "SubmitButton");
$RefreshReg$(_c8, "ImageUploadContainer");
$RefreshReg$(_c9, "ImageContainer");
$RefreshReg$(_c10, "Image");
$RefreshReg$(_c11, "ImageDeleteContainer");
$RefreshReg$(_c12, "PostForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtQ29udGFpbmVyIiwiZm9ybSIsIkZvcm1VcFNpZGVDb250YWluZXIiLCJQcm9maWxlSW1hZ2VDb250YWluZXIiLCJDb250ZW50c0lucHV0IiwiVGV4dEFyZWEiLCJJY29uQ29udGFpbmVyIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJpc0F2YWlsYWJsZVBvc3RpbmciLCJJbWFnZVVwbG9hZENvbnRhaW5lciIsIkltYWdlQ29udGFpbmVyIiwiSW1hZ2UiLCJpbWciLCJJbWFnZURlbGV0ZUNvbnRhaW5lciIsIlBvc3RGb3JtIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJpc0xvZ2dlZEluIiwicG9zdCIsImltYWdlUGF0aHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU3RhdGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsIm9uQ2hhbmdlQ29udGVudCIsInVzZUNhbGxiYWNrIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwidHJpbSIsInNldElzQXZhaWxhYmxlUG9zdGluZyIsImxlbmd0aCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJjdXJyZW50IiwiY2xpY2siLCJvbkNoYW5nZUltYWdlcyIsImltYWdlRm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJjYWxsIiwiZmlsZXMiLCJmIiwiYXBwZW5kIiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhZGRQb3N0IiwicmVxdWlyZSIsInJlc2l6ZSIsIm91dGxpbmUiLCJvdmVyZmxvdyIsIm1hcCIsInBhdGgiLCJpIiwid2lkdGgiLCJvbkNsaWNrRGVsZXRlSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNB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UUFBRUUsS0FBSyxFQUFFO01BQVQsQ0FIVDtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBREYsRUFNRSxNQUFDLG9CQUFEO01BQXNCLE9BQU8sRUFBRUMsa0JBQWtCLENBQUNGLENBQUQsQ0FBakQ7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUNFLE1BQUMseURBQUQ7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQURGLENBTkYsQ0FENEI7RUFBQSxDQUFmLENBRGpCLENBOUJGLENBREYsQ0FERjtBQWlERCxDQXRGRDs7R0FBTTVDLFE7VUFDbUJDLHVELEVBQ0FBLHVELEVBQ05PLHVEOzs7T0FIYlIsUTtBQXdGU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmY5OTkyYTU5OTViMTQ2ODBjYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tICdyZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZSc7XHJcbmltcG9ydCB7IEZhUmVnSW1hZ2UgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IElvTWRSZW1vdmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IHsgYWRkUG9zdCB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCBQcm9maWxlSW1hZ2UgZnJvbSBcIi4vUHJvZmlsZUltYWdlXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybUNvbnRhaW5lciA9IHN0eWxlZC5mb3JtYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZTZlY2YwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybVVwU2lkZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IFByb2ZpbGVJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDU1cHg7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50c0lucHV0ID0gc3R5bGVkKFRleHRBcmVhKWBcclxuICB3aWR0aDogODAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIDpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtMy41cHg7XHJcbiAgcmlnaHQ6IDEwN3B4O1xyXG4gIGNvbG9yOiAjMTg2NGFiO1xyXG4gIGZvbnQtc2l6ZTogMzhweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3VibWl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBhbGw6IHVuc2V0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg2NGFiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5pc0F2YWlsYWJsZVBvc3RpbmcgPyAxIDogMC41KX07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZVVwbG9hZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogNTAlO1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VEZWxldGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDJweDtcclxuICByaWdodDogMnB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFBvc3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaXNMb2dnZWRJbiB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IGltYWdlUGF0aHMgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgb25DaGFuZ2VDb250ZW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnN0IHt0YXJnZXQ6IHt2YWx1ZX19ID0gZTtcclxuICAgIHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSkge1xyXG4gICAgICBzZXRJc0F2YWlsYWJsZVBvc3RpbmcodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCB2YWx1ZS5sZW5ndGggPiA1MDApIHtcclxuICAgICAgc2V0SXNBdmFpbGFibGVQb3N0aW5nKGZhbHNlKTtcclxuICAgIH07XHJcbiAgfSwgW2NvbnRlbnRdKTtcclxuXHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuICBcclxuICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIGYgPT4ge1xyXG4gICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGYpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coaW1hZ2VGb3JtRGF0YSk7XHJcbiAgfSk7XHJcbiAgY29uc3QgW2lzQXZhaWxhYmxlUG9zdGluZywgc2V0SXNBdmFpbGFibGVQb3N0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZGlzcGF0Y2goYWRkUG9zdCk7XHJcbiAgICBzZXRDb250ZW50KCcnKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8Rm9ybUNvbnRhaW5lciBvblN1Ym1pdD17b25TdWJtaXR9IGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XHJcbiAgICAgICAgPEZvcm1VcFNpZGVDb250YWluZXI+XHJcbiAgICAgICAgICA8UHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8UHJvZmlsZUltYWdlIHNyYz17cmVxdWlyZSgnLi4vaW1hZ2UvdXNlci5wbmcnKX0gLz5cclxuICAgICAgICAgIDwvUHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPENvbnRlbnRzSW5wdXQgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpc0xvZ2dlZEluID8gXCLsmKTripjsnYAg7Ja065akIOydvOydtCDsnojsl4jrgpjsmpQ/XCIgOiBcIuuhnOq3uOyduCDtm4Qg7IKs7Jqp7ZW07KO87IS47JqULlwifVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNMb2dnZWRJbiA/IGZhbHNlIDogdHJ1ZX1cclxuICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbnRlbnR9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcmVzaXplOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgICAgcmVmPXtpbWFnZUlucHV0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEljb25Db250YWluZXIgb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT5cclxuICAgICAgICAgICAgPEZhUmVnSW1hZ2UgLz5cclxuICAgICAgICAgIDwvSWNvbkNvbnRhaW5lcj5cclxuICAgICAgICAgIDxTdWJtaXRCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGlzQXZhaWxhYmxlUG9zdGluZz17aXNBdmFpbGFibGVQb3N0aW5nfT5cclxuICAgICAgICAgICAg6rKM7IucXHJcbiAgICAgICAgICA8L1N1Ym1pdEJ1dHRvbj5cclxuICAgICAgICA8L0Zvcm1VcFNpZGVDb250YWluZXI+XHJcbiAgICAgICAgPEltYWdlVXBsb2FkQ29udGFpbmVyPlxyXG4gICAgICAgICAge2ltYWdlUGF0aHMgJiYgaW1hZ2VQYXRocy5tYXAoKHBhdGgsIGkpID0+IChcclxuICAgICAgICAgICAgPEltYWdlQ29udGFpbmVyIGtleT17cGF0aH0+XHJcbiAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgc3JjPXtgJHtwYXRofWB9IFxyXG4gICAgICAgICAgICAgICAgYWx0PXtwYXRofVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW1hZ2VEZWxldGVDb250YWluZXIgb25DbGljaz17b25DbGlja0RlbGV0ZUltYWdlKGkpfT5cclxuICAgICAgICAgICAgICAgIDxJb01kUmVtb3ZlIC8+XHJcbiAgICAgICAgICAgICAgPC9JbWFnZURlbGV0ZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9JbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvSW1hZ2VVcGxvYWRDb250YWluZXI+XHJcbiAgICAgIDwvRm9ybUNvbnRhaW5lcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9