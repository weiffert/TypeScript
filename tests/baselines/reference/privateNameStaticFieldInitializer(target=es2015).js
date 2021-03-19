//// [privateNameStaticFieldInitializer.ts]
class A {
    static #field = 10;
    static #uninitialized;
}


//// [privateNameStaticFieldInitializer.js]
let _A_cls, _A_field, _A_uninitialized;
class A {
}
_A_cls = A;
_A_field = { value: 10 };
_A_uninitialized = { value: void 0 };
