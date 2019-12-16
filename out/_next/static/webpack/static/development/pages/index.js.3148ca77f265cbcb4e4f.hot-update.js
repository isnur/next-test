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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Project\\next-test\\components\\Menu.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var menuStyle = {
  height: '60px',
  color: '#a8a8a8',
  'border-top': '1px solid #dedede',
  'background-color': 'white',
  position: 'fixed',
  bottom: 0
};
function Menu(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var activeMenu = function activeMenu(id) {
    console.log(id);
    return router.query["case"] === id ? 'menuitem active' : 'menuitem';
  };

  console.log(router);
  return __jsx("div", {
    style: menuStyle,
    className: "jsx-1546141966" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1546141966" + " " + "container menubar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/?case=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1546141966" + " " + (activeMenu('1') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Case 1")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/?case=2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1546141966" + " " + (activeMenu('2') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Case 2")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/?case=3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1546141966" + " " + (activeMenu('3') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Case 3")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/?case=4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1546141966" + " " + (activeMenu('4') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Case 4"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1546141966",
    __self: this
  }, ".menubar.jsx-1546141966{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 14px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.menuitem.jsx-1546141966{width:80px;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#00aaef;cursor:pointer;}.active.jsx-1546141966{color:rgb(168,168,168);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0XFxuZXh0LXRlc3RcXGNvbXBvbmVudHNcXE1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUNrQixBQUc4QixBQUtSLEFBU2MsV0FSYixZQUNDLEFBUWYsc0VBZGlCLElBT0ksV0FOVSxrRkFPTix5Q0FOekIsMERBT2dCLGNBQ0MsZUFDakIiLCJmaWxlIjoiRDpcXFByb2plY3RcXG5leHQtdGVzdFxcY29tcG9uZW50c1xcTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBtZW51U3R5bGUgPSB7XHJcbiAgaGVpZ2h0OiAnNjBweCcsXHJcbiAgY29sb3I6ICcjYThhOGE4JyxcclxuICAnYm9yZGVyLXRvcCc6ICcxcHggc29saWQgI2RlZGVkZScsXHJcbiAgJ2JhY2tncm91bmQtY29sb3InOiAnd2hpdGUnLFxyXG4gIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gIGJvdHRvbTogMFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51KHByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBhY3RpdmVNZW51ID0gKGlkKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpZClcclxuICAgIHJldHVybiAocm91dGVyLnF1ZXJ5LmNhc2UgPT09IGlkKSA/ICdtZW51aXRlbSBhY3RpdmUnIDogJ21lbnVpdGVtJ1xyXG4gIH1cclxuICBjb25zb2xlLmxvZyhyb3V0ZXIpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiIHN0eWxlPXttZW51U3R5bGV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtZW51YmFyXCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nLz9jYXNlPTEnPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXthY3RpdmVNZW51KCcxJyl9PkNhc2UgMTwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nLz9jYXNlPTInPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXthY3RpdmVNZW51KCcyJyl9PkNhc2UgMjwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nLz9jYXNlPTMnPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXthY3RpdmVNZW51KCczJyl9PkNhc2UgMzwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nLz9jYXNlPTQnPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPXthY3RpdmVNZW51KCc0Jyl9PkNhc2UgNDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLm1lbnViYXIge1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMTRweDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudWl0ZW0ge1xyXG4gICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6ICMwMGFhZWY7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6IHJnYigxNjgsIDE2OCwgMTY4KTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=D:\\\\Project\\\\next-test\\\\components\\\\Menu.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.3148ca77f265cbcb4e4f.hot-update.js.map