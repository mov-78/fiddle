var assert = console.assert
var _ = require('underscore')

var isOdd = function isOdd(num) {
  return _.isNumber(num) && num % 2 === 1
}
var isEven = function isEven(num) {
  return _.isNumber(num) && num % 2 === 0
}

//
// _.each(collection, iteratee, [context])
// alias: forEach
//

;(function _each() {

  var collection
  var returnValue

  // alias
  assert(_.each === _.forEach)

  // [1] array/array-like object
  collection = [ 1, 2, 3 ]
  returnValue = _.each(
    collection,
    function iteratee(element, index, array) {
      assert(element === index + 1)
    }
  )
  assert(collection === returnValue) // chainable

  // [2] generic object
  collection = { 'foo' : 'FOO', 'bar' : 'BAR' }
  returnValue = _.each(
    collection,
    function iteratee(value, key, genericObject) {
      assert(key.toUpperCase() === value)
    }
  )
  assert(collection === returnValue) // chainable

})()


//
// _.map(collection, iteratee, [context])
// alias: collect
//

;(function _map() {

  var collection
  var returnValue

  // alias
  assert(_.map === _.collect)

  // [1] array/array-like object
  collection = [ 1, 2, 3 ]
  returnValue = _.map(
    collection,
    function iteratee(element, index, array) {
      return element + index
    }
  )
  assert(_.isEqual(returnValue, [ 1, 3, 5 ]))

  // [2] generic object
  collection = _.create({ 'baz' : 3 }, { 'foo' : 1, 'bar' : 2 })
  returnValue = _.map(
    collection,
    function iteratee(value, key, genericObject) {
      return key
    }
  )
  assert(_.isEqual(returnValue, [ 'foo', 'bar' ]))

})()


//
// _.reduce(collection, iteratee, [initialValue], [context])
// alias: foldl, inject
//

;(function _reduce() {

  var collection
  var returnValue

  // alias
  assert(_.reduce === _.foldl)
  assert(_.reduce === _.inject)

  // [1] array/array-like object
  collection = [ 1, 2, 3, 4, 5 ]
  returnValue = _.reduce(
    collection,
    function iteratee(accum, curr, index, array) {
      return accum + curr
    }
  )
  assert(returnValue === 15)

  // [2] generic object
  collection = { 'foo' : 1, 'bar' : 2 }
  returnValue = _.reduce(
    collection,
    function iteratee(accum, curr, key, genericObject) {
      return accum.concat(key)
    },
    []
  )
  assert(_.isEqual(returnValue, _.keys(collection)))

})()


//
// _.reduceRight(collection, iteratee, [initialValue], [context])
// alias: foldr
//

;(function _reduceRight() {

  var collection
  var returnValue

  // alias
  assert(_.reduceRight === _.foldr)

  // [1] array/array-like object
  collection = [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ]
  returnValue = _.reduceRight(
    collection,
    function iteratee(accum, curr, index, array) {
      return accum.concat(curr)
    }
  )
  assert(returnValue.length === _.flatten(collection).length)
  assert(_.isEqual(returnValue, [ 4, 5, 2, 3, 0, 1 ]))

  // [2] generic object
  collection = { 'foo' : 1, 'bar' : 2 }
  returnValue = _.reduceRight(
    collection,
    function iteratee(accum, curr, key, genericObject) {
      return accum.concat(curr)
    },
    []
  )
  assert(_.isEqual(returnValue, [ 2, 1 ]))

})()


//
// _.find(collection, predicate, [context])
// alias: detect
//

;(function _find() {

  // alias
  assert(_.find === _.detect)

  // [1] array/array-like object
  assert(_.find([ 1, 3, 4, 5 ], isEven) === 4)
  assert(_.isUndefined(_.find([ 1, 3, 5 ], isEven)))

  // [2] generic object
  assert(
    _.find(
      { 'foo' : 1, 'bar' : 2 },
      function (value, key, object) {
        return isEven(value)
      }
    ) === 2
  )

})()


//
// _.filter(collection, predicate, [context])
// _.reject(collection, predicate, [context])
//

