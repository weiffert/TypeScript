//// [awaitAndYieldInProperty.ts]
async function* test(x: Promise<string>) {
    class C {
        [await x] = await x;
        static [await x] = await x;

        [yield 1] = yield 2;
        static [yield 3] = yield 4;
    }

    return class {
        [await x] = await x;
        static [await x] = await x;

        [yield 1] = yield 2;
        static [yield 3] = yield 4;
    }
}

//// [awaitAndYieldInProperty.js]
async function* test(x) {
    let _a;
    var _b, _c, _d, _e, _f, _g, _h, _j;
    class C {
        constructor() {
            this[_b] = await x;
            this[_d] = yield 2;
        }
    }
    _b = await x, _c = await x, _d = yield 1, _e = yield 3;
    C[_c] = await x;
    C[_e] = yield 4;
    return _a = class {
            constructor() {
                this[_f] = await x;
                this[_h] = yield 2;
            }
        },
        _f = await x,
        _g = await x,
        _h = yield 1,
        _j = yield 3,
        _a[_g] = await x,
        _a[_j] = yield 4,
        _a;
}
