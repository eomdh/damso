webpackHotUpdate_N_E("pages/_app",{

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

var _marked = /*#__PURE__*/_regeneratorRuntime().mark(loadPosts),
    _marked2 = /*#__PURE__*/_regeneratorRuntime().mark(addPost),
    _marked3 = /*#__PURE__*/_regeneratorRuntime().mark(removePost),
    _marked4 = /*#__PURE__*/_regeneratorRuntime().mark(addComment),
    _marked5 = /*#__PURE__*/_regeneratorRuntime().mark(removeComment),
    _marked6 = /*#__PURE__*/_regeneratorRuntime().mark(likePost),
    _marked7 = /*#__PURE__*/_regeneratorRuntime().mark(unlikePost),
    _marked8 = /*#__PURE__*/_regeneratorRuntime().mark(watchLoadPosts),
    _marked9 = /*#__PURE__*/_regeneratorRuntime().mark(watchAddPost),
    _marked10 = /*#__PURE__*/_regeneratorRuntime().mark(watchRemovePost),
    _marked11 = /*#__PURE__*/_regeneratorRuntime().mark(watchAddComment),
    _marked12 = /*#__PURE__*/_regeneratorRuntime().mark(watchRemoveComment),
    _marked13 = /*#__PURE__*/_regeneratorRuntime().mark(watchLikePost),
    _marked14 = /*#__PURE__*/_regeneratorRuntime().mark(watchUnlikePost),
    _marked15 = /*#__PURE__*/_regeneratorRuntime().mark(postSaga);






function loadPostsAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/posts');
}

;

function loadPosts() {
  var result;
  return _regeneratorRuntime().wrap(function loadPosts$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostsAPI);

        case 3:
          result = _context.sent;
          _context.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
            data: result.data
          });

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          _context.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
            error: _context.t0.response.data
          });

        case 12:
          ;

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, null, [[0, 8]]);
}

;

function addPostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/add', {
    content: data
  });
}

;

function addPost(action) {
  var result;
  return _regeneratorRuntime().wrap(function addPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);

        case 3:
          result = _context2.sent;
          _context2.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context2.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_OF_ME"],
            data: result.data.id
          });

        case 8:
          _context2.next = 14;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          _context2.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
            error: _context2.t0.response.data
          });

        case 14:
          ;

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, null, [[0, 10]]);
}

;

function removePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/post/".concat(data, "/delete"));
}

;

function removePost(action) {
  var result;
  return _regeneratorRuntime().wrap(function removePost$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);

        case 3:
          result = _context3.sent;
          _context3.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
            data: action.data
          });

        case 6:
          _context3.next = 8;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
            data: action.data
          });

        case 8:
          _context3.next = 14;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          _context3.next = 14;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
            error: _context3.t0.response.data
          });

        case 14:
          ;

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked3, null, [[0, 10]]);
}

;

function addCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/post/".concat(data.postId, "/comment/add"), data);
}

;

function addComment(action) {
  var result;
  return _regeneratorRuntime().wrap(function addComment$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);

        case 3:
          result = _context4.sent;
          _context4.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
            data: result.data
          });

        case 6:
          _context4.next = 12;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          _context4.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
            error: _context4.t0.response.data
          });

        case 12:
          ;

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked4, null, [[0, 8]]);
}

;

function removeCommentAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/api/post/".concat(data.postId, "/comment"), data);
}

;

function removeComment(action) {
  return _regeneratorRuntime().wrap(function removeComment$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(500);

        case 3:
          _context5.next = 5;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_COMMENT_SUCCESS"],
            data: action.data
          });

        case 5:
          _context5.next = 11;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          _context5.next = 11;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_COMMENT_FAILURE"],
            error: _context5.t0.response.data
          });

        case 11:
          ;

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, _marked5, null, [[0, 7]]);
}

;

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("/post/".concat(data, "/like"));
}

;

function likePost(action) {
  var result;
  return _regeneratorRuntime().wrap(function likePost$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);

        case 3:
          result = _context6.sent;
          _context6.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context6.next = 12;
          break;

        case 8:
          _context6.prev = 8;
          _context6.t0 = _context6["catch"](0);
          _context6.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
            error: _context6.t0.response.data
          });

        case 12:
          ;

        case 13:
        case "end":
          return _context6.stop();
      }
    }
  }, _marked6, null, [[0, 8]]);
}

;

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/post/".concat(data, "/like"));
}

;