;(function _filterAndReject() {

  var odds
  var evens

  var collection

  // alias
  assert(_.filter === _.select)

  //
  // _.filter(collection, predicate, [context])
  //

  collection = _.range(1, 7)
  odds = _.filter(collection, isOdd)
  evens = _.filter(collection, isEven)
  assert(odds.length + evens.length === collection.length)
  assert(_.isEmpty(_.intersection(odds, evens)))

  collection = { 'foo' : 1, 'bar' : 2, 'baz' : 3, 'qux' : 4 }
  odds = _.filter(collection, isOdd)
  evens = _.filter(collection, isEven)
  assert(odds.length + evens.length === _.keys(collection).length)
  assert(_.isEmpty(_.intersection(odds, evens)))

  // _.reject(collection, predicate, [context])
  collection = _.range(1, 7)
  odds = _.reject(collection, isEven)
  evens = _.reject(collection, isOdd)
  assert(odds.length + evens.length === collection.length)
  assert(_.isEmpty(_.intersection(odds, evens)))

  collection = { 'foo' : 1, 'bar' : 2, 'baz' : 3, 'qux' : 4 }
  odds = _.reject(collection, isEven)
  evens = _.reject(collection, isOdd)
  assert(odds.length + evens.length === _.keys(collection).length)
  assert(_.isEmpty(_.intersection(odds, evens)))

})()


//
// _.where(object, properties)
//

;(function _where() {

  var members = [
    { 'name' : 'Alice', 'isAdmin' : false },
    { 'name' : 'Bob', 'isAdmin' : false },
    { 'name' : 'Pwn', 'isAdmin' : true }
  ]

  var query = { 'isAdmin' : true }

  var admins = _.where(members, query)

  assert(admins.length === 1)
  assert(admins[0].name === 'Pwn')

})()


//
// _.findWhere(object, properties)
//

;(function _findWhere() {

  var members = [
    { 'name' : 'Alice', 'isAdmin' : false },
    { 'name' : 'Bob', 'isAdmin' : false },
    { 'name' : 'Pwn', 'isAdmin' : true }
  ]

  var query = { 'isAdmin' : true }

  var admin = _.findWhere(members, query)
  assert(admin && admin.name === 'Pwn')

})()


//
// _.every(collection, predicate, [context])
// alias: all
//

;(function _every() {

  // alias
  assert(_.every === _.all)

  // [1] array/array-like object
  assert(_.every([ 1, 3, 5 ], isOdd))
  assert(!_.every([ 1, 2, 3 ], isOdd))

  // [2] generic object
  assert(_.every({ 'foo' : 1, 'bar' : 3 }, isOdd))
  assert(!_.every({ 'foo' : 1, 'bar' : 2 }, isOdd))

})()


//
// _.some(collection, predicate, [context])
// alias: any
//

;(function _some() {

  // alias
  assert(_.some === _.any)

  // [1] array/array-like object
  assert(_.some([ 1, 2, 4 ], isOdd))
  assert(!_.some([ 2, 4, 6 ], isOdd))

  // [2] generic object
  assert(_.some({ 'foo' : 1, 'bar' : 2 }, isOdd))
  assert(!_.some({ 'foo' : 2, 'bar' : 4 }, isOdd))

})()


//
// _.contains(collection, value, [fromIndex])
// alias: include, includes
//

;(function _contains() {

  var array = [ 1, 2 ]
  var object = { 'foo' : 1, 'bar' : 2 }

  // _.contains(arrayOrArrayLikeObject, value, [fromIndex])
  assert(_.contains(array, 1))
  assert(_.contains(array, 2))
  assert(!_.contains(array, 3))
  assert(_.contains(array, 1, 0))
  assert(!_.contains(array, 1, 1))
  assert(!_.contains(array, 1, 2))

  // _.contains(object, value)
  assert(_.contains(object, 1))
  assert(_.contains(object, 2))
  assert(!_.contains(object, 3))

})()


//
// _.invoke(collection, funcOrMethodName, *arguments)
//

;(function _invoke() {

  var collection
  var returnValue

  // [1] array/array-like object
  collection = [ 1, 2, 3 ]
  returnValue = _.invoke(collection, 'valueOf')
  assert(_.isEqual(collection, returnValue))

  // [2] generic object
  collection = { 'foo' : 1, 'bar' : 2, 'baz' : 3 }
  returnValue = _.invoke(collection, 'valueOf')
  assert(_.isEqual(_.values(collection), returnValue))

})()


//
// _.pluck(collection, key)
//

;(function _pluck() {

  var collection
  var returnValue

  // [1] array/array-like object
  collection = [
    { 'name' : 'Alice' },
    { 'name' : 'Bob' },
    { 'name' : 'Pwn' }
  ]
  returnValue = _.pluck(collection, 'name')
  assert(_.isEqual(returnValue, [ 'Alice', 'Bob', 'Pwn' ]))

  // [2] generic object
  collection = {
    "Alice": {
      "name": "Alice"
    },
    "Bob": {
      "name": "Bob"
    },
    "Pwn": {
      "name": "Pwn"
    }
  }
  returnValue = _.pluck(collection, 'name')
  assert(_.isEqual(returnValue, [ 'Alice', 'Bob', 'Pwn' ]))

})()


//
// _.max(collection, [iteratee], [context])
//

