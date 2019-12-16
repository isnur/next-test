webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Project\\next-test\\components\\Menu.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var menuStyle = {
  height: '60px',
  color: '#a8a8a8',
  borderTop: '1px solid #dedede',
  backgroundColor: 'white',
  position: 'fixed',
  bottom: 0
};
function Menu(props) {
  console.log(props);

  var activeMenu = function activeMenu(id) {
    console.log(id);
    return id === props.caseId ? 'menuitem active' : 'menuitem';
  };

  return __jsx("div", {
    style: menuStyle,
    className: "jsx-3298628630" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3298628630" + " " + "container menubar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/?case=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3298628630" + " " + (activeMenu('1') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Case 1")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/?case=2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3298628630" + " " + (activeMenu('2') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Case 2")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/?case=3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3298628630" + " " + (activeMenu('3') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Case 3")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/?case=4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-3298628630" + " " + (activeMenu('4') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Case 4"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3298628630",
    __self: this
  }, ".menubar.jsx-3298628630{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 14px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.menuitem.jsx-3298628630{width:80px;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#a8a8a8;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.active.jsx-3298628630{color:#00aaef;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxuZXh0LXRlc3RcXGNvbXBvbmVudHNcXE1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNrQixBQUc4QixBQUtSLEFBVUcsV0FURixHQVVkLFNBVGUsc0VBTkUsSUFPSSxXQU5VLGtGQU9OLHlDQU56QiwwREFPZ0IsY0FDQyxlQUNNLGtEQUN2QiIsImZpbGUiOiJEOlxcUHJvamVjdFxcbmV4dC10ZXN0XFxjb21wb25lbnRzXFxNZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgbWVudVN0eWxlID0ge1xyXG4gIGhlaWdodDogJzYwcHgnLFxyXG4gIGNvbG9yOiAnI2E4YThhOCcsXHJcbiAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNkZWRlZGUnLFxyXG4gIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICBib3R0b206IDBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudShwcm9wcykge1xyXG4gIGNvbnNvbGUubG9nKHByb3BzKVxyXG4gIGNvbnN0IGFjdGl2ZU1lbnUgPSAoaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgcmV0dXJuIChpZCA9PT0gcHJvcHMuY2FzZUlkKSA/ICdtZW51aXRlbSBhY3RpdmUnIDogJ21lbnVpdGVtJ1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCIgc3R5bGU9e21lbnVTdHlsZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1lbnViYXJcIj5cclxuICAgICAgICA8TGluayBocmVmPScvP2Nhc2U9MSc+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e2FjdGl2ZU1lbnUoJzEnKX0+Q2FzZSAxPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPScvP2Nhc2U9Mic+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e2FjdGl2ZU1lbnUoJzInKX0+Q2FzZSAyPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPScvP2Nhc2U9Myc+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e2FjdGl2ZU1lbnUoJzMnKX0+Q2FzZSAzPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPScvP2Nhc2U9NCc+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9e2FjdGl2ZU1lbnUoJzQnKX0+Q2FzZSA0PC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubWVudWJhciB7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAxNHB4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51aXRlbSB7XHJcbiAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogI2E4YThhODtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwYWFlZjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=D:\\\\Project\\\\next-test\\\\components\\\\Menu.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.4d6a1636f9bcc7f678fb.hot-update.js.map