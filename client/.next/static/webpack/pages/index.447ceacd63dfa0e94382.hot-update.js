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
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js");
/* harmony import */ var _ProfileImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProfileImage */ "./components/ProfileImage.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _utils_device__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/device */ "./utils/device.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\components\\PostForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Container = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostForm__Container",
  componentId: "sc-kyqa2e-0"
})(["width:100%;max-height:500px;background-color:white;"]);
_c = Container;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].form.withConfig({
  displayName: "PostForm__Form",
  componentId: "sc-kyqa2e-1"
})(["display:flex;flex-direction:column;width:100%;min-height:120px;border-bottom:10px solid #e6ecf0;padding:10px;"]);
_c2 = Form;
var InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostForm__InputContainer",
  componentId: "sc-kyqa2e-2"
})(["display:flex;"]);
_c3 = InputContainer;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostForm__ProfileImageContainer",
  componentId: "sc-kyqa2e-3"
})(["width:55px;height:55px;margin:0px 15px 0px 5px;border-radius:50px;overflow:hidden;"]);
_c4 = ProfileImageContainer;
var ContentInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "PostForm__ContentInput",
  componentId: "sc-kyqa2e-4"
})(["border:none;font-size:16px;font-family:'Noto Sans KR',sans-serif;min-height:50px;max-height:300px;:disabled{background-color:white;}"]);
_c5 = ContentInput;
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostForm__ButtonContainer",
  componentId: "sc-kyqa2e-5"
})(["display:flex;justify-content:flex-end;height:35px;align-items:center;margin-right:25px;"]);
_c6 = ButtonContainer;
var ImageUploadIcon = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostForm__ImageUploadIcon",
  componentId: "sc-kyqa2e-6"
})(["margin-top:4px;margin-right:6px;color:#1864ab;font-size:39px;opacity:0.5;cursor:pointer;pointer-events:", ";&:hover{opacity:1;transform:scale(0.98);}"], function (props) {
  return props.me ? null : "none";
});
_c7 = ImageUploadIcon;
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.withConfig({
  displayName: "PostForm__SubmitButton",
  componentId: "sc-kyqa2e-7"
})(["width:70px;height:30px;background-color:#1864ab;color:white;letter-spacing:2px;font-weight:500;font-size:16px;border:none;border-radius:6px;cursor:pointer;pointer-events:", ";opacity:", ";transition:all 0.3s linear;display:flex;justify-content:center;align-items:center;"], function (props) {
  return props.me ? null : "none";
}, function (props) {
  return props.isAvailablePosting ? 1 : 0.5;
});
_c8 = SubmitButton;
var ImageUploadContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostForm__ImageUploadContainer",
  componentId: "sc-kyqa2e-8"
})(["display:flex;flex-wrap:wrap;"]);
_c9 = ImageUploadContainer;
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostForm__ImageContainer",
  componentId: "sc-kyqa2e-9"
})(["display:flex;position:relative;margin-left:10px;margin-right:15px;"]);
_c10 = ImageContainer;
var Image = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].img.withConfig({
  displayName: "PostForm__Image",
  componentId: "sc-kyqa2e-10"
})(["width:80px;height:80px;margin-top:5px;@media ", "{width:45px;height:45px;}"], _utils_device__WEBPACK_IMPORTED_MODULE_8__["default"].mobileL);
_c11 = Image;
var ImageDeleteIcon = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostForm__ImageDeleteIcon",
  componentId: "sc-kyqa2e-11"
})(["position:absolute;top:4px;right:1px;color:red;font-size:20px;opacity:0.7;cursor:pointer;&:hover{opacity:1;transform:scale(0.98);}"]);
_c12 = ImageDeleteIcon;

