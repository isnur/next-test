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
    console.log('val2', val.replace(/^0+/, ''));
    id === 'X' ? setInputX(Number(val)) : setInputY(Number(val));
  };

  var handleKeyPress = function handleKeyPress(event) {
    if (event.key.toLowerCase() === 'e') {
      event.preventDefault();
    }

    if (event.key === '-' || event.key === '+' || event.key === '*' || event.key === '/' || event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
    }
  };

  return __jsx("div", {
    className: "jsx-463547332" + " " + "Case1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-463547332",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Sum X & Y"), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "inputX",
    label: "X",
    value: inputX,
    changed: function changed(val) {
      return onChanged('X', val);
    },
    handleKeyPress: handleKeyPress,
    marginBottom: "15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "inputY",
    label: "Y",
    value: inputY,
    changed: function changed(val) {
      return onChanged('Y', val);
    },
    handleKeyPress: handleKeyPress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "463547332",
    __self: this
  }, ".Case1.jsx-463547332{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxuZXh0LXRlc3RcXGNvbXBvbmVudHNcXENhc2UxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCa0IsQUFHc0IsV0FDYiIsImZpbGUiOiJEOlxcUHJvamVjdFxcbmV4dC10ZXN0XFxjb21wb25lbnRzXFxDYXNlMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhc2UxKHByb3BzKSB7XHJcbiAgY29uc3QgW2lucHV0WCwgc2V0SW5wdXRYXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpbnB1dFksIHNldElucHV0WV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBvbkNoYW5nZWQgPSAoaWQsIHZhbCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3ZhbCcsIHZhbClcclxuICAgIGNvbnNvbGUubG9nKCd2YWwyJywgdmFsLnJlcGxhY2UoL14wKy8sICcnKSlcclxuICAgIGlkID09PSAnWCcgPyBzZXRJbnB1dFgoTnVtYmVyKHZhbCkpIDogc2V0SW5wdXRZKE51bWJlcih2YWwpKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpID09PSAnZScpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJy0nIHx8IGV2ZW50LmtleSA9PT0gJysnIHx8IGV2ZW50LmtleSA9PT0gJyonIHx8IGV2ZW50LmtleSA9PT0gJy8nIHx8IGV2ZW50LmtleSA9PT0gJ0VudGVyJyAgfHwgZXZlbnQua2V5ID09PSAnLCcpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJDYXNlMVwiPlxyXG4gICAgICA8aDI+U3VtIFggJiBZPC9oMj5cclxuICAgICAgPElucHV0IG5hbWU9XCJpbnB1dFhcIiBsYWJlbD1cIlhcIiB2YWx1ZT17aW5wdXRYfSBjaGFuZ2VkPXsodmFsKSA9PiBvbkNoYW5nZWQoJ1gnLCB2YWwpfSBoYW5kbGVLZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9IG1hcmdpbkJvdHRvbT1cIjE1XCIgLz5cclxuICAgICAgPElucHV0IG5hbWU9XCJpbnB1dFlcIiBsYWJlbD1cIllcIiB2YWx1ZT17aW5wdXRZfSBjaGFuZ2VkPXsodmFsKSA9PiBvbkNoYW5nZWQoJ1knLCB2YWwpfSBoYW5kbGVLZXlQcmVzcz17aGFuZGxlS2V5UHJlc3N9IC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuQ2FzZTEge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXX0= */\n/*@ sourceURL=D:\\\\Project\\\\next-test\\\\components\\\\Case1.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.9c7e1b2417bc9a11d420.hot-update.js.map