webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Case1.js":
/*!*****************************!*\
  !*** ./components/Case1.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Case1; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./components/Input.js");
/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Result */ "./components/Result.js");
var _jsxFileName = "D:\\Project\\next-test\\components\\Case1.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Case1(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      inputX = _useState[0],
      setInputX = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      inputY = _useState2[0],
      setInputY = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      result = _useState3[0],
      setResult = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showResult = _useState4[0],
      setShowResult = _useState4[1];

  var onChanged = function onChanged(id, val) {
    id === 'X' ? setInputX(Number(val)) : setInputY(Number(val));
  };

  var onClicked = function onClicked() {
    setResult(Number(inputX) + Number(inputY));
    setShowResult(true);
  };

  return __jsx("div", {
    className: "jsx-463547332" + " " + "Case1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-463547332",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Sum X & Y"), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "inputX",
    label: "X",
    inputVal: inputX,
    changed: function changed(e) {
      return onChanged('X', e);
    },
    marginBottom: "15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "inputY",
    label: "Y",
    inputVal: inputY,
    changed: function changed(e) {
      return onChanged('Y', e);
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
    id: "463547332",
    __self: this
  }, ".Case1.jsx-463547332{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxuZXh0LXRlc3RcXGNvbXBvbmVudHNcXENhc2UxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCa0IsQUFHc0IsV0FDYiIsImZpbGUiOiJEOlxcUHJvamVjdFxcbmV4dC10ZXN0XFxjb21wb25lbnRzXFxDYXNlMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcclxuaW1wb3J0IFJlc3VsdCBmcm9tICcuL1Jlc3VsdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXNlMShwcm9wcykge1xyXG4gIGNvbnN0IFtpbnB1dFgsIHNldElucHV0WF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaW5wdXRZLCBzZXRJbnB1dFldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzaG93UmVzdWx0LCBzZXRTaG93UmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkNoYW5nZWQgPSAoaWQsIHZhbCkgPT4ge1xyXG4gICAgaWQgPT09ICdYJyA/IHNldElucHV0WChOdW1iZXIodmFsKSkgOiBzZXRJbnB1dFkoTnVtYmVyKHZhbCkpXHJcbiAgfVxyXG4gIGNvbnN0IG9uQ2xpY2tlZCA9ICgpID0+IHtcclxuICAgIHNldFJlc3VsdChOdW1iZXIoaW5wdXRYKSArIE51bWJlcihpbnB1dFkpKVxyXG4gICAgc2V0U2hvd1Jlc3VsdCh0cnVlKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJDYXNlMVwiPlxyXG4gICAgICA8aDI+U3VtIFggJiBZPC9oMj5cclxuICAgICAgPElucHV0IG5hbWU9XCJpbnB1dFhcIiBsYWJlbD1cIlhcIiBpbnB1dFZhbD17aW5wdXRYfSBjaGFuZ2VkPXsoZSkgPT4gb25DaGFuZ2VkKCdYJywgZSl9IG1hcmdpbkJvdHRvbT1cIjE1XCIgLz5cclxuICAgICAgPElucHV0IG5hbWU9XCJpbnB1dFlcIiBsYWJlbD1cIllcIiBpbnB1dFZhbD17aW5wdXRZfSBjaGFuZ2VkPXsoZSkgPT4gb25DaGFuZ2VkKCdZJywgZSl9IC8+XHJcbiAgICAgIDxSZXN1bHQgY2xpY2tlZD17b25DbGlja2VkfSBzaG93PXtzaG93UmVzdWx0fSByZXN1bHQ9e3Jlc3VsdH0gLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5DYXNlMSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=D:\\\\Project\\\\next-test\\\\components\\\\Case1.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.08e361a89752695031b8.hot-update.js.map