var PostForm = function PostForm() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      addPostImagePaths = _useSelector2.addPostImagePaths,
      addPostDone = _useSelector2.addPostDone;

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
    console.log('image', e.target.files);
    var imageFormData = new FormData();
    [].forEach.call(e.target.files, function (file) {
      imageFormData.append('image', file);
    });
    imageFormData.append('type', 'addPost');
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  }, []);
  var onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (index) {
    return function () {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_IMAGE"],
        data: {
          type: "addPost",
          index: index
        }
      });
    };
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();

    if (!content || !content.trim()) {
      return alert('글을 작성해주세요.');
    }

    ;

    if (content.length > 500) {
      return alert('글자수가 너무 많습니다.');
    }

    ;
    var formData = new FormData();
    addPostImagePaths.forEach(function (path) {
      formData.append('postImages', path);
    });
    formData.append('content', content);
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"],
      data: formData
    });
  }, [content, addPostImagePaths]);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 5
    }
  }, __jsx(Form, {
    onSubmit: onSubmit,
    encType: "multipart/form-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }
  }, __jsx(InputContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 11
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    path: me ? me.profileImagePath : null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
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
      lineNumber: 212,
      columnNumber: 11
    }
  }), __jsx("input", {
    type: "file",
    name: "image",
    multiple: true,
    hidden: true,
    ref: imageInput,
    onChange: onChangeImages,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 9
    }
  })), __jsx(ButtonContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 9
    }
  }, __jsx(ImageUploadIcon, {
    me: me,
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaRegImage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 13
    }
  })), __jsx(SubmitButton, {
    type: "submit",
    me: me,
    isAvailablePosting: isAvailablePosting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 11
    }
  }, "\uAC8C\uC2DC")), __jsx(ImageUploadContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 9
    }
  }, addPostImagePaths && addPostImagePaths.map(function (v, i) {
    return __jsx(ImageContainer, {
      key: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 13
      }
    }, __jsx(Image, {
      src: "http://localhost:3065/postImages/".concat(v),
      alt: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 15
      }
    }), __jsx(ImageDeleteIcon, {
      onClick: onRemoveImage(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 15
      }
    }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdCancel"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 17
      }
    })));
  }))));
};

_s(PostForm, "h0NLj8AONOJRsHrY30eZucxTYJ8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"]];
});