;(function _max() {

  // _.max([])
  assert(_.max([]) === Number.NEGATIVE_INFINITY)
  assert(_.max({}) === Number.NEGATIVE_INFINITY)

  // _.max(collection)
  assert(_.max([ 3, 1, 5 ]) === 5)
  assert(_.max({ 'foo' : 3, 'bar' : 1, 'baz' : 5 }) === 5)

  // _.max(collection, iteratee)
  assert(_.max([ 3, 1, 5 ], _.identity) === 5)
  assert(_.max({ 'foo' : 3, 'bar' : 1, 'baz' : 5 }, _.identity) === 5)

})()


//
// _.min(collection, [iteratee], [context])
//

;(function _min() {

  // _.min([])
  assert(_.min([]) === Number.POSITIVE_INFINITY)
  assert(_.min({}) === Number.POSITIVE_INFINITY)

  // _.min(collection)
  assert(_.min([ 3, 1, 5 ]) === 1)
  assert(_.min({ 'foo' : 3, 'bar' : 1, 'baz' : 5 }) === 1)

  // _.min(collection, iteratee)
  assert(_.min([ 3, 1, 5 ], _.identity) === 1)
  assert(_.min({ 'foo' : 3, 'bar' : 1, 'baz' : 5 }, _.identity) === 1)

})()


//
// _.sortBy(collection, comparatorFuncOrPropertyName, [context])
//

;(function _sortBy() {

  var collection
  var returnValue

  // [1] array/array-like object
  collection = [ 5, 1, 4, 2, 3 ]
  returnValue = _.sortBy(collection, _.identity)
  assert(_.isEqual(returnValue, [ 1, 2, 3, 4, 5 ]))

  // [2] generic object
  collection = { 'foo' : 3, 'bar' : 1, 'baz' : 2, 'qux' : 4 }
  returnValue = _.sortBy(collection, _.identity)
  assert(_.isEqual(returnValue, [ 1, 2, 3, 4 ]))

})()


//
// _.groupBy(collection, funcOrPropertyName, [context])
//

;(function _groupBy() {

  function modulo(num) {
    return num % 2
  }

  var collection
  var returnValue

  // [1] array/array-like object
  collection = [ 1, 2, 3, 4, 5 ]
  returnValue = _.groupBy(collection, modulo)
  assert(_.isEqual(returnValue, { '0' : [ 2, 4 ], '1' : [ 1, 3, 5 ] }))

  // [2] generic object
  collection = { 'foo' : 1, 'bar' : 2, 'baz' : 1, 'qux' : 2 }
  returnValue = _.groupBy(collection, modulo)
  assert(_.isEqual(returnValue, { '0' : [ 2, 2 ], '1' : [ 1, 1 ] }))

})()


//
// _.countBy(collection, funcOrPropertyName, [context])
//

;(function _countBy() {

  function parity(num) {
    return isOdd(num) ? 'odd' : 'even'
  }

  var collection
  var returnValue

  // [1] array/array-like object
  collection = [ 1, 2, 3, 4, 5 ]
  returnValue = _.countBy(collection, parity)
  assert(_.isEqual(returnValue, { 'odd' : 3, 'even' : 2 }))

  // [2] generic object
  collection = { 'foo' : 1, 'bar' : 2, 'baz' : 3, 'qux' : 4 }
  returnValue = _.countBy(collection, parity)
  assert(_.isEqual(returnValue, { 'odd' : 2, 'even' : 2 }))

})()


//
// _.toArray(collection)
//

;(function _toArray() {

  var arrayLikeObject = { 'length' : 5 }
  var genericObject = {}

  assert(_.isArray(_.toArray(arrayLikeObject)))
  assert(_.isArray(_.toArray(genericObject)))

})()


//
// _.size(collection)
//

;(function _size() {

  // [1] array/array-like object
  assert(_.size([ 1, 2, 3 ]) === 3)

  // [2] generic object
  assert(_.size({ 'foo' : 1, 'bar' : 2 }) === 2)

})()


//
// _.partition(collection, predicate)
//

;(function _partition() {

  var collection
  var returnValue

  // [1] array/array-like object
  collection = _.range(1, 7)
  returnValue = _.partition(collection, isOdd)
  assert(_.isEqual(returnValue[0], _.filter(collection, isOdd)))
  assert(_.isEqual(returnValue[1], _.reject(collection, isOdd)))

  // [2] generic object
  collection = { 'foo' : 1, 'bar' : 2, 'baz' : 3, 'qux' : 4 }
  returnValue = _.partition(collection, isOdd)
  assert(_.isEqual(returnValue[0], _.filter(collection, isOdd)))
  assert(_.isEqual(returnValue[1], _.reject(collection, isOdd)))

})()
