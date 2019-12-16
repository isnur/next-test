webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Case3.js":
/*!*****************************!*\
  !*** ./components/Case3.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Case3; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./components/Input.js");
/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Result */ "./components/Result.js");
/* harmony import */ var _Prime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Prime */ "./components/Prime.js");
var _jsxFileName = "D:\\Project\\next-test\\components\\Case3.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Case3(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      inputN = _useState[0],
      setInputN = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      result = _useState2[0],
      setResult = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showResult = _useState3[0],
      setShowResult = _useState3[1];

  var onChanged = function onChanged(val) {
    setInputN(Number(val));
  };

  var onClicked = function onClicked() {
    console.log(inputN);
    inputN < 1 ? setResult('You must enter a value greater than zero') : setResult(Object(_Prime__WEBPACK_IMPORTED_MODULE_4__["showPrime"])(inputN).slice().join(', '));
    setShowResult(true);
  };

  return __jsx("div", {
    className: "jsx-243843554" + " " + "Case3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-243843554",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Find first N prime number"), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "inputN",
    label: "N",
    inputVal: inputN,
    changed: function changed(e) {
      return onChanged(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(_Result__WEBPACK_IMPORTED_MODULE_3__["default"], {
    clicked: onClicked,
    show: showResult,
    result: result,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "243843554",
    __self: this
  }, ".Case3.jsx-243843554{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxuZXh0LXRlc3RcXGNvbXBvbmVudHNcXENhc2UzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCa0IsQUFHc0IsV0FDYiIsImZpbGUiOiJEOlxcUHJvamVjdFxcbmV4dC10ZXN0XFxjb21wb25lbnRzXFxDYXNlMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcclxuaW1wb3J0IFJlc3VsdCBmcm9tICcuL1Jlc3VsdCc7XHJcbmltcG9ydCB7IHNob3dQcmltZSB9IGZyb20gJy4vUHJpbWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXNlMyhwcm9wcykge1xyXG4gIGNvbnN0IFtpbnB1dE4sIHNldElucHV0Tl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Nob3dSZXN1bHQsIHNldFNob3dSZXN1bHRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlZCA9ICh2YWwpID0+IHtcclxuICAgIHNldElucHV0TihOdW1iZXIodmFsKSlcclxuICB9XHJcbiAgY29uc3Qgb25DbGlja2VkID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaW5wdXROKVxyXG4gICAgaW5wdXROIDwgMSA/IHNldFJlc3VsdCgnWW91IG11c3QgZW50ZXIgYSB2YWx1ZSBncmVhdGVyIHRoYW4gemVybycpIDogc2V0UmVzdWx0KHNob3dQcmltZShpbnB1dE4pLnNsaWNlKCkuam9pbignLCAnKSlcclxuICAgIHNldFNob3dSZXN1bHQodHJ1ZSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2FzZTNcIj5cclxuICAgICAgPGgyPkZpbmQgZmlyc3QgTiBwcmltZSBudW1iZXI8L2gyPlxyXG4gICAgICA8SW5wdXQgbmFtZT1cImlucHV0TlwiIGxhYmVsPVwiTlwiIGlucHV0VmFsPXtpbnB1dE59IGNoYW5nZWQ9eyhlKSA9PiBvbkNoYW5nZWQoZSl9IC8+XHJcbiAgICAgIDxSZXN1bHQgY2xpY2tlZD17b25DbGlja2VkfSBzaG93PXtzaG93UmVzdWx0fSByZXN1bHQ9e3Jlc3VsdH0gLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5DYXNlMyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=D:\\\\Project\\\\next-test\\\\components\\\\Case3.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.bcfb7fe474465e5321bd.hot-update.js.map