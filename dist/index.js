(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ast/BinaryExpression.ts":
/*!*************************************!*\
  !*** ./src/ast/BinaryExpression.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _execute_NumberValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../execute/NumberValue */ "./src/execute/NumberValue.ts");

var BinaryExpression = /** @class */ (function () {
    function BinaryExpression(operation, expr1, expr2) {
        this.operation = operation;
        this.expr1 = expr1;
        this.expr2 = expr2;
    }
    BinaryExpression.prototype.eval = function () {
        var res;
        var number1 = this.expr1.eval().asNumber();
        var number2 = this.expr2.eval().asNumber();
        switch (this.operation) {
            case "*":
                res = number1 * number2;
                break;
            case "/":
                res = number1 / number2;
                break;
            case "^":
                res = Math.pow(number1, number2);
                break;
            case "-":
                res = number1 - number2;
                break;
            case "mod":
                res = number1 % number2;
                break;
            case "+":
            default:
                res = number1 + number2;
                break;
        }
        return new _execute_NumberValue__WEBPACK_IMPORTED_MODULE_0__["default"](res);
    };
    BinaryExpression.prototype.toString = function () {
        return "(" + this.expr1.toString() + this.operation + this.expr2.toString() + ")";
    };
    return BinaryExpression;
}());
/* harmony default export */ __webpack_exports__["default"] = (BinaryExpression);


/***/ }),

/***/ "./src/ast/ConstantExpression.ts":
/*!***************************************!*\
  !*** ./src/ast/ConstantExpression.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _execute_Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../execute/Constants */ "./src/execute/Constants.ts");

var ConstantExpression = /** @class */ (function () {
    function ConstantExpression(name) {
        this.name = name;
    }
    ConstantExpression.prototype.eval = function () {
        return _execute_Constants__WEBPACK_IMPORTED_MODULE_0__["default"].get(this.name);
    };
    ConstantExpression.prototype.toString = function () {
        return this.name;
    };
    return ConstantExpression;
}());
/* harmony default export */ __webpack_exports__["default"] = (ConstantExpression);


/***/ }),

/***/ "./src/ast/FunctionalExpression.ts":
/*!*****************************************!*\
  !*** ./src/ast/FunctionalExpression.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _execute_Functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../execute/Functions */ "./src/execute/Functions.ts");

var FunctionalExpression = /** @class */ (function () {
    function FunctionalExpression(name, args) {
        this.args = new Array();
        this.name = name;
        if (args) {
            this.args = args;
        }
    }
    FunctionalExpression.prototype.addArgument = function (arg) {
        this.args.push(arg);
    };
    FunctionalExpression.prototype.eval = function () {
        var values = new Array(this.args.length);
        for (var i = 0; i < this.args.length; i++) {
            values[i] = this.args[i].eval();
        }
        return _execute_Functions__WEBPACK_IMPORTED_MODULE_0__["default"].get(this.name).execute(values);
    };
    FunctionalExpression.prototype.toString = function () {
        return this.name + "(" + this.args.join(",") + ")";
    };
    return FunctionalExpression;
}());
/* harmony default export */ __webpack_exports__["default"] = (FunctionalExpression);


/***/ }),

/***/ "./src/ast/NumberExpression.ts":
/*!*************************************!*\
  !*** ./src/ast/NumberExpression.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _execute_NumberValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../execute/NumberValue */ "./src/execute/NumberValue.ts");

var NumberExpression = /** @class */ (function () {
    function NumberExpression(value) {
        this.value = new _execute_NumberValue__WEBPACK_IMPORTED_MODULE_0__["default"](value);
    }
    NumberExpression.prototype.eval = function () {
        return this.value;
    };
    NumberExpression.prototype.toString = function () {
        return this.value.asString();
    };
    return NumberExpression;
}());
/* harmony default export */ __webpack_exports__["default"] = (NumberExpression);


/***/ }),

/***/ "./src/ast/UnaryExpression.ts":
/*!************************************!*\
  !*** ./src/ast/UnaryExpression.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _execute_NumberValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../execute/NumberValue */ "./src/execute/NumberValue.ts");

