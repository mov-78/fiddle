var assert = console.assert
var _ = require('underscore')

//
// _.keys(object)
// _.allKeys(object)
//

;(function _keysAndAllKeys() {

  var ownKeys
  var allKeys

  var proto = { 'proto-enum' : 'ANY' }
  var obj = _.create(proto, { 'obj-enum' : 'ANY' })

  Object.defineProperty(
    proto,
    'proto-non-enum',
    { 'enumerable' : false }
  )
  Object.defineProperty(
    obj,
    'obj-non-enum',
    { 'enumerable' : false }
  )

  // _.keys(object)
  ownKeys = _.keys(obj)
  assert(_.isEqual(ownKeys, [ 'obj-enum' ]))

  // _.allKeys(object)
  allKeys = _.allKeys(obj)
  assert(_.isEqual(allKeys, [ 'obj-enum', 'proto-enum' ]))

})()


//
// _.values(object)
//

;(function _values() {

  var values

  var proto = { 'proto-enum' : 'proto-enum' }
  var obj = _.create(proto, { 'obj-enum' : 'obj-enum' })

  Object.defineProperty(
    proto,
    'proto-non-enum',
    {
      'enumerable' : false,
      'value' : 'proto-non-enum'
    }
  )
  Object.defineProperty(
    obj,
    'obj-non-enum',
    {
      'enumerable' : false,
      'value' : 'obj-non-enum'
    }
  )

  values = _.values(obj)
  assert(_.isEqual(values, [ 'obj-enum' ]))

})()


//
// _.mapObject(object, iteratee, [context])
//

;(function _mapObject() {

  var keys

  var obj = { 'foo' : 1, 'bar' : 2 }
  var transformedObj = _.mapObject(obj, function transform(value, key) {
    return value + key.length
  })

  assert(_.isEqual(transformedObj, { 'foo' : 4, 'bar' : 5 }))

})()


//
// _.pairs(object)
//

;(function _pairs() {

  var obj = { 'foo' : 1, 'bar' : 2 }
  var pairs = _.pairs(obj)

  assert(_.isEqual(pairs, [ [ 'foo', 1 ], [ 'bar', 2 ]]))

})()


//
// _.invert(object)
//

;(function _invert() {

  var obj = { 0 : 'foo' , 1 : 'bar' }
  var invertedObj = _.invert(obj)

  var objKeys = _.keys(obj)
  var objValues = _.values(obj)

  var invertedObjKeys = _.keys(invertedObj)
  var invertedObjValues = _.values(invertedObj)

  assert(_.isEqual(objKeys, invertedObjValues))
  assert(_.isEqual(objValues, invertedObjKeys))

})()


//
// _.create(proto, [props])
//

;(function _create() {

  var props = { 'foo' : 1, 'bar' : 2 }

  var proto = {}
  var obj = _.create(proto, props)

  var objKeys = _.keys(props)
  var propsKeys = _.keys(props)

  assert(proto.isPrototypeOf(obj))
  assert(_.isEqual(objKeys, propsKeys))

})()


//
// _.methods(object)
// alias: functions
//

;(function _methods() {

  var proto = {
    'proto-enum-member': 'ANY',
    'proto-enum-method' : _.noop
  }
  var obj = _.create(proto, {
    'obj-enum-member' : 'ANY',
    'obj-enum-method' : _.noop
  })

  Object.defineProperty(
    proto,
    'proto-non-enum-method',
    {
      'enumerable' : false,
      'value' : _.noop
    }
  )
  Object.defineProperty(
    obj,
    'obj-non-enum-method',
    {
      'enumerable' : false,
      'value' : _.noop
    }
  )

  var methods = _.methods(obj)
  assert(_.isEqual(methods, [ 'obj-enum-method' ]))

})


//
// _.findKey(object, predicate, [context])
//

;(function _findKey() {

  var obj = { 'foo' : 1, 'bar' : 2 }
  var key = _.findKey(
    obj,
    function find(value, key, object) {
      return value % 2 === 0
    }
  )

  assert(key === 'bar')

})()


//
// _.extend(destination, *sources)
// _.extendOwn(destination, *sources)
//

