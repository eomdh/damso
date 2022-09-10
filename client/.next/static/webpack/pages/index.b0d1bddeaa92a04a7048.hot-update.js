webpackHotUpdate_N_E("pages/index",{

/***/ "./components/PostUpdateForm.js":
/*!**************************************!*\
  !*** ./components/PostUpdateForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.browser.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _utils_device__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/device */ "./utils/device.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\DeokHyeon\\Desktop\\damso\\client\\components\\PostUpdateForm.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var Container = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "PostUpdateForm__Container",
  componentId: "sc-1ps9m8-0"
})(["display:flex;margin-top:10px;"]);
_c = Container;
var Form = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].form.withConfig({
  displayName: "PostUpdateForm__Form",
  componentId: "sc-1ps9m8-1"
})(["display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;padding:10px;"]);
_c2 = Form;
var ContentInput = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_5__["default"]).withConfig({
  displayName: "PostUpdateForm__ContentInput",
  componentId: "sc-1ps9m8-2"
})(["width:90%;border:none;font-size:16px;min-height:90px;max-height:400px;margin-bottom:10px;padding:10px;border-radius:10px;background-color:#f8f9fa;"]);
_c3 = ContentInput;
var ImageUploadContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "PostUpdateForm__ImageUploadContainer",
  componentId: "sc-1ps9m8-3"
})(["display:flex;width:93%;"]);
_c4 = ImageUploadContainer;
var ImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "PostUpdateForm__ImageContainer",
  componentId: "sc-1ps9m8-4"
})(["margin-right:15px;position:relative;"]);
_c5 = ImageContainer;
var Image = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].img.withConfig({
  displayName: "PostUpdateForm__Image",
  componentId: "sc-1ps9m8-5"
})(["width:80px;height:80px;margin-top:5px;@media ", "{width:40px;height:40px;}"], _utils_device__WEBPACK_IMPORTED_MODULE_9__["default"].mobileL);
_c6 = Image;
var ImageDeleteContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "PostUpdateForm__ImageDeleteContainer",
  componentId: "sc-1ps9m8-6"
})(["position:absolute;top:4px;right:1px;color:red;font-size:20px;opacity:0.7;cursor:pointer;&:hover{opacity:1;transform:scale(0.98);}"]);
_c7 = ImageDeleteContainer;
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "PostUpdateForm__ButtonContainer",
  componentId: "sc-1ps9m8-7"
})(["display:flex;justify-content:flex-end;width:93%;"]);
_c8 = ButtonContainer;
var ImageUploadIcon = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "PostUpdateForm__ImageUploadIcon",
  componentId: "sc-1ps9m8-8"
})(["color:#1864ab;font-size:37px;margin:-7px 5px 0px 0px;opacity:0.5;cursor:pointer;&:hover{opacity:1;transform:scale(0.98);}"]);
_c9 = ImageUploadIcon;
var SubmitButton = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].button.withConfig({
  displayName: "PostUpdateForm__SubmitButton",
  componentId: "sc-1ps9m8-9"
})(["all:unset;display:flex;justify-content:center;align-items:center;width:58px;height:28px;font-size:14px;background-color:#1864ab;border-radius:6px;color:white;cursor:pointer;outline:none;opacity:", ";transition:all 0.2s linear;"], function (props) {
  return props.isAvailablePosting ? 1 : 0.6;
});
_c10 = SubmitButton;
var CancelButton = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].button.withConfig({
  displayName: "PostUpdateForm__CancelButton",
  componentId: "sc-1ps9m8-10"
})(["all:unset;display:flex;justify-content:center;align-items:center;width:58px;height:28px;font-size:14px;margin-left:5px;background-color:#e8537c;border-radius:6px;color:white;cursor:pointer;outline:none;opacity:0.6;&:hover{opacity:1;}transition:all 0.2s linear;"]);
_c11 = CancelButton;

