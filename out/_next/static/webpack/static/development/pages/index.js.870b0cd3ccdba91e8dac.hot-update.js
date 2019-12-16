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
/* harmony import */ var _Prime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Prime */ "./components/Prime.js");
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
    inputN < 1 ? setResult('You must enter a value greater than zero') : setResult(Object(_Prime__WEBPACK_IMPORTED_MODULE_4__["showPrime"])(inputN).slice().join(', '));
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
  }, ".Case4.jsx-1697035502{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxuZXh0LXRlc3RcXGNvbXBvbmVudHNcXENhc2U0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCa0IsQUFHc0IsV0FDYiIsImZpbGUiOiJEOlxcUHJvamVjdFxcbmV4dC10ZXN0XFxjb21wb25lbnRzXFxDYXNlNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcclxuaW1wb3J0IFJlc3VsdCBmcm9tICcuL1Jlc3VsdCc7XHJcbmltcG9ydCB7IHNob3dQcmltZSB9IGZyb20gJy4vUHJpbWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXNlNChwcm9wcykge1xyXG4gIGNvbnN0IFtpbnB1dE4sIHNldElucHV0Tl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3Nob3dSZXN1bHQsIHNldFNob3dSZXN1bHRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlZCA9ICh2YWwpID0+IHtcclxuICAgIHNldElucHV0TihOdW1iZXIodmFsKSlcclxuICB9XHJcbiAgY29uc3Qgb25DbGlja2VkID0gKCkgPT4ge1xyXG4gICAgaW5wdXROIDwgMSA/IHNldFJlc3VsdCgnWW91IG11c3QgZW50ZXIgYSB2YWx1ZSBncmVhdGVyIHRoYW4gemVybycpIDogc2V0UmVzdWx0KHNob3dQcmltZShpbnB1dE4pLnNsaWNlKCkuam9pbignLCAnKSlcclxuICAgIHNldFNob3dSZXN1bHQodHJ1ZSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2FzZTRcIj5cclxuICAgICAgPGgyPkZpbmQgdGhlIGZpcnN0IE4gRmlib25hY2NpIHNlcXVlbmNlPC9oMj5cclxuICAgICAgPElucHV0IG5hbWU9XCJpbnB1dE5cIiBsYWJlbD1cIk5cIiBpbnB1dFZhbD17aW5wdXROfSBjaGFuZ2VkPXsoZSkgPT4gb25DaGFuZ2VkKGUpfSAvPlxyXG4gICAgICA8UmVzdWx0IGNsaWNrZWQ9e29uQ2xpY2tlZH0gc2hvdz17c2hvd1Jlc3VsdH0gcmVzdWx0PXtyZXN1bHR9IC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuQ2FzZTQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXX0= */\n/*@ sourceURL=D:\\\\Project\\\\next-test\\\\components\\\\Case4.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.870b0cd3ccdba91e8dac.hot-update.js.map