;(function _extendAndExtendOwn() {

  var proto = { 'qux' : 5 }

  var source1 = { 'foo' : 1, 'bar' : 2 }
  var source2 = _.create(proto, { 'bar' : 3, 'baz' : 4 })

  var obj1 = _.extend({}, source1, source2)
  var obj2 = _.extendOwn({}, source1, source2)

  // _.extend(destination, *sources)
  assert(_.isEqual(obj1, { 'foo' : 1, 'bar' : 3, 'baz' : 4, 'qux' : 5 }))

  // _.extendOwn(destination, *sources)
  assert(_.isEqual(obj2, { 'foo' : 1, 'bar' : 3, 'baz' : 4 }))


})()


//
// _.pick(object, *whitelist)
//

;(function _pick() {

  var filteredObj
  var filterKey = 'qux'
  var obj = { 'foo' : 1, 'bar' : 2, 'baz' : 3, 'qux' : 4 }

  // _.pick(object, key1, key2...)
  filteredObj = _.pick(obj, filterKey)
  assert(_.isEqual(filteredObj, { 'qux' : 4 }))

  // _.pick(object, whitelist)
  filteredObj = _.pick(obj, [ filterKey ])
  assert(_.isEqual(filteredObj, { 'qux' : 4 }))

  // _.pick(object, predicate)
  filteredObj = _.pick(obj, function filter(value, key, conext) {
    return key === filterKey
  })
  assert(_.isEqual(filteredObj, { 'qux' : 4 }))

})()


//
// _.omit(object, *blacklist)
//

;(function _omit() {

  var filteredObj
  var filterKey = 'qux'
  var obj = { 'foo' : 1, 'bar' : 2, 'baz' : 3, 'qux' : 4 }

  // _.omit(object, key1, key2...)
  filteredObj = _.omit(obj, filterKey)
  assert(_.isEqual(filteredObj, { 'foo' : 1, 'bar' : 2, 'baz' : 3 }))

  // _.omit(object, whitelist)
  filteredObj = _.omit(obj, [ filterKey ])
  assert(_.isEqual(filteredObj, { 'foo' : 1, 'bar' : 2, 'baz' : 3 }))

  // _.omit(object, predicate)
  filteredObj = _.omit(obj, function filter(value, key, conext) {
    return key === filterKey
  })
  assert(_.isEqual(filteredObj, { 'foo' : 1, 'bar' : 2, 'baz' : 3 }))

})()


//
// _.defaults(object, defaults)
//

;(function _defaults() {

  var obj = { 'foo' : 1, 'bar' : 2 }
  var defaults = { 'foo' : 4, 'baz' : 3 }

  assert(
    _.isEqual(
      _.defaults(obj, defaults),
      { 'foo' : 1, 'bar' : 2, 'baz' : 3 }
    )
  )

})()


//
// _.clone(object)
//

;(function _clone() {

  var m = [ 0 ]
  var n = { 'foo' : 1, 'bar' : m }

  var clone = _.clone(n)

  assert(_.isEqual(clone, n))

  // shallow copy
  assert(clone.bar[0] === 0)
  assert(m[0] === 0)
  clone.bar[0] = 1
  assert(clone.bar[0] === 1)
  assert(m[0] === 1)

})()


//
// _.tap(object, interceptor)
//

;(function _tap() {

  var obj = {}

  var returnValue = _.tap(
    obj,
    function (object) {
      assert(object === obj)
    }
  )

  assert(returnValue === obj) // chainable

})()


//
// _.has(object, key)
//

;(function _has() {

  var obj = { 'foo' : 1 }
  var _hasOwnProperty = Object.prototype.hasOwnProperty

  assert(_.has(obj, 'foo'))
  assert(!_.has(obj, 'bar'))

  // _.has(object, key) saves a safe reference to Object.prototype.hasOwnProperty
  Object.prototype.hasOwnProperty = function falsy() { return false }

  assert(!obj.hasOwnProperty('foo'))
  assert(!obj.hasOwnProperty('bar'))
  assert(_.has(obj, 'foo'))
  assert(!_.has(obj, 'bar'))

  Object.prototype.hasOwnProperty = _hasOwnProperty // revert

})()


//
// _.matcher(object, properties)
// alias: matches
//

;(function _matcher() {

  var obj = { 'foo' : 1, 'bar' : 2 }

  var props1 = { 'foo' : 1 }
  var props2 = { 'baz' : 4 }
  var props3 = { 'bar' : 3 }

  var matcher1 = _.matcher(props1)
  var matcher2 = _.matcher(props2)
  var matcher3 = _.matcher(props3)

  // matches
  assert(matcher1(obj))

  // mismatch: !(key in obj)
  assert(!matcher2(obj))

  // mismatch: key in obj && attrs[key] !== obj[key]
  assert(!matcher3(obj))

})()


