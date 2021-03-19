//// [privateNameStaticFieldUnaryMutation.ts]
class C {
    static #test: number = 24;
    constructor() {
        C.#test++;
        C.#test--;
        ++C.#test;
        --C.#test;
        const a = C.#test++;
        const b = C.#test--;
        const c = ++C.#test;
        const d = --C.#test;
        for (C.#test = 0; C.#test < 10; ++C.#test) {}
        for (C.#test = 0; C.#test < 10; C.#test++) {}
    }
    test() {
        this.getClass().#test++;
        this.getClass().#test--;
        ++this.getClass().#test;
        --this.getClass().#test;
        const a = this.getClass().#test++;
        const b = this.getClass().#test--;
        const c = ++this.getClass().#test;
        const d = --this.getClass().#test;
        for (this.getClass().#test = 0; this.getClass().#test < 10; ++this.getClass().#test) {}
        for (this.getClass().#test = 0; this.getClass().#test < 10; this.getClass().#test++) {}
    }
    getClass() { return C; }
}


//// [privateNameStaticFieldUnaryMutation.js]
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
let _C_cls, _C_test;
class C {
    constructor() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        __classPrivateFieldSet(_a = C, _C_cls, +__classPrivateFieldGet(_a, _C_cls, "f", _C_test) + 1, "f", _C_test);
        __classPrivateFieldSet(_b = C, _C_cls, +__classPrivateFieldGet(_b, _C_cls, "f", _C_test) - 1, "f", _C_test);
        __classPrivateFieldSet(_c = C, _C_cls, +__classPrivateFieldGet(_c, _C_cls, "f", _C_test) + 1, "f", _C_test);
        __classPrivateFieldSet(_d = C, _C_cls, +__classPrivateFieldGet(_d, _C_cls, "f", _C_test) - 1, "f", _C_test);
        const a = (__classPrivateFieldSet(_e = C, _C_cls, (_f = +__classPrivateFieldGet(_e, _C_cls, "f", _C_test)) + 1, "f", _C_test), _f);
        const b = (__classPrivateFieldSet(_g = C, _C_cls, (_h = +__classPrivateFieldGet(_g, _C_cls, "f", _C_test)) - 1, "f", _C_test), _h);
        const c = __classPrivateFieldSet(_j = C, _C_cls, +__classPrivateFieldGet(_j, _C_cls, "f", _C_test) + 1, "f", _C_test);
        const d = __classPrivateFieldSet(_k = C, _C_cls, +__classPrivateFieldGet(_k, _C_cls, "f", _C_test) - 1, "f", _C_test);
        for (__classPrivateFieldSet(C, _C_cls, 0, "f", _C_test); __classPrivateFieldGet(C, _C_cls, "f", _C_test) < 10; __classPrivateFieldSet(_l = C, _C_cls, +__classPrivateFieldGet(_l, _C_cls, "f", _C_test) + 1, "f", _C_test)) { }
        for (__classPrivateFieldSet(C, _C_cls, 0, "f", _C_test); __classPrivateFieldGet(C, _C_cls, "f", _C_test) < 10; __classPrivateFieldSet(_m = C, _C_cls, +__classPrivateFieldGet(_m, _C_cls, "f", _C_test) + 1, "f", _C_test)) { }
    }
    test() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        __classPrivateFieldSet(_a = this.getClass(), _C_cls, +__classPrivateFieldGet(_a, _C_cls, "f", _C_test) + 1, "f", _C_test);
        __classPrivateFieldSet(_b = this.getClass(), _C_cls, +__classPrivateFieldGet(_b, _C_cls, "f", _C_test) - 1, "f", _C_test);
        __classPrivateFieldSet(_c = this.getClass(), _C_cls, +__classPrivateFieldGet(_c, _C_cls, "f", _C_test) + 1, "f", _C_test);
        __classPrivateFieldSet(_d = this.getClass(), _C_cls, +__classPrivateFieldGet(_d, _C_cls, "f", _C_test) - 1, "f", _C_test);
        const a = (__classPrivateFieldSet(_e = this.getClass(), _C_cls, (_f = +__classPrivateFieldGet(_e, _C_cls, "f", _C_test)) + 1, "f", _C_test), _f);
        const b = (__classPrivateFieldSet(_g = this.getClass(), _C_cls, (_h = +__classPrivateFieldGet(_g, _C_cls, "f", _C_test)) - 1, "f", _C_test), _h);
        const c = __classPrivateFieldSet(_j = this.getClass(), _C_cls, +__classPrivateFieldGet(_j, _C_cls, "f", _C_test) + 1, "f", _C_test);
        const d = __classPrivateFieldSet(_k = this.getClass(), _C_cls, +__classPrivateFieldGet(_k, _C_cls, "f", _C_test) - 1, "f", _C_test);
        for (__classPrivateFieldSet(this.getClass(), _C_cls, 0, "f", _C_test); __classPrivateFieldGet(this.getClass(), _C_cls, "f", _C_test) < 10; __classPrivateFieldSet(_l = this.getClass(), _C_cls, +__classPrivateFieldGet(_l, _C_cls, "f", _C_test) + 1, "f", _C_test)) { }
        for (__classPrivateFieldSet(this.getClass(), _C_cls, 0, "f", _C_test); __classPrivateFieldGet(this.getClass(), _C_cls, "f", _C_test) < 10; __classPrivateFieldSet(_m = this.getClass(), _C_cls, +__classPrivateFieldGet(_m, _C_cls, "f", _C_test) + 1, "f", _C_test)) { }
    }
    getClass() { return C; }
}
_C_cls = C;
_C_test = { value: 24 };
