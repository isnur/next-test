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
    inputN < 1 ? setResult('You must enter a value greater than zero') : setResult(Object(_Fibonacci__WEBPACK_IMPORTED_MODULE_4__["fibonacci"])(inputN).slice().join(', '));
    setShowResult(true);
  };

  return __jsx("div", {
    className: "jsx-1697035502" + " " + "Case4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1697035502",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
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
      lineNumber: 20
    },
    __self: this
  }), __jsx(_Result__WEBPACK_IMPORTED_MODULE_3__["default"], {
    clicked: onClicked,
    show: showResult,
    result: result,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1697035502",
    __self: this
  }, ".Case4.jsx-1697035502{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxuZXh0LXRlc3RcXGNvbXBvbmVudHNcXENhc2U0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCa0IsQUFHc0IsV0FDYiIsImZpbGUiOiJEOlxcUHJvamVjdFxcbmV4dC10ZXN0XFxjb21wb25lbnRzXFxDYXNlNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcclxuaW1wb3J0IFJlc3VsdCBmcm9tICcuL1Jlc3VsdCc7XHJcbmltcG9ydCB7IGZpYm9uYWNjaSB9IGZyb20gJy4vRmlib25hY2NpJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FzZTQocHJvcHMpIHtcclxuICBjb25zdCBbaW5wdXROLCBzZXRJbnB1dE5dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtzaG93UmVzdWx0LCBzZXRTaG93UmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkNoYW5nZWQgPSAodmFsKSA9PiB7XHJcbiAgICBzZXRJbnB1dE4oTnVtYmVyKHZhbCkpXHJcbiAgfVxyXG4gIGNvbnN0IG9uQ2xpY2tlZCA9ICgpID0+IHtcclxuICAgIGlucHV0TiA8IDEgPyBzZXRSZXN1bHQoJ1lvdSBtdXN0IGVudGVyIGEgdmFsdWUgZ3JlYXRlciB0aGFuIHplcm8nKSA6IHNldFJlc3VsdChmaWJvbmFjY2koaW5wdXROKS5zbGljZSgpLmpvaW4oJywgJykpXHJcbiAgICBzZXRTaG93UmVzdWx0KHRydWUpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkNhc2U0XCI+XHJcbiAgICAgIDxoMj5GaW5kIHRoZSBmaXJzdCBOIEZpYm9uYWNjaSBzZXF1ZW5jZTwvaDI+XHJcbiAgICAgIDxJbnB1dCBuYW1lPVwiaW5wdXROXCIgbGFiZWw9XCJOXCIgaW5wdXRWYWw9e2lucHV0Tn0gY2hhbmdlZD17KGUpID0+IG9uQ2hhbmdlZChlKX0gLz5cclxuICAgICAgPFJlc3VsdCBjbGlja2VkPXtvbkNsaWNrZWR9IHNob3c9e3Nob3dSZXN1bHR9IHJlc3VsdD17cmVzdWx0fSAvPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLkNhc2U0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il19 */\n/*@ sourceURL=D:\\\\Project\\\\next-test\\\\components\\\\Case4.js */"));
}

/***/ }),

/***/ "./components/Fibonacci.js":
/*!*********************************!*\
  !*** ./components/Fibonacci.js ***!
  \*********************************/
/*! exports provided: fibonacci */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fibonacci", function() { return fibonacci; });
var fibonacci = function fibonacci(num) {
  var result = [0, 1];
  var i = 2;

  while (i < num) {
    result.push(result[result.length - 1] + result[result.length - 2]);
    i += 1;
  }

  return result;
};

/***/ })

})
//# sourceMappingURL=index.js.5593362a37acd834586c.hot-update.js.map