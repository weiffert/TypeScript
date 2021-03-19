//// [privateNameStaticFieldCallExpression.ts]
class A {
    static #fieldFunc = function () { this.x = 10; };
    static #fieldFunc2 = function (a, ...b) {};
    x = 1;
    test() {
        A.#fieldFunc();
        A.#fieldFunc?.();
        const func = A.#fieldFunc;
        func();
        new A.#fieldFunc();

        const arr = [ 1, 2 ];
        A.#fieldFunc2(0, ...arr, 3);
        const b = new A.#fieldFunc2(0, ...arr, 3);
        const str = A.#fieldFunc2`head${1}middle${2}tail`;
        this.getClass().#fieldFunc2`test${1}and${2}`;
    }
    getClass() { return A; }
}


//// [privateNameStaticFieldCallExpression.js]
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
let _A_cls, _A_fieldFunc, _A_fieldFunc2;
class A {
    constructor() {
        this.x = 1;
    }
    test() {
        var _a;
        var _b;
        __classPrivateFieldGet(A, _A_cls, "f", _A_fieldFunc).call(A);
        (_a = __classPrivateFieldGet(A, _A_cls, "f", _A_fieldFunc)) === null || _a === void 0 ? void 0 : _a.call(A);
        const func = __classPrivateFieldGet(A, _A_cls, "f", _A_fieldFunc);
        func();
        new (__classPrivateFieldGet(A, _A_cls, "f", _A_fieldFunc))();
        const arr = [1, 2];
        __classPrivateFieldGet(A, _A_cls, "f", _A_fieldFunc2).call(A, 0, ...arr, 3);
        const b = new (__classPrivateFieldGet(A, _A_cls, "f", _A_fieldFunc2))(0, ...arr, 3);
        const str = __classPrivateFieldGet(A, _A_cls, "f", _A_fieldFunc2).bind(A) `head${1}middle${2}tail`;
        __classPrivateFieldGet((_b = this.getClass()), _A_cls, "f", _A_fieldFunc2).bind(_b) `test${1}and${2}`;
    }
    getClass() { return A; }
}
_A_cls = A;
_A_fieldFunc = { value: function () { this.x = 10; } };
_A_fieldFunc2 = { value: function (a, ...b) { } };
