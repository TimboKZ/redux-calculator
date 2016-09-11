webpackHotUpdate(0,{

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	eval("/**\r\n * @file Bootstraps React on the page\r\n * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>\r\n * @copyright 2016\r\n * @license MIT\r\n * @version 0.0.1\r\n */\r\n\"use strict\";\r\nvar React = __webpack_require__(2);\r\nvar ReactDOM = __webpack_require__(35);\r\nvar App_tsx_1 = __webpack_require__(173);\r\nvar root = document.getElementById('root');\r\nReactDOM.render(React.createElement(App_tsx_1.App, null), root);\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/index.tsx\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/index.tsx?");

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	eval("/**\r\n * @file Contains interface/classes for the app container\r\n * @author Timur Kuzhagaliyev <tim.kuzh@gmail.com>\r\n * @copyright 2016\r\n * @license BSD\r\n * @version 0.0.1\r\n */\r\n\"use strict\";\r\nvar __extends = (this && this.__extends) || function (d, b) {\r\n    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n};\r\n__webpack_require__(174);\r\nvar React = __webpack_require__(2);\r\n/**\r\n * @class App container class\r\n * @since 0.0.1\r\n */\r\nvar App = (function (_super) {\r\n    __extends(App, _super);\r\n    function App() {\r\n        _super.apply(this, arguments);\r\n    }\r\n    App.prototype.render = function () {\r\n        return React.createElement(\"h1\", null, React.createElement(\"em\", null, \"Hello\"), \" \", React.createElement(\"span\", null, \"World\"));\r\n    };\r\n    return App;\r\n}(React.Component));\r\nexports.App = App;\r\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/App.tsx\n ** module id = 173\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }

})