//
// _.property(key)
// _.propertyOf(object)
//

;(function _propertyAndPropertyOf() {

  var keyedPropertyAccessor = _.property('foo')
  var contextedPropertyAccessor = _.propertyOf({ 'foo' : 1, 'bar' : 2 })

  // _.property(key)
  assert(keyedPropertyAccessor({ 'foo' : 1 }) === 1)
  assert(keyedPropertyAccessor({ 'foo' : 2 }) === 2)

  // _.propertyOf(object)
  assert(contextedPropertyAccessor('foo') === 1)
  assert(contextedPropertyAccessor('bar') === 2)

})()


//
// _.isEqual(object, other)
//

;(function _isEqual() {

  var object = { 'foo' : 1, 'bar' : { 'baz' : 2 }}
  var otherObject = { 'foo' : 1, 'bar' : { 'baz' : 2 }}

  var array = [ 1, [ 2, object ]]
  var otherArray = [ 1, [ 2, otherObject ]]

  assert(object !== otherObject)
  assert(otherObject !== object)
  assert(_.isEqual(object, otherObject))
  assert(_.isEqual(otherObject, object))

  assert(array !== otherArray)
  assert(otherArray !== array)
  assert(_.isEqual(array, otherArray))
  assert(_.isEqual(otherArray, array))

})()


//
// _.isMatch(object, properties)
//

;(function _isMatch() {

  var obj = { 'foo' : 1, 'bar' : 2 }

  var props1 = { 'foo' : 1 }
  var props2 = { 'baz' : 4 }
  var props3 = { 'bar' : 3 }

  // matches
  assert(_.isMatch(obj, props1))

  // mismatch: !(key in obj)
  assert(!_.isMatch(obj, props2))

  // mismatch: key in obj && attrs[key] !== obj[key]
  assert(!_.isMatch(obj, props3))

})()


//
// _.isEmpty(object)
//

;(function _isEmpty() {

  // _.isEmpty(string)
  assert(!_.isEmpty('foobar'))
  assert(_.isEmpty('')) // checks string.length against 0

  // _.isEmpty(array)
  assert(!_.isEmpty([ 1, 2, 3 ]))
  assert(_.isEmpty([])) // checks array.length against 0

  // _.isEmpty(object)
  assert(!_.isEmpty({ 'foo' : 1 }))
  assert(_.isEmpty(_.create({ 'foo' : 1 })))
  assert(_.isEmpty({}))

})()


//
// _.isElement(object)
//

;(function _isElement() {

  var normalObject = { 'foo' : 'bar' }

  var mockedElementNode = { 'nodeType' : 1 }  // Node.ELEMENT_NODE
  var mockedTextNode = { 'nodeType' : 1 }     // Node.TEXT_NODE

  assert(!_.isElement(normalObject))
  assert(_.isElement(mockedElementNode))
  assert(!_.isElement(mockedTextNode))

})


//
// _.isArray(object)
//

;(function _isArray() {

  assert(!_.isArray(undefined))
  assert(!_.isArray(null))
  assert(!_.isArray(0))
  assert(!_.isArray(''))
  assert(!_.isArray(true))
  assert(!_.isArray({ 'length' : 5 })) // array-like object
  assert(_.isArray([]))
  assert(!_.isArray(_.noop))

})()


//
// _.isObject(object)
//

;(function _isObject() {

  assert(!_.isObject(undefined))
  assert(!_.isObject(null))
  assert(!_.isObject(0))
  assert(!_.isObject(''))
  assert(!_.isObject(true))
  assert(_.isObject({}))
  assert(_.isObject([]))
  assert(_.isObject(_.noop))

})()


//
// _.isArguments(object)
//

;(function _isArguments() {

  var array = [ 1, 2, 3 ]
  var arrayLikeObject = { 'length' : 3 }
  var argumentsLikeObject = { 'callee' : _.noop, 'length' : 3 }

  assert(!_.isArguments(array))
  assert(!_.isArguments(arrayLikeObject))
  assert(_.isArguments(arguments))
  assert(!_.isArguments(argumentsLikeObject))

})()


//
// _.isFunction(object)
//

;(function _isFunction() {

  assert(!_.isFunction(undefined))
  assert(!_.isFunction(null))
  assert(!_.isFunction(0))
  assert(!_.isFunction(''))
  assert(!_.isFunction(true))
  assert(!_.isFunction({}))
  assert(!_.isFunction([]))

  assert(_.isFunction(_.noop))
  assert(_.isFunction(new Function()))

})()


