该 fiddle 用于演示如何实现[自定义断言](http://chaijs.com/guide/helpers/)

```sh
$ npm install
$ npm test
```

---

添加断言__属性__：

- [addProperty( name, getter )](http://chaijs.com/api/plugins/#method_addproperty)

```js
// 基本等同于：
Object.defineProperty( chai.Assertion.prototype
                     , name
                     , { configurable : true
                       , get() {
                           let result = getter.call( this )
                           return result === undefined ? this : result
                         }
                       }
                     )
```

覆盖或扩展（继承）已有断言__属性__：

- [overwriteProperty( name, getter )](#)

```js
// 基本等同于：
let _super = function noop() {}
const descriptor = Object.getOwnPropertyDescriptor( context, name )
if ( descriptor && typeof descriptor.get === 'function' ) {
  _super = descriptor.get
}
Object.defineProperty( context
                     , name
                     , { configurable : true
                       , get() {
                           let result = getter( _super ).call( this )
                           return result === undefined ? this : result
                         }
                       }
                     )
```

添加断言__方法__：

- [addMethod( name, method )](http://chaijs.com/api/plugins/#method_addproperty)

```js
// 基本等同于：
chai.Assertion.prototype[ name ] = function () {
  let result = method.apply( this, arguments )
  return result === undefined ? this : result
}
```

覆盖或扩展（继承）已有断言__方法__：

- [overwriteMethod( name， method )](#)

```js
// 基本等同于：
const _method = context[ name ]
let _super = function noop() { return this }
if ( _method && typeof _method === 'function' ) {
  _super = _method
}
context[ name ] = function () {
  let result = method( _super ).apply( this, arguments )
  return result === undefined ? this : result
}
```

添加__链式断言方法__：

- [addChainableMethod( name, method, chainingBehavior )](http://chaijs.com/api/plugins/#method_addchainablemethod)

```js
// 基本等同于：
if ( typeof chainingBehavior !== 'function' ) {
  chainingBehavior = function noop() {}
}
let chainableBehavior = { method, chainingBehavior }
//
chai.Assertion.prototype.__methods = chai.Assertion.prototype.__methods || {}
chai.Assertion.prototype.__methods[ name ] = chainableBehavior
//
Object.defineProperty( chai.Assertion.prototype
                     , name
                     , { configurable : true
                       , get() {
                           chainableBehavior.chainingBehavior.call( this )
                           let assert = function () {
                             let result = chainableBehavior.method.apply( this, arguments )
                             return result === undefined ? this : result
                           }
                           Reflect.setPrototypeOf( assert, this )
                           assert.apply = Function.prototype.apply
                           assert.bind = Function.prototype.bind
                           assert.call = Function.prototype.call
                           chai.util.transferFlags( this, assert )
                           return assert
                         }
                       }
                     )
```

覆盖或扩展（继承）已有__链式断言方法__：

- [overwriteChainableMethod( name, method, chainingBehavior )](#)

```js
// 基本等同于：
let chainableBehavior = context.__methods[ name ]

const _method = chainableBehavior.method
chainableBehavior.method = function () {
  let result = method( _method ).apply( this, arguments )
  return result === undefined ? this : result
}

const _chainingBehavior = chainableBehavior.chainingBehavior
chainableBehavior.chainingBehavior = function () {
  let result = chainingBehavior( _chainingBehavior ).call( this )
  return result === undefined ? this : result
}
```