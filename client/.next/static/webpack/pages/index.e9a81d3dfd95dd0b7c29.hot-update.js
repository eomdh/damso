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
  })), __jsx(ContentInput, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Rm9ybS5qcyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJGb3JtQ29udGFpbmVyIiwiZm9ybSIsIkZvcm1VcFNpZGVDb250YWluZXIiLCJQcm9maWxlSW1hZ2VDb250YWluZXIiLCJDb250ZW50SW5wdXQiLCJUZXh0QXJlYSIsIkljb25Db250YWluZXIiLCJTdWJtaXRCdXR0b24iLCJidXR0b24iLCJwcm9wcyIsImlzQXZhaWxhYmxlUG9zdGluZyIsIkltYWdlVXBsb2FkQ29udGFpbmVyIiwiSW1hZ2VDb250YWluZXIiLCJJbWFnZSIsImltZyIsIkltYWdlRGVsZXRlQ29udGFpbmVyIiwiUG9zdEZvcm0iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsImlzTG9nZ2VkSW4iLCJwb3N0IiwiaW1hZ2VQYXRocyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImNvbnRlbnQiLCJzZXRDb250ZW50Iiwib25DaGFuZ2VDb250ZW50IiwidXNlQ2FsbGJhY2siLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJ0cmltIiwic2V0SXNBdmFpbGFibGVQb3N0aW5nIiwibGVuZ3RoIiwiaW1hZ2VJbnB1dCIsInVzZVJlZiIsIm9uQ2xpY2tJbWFnZVVwbG9hZCIsImN1cnJlbnQiLCJjbGljayIsIm9uQ2hhbmdlSW1hZ2VzIiwiaW1hZ2VGb3JtRGF0YSIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsImNhbGwiLCJmaWxlcyIsImYiLCJhcHBlbmQiLCJjb25zb2xlIiwibG9nIiwib25TdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImFkZFBvc3QiLCJyZXF1aXJlIiwicmVzaXplIiwib3V0bGluZSIsIm92ZXJmbG93IiwibWFwIiwicGF0aCIsImkiLCJ3aWR0aCIsIm9uQ2xpY2tEZWxldGVJbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsb0NBQWY7S0FBTUYsUztBQUtOLElBQU1HLGFBQWEsR0FBR0YseURBQU0sQ0FBQ0csSUFBVjtFQUFBO0VBQUE7QUFBQSxtR0FBbkI7TUFBTUQsYTtBQVFOLElBQU1FLG1CQUFtQixHQUFHSix5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLGdDQUF6QjtNQUFNRyxtQjtBQUtOLElBQU1DLHFCQUFxQixHQUFHTCx5REFBTSxDQUFDQyxHQUFWO0VBQUE7RUFBQTtBQUFBLG9GQUEzQjtNQUFNSSxxQjtBQVFOLElBQU1DLFlBQVksR0FBR04saUVBQU0sQ0FBQ08sK0RBQUQsQ0FBVDtFQUFBO0VBQUE7QUFBQSxtSUFBbEI7TUFBTUQsWTtBQVlOLElBQU1FLGFBQWEsR0FBR1IseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSxxSkFBbkI7TUFBTU8sYTtBQWNOLElBQU1DLFlBQVksR0FBR1QseURBQU0sQ0FBQ1UsTUFBVjtFQUFBO0VBQUE7QUFBQSw2VUFjTCxVQUFBQyxLQUFLO0VBQUEsT0FBS0EsS0FBSyxDQUFDQyxrQkFBTixHQUEyQixDQUEzQixHQUErQixHQUFwQztBQUFBLENBZEEsQ0FBbEI7TUFBTUgsWTtBQXlCTixJQUFNSSxvQkFBb0IsR0FBR2IseURBQU0sQ0FBQ0MsR0FBVjtFQUFBO0VBQUE7QUFBQSwrQkFBMUI7TUFBTVksb0I7QUFLTixJQUFNQyxjQUFjLEdBQUdkLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsMEJBQXBCO01BQU1hLGM7QUFJTixJQUFNQyxLQUFLLEdBQUdmLHlEQUFNLENBQUNnQixHQUFWO0VBQUE7RUFBQTtBQUFBLG1DQUFYO09BQU1ELEs7QUFLTixJQUFNRSxvQkFBb0IsR0FBR2pCLHlEQUFNLENBQUNDLEdBQVY7RUFBQTtFQUFBO0FBQUEsMkxBQTFCO09BQU1nQixvQjs7QUFpQk4sSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtFQUFBOztFQUNyQixtQkFBdUJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtJQUFBLE9BQVdBLEtBQUssQ0FBQ0MsSUFBakI7RUFBQSxDQUFELENBQWxDO0VBQUEsSUFBUUMsVUFBUixnQkFBUUEsVUFBUjs7RUFDQSxvQkFBdUJILCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtJQUFBLE9BQVdBLEtBQUssQ0FBQ0csSUFBakI7RUFBQSxDQUFELENBQWxDO0VBQUEsSUFBUUMsVUFBUixpQkFBUUEsVUFBUjs7RUFDQSxJQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztFQUVBLGdCQUE4QkMsc0RBQVEsQ0FBQyxFQUFELENBQXRDO0VBQUEsSUFBT0MsT0FBUDtFQUFBLElBQWdCQyxVQUFoQjs7RUFDQSxJQUFNQyxlQUFlLEdBQUdDLHlEQUFXLENBQUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3pDLElBQWdCQyxLQUFoQixHQUEwQkQsQ0FBMUIsQ0FBT0UsTUFBUCxDQUFnQkQsS0FBaEI7SUFDQUosVUFBVSxDQUFDRyxDQUFDLENBQUNFLE1BQUYsQ0FBU0QsS0FBVixDQUFWOztJQUNBLElBQUlBLEtBQUssQ0FBQ0UsSUFBTixFQUFKLEVBQWtCO01BQ2hCQyxxQkFBcUIsQ0FBQyxJQUFELENBQXJCO0lBQ0QsQ0FGRCxNQUVPLElBQUlILEtBQUssQ0FBQ0ksTUFBTixLQUFpQixDQUFqQixJQUFzQkosS0FBSyxDQUFDSSxNQUFOLEdBQWUsR0FBekMsRUFBOEM7TUFDbkRELHFCQUFxQixDQUFDLEtBQUQsQ0FBckI7SUFDRDs7SUFBQTtFQUNGLENBUmtDLEVBUWhDLENBQUNSLE9BQUQsQ0FSZ0MsQ0FBbkM7RUFVQSxJQUFNVSxVQUFVLEdBQUdDLG9EQUFNLEVBQXpCO0VBQ0EsSUFBTUMsa0JBQWtCLEdBQUdULHlEQUFXLENBQUMsWUFBTTtJQUMzQ08sVUFBVSxDQUFDRyxPQUFYLENBQW1CQyxLQUFuQjtFQUNELENBRnFDLEVBRW5DLENBQUNKLFVBQVUsQ0FBQ0csT0FBWixDQUZtQyxDQUF0QztFQUlBLElBQU1FLGNBQWMsR0FBR1oseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU87SUFDeEMsSUFBTVksYUFBYSxHQUFHLElBQUlDLFFBQUosRUFBdEI7SUFDQSxHQUFHQyxPQUFILENBQVdDLElBQVgsQ0FBZ0JmLENBQUMsQ0FBQ0UsTUFBRixDQUFTYyxLQUF6QixFQUFnQyxVQUFBQyxDQUFDLEVBQUk7TUFDbkNMLGFBQWEsQ0FBQ00sTUFBZCxDQUFxQixPQUFyQixFQUE4QkQsQ0FBOUI7SUFDRCxDQUZEO0lBSUFFLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUixhQUFaO0VBQ0QsQ0FQaUMsQ0FBbEM7O0VBUUEsaUJBQW9EakIsc0RBQVEsQ0FBQyxLQUFELENBQTVEO0VBQUEsSUFBT2Ysa0JBQVA7RUFBQSxJQUEyQndCLHFCQUEzQjs7RUFFQSxJQUFNaUIsUUFBUSxHQUFHdEIseURBQVcsQ0FBQyxVQUFDQyxDQUFELEVBQU87SUFDbENBLENBQUMsQ0FBQ3NCLGNBQUY7SUFDQTdCLFFBQVEsQ0FBQzhCLHNEQUFELENBQVI7SUFDQTFCLFVBQVUsQ0FBQyxFQUFELENBQVY7RUFDRCxDQUoyQixFQUl6QixFQUp5QixDQUE1QjtFQU1BLE9BQ0UsTUFBQyxTQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLGFBQUQ7SUFBZSxRQUFRLEVBQUV3QixRQUF6QjtJQUFtQyxPQUFPLEVBQUMscUJBQTNDO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLG1CQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLHFCQUFEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDRSxNQUFDLHFEQUFEO0lBQWMsR0FBRyxFQUFFRyxtQkFBTyxDQUFDLDJDQUFELENBQTFCO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFERixDQURGLEVBSUUsTUFBQyxZQUFEO0lBQ0UsV0FBVyxFQUFFbEMsVUFBVSxHQUFHLGlCQUFILEdBQXVCLGVBRGhEO0lBRUUsUUFBUSxFQUFFQSxVQUFVLEdBQUcsS0FBSCxHQUFXLElBRmpDO0lBR0UsS0FBSyxFQUFFTSxPQUhUO0lBSUUsUUFBUSxFQUFFRSxlQUpaO0lBS0UsS0FBSyxFQUFFO01BQ0wyQixNQUFNLEVBQUUsTUFESDtNQUVMQyxPQUFPLEVBQUUsTUFGSjtNQUdMQyxRQUFRLEVBQUU7SUFITCxDQUxUO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFKRixFQWVFO0lBQ0UsSUFBSSxFQUFDLE1BRFA7SUFFRSxRQUFRLE1BRlY7SUFHRSxNQUFNLE1BSFI7SUFJRSxHQUFHLEVBQUVyQixVQUpQO0lBS0UsUUFBUSxFQUFFSyxjQUxaO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFmRixFQXNCRSxNQUFDLGFBQUQ7SUFBZSxPQUFPLEVBQUVILGtCQUF4QjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0UsTUFBQyx5REFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEVBREYsQ0F0QkYsRUF5QkUsTUFBQyxZQUFEO0lBQWMsSUFBSSxFQUFDLFFBQW5CO0lBQTRCLGtCQUFrQixFQUFFNUIsa0JBQWhEO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsa0JBekJGLENBREYsRUE4QkUsTUFBQyxvQkFBRDtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ0dZLFVBQVUsSUFBSUEsVUFBVSxDQUFDb0MsR0FBWCxDQUFlLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtJQUFBLE9BQzVCLE1BQUMsY0FBRDtNQUFnQixHQUFHLEVBQUVELElBQXJCO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsR0FDRSxNQUFDLEtBQUQ7TUFDRSxHQUFHLFlBQUtBLElBQUwsQ0FETDtNQUVFLEdBQUcsRUFBRUEsSUFGUDtNQUdFLEtBQUssRUFBRTtRQUFFRSxLQUFLLEVBQUU7TUFBVCxDQUhUO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUEsRUFERixFQU1FLE1BQUMsb0JBQUQ7TUFBc0IsT0FBTyxFQUFFQyxrQkFBa0IsQ0FBQ0YsQ0FBRCxDQUFqRDtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQ0UsTUFBQyx5REFBRDtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEVBREYsQ0FORixDQUQ0QjtFQUFBLENBQWYsQ0FEakIsQ0E5QkYsQ0FERixDQURGO0FBaURELENBdEZEOztHQUFNNUMsUTtVQUNtQkMsdUQsRUFDQUEsdUQsRUFDTk8sdUQ7OztPQUhiUixRO0FBd0ZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lOWE4MWQzZGZkOTVkZDBiN2MyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFRleHRBcmVhIGZyb20gJ3JlYWN0LXRleHRhcmVhLWF1dG9zaXplJztcclxuaW1wb3J0IHsgRmFSZWdJbWFnZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgSW9NZFJlbW92ZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5pbXBvcnQgeyBhZGRQb3N0IH0gZnJvbSBcIi4uL3JlZHVjZXJzL3Bvc3RcIjtcclxuaW1wb3J0IFByb2ZpbGVJbWFnZSBmcm9tIFwiLi9Qcm9maWxlSW1hZ2VcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtQ29udGFpbmVyID0gc3R5bGVkLmZvcm1gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNlNmVjZjA7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5jb25zdCBGb3JtVXBTaWRlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gO1xyXG5cclxuY29uc3QgUHJvZmlsZUltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogNTVweDtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRlbnRJbnB1dCA9IHN0eWxlZChUZXh0QXJlYSlgXHJcbiAgd2lkdGg6IDgwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICA6ZGlzYWJsZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSWNvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTMuNXB4O1xyXG4gIHJpZ2h0OiAxMDdweDtcclxuICBjb2xvcjogIzE4NjRhYjtcclxuICBmb250LXNpemU6IDM4cHg7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFN1Ym1pdEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYWxsOiB1bnNldDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4NjRhYjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJvdHRvbTogMTBweDtcclxuICByaWdodDogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogJHtwcm9wcyA9PiAocHJvcHMuaXNBdmFpbGFibGVQb3N0aW5nID8gMSA6IDAuNSl9O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW1hZ2VVcGxvYWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDUwJTtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbmA7XHJcblxyXG5jb25zdCBJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuYDtcclxuXHJcbmNvbnN0IEltYWdlRGVsZXRlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAycHg7XHJcbiAgcmlnaHQ6IDJweDtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcGFkZGluZzogMXB4O1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQb3N0Rm9ybSA9ICgpID0+IHtcclxuICBjb25zdCB7IGlzTG9nZ2VkSW4gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgY29uc3QgeyBpbWFnZVBhdGhzIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlQ29udGVudCA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBjb25zdCB7dGFyZ2V0OiB7dmFsdWV9fSA9IGU7XHJcbiAgICBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGlmICh2YWx1ZS50cmltKCkpIHtcclxuICAgICAgc2V0SXNBdmFpbGFibGVQb3N0aW5nKHRydWUpO1xyXG4gICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPT09IDAgfHwgdmFsdWUubGVuZ3RoID4gNTAwKSB7XHJcbiAgICAgIHNldElzQXZhaWxhYmxlUG9zdGluZyhmYWxzZSk7XHJcbiAgICB9O1xyXG4gIH0sIFtjb250ZW50XSk7XHJcblxyXG4gIGNvbnN0IGltYWdlSW5wdXQgPSB1c2VSZWYoKTtcclxuICBjb25zdCBvbkNsaWNrSW1hZ2VVcGxvYWQgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpbWFnZUlucHV0LmN1cnJlbnQuY2xpY2soKTtcclxuICB9LCBbaW1hZ2VJbnB1dC5jdXJyZW50XSk7XHJcbiAgXHJcbiAgY29uc3Qgb25DaGFuZ2VJbWFnZXMgPSB1c2VDYWxsYmFjaygoZSkgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2VGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKGUudGFyZ2V0LmZpbGVzLCBmID0+IHtcclxuICAgICAgaW1hZ2VGb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBmKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGltYWdlRm9ybURhdGEpO1xyXG4gIH0pO1xyXG4gIGNvbnN0IFtpc0F2YWlsYWJsZVBvc3RpbmcsIHNldElzQXZhaWxhYmxlUG9zdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gdXNlQ2FsbGJhY2soKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRpc3BhdGNoKGFkZFBvc3QpO1xyXG4gICAgc2V0Q29udGVudCgnJyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEZvcm1Db250YWluZXIgb25TdWJtaXQ9e29uU3VibWl0fSBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxyXG4gICAgICAgIDxGb3JtVXBTaWRlQ29udGFpbmVyPlxyXG4gICAgICAgICAgPFByb2ZpbGVJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFByb2ZpbGVJbWFnZSBzcmM9e3JlcXVpcmUoJy4uL2ltYWdlL3VzZXIucG5nJyl9IC8+XHJcbiAgICAgICAgICA8L1Byb2ZpbGVJbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICAgIDxDb250ZW50SW5wdXQgXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtpc0xvZ2dlZEluID8gXCLsmKTripjsnYAg7Ja065akIOydvOydtCDsnojsl4jrgpjsmpQ/XCIgOiBcIuuhnOq3uOyduCDtm4Qg7IKs7Jqp7ZW07KO87IS47JqULlwifVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNMb2dnZWRJbiA/IGZhbHNlIDogdHJ1ZX1cclxuICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUNvbnRlbnR9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcmVzaXplOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICBvdXRsaW5lOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgICAgcmVmPXtpbWFnZUlucHV0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbWFnZXN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEljb25Db250YWluZXIgb25DbGljaz17b25DbGlja0ltYWdlVXBsb2FkfT5cclxuICAgICAgICAgICAgPEZhUmVnSW1hZ2UgLz5cclxuICAgICAgICAgIDwvSWNvbkNvbnRhaW5lcj5cclxuICAgICAgICAgIDxTdWJtaXRCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGlzQXZhaWxhYmxlUG9zdGluZz17aXNBdmFpbGFibGVQb3N0aW5nfT5cclxuICAgICAgICAgICAg6rKM7IucXHJcbiAgICAgICAgICA8L1N1Ym1pdEJ1dHRvbj5cclxuICAgICAgICA8L0Zvcm1VcFNpZGVDb250YWluZXI+XHJcbiAgICAgICAgPEltYWdlVXBsb2FkQ29udGFpbmVyPlxyXG4gICAgICAgICAge2ltYWdlUGF0aHMgJiYgaW1hZ2VQYXRocy5tYXAoKHBhdGgsIGkpID0+IChcclxuICAgICAgICAgICAgPEltYWdlQ29udGFpbmVyIGtleT17cGF0aH0+XHJcbiAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgc3JjPXtgJHtwYXRofWB9IFxyXG4gICAgICAgICAgICAgICAgYWx0PXtwYXRofVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SW1hZ2VEZWxldGVDb250YWluZXIgb25DbGljaz17b25DbGlja0RlbGV0ZUltYWdlKGkpfT5cclxuICAgICAgICAgICAgICAgIDxJb01kUmVtb3ZlIC8+XHJcbiAgICAgICAgICAgICAgPC9JbWFnZURlbGV0ZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9JbWFnZUNvbnRhaW5lcj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvSW1hZ2VVcGxvYWRDb250YWluZXI+XHJcbiAgICAgIDwvRm9ybUNvbnRhaW5lcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Rm9ybTsiXSwic291cmNlUm9vdCI6IiJ9