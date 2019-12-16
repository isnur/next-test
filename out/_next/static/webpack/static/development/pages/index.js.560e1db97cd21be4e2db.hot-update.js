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

  var onChanged = function onChanged(id, val) {
    id === 'X' ? setInputX(Number(val)) : setInputY(Number(val));
  };

  return __jsx("div", {
    className: "jsx-463547332" + " " + "Case1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-463547332",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
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
      lineNumber: 14
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
      lineNumber: 15
    },
    __self: this
  }), __jsx(_Result__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "463547332",
    __self: this
  }, ".Case1.jsx-463547332{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxuZXh0LXRlc3RcXGNvbXBvbmVudHNcXENhc2UxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCa0IsQUFHc0IsV0FDYiIsImZpbGUiOiJEOlxcUHJvamVjdFxcbmV4dC10ZXN0XFxjb21wb25lbnRzXFxDYXNlMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcclxuaW1wb3J0IFJlc3VsdCBmcm9tICcuL1Jlc3VsdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXNlMShwcm9wcykge1xyXG4gIGNvbnN0IFtpbnB1dFgsIHNldElucHV0WF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaW5wdXRZLCBzZXRJbnB1dFldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qgb25DaGFuZ2VkID0gKGlkLCB2YWwpID0+IHtcclxuICAgIGlkID09PSAnWCcgPyBzZXRJbnB1dFgoTnVtYmVyKHZhbCkpIDogc2V0SW5wdXRZKE51bWJlcih2YWwpKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJDYXNlMVwiPlxyXG4gICAgICA8aDI+U3VtIFggJiBZPC9oMj5cclxuICAgICAgPElucHV0IG5hbWU9XCJpbnB1dFhcIiBsYWJlbD1cIlhcIiBpbnB1dFZhbD17aW5wdXRYfSBjaGFuZ2VkPXsoZSkgPT4gb25DaGFuZ2VkKCdYJywgZSl9IG1hcmdpbkJvdHRvbT1cIjE1XCIgLz5cclxuICAgICAgPElucHV0IG5hbWU9XCJpbnB1dFlcIiBsYWJlbD1cIllcIiBpbnB1dFZhbD17aW5wdXRZfSBjaGFuZ2VkPXsoZSkgPT4gb25DaGFuZ2VkKCdZJywgZSl9IC8+XHJcbiAgICAgIDxSZXN1bHQgLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5DYXNlMSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=D:\\\\Project\\\\next-test\\\\components\\\\Case1.js */"));
}

/***/ }),

/***/ "./components/Result.js":
/*!******************************!*\
  !*** ./components/Result.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Result; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Project\\next-test\\components\\Result.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function Result(props) {
  return __jsx("div", {
    className: "jsx-3106214966" + " " + "Result",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("button", {
    className: "jsx-3106214966",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "Show Result"), __jsx("p", {
    className: "jsx-3106214966",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Result"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3106214966",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxuZXh0LXRlc3RcXGNvbXBvbmVudHNcXFJlc3VsdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLa0IiLCJmaWxlIjoiRDpcXFByb2plY3RcXG5leHQtdGVzdFxcY29tcG9uZW50c1xcUmVzdWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdWx0KHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVzdWx0XCI+XHJcbiAgICAgIDxidXR0b24+U2hvdyBSZXN1bHQ8L2J1dHRvbj5cclxuICAgICAgPHA+UmVzdWx0PC9wPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=D:\\\\Project\\\\next-test\\\\components\\\\Result.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.560e1db97cd21be4e2db.hot-update.js.map