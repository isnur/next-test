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
    if (id === 'X' && !isNaN(val)) {
      setInputX(Number(val));
    } else if (id === 'Y' && !isNaN(val)) {
      setInputY(Number(val));
    }
  };

  return __jsx("div", {
    className: "jsx-463547332" + " " + "Case1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-463547332",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Sum X & Y", inputX), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "inputX",
    label: "X",
    value: inputX,
    changed: function changed(e) {
      return onChanged('X', e);
    },
    marginBottom: "15",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: "inputY",
    label: "Y",
    value: inputY,
    changed: function changed(e) {
      return onChanged('Y', e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "463547332",
    __self: this
  }, ".Case1.jsx-463547332{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxuZXh0LXRlc3RcXGNvbXBvbmVudHNcXENhc2UxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCa0IsQUFHc0IsV0FDYiIsImZpbGUiOiJEOlxcUHJvamVjdFxcbmV4dC10ZXN0XFxjb21wb25lbnRzXFxDYXNlMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhc2UxKHByb3BzKSB7XHJcbiAgY29uc3QgW2lucHV0WCwgc2V0SW5wdXRYXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpbnB1dFksIHNldElucHV0WV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBvbkNoYW5nZWQgPSAoaWQsIHZhbCkgPT4ge1xyXG4gICAgaWYgKGlkID09PSAnWCcgJiYgIWlzTmFOKHZhbCkpIHtcclxuICAgICAgc2V0SW5wdXRYKE51bWJlcih2YWwpKVxyXG4gICAgfSBlbHNlIGlmIChpZCA9PT0gJ1knICYmICFpc05hTih2YWwpKSB7XHJcbiAgICAgIHNldElucHV0WShOdW1iZXIodmFsKSlcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQ2FzZTFcIj5cclxuICAgICAgPGgyPlN1bSBYICYgWXtpbnB1dFh9PC9oMj5cclxuICAgICAgPElucHV0IG5hbWU9XCJpbnB1dFhcIiBsYWJlbD1cIlhcIiB2YWx1ZT17aW5wdXRYfSBjaGFuZ2VkPXsoZSkgPT4gb25DaGFuZ2VkKCdYJywgZSl9IG1hcmdpbkJvdHRvbT1cIjE1XCIgLz5cclxuICAgICAgPElucHV0IG5hbWU9XCJpbnB1dFlcIiBsYWJlbD1cIllcIiB2YWx1ZT17aW5wdXRZfSBjaGFuZ2VkPXsoZSkgPT4gb25DaGFuZ2VkKCdZJywgZSl9IC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuQ2FzZTEge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXX0= */\n/*@ sourceURL=D:\\\\Project\\\\next-test\\\\components\\\\Case1.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.4dd6a52ef5418c1d802f.hot-update.js.map