//
// _.isString(object)
//

;(function _isString() {

  assert(!_.isString(undefined))
  assert(!_.isString(null))
  assert(!_.isString(0))
  assert(!_.isString(true))
  assert(!_.isString({}))
  assert(!_.isString([]))
  assert(!_.isString(_.noop))

  assert(_.isString(''))
  assert(_.isString(new String()))

})()


//
// _.isNumber(object)
//

;(function _isNumber() {

  assert(!_.isNumber(undefined))
  assert(!_.isNumber(null))
  assert(!_.isNumber(''))
  assert(!_.isNumber(true))
  assert(!_.isNumber({}))
  assert(!_.isNumber([]))
  assert(!_.isNumber(_.noop))

  assert(_.isNumber(0))
  assert(_.isNumber(new Number()))
  assert(_.isNumber(Number.NaN)) // watch out
  assert(_.isNumber(Number.POSITIVE_INFINITY))
  assert(_.isNumber(Number.NEGATIVE_INFINITY))

})()


//
// _.isFinite(object)
//

;(function _isFinite() {

  assert(!_.isFinite(undefined))
  assert(!_.isFinite(null))
  assert(!_.isFinite(''))
  assert(!_.isFinite(true))
  assert(!_.isFinite({}))
  assert(!_.isFinite([]))
  assert(!_.isFinite(_.noop))

  assert(_.isFinite(1))
  assert(!_.isFinite(Number.NaN))
  assert(!_.isFinite(Number.POSITIVE_INFINITY))
  assert(!_.isFinite(Number.NEGATIVE_INFINITY))

})()


//
// _.isBoolean(object)
//

;(function _isBoolean() {

  assert(!_.isBoolean(undefined))
  assert(!_.isBoolean(null))
  assert(!_.isBoolean(1))
  assert(!_.isBoolean(''))
  assert(!_.isBoolean({}))
  assert(!_.isBoolean([]))
  assert(!_.isBoolean(_.noop))

  assert(_.isBoolean(true))
  assert(_.isBoolean(false))
  assert(_.isBoolean(new Boolean()))

})()


//
// _.isDate(object)
//

;(function _isDate() {

  assert(!_.isDate(undefined))
  assert(!_.isDate(null))
  assert(!_.isDate(1))
  assert(!_.isDate(''))
  assert(!_.isDate(true))
  assert(!_.isDate({}))
  assert(!_.isDate([]))
  assert(!_.isDate(_.noop))

  assert(_.isDate(new Date()))

})()


//
// _.isRegExp(object)
//

;(function _isRegExp() {

  assert(!_.isRegExp(undefined))
  assert(!_.isRegExp(null))
  assert(!_.isRegExp(1))
  assert(!_.isRegExp(''))
  assert(!_.isRegExp(true))
  assert(!_.isRegExp({}))
  assert(!_.isRegExp([]))
  assert(!_.isRegExp(_.noop))

  assert(_.isRegExp(/foobar/))
  assert(_.isRegExp(new RegExp()))

})()


//
// _.isNaN(object)
//

;(function _isNaN() {

  assert(!_.isNaN(undefined))
  assert(!_.isNaN(null))
  assert(!_.isNaN(''))
  assert(!_.isNaN(true))
  assert(!_.isNaN({}))
  assert(!_.isNaN([]))
  assert(!_.isNaN(_.noop))

  assert(!_.isNaN(+0))
  assert(!_.isNaN(-0))
  assert(!_.isNaN(1))
  assert(!_.isNaN(+Number.POSITIVE_INFINITY))
  assert(!_.isNaN(-Number.NEGATIVE_INFINITY))
  assert(_.isNaN(-Number.NaN))

})()


//
// _.isNull(object)
//

;(function _isNull() {

  assert(!_.isNull(undefined))
  assert(_.isNull(null))
  assert(!_.isNull(1))
  assert(!_.isNull(''))
  assert(!_.isNull(true))
  assert(!_.isNull({}))
  assert(!_.isNull([]))
  assert(!_.isNull(_.noop))

})()


//
// _.isUndefined(object)
//

;(function _isUndefined() {

  assert(_.isUndefined(undefined))
  assert(!_.isUndefined(null))
  assert(!_.isUndefined(1))
  assert(!_.isUndefined(''))
  assert(!_.isUndefined(true))
  assert(!_.isUndefined({}))
  assert(!_.isUndefined([]))
  assert(!_.isUndefined(_.noop))

})()
