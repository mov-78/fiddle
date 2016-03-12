'use strict'

const expect = require('chai').expect
const should = require('chai').should() // invoke

//
// a(type)
// alias: an(type)
// 判断依据：Object.prototype.toString（具体值与 TDD 风格不一致）
//

expect(null).to.be.a('null')
expect(undefined).to.be.a('undefined')
expect(0).to.be.a('number')
expect('').to.be.a('string')
expect(true).to.be.a('boolean')
expect({}).to.be.an('object')
expect([]).to.be.an('array')
expect(() => null).to.be.a('function')
expect(Symbol()).to.be.a('symbol')
expect(/^/).to.be.a('regexp')
expect(new Date).to.be.a('date')

// ;(null).should.be.a('null')
// ;(undefined).should.be.a('undefined')
;(0).should.be.a('number')
;('').should.be.a('string')
;(true).should.be.a('boolean')
;({}).should.be.an('object')
;([]).should.be.an('array')
;(() => null).should.be.a('function')
;(Symbol()).should.be.a('symbol')
;(/^/).should.be.a('regexp')
;(new Date).should.be.a('date')


//
// include(value)
// alias: contain(value)
//

expect('string').to.include('str')        // [1] String
expect([ 1, 2, 3 ]).to.include(1)         // [2] Array
expect([ [ 1 ], 2, 3 ]).to.not.include(1) // top-level only

'string'.should.include('str')            // [1] String
;[ 1, 2, 3 ].should.include(1)            // [2] Array
;[ [ 1 ], 2, 3 ].should.not.include(1)    // top-level only


//
// ok|true|false
//

expect(1).to.be.ok
expect(0).to.not.be.ok
expect(true).to.be.true
expect(1).to.not.be.true
expect(false).to.be.false
expect(0).to.not.be.false

;(1).should.be.ok
;(0).should.not.be.ok
;(true).should.be.true
;(1).should.not.be.true
;(false).should.be.false
;(0).should.not.be.false


//
// null|undefined|exist
//

expect(null).to.be.null
expect(undefined).to.not.be.null
expect(undefined).to.be.undefined
expect(null).to.not.be.undefined
expect(null).to.not.be.exist
expect(undefined).to.not.be.exist


//
// NaN
//

expect(Number.NaN).to.be.NaN
expect('one').to.be.NaN // WTF?

Number.NaN.should.be.NaN
'one'.should.be.NaN // WTF?


//
// empty
//

expect('').to.be.empty // [1] String
expect([]).to.be.empty // [2] Array
expect({}).to.be.empty // [3] Object
expect(Object.create({ 'foo' : 'bar' })).to.be.empty
expect({ 'length' : 0 }).to.not.be.empty

''.should.be.empty    // [1] String
;([]).should.be.empty // [2] Array
;({}).should.be.empty // [3] Object
Object.create({ 'foo' : 'bar' }).should.be.empty
;({ 'length' : 0 }).should.not.be.empty


//
// arguments
// 判断依据：Object.prototype.toString
//

;(function () {

  const argumentsLikeObject = { caller() {}, callee() {}, 'length' : 1 }

  expect(arguments).to.be.arguments
  expect(argumentsLikeObject).to.not.be.arguments

  arguments.should.be.arguments
  ;(argumentsLikeObject).should.not.be.arguments

})()


//
// equal(value)
// eql(value)
// 相关修饰符：deep
//

expect(1).to.equal(1)
expect(1).to.not.equal('1') // strict-equal
expect([ 1, 2 ]).to.not.equal([ 1, 2 ])
expect([ 1, 2 ]).to.eql([ 1, 2 ])
expect([ 1, 2 ]).to.deep.equal([ 1, 2 ]) // deep-flag

;(1).should.equal(1)
;(1).should.not.equal('1') // strict-equal
;[ 1, 2 ].should.not.equal([ 1, 2 ])
;[ 1, 2 ].should.eql([ 1, 2 ])
;[ 1, 2 ].should.deep.equal([ 1, 2 ]) // deep-flag


