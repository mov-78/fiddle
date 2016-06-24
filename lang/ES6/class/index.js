//
// 类声明
//

class Parent {
}

class Child extends Parent {

  // 构造方法
  constructor(...args) {
    super(...args) // 必须先调用父类构造器
  }

  // 实例方法
  instanceMethod(...args) {
    super.instanceMethod(...args)
  }

  // 静态方法
  static staticMethod(...args) {
    super.staticMethod(...args)
  }

  // getter
  get accessor() { /* codes */ }

  // setter
  set accessor(value) { /* codes */ }

  // 属性名可以为任意合法表达式
  [Symbol.iterator]() { /* codes */ }

}

// ES6 类内部只存在静态方法，不存在静态属性
Child.staticMember = 'ANY'

// 实例方法默认不可枚举（ES5中默认可枚举）
console.assert(!Object.getOwnPropertyDescriptor(Child.prototype, 'instanceMethod').enumerable)

// 本质上基本等同于函数声明，不过不存在变量提升
console.assert('function' === typeof Child)

// 通过 Parent 对象继承静态方法（及静态属性）
console.assert(Object.getPrototypeOf(Child) === Parent)

// 通过 Parent.prototype 对象继承实例方法
console.assert(Object.getPrototypeOf(Child.prototype) === Parent.prototype)


//
// 类表达式
//

let obj = new class { /* codes */ }

let Foo = class Bar {
  // Bar 仅在类内部可见，类似于具名函数表达式
}
