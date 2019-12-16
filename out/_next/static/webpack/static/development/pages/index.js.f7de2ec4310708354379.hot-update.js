webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Case2.js":
/*!*****************************!*\
  !*** ./components/Case2.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Case2; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Input */ "./components/Input.js");
/* harmony import */ var _Result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Result */ "./components/Result.js");
var _jsxFileName = "D:\\Project\\next-test\\components\\Case2.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Case2(props) {
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
    setResult(Number(inputX) * Number(inputY));
    setShowResult(true);
  };

  return __jsx("div", {
    className: "jsx-212643622" + " " + "Case2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-212643622",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Multiply X & Y"), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
    id: "212643622",
    __self: this
  }, ".Case2.jsx-212643622{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxuZXh0LXRlc3RcXGNvbXBvbmVudHNcXENhc2UyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCa0IsQUFHc0IsV0FDYiIsImZpbGUiOiJEOlxcUHJvamVjdFxcbmV4dC10ZXN0XFxjb21wb25lbnRzXFxDYXNlMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcclxuaW1wb3J0IFJlc3VsdCBmcm9tICcuL1Jlc3VsdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXNlMihwcm9wcykge1xyXG4gIGNvbnN0IFtpbnB1dFgsIHNldElucHV0WF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaW5wdXRZLCBzZXRJbnB1dFldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtzaG93UmVzdWx0LCBzZXRTaG93UmVzdWx0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkNoYW5nZWQgPSAoaWQsIHZhbCkgPT4ge1xyXG4gICAgaWQgPT09ICdYJyA/IHNldElucHV0WChOdW1iZXIodmFsKSkgOiBzZXRJbnB1dFkoTnVtYmVyKHZhbCkpXHJcbiAgfVxyXG4gIGNvbnN0IG9uQ2xpY2tlZCA9ICgpID0+IHtcclxuICAgIHNldFJlc3VsdChOdW1iZXIoaW5wdXRYKSAqIE51bWJlcihpbnB1dFkpKVxyXG4gICAgc2V0U2hvd1Jlc3VsdCh0cnVlKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJDYXNlMlwiPlxyXG4gICAgICA8aDI+TXVsdGlwbHkgWCAmIFk8L2gyPlxyXG4gICAgICA8SW5wdXQgbmFtZT1cImlucHV0WFwiIGxhYmVsPVwiWFwiIGlucHV0VmFsPXtpbnB1dFh9IGNoYW5nZWQ9eyhlKSA9PiBvbkNoYW5nZWQoJ1gnLCBlKX0gbWFyZ2luQm90dG9tPVwiMTVcIiAvPlxyXG4gICAgICA8SW5wdXQgbmFtZT1cImlucHV0WVwiIGxhYmVsPVwiWVwiIGlucHV0VmFsPXtpbnB1dFl9IGNoYW5nZWQ9eyhlKSA9PiBvbkNoYW5nZWQoJ1knLCBlKX0gLz5cclxuICAgICAgPFJlc3VsdCBjbGlja2VkPXtvbkNsaWNrZWR9IHNob3c9e3Nob3dSZXN1bHR9IHJlc3VsdD17cmVzdWx0fSAvPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLkNhc2UyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il19 */\n/*@ sourceURL=D:\\\\Project\\\\next-test\\\\components\\\\Case2.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.f7de2ec4310708354379.hot-update.js.map