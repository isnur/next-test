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
    if (inputN < 1) {
      setResult('Values must be greater than zero');
    }

    var result = Object(_Prime__WEBPACK_IMPORTED_MODULE_4__["showPrime"])(inputN);
    console.log(result);
    setResult(result.slice().join(', '));
    setShowResult(true);
  };

  return __jsx("div", {
    className: "jsx-243843554" + " " + "Case3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-243843554",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
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
      lineNumber: 25
    },
    __self: this
  }), __jsx(_Result__WEBPACK_IMPORTED_MODULE_3__["default"], {
    clicked: onClicked,
    show: showResult,
    result: result,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "243843554",
    __self: this
  }, ".Case3.jsx-243843554{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxuZXh0LXRlc3RcXGNvbXBvbmVudHNcXENhc2UzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCa0IsQUFHc0IsV0FDYiIsImZpbGUiOiJEOlxcUHJvamVjdFxcbmV4dC10ZXN0XFxjb21wb25lbnRzXFxDYXNlMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcclxuaW1wb3J0IFJlc3VsdCBmcm9tICcuL1Jlc3VsdCc7XHJcbmltcG9ydCB7IHNob3dQcmltZSB9IGZyb20gJy4vUHJpbWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXNlMyhwcm9wcykge1xyXG4gIGNvbnN0IFtpbnB1dE4sIHNldElucHV0Tl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Nob3dSZXN1bHQsIHNldFNob3dSZXN1bHRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlZCA9ICh2YWwpID0+IHtcclxuICAgIHNldElucHV0TihOdW1iZXIodmFsKSlcclxuICB9XHJcbiAgY29uc3Qgb25DbGlja2VkID0gKCkgPT4ge1xyXG4gICAgaWYgKGlucHV0TiA8IDEpIHtcclxuICAgICAgc2V0UmVzdWx0KCdWYWx1ZXMgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVybycpIFxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzdWx0ID0gc2hvd1ByaW1lKGlucHV0TilcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgIHNldFJlc3VsdChyZXN1bHQuc2xpY2UoKS5qb2luKCcsICcpKVxyXG4gICAgc2V0U2hvd1Jlc3VsdCh0cnVlKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJDYXNlM1wiPlxyXG4gICAgICA8aDI+RmluZCBmaXJzdCBOIHByaW1lIG51bWJlcjwvaDI+XHJcbiAgICAgIDxJbnB1dCBuYW1lPVwiaW5wdXROXCIgbGFiZWw9XCJOXCIgaW5wdXRWYWw9e2lucHV0Tn0gY2hhbmdlZD17KGUpID0+IG9uQ2hhbmdlZChlKX0gLz5cclxuICAgICAgPFJlc3VsdCBjbGlja2VkPXtvbkNsaWNrZWR9IHNob3c9e3Nob3dSZXN1bHR9IHJlc3VsdD17cmVzdWx0fSAvPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLkNhc2UzIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il19 */\n/*@ sourceURL=D:\\\\Project\\\\next-test\\\\components\\\\Case3.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.79d82e2e584b042f0e37.hot-update.js.map