var UnaryExpression = /** @class */ (function () {
    function UnaryExpression(operation, expr) {
        this.operation = operation;
        this.expr = expr;
    }
    UnaryExpression.prototype.eval = function () {
        var res;
        switch (this.operation) {
            case "-":
                res = -this.expr.eval().asNumber();
                break;
            case "+":
            default:
                res = this.expr.eval().asNumber();
                break;
        }
        return new _execute_NumberValue__WEBPACK_IMPORTED_MODULE_0__["default"](res);
    };
    UnaryExpression.prototype.toString = function () {
        return this.operation + this.expr.toString();
    };
    return UnaryExpression;
}());
/* harmony default export */ __webpack_exports__["default"] = (UnaryExpression);


/***/ }),

/***/ "./src/execute/Constants.ts":
/*!**********************************!*\
  !*** ./src/execute/Constants.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumberValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NumberValue */ "./src/execute/NumberValue.ts");

var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.isExists = function (key) {
        return !!Constants.constants[key];
    };
    Constants.prototype.set = function (key, value) {
        Constants.constants[key] = value;
    };
    Constants.get = function (key) {
        if (!Constants.isExists(key)) {
            throw new Error("Constant with name: " + key + " does not exist");
        }
        return Constants.constants[key];
    };
    Constants.constants = {
        "PI": new _NumberValue__WEBPACK_IMPORTED_MODULE_0__["default"](Math.PI),
        "E": new _NumberValue__WEBPACK_IMPORTED_MODULE_0__["default"](Math.E),
    };
    return Constants;
}());
/* harmony default export */ __webpack_exports__["default"] = (Constants);


/***/ }),

/***/ "./src/execute/Functions.ts":
/*!**********************************!*\
  !*** ./src/execute/Functions.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_SinFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default/SinFunction */ "./src/execute/default/SinFunction.ts");
/* harmony import */ var _default_CosFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default/CosFunction */ "./src/execute/default/CosFunction.ts");
/* harmony import */ var _default_AbsFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default/AbsFunction */ "./src/execute/default/AbsFunction.ts");
/* harmony import */ var _default_AtanFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default/AtanFunction */ "./src/execute/default/AtanFunction.ts");
/* harmony import */ var _default_ExpFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default/ExpFunction */ "./src/execute/default/ExpFunction.ts");
/* harmony import */ var _default_LnFunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./default/LnFunction */ "./src/execute/default/LnFunction.ts");
/* harmony import */ var _default_RoundFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./default/RoundFunction */ "./src/execute/default/RoundFunction.ts");
/* harmony import */ var _default_SqrtFunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./default/SqrtFunction */ "./src/execute/default/SqrtFunction.ts");
/* harmony import */ var _default_SqrFunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./default/SqrFunction */ "./src/execute/default/SqrFunction.ts");
/* harmony import */ var _default_MinFunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./default/MinFunction */ "./src/execute/default/MinFunction.ts");
/* harmony import */ var _default_MaxFunction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./default/MaxFunction */ "./src/execute/default/MaxFunction.ts");











var Functions = /** @class */ (function () {
    function Functions() {
    }
    Functions.isExists = function (key) {
        return !!Functions.functions[key];
    };
    Functions.prototype.set = function (key, value) {
        Functions.functions[key] = value;
    };
    Functions.get = function (key) {
        if (!Functions.isExists(key.toLowerCase())) {
            throw new Error("Function with name: " + key + " does not exist");
        }
        return Functions.functions[key.toLowerCase()];
    };
    Functions.functions = {
        "abs": new _default_AbsFunction__WEBPACK_IMPORTED_MODULE_2__["default"](),
        "atan": new _default_AtanFunction__WEBPACK_IMPORTED_MODULE_3__["default"](),
        "cos": new _default_CosFunction__WEBPACK_IMPORTED_MODULE_1__["default"](),
        "sin": new _default_SinFunction__WEBPACK_IMPORTED_MODULE_0__["default"](),
        "exp": new _default_ExpFunction__WEBPACK_IMPORTED_MODULE_4__["default"](),
        "ln": new _default_LnFunction__WEBPACK_IMPORTED_MODULE_5__["default"](),
        "round": new _default_RoundFunction__WEBPACK_IMPORTED_MODULE_6__["default"](),
        "sqrt": new _default_SqrtFunction__WEBPACK_IMPORTED_MODULE_7__["default"](),
        "sqr": new _default_SqrFunction__WEBPACK_IMPORTED_MODULE_8__["default"](),
        "min": new _default_MinFunction__WEBPACK_IMPORTED_MODULE_9__["default"](),
        "max": new _default_MaxFunction__WEBPACK_IMPORTED_MODULE_10__["default"](),
    };
    return Functions;
}());
/* harmony default export */ __webpack_exports__["default"] = (Functions);


