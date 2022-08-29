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
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _ProfileImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProfileImage */ "./components/ProfileImage.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\bluejay\\client\\components\\PostForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostForm__Container",
  componentId: "sc-z6wuxo-0"
})(["width:100%;max-height:500px;"]);
_c = Container;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "PostForm__Form",
  componentId: "sc-z6wuxo-1"
})(["width:100%;min-height:120px;border-bottom:5px solid #e6ecf0;padding:10px;position:relative;"]);
_c2 = Form;
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
var ContentInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "PostForm__ContentInput",
  componentId: "sc-z6wuxo-4"
})(["width:80%;border:none;font-size:16px;min-height:50px;max-height:300px;margin-bottom:50px;:disabled{background-color:white;}"]);
_c5 = ContentInput;
var IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostForm__IconContainer",
  componentId: "sc-z6wuxo-5"
})(["position:absolute;bottom:-3.5px;right:107px;color:#1864ab;font-size:38px;opacity:0.5;cursor:pointer;&:hover{opacity:1;transform:scale(0.98);}"]);
_c6 = IconContainer;
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "PostForm__SubmitButton",
  componentId: "sc-z6wuxo-6"
})(["all:unset;position:absolute;background-color:#1864ab;color:white;letter-spacing:2px;font-weight:600;font-size:14px;width:70px;height:30px;border-radius:6px;bottom:10px;right:30px;cursor:pointer;opacity:", ";transition:all 0.3s linear;display:flex;justify-content:center;align-items:center;outline:none;"], function (props) {
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
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      imagePaths = _useSelector2.imagePaths,
      addPostDone = _useSelector2.addPostDone;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      content = _useState[0],
      setContent = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isAvailablePosting = _useState2[0],
      setIsAvailablePosting = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (addPostDone) {
      setContent('');
    }

    ;
  }, [addPostDone]);
  var onChangeContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    var value = e.target.value;
    X;
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
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();
    dispatch(Object(_reducers_post__WEBPACK_IMPORTED_MODULE_4__["addPost"])(content));
  }, [content]);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 5
    }
  }, __jsx(Form, {
    onSubmit: onSubmit,
    encType: "multipart/form-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }
  }, __jsx(FormUpSideContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 9
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 11
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: __webpack_require__(/*! ../image/user.png */ "./image/user.png"),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  })), __jsx(ContentInput, {
    placeholder: me ? "오늘은 어떤 일이 있었나요?" : "로그인 후 이용해주세요.",
    disabled: me ? false : true,
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
      lineNumber: 165,
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
      lineNumber: 176,
      columnNumber: 11
    }
  }), __jsx(IconContainer, {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaRegImage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  })), __jsx(SubmitButton, {
    type: "submit",
    isAvailablePosting: isAvailablePosting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 11
    }
  }, "\uAC8C\uC2DC")), __jsx(ImageUploadContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  }, imagePaths && imagePaths.map(function (path, i) {
    return __jsx(ImageContainer, {
      key: path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
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
        lineNumber: 193,
        columnNumber: 15
      }
    }), __jsx(ImageDeleteContainer, {
      onClick: onClickDeleteImage(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 15
      }
    }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoMdRemove"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 17
      }
    })));
  }))));
};

_s(PostForm, "pXj4HfN+k9np701QR7+iDtqi+1Y=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"]];
});

