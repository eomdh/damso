webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostUpdateForm.js":
/*!**************************************!*\
  !*** ./components/PostUpdateForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _utils_device__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/device */ "./utils/device.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\components\\PostUpdateForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var Container = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostUpdateForm__Container",
  componentId: "sc-1ps9m8-0"
})(["display:flex;margin-top:10px;"]);
_c = Container;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].form.withConfig({
  displayName: "PostUpdateForm__Form",
  componentId: "sc-1ps9m8-1"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;padding:10px;"]);
_c2 = Form;
var ContentInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_4__["default"]).withConfig({
  displayName: "PostUpdateForm__ContentInput",
  componentId: "sc-1ps9m8-2"
})(["width:90%;border:none;font-size:16px;min-height:90px;max-height:400px;margin-bottom:10px;padding:10px;border-radius:10px;background-color:#f8f9fa;"]);
_c3 = ContentInput;
var ImageUploadContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostUpdateForm__ImageUploadContainer",
  componentId: "sc-1ps9m8-3"
})(["display:flex;width:93%;"]);
_c4 = ImageUploadContainer;
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostUpdateForm__ImageContainer",
  componentId: "sc-1ps9m8-4"
})(["margin-right:15px;position:relative;"]);
_c5 = ImageContainer;
var Image = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].img.withConfig({
  displayName: "PostUpdateForm__Image",
  componentId: "sc-1ps9m8-5"
})(["width:80px;height:80px;margin-top:5px;@media ", "{width:40px;height:40px;}"], _utils_device__WEBPACK_IMPORTED_MODULE_8__["default"].mobileL);
_c6 = Image;
var ImageDeleteContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostUpdateForm__ImageDeleteContainer",
  componentId: "sc-1ps9m8-6"
})(["position:absolute;top:4px;right:1px;color:red;font-size:20px;opacity:0.7;cursor:pointer;&:hover{opacity:1;transform:scale(0.98);}"]);
_c7 = ImageDeleteContainer;
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostUpdateForm__ButtonContainer",
  componentId: "sc-1ps9m8-7"
})(["display:flex;justify-content:flex-end;width:93%;"]);
_c8 = ButtonContainer;
var ImageUploadIcon = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "PostUpdateForm__ImageUploadIcon",
  componentId: "sc-1ps9m8-8"
})(["color:#1864ab;font-size:37px;margin:-7px 5px 0px 0px;opacity:0.5;cursor:pointer;&:hover{opacity:1;transform:scale(0.98);}"]);
_c9 = ImageUploadIcon;
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.withConfig({
  displayName: "PostUpdateForm__SubmitButton",
  componentId: "sc-1ps9m8-9"
})(["all:unset;display:flex;justify-content:center;align-items:center;width:58px;height:28px;font-size:14px;background-color:#1864ab;border-radius:6px;color:white;cursor:pointer;outline:none;opacity:", ";transition:all 0.2s linear;"], function (props) {
  return props.isAvailablePosting ? 1 : 0.6;
});
_c10 = SubmitButton;
var CancelButton = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].button.withConfig({
  displayName: "PostUpdateForm__CancelButton",
  componentId: "sc-1ps9m8-10"
})(["all:unset;display:flex;justify-content:center;align-items:center;width:58px;height:28px;font-size:14px;margin-left:5px;background-color:#e8537c;border-radius:6px;color:white;cursor:pointer;outline:none;opacity:0.6;&:hover{opacity:1;}transition:all 0.2s linear;"]);
_c11 = CancelButton;