/***/ }),

/***/ "./src/execute/NumberValue.ts":
/*!************************************!*\
  !*** ./src/execute/NumberValue.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var NumberValue = /** @class */ (function () {
    function NumberValue(value) {
        this.value = value;
    }
    NumberValue.prototype.asNumber = function () {
        return this.value;
    };
    NumberValue.prototype.asString = function () {
        if (this.value == 0) {
            return "0";
        }
        return this.value.toString();
    };
    NumberValue.prototype.toString = function () {
        return this.asString();
    };
    return NumberValue;
}());
/* harmony default export */ __webpack_exports__["default"] = (NumberValue);


/***/ }),

/***/ "./src/execute/default/AbsFunction.ts":
/*!********************************************!*\
  !*** ./src/execute/default/AbsFunction.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumberValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NumberValue */ "./src/execute/NumberValue.ts");

var AbsFunction = /** @class */ (function () {
    function AbsFunction() {
    }
    AbsFunction.prototype.execute = function (args) {
        if (args.length != 1) {
            throw new Error("One arg expected");
        }
        return new _NumberValue__WEBPACK_IMPORTED_MODULE_0__["default"](Math.abs(args[0].asNumber()));
    };
    return AbsFunction;
}());
/* harmony default export */ __webpack_exports__["default"] = (AbsFunction);


/***/ }),

/***/ "./src/execute/default/AtanFunction.ts":
/*!*********************************************!*\
  !*** ./src/execute/default/AtanFunction.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumberValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NumberValue */ "./src/execute/NumberValue.ts");

var AtanFunction = /** @class */ (function () {
    function AtanFunction() {
    }
    AtanFunction.prototype.execute = function (args) {
        if (args.length != 1) {
            throw new Error("One arg expected");
        }
        return new _NumberValue__WEBPACK_IMPORTED_MODULE_0__["default"](Math.atan(args[0].asNumber()));
    };
    return AtanFunction;
}());
/* harmony default export */ __webpack_exports__["default"] = (AtanFunction);


/***/ }),

/***/ "./src/execute/default/CosFunction.ts":
/*!********************************************!*\
  !*** ./src/execute/default/CosFunction.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumberValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NumberValue */ "./src/execute/NumberValue.ts");

var CosFunction = /** @class */ (function () {
    function CosFunction() {
    }
    CosFunction.prototype.execute = function (args) {
        if (args.length != 1) {
            throw new Error("One arg expected");
        }
        return new _NumberValue__WEBPACK_IMPORTED_MODULE_0__["default"](Math.cos(args[0].asNumber()));
    };
    return CosFunction;
}());
/* harmony default export */ __webpack_exports__["default"] = (CosFunction);


/***/ }),

/***/ "./src/execute/default/ExpFunction.ts":
/*!********************************************!*\
  !*** ./src/execute/default/ExpFunction.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumberValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NumberValue */ "./src/execute/NumberValue.ts");

var ExpFunction = /** @class */ (function () {
    function ExpFunction() {
    }
    ExpFunction.prototype.execute = function (args) {
        if (args.length != 1) {
            throw new Error("One arg expected");
        }
        return new _NumberValue__WEBPACK_IMPORTED_MODULE_0__["default"](Math.exp(args[0].asNumber()));
    };
    return ExpFunction;
}());
/* harmony default export */ __webpack_exports__["default"] = (ExpFunction);