function unlikePost(action) {
  var result;
  return _regeneratorRuntime().wrap(function unlikePost$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);

        case 3:
          result = _context7.sent;
          _context7.next = 6;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
            data: result.data
          });

        case 6:
          _context7.next = 12;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          _context7.next = 12;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
            type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
            error: _context7.t0.response.data
          });

        case 12:
          ;

        case 13:
        case "end":
          return _context7.stop();
      }
    }
  }, _marked7, null, [[0, 8]]);
}

;

function watchLoadPosts() {
  return _regeneratorRuntime().wrap(function watchLoadPosts$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);

        case 2:
        case "end":
          return _context8.stop();
      }
    }
  }, _marked8);
}

;

function watchAddPost() {
  return _regeneratorRuntime().wrap(function watchAddPost$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);

        case 2:
        case "end":
          return _context9.stop();
      }
    }
  }, _marked9);
}

;

function watchRemovePost() {
  return _regeneratorRuntime().wrap(function watchRemovePost$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);

        case 2:
        case "end":
          return _context10.stop();
      }
    }
  }, _marked10);
}

;

function watchAddComment() {
  return _regeneratorRuntime().wrap(function watchAddComment$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);

        case 2:
        case "end":
          return _context11.stop();
      }
    }
  }, _marked11);
}

;

function watchRemoveComment() {
  return _regeneratorRuntime().wrap(function watchRemoveComment$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_COMMENT_REQUEST"], removeComment);

        case 2:
        case "end":
          return _context12.stop();
      }
    }
  }, _marked12);
}

;

function watchLikePost() {
  return _regeneratorRuntime().wrap(function watchLikePost$(_context13) {
    while (1) {
      switch (_context13.prev = _context13.next) {
        case 0:
          _context13.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);

        case 2:
        case "end":
          return _context13.stop();
      }
    }
  }, _marked13);
}

;

function watchUnlikePost() {
  return _regeneratorRuntime().wrap(function watchUnlikePost$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);

        case 2:
        case "end":
          return _context14.stop();
      }
    }
  }, _marked14);
}