var PostUpdateForm = function PostUpdateForm(_ref) {
  _s();

  var post = _ref.post,
      setEditMode = _ref.setEditMode;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var imagePaths = post.Images.map(function (v) {
    return v.src;
  });
  console.log(post.Images);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(post.content),
      contentInput = _useState[0],
      setContentInput = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isAvailablePosting = _useState2[0],
      setIsAvailablePosting = _useState2[1];

  var onChangeContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    var value = e.target.value;
    setContentInput(e.target.value);

    if (value.trim()) {
      setIsAvailablePosting(true);
    } else if (value.length === 0 || value.length > 500) {
      setIsAvailablePosting(false);
    }

    ;
  }, [contentInput]);
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
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  });
  var onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (index) {
    return function () {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_IMAGE"],
        data: index
      });
    };
  });
  var onCancelUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setEditMode(false);
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (!contentInput || !contentInput.trim()) {
      return alert('글을 작성해주세요.');
    }

    ;

    if (contentInput.length > 500) {
      return alert('글자수가 너무 많습니다.');
    }

    ;
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPDATE_POST_REQUEST"],
      data: {
        postId: post.id,
        content: contentInput
      }
    });
    setEditMode(false);
  }, [contentInput]);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 5
    }
  }, __jsx(Form, {
    onSubmit: onSubmit,
    encType: "multipart/form-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 7
    }
  }, __jsx(ContentInput, {
    value: contentInput,
    onChange: onChangeContent,
    style: {
      resize: "none",
      outline: "none",
      overflow: "hidden"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 9
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
      lineNumber: 208,
      columnNumber: 9
    }
  }), __jsx(ButtonContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 9
    }
  }, __jsx(ImageUploadIcon, {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaRegImage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }
  })), __jsx(SubmitButton, {
    type: "submit",
    isAvailablePosting: isAvailablePosting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 11
    }
  }, "\uC218\uC815"), __jsx(CancelButton, {
    onClick: onCancelUpdate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 11
    }
  }, "\uCDE8\uC18C")), __jsx(ImageUploadContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 9
    }
  }, imagePaths && imagePaths.map(function (v, i) {
    return __jsx(ImageContainer, {
      key: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 13
      }
    }, __jsx(Image, {
      src: "http://localhost:3065/postImages/".concat(v),
      alt: v,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 15
      }
    }), __jsx(ImageDeleteContainer, {
      onClick: onRemoveImage(i),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 15
      }
    }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_7__["MdCancel"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 17
      }
    })));
  }))));
};

_s(PostUpdateForm, "pk0V83GWi1Hx2HMRg8243FHkDHo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"]];
});