/***/ }),

/***/ "./src/execute/default/LnFunction.ts":
/*!*******************************************!*\
  !*** ./src/execute/default/LnFunction.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumberValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NumberValue */ "./src/execute/NumberValue.ts");

var LnFunction = /** @class */ (function () {
    function LnFunction() {
    }
    LnFunction.prototype.execute = function (args) {
        if (args.length != 1) {
            throw new Error("One arg expected");
        }
        return new _NumberValue__WEBPACK_IMPORTED_MODULE_0__["default"](Math.log(args[0].asNumber()));
    };
    return LnFunction;
}());
/* harmony default export */ __webpack_exports__["default"] = (LnFunction);


/***/ }),

/***/ "./src/execute/default/MaxFunction.ts":
/*!********************************************!*\
  !*** ./src/execute/default/MaxFunction.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumberValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NumberValue */ "./src/execute/NumberValue.ts");

var MaxFunction = /** @class */ (function () {
    function MaxFunction() {
    }
    MaxFunction.prototype.execute = function (args) {
        if (args.length != 2) {
            throw new Error("Two arg expected");
        }
        return new _NumberValue__WEBPACK_IMPORTED_MODULE_0__["default"](Math.max(args[0].asNumber(), args[1].asNumber()));
    };
    return MaxFunction;
}());
/* harmony default export */ __webpack_exports__["default"] = (MaxFunction);


/***/ }),

/***/ "./src/execute/default/MinFunction.ts":
/*!********************************************!*\
  !*** ./src/execute/default/MinFunction.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumberValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NumberValue */ "./src/execute/NumberValue.ts");

var MinFunction = /** @class */ (function () {
    function MinFunction() {
    }
    MinFunction.prototype.execute = function (args) {
        if (args.length != 2) {
            throw new Error("Two arg expected");
        }
        return new _NumberValue__WEBPACK_IMPORTED_MODULE_0__["default"](Math.min(args[0].asNumber(), args[1].asNumber()));
    };
    return MinFunction;
}());
/* harmony default export */ __webpack_exports__["default"] = (MinFunction);


/***/ }),

/***/ "./src/execute/default/RoundFunction.ts":
/*!**********************************************!*\
  !*** ./src/execute/default/RoundFunction.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumberValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NumberValue */ "./src/execute/NumberValue.ts");

var RoundFunction = /** @class */ (function () {
    function RoundFunction() {
    }
    RoundFunction.prototype.execute = function (args) {
        if (args.length != 1) {
            throw new Error("One arg expected");
        }
        return new _NumberValue__WEBPACK_IMPORTED_MODULE_0__["default"](Math.round(args[0].asNumber()));
    };
    return RoundFunction;
}());
/* harmony default export */ __webpack_exports__["default"] = (RoundFunction);


/***/ }),

/***/ "./src/execute/default/SinFunction.ts":
/*!********************************************!*\
  !*** ./src/execute/default/SinFunction.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumberValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NumberValue */ "./src/execute/NumberValue.ts");

var SinFunction = /** @class */ (function () {
    function SinFunction() {
    }
    SinFunction.prototype.execute = function (args) {
        if (args.length != 1) {
            throw new Error("One arg expected");
        }
        return new _NumberValue__WEBPACK_IMPORTED_MODULE_0__["default"](Math.sin(args[0].asNumber()));
    };
    return SinFunction;
}());
/* harmony default export */ __webpack_exports__["default"] = (SinFunction);


/***/ }),

/***/ "./src/execute/default/SqrFunction.ts":
/*!********************************************!*\
  !*** ./src/execute/default/SqrFunction.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumberValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NumberValue */ "./src/execute/NumberValue.ts");

