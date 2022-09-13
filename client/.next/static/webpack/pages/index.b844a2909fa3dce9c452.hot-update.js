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
})(["display:flex;width:100%;min-height:120px;border-bottom:10px solid #e6ecf0;padding:10px;position:relative;"]);
_c2 = Form;
var InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostForm__InputContainer",
  componentId: "sc-kyqa2e-2"
})(["display:flex;width:90%;"]);
_c3 = InputContainer;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostForm__ProfileImageContainer",
  componentId: "sc-kyqa2e-3"
})(["width:55px;height:55px;border-radius:50px;overflow:hidden;float:left;"]);
_c4 = ProfileImageContainer;
var TextAreaContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostForm__TextAreaContainer",
  componentId: "sc-kyqa2e-4"
})(["display:flex;width:100%;margin-left:15px;"]);
_c5 = TextAreaContainer;
var ContentInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "PostForm__ContentInput",
  componentId: "sc-kyqa2e-5"
})(["width:100%;margin-bottom:40px;border:none;font-size:16px;font-family:'Noto Sans KR',sans-serif;:disabled{background-color:white;}"]);
_c6 = ContentInput;
var ImageUploadIcon = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostForm__ImageUploadIcon",
  componentId: "sc-kyqa2e-6"
})(["position:absolute;bottom:-3.5px;right:107px;color:#1864ab;font-size:38px;opacity:0.5;cursor:pointer;pointer-events:", ";&:hover{opacity:1;transform:scale(0.98);}"], function (props) {
  return props.me ? null : "none";
});
_c7 = ImageUploadIcon;
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.withConfig({
  displayName: "PostForm__SubmitButton",
  componentId: "sc-kyqa2e-7"
})(["all:unset;position:absolute;background-color:#1864ab;color:white;letter-spacing:2px;font-weight:500;font-size:16px;width:70px;height:30px;border-radius:6px;bottom:12px;right:30px;cursor:pointer;pointer-events:", ";opacity:", ";transition:all 0.3s linear;display:flex;justify-content:center;align-items:center;outline:none;"], function (props) {
  return props.me ? null : "none";
}, function (props) {
  return props.isAvailablePosting ? 1 : 0.5;
});
_c8 = SubmitButton;
var ImageUploadContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostForm__ImageUploadContainer",
  componentId: "sc-kyqa2e-8"
})(["display:flex;width:50%;"]);
_c9 = ImageUploadContainer;
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostForm__ImageContainer",
  componentId: "sc-kyqa2e-9"
})(["display:inline-block;margin-right:15px;position:relative;"]);
_c10 = ImageContainer;
var Image = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].img.withConfig({
  displayName: "PostForm__Image",
  componentId: "sc-kyqa2e-10"
})(["width:80px;height:80px;margin-top:5px;@media ", "{width:40px;height:40px;}"], _utils_device__WEBPACK_IMPORTED_MODULE_8__["default"].mobileL);
_c11 = Image;
var ImageDeleteIcon = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostForm__ImageDeleteIcon",
  componentId: "sc-kyqa2e-11"
})(["position:absolute;top:4px;right:1px;color:red;font-size:20px;opacity:0.7;cursor:pointer;&:hover{opacity:1;transform:scale(0.98);}"]);
_c12 = ImageDeleteIcon;

var PostForm = function PostForm() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (state) {
    return state.post;
  }),
      addPostImagePaths = _useSelector2.addPostImagePaths,
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
      lineNumber: 208,
      columnNumber: 5
    }
  }, __jsx(Form, {
    onSubmit: onSubmit,
    encType: "multipart/form-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    path: me ? me.profileImagePath : null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  })), __jsx(InputContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 9
    }
  }, __jsx(TextAreaContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 11
    }
  }, __jsx(ContentInput, {
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
      lineNumber: 215,
      columnNumber: 13
    }
  })), __jsx("input", {
    type: "file",
    name: "image",
    multiple: true,
    hidden: true,
    ref: imageInput,
    onChange: onChangeImages,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  })), __jsx(ImageUploadIcon, {
    me: me,
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 9
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaRegImage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }
  })), __jsx(SubmitButton, {
    type: "submit",
    me: me,
    isAvailablePosting: isAvailablePosting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 9
    }
  }, "\uAC8C\uC2DC"), __jsx(ImageUploadContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 9
    }
  }, addPostImagePaths && addPostImagePaths.map(function (v, i) {
    return __jsx(ImageContainer, {
      key: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 13
      }
    }, __jsx(Image, {
      src: "http://localhost:3065/postImages/".concat(v),
      alt: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 15
      }
    }), __jsx(ImageDeleteIcon, {
      onClick: onRemoveImage(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 15
      }
    }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdCancel"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 17
      }
    })));
  }))));
};