_c12 = PostUpdateForm;
PostUpdateForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setEditMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PostUpdateForm);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Form");
$RefreshReg$(_c3, "ContentInput");
$RefreshReg$(_c4, "ImageUploadContainer");
$RefreshReg$(_c5, "ImageContainer");
$RefreshReg$(_c6, "Image");
$RefreshReg$(_c7, "ImageDeleteContainer");
$RefreshReg$(_c8, "ButtonContainer");
$RefreshReg$(_c9, "ImageUploadIcon");
$RefreshReg$(_c10, "SubmitButton");
$RefreshReg$(_c11, "CancelButton");
$RefreshReg$(_c12, "PostUpdateForm");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0VXBkYXRlRm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIkNvbnRlbnRJbnB1dCIsIlRleHRBcmVhIiwiSW1hZ2VVcGxvYWRDb250YWluZXIiLCJJbWFnZUNvbnRhaW5lciIsIkltYWdlIiwiaW1nIiwiZGV2aWNlIiwibW9iaWxlTCIsIkltYWdlRGVsZXRlQ29udGFpbmVyIiwiQnV0dG9uQ29udGFpbmVyIiwiSW1hZ2VVcGxvYWRJY29uIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJpc0F2YWlsYWJsZVBvc3RpbmciLCJDYW5jZWxCdXR0b24iLCJQb3N0VXBkYXRlRm9ybSIsInBvc3QiLCJzZXRFZGl0TW9kZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJpbWFnZVBhdGhzIiwiSW1hZ2VzIiwibWFwIiwidiIsInNyYyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsImNvbnRlbnQiLCJjb250ZW50SW5wdXQiLCJzZXRDb250ZW50SW5wdXQiLCJzZXRJc0F2YWlsYWJsZVBvc3RpbmciLCJvbkNoYW5nZUNvbnRlbnQiLCJ1c2VDYWxsYmFjayIsImUiLCJ2YWx1ZSIsInRhcmdldCIsInRyaW0iLCJsZW5ndGgiLCJpbWFnZUlucHV0IiwidXNlUmVmIiwib25DbGlja0ltYWdlVXBsb2FkIiwiY3VycmVudCIsImNsaWNrIiwib25DaGFuZ2VJbWFnZXMiLCJmaWxlcyIsImltYWdlRm9ybURhdGEiLCJGb3JtRGF0YSIsImZvckVhY2giLCJjYWxsIiwiZmlsZSIsImFwcGVuZCIsInR5cGUiLCJVUExPQURfSU1BR0VTX1JFUVVFU1QiLCJkYXRhIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwib25DYW5jZWxVcGRhdGUiLCJvblN1Ym1pdCIsImFsZXJ0IiwiVVBEQVRFX1BPU1RfUkVRVUVTVCIsInBvc3RJZCIsImlkIiwicmVzaXplIiwib3V0bGluZSIsIm92ZXJmbG93IiwiaSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEscUNBQWY7S0FBTUYsUztBQUtOLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0csSUFBVjtFQUFBO0VBQUE7QUFBQSw2R0FBVjtNQUFNRCxJO0FBU04sSUFBTUUsWUFBWSxHQUFHSixpRUFBTSxDQUFDSywrREFBRCxDQUFUO0VBQUE7RUFBQTtBQUFBLDBKQUFsQjtNQUFNRCxZO0FBWU4sSUFBTUUsb0JBQW9CLEdBQUdOLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsK0JBQTFCO01BQU1LLG9CO0FBS04sSUFBTUMsY0FBYyxHQUFHUCx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLDRDQUFwQjtNQUFNTSxjO0FBS04sSUFBTUMsS0FBSyxHQUFHUix5REFBTSxDQUFDUyxHQUFWO0VBQUE7RUFBQTtBQUFBLG1GQUtBQyxxREFBTSxDQUFDQyxPQUxQLENBQVg7TUFBTUgsSztBQVdOLElBQU1JLG9CQUFvQixHQUFHWix5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLHlJQUExQjtNQUFNVyxvQjtBQWNOLElBQU1DLGVBQWUsR0FBR2IseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSx3REFBckI7TUFBTVksZTtBQU1OLElBQU1DLGVBQWUsR0FBR2QseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxpSUFBckI7TUFBTWEsZTtBQVlOLElBQU1DLFlBQVksR0FBR2YseURBQU0sQ0FBQ2dCLE1BQVY7RUFBQTtFQUFBO0FBQUEsMk9BYUwsVUFBQUMs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Q0FERjtBQTJDRCxDQTlHRDs7R0FBTXBELGM7VUFDYUksdUQ7OztPQURiSixjO0FBZ0hOQSxjQUFjLENBQUNxRCxTQUFmLEdBQTJCO0VBQ3pCcEQsSUFBSSxFQUFFcUQsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFERTtFQUV6QnRELFdBQVcsRUFBRW9ELGlEQUFTLENBQUNHLElBQVYsQ0FBZUQ7QUFGSCxDQUEzQjtBQUtleEQsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGYxMzg5ZDYzYTNlZGEwZTM4MTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IFJFTU9WRV9JTUFHRSwgVVBEQVRFX1BPU1RfUkVRVUVTVCwgVVBMT0FEX0lNQUdFU19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCc7XHJcbmltcG9ydCBUZXh0QXJlYSBmcm9tICdyZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZSc7XHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRmFSZWdJbWFnZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgTWRDYW5jZWwgfSBmcm9tIFwicmVhY3QtaWNvbnMvbWRcIjtcclxuaW1wb3J0IGRldmljZSBmcm9tICcuLi91dGlscy9kZXZpY2UnO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRJbnB1dCA9IHN0eWxlZChUZXh0QXJlYSlgXHJcbiAgd2lkdGg6IDkwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDkwcHg7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlVXBsb2FkQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiA5MyU7XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG5cclxuICBAbWVkaWEgJHtkZXZpY2UubW9iaWxlTH0ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VEZWxldGVDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDRweDtcclxuICByaWdodDogMXB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBCdXR0b25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB3aWR0aDogOTMlO1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VVcGxvYWRJY29uID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogIzE4NjRhYjtcclxuICBmb250LXNpemU6IDM3cHg7XHJcbiAgbWFyZ2luOiAtN3B4IDVweCAwcHggMHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdWJtaXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGFsbDogdW5zZXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA1OHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4NjRhYjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG9wYWNpdHk6ICR7cHJvcHMgPT4gKHByb3BzLmlzQXZhaWxhYmxlUG9zdGluZyA/IDEgOiAwLjYpfTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbmA7XHJcblxyXG5jb25zdCBDYW5jZWxCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGFsbDogdW5zZXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiA1OHB4O1xyXG4gIGhlaWdodDogMjhweDsgXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4NTM3YztcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuYDtcclxuXHJcbmNvbnN0IFBvc3RVcGRhdGVGb3JtID0gKHsgcG9zdCwgc2V0RWRpdE1vZGUgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgaW1hZ2VQYXRocyA9IHBvc3QuSW1hZ2VzLm1hcCgodikgPT4gdi5zcmMpO1xyXG4gIGNvbnNvbGUubG9nKHBvc3QuSW1hZ2VzKTtcclxuICBjb25zdCBbY29udGVudElucHV0LCBzZXRDb250ZW50SW5wdXRdID0gdXNlU3RhdGUocG9zdC5jb250ZW50KTtcclxuICBjb25zdCBbaXNBdmFpbGFibGVQb3N0aW5nLCBzZXRJc0F2YWlsYWJsZVBvc3RpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZUNvbnRlbnQgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc3Qge3RhcmdldDoge3ZhbHVlfX0gPSBlO1xyXG4gICAgc2V0Q29udGVudElucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmICh2YWx1ZS50cmltKCkpIHtcclxuICAgICAgc2V0SXNBdmFpbGFibGVQb3N0aW5nKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPT09IDAgfHwgdmFsdWUubGVuZ3RoID4gNTAwKSB7XHJcbiAgICAgIHNldElzQXZhaWxhYmxlUG9zdGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtjb250ZW50SW5wdXRdKTtcclxuXHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuICBcclxuICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnaW1hZ2UnLCBlLnRhcmdldC5maWxlcyk7XHJcbiAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmaWxlKSA9PiB7XHJcbiAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGZpbGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICBkYXRhOiBpbWFnZUZvcm1EYXRhLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uUmVtb3ZlSW1hZ2UgPSB1c2VDYWxsYmFjaygoaW5kZXgpID0+ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0lNQUdFLFxyXG4gICAgICBkYXRhOiBpbmRleCxcclxuICAgIH0pXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uQ2FuY2VsVXBkYXRlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAoIWNvbnRlbnRJbnB1dCB8fCAhY29udGVudElucHV0LnRyaW0oKSApIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfquIDsnYQg7J6R7ISx7ZW07KO87IS47JqULicpXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAoY29udGVudElucHV0Lmxlbmd0aCA+IDUwMCkge1xyXG4gICAgICByZXR1cm4gYWxlcnQoJ+q4gOyekOyImOqwgCDrhIjrrLQg66eO7Iq164uI64ukLicpO1xyXG4gICAgfTtcclxuXHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVQREFURV9QT1NUX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBwb3N0SWQ6IHBvc3QuaWQsXHJcbiAgICAgICAgY29udGVudDogY29udGVudElucHV0LFxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzZXRFZGl0TW9kZShmYWxzZSk7XHJcbiAgfSwgW2NvbnRlbnRJbnB1dF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxyXG4gICAgICAgIDxDb250ZW50SW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtjb250ZW50SW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VDb250ZW50fVxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgcmVzaXplOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgb3V0bGluZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICAgIGhpZGRlblxyXG4gICAgICAgICAgICByZWY9e2ltYWdlSW5wdXR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUltYWdlc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvbkNvbnRhaW5lcj5cclxuICAgICAgICAgIDxJbWFnZVVwbG9hZEljb24gb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT5cclxuICAgICAgICAgICAgPEZhUmVnSW1hZ2UgLz5cclxuICAgICAgICAgIDwvSW1hZ2VVcGxvYWRJY29uPlxyXG4gICAgICAgICAgPFN1Ym1pdEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaXNBdmFpbGFibGVQb3N0aW5nPXtpc0F2YWlsYWJsZVBvc3Rpbmd9PuyImOyglTwvU3VibWl0QnV0dG9uPlxyXG4gICAgICAgICAgPENhbmNlbEJ1dHRvbiBvbkNsaWNrPXtvbkNhbmNlbFVwZGF0ZX0+7Leo7IaMPC9DYW5jZWxCdXR0b24+XHJcbiAgICAgICAgPC9CdXR0b25Db250YWluZXI+XHJcbiAgICAgICAgPEltYWdlVXBsb2FkQ29udGFpbmVyPlxyXG4gICAgICAgICAge2ltYWdlUGF0aHMgJiYgaW1hZ2VQYXRocy5tYXAoKHYsIGkpID0+IChcclxuICAgICAgICAgICAgPEltYWdlQ29udGFpbmVyIGtleT17dn0+XHJcbiAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDY1L3Bvc3RJbWFnZXMvJHt2fWB9IFxyXG4gICAgICAgICAgICAgICAgYWx0PXt2fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEltYWdlRGVsZXRlQ29udGFpbmVyIG9uQ2xpY2s9e29uUmVtb3ZlSW1hZ2UoaSl9PlxyXG4gICAgICAgICAgICAgICAgPE1kQ2FuY2VsIC8+XHJcbiAgICAgICAgICAgICAgPC9JbWFnZURlbGV0ZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9JbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvSW1hZ2VVcGxvYWRDb250YWluZXI+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufTtcclxuXHJcblBvc3RVcGRhdGVGb3JtLnByb3BUeXBlcyA9IHtcclxuICBwb3N0OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbiAgc2V0RWRpdE1vZGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0VXBkYXRlRm9ybTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=