_c12 = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Form");
$RefreshReg$(_c3, "FormUpSideContainer");
$RefreshReg$(_c4, "ProfileImageContainer");
$RefreshReg$(_c5, "ContentInput");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIkZvcm1VcFNpZGVDb250YWluZXIiLCJQcm9maWxlSW1hZ2VDb250YWluZXIiLCJDb250ZW50SW5wdXQiLCJUZXh0QXJlYSIsIkljb25Db250YWluZXIiLCJTdWJtaXRCdXR0b24iLCJidXR0b24iLCJwcm9wcyIsImlzQXZhaWxhYmxlUG9zdGluZyIsIkltYWdlVXBsb2FkQ29udGFpbmVyIiwiSW1hZ2VDb250YWluZXIiLCJJbWFnZSIsImltZyIsIkltYWdlRGVsZXRlQ29udGFpbmVyIiwiUG9zdEZvcm0iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwicG9zdCIsImltYWdlUGF0aHMiLCJhZGRQb3N0RG9uZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImNvbnRlbnQiLCJzZXRDb250ZW50Iiwic2V0SXNBdmFpbGFibGVQb3N0aW5nIiwidXNlRWZmZWN0Iiwib25DaGFuZ2VDb250ZW50IiwidXNlQ2FsbGJhY2siLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJYIiwidHJpbSIsImxlbmd0aCIsImltYWdlSW5wdXQiLCJ1c2VSZWYiLCJvbkNsaWNrSW1hZ2VVcGxvYWQiLCJjdXJyZW50IiwiY2xpY2siLCJvbkNoYW5nZUltYWdlcyIsImltYWdlRm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJjYWxsIiwiZmlsZXMiLCJmIiwiYXBwZW5kIiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhZGRQb3N0IiwicmVxdWlyZSIsInJlc2l6ZSIsIm91dGxpbmUiLCJvdmVyZmxvdyIsIm1hcCIsInBhdGgiLCJpIiwid2lkdGgiLCJvbkNsaWNrRGVsZXRlSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFELEVBQU9DLENBQVA7SUFBQSxPQUM1QixNQUFDLGNBQUQ7TUFBZ0IsR0FBRyxFQUFFRCxJQUFyQjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQ0UsTUFBQyxLQUFEO01BQ0UsR0FBRyxZQUFLQSxJQUFMLENBREw7TUFFRSxHQUFHLEVBQUVBLElBRlA7TUFHRSxLQUFLLEVBQUU7UUFBQ0UsS0FBSyxFQUFFO01BQVIsQ0FIVDtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBREYsRUFNRSxNQUFDLG9CQUFEO01BQXNCLE9BQU8sRUFBRUMsa0JBQWtCLENBQUNGLENBQUQsQ0FBakQ7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUNFLE1BQUMseURBQUQ7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQURGLENBTkYsQ0FENEI7RUFBQSxDQUFmLENBRGpCLENBOUJGLENBREYsQ0FERjtBQWlERCxDQTVGRDs7R0FBTS9DLFE7VUFDV0MsdUQsRUFDcUJBLHVELEVBQ25CUSx1RDs7O09BSGJULFE7QUE4RlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEzYzhiMGY0ZGJmZTc2ZDU0ZmJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tICdyZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZSc7XHJcbmltcG9ydCB7IGFkZFBvc3QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgUHJvZmlsZUltYWdlIGZyb20gXCIuL1Byb2ZpbGVJbWFnZVwiO1xyXG5pbXBvcnQgeyBGYVJlZ0ltYWdlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBJb01kUmVtb3ZlIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZTZlY2YwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybVVwU2lkZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmNvbnN0IFByb2ZpbGVJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDU1cHg7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50SW5wdXQgPSBzdHlsZWQoVGV4dEFyZWEpYFxyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEljb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IC0zLjVweDtcclxuICByaWdodDogMTA3cHg7XHJcbiAgY29sb3I6ICMxODY0YWI7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGFsbDogdW5zZXQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODY0YWI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBib3R0b206IDEwcHg7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmlzQXZhaWxhYmxlUG9zdGluZyA/IDEgOiAwLjUpfTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZVVwbG9hZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogNTAlO1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VEZWxldGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDJweDtcclxuICByaWdodDogMnB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFBvc3RGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgeyBpbWFnZVBhdGhzLCBhZGRQb3N0RG9uZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaXNBdmFpbGFibGVQb3N0aW5nLCBzZXRJc0F2YWlsYWJsZVBvc3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFkZFBvc3REb25lKSB7XHJcbiAgICAgIHNldENvbnRlbnQoJycpO1xyXG4gICAgfTtcclxuICB9LCBbYWRkUG9zdERvbmVdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VDb250ZW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnN0IHt0YXJnZXQ6IHt2YWx1ZX19ID0gZTtYXHJcbiAgICBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmICh2YWx1ZS50cmltKCkpIHtcclxuICAgICAgc2V0SXNBdmFpbGFibGVQb3N0aW5nKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPT09IDAgfHwgdmFsdWUubGVuZ3RoID4gNTAwKSB7XHJcbiAgICAgIHNldElzQXZhaWxhYmxlUG9zdGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtjb250ZW50XSk7XHJcblxyXG4gIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcbiAgXHJcbiAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKGUudGFyZ2V0LmZpbGVzLCBmID0+IHtcclxuICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBmKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGltYWdlRm9ybURhdGEpO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBkaXNwYXRjaChhZGRQb3N0KGNvbnRlbnQpKTtcclxuICB9LCBbY29udGVudF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxyXG4gICAgICAgIDxGb3JtVXBTaWRlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPFByb2ZpbGVJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFByb2ZpbGVJbWFnZSBzcmM9e3JlcXVpcmUoJy4uL2ltYWdlL3VzZXIucG5nJyl9IC8+XHJcbiAgICAgICAgICA8L1Byb2ZpbGVJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICAgIDxDb250ZW50SW5wdXQgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXttZSA/IFwi7Jik64qY7J2AIOyWtOuWpCDsnbzsnbQg7J6I7JeI64KY7JqUP1wiIDogXCLroZzqt7jsnbgg7ZuEIOydtOyaqe2VtOyjvOyEuOyalC5cIn1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e21lID8gZmFsc2UgOiB0cnVlfVxyXG4gICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29udGVudH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICByZXNpemU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICByZWY9e2ltYWdlSW5wdXR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8SWNvbkNvbnRhaW5lciBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PlxyXG4gICAgICAgICAgICA8RmFSZWdJbWFnZSAvPlxyXG4gICAgICAgICAgPC9JY29uQ29udGFpbmVyPlxyXG4gICAgICAgICAgPFN1Ym1pdEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaXNBdmFpbGFibGVQb3N0aW5nPXtpc0F2YWlsYWJsZVBvc3Rpbmd9PlxyXG4gICAgICAgICAgICDqsozsi5xcclxuICAgICAgICAgIDwvU3VibWl0QnV0dG9uPlxyXG4gICAgICAgIDwvRm9ybVVwU2lkZUNvbnRhaW5lcj5cclxuICAgICAgICA8SW1hZ2VVcGxvYWRDb250YWluZXI+XHJcbiAgICAgICAgICB7aW1hZ2VQYXRocyAmJiBpbWFnZVBhdGhzLm1hcCgocGF0aCwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8SW1hZ2VDb250YWluZXIga2V5PXtwYXRofT5cclxuICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Ake3BhdGh9YH0gXHJcbiAgICAgICAgICAgICAgICBhbHQ9e3BhdGh9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjUwcHhcIn19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW1hZ2VEZWxldGVDb250YWluZXIgb25DbGljaz17b25DbGlja0RlbGV0ZUltYWdlKGkpfT5cclxuICAgICAgICAgICAgICAgIDxJb01kUmVtb3ZlIC8+XHJcbiAgICAgICAgICAgICAgPC9JbWFnZURlbGV0ZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9JbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvSW1hZ2VVcGxvYWRDb250YWluZXI+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9