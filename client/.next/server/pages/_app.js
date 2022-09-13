module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_font_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1jCA");
/* harmony import */ var _public_font_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_font_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("AQn3");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Damso = ({
  Component
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("meta", {
    charSet: "utf-8"
  }), __jsx("title", null, "Damso")), __jsx(Component, null));
};

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].withRedux(Damso));

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "1jCA":
/***/ (function(module, exports) {



/***/ }),

/***/ "AQn3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: ./reducers/post.js
var post = __webpack_require__("p+NB");

// CONCATENATED MODULE: ./reducers/index.js





const rootReducer = (state, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combinedReducer = Object(external_redux_["combineReducers"])({
          user: user["x" /* default */],
          post: post["R" /* default */]
        });
        return combinedReducer(state, action);
      }
      ;
  }

  ;
};

/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./sagas/user.js




function loadMyInfoAPI() {
  return external_axios_default.a.get('/user');
}

;

function* loadMyInfo() {
  try {
    const result = yield Object(effects_["call"])(loadMyInfoAPI);
    yield Object(effects_["put"])({
      type: user["j" /* LOAD_MY_INFO_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["h" /* LOAD_MY_INFO_FAILURE */],
      error: err.response.data
    });
  }

  ;
}

;

function loadUserAPI(data) {
  return external_axios_default.a.get(`/user/${data}`);
}

;

function* loadUser(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserAPI, action.data);
    yield Object(effects_["put"])({
      type: user["m" /* LOAD_USER_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["k" /* LOAD_USER_FAILURE */],
      error: err.response.data
    });
  }

  ;
}

;

function logInAPI(data) {
  return external_axios_default.a.post('/user/login', data);
}

;

function* logIn(action) {
  try {
    const result = yield Object(effects_["call"])(logInAPI, action.data);
    yield Object(effects_["put"])({
      type: user["p" /* LOG_IN_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["n" /* LOG_IN_FAILURE */],
      error: err.response.data
    });
  }

  ;
}

;

function logOutAPI() {
  return external_axios_default.a.post('/user/logout');
}

;

function* logOut() {
  try {
    yield Object(effects_["call"])(logOutAPI);
    yield Object(effects_["put"])({
      type: user["s" /* LOG_OUT_SUCCESS */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["q" /* LOG_OUT_FAILURE */],
      error: err.response.data
    });
  }

  ;
}

;

function signUpAPI(data) {
  return external_axios_default.a.post('/user/signup', data);
}

;

function* signUp(action) {
  try {
    const result = yield Object(effects_["call"])(signUpAPI, action.data);
    console.log(result);
    yield Object(effects_["put"])({
      type: user["w" /* SIGN_UP_SUCCESS */]
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["u" /* SIGN_UP_FAILURE */],
      error: err.response.data
    });
  }

  ;
}

;

function changeIntroduceAPI(data) {
  return external_axios_default.a.patch('/user/introduce', {
    introduce: data
  });
}

;

function* changeIntroduce(action) {
  try {
    const result = yield Object(effects_["call"])(changeIntroduceAPI, action.data);
    yield Object(effects_["put"])({
      type: user["d" /* CHANGE_INTRODUCE_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["b" /* CHANGE_INTRODUCE_FAILURE */],
      error: err.response.data
    });
  }

  ;
}

;

function changeProfileImageAPI(data) {
  return external_axios_default.a.post('/user/image', data);
}

;

function* changeProfileImage(action) {
  try {
    const result = yield Object(effects_["call"])(changeProfileImageAPI, action.data);
    yield Object(effects_["put"])({
      type: user["g" /* CHANGE_PROFILE_IMAGE_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    yield Object(effects_["put"])({
      type: user["e" /* CHANGE_PROFILE_IMAGE_FAILURE */],
      error: err.response.data
    });
  }

  ;
}

;

function* watchLoadMyInfo() {
  yield Object(effects_["takeLatest"])(user["i" /* LOAD_MY_INFO_REQUEST */], loadMyInfo);
}

;

function* watchLoadUser() {
  yield Object(effects_["takeLatest"])(user["l" /* LOAD_USER_REQUEST */], loadUser);
}

;

function* watchLogIn() {
  yield Object(effects_["takeLatest"])(user["o" /* LOG_IN_REQUEST */], logIn);
}

;

function* watchLogOut() {
  yield Object(effects_["takeLatest"])(user["r" /* LOG_OUT_REQUEST */], logOut);
}

;

function* watchSignUp() {
  yield Object(effects_["takeLatest"])(user["v" /* SIGN_UP_REQUEST */], signUp);
}

;

function* watchChangeIntroduce() {
  yield Object(effects_["takeLatest"])(user["c" /* CHANGE_INTRODUCE_REQUEST */], changeIntroduce);
}

;

function* watchChangeProfileImage() {
  yield Object(effects_["takeLatest"])(user["f" /* CHANGE_PROFILE_IMAGE_REQUEST */], changeProfileImage);
}

;
function* userSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLoadMyInfo), Object(effects_["fork"])(watchLoadUser), Object(effects_["fork"])(watchLogIn), Object(effects_["fork"])(watchLogOut), Object(effects_["fork"])(watchSignUp), Object(effects_["fork"])(watchChangeIntroduce), Object(effects_["fork"])(watchChangeProfileImage)]);
}
;
// CONCATENATED MODULE: ./sagas/post.js





