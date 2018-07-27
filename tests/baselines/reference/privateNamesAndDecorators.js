//// [privateNamesAndDecorators.ts]
declare function dec<T>(target: T): T;

class A {
    @dec
    #foo = 1;
    @dec
    #bar(): void { }
}


//// [privateNamesAndDecorators.js]
var A = /** @class */ (function () {
    function A() {
        this.#foo = 1;
    }
    A.prototype.#bar = function () { };
    return A;
}());