var PostUpdateForm = function PostUpdateForm(_ref) {
  _s();

  var post = _ref.post,
      setEditMode = _ref.setEditMode;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      imagePaths = _useSelector.imagePaths;

  post.Images.map(function (v) {
    return v.src;
  }), Object(_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__["default"])("imagePaths");

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(post.content),
      contentInput = _useState[0],
      setContentInput = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isAvailablePosting = _useState2[0],
      setIsAvailablePosting = _useState2[1];

  var onChangeContent = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    var value = e.target.value;
    setContentInput(e.target.value);

    if (value.trim()) {
      setIsAvailablePosting(true);
    } else if (value.length === 0 || value.length > 500) {
      setIsAvailablePosting(false);
    }

    ;
  }, [contentInput]);
  var imageInput = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var onClickImageUpload = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    imageInput.current.click();
  }, [imageInput.current]);
  var onChangeImages = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    console.log('image', e.target.files);
    var imageFormData = new FormData();
    [].forEach.call(e.target.files, function (file) {
      imageFormData.append('image', file);
    });
    return dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["UPLOAD_IMAGES_REQUEST"],
      data: imageFormData
    });
  });
  var onRemoveImage = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (index) {
    return function () {
      dispatch({
        type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["REMOVE_IMAGE"],
        data: index
      });
    };
  });
  var onCancelUpdate = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setEditMode(false);
  }, []);
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    if (!contentInput || !contentInput.trim()) {
      return alert('글을 작성해주세요.');
    }

    ;

    if (contentInput.length > 500) {
      return alert('글자수가 너무 많습니다.');
    }

    ;
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__["UPDATE_POST_REQUEST"],
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
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaRegImage"], {
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
    }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_8__["MdCancel"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 17
      }
    })));
  }))));
};

_s(PostUpdateForm, "S1div3Otan6sW5munQS6hwM8eLk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"]];
});

