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
    id === 'X' ? setInputX(Number(inputX.replace(/^0+/, ''))) : setInputY(Number(inputY.replace(/^0+/, '')));
    console.log(inputX);
  };

  var _handleKeyPress = function handleKeyPress(id, event) {
    if (event.key.toLowerCase() === 'e') {
      event.preventDefault();
    }

    if (event.key === '-' || event.key === '+' || event.key === '*' || event.key === '/' || event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
    }

    console.log(inputX);
    id === 'X' ? setInputX(inputX) : setInputY(inputY);
  };

  return __jsx("div", {
    className: "jsx-463547332" + " " + "Case1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-463547332",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
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
      lineNumber: 26
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
      lineNumber: 27
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "463547332",
    __self: this
  }, ".Case1.jsx-463547332{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxuZXh0LXRlc3RcXGNvbXBvbmVudHNcXENhc2UxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCa0IsQUFHc0IsV0FDYiIsImZpbGUiOiJEOlxcUHJvamVjdFxcbmV4dC10ZXN0XFxjb21wb25lbnRzXFxDYXNlMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhc2UxKHByb3BzKSB7XHJcbiAgY29uc3QgW2lucHV0WCwgc2V0SW5wdXRYXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpbnB1dFksIHNldElucHV0WV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBvbkNoYW5nZWQgPSAoaWQsIHZhbCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3ZhbCcsIHZhbClcclxuICAgIGNvbnNvbGUubG9nKCd2YWwyJywgTnVtYmVyKHZhbCkpXHJcbiAgICBpZCA9PT0gJ1gnID8gc2V0SW5wdXRYKE51bWJlcihpbnB1dFgucmVwbGFjZSgvXjArLywgJycpKSkgOiBzZXRJbnB1dFkoTnVtYmVyKGlucHV0WS5yZXBsYWNlKC9eMCsvLCAnJykpKVxyXG4gICAgY29uc29sZS5sb2coaW5wdXRYKVxyXG4gIH1cclxuICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IChpZCwgZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2UnKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIH1cclxuICAgIGlmIChldmVudC5rZXkgPT09ICctJyB8fCBldmVudC5rZXkgPT09ICcrJyB8fCBldmVudC5rZXkgPT09ICcqJyB8fCBldmVudC5rZXkgPT09ICcvJyB8fCBldmVudC5rZXkgPT09ICdFbnRlcicgIHx8IGV2ZW50LmtleSA9PT0gJywnKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGlucHV0WClcclxuICAgIGlkID09PSAnWCcgPyBzZXRJbnB1dFgoaW5wdXRYKSA6IHNldElucHV0WShpbnB1dFkpXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkNhc2UxXCI+XHJcbiAgICAgIDxoMj5TdW0gWCAmIFk8L2gyPlxyXG4gICAgICA8SW5wdXQgbmFtZT1cImlucHV0WFwiIGxhYmVsPVwiWFwiIHZhbHVlPXtpbnB1dFh9IGNoYW5nZWQ9eyh2YWwpID0+IG9uQ2hhbmdlZCgnWCcsIHZhbCl9IGhhbmRsZUtleVByZXNzPXsoZSkgPT4gaGFuZGxlS2V5UHJlc3MoJ1gnLCBlKX0gbWFyZ2luQm90dG9tPVwiMTVcIiAvPlxyXG4gICAgICA8SW5wdXQgbmFtZT1cImlucHV0WVwiIGxhYmVsPVwiWVwiIHZhbHVlPXtpbnB1dFl9IGNoYW5nZWQ9eyh2YWwpID0+IG9uQ2hhbmdlZCgnWScsIHZhbCl9IGhhbmRsZUtleVByZXNzPXsoZSkgPT4gaGFuZGxlS2V5UHJlc3MoJ1knLCBlKX0gLz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5DYXNlMSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=D:\\\\Project\\\\next-test\\\\components\\\\Case1.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.4422055ea70c3c933225.hot-update.js.map