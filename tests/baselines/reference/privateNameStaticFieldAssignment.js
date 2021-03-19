//// [privateNameStaticFieldAssignment.ts]
class A {
    static #field = 0;
    constructor() {
        A.#field = 1;
        A.#field += 2;
        A.#field -= 3;
        A.#field /= 4;
        A.#field *= 5;
        A.#field **= 6;
        A.#field %= 7;
        A.#field <<= 8;
        A.#field >>= 9;
        A.#field >>>= 10;
        A.#field &= 11;
        A.#field |= 12;
        A.#field ^= 13;
        A.getClass().#field = 1;
        A.getClass().#field += 2;
        A.getClass().#field -= 3;
        A.getClass().#field /= 4;
        A.getClass().#field *= 5;
        A.getClass().#field **= 6;
        A.getClass().#field %= 7;
        A.getClass().#field <<= 8;
        A.getClass().#field >>= 9;
        A.getClass().#field >>>= 10;
        A.getClass().#field &= 11;
        A.getClass().#field |= 12;
        A.getClass().#field ^= 13;
    }
    static getClass() {
        return A;
    }
}


//// [privateNameStaticFieldAssignment.js]
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
let _A_cls, _A_field;
class A {
    constructor() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
        __classPrivateFieldSet(A, _A_cls, 1, "f", _A_field);
        __classPrivateFieldSet(_a = A, _A_cls, __classPrivateFieldGet(_a, _A_cls, "f", _A_field) + 2, "f", _A_field);
        __classPrivateFieldSet(_b = A, _A_cls, __classPrivateFieldGet(_b, _A_cls, "f", _A_field) - 3, "f", _A_field);
        __classPrivateFieldSet(_c = A, _A_cls, __classPrivateFieldGet(_c, _A_cls, "f", _A_field) / 4, "f", _A_field);
        __classPrivateFieldSet(_d = A, _A_cls, __classPrivateFieldGet(_d, _A_cls, "f", _A_field) * 5, "f", _A_field);
        __classPrivateFieldSet(_e = A, _A_cls, Math.pow(__classPrivateFieldGet(_e, _A_cls, "f", _A_field), 6), "f", _A_field);
        __classPrivateFieldSet(_f = A, _A_cls, __classPrivateFieldGet(_f, _A_cls, "f", _A_field) % 7, "f", _A_field);
        __classPrivateFieldSet(_g = A, _A_cls, __classPrivateFieldGet(_g, _A_cls, "f", _A_field) << 8, "f", _A_field);
        __classPrivateFieldSet(_h = A, _A_cls, __classPrivateFieldGet(_h, _A_cls, "f", _A_field) >> 9, "f", _A_field);
        __classPrivateFieldSet(_j = A, _A_cls, __classPrivateFieldGet(_j, _A_cls, "f", _A_field) >>> 10, "f", _A_field);
        __classPrivateFieldSet(_k = A, _A_cls, __classPrivateFieldGet(_k, _A_cls, "f", _A_field) & 11, "f", _A_field);
        __classPrivateFieldSet(_l = A, _A_cls, __classPrivateFieldGet(_l, _A_cls, "f", _A_field) | 12, "f", _A_field);
        __classPrivateFieldSet(_m = A, _A_cls, __classPrivateFieldGet(_m, _A_cls, "f", _A_field) ^ 13, "f", _A_field);
        __classPrivateFieldSet(A.getClass(), _A_cls, 1, "f", _A_field);
        __classPrivateFieldSet(_o = A.getClass(), _A_cls, __classPrivateFieldGet(_o, _A_cls, "f", _A_field) + 2, "f", _A_field);
        __classPrivateFieldSet(_p = A.getClass(), _A_cls, __classPrivateFieldGet(_p, _A_cls, "f", _A_field) - 3, "f", _A_field);
        __classPrivateFieldSet(_q = A.getClass(), _A_cls, __classPrivateFieldGet(_q, _A_cls, "f", _A_field) / 4, "f", _A_field);
        __classPrivateFieldSet(_r = A.getClass(), _A_cls, __classPrivateFieldGet(_r, _A_cls, "f", _A_field) * 5, "f", _A_field);
        __classPrivateFieldSet(_s = A.getClass(), _A_cls, Math.pow(__classPrivateFieldGet(_s, _A_cls, "f", _A_field), 6), "f", _A_field);
        __classPrivateFieldSet(_t = A.getClass(), _A_cls, __classPrivateFieldGet(_t, _A_cls, "f", _A_field) % 7, "f", _A_field);
        __classPrivateFieldSet(_u = A.getClass(), _A_cls, __classPrivateFieldGet(_u, _A_cls, "f", _A_field) << 8, "f", _A_field);
        __classPrivateFieldSet(_v = A.getClass(), _A_cls, __classPrivateFieldGet(_v, _A_cls, "f", _A_field) >> 9, "f", _A_field);
        __classPrivateFieldSet(_w = A.getClass(), _A_cls, __classPrivateFieldGet(_w, _A_cls, "f", _A_field) >>> 10, "f", _A_field);
        __classPrivateFieldSet(_x = A.getClass(), _A_cls, __classPrivateFieldGet(_x, _A_cls, "f", _A_field) & 11, "f", _A_field);
        __classPrivateFieldSet(_y = A.getClass(), _A_cls, __classPrivateFieldGet(_y, _A_cls, "f", _A_field) | 12, "f", _A_field);
        __classPrivateFieldSet(_z = A.getClass(), _A_cls, __classPrivateFieldGet(_z, _A_cls, "f", _A_field) ^ 13, "f", _A_field);
    }
    static getClass() {
        return A;
    }
}
_A_cls = A;
_A_field = { value: 0 };
