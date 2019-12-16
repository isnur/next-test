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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      result = _useState3[0],
      setResult = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showResult = _useState4[0],
      setShowResult = _useState4[1];

  var onChanged = function onChanged(id, val) {
    id === 'X' ? setInputX(Number(val)) : setInputY(Number(val));
  };

  var onClicked = function onClicked() {
    if (Number(inputY) === 0) {
      setResult('Cannot divide by zero');
    } else {
      setResult(Number(inputX) * Number(inputY));
    }

    setShowResult(true);
  };

  return __jsx("div", {
    className: "jsx-212643622" + " " + "Case2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-212643622",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
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
      lineNumber: 24
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
    id: "212643622",
    __self: this
  }, ".Case2.jsx-212643622{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxuZXh0LXRlc3RcXGNvbXBvbmVudHNcXENhc2UyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCa0IsQUFHc0IsV0FDYiIsImZpbGUiOiJEOlxcUHJvamVjdFxcbmV4dC10ZXN0XFxjb21wb25lbnRzXFxDYXNlMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcclxuaW1wb3J0IFJlc3VsdCBmcm9tICcuL1Jlc3VsdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXNlMihwcm9wcykge1xyXG4gIGNvbnN0IFtpbnB1dFgsIHNldElucHV0WF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaW5wdXRZLCBzZXRJbnB1dFldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2hvd1Jlc3VsdCwgc2V0U2hvd1Jlc3VsdF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgb25DaGFuZ2VkID0gKGlkLCB2YWwpID0+IHtcclxuICAgIGlkID09PSAnWCcgPyBzZXRJbnB1dFgoTnVtYmVyKHZhbCkpIDogc2V0SW5wdXRZKE51bWJlcih2YWwpKVxyXG4gIH1cclxuICBjb25zdCBvbkNsaWNrZWQgPSAoKSA9PiB7XHJcbiAgICBpZiAoTnVtYmVyKGlucHV0WSkgPT09IDApIHtcclxuICAgICAgc2V0UmVzdWx0KCdDYW5ub3QgZGl2aWRlIGJ5IHplcm8nKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0UmVzdWx0KE51bWJlcihpbnB1dFgpICogTnVtYmVyKGlucHV0WSkpXHJcbiAgICB9XHJcbiAgICBzZXRTaG93UmVzdWx0KHRydWUpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkNhc2UyXCI+XHJcbiAgICAgIDxoMj5NdWx0aXBseSBYICYgWTwvaDI+XHJcbiAgICAgIDxJbnB1dCBuYW1lPVwiaW5wdXRYXCIgbGFiZWw9XCJYXCIgaW5wdXRWYWw9e2lucHV0WH0gY2hhbmdlZD17KGUpID0+IG9uQ2hhbmdlZCgnWCcsIGUpfSBtYXJnaW5Cb3R0b209XCIxNVwiIC8+XHJcbiAgICAgIDxJbnB1dCBuYW1lPVwiaW5wdXRZXCIgbGFiZWw9XCJZXCIgaW5wdXRWYWw9e2lucHV0WX0gY2hhbmdlZD17KGUpID0+IG9uQ2hhbmdlZCgnWScsIGUpfSAvPlxyXG4gICAgICA8UmVzdWx0IGNsaWNrZWQ9e29uQ2xpY2tlZH0gc2hvdz17c2hvd1Jlc3VsdH0gcmVzdWx0PXtyZXN1bHR9IC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuQ2FzZTIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXX0= */\n/*@ sourceURL=D:\\\\Project\\\\next-test\\\\components\\\\Case2.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.e7cdcd98817aacd555c4.hot-update.js.map