_c12 = PostUpdateForm;
PostUpdateForm.propTypes = {
  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  setEditMode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0VXBkYXRlRm9ybS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwiRm9ybSIsImZvcm0iLCJDb250ZW50SW5wdXQiLCJUZXh0QXJlYSIsIkltYWdlVXBsb2FkQ29udGFpbmVyIiwiSW1hZ2VDb250YWluZXIiLCJJbWFnZSIsImltZyIsImRldmljZSIsIm1vYmlsZUwiLCJJbWFnZURlbGV0ZUNvbnRhaW5lciIsIkJ1dHRvbkNvbnRhaW5lciIsIkltYWdlVXBsb2FkSWNvbiIsIlN1Ym1pdEJ1dHRvbiIsImJ1dHRvbiIsInByb3BzIiwiaXNBdmFpbGFibGVQb3N0aW5nIiwiQ2FuY2VsQnV0dG9uIiwiUG9zdFVwZGF0ZUZvcm0iLCJwb3N0Iiwic2V0RWRpdE1vZGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsImltYWdlUGF0aHMiLCJJbWFnZXMiLCJtYXAiLCJ2Iiwic3JjIiwidXNlU3RhdGUiLCJjb250ZW50IiwiY29udGVudElucHV0Iiwic2V0Q29udGVudElucHV0Iiwic2V0SXNBdmFpbGFibGVQb3N0aW5nIiwib25DaGFuZ2VDb250ZW50IiwidXNlQ2FsbGJhY2siLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJ0cmltIiwibGVuZ3RoIiwiaW1hZ2VJbnB1dCIsInVzZVJlZiIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2VzIiwiY29uc29sZSIsImxvZyIsImZpbGVzIiwiaW1hZ2VGb3JtRGF0YSIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsImNhbGwiLCJmaWxlIiwiYXBwZW5kIiwidHlwZSIsIlVQTE9BRF9JTUFHRVNfUkVRVUVTVCIsImRhdGEiLCJvblJlbW92ZUltYWdlIiwiaW5kZXgiLCJSRU1PVkVfSU1BR0UiLCJvbkNhbmNlbFVwZGF0ZSIsIm9uU3VibWl0IiwiYWxlcnQiLCJVUERBVEVfUE9TVF9SRVFVRVNUIiwicG9zdElkIiwiaWQiLCJyZXNpemUiLCJvdXRsaW5lIiwib3ZlcmZsb3ciLCJpIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxxQ0FBZjtLQUFNRixTO0FBS04sSUFBTUcsSUFBSSxHQUFHRix5REFBTSxDQUFDRyxJQUFWO0VBQUE7RUFBQTtBQUFBLDZHQUFWO01BQU1ELEk7QUFTTixJQUFNRSxZQUFZLEdBQUdKLGlFQUFNLENBQUNLLCtEQUFELENBQVQ7RUFBQTtFQUFBO0FBQUEsMEpBQWxCO01BQU1ELFk7QUFZTixJQUFNRSxvQkFBb0IsR0FBR04seURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSwrQkFBMUI7TUFBTUssb0I7QUFLTixJQUFNQyxjQUFjLEdBQUdQLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsNENBQXBCO01BQU1NLGM7QUFLTixJQUFNQyxLQUFLLEdBQUdSLHlEQUFNLENBQUNTLEdBQVY7RUFBQTtFQUFBO0FBQUEsbUZBS0FDLHFEQUFNLENBQUNDLE9BTFAsQ0FBWDtNQUFNSCxLO0FBV04sSUFBTUksb0JBQW9CLEdBQUdaLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEseUlBQTFCO01BQU1XLG9CO0FBY04sSUFBTUMsZUFBZSxHQUFHYix5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLHdEQUFyQjtNQUFNWSxlO0FBTU4sSUFBTUMsZUFBZSxHQUFHZCx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLGlJQUFyQjtNQUFNYSxlO0FBWU4sSUFBTUMsWUFBWSxHQUFHZix5REFBTSxDQUFDZ0IsTUFBVjtFQUFBO0VBQUE7QUFBQSwyT0FhTCxVQUFBQyxLQUFLO0VBQUEsT0FBS0EsS0FBSyxDQUFDQyxrQkFBTixHQUEyQixDQUEzQixHQUErQixHQUFwQztBQUFBLENBYkEsQ0FBbEI7T0FBTUgsWTtBQWlCTixJQUFNSSxZQUFZLEdBQUduQix5REFBTSxDQUFDZ0IsTUFBVjtFQUFBO0VBQUE7QUFBQSw0UUFBbEI7T0FBTUcsWTs7QUFxQk4sSUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUEyQjtFQUFBOztFQUFBLElBQXhCQyxJQUF3QixRQUF4QkEsSUFBd0I7RUFBQSxJQUFsQkMsV0FBa0IsUUFBbEJBLFdBQWtCO0VBQ2hELElBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0VBRUEsbUJBQXVCQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7SUFBQSxPQUFXQSxLQUFLLENBQUNMLElBQWpCO0VBQUEsQ0FBRCxDQUFsQztFQUFBLElBQVFNLFVBQVIsZ0JBQVFBLFVBQVI7O0VBQ2FOLElBQUksQ0FBQ08sTUFBTCxDQUFZQyxHQUFaLENBQWdCLFVBQUNDLENBQUQ7SUFBQSxPQUFPQSxDQUFDLENBQUNDLEdBQVQ7RUFBQSxDQUFoQixDQUFiOztFQUNBLGdCQUF3Q0Msc0RBQVEsQ0FBQ1gsSUFBSSxDQUFDWSxPQUFOLENBQWhEO0VBQUEsSUFBT0MsWUFBUDtFQUFBLElBQXFCQyxlQUFyQjs7RUFDQSxpQkFBb0RILHNEQUFRLENBQUMsS0FBRCxDQUE1RDtFQUFBLElBQU9kLGtCQUFQO0VBQUEsSUFBMkJrQixxQkFBM0I7O0VBRUEsSUFBTUMsZUFBZSxHQUFHQyx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBTztJQUN6QyxJQUFnQkMsS0FBaEIsR0FBMEJELENBQTFCLENBQU9FLE1BQVAsQ0FBZ0JELEtBQWhCO0lBQ0FMLGVBQWUsQ0FBQ0ksQ0FBQyxDQUFDRSxNQUFGLENBQVNELEtBQVYsQ0FBZjs7SUFDQSxJQUFJQSxLQUFLLENBQUNFLElBQU4sRUFBSixFQUFrQjtNQUNoQk4scUJBQXFCLENBQUMsSUFBRCxDQUFyQjtJQUNELENBRkQsTUFFTyxJQUFJSSxLQUFLLENBQUNHLE1BQU4sS0FBaUIsQ0FBakIsSUFBc0JILEtBQUssQ0FBQ0csTUFBTixHQUFlLEdBQXpDLEVBQThDO01BQ25EUCxxQkFBcUIsQ0FBQyxLQUFELENBQXJCO0lBQ0Q7O0lBQUE7RUFDRixDQVJrQyxFQVFoQyxDQUFDRixZQUFELENBUmdDLENBQW5DO0VBVUEsSUFBTVUsVUFBVSxHQUFHQyxvREFBTSxFQUF6QjtFQUNBLElBQU1DLGtCQUFrQixHQUFHUix5REFBVyxDQUFDLFlBQU07SUFDM0NNLFVBQVUsQ0FBQ0csT0FBWCxDQUFtQkMsS0FBbkI7RUFDRCxDQUZxQyxFQUVuQyxDQUFDSixVQUFVLENBQUNHLE9BQVosQ0FGbUMsQ0FBdEM7RUFJQSxJQUFNRSxjQUFjLEdBQUdYLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3hDVyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaLEVBQXFCWixDQUFDLENBQUNFLE1BQUYsQ0FBU1csS0FBOUI7SUFDQSxJQUFNQyxhQUFhLEdBQUcsSUFBSUMsUUFBSixFQUF0QjtJQUNBLEdBQUdDLE9BQUgsQ0FBV0MsSUFBWCxDQUFnQmpCLENBQUMsQ0FBQ0UsTUFBRixDQUFTVyxLQUF6QixFQUFnQyxVQUFDSyxJQUFELEVBQVU7TUFDeENKLGFBQWEsQ0FBQ0ssTUFBZCxDQUFxQixPQUFyQixFQUE4QkQsSUFBOUI7SUFDRCxDQUZEO0lBSUEsT0FBT2xDLFFBQVEsQ0FBQztNQUNkb0MsSUFBSSxFQUFFQyxvRUFEUTtNQUVkQyxJQUFJLEVBQUVSO0lBRlEsQ0FBRCxDQUFmO0VBSUQsQ0FYaUMsQ0FBbEM7RUFhQSxJQUFNUyxhQUFhLEdBQUd4Qix5REFBVyxDQUFDLFVBQUN5QixLQUFEO0lBQUEsT0FBVyxZQUFNO01BQ2pEeEMsUUFBUSxDQUFDO1FBQ1BvQyxJQUFJLEVBQUVLLDJEQURDO1FBRVBILElBQUksRUFBRUU7TUFGQyxDQUFELENBQVI7SUFJRCxDQUxpQztFQUFBLENBQUQsQ0FBakM7RUFPQSxJQUFNRSxjQUFjLEdBQUczQix5REFBVyxDQUFDLFlBQU07SUFDdkNoQixXQUFXLENBQUMsS0FBRCxDQUFYO0VBQ0QsQ0FGaUMsRUFFL0IsRUFGK0IsQ0FBbEM7RUFJQSxJQUFNNEMsUUFBUSxHQUFHNUIseURBQVcsQ0FBQyxZQUFNO0lBQ2pDLElBQUksQ0FBQ0osWUFBRCxJQUFpQixDQUFDQSxZQUFZLENBQUNRLElBQWIsRUFBdEIsRUFBNEM7TUFDMUMsT0FBT3lCLEtBQUssQ0FBQyxZQUFELENBQVo7SUFDRDs7SUFBQTs7SUFFRCxJQUFJakMsWUFBWSxDQUFDUyxNQUFiLEdBQXNCLEdBQTFCLEVBQStCO01BQzdCLE9BQU93QixLQUFLLENBQUMsZUFBRCxDQUFaO0lBQ0Q7O0lBQUE7SUFFRDVDLFFBQVEsQ0FBQztNQUNQb0MsSUFBSSxFQUFFUyxrRUFEQztNQUVQUCxJQUFJLEVBQUU7UUFDSlEsTUFBTSxFQUFFaEQsSUFBSSxDQUFDaUQsRUFEVDtRQUVKckMsT0FBTyxFQUFFQztNQUZMO0lBRkMsQ0FBRCxDQUFSO0lBUUFaLFdBQVcsQ0FBQyxLQUFELENBQVg7RUFDRCxDQWxCMkIsRUFrQnpCLENBQUNZLFlBQUQsQ0FsQnlCLENBQTVCO0VBb0JBLE9BQ0UsTUFBQyxTQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLElBQUQ7SUFBTSxRQUFRLEVBQUVnQyxRQUFoQjtJQUEwQixPQUFPLEVBQUMscUJBQWxDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLFlBQUQ7SUFDRSxLQUFLLEVBQUVoQyxZQURUO0lBRUUsUUFBUSxFQUFFRyxlQUZaO0lBR0UsS0FBSyxFQUFFO01BQ0xrQyxNQUFNLEVBQUUsTUFESDtNQUVMQyxPQUFPLEVBQUUsTUFGSjtNQUdMQyxRQUFRLEVBQUU7SUFITCxDQUhUO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixFQVVFO0lBQ0ksSUFBSSxFQUFDLE1BRFQ7SUFFSSxJQUFJLEVBQUMsT0FGVDtJQUdJLFFBQVEsTUFIWjtJQUlJLE1BQU0sTUFKVjtJQUtJLEdBQUcsRUFBRTdCLFVBTFQ7SUFNSSxRQUFRLEVBQUVLLGNBTmQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQVZGLEVBa0JFLE1BQUMsZUFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyxlQUFEO0lBQWlCLE9BQU8sRUFBRUgsa0JBQTFCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLHlEQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixDQURGLEVBSUUsTUFBQyxZQUFEO0lBQWMsSUFBSSxFQUFDLFFBQW5CO0lBQTRCLGtCQUFrQixFQUFFNUIsa0JBQWhEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsa0JBSkYsRUFLRSxNQUFDLFlBQUQ7SUFBYyxPQUFPLEVBQUUrQyxjQUF2QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLGtCQUxGLENBbEJGLEVBeUJFLE1BQUMsb0JBQUQ7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUNHdEMsVUFBVSxJQUFJQSxVQUFVLENBQUNFLEdBQVgsQ0FBZSxVQUFDQyxDQUFELEVBQUk0QyxDQUFKO0lBQUEsT0FDNUIsTUFBQyxjQUFEO01BQWdCLEdBQUcsRUFBRTVDLENBQXJCO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FDRSxNQUFDLEtBQUQ7TUFDRSxHQUFHLDZDQUFzQ0EsQ0FBdEMsQ0FETDtNQUVFLEdBQUcsRUFBRUEsQ0FGUDtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBREYsRUFLRSxNQUFDLG9CQUFEO01BQXNCLE9BQU8sRUFBRWdDLGFBQWEsQ0FBQ1ksQ0FBRCxDQUE1QztNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQ0UsTUFBQyx1REFBRDtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBREYsQ0FMRixDQUQ0QjtFQUFBLENBQWYsQ0FEakIsQ0F6QkYsQ0FERixDQURGO0FBMkNELENBOUdEOztHQUFNdEQsYztVQUNhSSx1RCxFQUVNQyx1RDs7O09BSG5CTCxjO0FBZ0hOQSxjQUFjLENBQUN1RCxTQUFmLEdBQTJCO0VBQ3pCdEQsSUFBSSxFQUFFdUQsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFERTtFQUV6QnhELFdBQVcsRUFBRXNELGlEQUFTLENBQUNHLElBQVYsQ0FBZUQ7QUFGSCxDQUEzQjtBQUtlMUQsNkVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JQQTtBQUFBO0FBQWU7QUFDZjtBQUNBLEMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjBkMWJkZGVhYTkyYTA0YTcwNDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBSRU1PVkVfSU1BR0UsIFVQREFURV9QT1NUX1JFUVVFU1QsIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgVGV4dEFyZWEgZnJvbSAncmVhY3QtdGV4dGFyZWEtYXV0b3NpemUnO1xyXG5cclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEZhUmVnSW1hZ2UgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmltcG9ydCB7IE1kQ2FuY2VsIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbmltcG9ydCBkZXZpY2UgZnJvbSAnLi4vdXRpbHMvZGV2aWNlJztcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5gO1xyXG5cclxuY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBDb250ZW50SW5wdXQgPSBzdHlsZWQoVGV4dEFyZWEpYFxyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtaW4taGVpZ2h0OiA5MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZVVwbG9hZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogOTMlO1xyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuXHJcbiAgQG1lZGlhICR7ZGV2aWNlLm1vYmlsZUx9IHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEltYWdlRGVsZXRlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0cHg7XHJcbiAgcmlnaHQ6IDFweDtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgQnV0dG9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgd2lkdGg6IDkzJTtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlVXBsb2FkSWNvbiA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICMxODY0YWI7XHJcbiAgZm9udC1zaXplOiAzN3B4O1xyXG4gIG1hcmdpbjogLTdweCA1cHggMHB4IDBweDtcclxuICBvcGFjaXR5OiAwLjU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3VibWl0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBhbGw6IHVuc2V0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNThweDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxODY0YWI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBvcGFjaXR5OiAke3Byb3BzID0+IChwcm9wcy5pc0F2YWlsYWJsZVBvc3RpbmcgPyAxIDogMC42KX07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG5gO1xyXG5cclxuY29uc3QgQ2FuY2VsQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBhbGw6IHVuc2V0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogNThweDtcclxuICBoZWlnaHQ6IDI4cHg7IFxyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlODUzN2M7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0VXBkYXRlRm9ybSA9ICh7IHBvc3QsIHNldEVkaXRNb2RlIH0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IHsgaW1hZ2VQYXRocyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBpbWFnZVBhdGhzID0gcG9zdC5JbWFnZXMubWFwKCh2KSA9PiB2LnNyYyk7XHJcbiAgY29uc3QgW2NvbnRlbnRJbnB1dCwgc2V0Q29udGVudElucHV0XSA9IHVzZVN0YXRlKHBvc3QuY29udGVudCk7XHJcbiAgY29uc3QgW2lzQXZhaWxhYmxlUG9zdGluZywgc2V0SXNBdmFpbGFibGVQb3N0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VDb250ZW50ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGNvbnN0IHt0YXJnZXQ6IHt2YWx1ZX19ID0gZTtcclxuICAgIHNldENvbnRlbnRJbnB1dChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpKSB7XHJcbiAgICAgIHNldElzQXZhaWxhYmxlUG9zdGluZyh0cnVlKTtcclxuICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID09PSAwIHx8IHZhbHVlLmxlbmd0aCA+IDUwMCkge1xyXG4gICAgICBzZXRJc0F2YWlsYWJsZVBvc3RpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuICB9LCBbY29udGVudElucHV0XSk7XHJcblxyXG4gIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcbiAgXHJcbiAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2ltYWdlJywgZS50YXJnZXQuZmlsZXMpO1xyXG4gICAgY29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKGUudGFyZ2V0LmZpbGVzLCAoZmlsZSkgPT4ge1xyXG4gICAgICBpbWFnZUZvcm1EYXRhLmFwcGVuZCgnaW1hZ2UnLCBmaWxlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgICAgZGF0YTogaW1hZ2VGb3JtRGF0YSxcclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvblJlbW92ZUltYWdlID0gdXNlQ2FsbGJhY2soKGluZGV4KSA9PiAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9JTUFHRSxcclxuICAgICAgZGF0YTogaW5kZXgsXHJcbiAgICB9KVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBvbkNhbmNlbFVwZGF0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIHNldEVkaXRNb2RlKGZhbHNlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKCFjb250ZW50SW5wdXQgfHwgIWNvbnRlbnRJbnB1dC50cmltKCkgKSB7XHJcbiAgICAgIHJldHVybiBhbGVydCgn6riA7J2EIOyekeyEse2VtOyjvOyEuOyalC4nKVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgaWYgKGNvbnRlbnRJbnB1dC5sZW5ndGggPiA1MDApIHtcclxuICAgICAgcmV0dXJuIGFsZXJ0KCfquIDsnpDsiJjqsIAg64SI66y0IOunjuyKteuLiOuLpC4nKTtcclxuICAgIH07XHJcblxyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBVUERBVEVfUE9TVF9SRVFVRVNULFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgcG9zdElkOiBwb3N0LmlkLFxyXG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRJbnB1dCxcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0RWRpdE1vZGUoZmFsc2UpO1xyXG4gIH0sIFtjb250ZW50SW5wdXRdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cclxuICAgICAgICA8Q29udGVudElucHV0XHJcbiAgICAgICAgICB2YWx1ZT17Y29udGVudElucHV0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlQ29udGVudH1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHJlc2l6ZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgIG91dGxpbmU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgICAgcmVmPXtpbWFnZUlucHV0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b25Db250YWluZXI+XHJcbiAgICAgICAgICA8SW1hZ2VVcGxvYWRJY29uIG9uQ2xpY2s9e29uQ2xpY2tJbWFnZVVwbG9hZH0+XHJcbiAgICAgICAgICAgIDxGYVJlZ0ltYWdlIC8+XHJcbiAgICAgICAgICA8L0ltYWdlVXBsb2FkSWNvbj5cclxuICAgICAgICAgIDxTdWJtaXRCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGlzQXZhaWxhYmxlUG9zdGluZz17aXNBdmFpbGFibGVQb3N0aW5nfT7siJjsoJU8L1N1Ym1pdEJ1dHRvbj5cclxuICAgICAgICAgIDxDYW5jZWxCdXR0b24gb25DbGljaz17b25DYW5jZWxVcGRhdGV9Puy3qOyGjDwvQ2FuY2VsQnV0dG9uPlxyXG4gICAgICAgIDwvQnV0dG9uQ29udGFpbmVyPlxyXG4gICAgICAgIDxJbWFnZVVwbG9hZENvbnRhaW5lcj5cclxuICAgICAgICAgIHtpbWFnZVBhdGhzICYmIGltYWdlUGF0aHMubWFwKCh2LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxJbWFnZUNvbnRhaW5lciBrZXk9e3Z9PlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS9wb3N0SW1hZ2VzLyR7dn1gfSBcclxuICAgICAgICAgICAgICAgIGFsdD17dn1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxJbWFnZURlbGV0ZUNvbnRhaW5lciBvbkNsaWNrPXtvblJlbW92ZUltYWdlKGkpfT5cclxuICAgICAgICAgICAgICAgIDxNZENhbmNlbCAvPlxyXG4gICAgICAgICAgICAgIDwvSW1hZ2VEZWxldGVDb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0ltYWdlVXBsb2FkQ29udGFpbmVyPlxyXG4gICAgICA8L0Zvcm0+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn07XHJcblxyXG5Qb3N0VXBkYXRlRm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgcG9zdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG4gIHNldEVkaXRNb2RlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdFVwZGF0ZUZvcm07XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcmVhZE9ubHlFcnJvcihuYW1lKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlxcXCJcIiArIG5hbWUgKyBcIlxcXCIgaXMgcmVhZC1vbmx5XCIpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=