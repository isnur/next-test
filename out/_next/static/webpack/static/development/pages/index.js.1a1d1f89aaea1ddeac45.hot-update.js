webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Input.js":
/*!*****************************!*\
  !*** ./components/Input.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Project\\next-test\\components\\Input.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function Input(props) {
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["106981662", [props.marginBottom + 'px' || false]]]) + " " + "Input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["106981662", [props.marginBottom + 'px' || false]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, props.label, " : ", props.value), __jsx("input", {
    type: "tel",
    value: props.value,
    name: props.name,
    onKeyPress: props.handleKeyPress,
    onChange: function onChange(event) {
      return props.changed(event.target.value);
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["106981662", [props.marginBottom + 'px' || false]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "106981662",
    dynamic: [props.marginBottom + 'px' || false],
    __self: this
  }, ".Input.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;margin-bottom:".concat(props.marginBottom + 'px' || false, ";}span.__jsx-style-dynamic-selector{color:#333333;position:absolute;font-size:1.5em;font-weight:700;line-height:1;padding-left:15px;}input.__jsx-style-dynamic-selector{width:100%;font-size:24px;color:#4a4a4a;background-color:#f2f3f4;text-align:right;font-family:inherit;font-weight:700;height:50px;padding:0 15px 0 50px;border-radius:5px;border:none;}input.__jsx-style-dynamic-selector:focus{outline:none;}input.__jsx-style-dynamic-selector::-webkit-outer-spin-button,input.__jsx-style-dynamic-selector::-webkit-inner-spin-button{-webkit-appearance:none;margin:0;}input[type=number].__jsx-style-dynamic-selector{-moz-appearance:textfield;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxuZXh0LXRlc3RcXGNvbXBvbmVudHNcXElucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtrQixBQUd3QixBQU1DLEFBUUgsQUFhRSxBQUtXLEFBTUMsV0F2QlYsRUFhakIsQ0FyQm9CLFVBMEJULEVBakJLLEFBdUJoQixNQS9Ca0IsQ0EwQmxCLE9BakIyQixRQVJULGdCQUNGLENBUUcsU0FqQkUsSUFVRCxJQVFFLGNBUHRCLE1BUWtCLGdCQUNKLFlBQ1Usc0JBQ0osZUFyQkEsR0FzQk4sWUFDZCxHQXJCRCwyQ0FBQyIsImZpbGUiOiJEOlxcUHJvamVjdFxcbmV4dC10ZXN0XFxjb21wb25lbnRzXFxJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0KHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiSW5wdXRcIj5cclxuICAgICAgPHNwYW4+e3Byb3BzLmxhYmVsfSA6IHtwcm9wcy52YWx1ZX08L3NwYW4+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgdmFsdWU9e3Byb3BzLnZhbHVlfSBuYW1lPXtwcm9wcy5uYW1lfSBvbktleVByZXNzPXtwcm9wcy5oYW5kbGVLZXlQcmVzc30gb25DaGFuZ2U9e2V2ZW50ID0+IHByb3BzLmNoYW5nZWQoZXZlbnQudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5JbnB1dCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7cHJvcHMubWFyZ2luQm90dG9tICsgJ3B4JyB8fCAwfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDsgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzRhNGE0YTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDUwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OmZvY3VzIHtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xyXG4gICAgICAgIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG4gICAgICAgIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIEZpcmVmb3ggKi9cclxuICAgICAgICBpbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gICAgICAgICAgLW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=D:\\\\Project\\\\next-test\\\\components\\\\Input.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.1a1d1f89aaea1ddeac45.hot-update.js.map