_c13 = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Form");
$RefreshReg$(_c3, "InputContainer");
$RefreshReg$(_c4, "ProfileImageContainer");
$RefreshReg$(_c5, "ContentInput");
$RefreshReg$(_c6, "ButtonContainer");
$RefreshReg$(_c7, "ImageUploadIcon");
$RefreshReg$(_c8, "SubmitButton");
$RefreshReg$(_c9, "ImageUploadContainer");
$RefreshReg$(_c10, "ImageContainer");
$RefreshReg$(_c11, "Image");
$RefreshReg$(_c12, "ImageDeleteIcon");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIklucHV0Q29udGFpbmVyIiwiUHJvZmlsZUltYWdlQ29udGFpbmVyIiwiQ29udGVudElucHV0IiwiVGV4dEFyZWEiLCJCdXR0b25Db250YWluZXIiLCJJbWFnZVVwbG9hZEljb24iLCJwcm9wcyIsIm1lIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwiaXNBdmFpbGFibGVQb3N0aW5nIiwiSW1hZ2VVcGxvYWRDb250YWluZXIiLCJJbWFnZUNvbnRhaW5lciIsIkltYWdlIiwiaW1nIiwiZGV2aWNlIiwibW9iaWxlTCIsIkltYWdlRGVsZXRlSWNvbiIsIlBvc3RGb3JtIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwicG9zdCIsImFkZFBvc3RJbWFnZVBhdGhzIiwiYWRkUG9zdERvbmUiLCJ1c2VTdGF0ZSIsImNvbnRlbnQiLCJzZXRDb250ZW50Iiwic2V0SXNBdmFpbGFibGVQb3N0aW5nIiwidXNlRWZmZWN0Iiwib25DaGFuZ2VDb250ZW50IiwidXNlQ2FsbGJhY2siLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJ0cmltIiwibGVuZ3RoIiwiaW1hZ2VJbnB1dCIsInVzZVJlZiIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2VzIiwiY29uc29sZSIsImxvZyIsImZpbGVzIiwiaW1hZ2VGb3JtRGF0YSIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsImNhbGwiLCJmaWxlIiwiYXBwZW5kIiwidHlwZSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsImRhdGEiLCJvblJlbW92ZUltYWdlIiwiaW5kZXgiLCJSRU1PVkVfSU1BR0UiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJmb3JtRGF0YSIsInBhdGgiLCJBRERfUE9TVF9SRVFVRVNUIiwicHJvZmlsZUltYWdlUGF0aCIsInJlc2l6ZSIsIm91dGxpbmUiLCJvdmVyZmxvdyIsIm1hcCIsInYiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSwyREFBZjtLQUFNRixTO0FBTU4sSUFBTUcsSUFBSSxHQUFHRix5REFBTSxDQUFDRyxJQUFWO0VBQUE7RUFBQTtBQUFBLHFIQUFWO01BQU1ELEk7QUFTTixJQUFNRSxjQUFjLEdBQUdKLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEscUJBQXBCO01BQU1HLGM7QUFJTixJQUFNQyxxQkFBcUIsR0FBR0wseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSwwRkFBM0I7TUFBTUkscUI7QUFRTixJQUFNQyxZQUFZLEdBQUdOLGlFQUFNLENBQUNPLCtEQUFELENBQVQ7RUFBQTtFQUFBO0FBQUEsNElBQWxCO01BQU1ELFk7QUFXTixJQUFNRSxlQUFlLEdBQUdSLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsK0ZBQXJCO01BQU1PLGU7QUFRTixJQUFNQyxlQUFlLEdBQUdULHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsOEpBT0QsVUFBQVMsS0FBSztFQUFBLE9BQUtBLEtBQUssQ0FBQ0MsRUFBTixHQUFXLElBQVgsR0FBa0IsTUFBdkI7QUFBQSxDQVBKLENBQXJCO01BQU1GLGU7QUFjTixJQUFNRyxZQUFZLEdBQUdaLHlEQUFNLENBQUNhLE1BQVY7RUFBQTtFQUFBO0FBQUEsdVJBV0UsVUFBQUgsS0FBSztFQUFBLE9BQUtBLEtBQUssQ0FBQ0MsRUFBTixHQUFXLElBQVgsR0FBa0IsTUFBdkI7QUFBQSxDQVhQLEVBWUwsVUFBQUQsS0FBSztFQUFBLE9BQUtBLEtBQUss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dGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NDdjZWFjZDYzZGZhMGU5NDM4Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEFERF9QT1NUX1JFUVVFU1QsIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgUkVNT1ZFX0lNQUdFIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IFRleHRBcmVhIGZyb20gJ3JlYWN0LXRleHRhcmVhLWF1dG9zaXplJztcclxuaW1wb3J0IFByb2ZpbGVJbWFnZSBmcm9tIFwiLi9Qcm9maWxlSW1hZ2VcIjtcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBGYVJlZ0ltYWdlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBNZENhbmNlbCB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgZGV2aWNlIGZyb20gJy4uL3V0aWxzL2RldmljZSc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAxMjBweDtcclxuICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNlNmVjZjA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5gO1xyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTVweDtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgbWFyZ2luOiAwcHggMTVweCAwcHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRJbnB1dCA9IHN0eWxlZChUZXh0QXJlYSlgXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWY7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICA6ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VVcGxvYWRJY29uID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgY29sb3I6ICMxODY0YWI7XHJcbiAgZm9udC1zaXplOiAzOXB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9pbnRlci1ldmVudHM6ICR7cHJvcHMgPT4gKHByb3BzLm1lID8gbnVsbCA6IFwibm9uZVwiKX07XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg2NGFiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvaW50ZXItZXZlbnRzOiAke3Byb3BzID0+IChwcm9wcy5tZSA/IG51bGwgOiBcIm5vbmVcIil9O1xyXG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmlzQXZhaWxhYmxlUG9zdGluZyA/IDEgOiAwLjUpfTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VVcGxvYWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG5cclxuICBAbWVkaWEgJHtkZXZpY2UubW9iaWxlTH0ge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VEZWxldGVJY29uID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0cHg7XHJcbiAgcmlnaHQ6IDFweDtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgeyBhZGRQb3N0SW1hZ2VQYXRocywgYWRkUG9zdERvbmUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaXNBdmFpbGFibGVQb3N0aW5nLCBzZXRJc0F2YWlsYWJsZVBvc3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFkZFBvc3REb25lKSB7XHJcbiAgICAgIHNldENvbnRlbnQoJycpO1xyXG4gICAgfTtcclxuICB9LCBbYWRkUG9zdERvbmVdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VDb250ZW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnN0IHt0YXJnZXQ6IHt2YWx1ZX19ID0gZTtcclxuICAgIHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSkge1xyXG4gICAgICBzZXRJc0F2YWlsYWJsZVBvc3RpbmcodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCB2YWx1ZS5sZW5ndGggPiA1MDApIHtcclxuICAgICAgc2V0SXNBdmFpbGFibGVQb3N0aW5nKGZhbHNlKTtcclxuICAgIH07XHJcbiAgfSwgW2NvbnRlbnRdKTtcclxuXHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuICBcclxuICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnaW1hZ2UnLCBlLnRhcmdldC5maWxlcyk7XHJcbiAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgW10uZm9yRWFjaC5jYWxsKGUudGFyZ2V0LmZpbGVzLCAoZmlsZSkgPT4ge1xyXG4gICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlKTtcclxuICAgIH0pO1xyXG4gICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoJ3R5cGUnLCAnYWRkUG9zdCcpO1xyXG5cclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YSxcclxuICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25SZW1vdmVJbWFnZSA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfSU1BR0UsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICB0eXBlOiBcImFkZFBvc3RcIixcclxuICAgICAgICBpbmRleDogaW5kZXgsXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCFjb250ZW50IHx8ICFjb250ZW50LnRyaW0oKSApIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfquIDsnYQg7J6R7ISx7ZW07KO87IS47JqULicpXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAoY29udGVudC5sZW5ndGggPiA1MDApIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfquIDsnpDsiJjqsIAg64SI66y0IOunjuyKteuLiOuLpC4nKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGFkZFBvc3RJbWFnZVBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdwb3N0SW1hZ2VzJywgcGF0aCk7XHJcbiAgICB9KTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnY29udGVudCcsIGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhXHJcbiAgICB9KTtcclxuICB9LCBbY29udGVudCwgYWRkUG9zdEltYWdlUGF0aHNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cclxuICAgICAgICA8SW5wdXRDb250YWluZXI+XHJcbiAgICAgICAgICA8UHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8UHJvZmlsZUltYWdlIHBhdGg9eyBtZSA/IG1lLnByb2ZpbGVJbWFnZVBhdGggOiBudWxsIH0gLz5cclxuICAgICAgICAgIDwvUHJvZmlsZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPENvbnRlbnRJbnB1dCBcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e21lID8gXCLsmKTripjsnYAg7Ja065akIOydvOydtCDsnojsl4jrgpjsmpQ/XCIgOiBcIuuhnOq3uOyduCDtm4Qg7J207Jqp7ZW07KO87IS47JqULlwifVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17bWUgPyBmYWxzZSA6IHRydWV9XHJcbiAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb250ZW50fVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHJlc2l6ZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgbmFtZT1cImltYWdlXCJcclxuICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgIHJlZj17aW1hZ2VJbnB1dH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvSW5wdXRDb250YWluZXI+XHJcbiAgICAgICAgPEJ1dHRvbkNvbnRhaW5lcj5cclxuICAgICAgICAgIDxJbWFnZVVwbG9hZEljb24gbWU9e21lfSBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PlxyXG4gICAgICAgICAgICA8RmFSZWdJbWFnZSAvPlxyXG4gICAgICAgICAgPC9JbWFnZVVwbG9hZEljb24+XHJcbiAgICAgICAgICA8U3VibWl0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBtZT17bWV9IGlzQXZhaWxhYmxlUG9zdGluZz17aXNBdmFpbGFibGVQb3N0aW5nfT5cclxuICAgICAgICAgICAg6rKM7IucXHJcbiAgICAgICAgICA8L1N1Ym1pdEJ1dHRvbj5cclxuICAgICAgICA8L0J1dHRvbkNvbnRhaW5lcj5cclxuICAgICAgICA8SW1hZ2VVcGxvYWRDb250YWluZXI+XHJcbiAgICAgICAgICB7YWRkUG9zdEltYWdlUGF0aHMgJiYgYWRkUG9zdEltYWdlUGF0aHMubWFwKCh2LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxJbWFnZUNvbnRhaW5lciBrZXk9e3Z9PlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS9wb3N0SW1hZ2VzLyR7dn1gfSBcclxuICAgICAgICAgICAgICAgIGFsdD17dn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbWFnZURlbGV0ZUljb24gb25DbGljaz17b25SZW1vdmVJbWFnZShpKX0+ICBcclxuICAgICAgICAgICAgICAgIDxNZENhbmNlbCAvPlxyXG4gICAgICAgICAgICAgIDwvSW1hZ2VEZWxldGVJY29uPlxyXG4gICAgICAgICAgICA8L0ltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9JbWFnZVVwbG9hZENvbnRhaW5lcj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=