var assert = console.assert
var _ = require('underscore')

//
// _.first(array, [n])
// alias: head, take
//

;(function _first() {

  var head
  var array = [ 'foo', 'bar', 'baz' ]

  // alias
  assert(_.first === _.head)
  assert(_.first === _.take)

  // _.first(array)
  head = _.first(array)
  assert(head === 'foo')

  // _.first(array, n)
  head = _.first(array, 2)
  assert(_.isEqual(head, [ 'foo' , 'bar' ]))

})()


//
// _.last(array, [n])
//

;(function _last() {

  var tail
  var array = [ 'foo', 'bar', 'baz' ]

  // _.last(array)
  tail = _.last(array)
  assert(tail === 'baz')

  // _.last(array, n)
  tail = _.last(array, 2)
  assert(_.isEqual(tail, [ 'bar', 'baz' ]))

})()


//
// _.initial(array, [n])
//

;(function _initial() {

  var head
  var array = [ 'foo', 'bar', 'baz' ]

  // _.initial(array)
  head = _.initial(array)
  assert(_.isEqual(head, [ 'foo', 'bar' ]))

  // _.initial(array, n)
  head = _.initial(array, 2)
  assert(_.isEqual(head, [ 'foo' ]))

})()


//
// _.rest(array, [index])
// alias: tail, drop
//

;(function _rest() {

  var tail
  var fromIndex = 1
  var array = [ 'foo', 'bar', 'baz' ]

  // alias
  assert(_.rest === _.tail)
  assert(_.rest === _.drop)

  // _.rest(array)
  tail = _.rest(array)
  assert(_.isEqual(tail, [ 'bar', 'baz' ]))

  // _.rest(array, index)
  tail = _.rest(array, 2)
  assert(_.isEqual(tail, [ 'baz' ]))

})()


//
// _.compact(array)
//

;(function _compact() {

  var array
  var compactArray

  var truthyValues = [ +Infinity, -Infinity, 1, 'foobar', true, {}, [], function() {}, /foobar/ ]
  var falsyValues = [ +0, -0, NaN, '', false, null, undefined]

  array = truthyValues.concat(falsyValues)
  compactArray = _.compact(array)

  assert(_.isEqual(compactArray, truthyValues))

})()


//
// _.flatten(array, [shallow])
//

;(function _flatten() {

  var array = [ 1, [ [ 2, [ 3 ] ] ], 4, [ 5, 6 ] ]
  var flattenedArray

  // _.flatten(array)
  flattenedArray = _.flatten(array)
  assert(_.isEqual(flattenedArray, [ 1, 2, 3, 4, 5, 6 ]))

  // _.flatten(array, true)
  flattenedArray = _.flatten(array, true)
  assert(_.isEqual(flattenedArray, [ 1, [ 2, [3] ], 4, 5, 6 ]))

})()

//
// _.without(array, *values)
//

;(function _without() {

  assert(
    _.isEqual(
      _.without([ 'foo', 'bar', 'baz' ], 'bar', 'qux'),
      [ 'foo', 'baz' ]
    )
  )

})()


//
// _.union(*arrays)
//

;(function _union() {

  var a = [ 1, 2 ]
  var b = [ 2, 3 ]
  var c = [ 3, 4 ]

  assert(
    _.isEqual(
      _.union(a, b, c)
      [ 1, 2, 3, 4 ]
    )
  )

})()


//
// _.intersection(*arrays)
//

;(function _intersection() {

  var a = [ 1, 2, 3 ]
  var b = [ 2, 3, 4 ]
  var c = [ 3, 4, 5 ]

  assert(
    _.isEqual(
      _.intersection(a, b, c)
      [ 3 ]
    )
  )

})()


//
// _.difference(array, *others)
//

;(function _difference() {

  var a = [ 1, 2, 3, 4 ,5 ]
  var b = [ 0, 1, 2 ]
  var c = [ 4, 5, 6 ]

  assert(
    _.isEqual(
      _.difference(a, b, c)
      [ 3 ]
    )
  )

})()


//
// _.uniq(array)
//

;(function _uniq() {

  assert(_.isEqual(_.uniq([ 1, 4, 3, 2, 2, 3 ]), [ 1, 4, 3, 2 ]))

})()


//
// _.zip(*arrays)
//

;(function _zip() {

  var a = [ 1, 2 ]
  var b = [ 'foo', 'bar', 'baz' ]
  var c = [ true, false ]

  assert(
    _.isEqual(
      _.zip(a, b, c),
      [
        [ 1, 'foo', true ],
        [ 2, 'bar', false ],
        [ undefined, 'baz', undefined ]
      ]
    )
  )

})()


//
// _.unzip(array)
//

;(function _unzip() {

  var a = [ 1, 'foo', true ]
  var b = [ 2, 'bar', false ]
  var c = [ undefined, 'baz', undefined ]

  assert(
    _.isEqual(
      _.unzip([ a, b, c ]),
      [
        [ 1, 2, undefined ],
        [ 'foo', 'bar', 'baz' ],
        [ true, false, undefined ]
      ]
    )
  )

})()


//
// _.object(list, [values])
//

;(function _object() {

  var obj

  var keys = [ 'foo', 'bar' ]
  var values = [ 1, 2 ]
  var keyValuePairs = _.zip(keys, values)

  // _.object(keys, values)
  obj = _.object(keys, values)
  assert(_.isEqual(obj, { 'foo' : 1, 'bar' : 2 }))

  // _.object(keyValuePairs)
  obj = _.object(keyValuePairs)
  assert(_.isEqual(obj, { 'foo' : 1, 'bar' : 2 }))

})()


//
// _.indexOf(array, value, [fromIndex])
// _.lastIndexOf(array, value, [fromIndex])
//

;(function _indexOfAndLastIndexOf() {

  var array = [ 1, 2, 1, 3 ]

  // _.indexOf(array, value, [fromIndex])

  assert(_.indexOf(array, 1) === 0)
  assert(_.indexOf(array, 1, 1) === 2)
  assert(_.indexOf(array, 4) === -1)

  // _.lastIndexOf(array, value, [fromIndex])

  assert(_.lastIndexOf(array, 1) === 2)
  assert(_.lastIndexOf(array, 1, 1) === 0)
  assert(_.lastIndexOf(array, 4) === -1)

})()


//
// _.findIndex(array, predicate, [context])
// _.findLastIndex(array, predicate, [context])
//

;(function _findIndexAndFindLastIndex() {

  var array = [ 2, 1, 2, 3 ]
  var predicate = function isEven(num) {
    return num % 2 === 0
  }

  // _.findIndex(array, predicate, [context])
  assert(_.findIndex(array, predicate) === 0)
  assert(_.findIndex([ 1, 3, 5 ], predicate) === -1)

  // _.findLastIndex(array, predicate, [context])
  assert(_.findLastIndex(array, predicate) === 2)
  assert(_.findLastIndex([ 1, 3, 5 ], predicate) === -1)

})()


//
// _.range([start], stop, [step])
//

;(function _range() {

  var range

  // _.range(stop)
  assert(_.isEqual(_.range(3), [ 0, 1, 2 ]))

  // _.range(start, stop)
  assert(_.isEqual(_.range(1, 3), [ 1, 2 ]))

  // _.range(start, stop, step)
  assert(_.isEqual(_.range(0, 10, 4), [ 0, 4, 8 ]))

})()
