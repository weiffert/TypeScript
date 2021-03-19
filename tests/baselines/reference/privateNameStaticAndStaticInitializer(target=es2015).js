//// [privateNameStaticAndStaticInitializer.ts]
class A {
  static #foo = 1;
  static #prop = 2;
}



//// [privateNameStaticAndStaticInitializer.js]
let _A_cls, _A_foo, _A_prop;
class A {
}
_A_cls = A;
_A_foo = { value: 1 };
_A_prop = { value: 2 };
