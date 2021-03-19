//// [privateNameStaticFieldNoInitializer.ts]
const C = class {
    static #x;
}

class C2 {
    static #x;
}

//// [privateNameStaticFieldNoInitializer.js]
let _C_cls, _C_x, _C2_cls, _C2_x;
const C = (_C_cls = class {
    },
    _C_x = { value: void 0 },
    _C_cls);
class C2 {
}
_C2_cls = C2;
_C2_x = { value: void 0 };
