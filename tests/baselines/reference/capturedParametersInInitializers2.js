//// [capturedParametersInInitializers2.ts]
function foo(
    y = class {
        static c = x;
        get [x]() {return x;}
        constructor() { x; }
        [z]() { return z; }
    },
    x = 1,
    z = 2
) {
    y.c
}
function foo2(y = class {[x] = x}, x = 1) {
}

//// [capturedParametersInInitializers2.js]
function foo(y, x, z) {
    var _a;
    if (y === void 0) { y = (_a = /** @class */ (function () {
            function class_1() {
                x;
            }
            Object.defineProperty(class_1.prototype, x, {
                get: function () { return x; },
                enumerable: false,
                configurable: true
            });
            class_1.prototype[z] = function () { return z; };
            return class_1;
        }()),
        _a.c = x,
        _a); }
    if (x === void 0) { x = 1; }
    if (z === void 0) { z = 2; }
    y.c;
}
function foo2(y, x) {
    var _a;
    var _b;
    if (y === void 0) { y = (_a = /** @class */ (function () {
            function class_2() {
                this[_b] = x;
            }
            return class_2;
        }()),
        _b = x,
        _a); }
    if (x === void 0) { x = 1; }
}
