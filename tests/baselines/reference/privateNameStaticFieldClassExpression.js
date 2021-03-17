//// [privateNameStaticFieldClassExpression.ts]
class B {
    static #foo = class {
        constructor() {
            console.log("hello");
            new B.#foo2();
        }
        static test = 123;
        field = 10;
    };
    static #foo2 = class Foo {
        static otherClass = 123;
    };

    m() {
        console.log(B.#foo.test)
        B.#foo.test = 10;
        new B.#foo().field;
    }
}




//// [privateNameStaticFieldClassExpression.js]
var __classStaticPrivateFieldGet = (this && this.__classStaticPrivateFieldGet) || function (receiver, classConstructor, propertyDescriptor) {
    if (receiver !== classConstructor) {
        throw new TypeError("Private static access of wrong provenance");
    }
    if (propertyDescriptor === undefined) {
        throw new TypeError("Private static field was accessed before its declaration.");
    }
    return propertyDescriptor.value;
};
var _a, _B_foo, _B_foo2, _b, _c;
class B {
    m() {
        console.log(__classStaticPrivateFieldGet(B, _a, _B_foo).test);
        __classStaticPrivateFieldGet(B, _a, _B_foo).test = 10;
        new (__classStaticPrivateFieldGet(B, _a, _B_foo))().field;
    }
}
_a = B;
_B_foo = { value: (_b = class {
            constructor() {
                this.field = 10;
                console.log("hello");
                new (__classStaticPrivateFieldGet(B, _a, _B_foo2))();
            }
        },
        _b.test = 123,
        _b) };
_B_foo2 = { value: (_c = class Foo {
        },
        _c.otherClass = 123,
        _c) };