var SqrFunction = /** @class */ (function () {
    function SqrFunction() {
    }
    SqrFunction.prototype.execute = function (args) {
        if (args.length != 1) {
            throw new Error("One arg expected");
        }
        return new _NumberValue__WEBPACK_IMPORTED_MODULE_0__["default"](Math.pow(args[0].asNumber(), 2));
    };
    return SqrFunction;
}());
/* harmony default export */ __webpack_exports__["default"] = (SqrFunction);


/***/ }),

/***/ "./src/execute/default/SqrtFunction.ts":
/*!*********************************************!*\
  !*** ./src/execute/default/SqrtFunction.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NumberValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../NumberValue */ "./src/execute/NumberValue.ts");

var SqrtFunction = /** @class */ (function () {
    function SqrtFunction() {
    }
    SqrtFunction.prototype.execute = function (args) {
        if (args.length != 1) {
            throw new Error("One arg expected");
        }
        return new _NumberValue__WEBPACK_IMPORTED_MODULE_0__["default"](Math.sqrt(args[0].asNumber()));
    };
    return SqrtFunction;
}());
/* harmony default export */ __webpack_exports__["default"] = (SqrtFunction);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parser_Lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser/Lexer */ "./src/parser/Lexer.ts");
/* harmony import */ var _parser_Parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parser/Parser */ "./src/parser/Parser.ts");


function calculate(source) {
    var tokens = new _parser_Lexer__WEBPACK_IMPORTED_MODULE_0__["default"](source).tokenize();
    var expressions = new _parser_Parser__WEBPACK_IMPORTED_MODULE_1__["default"](tokens).parse();
    return expressions[0].eval().asNumber();
}
console.log(calculate("2+.4"));
/* harmony default export */ __webpack_exports__["default"] = (calculate);


/***/ }),

/***/ "./src/parser/Lexer.ts":
/*!*****************************!*\
  !*** ./src/parser/Lexer.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Token */ "./src/parser/Token.ts");
/* harmony import */ var _TokenType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TokenType */ "./src/parser/TokenType.ts");


var Lexer = /** @class */ (function () {
    function Lexer(input) {
        this.tokens = new Array();
        this.pos = 0;
        this.input = input;
    }
    Lexer.prototype.tokenize = function () {
        while (this.pos < this.input.length) {
            var current = this.peek(0);
            if (this.isNumber(current) || (current == "." && this.isNumber(this.peek(1)))) {
                this.tokenizeNumber();
            }
            else if (this.isLater(current)) {
                this.tokenizeWord();
            }
            else if (Lexer.OPERATOR_TOKENS[current]) {
                this.tokenizeOperator();
            }
            else {
                this.next(); //skip whitespaces
            }
        }
        return this.tokens;
    };
    Lexer.prototype.tokenizeNumber = function () {
        var current = this.peek(0);
        var tokenText = "";
        while (true) {
            if (current == '.') {
                if (tokenText.indexOf('.') != -1) {
                    throw new Error("Invalid float number");
                }
            }
            else if (!this.isNumber(current)) {
                break;
            }
            tokenText += current;
            current = this.next();
        }
        this.tokens.push(new _Token__WEBPACK_IMPORTED_MODULE_0__["default"](_TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].NUMBER, tokenText));
    };
    Lexer.prototype.tokenizeOperator = function () {
        var current = this.peek(0);
        var token = Lexer.OPERATOR_TOKENS[current];
        this.tokens.push(new _Token__WEBPACK_IMPORTED_MODULE_0__["default"](token));
        this.next();
    };
    Lexer.prototype.tokenizeWord = function () {
        var regexp = new RegExp('[a-zA-Z0-9_\$]');
        var current = this.peek(0);
        var tokenText = "";
        while (regexp.test(current)) {
            tokenText += current;
            current = this.next();
        }
        if (tokenText == "mod") {
            this.tokens.push(new _Token__WEBPACK_IMPORTED_MODULE_0__["default"](_TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].MOD));
        }
        else {
            this.tokens.push(new _Token__WEBPACK_IMPORTED_MODULE_0__["default"](_TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].WORD, tokenText));
        }
    };
    Lexer.prototype.isLater = function (value) {
        return value.length === 1 && /[a-zA-Z]/i.test(value);
    };
    Lexer.prototype.isNumber = function (value) {
        return value >= '0' && value <= '9';
    };
    Lexer.prototype.next = function () {
        this.pos++;
        return this.peek(0);
    };
    Lexer.prototype.peek = function (relativePosition) {
        var position = this.pos + relativePosition;
        if (position >= this.input.length) {
            return '\0';
        }
        return this.input.charAt(position);
    };
    Lexer.prototype.addToken = function (type, text) {
        if (text === void 0) { text = ""; }
        this.tokens.push(new _Token__WEBPACK_IMPORTED_MODULE_0__["default"](type, text));
    };
    Lexer.OPERATOR_TOKENS = {
        '+': _TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].PLUS,
        '-': _TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].MINUS,
        '*': _TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].STAR,
        '/': _TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].SLASH,
        '(': _TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].LPAREN,
        ')': _TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].RPAREN,
        ',': _TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].COMMA,
        'mod': _TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].MOD,
        '^': _TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].POWER
    };
    return Lexer;
}());
/* harmony default export */ __webpack_exports__["default"] = (Lexer);


