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
      editMode = _ref.editMode,
      setEditMode = _ref.setEditMode;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.post;
  }),
      updatePostImagePaths = _useSelector.updatePostImagePaths;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(post.content),
      content = _useState[0],
      setContent = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isAvailablePosting = _useState2[0],
      setIsAvailablePosting = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (editMode && post.Images) {
      var images = post.Images.map(function (v) {
        return v.src;
      });
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["LOAD_IMAGE_PATHS"],
        data: images
      });
    }

    ;
  }, [editMode]);
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
    imageFormData.append('type', 'updatePost');
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  });
  var onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (index) {
    return function () {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["REMOVE_IMAGE"],
        data: {
          type: 'updatePost',
          index: index
        }
      });
    };
  });
  var onCancelUpdate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setEditMode(false);
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
    updatePostImagePaths.forEach(function (path) {
      formData.append('postImages', path);
    });
    formData.append('content', content);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_3__["UPDATE_POST_REQUEST"],
      postId: post.id,
      data: formData
    });
    setEditMode(false);
  }, [updatePostImagePaths, content]);
  return __jsx(Container, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 5
    }
  }, __jsx(Form, {
    onSubmit: onSubmit,
    encType: "multipart/form-data",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 7
    }
  }, __jsx(ContentInput, {
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
      lineNumber: 218,
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
      lineNumber: 227,
      columnNumber: 9
    }
  }), __jsx(ButtonContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 9
    }
  }, __jsx(ImageUploadIcon, {
    onClick: onClickImageUpload,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 11
    }
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaRegImage"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 13
    }
  })), __jsx(SubmitButton, {
    type: "submit",
    isAvailablePosting: isAvailablePosting,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 11
    }
  }, "\uC218\uC815"), __jsx(CancelButton, {
    type: "button",
    onClick: onCancelUpdate,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 11
    }
  }, "\uCDE8\uC18C")), __jsx(ImageUploadContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 9
    }
  }, updatePostImagePaths && updatePostImagePaths.map(function (v, i) {
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
    }), __jsx(ImageDeleteContainer, {
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

_s(PostUpdateForm, "0J55A7Ni3SaKDYTBhSvoYFVJotI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c12 = PostUpdateForm;
PostUpdateForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  editMode: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0VXBkYXRlRm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtIiwiZm9ybSIsIkNvbnRlbnRJbnB1dCIsIlRleHRBcmVhIiwiSW1hZ2VVcGxvYWRDb250YWluZXIiLCJJbWFnZUNvbnRhaW5lciIsIkltYWdlIiwiaW1nIiwiZGV2aWNlIiwibW9iaWxlTCIsIkltYWdlRGVsZXRlQ29udGFpbmVyIiwiQnV0dG9uQ29udGFpbmVyIiwiSW1hZ2VVcGxvYWRJY29uIiwiU3VibWl0QnV0dG9uIiwiYnV0dG9uIiwicHJvcHMiLCJpc0F2YWlsYWJsZVBvc3RpbmciLCJDYW5jZWxCdXR0b24iLCJQb3N0VXBkYXRlRm9ybSIsInBvc3QiLCJlZGl0TW9kZSIsInNldEVkaXRNb2RlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1cGRhdGVQb3N0SW1hZ2VQYXRocyIsInVzZVN0YXRlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJzZXRJc0F2YWlsYWJsZVBvc3RpbmciLCJ1c2VFZmZlY3QiLCJJbWFnZXMiLCJpbWFnZXMiLCJtYXAiLCJ2Iiwic3JjIiwidHlwZSIsIkxPQURfSU1BR0VfUEFUSFMiLCJkYXRhIiwib25DaGFuZ2VDb250ZW50IiwidXNlQ2FsbGJhY2siLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJ0cmltIiwibGVuZ3RoIiwiaW1hZ2VJbnB1dCIsInVzZVJlZiIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2VzIiwiY29uc29sZSIsImxvZyIsImZpbGVzIiwiaW1hZ2VGb3JtRGF0YSIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsImNhbGwiLCJmaWxlIiwiYXBwZW5kIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwib25SZW1vdmVJbWFnZSIsImluZGV4IiwiUkVNT1ZFX0lNQUdFIiwib25DYW5jZWxVcGRhdGUiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJmb3JtRGF0YSIsInBhdGgiLCJVUERBVEVfUE9TVF9SRVFVRVNUIiwicG9zdElkIiwiaWQiLCJyZXNpemUiLCJvdXRsaW5lIiwib3ZlcmZsb3ciLCJpIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEscUNBQWY7S0FBTUYsUztBQUtOLElBQU1HLElBQUksR0FBR0YseURBQU0sQ0FBQ0csSUFBVjtFQUFBO0VBQUE7QUFBQSw2R0FBVjtNQUFNRCxJO0FBU04sSUFBTUUsWUFBWSxHQUFHSixpRUFBTSxDQUFDSywrREFBRCxDQUFUO0VBQUE7RUFBQTtBQUFBLDBKQUFsQjtNQUFNRCxZO0FBWU4sSUFBTUUsb0JBQW9CLEdBQUdOLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsK0JBQTFCO01BQU1LLG9CO0FBS04sSUFBTUMsY0FBYyxHQUFHUCx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLDRDQUFwQjtNQUFNTSxjO0FBS04sSUFBTUMsS0FBSyxHQUFHUix5REFBTSxDQUFDUyxHQUFWO0VBQUE7RUFBQTtBQUFBLG1GQUtBQyxxREFBTSxDQUFDQyxPQUxQLENBQVg7TUFBTUgsSztBQVdOLElBQU1JLG9CQUFvQixHQUFHWix5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLHlJQUExQjtNQUFNVyxvQjtBQWNOLElBQU1DLGVBQWUsR0FBR2IseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSx3REFBckI7TUFBTVksZTtBQU1OLElBQU1DLGVBQWUsR0FBR2QseURBQU0sQ0FB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RyxJQUFWLENBQWVELFVBRkE7RUFHekI3RCxXQUFXLEVBQUUyRCxpREFBUyxDQUFDSSxJQUFWLENBQWVGO0FBSEgsQ0FBM0I7QUFNZWhFLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk2NTE2MTgyNGNlMGQ0MjgxMDg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBMT0FEX0lNQUdFX1BBVEhTLCBSRU1PVkVfSU1BR0UsIFVQREFURV9QT1NUX1JFUVVFU1QsIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAncmVhY3QtdGV4dGFyZWEtYXV0b3NpemUnO1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEZhUmVnSW1hZ2UgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IE1kQ2FuY2VsIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbmltcG9ydCBkZXZpY2UgZnJvbSAnLi4vdXRpbHMvZGV2aWNlJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50SW5wdXQgPSBzdHlsZWQoVGV4dEFyZWEpYFxyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtaW4taGVpZ2h0OiA5MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZVVwbG9hZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogOTMlO1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuXHJcbiAgQG1lZGlhICR7ZGV2aWNlLm1vYmlsZUx9IHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEltYWdlRGVsZXRlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0cHg7XHJcbiAgcmlnaHQ6IDFweDtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgd2lkdGg6IDkzJTtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlVXBsb2FkSWNvbiA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICMxODY0YWI7XHJcbiAgZm9udC1zaXplOiAzN3B4O1xyXG4gIG1hcmdpbjogLTdweCA1cHggMHB4IDBweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3VibWl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBhbGw6IHVuc2V0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNThweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODY0YWI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5pc0F2YWlsYWJsZVBvc3RpbmcgPyAxIDogMC42KX07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FuY2VsQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBhbGw6IHVuc2V0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNThweDtcclxuICBoZWlnaHQ6IDI4cHg7IFxyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlODUzN2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0VXBkYXRlRm9ybSA9ICh7IHBvc3QsIGVkaXRNb2RlLCBzZXRFZGl0TW9kZSB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCB7IHVwZGF0ZVBvc3RJbWFnZVBhdGhzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKHBvc3QuY29udGVudCk7XHJcbiAgY29uc3QgW2lzQXZhaWxhYmxlUG9zdGluZywgc2V0SXNBdmFpbGFibGVQb3N0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChlZGl0TW9kZSAmJiBwb3N0LkltYWdlcykge1xyXG4gICAgICBjb25zdCBpbWFnZXMgPSBwb3N0LkltYWdlcy5tYXAoKHYpID0+IHYuc3JjKTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IExPQURfSU1BR0VfUEFUSFMsXHJcbiAgICAgICAgZGF0YTogaW1hZ2VzLFxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICB9LCBbZWRpdE1vZGVdKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VDb250ZW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnN0IHt0YXJnZXQ6IHt2YWx1ZX19ID0gZTtcclxuICAgIHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSkge1xyXG4gICAgICBzZXRJc0F2YWlsYWJsZVBvc3RpbmcodHJ1ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCB8fCB2YWx1ZS5sZW5ndGggPiA1MDApIHtcclxuICAgICAgc2V0SXNBdmFpbGFibGVQb3N0aW5nKGZhbHNlKTtcclxuICAgIH07XHJcbiAgfSwgW2NvbnRlbnRdKTtcclxuXHJcbiAgY29uc3QgaW1hZ2VJbnB1dCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IG9uQ2xpY2tJbWFnZVVwbG9hZCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGltYWdlSW5wdXQuY3VycmVudC5jbGljaygpO1xyXG4gIH0sIFtpbWFnZUlucHV0LmN1cnJlbnRdKTtcclxuICBcclxuICBjb25zdCBvbkNoYW5nZUltYWdlcyA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnaW1hZ2UnLCBlLnRhcmdldC5maWxlcyk7XHJcbiAgICBjb25zdCBpbWFnZUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwoZS50YXJnZXQuZmlsZXMsIChmaWxlKSA9PiB7XHJcbiAgICAgIGltYWdlRm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGZpbGUpO1xyXG4gICAgfSk7XHJcbiAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZCgndHlwZScsICd1cGRhdGVQb3N0Jyk7XHJcblxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgICBkYXRhOiBpbWFnZUZvcm1EYXRhLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IG9uUmVtb3ZlSW1hZ2UgPSB1c2VDYWxsYmFjaygoaW5kZXgpID0+ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0lNQUdFLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgdHlwZTogJ3VwZGF0ZVBvc3QnLFxyXG4gICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgb25DYW5jZWxVcGRhdGUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBzZXRFZGl0TW9kZShmYWxzZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCFjb250ZW50IHx8ICFjb250ZW50LnRyaW0oKSApIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfquIDsnYQg7J6R7ISx7ZW07KO87IS47JqULicpXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAoY29udGVudC5sZW5ndGggPiA1MDApIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfquIDsnpDsiJjqsIAg64SI66y0IOunjuyKteuLiOuLpC4nKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIHVwZGF0ZVBvc3RJbWFnZVBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcclxuICAgICAgZm9ybURhdGEuYXBwZW5kKCdwb3N0SW1hZ2VzJywgcGF0aCk7XHJcbiAgICB9KTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgnY29udGVudCcsIGNvbnRlbnQpO1xyXG5cclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgdHlwZTogVVBEQVRFX1BPU1RfUkVRVUVTVCxcclxuICAgICAgcG9zdElkOiBwb3N0LmlkLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgIH0pO1xyXG5cclxuICAgIHNldEVkaXRNb2RlKGZhbHNlKTtcclxuICB9LCBbdXBkYXRlUG9zdEltYWdlUGF0aHMsIGNvbnRlbnRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cclxuICAgICAgICA8Q29udGVudElucHV0XHJcbiAgICAgICAgICB2YWx1ZT17Y29udGVudH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbnRlbnR9XHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICByZXNpemU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgbmFtZT1cImltYWdlXCJcclxuICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgIHJlZj17aW1hZ2VJbnB1dH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW1hZ2VzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8QnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICAgICAgPEltYWdlVXBsb2FkSWNvbiBvbkNsaWNrPXtvbkNsaWNrSW1hZ2VVcGxvYWR9PlxyXG4gICAgICAgICAgICA8RmFSZWdJbWFnZSAvPlxyXG4gICAgICAgICAgPC9JbWFnZVVwbG9hZEljb24+XHJcbiAgICAgICAgICA8U3VibWl0QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpc0F2YWlsYWJsZVBvc3Rpbmc9e2lzQXZhaWxhYmxlUG9zdGluZ30+7IiY7KCVPC9TdWJtaXRCdXR0b24+XHJcbiAgICAgICAgICA8Q2FuY2VsQnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkNhbmNlbFVwZGF0ZX0+7Leo7IaMPC9DYW5jZWxCdXR0b24+XHJcbiAgICAgICAgPC9CdXR0b25Db250YWluZXI+XHJcbiAgICAgICAgPEltYWdlVXBsb2FkQ29udGFpbmVyPlxyXG4gICAgICAgICAge3VwZGF0ZVBvc3RJbWFnZVBhdGhzICYmIHVwZGF0ZVBvc3RJbWFnZVBhdGhzLm1hcCgodiwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8SW1hZ2VDb250YWluZXIga2V5PXt2fT5cclxuICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwNjUvcG9zdEltYWdlcy8ke3Z9YH0gXHJcbiAgICAgICAgICAgICAgICBhbHQ9e3Z9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW1hZ2VEZWxldGVDb250YWluZXIgb25DbGljaz17b25SZW1vdmVJbWFnZShpKX0+XHJcbiAgICAgICAgICAgICAgICA8TWRDYW5jZWwgLz5cclxuICAgICAgICAgICAgICA8L0ltYWdlRGVsZXRlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L0ltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9JbWFnZVVwbG9hZENvbnRhaW5lcj5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59O1xyXG5cclxuUG9zdFVwZGF0ZUZvcm0ucHJvcFR5cGVzID0ge1xyXG4gIHBvc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxuICBlZGl0TW9kZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcclxuICBzZXRFZGl0TW9kZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RVcGRhdGVGb3JtO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==