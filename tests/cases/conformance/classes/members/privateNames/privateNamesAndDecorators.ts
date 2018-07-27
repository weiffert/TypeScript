declare function dec<T>(target: T): T;

class A {
    @dec
    #foo = 1;
    @dec
    #bar(): void { }
}