function loadPostAPI(data) {
  return external_axios_default.a.get(`/post/${data}`);
}

;

function* loadPost(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["t" /* LOAD_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["r" /* LOAD_POST_FAILURE */],
      error: err.response.data
    });
  }

  ;
}

;

function loadPostsAPI(lastId) {
  return external_axios_default.a.get(`/posts?lastId=${lastId || 0}`);
}

;

function* loadPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostsAPI, action.lastId);
    yield Object(effects_["put"])({
      type: post["q" /* LOAD_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["o" /* LOAD_POSTS_FAILURE */],
      error: err.response.data
    });
  }

  ;
}

;

function loadUserPostsAPI(data, lastId) {
  return external_axios_default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`);
}

;

function* loadUserPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserPostsAPI, action.data, action.lastId);
    yield Object(effects_["put"])({
      type: post["w" /* LOAD_USER_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["u" /* LOAD_USER_POSTS_FAILURE */],
      error: err.response.data
    });
  }

  ;
}

;

function loadHashtagPostsAPI(data, lastId) {
  return external_axios_default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

;

function* loadHashtagPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    yield Object(effects_["put"])({
      type: post["m" /* LOAD_HASHTAG_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["k" /* LOAD_HASHTAG_POSTS_FAILURE */],
      error: err.response.data
    });
  }

  ;
}

;

function addPostAPI(data) {
  return external_axios_default.a.post('/post/add', data);
}

;

function* addPost(action) {
  try {
    const result = yield Object(effects_["call"])(addPostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["f" /* ADD_POST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: user["a" /* ADD_POST_OF_ME */],
      data: result.data.id
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["d" /* ADD_POST_FAILURE */],
      error: err.response.data
    });
  }

  ;
}

;

function updatePostAPI(postId, data) {
  return external_axios_default.a.patch(`/post/${postId}/update`, data);
}

;

function* updatePost(action) {
  try {
    const result = yield Object(effects_["call"])(updatePostAPI, action.postId, action.data);
    yield Object(effects_["put"])({
      type: post["N" /* UPDATE_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["L" /* UPDATE_POST_FAILURE */],
      error: err.response.data
    });
  }

  ;
}

;

function removePostAPI(data) {
  return external_axios_default.a.delete(`/post/${data}/delete`);
}

;

function* removePost(action) {
  try {
    const result = yield Object(effects_["call"])(removePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["E" /* REMOVE_POST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: user["t" /* REMOVE_POST_OF_ME */],
      data: action.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["C" /* REMOVE_POST_FAILURE */],
      error: err.response.data
    });
  }

  ;
}

;

function uploadImagesAPI(data) {
  return external_axios_default.a.post('post/images', data);
}

;

function* uploadImages(action) {
  try {
    const result = yield Object(effects_["call"])(uploadImagesAPI, action.data);
    yield Object(effects_["put"])({
      type: post["Q" /* UPLOAD_IMAGES_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["O" /* UPLOAD_IMAGES_FAILURE */],
      error: err.response.data
    });
  }

  ;
}

;

function addCommentAPI(data) {
  return external_axios_default.a.post(`/post/${data.postId}/comment/add`, data);
}

;

function* addComment(action) {
  try {
    const result = yield Object(effects_["call"])(addCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: post["c" /* ADD_COMMENT_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["a" /* ADD_COMMENT_FAILURE */],
      error: err.response.data
    });
  }

  ;
}

;

function updateCommentAPI(data) {
  return external_axios_default.a.patch(`/post/${data.postId}/comment/${data.commentId}/update`, data);
}

;

function* updateComment(action) {
  try {
    const result = yield Object(effects_["call"])(updateCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: post["K" /* UPDATE_COMMENT_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["I" /* UPDATE_COMMENT_FAILURE */],
      error: err.response.data
    });
  }

  ;
}

;

function removeCommentAPI(data) {
  return external_axios_default.a.delete(`/post/${data.postId}/comment/${data.commentId}/delete`, data);
}

;

function* removeComment(action) {
  try {
    const result = yield Object(effects_["call"])(removeCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: post["A" /* REMOVE_COMMENT_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["y" /* REMOVE_COMMENT_FAILURE */],
      error: err.response.data
    });
  }

  ;
}

;

function likePostAPI(data) {
  return external_axios_default.a.patch(`/post/${data}/like`);
}

;

function* likePost(action) {
  try {
    const result = yield Object(effects_["call"])(likePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["j" /* LIKE_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["h" /* LIKE_POST_FAILURE */],
      error: err.response.data
    });
  }

  ;
}

;

function unlikePostAPI(data) {
  return external_axios_default.a.delete(`/post/${data}/like`);
}

;

function* unlikePost(action) {
  try {
    const result = yield Object(effects_["call"])(unlikePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["H" /* UNLIKE_POST_SUCCESS */],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(effects_["put"])({
      type: post["F" /* UNLIKE_POST_FAILURE */],
      error: err.response.data
    });
  }

  ;
}

;

function* watchLoadPost() {
  yield Object(effects_["takeLatest"])(post["s" /* LOAD_POST_REQUEST */], loadPost);
}

;

function* watchLoadPosts() {
  yield Object(effects_["takeLatest"])(post["p" /* LOAD_POSTS_REQUEST */], loadPosts);
}

;

function* watchLoadUserPosts() {
  yield Object(effects_["takeLatest"])(post["v" /* LOAD_USER_POSTS_REQUEST */], loadUserPosts);
}

;

function* watchLoadHashtagPosts() {
  yield Object(effects_["takeLatest"])(post["l" /* LOAD_HASHTAG_POSTS_REQUEST */], loadHashtagPosts);
}

;

function* watchAddPost() {
  yield Object(effects_["takeLatest"])(post["e" /* ADD_POST_REQUEST */], addPost);
}

;

function* watchUpdatePost() {
  yield Object(effects_["takeLatest"])(post["M" /* UPDATE_POST_REQUEST */], updatePost);
}

;

function* watchRemovePost() {
  yield Object(effects_["takeLatest"])(post["D" /* REMOVE_POST_REQUEST */], removePost);
}

;

function* watchUploadImages() {
  yield Object(effects_["takeLatest"])(post["P" /* UPLOAD_IMAGES_REQUEST */], uploadImages);
}

;

function* watchAddComment() {
  yield Object(effects_["takeLatest"])(post["b" /* ADD_COMMENT_REQUEST */], addComment);
}

;

function* watchUpdateComment() {
  yield Object(effects_["takeLatest"])(post["J" /* UPDATE_COMMENT_REQUEST */], updateComment);
}

;

function* watchRemoveComment() {
  yield Object(effects_["takeLatest"])(post["z" /* REMOVE_COMMENT_REQUEST */], removeComment);
}

;

function* watchLikePost() {
  yield Object(effects_["takeLatest"])(post["i" /* LIKE_POST_REQUEST */], likePost);
}

;

function* watchUnlikePost() {
  yield Object(effects_["takeLatest"])(post["G" /* UNLIKE_POST_REQUEST */], unlikePost);
}

;
function* postSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLoadPost), Object(effects_["fork"])(watchLoadPosts), Object(effects_["fork"])(watchLoadUserPosts), Object(effects_["fork"])(watchLoadHashtagPosts), Object(effects_["fork"])(watchAddPost), Object(effects_["fork"])(watchUpdatePost), Object(effects_["fork"])(watchRemovePost), Object(effects_["fork"])(watchUploadImages), Object(effects_["fork"])(watchAddComment), Object(effects_["fork"])(watchUpdateComment), Object(effects_["fork"])(watchRemoveComment), Object(effects_["fork"])(watchLikePost), Object(effects_["fork"])(watchUnlikePost)]);
}
;
// CONCATENATED MODULE: ./sagas/index.js




external_axios_default.a.defaults.baseURL = 'http://localhost:3065';
external_axios_default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(userSaga), Object(effects_["fork"])(postSaga)]);
}
;
// CONCATENATED MODULE: ./store/configureStore.js







const configureStore = () => {
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware];
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) : undefined;
  const store = Object(external_redux_["legacy_createStore"])(reducers, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ var store_configureStore = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "LAVF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_INTRODUCE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CHANGE_INTRODUCE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_INTRODUCE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CHANGE_PROFILE_IMAGE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CHANGE_PROFILE_IMAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CHANGE_PROFILE_IMAGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return REMOVE_POST_OF_ME; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  me: null,
  userInfo: null,
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  changeIntroduceLoading: false,
  changeIntroduceDone: false,
  changeIntroduceError: null
};
const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST";
const LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS";
const LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE";
const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const CHANGE_INTRODUCE_REQUEST = "CHANGE_INTRODUCE_REQUEST";
const CHANGE_INTRODUCE_SUCCESS = "CHANGE_INTRODUCE_SUCCESS";
const CHANGE_INTRODUCE_FAILURE = "CHANGE_INTRODUCE_FAILURE";
const CHANGE_PROFILE_IMAGE_REQUEST = "CHANGE_PROFILE_IMAGE_REQUEST";
const CHANGE_PROFILE_IMAGE_SUCCESS = "CHANGE_PROFILE_IMAGE_SUCCESS";
const CHANGE_PROFILE_IMAGE_FAILURE = "CHANGE_PROFILE_IMAGE_FAILURE";
const ADD_POST_OF_ME = "ADD_POST_OF_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = null;
        break;

      case LOAD_MY_INFO_SUCCESS:
        draft.me = action.data;
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        break;

      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;

      case LOAD_USER_REQUEST:
        draft.userInfo = null;
        draft.loadUserLoading = true;
        draft.loadUserDone = false;
        draft.loadUserError = null;
        break;

      case LOAD_USER_SUCCESS:
        draft.userInfo = action.data;
        draft.loadUserLoading = false;
        draft.loadUserDone = true;
        break;

      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;

      case LOG_IN_SUCCESS:
        draft.me = action.data;
        draft.logInLoading = false;
        draft.logInDone = true;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.logInDone = false;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_INTRODUCE_REQUEST:
        draft.changeIntroduceLoading = true;
        draft.changeIntroduceDone = false;
        draft.changeIntroduceError = null;
        break;

      case CHANGE_INTRODUCE_SUCCESS:
        draft.me.introduce = action.data.introduce;
        draft.changeIntroduceLoading = false;
        draft.changeIntroduceDone = true;
        break;

      case CHANGE_INTRODUCE_FAILURE:
        draft.changeIntroduceLoading = false;
        draft.changeIntroduceError = action.error;
        break;

      case CHANGE_PROFILE_IMAGE_REQUEST:
        draft.changeProfileImageLoading = true;
        draft.changeProfileImageDone = false;
        draft.changeProfileImageError = null;
        break;

      case CHANGE_PROFILE_IMAGE_SUCCESS:
        draft.me.profileImagePath = action.data.filename;
        draft.changeProfileImageLoading = false;
        draft.changeProfileImageDone = true;
        break;

      case CHANGE_PROFILE_IMAGE_FAILURE:
        draft.changeProfileImageLoading = false;
        draft.changeProfileImageError = action.error;
        break;

      case ADD_POST_OF_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(v => v.id === action.data);
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["x"] = (reducer);

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "p+NB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return OPEN_EDIT_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CLOSE_EDIT_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return UPDATE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return UPDATE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return UPDATE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_IMAGE_PATHS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return UPDATE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return UPDATE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return UPDATE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return REMOVE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return REMOVE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return REMOVE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return UNLIKE_POST_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  mainPosts: [],
  addPostImagePaths: [],
  updatePostImagePaths: [],
  singlePost: null,
  hasMorePosts: true,
  opendEditMode: false,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  updatePostLoading: false,
  updatePostDone: false,
  updatePostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  updateCommentLoading: false,
  updateCommentDone: false,
  updateCommentError: null,
  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null
};
const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
const OPEN_EDIT_MODE = 'OPEN_EDIT_MODE';
const CLOSE_EDIT_MODE = 'CLOSE_EDIT_MODE';
const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const LOAD_IMAGE_PATHS = 'LOAD_IMAGE_PATHS';
const REMOVE_IMAGE = 'REMOVE_IMAGE';
const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const UPDATE_COMMENT_REQUEST = 'UPDATE_COMMENT_REQUEST';
const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS';
const UPDATE_COMMENT_FAILURE = 'UPDATE_COMMENT_FAILURE';
const REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST';
const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS';
const REMOVE_COMMENT_FAILURE = 'REMOVE_COMMENT_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_POST_SUCCESS:
        draft.singlePost = action.data, draft.loadPostLoading = false;
        draft.loadPostDone = true;
        break;

      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;

      case LOAD_POSTS_REQUEST:
      case LOAD_USER_POSTS_REQUEST:
      case LOAD_HASHTAG_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
      case LOAD_USER_POSTS_SUCCESS:
      case LOAD_HASHTAG_POSTS_SUCCESS:
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        break;

      case LOAD_POSTS_FAILURE:
      case LOAD_USER_POSTS_FAILURE:
      case LOAD_HASHTAG_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.mainPosts.unshift(action.data);
        draft.addPostImagePaths = [];
        draft.addPostLoading = false;
        draft.addPostDone = true;
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case OPEN_EDIT_MODE:
        draft.opendEditMode = true;
        break;

      case CLOSE_EDIT_MODE:
        draft.opendEditMode = false;
        break;

      case UPDATE_POST_REQUEST:
        draft.updatePostLoading = true;
        draft.updatePostDone = false;
        draft.updatePostError = null;
        break;

      case UPDATE_POST_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.content = action.data.Content;
          post.updatedAt = action.data.updatedAt;

          if (action.data.Images) {
            if (Array.isArray(action.data.Images)) {
              post.Images = [];
              action.data.Images.map(v => {
                return post.Images.push({
                  src: v
                });
              });
            } else {
              post.Images = [{
                src: action.data.Images
              }];
            }

            ;
          }

          ;
          draft.updatePostImagePaths = [];
          draft.opendEditMode = false;
          draft.updatePostLoading = false;
          draft.updatePostDone = true;
          break;
        }

      case UPDATE_POST_FAILURE:
        draft.updatePostLoading = false;
        draft.updatePostError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.mainPosts.find(v => v.id === action.data.postId);
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;

      case UPLOAD_IMAGES_SUCCESS:
        if (action.data.type === 'addPost') {
          draft.addPostImagePaths = draft.addPostImagePaths.concat(action.data.image);
        } else if (action.data.type === 'updatePost') {
          draft.updatePostImagePaths = draft.updatePostImagePaths.concat(action.data.image);
        }

        ;
        draft.uploadImagesLoading = false;
        draft.uploadImagesDone = true;
        break;

      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;

      case LOAD_IMAGE_PATHS:
        draft.updatePostImagePaths = action.data;
        break;

      case REMOVE_IMAGE:
        if (action.data.type === 'addPost') {
          draft.addPostImagePaths = draft.addPostImagePaths.filter((v, i) => i !== action.data.index);
        } else if (action.data.type === 'updatePost') {
          draft.updatePostImagePaths = draft.updatePostImagePaths.filter((v, i) => i !== action.data.index);
        }

        ;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Comments.push(action.data);
          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break;
        }

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.data;
        break;

      case UPDATE_COMMENT_REQUEST:
        draft.updateCommentLoading = true;
        draft.updateCommentDone = false;
        draft.updateCommentError = null;
        break;

      case UPDATE_COMMENT_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          const comment = post.Comments.find(v => v.id === action.data.CommentId);
          comment.content = action.data.Content;
          comment.updatedAt = action.data.updatedAt;
          draft.updateCommentLoading = false;
          draft.updateCommentDone = true;
          break;
        }

      case UPDATE_COMMENT_FAILURE:
        draft.updateCommentLoading = false;
        draft.updateCommentError = action.data;
        break;

      case REMOVE_COMMENT_REQUEST:
        draft.removeCommentLoading = true;
        draft.removeCommentDone = false;
        draft.removeCommentError = null;
        break;

      case REMOVE_COMMENT_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Comments = post.Comments.filter(v => v.id !== action.data.CommentId);
          draft.removeCommentLoading = false;
          draft.removeCommentDone = true;
          break;
        }

      case REMOVE_COMMENT_FAILURE:
        draft.removeCommentLoading = false;
        draft.removeCommentError = action.data;
        break;

      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;

      case LIKE_POST_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers.push({
            id: action.data.UserId
          });
          draft.likePostLoading = false;
          draft.likePostDone = true;
          break;
        }

      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.data;
        break;

      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;

      case UNLIKE_POST_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
          draft.unlikePostLoading = false;
          draft.unlikePostDone = true;
          break;
        }

      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.data;
        break;

      default:
        break;
    }

    ;
  });
};

/* harmony default export */ __webpack_exports__["R"] = (reducer);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });