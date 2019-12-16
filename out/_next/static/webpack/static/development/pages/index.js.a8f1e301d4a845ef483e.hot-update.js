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
    if (inputN < 1) {
      setResult('You must enter a value greater than zero');
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
  }, ".Case4.jsx-1697035502{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxuZXh0LXRlc3RcXGNvbXBvbmVudHNcXENhc2U0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCa0IsQUFHc0IsV0FDYiIsImZpbGUiOiJEOlxcUHJvamVjdFxcbmV4dC10ZXN0XFxjb21wb25lbnRzXFxDYXNlNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcclxuaW1wb3J0IFJlc3VsdCBmcm9tICcuL1Jlc3VsdCc7XHJcbmltcG9ydCB7IGZpYm9uYWNjaSB9IGZyb20gJy4vRmlib25hY2NpJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FzZTQocHJvcHMpIHtcclxuICBjb25zdCBbaW5wdXROLCBzZXRJbnB1dE5dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzaG93UmVzdWx0LCBzZXRTaG93UmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkNoYW5nZWQgPSAodmFsKSA9PiB7XHJcbiAgICBzZXRJbnB1dE4oTnVtYmVyKHZhbCkpXHJcbiAgfVxyXG4gIGNvbnN0IG9uQ2xpY2tlZCA9ICgpID0+IHtcclxuICAgIGlmIChpbnB1dE4gPCAxKSB7XHJcbiAgICAgIHNldFJlc3VsdCgnWW91IG11c3QgZW50ZXIgYSB2YWx1ZSBncmVhdGVyIHRoYW4gemVybycpXHJcbiAgICB9IGVsc2UgaWYgKGlucHV0TiA9PT0gMCkge1xyXG4gICAgICBzZXRSZXN1bHQoZmlib25hY2NpKGlucHV0TilbMF0pXHJcbiAgICB9IGVsc2UgaWYgKGlucHV0TiA9PT0gMSkge1xyXG4gICAgICBzZXRSZXN1bHQoZmlib25hY2NpKGlucHV0TilbMV0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRSZXN1bHQoZmlib25hY2NpKGlucHV0Tikuc2xpY2UoKS5qb2luKCcsICcpKVxyXG4gICAgfVxyXG4gICAgc2V0U2hvd1Jlc3VsdCh0cnVlKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJDYXNlNFwiPlxyXG4gICAgICA8aDI+RmluZCB0aGUgZmlyc3QgTiBGaWJvbmFjY2kgc2VxdWVuY2U8L2gyPlxyXG4gICAgICA8SW5wdXQgbmFtZT1cImlucHV0TlwiIGxhYmVsPVwiTlwiIGlucHV0VmFsPXtpbnB1dE59IGNoYW5nZWQ9eyhlKSA9PiBvbkNoYW5nZWQoZSl9IC8+XHJcbiAgICAgIDxSZXN1bHQgY2xpY2tlZD17b25DbGlja2VkfSBzaG93PXtzaG93UmVzdWx0fSByZXN1bHQ9e3Jlc3VsdH0gLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5DYXNlNCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=D:\\\\Project\\\\next-test\\\\components\\\\Case4.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.a8f1e301d4a845ef483e.hot-update.js.map