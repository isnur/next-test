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
    console.log('val2', Number(val));
    id === 'X' ? setInputX(Number(val)) : setInputY(Number(val));
    console.log(inputX);
  };

  var _handleKeyPress = function handleKeyPress(id, event) {
    if (event.key.toLowerCase() === 'e') {
      event.preventDefault();
    }

    if (event.key === '-' || event.key === '+' || event.key === '*' || event.key === '/' || event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
    }

    id === 'X' ? setInputX(Number(val)) : setInputY(Number(val));
  };

  return __jsx("div", {
    className: "jsx-463547332" + " " + "Case1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-463547332",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Sum X & Y"), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "inputX",
    label: "X",
    value: inputX,
    changed: function changed(val) {
      return onChanged('X', val);
    },
    handleKeyPress: function handleKeyPress(e) {
      return _handleKeyPress('X', e);
    },
    marginBottom: "15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "inputY",
    label: "Y",
    value: inputY,
    changed: function changed(val) {
      return onChanged('Y', val);
    },
    handleKeyPress: function handleKeyPress(e) {
      return _handleKeyPress('Y', e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "463547332",
    __self: this
  }, ".Case1.jsx-463547332{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxuZXh0LXRlc3RcXGNvbXBvbmVudHNcXENhc2UxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCa0IsQUFHc0IsV0FDYiIsImZpbGUiOiJEOlxcUHJvamVjdFxcbmV4dC10ZXN0XFxjb21wb25lbnRzXFxDYXNlMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhc2UxKHByb3BzKSB7XHJcbiAgY29uc3QgW2lucHV0WCwgc2V0SW5wdXRYXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpbnB1dFksIHNldElucHV0WV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBvbkNoYW5nZWQgPSAoaWQsIHZhbCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3ZhbCcsIHZhbClcclxuICAgIGNvbnNvbGUubG9nKCd2YWwyJywgTnVtYmVyKHZhbCkpXHJcbiAgICBpZCA9PT0gJ1gnID8gc2V0SW5wdXRYKE51bWJlcih2YWwpKSA6IHNldElucHV0WShOdW1iZXIodmFsKSlcclxuICAgIGNvbnNvbGUubG9nKGlucHV0WClcclxuICB9XHJcbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoaWQsIGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZXZlbnQua2V5LnRvTG93ZXJDYXNlKCkgPT09ICdlJykge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB9XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnLScgfHwgZXZlbnQua2V5ID09PSAnKycgfHwgZXZlbnQua2V5ID09PSAnKicgfHwgZXZlbnQua2V5ID09PSAnLycgfHwgZXZlbnQua2V5ID09PSAnRW50ZXInICB8fCBldmVudC5rZXkgPT09ICcsJykge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICB9XHJcbiAgICBpZCA9PT0gJ1gnID8gc2V0SW5wdXRYKE51bWJlcih2YWwpKSA6IHNldElucHV0WShOdW1iZXIodmFsKSlcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2FzZTFcIj5cclxuICAgICAgPGgyPlN1bSBYICYgWTwvaDI+XHJcbiAgICAgIDxJbnB1dCBuYW1lPVwiaW5wdXRYXCIgbGFiZWw9XCJYXCIgdmFsdWU9e2lucHV0WH0gY2hhbmdlZD17KHZhbCkgPT4gb25DaGFuZ2VkKCdYJywgdmFsKX0gaGFuZGxlS2V5UHJlc3M9eyhlKSA9PiBoYW5kbGVLZXlQcmVzcygnWCcsIGUpfSBtYXJnaW5Cb3R0b209XCIxNVwiIC8+XHJcbiAgICAgIDxJbnB1dCBuYW1lPVwiaW5wdXRZXCIgbGFiZWw9XCJZXCIgdmFsdWU9e2lucHV0WX0gY2hhbmdlZD17KHZhbCkgPT4gb25DaGFuZ2VkKCdZJywgdmFsKX0gaGFuZGxlS2V5UHJlc3M9eyhlKSA9PiBoYW5kbGVLZXlQcmVzcygnWScsIGUpfSAvPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLkNhc2UxIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il19 */\n/*@ sourceURL=D:\\\\Project\\\\next-test\\\\components\\\\Case1.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.8acd5e915884924a110f.hot-update.js.map