/***/ }),

/***/ "./src/parser/Parser.ts":
/*!******************************!*\
  !*** ./src/parser/Parser.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Token */ "./src/parser/Token.ts");
/* harmony import */ var _TokenType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TokenType */ "./src/parser/TokenType.ts");
/* harmony import */ var _ast_NumberExpression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ast/NumberExpression */ "./src/ast/NumberExpression.ts");
/* harmony import */ var _ast_BinaryExpression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ast/BinaryExpression */ "./src/ast/BinaryExpression.ts");
/* harmony import */ var _ast_UnaryExpression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ast/UnaryExpression */ "./src/ast/UnaryExpression.ts");
/* harmony import */ var _ast_ConstantExpression__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ast/ConstantExpression */ "./src/ast/ConstantExpression.ts");
/* harmony import */ var _ast_FunctionalExpression__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ast/FunctionalExpression */ "./src/ast/FunctionalExpression.ts");







var Parser = /** @class */ (function () {
    function Parser(tokens) {
        this.pos = 0;
        this.tokens = tokens;
    }
    Parser.prototype.parse = function () {
        var result = new Array();
        while (!this.match(_TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].EOF)) {
            result.push(this.expression());
        }
        return result;
    };
    Parser.prototype.func = function () {
        var functionName = this.consume(_TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].WORD).text;
        this.consume(_TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].LPAREN);
        var exp = new _ast_FunctionalExpression__WEBPACK_IMPORTED_MODULE_6__["default"](functionName);
        while (!this.match(_TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].RPAREN)) {
            exp.addArgument(this.expression());
            this.match(_TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].COMMA);
        }
        return exp;
    };
    Parser.prototype.expression = function () {
        return this.additive();
    };
    Parser.prototype.additive = function () {
        var expr = this.multiplicative();
        while (true) {
            if (this.match(_TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].PLUS)) {
                expr = new _ast_BinaryExpression__WEBPACK_IMPORTED_MODULE_3__["default"]('+', expr, this.multiplicative());
            }
            else if (this.match(_TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].MINUS)) {
                expr = new _ast_BinaryExpression__WEBPACK_IMPORTED_MODULE_3__["default"]('-', expr, this.multiplicative());
            }
            else if (this.match(_TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].MOD)) {
                expr = new _ast_BinaryExpression__WEBPACK_IMPORTED_MODULE_3__["default"]('mod', expr, this.multiplicative());
            }
            else {
                break;
            }
        }
        return expr;
    };
    Parser.prototype.multiplicative = function () {
        var expr = this.unary();
        while (true) {
            if (this.match(_TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].STAR)) {
                expr = new _ast_BinaryExpression__WEBPACK_IMPORTED_MODULE_3__["default"]('*', expr, this.unary());
            }
            else if (this.match(_TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].SLASH)) {
                expr = new _ast_BinaryExpression__WEBPACK_IMPORTED_MODULE_3__["default"]('/', expr, this.unary());
            }
            else if (this.match(_TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].POWER)) {
                expr = new _ast_BinaryExpression__WEBPACK_IMPORTED_MODULE_3__["default"]('^', expr, this.unary());
            }
            else {
                break;
            }
        }
        return expr;
    };
    Parser.prototype.unary = function () {
        if (this.match(_TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].MINUS)) {
            return new _ast_UnaryExpression__WEBPACK_IMPORTED_MODULE_4__["default"]('-', this.primary());
        }
        else if (this.match(_TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].PLUS)) {
            return this.primary();
        }
        return this.primary();
    };
    Parser.prototype.primary = function () {
        var current = this.get(0);
        if (this.match(_TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].NUMBER)) {
            return new _ast_NumberExpression__WEBPACK_IMPORTED_MODULE_2__["default"](parseFloat(current.text));
        }
        else if (this.get(0).type == _TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].WORD && this.get(1).type == _TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].LPAREN) {
            return this.func();
        }
        else if (this.match(_TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].WORD)) {
            return new _ast_ConstantExpression__WEBPACK_IMPORTED_MODULE_5__["default"](current.text);
        }
        else if (this.match(_TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].LPAREN)) {
            var res = this.expression();
            this.match(_TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].RPAREN);
            return res;
        }
        throw new Error("Unknown expression");
    };
    Parser.prototype.consume = function (type) {
        var current = this.get(0);
        if (type != current.type) {
            throw new Error("Token " + current + " does not match");
        }
        this.pos++;
        return current;
    };
    Parser.prototype.match = function (type) {
        var current = this.get(0);
        if (current.type != type) {
            return false;
        }
        this.pos++;
        return true;
    };
    Parser.prototype.get = function (relativePosition) {
        var position = this.pos + relativePosition;
        if (position >= this.tokens.length) {
            return Parser.EOF;
        }
        return this.tokens[position];
    };
    Parser.EOF = new _Token__WEBPACK_IMPORTED_MODULE_0__["default"](_TokenType__WEBPACK_IMPORTED_MODULE_1__["default"].EOF);
    return Parser;
}());
/* harmony default export */ __webpack_exports__["default"] = (Parser);


