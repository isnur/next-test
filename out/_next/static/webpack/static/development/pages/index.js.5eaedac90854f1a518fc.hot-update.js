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
    console.log('val', val);
    id === 'X' ? setInputX(val) : setInputY(val);
  };

  var handleKeyPress = function handleKeyPress(event) {
    console.log(event.key);
    console.log(inputX.toString().length < 2);

    if (event.key.toLowerCase() === 'e') {
      event.preventDefault();
    }

    if (event.key === '-' || event.key === '+' || event.key === '*' || event.key === '/' || event.key === 'Enter' || event.key === '.' || event.key === ',') {
      event.preventDefault();
    }

    if (event.key === 0 && inputX.toString().length === 2) {
      console.log(inputX);
      setInputX(0);
    }

    if (event.key === 0 && inputY.toString().length < 2) {
      setInputX(0);
    }
  };

  return __jsx("div", {
    className: "jsx-463547332" + " " + "Case1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-463547332",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Sum X & Y"), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "inputX",
    label: "X",
    changed: function changed(val) {
      return onChanged('X', val);
    },
    handleKeyPress: handleKeyPress,
    marginBottom: "15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "inputY",
    label: "Y",
    changed: function changed(val) {
      return onChanged('Y', val);
    },
    handleKeyPress: handleKeyPress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "463547332",
    __self: this
  }, ".Case1.jsx-463547332{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxuZXh0LXRlc3RcXGNvbXBvbmVudHNcXENhc2UxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDa0IsQUFHc0IsV0FDYiIsImZpbGUiOiJEOlxcUHJvamVjdFxcbmV4dC10ZXN0XFxjb21wb25lbnRzXFxDYXNlMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhc2UxKHByb3BzKSB7XHJcbiAgY29uc3QgW2lucHV0WCwgc2V0SW5wdXRYXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpbnB1dFksIHNldElucHV0WV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBvbkNoYW5nZWQgPSAoaWQsIHZhbCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3ZhbCcsIHZhbClcclxuICAgIGlkID09PSAnWCcgPyBzZXRJbnB1dFgodmFsKSA6IHNldElucHV0WSh2YWwpXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhldmVudC5rZXkpXHJcbiAgICBjb25zb2xlLmxvZyhpbnB1dFgudG9TdHJpbmcoKS5sZW5ndGggPCAyKVxyXG4gICAgaWYgKGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpID09PSAnZScpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJy0nIHx8IGV2ZW50LmtleSA9PT0gJysnIHx8IGV2ZW50LmtleSA9PT0gJyonIHx8IGV2ZW50LmtleSA9PT0gJy8nIHx8IGV2ZW50LmtleSA9PT0gJ0VudGVyJyB8fCBldmVudC5rZXkgPT09ICcuJyAgfHwgZXZlbnQua2V5ID09PSAnLCcpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gMCAmJiBpbnB1dFgudG9TdHJpbmcoKS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgY29uc29sZS5sb2coaW5wdXRYKVxyXG4gICAgICBzZXRJbnB1dFgoMClcclxuICAgIH1cclxuICAgIGlmIChldmVudC5rZXkgPT09IDAgJiYgaW5wdXRZLnRvU3RyaW5nKCkubGVuZ3RoIDwgMikge1xyXG4gICAgICBzZXRJbnB1dFgoMClcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2FzZTFcIj5cclxuICAgICAgPGgyPlN1bSBYICYgWTwvaDI+XHJcbiAgICAgIDxJbnB1dCBuYW1lPVwiaW5wdXRYXCIgbGFiZWw9XCJYXCIgY2hhbmdlZD17KHZhbCkgPT4gb25DaGFuZ2VkKCdYJywgdmFsKX0gaGFuZGxlS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfSBtYXJnaW5Cb3R0b209XCIxNVwiIC8+XHJcbiAgICAgIDxJbnB1dCBuYW1lPVwiaW5wdXRZXCIgbGFiZWw9XCJZXCIgY2hhbmdlZD17KHZhbCkgPT4gb25DaGFuZ2VkKCdZJywgdmFsKX0gaGFuZGxlS2V5UHJlc3M9e2hhbmRsZUtleVByZXNzfSAvPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLkNhc2UxIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il19 */\n/*@ sourceURL=D:\\\\Project\\\\next-test\\\\components\\\\Case1.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.5eaedac90854f1a518fc.hot-update.js.map