//
// above(value)
// below(value)
// least(value)
// most(value)
// within(min, max)
// 相关修饰符：length
//

expect(2).to.be.above(1)
expect(1).to.be.below(2)
expect(2).to.be.at.least(1)
expect(1).to.be.at.most(2)
expect(7).to.be.within(1, 10)
expect('string').to.have.length.above(1)        // String & Array
expect('string').to.have.length.below(7)        // String & Array
expect('string').to.have.length.of.at.least(1)  // String & Array
expect('string').to.have.length.of.at.most(7)   // String & Array
expect('string').to.have.length.within(1, 10)   // String & Array

;(2).should.be.above(1)
;(1).should.be.below(2)
;(2).should.be.at.least(1)
;(1).should.be.at.most(2)
;(7).should.be.within(1, 10)
;[ 1, 2 ].should.have.length.above(1)         // String & Array
;[ 1, 2 ].should.have.length.below(5)         // String & Array
;[ 1, 2 ].should.have.length.of.at.least(1)   // String & Array
;[ 1, 2 ].should.have.length.of.at.most(5)    // String & Array
;[ 1, 2 ].should.have.length.within(1, 10)    // String & Array


//
// instanceof(constructor)
//

{

  const proto = {}
  class Stub {}

  const obj = new Stub

  expect(obj).to.be.instanceof(Stub)
  obj.should.be.instanceof(Stub)

  Object.setPrototypeOf(obj, proto)
  expect(obj).to.not.be.instanceof(Stub)
  obj.should.not.be.instanceof(Stub)

}


//
// property(key, [value])
// ownProperty(key)
// ownPropertyDescriptor(key, [descriptor], [message])
// 相关修饰符：deep
//

// property(key, [value])
expect(Object.create({ 'foo' : 'bar' })).to.have.property('foo')
expect({ 'foo' : 'bar' }).to.have.property('foo')
expect({ 'foo' : 'bar' }).to.have.property('foo', 'bar')
expect({ 'foo' : { 'bar' : 'baz' } }).to.have.deep.property('foo.bar')
;(Object.create({ 'foo' : 'bar' })).should.have.property('foo')
;({ 'foo' : 'bar' }).should.have.property('foo')
;({ 'foo' : 'bar' }).should.have.property('foo', 'bar')
;({ 'foo' : { 'bar' : 'baz' } }).should.have.deep.property('foo.bar')

// property() 调用后更改当前断言主体为指定属性的值
expect({ 'foo' : 'bar' }).to.have.property('foo').that.is.a('string')
;({ 'foo' : 'bar' }).should.have.property('foo').that.is.a('string')

// ownProperty(key)
expect({ 'foo' : 'bar' }).to.have.ownProperty('foo')
expect(Object.create({ 'foo' : 'bar' })).to.not.have.ownProperty('foo')
;({ 'foo' : 'bar' }).should.have.ownProperty('foo')
;(Object.create({ 'foo' : 'bar' })).should.not.have.ownProperty('foo')

// ownPropertyDescriptor(key, [descriptor], [message])
expect('string').to.have.ownPropertyDescriptor('length')
expect('string').to.have.ownPropertyDescriptor(
  'length',
  { 'value' : 6, 'writable' : false, 'enumerable' : false, 'configurable' : false }
)
'string'.should.have.ownPropertyDescriptor('length')
'string'.should.have.ownPropertyDescriptor(
  'length',
  { 'value' : 6, 'writable' : false, 'enumerable' : false, 'configurable' : false }
)


//
// lengthOf(value, [message])
//

expect([ null ]).to.have.lengthOf(1)          // [1] Array
expect('null').to.have.lengthOf(4)            // [2] String
expect({ 'length' : 1 }).to.have.lengthOf(1)  // [3] Array-Like Object

;[ null ].should.have.lengthOf(1)           // [1] Array
'null'.should.have.lengthOf(4)              // [2] String
;({ 'length' : 1 }).should.have.lengthOf(1) // [3] Array-Like Object


//
// match(regex)
// string(substring)
//