_s(PostForm, "2BORhj/k6NCh16T/6c01bNj0h0Q=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"]];
});

_c13 = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Form");
$RefreshReg$(_c3, "InputContainer");
$RefreshReg$(_c4, "ProfileImageContainer");
$RefreshReg$(_c5, "TextAreaContainer");
$RefreshReg$(_c6, "ContentInput");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIklucHV0Q29udGFpbmVyIiwiUHJvZmlsZUltYWdlQ29udGFpbmVyIiwiVGV4dEFyZWFDb250YWluZXIiLCJDb250ZW50SW5wdXQiLCJUZXh0QXJlYSIsIkltYWdlVXBsb2FkSWNvbiIsInByb3BzIiwibWUiLCJTdWJtaXRCdXR0b24iLCJidXR0b24iLCJpc0F2YWlsYWJsZVBvc3RpbmciLCJJbWFnZVVwbG9hZENvbnRhaW5lciIsIkltYWdlQ29udGFpbmVyIiwiSW1hZ2UiLCJpbWciLCJkZXZpY2UiLCJtb2JpbGVMIiwiSW1hZ2VEZWxldGVJY29uIiwiUG9zdEZvcm0iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsInBvc3QiLCJhZGRQb3N0SW1hZ2VQYXRocyIsImFkZFBvc3REb25lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJzZXRJc0F2YWlsYWJsZVBvc3RpbmciLCJ1c2VFZmZlY3QiLCJvbkNoYW5nZUNvbnRlbnQiLCJ1c2VDYWxsYmFjayIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInRyaW0iLCJsZW5ndGgiLCJpbWFnZUlucHV0IiwidXNlUmVmIiwib25DbGlja0ltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwib25DaGFuZ2VJbWFnZXMiLCJjb25zb2xlIiwibG9nIiwiZmlsZXMiLCJpbWFnZUZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiY2FsbCIsImZpbGUiLCJhcHBlbmQiLCJ0eXBlIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiZGF0YSIsIm9uUmVtb3ZlSW1hZ2UiLCJpbmRleCIsIlJFTU9WRV9JTUFHRSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsImZvcm1EYXRhIiwicGF0aCIsIkFERF9QT1NUX1JFUVVFU1QiLCJwcm9maWxlSW1hZ2VQYXRoIiwicmVzaXplIiwib3V0bGluZSIsIm92ZXJmbG93IiwibWFwIiwidiIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLDJEQUFmO0tBQU1GLFM7QUFNTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNHLElBQVY7RUFBQTtFQUFBO0FBQUEsaUhBQVY7TUFBTUQsSTtBQVNOLElBQU1FLGNBQWMsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSwrQkFBcEI7TUFBTUcsYztBQUtOLElBQU1DLHFCQUFxQixHQUFHTCx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLDZFQUEzQjtNQUFNSSxxQjtBQVFOLElBQU1DLGlCQUFpQixHQUFHTix5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLGlEQUF2QjtNQUFNSyxpQjtBQU1OLElBQU1DLFlBQVksR0FBR1AsaUVBQU0sQ0FBQ1EsK0RBQUQsQ0FBVDtFQUFBO0VBQUE7QUFBQSx5SUFBbEI7TUFBTUQsWTtBQVdOLElBQU1FLGVBQWUsR0FBR1QseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSwwS0FRRCxVQUFBUyxLQUFLO0VBQUEsT0FBS0EsS0FBSyxDQUFDQyxFQUFOLEdBQVcsSUFBWCxHQUFrQixNQUF2QjtBQUFBLENBUkosQ0FBckI7TUFBTUYsZTtBQWVOLElBQU1HLFlBQVksR0FBR1oseURBQU0sQ0FBQ2EsTUFBVjtFQUFBO0VBQUE7QUFBQSwyVUFjRSxVQUFBSCxLQUFLO0VBQUEsT0FBS0EsS0FBSyxDQUFDQyxFQUFOLEdBQVcsSUFBWCxHQUFrQixNQUF2QjtBQUFBLENBZFAsRUFlTCxVQUFBRCxLQUFLO0VBQUEsT0FBS0Es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aWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjg0NGEyOTA5ZmEzZGNlOWM0NTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9SRVFVRVNULCBVUExPQURfSU1BR0VTX1JFUVVFU1QsIFJFTU9WRV9JTUFHRSB9IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3N0XCI7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tICdyZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZSc7XHJcbmltcG9ydCBQcm9maWxlSW1hZ2UgZnJvbSBcIi4vUHJvZmlsZUltYWdlXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRmFSZWdJbWFnZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgTWRDYW5jZWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuaW1wb3J0IGRldmljZSBmcm9tICcuLi91dGlscy9kZXZpY2UnO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuYDtcclxuXHJcbmNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2U2ZWNmMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbmA7XHJcblxyXG5jb25zdCBQcm9maWxlSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGhlaWdodDogNTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbmA7XHJcblxyXG5jb25zdCBUZXh0QXJlYUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRJbnB1dCA9IHN0eWxlZChUZXh0QXJlYSlgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zIEtSJywgc2Fucy1zZXJpZjtcclxuICA6ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VVcGxvYWRJY29uID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtMy41cHg7XHJcbiAgcmlnaHQ6IDEwN3B4O1xyXG4gIGNvbG9yOiAjMTg2NGFiO1xyXG4gIGZvbnQtc2l6ZTogMzhweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvaW50ZXItZXZlbnRzOiAke3Byb3BzID0+IChwcm9wcy5tZSA/IG51bGwgOiBcIm5vbmVcIil9O1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3VibWl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBhbGw6IHVuc2V0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg2NGFiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm90dG9tOiAxMnB4O1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb2ludGVyLWV2ZW50czogJHtwcm9wcyA9PiAocHJvcHMubWUgPyBudWxsIDogXCJub25lXCIpfTtcclxuICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5pc0F2YWlsYWJsZVBvc3RpbmcgPyAxIDogMC41KX07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VVcGxvYWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDUwJTtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG5cclxuICBAbWVkaWEgJHtkZXZpY2UubW9iaWxlTH0ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VEZWxldGVJY29uID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0cHg7XHJcbiAgcmlnaHQ6IDFweDtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUG9zdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCB7IGFkZFBvc3RJbWFnZVBhdGhzLCBhZGRQb3N0RG9uZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbaXNBdmFpbGFibGVQb3N0aW5nLCBzZXRJc0F2YWlsYWJsZVBvc3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFkZFBvc3REb25lKSB7XHJcbiAgICAgIHNldENvbnRlbnQoJycpO1xyXG4gICAgfTtcclxuICB9LCBbYWRkUG9zdERvbmVdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VDb250ZW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnN0IHt0YXJnZXQ6IHt2YWx1ZX19ID0gZTtcclxuICAgIHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSkge1xyXG4gICAgICBzZXRJc0F2YWlsYWJsZVBvc3RpbmcodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCB2YWx1ZS5sZW5ndGggPiA1MDApIHtcclxuICAgICAgc2V0SXNBdmFpbGFibGVQb3N0aW5nKGZhbHNlKTtcclxuICAgIH07XHJcbiAgfSwgW2NvbnRlbnRdKTtcclxuXHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuICBcclxuICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnaW1hZ2UnLCBlLnRhcmdldC5maWxlcyk7XHJcbiAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmaWxlKSA9PiB7XHJcbiAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGZpbGUpO1xyXG4gICAgfSk7XHJcbiAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZCgndHlwZScsICdhZGRQb3N0Jyk7XHJcblxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICBkYXRhOiBpbWFnZUZvcm1EYXRhLFxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblJlbW92ZUltYWdlID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9JTUFHRSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHR5cGU6IFwiYWRkUG9zdFwiLFxyXG4gICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIWNvbnRlbnQgfHwgIWNvbnRlbnQudHJpbSgpICkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ+q4gOydhCDsnpHshLHtlbTso7zshLjsmpQuJylcclxuICAgIH07XHJcbiAgICBcclxuICAgIGlmIChjb250ZW50Lmxlbmd0aCA+IDUwMCkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ+q4gOyekOyImOqwgCDrhIjrrLQg66eO7Iq164uI64ukLicpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgYWRkUG9zdEltYWdlUGF0aHMuZm9yRWFjaCgocGF0aCkgPT4ge1xyXG4gICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Bvc3RJbWFnZXMnLCBwYXRoKTtcclxuICAgIH0pO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdjb250ZW50JywgY29udGVudCk7XHJcblxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfUkVRVUVTVCxcclxuICAgICAgZGF0YTogZm9ybURhdGFcclxuICAgIH0pO1xyXG4gIH0sIFtjb250ZW50LCBhZGRQb3N0SW1hZ2VQYXRoc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxyXG4gICAgICAgIDxQcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgICA8UHJvZmlsZUltYWdlIHBhdGg9eyBtZSA/IG1lLnByb2ZpbGVJbWFnZVBhdGggOiBudWxsIH0gLz5cclxuICAgICAgICA8L1Byb2ZpbGVJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICA8SW5wdXRDb250YWluZXI+XHJcbiAgICAgICAgICA8VGV4dEFyZWFDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxDb250ZW50SW5wdXQgXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e21lID8gXCLsmKTripjsnYAg7Ja065akIOydvOydtCDsnojsl4jrgpjsmpQ/XCIgOiBcIuuhnOq3uOyduCDtm4Qg7J207Jqp7ZW07KO87IS47JqULlwifVxyXG4gICAgICAgICAgICAgIGRpc2FibGVkPXttZSA/IGZhbHNlIDogdHJ1ZX1cclxuICAgICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb250ZW50fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICByZXNpemU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9UZXh0QXJlYUNvbnRhaW5lcj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICByZWY9e2ltYWdlSW5wdXR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgIDwvSW5wdXRDb250YWluZXI+XHJcbiAgICAgICAgPEltYWdlVXBsb2FkSWNvbiBtZT17bWV9IG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+XHJcbiAgICAgICAgICA8RmFSZWdJbWFnZSAvPlxyXG4gICAgICAgIDwvSW1hZ2VVcGxvYWRJY29uPlxyXG4gICAgICAgIDxTdWJtaXRCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG1lPXttZX0gaXNBdmFpbGFibGVQb3N0aW5nPXtpc0F2YWlsYWJsZVBvc3Rpbmd9PlxyXG4gICAgICAgICAg6rKM7IucXHJcbiAgICAgICAgPC9TdWJtaXRCdXR0b24+XHJcbiAgICAgICAgPEltYWdlVXBsb2FkQ29udGFpbmVyPlxyXG4gICAgICAgICAge2FkZFBvc3RJbWFnZVBhdGhzICYmIGFkZFBvc3RJbWFnZVBhdGhzLm1hcCgodiwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8SW1hZ2VDb250YWluZXIga2V5PXt2fT5cclxuICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvcG9zdEltYWdlcy8ke3Z9YH0gXHJcbiAgICAgICAgICAgICAgICBhbHQ9e3Z9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW1hZ2VEZWxldGVJY29uIG9uQ2xpY2s9e29uUmVtb3ZlSW1hZ2UoaSl9PlxyXG4gICAgICAgICAgICAgICAgPE1kQ2FuY2VsIC8+XHJcbiAgICAgICAgICAgICAgPC9JbWFnZURlbGV0ZUljb24+XHJcbiAgICAgICAgICAgIDwvSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0ltYWdlVXBsb2FkQ29udGFpbmVyPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdEZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==