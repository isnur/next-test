webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Case4.js":
/*!*****************************!*\
  !*** ./components/Case4.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Case4; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./components/Input.js");
/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Result */ "./components/Result.js");
/* harmony import */ var _Fibonacci__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Fibonacci */ "./components/Fibonacci.js");
var _jsxFileName = "D:\\Project\\next-test\\components\\Case4.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Case4(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      inputN = _useState[0],
      setInputN = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      result = _useState2[0],
      setResult = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showResult = _useState3[0],
      setShowResult = _useState3[1];

  var onChanged = function onChanged(val) {
    setInputN(Number(val));
  };

  var onClicked = function onClicked() {
    if (inputN < 0) {
      setResult('You must enter a value starting from 0 and 1');
    } else if (inputN === 0) {
      setResult(Object(_Fibonacci__WEBPACK_IMPORTED_MODULE_4__["fibonacci"])(inputN)[0]);
    } else if (inputN === 1) {
      setResult(Object(_Fibonacci__WEBPACK_IMPORTED_MODULE_4__["fibonacci"])(inputN)[1]);
    } else {
      setResult(Object(_Fibonacci__WEBPACK_IMPORTED_MODULE_4__["fibonacci"])(inputN).slice().join(', '));
    }

    setShowResult(true);
  };

  return __jsx("div", {
    className: "jsx-1697035502" + " " + "Case4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1697035502",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Find the first N Fibonacci sequence"), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "inputN",
    label: "N",
    inputVal: inputN,
    changed: function changed(e) {
      return onChanged(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_Result__WEBPACK_IMPORTED_MODULE_3__["default"], {
    clicked: onClicked,
    show: showResult,
    result: result,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1697035502",
    __self: this
  }, ".Case4.jsx-1697035502{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxuZXh0LXRlc3RcXGNvbXBvbmVudHNcXENhc2U0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCa0IsQUFHc0IsV0FDYiIsImZpbGUiOiJEOlxcUHJvamVjdFxcbmV4dC10ZXN0XFxjb21wb25lbnRzXFxDYXNlNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcclxuaW1wb3J0IFJlc3VsdCBmcm9tICcuL1Jlc3VsdCc7XHJcbmltcG9ydCB7IGZpYm9uYWNjaSB9IGZyb20gJy4vRmlib25hY2NpJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FzZTQocHJvcHMpIHtcclxuICBjb25zdCBbaW5wdXROLCBzZXRJbnB1dE5dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzaG93UmVzdWx0LCBzZXRTaG93UmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkNoYW5nZWQgPSAodmFsKSA9PiB7XHJcbiAgICBzZXRJbnB1dE4oTnVtYmVyKHZhbCkpXHJcbiAgfVxyXG4gIGNvbnN0IG9uQ2xpY2tlZCA9ICgpID0+IHtcclxuICAgIGlmIChpbnB1dE4gPCAwKSB7XHJcbiAgICAgIHNldFJlc3VsdCgnWW91IG11c3QgZW50ZXIgYSB2YWx1ZSBzdGFydGluZyBmcm9tIDAgYW5kIDEnKVxyXG4gICAgfSBlbHNlIGlmIChpbnB1dE4gPT09IDApIHtcclxuICAgICAgc2V0UmVzdWx0KGZpYm9uYWNjaShpbnB1dE4pWzBdKVxyXG4gICAgfSBlbHNlIGlmIChpbnB1dE4gPT09IDEpIHtcclxuICAgICAgc2V0UmVzdWx0KGZpYm9uYWNjaShpbnB1dE4pWzFdKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0UmVzdWx0KGZpYm9uYWNjaShpbnB1dE4pLnNsaWNlKCkuam9pbignLCAnKSlcclxuICAgIH1cclxuICAgIHNldFNob3dSZXN1bHQodHJ1ZSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2FzZTRcIj5cclxuICAgICAgPGgyPkZpbmQgdGhlIGZpcnN0IE4gRmlib25hY2NpIHNlcXVlbmNlPC9oMj5cclxuICAgICAgPElucHV0IG5hbWU9XCJpbnB1dE5cIiBsYWJlbD1cIk5cIiBpbnB1dFZhbD17aW5wdXROfSBjaGFuZ2VkPXsoZSkgPT4gb25DaGFuZ2VkKGUpfSAvPlxyXG4gICAgICA8UmVzdWx0IGNsaWNrZWQ9e29uQ2xpY2tlZH0gc2hvdz17c2hvd1Jlc3VsdH0gcmVzdWx0PXtyZXN1bHR9IC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuQ2FzZTQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXX0= */\n/*@ sourceURL=D:\\\\Project\\\\next-test\\\\components\\\\Case4.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.24eee426e40b79758346.hot-update.js.map