expect('').to.match(/^\s*$/)
expect('foobar').to.have.string('foo')

''.should.match(/^\s*$/)
'foobar'.should.have.string('foo')


//
// keys([key], [key]...)
// 相关修饰符：any|all|contain|have
// any 及 all 互斥；同时如果两者均未应用，则默认应用 all 修饰符
//

// [1] any（此时 contain 及 have 修饰符等价）
expect({ 'foo' : 1, 'bar' : 2 }).to.have.any.keys('foo', 'baz')
expect({ 'foo' : 1, 'bar' : 2 }).to.contain.any.keys('foo', 'baz')
;({ 'foo' : 1, 'bar' : 2 }).should.have.any.keys('foo', 'baz')
;({ 'foo' : 1, 'bar' : 2 }).should.contain.any.keys('foo', 'baz')

// [2] contain+all
expect({ 'foo' : 1, 'bar' : 2 }).to.contain.all.keys('foo')
;({ 'foo' : 1, 'bar' : 2 }).should.contain.all.keys('foo')

// [3] have+all
expect({ 'foo' : 1, 'bar' : 2 }).to.have.all.keys('foo', 'bar')
;({ 'foo' : 1, 'bar' : 2 }).should.have.all.keys('foo', 'bar')


//
// throw
//

{

  let func = null

  class Exception extends Error {
    constructor(message) {
      super(message)
    }
  }

  // [1] throw()
  func = () => { throw new Error }
  expect(func).to.throw()
  func.should.throw

  // [2] throw(constructor, [message])
  func = () => { throw new Exception }
  expect(func).to.throw(Exception)
  func.should.throw(Exception)

  // [3] throw(string|regex, [message])
  func = () => { throw 'description' }
  expect(func).to.throw('description')
  expect(func).to.throw(/^description$/)
  func.should.throw('description')
  func.should.throw(/^description$/)

  // [4] throw(constructor, string|regex, [message])
  func = () => { throw new Exception('description') }
  expect(func).to.throw(Exception, 'description')
  expect(func).to.throw(Exception, /^description$/)
  func.should.throw(Exception, 'description')
  func.should.throw(Exception, /^description$/)

}


//
// respondTo(method)
// 相关修饰符：itself
//

{

  class Stub {
    instanceMethod() {}
  }
  Stub.staticMethod = () => null

  expect(new Stub).to.respondTo('instanceMethod')
  expect(Stub).to.respondTo('instanceMethod')
  expect(Stub).to.not.respondTo('staticMethod')
  expect(Stub).itself.to.respondTo('staticMethod')

  ;(new Stub).should.respondTo('instanceMethod')
  ;(Stub).should.respondTo('instanceMethod')
  Stub.should.not.respondTo('staticMethod')
  Stub.should.itself.respondTo('staticMethod')

}


//
// satisfy(func)
//

{

  const isEven = (num) => num % 2 === 0

  expect(2).to.satisfy(isEven)
  expect(1).to.not.satisfy(isEven)
  ;(2).should.satisfy(isEven)
  ;(1).should.not.satisfy(isEven)

}


//
// closeTo(expected, delta)
//

expect(0.3 - 0.2).to.be.closeTo(0.1, Number.EPSILON)
;(0.3 - 0.2).should.be.closeTo(0.1, Number.EPSILON)


//
// members(set)
// 相关修饰符：have|include, deep
//

expect([ 1, 3, 2 ]).to.include.members([ 2, 3 ])
expect([ { 'foo' : 'bar' } ]).to.not.include.members([ { 'foo' : 'bar' } ])
expect([ { 'foo' : 'bar' } ]).to.deep.include.members([ { 'foo' : 'bar' } ])
expect([ 1, 3, 2 ]).to.have.members([ 2, 1, 3 ])
expect([ { 'foo' : 'bar' } ]).to.not.have.members([ { 'foo' : 'bar' } ])
expect([ { 'foo' : 'bar' } ]).to.deep.have.members([ { 'foo' : 'bar' } ])