;
function postSaga() {
  return _regeneratorRuntime().wrap(function postSaga$(_context15) {
    while (1) {
      switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikePost)]);

        case 2:
        case "end":
          return _context15.stop();
      }
    }
  }, _marked15);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2FnYXMvcG9zdC5qcyJdLCJuYW1lcyI6WyJsb2FkUG9zdHMiLCJhZGRQb3N0IiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnQiLCJyZW1vdmVDb21tZW50IiwibGlrZVBvc3QiLCJ1bmxpa2VQb3N0Iiwid2F0Y2hMb2FkUG9zdHMiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJ3YXRjaFJlbW92ZUNvbW1lbnQiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbmxpa2VQb3N0IiwicG9zdFNhZ2EiLCJsb2FkUG9zdHNBUEkiLCJheGlvcyIsImdldCIsImNhbGwiLCJyZXN1bHQiLCJwdXQiLCJ0eXBlIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiZGF0YSIsIkxPQURfUE9TVFNfRkFJTFVSRSIsImVycm9yIiwicmVzcG9uc2UiLCJhZGRQb3N0QVBJIiwicG9zdCIsImNvbnRlbnQiLCJhY3Rpb24iLCJBRERfUE9TVF9TVUNDRVNTIiwiQUREX1BPU1RfT0ZfTUUiLCJpZCIsIkFERF9QT1NUX0ZBSUxVUkUiLCJyZW1vdmVQb3N0QVBJIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX09GX01FIiwiUkVNT1ZFX1BPU1RfRkFJTFVSRSIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJBRERfQ09NTUVOVF9TVUNDRVNTIiwiQUREX0NPTU1FTlRfRkFJTFVSRSIsInJlbW92ZUNvbW1lbnRBUEkiLCJkZWxheSIsIlJFTU9WRV9DT01NRU5UX1NVQ0NFU1MiLCJSRU1PVkVfQ09NTUVOVF9GQUlMVVJFIiwibGlrZVBvc3RBUEkiLCJwYXRjaCIsIkxJS0VfUE9TVF9TVUNDRVNTIiwiTElLRV9QT1NUX0ZBSUxVUkUiLCJ1bmxpa2VQb3N0QVBJIiwiVU5MSUtFX1BPU1RfU1VDQ0VTUyIsIlVOTElLRV9QT1NUX0ZBSUxVUkUiLCJ0YWtlTGF0ZXN0IiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiQUREX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1JFUVVFU1QiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCIsIkxJS0VfUE9TVF9SRVFVRVNUIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBLG9KOztzREFnQlVBLFM7dURBbUJBQyxPO3VEQXVCQUMsVTt1REF1QkFDLFU7dURBbUJBQyxhO3VEQW9CQUMsUTt1REFtQkFDLFU7dURBZUFDLGM7dURBSUFDLFk7d0RBSUFDLGU7d0RBSUFDLGU7d0RBSUFDLGtCO3dEQUlBQyxhO3dEQUlBQyxlO3dEQUllQyxROztBQXZMekI7QUFDQTtBQUNBO0FBU0E7O0FBRUEsU0FBU0MsWUFBVCxHQUF3QjtFQUN0QixPQUFPQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVUsUUFBVixDQUFQO0FBQ0Q7O0FBQUE7O0FBRUQsU0FBVWpCLFNBQVY7RUFBQTtFQUFBO0lBQUE7TUFBQTtRQUFBO1VBQUE7VUFBQTtVQUVtQixPQUFNa0IsK0RBQUksQ0FBQ0gsWUFBRCxDQUFWOztRQUZuQjtVQUVVSSxNQUZWO1VBQUE7VUFHSSxPQUFNQyw4REFBRyxDQUFDO1lBQ1JDLElBQUksRUFBRUMsaUVBREU7WUFFUkMsSUFBSSxFQUFFSixNQUFNLENBQUNJO1VBRkwsQ0FBRCxDQUFUOztRQUhKO1VBQUE7VUFBQTs7UUFBQTtVQUFBO1VBQUE7VUFBQTtVQVFJLE9BQU1ILDhEQUFHLENBQUM7WUFDUkMsSUFBSSxFQUFFRyxpRUFERTtZQUVSQyxLQUFLLEVBQUUsWUFBSUMsUUFBSixDQUFhSDtVQUZaLENBQUQsQ0FBVDs7UUFSSjtVQVlHOztRQVpIO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQTtBQUFBOztBQWFDOztBQUVELFNBQVNJLFVBQVQsQ0FBb0JKLElBQXBCLEVBQTBCO0VBQ3hCLE9BQU9QLDRDQUFLLENBQUNZLElBQU4sQ0FBVyxXQUFYLEVBQXdCO0lBQUVDLE9BQU8sRUFB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TUFBQTtJQUFBO0VBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmRhNDU3MjdmNTRmMTUyYzBlYjc1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGNhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7XHJcbiAgTE9BRF9QT1NUU19SRVFVRVNULCBMT0FEX1BPU1RTX1NVQ0NFU1MsIExPQURfUE9TVFNfRkFJTFVSRSxcclxuICBBRERfUE9TVF9SRVFVRVNULCBBRERfUE9TVF9TVUNDRVNTLCBBRERfUE9TVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsIFJFTU9WRV9QT1NUX1NVQ0NFU1MsIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcbiAgQUREX0NPTU1FTlRfUkVRVUVTVCwgQUREX0NPTU1FTlRfU1VDQ0VTUywgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICBSRU1PVkVfQ09NTUVOVF9SRVFVRVNULCBSRU1PVkVfQ09NTUVOVF9TVUNDRVNTLCBSRU1PVkVfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIExJS0VfUE9TVF9SRVFVRVNULCBMSUtFX1BPU1RfU1VDQ0VTUywgTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgVU5MSUtFX1BPU1RfUkVRVUVTVCwgVU5MSUtFX1BPU1RfU1VDQ0VTUywgVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfT0ZfTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG5mdW5jdGlvbiBsb2FkUG9zdHNBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmdldCgnL3Bvc3RzJyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QvYWRkJywgeyBjb250ZW50OiBkYXRhIH0pO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX09GX01FLFxyXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgIH0pXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfS9kZWxldGVgKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50L2FkZGAsIGRhdGEpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTsgIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNvbW1lbnRBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9hcGkvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlQ29tbWVudChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBkZWxheSg1MDApO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICB9KTsgIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59O1xyXG5cclxuZnVuY3Rpb24qIGxpa2VQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICB9KTsgIFxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgfSk7ICBcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gIH07XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX0NPTU1FTlRfUkVRVUVTVCwgYWRkQ29tbWVudCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZW1vdmVDb21tZW50KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX0NPTU1FTlRfUkVRVUVTVCwgcmVtb3ZlQ29tbWVudCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMaWtlUG9zdCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmxpa2VQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgZm9yayh3YXRjaEFkZFBvc3QpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaFJlbW92ZUNvbW1lbnQpLFxyXG4gICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KVxyXG4gIF0pXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9