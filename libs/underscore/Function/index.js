var assert = console.assert
var _ = require('underscore')

//
// _.bind(func, context, *arguments)
//

;(function _bind() {

  var arg = {}
  var obj = {}
  var context = {}
  var func, boundFunc

  // [1] as function
  func = function (param) {
    assert(this === context)
    assert(param === arg)
  }
  boundFunc = _.bind(func, context, arg)
  boundFunc()

  // [2] as method
  func = function (param) {
    assert(this !== obj)
    assert(this === context)
    assert(param === arg)
  }
  obj.boundFunc = _.bind(func, context, arg)
  obj.boundFunc()

  // [3] as constructor
  func = function (param) {
    assert(this !== context) // ignored
    assert(this instanceof func)
    assert(param === arg)
    return obj
  }
  boundFunc = _.bind(func, context, arg)
  assert(obj === new boundFunc())

})()


//
// _.bindAll(object, *methodNames)
//

;(function _bindAll() {

  var fn
  var obj = {
    'fn' : function (context) {
      assert(this === context)
    }
  }

  fn = obj.fn
  fn(global)

  _.bindAll(obj, 'fn')
  fn = obj.fn
  fn(obj)

})()


//
// _.partial(func, *arguments)
//

;(function _partial() {

  var partialApplication

  var sum = function sum() {

    var args = _.toArray(arguments)

    var total = _.reduce(
      args,
      function add(accumulation, current) {
        return accumulation + current
      }
    )

    return total

  }

  partialApplication = _.partial(sum, 1, 2, 3)
  assert(partialApplication() === 6)
  assert(partialApplication(4, 5) === 15)

  // placeholder
  partialApplication = _.partial(sum, _, 2, _)
  assert(partialApplication(1, 3) === 6)

})()


//
// _.memoize(func, [hasher])
//

;(function _memoize() {

})()


//
// _.delay(func, wait, *arguments)
//

;(function _delay() {

  _.delay(assert, 1000, true)

})()


//
// _.defer(func, *arguments)
// _.defer = _.partial(_.delay, _, 1)
//

;(function _defer() {

  _.defer(_.noop)

})()


//
// _.once(func)
// _.once = _.partial(_.before, 2)
//

;(function _once() {

  var count = 0
  var fn = function () { count += 1 }

  fn = _.once(fn)
  _.times(1024, fn)
  assert(count === 1)

})()


//
// _.after(times, func)
// _.before(times, func)
//

;(function _after() {

  var n = _.random(1, 100)

  var func = function func() { func.count += 1 }

  func.count = 0
  _.times(100, func)
  assert(func.count === 100)

  // _.after(times, func)
  func.count = 0
  _.times(100, _.after(n, func))
  assert(func.count === (100 - n + 1))

  // _.before(times, func)
  func.count = 0
  _.times(100, _.before(n, func))
  assert(func.count === (n - 1))

})()


//
// _.negate(predicate)
//

;(function _negate() {

  var isFalsy = _.negate(function isTruthy(value) {
    return !!value
  })

  assert(_.find([ -2, -1, 0, 1, 2 ], isFalsy) === 0)

})()


//
// _.compose(*funcs)
//

;(function _compose() {

  var x = 7

  var f = function f(x) { return x + 2 }
  var g = function g(x) { return x * 2 }
  var h = function h(x) { return x * x}

  // f(g(h(x)))
  var composition = _.compose(f, g, h)

  assert( composition(x) === f(g(h(x))) )

})()