;[ 1, 3, 2 ].should.include.members([ 2, 3 ])
;[ { 'foo' : 'bar' } ].should.not.include.members([ { 'foo' : 'bar' } ])
;[ { 'foo' : 'bar' } ].should.deep.include.members([ { 'foo' : 'bar' } ])
;[ 1, 3, 2 ].should.have.members([ 2, 1, 3 ])
;[ { 'foo' : 'bar' } ].should.not.have.members([ { 'foo' : 'bar' } ])
;[ { 'foo' : 'bar' } ].should.deep.have.members([ { 'foo' : 'bar' } ])


//
// oneOf(list)
//

expect(1).to.be.oneOf([ 1, 2 ])
expect(1).to.not.be.oneOf([ [ 1 ], 2 ]) // top-level only
;(1).should.be.oneOf([ 1, 2 ])
;(1).should.not.be.oneOf([ [ 1 ], 2 ])  // top-level only


//
// change(object, key)
// increase(object, key)
// decrease(object, key)
//

{

  const KEY = 'KEY'
  const obj = { [KEY] : 0 }
  const func = () => { obj[KEY] = 1 }

  obj[KEY] = 0
  expect(func).to.change(obj, KEY)
  obj[KEY] = 0
  func.should.change(obj, KEY)

  obj[KEY] = 0
  expect(func).to.increase(obj, KEY)
  obj[KEY] = 0
  func.should.increase(obj, KEY)
  obj[KEY] = 1
  expect(func).to.not.increase(obj, KEY)
  obj[KEY] = 1
  func.should.not.increase(obj, KEY)

  obj[KEY] = 2
  expect(func).to.decrease(obj, KEY)
  obj[KEY] = 2
  func.should.decrease(obj, KEY)
  obj[KEY] = 1
  expect(func).to.not.decrease(obj, KEY)
  obj[KEY] = 1
  func.should.not.decrease(obj, KEY)

}


//
// extensible|sealed|frozen
//

{

  let obj

  // empty object
  obj = {}

  expect(obj).to.be.extensible
  expect(obj).to.not.be.sealed
  expect(obj).to.not.be.frozen
  obj.should.be.extensible
  obj.should.not.be.sealed
  obj.should.not.be.frozen

  Object.preventExtensions(obj)
  expect(obj).to.not.be.extensible
  expect(obj).to.be.sealed  // empty
  expect(obj).to.be.frozen  // empty
  obj.should.not.be.extensible
  obj.should.be.sealed  // empty
  obj.should.be.frozen  // empty

  Object.seal(obj)
  expect(obj).to.not.be.extensible
  expect(obj).to.be.sealed
  expect(obj).to.be.frozen // empty
  obj.should.not.be.extensible
  obj.should.be.sealed
  obj.should.be.frozen // empty

  Object.freeze(obj)
  expect(obj).to.not.be.extensible
  expect(obj).to.be.sealed
  expect(obj).to.be.frozen
  obj.should.not.be.extensible
  obj.should.be.sealed
  obj.should.be.frozen

  // non-empty object
  obj = { 'foo' : 'bar' }

  expect(obj).to.be.extensible
  expect(obj).to.not.be.sealed
  expect(obj).to.not.be.frozen
  obj.should.be.extensible
  obj.should.not.be.sealed
  obj.should.not.be.frozen

  Object.preventExtensions(obj)
  expect(obj).to.not.be.extensible
  expect(obj).to.not.be.sealed
  expect(obj).to.not.be.frozen
  obj.should.not.be.extensible
  obj.should.not.be.sealed
  obj.should.not.be.frozen

  Object.seal(obj)
  expect(obj).to.not.be.extensible
  expect(obj).to.be.sealed
  expect(obj).to.not.be.frozen
  obj.should.not.be.extensible
  obj.should.be.sealed
  obj.should.not.be.frozen

  Object.freeze(obj)
  expect(obj).to.not.be.extensible
  expect(obj).to.be.sealed
  expect(obj).to.be.frozen
  obj.should.not.be.extensible
  obj.should.be.sealed
  obj.should.be.frozen

}
