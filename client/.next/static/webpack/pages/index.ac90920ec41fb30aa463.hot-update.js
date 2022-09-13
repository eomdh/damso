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
})(["width:100%;min-height:120px;border-bottom:10px solid #e6ecf0;padding:10px;position:relative;"]);
_c2 = Form;
var InputContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostForm__InputContainer",
  componentId: "sc-kyqa2e-2"
})(["display:flex;width:100%;"]);
_c3 = InputContainer;
var ProfileImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostForm__ProfileImageContainer",
  componentId: "sc-kyqa2e-3"
})(["width:55px;height:55px;margin:0px 20px 0px 10px;border-radius:50px;overflow:hidden;"]);
_c4 = ProfileImageContainer;
var ContentInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_3__["default"]).withConfig({
  displayName: "PostForm__ContentInput",
  componentId: "sc-kyqa2e-4"
})(["width:80%;height:200px;border:none;font-size:16px;min-height:50px;max-height:300px;margin-bottom:50px;:disabled{background-color:white;}"]);
_c5 = ContentInput;
var ImageUploadIcon = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostForm__ImageUploadIcon",
  componentId: "sc-kyqa2e-5"
})(["position:absolute;bottom:-3.5px;right:107px;color:#1864ab;font-size:38px;opacity:0.5;cursor:pointer;pointer-events:", ";&:hover{opacity:1;transform:scale(0.98);}"], function (props) {
  return props.me ? null : "none";
});
_c6 = ImageUploadIcon;
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.withConfig({
  displayName: "PostForm__SubmitButton",
  componentId: "sc-kyqa2e-6"
})(["all:unset;position:absolute;background-color:#1864ab;color:white;letter-spacing:2px;font-weight:600;font-size:14px;width:70px;height:30px;border-radius:6px;bottom:10px;right:30px;cursor:pointer;pointer-events:", ";opacity:", ";transition:all 0.3s linear;display:flex;justify-content:center;align-items:center;outline:none;"], function (props) {
  return props.me ? null : "none";
}, function (props) {
  return props.isAvailablePosting ? 1 : 0.5;
});
_c7 = SubmitButton;
var ImageUploadContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostForm__ImageUploadContainer",
  componentId: "sc-kyqa2e-7"
})(["display:flex;width:50%;"]);
_c8 = ImageUploadContainer;
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostForm__ImageContainer",
  componentId: "sc-kyqa2e-8"
})(["margin-right:15px;position:relative;"]);
_c9 = ImageContainer;
var Image = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].img.withConfig({
  displayName: "PostForm__Image",
  componentId: "sc-kyqa2e-9"
})(["width:80px;height:80px;margin-top:5px;@media ", "{width:40px;height:40px;}"], _utils_device__WEBPACK_IMPORTED_MODULE_8__["default"].mobileL);
_c10 = Image;
var ImageDeleteIcon = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostForm__ImageDeleteIcon",
  componentId: "sc-kyqa2e-10"
})(["position:absolute;top:4px;right:1px;color:red;font-size:20px;opacity:0.7;cursor:pointer;&:hover{opacity:1;transform:scale(0.98);}"]);
_c11 = ImageDeleteIcon;

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
    imageFormData.append('update', false);
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  });
  var onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (index) {
    return function () {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_IMAGE"],
        data: index
      });
    };
  });
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
    imagePaths.forEach(function (path) {
      formData.append('postImages', path);
    });
    formData.append('content', content);
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"],
      data: formData
    });
  }, [content, imagePaths]);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 5
    }
  }, __jsx(Form, {
    onSubmit: onSubmit,
    encType: "multipart/form-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 7
    }
  }, __jsx(InputContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 9
    }
  }, __jsx(ProfileImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 11
    }
  }, __jsx(_ProfileImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    path: me ? me.profileImagePath : null,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
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
      lineNumber: 205,
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
      lineNumber: 216,
      columnNumber: 11
    }
  }), __jsx(ImageUploadIcon, {
    me: me,
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaRegImage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }
  })), __jsx(SubmitButton, {
    type: "submit",
    me: me,
    isAvailablePosting: isAvailablePosting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 11
    }
  }, "\uAC8C\uC2DC")), __jsx(ImageUploadContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 9
    }
  }, imagePaths && imagePaths.map(function (v, i) {
    return __jsx(ImageContainer, {
      key: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 13
      }
    }, __jsx(Image, {
      src: "http://localhost:3065/postImages/".concat(v),
      alt: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 15
      }
    }), __jsx(ImageDeleteIcon, {
      onClick: onRemoveImage(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 15
      }
    }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdCancel"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 17
      }
    })));
  }))));
};

_s(PostForm, "sKqut4E/qha/rMGePeyoUN+smm8=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"]];
});

_c12 = PostForm;
/* harmony default export */ __webpack_exports__["default"] = (PostForm);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Form");
$RefreshReg$(_c3, "InputContainer");
$RefreshReg$(_c4, "ProfileImageContainer");
$RefreshReg$(_c5, "ContentInput");
$RefreshReg$(_c6, "ImageUploadIcon");
$RefreshReg$(_c7, "SubmitButton");
$RefreshReg$(_c8, "ImageUploadContainer");
$RefreshReg$(_c9, "ImageContainer");
$RefreshReg$(_c10, "Image");
$RefreshReg$(_c11, "ImageDeleteIcon");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIklucHV0Q29udGFpbmVyIiwiUHJvZmlsZUltYWdlQ29udGFpbmVyIiwiQ29udGVudElucHV0IiwiVGV4dEFyZWEiLCJJbWFnZVVwbG9hZEljb24iLCJwcm9wcyIsIm1lIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwiaXNBdmFpbGFibGVQb3N0aW5nIiwiSW1hZ2VVcGxvYWRDb250YWluZXIiLCJJbWFnZUNvbnRhaW5lciIsIkltYWdlIiwiaW1nIiwiZGV2aWNlIiwibW9iaWxlTCIsIkltYWdlRGVsZXRlSWNvbiIsIlBvc3RGb3JtIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJwb3N0IiwiaW1hZ2VQYXRocyIsImFkZFBvc3REb25lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVN0YXRlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJzZXRJc0F2YWlsYWJsZVBvc3RpbmciLCJ1c2VFZmZlY3QiLCJvbkNoYW5nZUNvbnRlbnQiLCJ1c2VDYWxsYmFjayIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInRyaW0iLCJsZW5ndGgiLCJpbWFnZUlucHV0IiwidXNlUmVmIiwib25DbGlja0ltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwib25DaGFuZ2VJbWFnZXMiLCJjb25zb2xlIiwibG9nIiwiZmlsZXMiLCJpbWFnZUZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiY2FsbCIsImZpbGUiLCJhcHBlbmQiLCJ0eXBlIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiZGF0YSIsIm9uUmVtb3ZlSW1hZ2UiLCJpbmRleCIsIlJFTU9WRV9JTUFHRSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsImZvcm1EYXRhIiwicGF0aCIsIkFERF9QT1NUX1JFUVVFU1QiLCJwcm9maWxlSW1hZ2VQYXRoIiwicmVzaXplIiwib3V0bGluZSIsIm92ZXJmbG93IiwibWFwIiwidiIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLDJEQUFmO0tBQU1GLFM7QUFNTixJQUFNRyxJQUFJLEdBQUdGLHlEQUFNLENBQUNHLElBQVY7RUFBQTtFQUFBO0FBQUEsb0dBQVY7TUFBTUQsSTtBQVFOLElBQU1FLGNBQWMsR0FBR0oseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxnQ0FBcEI7TUFBTUcsYztBQUtOLElBQU1DLHFCQUFxQixHQUFHTCx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLDJGQUEzQjtNQUFNSSxxQjtBQVFOLElBQU1DLFlBQVksR0FBR04saUVBQU0sQ0FBQ08sK0RBQUQsQ0FBVDtFQUFBO0VBQUE7QUFBQSxnSkFBbEI7TUFBTUQsWTtBQWFOLElBQU1FLGVBQWUsR0FBR1IseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSwwS0FRRCxVQUFBUSxLQUFLO0VBQUEsT0FBS0EsS0FBSyxDQUFDQyxFQUFOLEdBQVcsSUFBWCxHQUFrQixNQUF2QjtBQUFBLENBUkosQ0FBckI7TUFBTUYsZTtBQWVOLElBQU1HLFlBQVksR0FBR1gseURBQU0sQ0FBQ1ksTUFBVjtFQUFBO0VBQUE7QUFBQSwyVUFjRSxVQUFBSCxLQUFLO0VBQUEsT0FBS0EsS0FBSyxDQUFDQyxFQUFOLEdBQVcsSUFBWCxHQUFrQixNQUF2QjtBQUFBLENBZFAsRUFlTCxVQUFBRCxLQUFLO0VBQUEsT0FBS0EsS0FBSyxDQUFDSSxrQkFBTixHQUEyQixDQUEzQixHQUErQixHQUFwQztBQUFBLENBZkEsQ0FBbEI7TUFBTUYsWTtBQXVCTixJQUFNRyxvQkFBb0IsR0FBR2QseURBQU0sQ0FB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UUFBbkI7SUFBNEIsRUFBRSxFQUFFbEMsRUFBaEM7SUFBb0Msa0JBQWtCLEVBQUVHLGtCQUF4RDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGtCQTFCRixDQURGLEVBK0JFLE1BQUMsb0JBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNHYSxVQUFVLElBQUlBLFVBQVUsQ0FBQytDLEdBQVgsQ0FBZSxVQUFDQyxDQUFELEVBQUlDLENBQUo7SUFBQSxPQUM1QixNQUFDLGNBQUQ7TUFBZ0IsR0FBRyxFQUFFRCxDQUFyQjtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQ0UsTUFBQyxLQUFEO01BQ0UsR0FBRyw2Q0FBc0NBLENBQXRDLENBREw7TUFFRSxHQUFHLEVBQUVBLENBRlA7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQURGLEVBS0UsTUFBQyxlQUFEO01BQWlCLE9BQU8sRUFBRWQsYUFBYSxDQUFDZSxDQUFELENBQXZDO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FDRSxNQUFDLHVEQUFEO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFERixDQUxGLENBRDRCO0VBQUEsQ0FBZixDQURqQixDQS9CRixDQURGLENBREY7QUFpREQsQ0ExSEQ7O0dBQU10RCxRO1VBQ1dDLHVELEVBQ3FCQSx1RCxFQUNuQk8sdUQ7OztPQUhiUixRO0FBNEhTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hYzkwOTIwZWM0MWZiMzBhYTQ2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEFERF9QT1NUX1JFUVVFU1QsIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgUkVNT1ZFX0lNQUdFIH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IFRleHRBcmVhIGZyb20gJ3JlYWN0LXRleHRhcmVhLWF1dG9zaXplJztcclxuaW1wb3J0IFByb2ZpbGVJbWFnZSBmcm9tIFwiLi9Qcm9maWxlSW1hZ2VcIjtcclxuXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBGYVJlZ0ltYWdlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBNZENhbmNlbCB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgZGV2aWNlIGZyb20gJy4uL3V0aWxzL2RldmljZSc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2U2ZWNmMDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IElucHV0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTVweDtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgbWFyZ2luOiAwcHggMjBweCAwcHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50SW5wdXQgPSBzdHlsZWQoVGV4dEFyZWEpYFxyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICA6ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VVcGxvYWRJY29uID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAtMy41cHg7XHJcbiAgcmlnaHQ6IDEwN3B4O1xyXG4gIGNvbG9yOiAjMTg2NGFiO1xyXG4gIGZvbnQtc2l6ZTogMzhweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvaW50ZXItZXZlbnRzOiAke3Byb3BzID0+IChwcm9wcy5tZSA/IG51bGwgOiBcIm5vbmVcIil9O1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3VibWl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBhbGw6IHVuc2V0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg2NGFiO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm90dG9tOiAxMHB4O1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb2ludGVyLWV2ZW50czogJHtwcm9wcyA9PiAocHJvcHMubWUgPyBudWxsIDogXCJub25lXCIpfTtcclxuICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5pc0F2YWlsYWJsZVBvc3RpbmcgPyAxIDogMC41KX07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VVcGxvYWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDUwJTtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcblxyXG4gIEBtZWRpYSAke2RldmljZS5tb2JpbGVMfSB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZURlbGV0ZUljb24gPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDRweDtcclxuICByaWdodDogMXB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG4gIGNvbnN0IHsgaW1hZ2VQYXRocywgYWRkUG9zdERvbmUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2lzQXZhaWxhYmxlUG9zdGluZywgc2V0SXNBdmFpbGFibGVQb3N0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhZGRQb3N0RG9uZSkge1xyXG4gICAgICBzZXRDb250ZW50KCcnKTtcclxuICAgIH07XHJcbiAgfSwgW2FkZFBvc3REb25lXSk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlQ29udGVudCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zdCB7dGFyZ2V0OiB7dmFsdWV9fSA9IGU7XHJcbiAgICBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmICh2YWx1ZS50cmltKCkpIHtcclxuICAgICAgc2V0SXNBdmFpbGFibGVQb3N0aW5nKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPT09IDAgfHwgdmFsdWUubGVuZ3RoID4gNTAwKSB7XHJcbiAgICAgIHNldElzQXZhaWxhYmxlUG9zdGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtjb250ZW50XSk7XHJcblxyXG4gIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcbiAgXHJcbiAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2ltYWdlJywgZS50YXJnZXQuZmlsZXMpO1xyXG4gICAgY29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKGUudGFyZ2V0LmZpbGVzLCAoZmlsZSkgPT4ge1xyXG4gICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlKTtcclxuICAgIH0pO1xyXG4gICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoJ3VwZGF0ZScsIGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGltYWdlRm9ybURhdGEsXHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25SZW1vdmVJbWFnZSA9IHVzZUNhbGxiYWNrKChpbmRleCkgPT4gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfSU1BR0UsXHJcbiAgICAgIGRhdGE6IGluZGV4LFxyXG4gICAgfSlcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICghY29udGVudCB8fCAhY29udGVudC50cmltKCkgKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn6riA7J2EIOyekeyEse2VtOyjvOyEuOyalC4nKVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgaWYgKGNvbnRlbnQubGVuZ3RoID4gNTAwKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn6riA7J6Q7IiY6rCAIOuEiOustCDrp47sirXri4jri6QuJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBpbWFnZVBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdwb3N0SW1hZ2VzJywgcGF0aCk7XHJcbiAgICB9KTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnY29udGVudCcsIGNvbnRlbnQpO1xyXG5cclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IGZvcm1EYXRhXHJcbiAgICB9KTtcclxuICB9LCBbY29udGVudCwgaW1hZ2VQYXRoc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxyXG4gICAgICAgIDxJbnB1dENvbnRhaW5lcj5cclxuICAgICAgICAgIDxQcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxQcm9maWxlSW1hZ2UgcGF0aD17IG1lID8gbWUucHJvZmlsZUltYWdlUGF0aCA6IG51bGwgfSAvPlxyXG4gICAgICAgICAgPC9Qcm9maWxlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgICA8Q29udGVudElucHV0IFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17bWUgPyBcIuyYpOuKmOydgCDslrTrlqQg7J287J20IOyeiOyXiOuCmOyalD9cIiA6IFwi66Gc6re47J24IO2bhCDsnbTsmqntlbTso7zshLjsmpQuXCJ9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXttZSA/IGZhbHNlIDogdHJ1ZX1cclxuICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbnRlbnR9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcmVzaXplOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgICAgcmVmPXtpbWFnZUlucHV0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEltYWdlVXBsb2FkSWNvbiBtZT17bWV9IG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+XHJcbiAgICAgICAgICAgIDxGYVJlZ0ltYWdlIC8+XHJcbiAgICAgICAgICA8L0ltYWdlVXBsb2FkSWNvbj5cclxuICAgICAgICAgIDxTdWJtaXRCdXR0b24gdHlwZT1cInN1Ym1pdFwiIG1lPXttZX0gaXNBdmFpbGFibGVQb3N0aW5nPXtpc0F2YWlsYWJsZVBvc3Rpbmd9PlxyXG4gICAgICAgICAgICDqsozsi5xcclxuICAgICAgICAgIDwvU3VibWl0QnV0dG9uPlxyXG4gICAgICAgIDwvSW5wdXRDb250YWluZXI+XHJcbiAgICAgICAgPEltYWdlVXBsb2FkQ29udGFpbmVyPlxyXG4gICAgICAgICAge2ltYWdlUGF0aHMgJiYgaW1hZ2VQYXRocy5tYXAoKHYsIGkpID0+IChcclxuICAgICAgICAgICAgPEltYWdlQ29udGFpbmVyIGtleT17dn0+XHJcbiAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1L3Bvc3RJbWFnZXMvJHt2fWB9IFxyXG4gICAgICAgICAgICAgICAgYWx0PXt2fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEltYWdlRGVsZXRlSWNvbiBvbkNsaWNrPXtvblJlbW92ZUltYWdlKGkpfT5cclxuICAgICAgICAgICAgICAgIDxNZENhbmNlbCAvPlxyXG4gICAgICAgICAgICAgIDwvSW1hZ2VEZWxldGVJY29uPlxyXG4gICAgICAgICAgICA8L0ltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9JbWFnZVVwbG9hZENvbnRhaW5lcj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=