/***/ }),

/***/ "./src/parser/Token.ts":
/*!*****************************!*\
  !*** ./src/parser/Token.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TokenType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TokenType */ "./src/parser/TokenType.ts");

var Token = /** @class */ (function () {
    function Token(type, text) {
        this.type = type;
        this.text = text;
    }
    Token.prototype.toString = function () {
        if (this.text) {
            return _TokenType__WEBPACK_IMPORTED_MODULE_0__["default"][this.type] + ": " + this.text;
        }
        else {
            return _TokenType__WEBPACK_IMPORTED_MODULE_0__["default"][this.type];
        }
    };
    return Token;
}());
/* harmony default export */ __webpack_exports__["default"] = (Token);


/***/ }),

/***/ "./src/parser/TokenType.ts":
/*!*********************************!*\
  !*** ./src/parser/TokenType.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TokenType;
(function (TokenType) {
    TokenType[TokenType["NUMBER"] = 0] = "NUMBER";
    TokenType[TokenType["WORD"] = 1] = "WORD";
    TokenType[TokenType["STAR"] = 2] = "STAR";
    TokenType[TokenType["SLASH"] = 3] = "SLASH";
    TokenType[TokenType["PLUS"] = 4] = "PLUS";
    TokenType[TokenType["MINUS"] = 5] = "MINUS";
    TokenType[TokenType["MOD"] = 6] = "MOD";
    TokenType[TokenType["POWER"] = 7] = "POWER";
    TokenType[TokenType["LPAREN"] = 8] = "LPAREN";
    TokenType[TokenType["RPAREN"] = 9] = "RPAREN";
    TokenType[TokenType["COMMA"] = 10] = "COMMA";
    TokenType[TokenType["EOF"] = 11] = "EOF";
})(TokenType || (TokenType = {}));
/* harmony default export */ __webpack_exports__["default"] = (TokenType);


/***/ })

/******/ });
});