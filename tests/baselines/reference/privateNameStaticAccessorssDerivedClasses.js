//// [privateNameStaticAccessorssDerivedClasses.ts]
class Base {
    static get #prop(): number { return  123; }
    static method(x: typeof Derived) {
        console.log(x.#prop);
    }
}
class Derived extends Base {
    static method(x: typeof Derived) {
        console.log(x.#prop);
    }
}


//// [privateNameStaticAccessorssDerivedClasses.js]
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
let _Base_cls, _Base_prop_get;
class Base {
    static method(x) {
        console.log(__classPrivateFieldGet(x, _Base_cls, "a", _Base_prop_get));
    }
}
_Base_cls = Base, _Base_prop_get = function _Base_prop_get() { return 123; };
class Derived extends Base {
    static method(x) {
        console.log(x.);
    }
}
