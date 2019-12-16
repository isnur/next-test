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
  var valChanged = function valChanged(e) {
    var val = e.target.value;
    props.changed(val);
  };

  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800911104", [props.marginBottom + 'px' || false]]]) + " " + "Input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800911104", [props.marginBottom + 'px' || false]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.label, " :"), __jsx("input", {
    type: "text",
    name: props.name,
    onChange: valChanged,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2800911104", [props.marginBottom + 'px' || false]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2800911104",
    dynamic: [props.marginBottom + 'px' || false],
    __self: this
  }, ".Input.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;margin-bottom:".concat(props.marginBottom + 'px' || false, ";}span.__jsx-style-dynamic-selector{color:#333333;position:absolute;font-size:1.5em;font-weight:700;line-height:1;padding-left:15px;}input.__jsx-style-dynamic-selector{width:100%;font-size:24px;color:#4a4a4a;background-color:#f2f3f4;text-align:right;font-family:inherit;font-weight:700;height:50px;padding:0 15px 0 50px;border-radius:5px;border:none;}input.__jsx-style-dynamic-selector:focus{outline:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxuZXh0LXRlc3RcXGNvbXBvbmVudHNcXElucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdrQixBQUd3QixBQU1DLEFBUUgsQUFhRSxXQVpFLEVBYWpCLENBckJvQixZQVNKLE1BUkUsUUFTUyxRQVJULGdCQUNGLENBUUcsU0FqQkUsSUFVRCxJQVFFLGNBUHRCLE1BUWtCLGdCQUNKLFlBQ1Usc0JBQ0osZUFyQkEsR0FzQk4sWUFDZCxHQXJCRCwyQ0FBQyIsImZpbGUiOiJEOlxcUHJvamVjdFxcbmV4dC10ZXN0XFxjb21wb25lbnRzXFxJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dChwcm9wcykge1xyXG4gIGNvbnN0IHZhbENoYW5nZWQgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgdmFsID0gZS50YXJnZXQudmFsdWVcclxuICAgIHByb3BzLmNoYW5nZWQodmFsKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiSW5wdXRcIj5cclxuICAgICAgPHNwYW4+e3Byb3BzLmxhYmVsfSA6PC9zcGFuPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPXtwcm9wcy5uYW1lfSBvbkNoYW5nZT17dmFsQ2hhbmdlZH0gLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5JbnB1dCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206ICR7cHJvcHMubWFyZ2luQm90dG9tICsgJ3B4JyB8fCAwfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDsgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzRhNGE0YTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMTVweCAwIDUwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OmZvY3VzIHtcclxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXX0= */\n/*@ sourceURL=D:\\\\Project\\\\next-test\\\\components\\\\Input.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.da118226eafd947985ff.hot-update.js.map