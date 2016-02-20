var assert = console.assert
var _ = require('underscore')

//
// _.first(array, [n])
// alias: head, take
//

;(function _first() {

  var head
  var n = 2
  var array = [ 'foo', 'bar', 'baz' ]

  // alias
  assert(_.first === _.head)
  assert(_.first === _.take)

  // _.first(array)
  head = _.first(array)
  assert(head === 'foo')

  // _.first(array, n)
  head = _.first(array, n)
  assert(head.length === n)
  assert(head.every(function every(value, index) {
    return value === array[index]
  }))

  // returns a copy
  head = _.first(array, array.length)
  assert(head.length === array.length)
  assert(head.every(function every(value, index) {
    return value === array[index]
  }))
  assert(head !== array)

})()


//
// _.last(array, [n])
//

;(function _last() {

  var tail
  var n = 2
  var array = [ 'foo', 'bar', 'baz' ]

  // _.last(array)
  tail = _.last(array)
  assert(tail === 'baz')

  // _.last(array, n)
  tail = _.last(array, n)
  assert(tail.length === n)
  assert(tail.every(function every(value, index) {
    return value === array[index + (array.length - n)]
  }))

  // returns a copy
  tail = _.last(array, array.length)
  assert(tail.length === array.length)
  assert(tail.every(function every(value, index) {
    return value === array[index]
  }))
  assert(tail !== array)

})()


//
// _.initial(array, [n])
//

;(function _initial() {

  var head
  var n = 2
  var array = [ 'foo', 'bar', 'baz' ]

  // _.initial(array)
  head = _.initial(array)
  assert(head.length === array.length - 1)
  assert(head.every(function every(value, index) {
    return value === array[index]
  }))

  // _.initial(array, n)
  head = _.initial(array, n)
  assert(head.length === array.length - n)
  assert(head.every(function every(value, index) {
    return value === array[index]
  }))

  // returns a copy
  head = _.initial(array, 0)
  assert(head.length === array.length)
  assert(head.every(function every(value, index) {
    return value === array[index]
  }))
  assert(head !== array)

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
  assert(tail.length === array.length - 1)
  assert(tail.every(function every(value, index) {
    return value === array[index + 1]
  }))

  // _.rest(array, index)
  tail = _.rest(array, fromIndex)
  assert(tail.length === array.length - fromIndex)
  assert(tail.every(function every(value, index) {
    return value === array[index + fromIndex]
  }))

  // returns a copy
  tail = _.rest(array, 0)
  assert(tail.length === array.length)
  assert(tail.every(function every(value, index) {
    return value === array[index]
  }))
  assert(tail !== array)

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

  assert(compactArray.length === array.length - falsyValues.length)
  assert(compactArray.length === truthyValues.length)
  assert(compactArray.every(function every(value) {
    return truthyValues.indexOf(value) !== -1
  }))

  // returns a copy
  compactArray = _.compact(truthyValues)
  assert(compactArray.length === truthyValues.length)
  assert(compactArray.every(function every(value, index) {
    return value === truthyValues[index]
  }))
  assert(compactArray !== truthyValues)

})()


//
// _.flatten(array, [shallow])
//

;(function _flatten() {

  var array = [ 1, [ [ 2, [ 3 ] ] ], 4, [ 5, 6 ] ]
  var flattenedArray

  // _.flatten(array)
  flattenedArray = _.flatten(array)
  assert(flattenedArray.length === 6)
  assert(flattenedArray.every(function every(value) {
    return !Array.isArray(value)
  }))

  // _.flatten(array, true)
  flattenedArray = _.flatten(array, true)
  assert(flattenedArray.length === 5)

  assert(flattenedArray[0] === 1)
  assert(flattenedArray[2] === 4)
  assert(flattenedArray[3] === 5)
  assert(flattenedArray[4] === 6)

  assert(Array.isArray(flattenedArray[1]))
  assert(flattenedArray[1].length === 2)
  assert(flattenedArray[1][0] === 2)
  assert(Array.isArray(flattenedArray[1][1]))
  assert(flattenedArray[1][1].length === 1)
  assert(flattenedArray[1][1][0] === 3)

})()

//
// _.without(array, *values)
//

;(function _without() {

  var array = _.without([ 'foo', 'bar', 'baz' ], 'bar', 'qux')

  assert(array.length === 2)
  assert(array[0] === 'foo')
  assert(array[1] === 'baz')

})()


//
// _.union(*arrays)
//

;(function _union() {

  var a = [ 1, 2 ]
  var b = [ 2, 3 ]
  var c = [ 3, 4 ]

  var union = _.union(a, b, c)

  assert(union.length === 4)
  assert(union[0] === 1)
  assert(union[1] === 2)
  assert(union[2] === 3)
  assert(union[3] === 4)

})()


//
// _.intersection(*arrays)
//

;(function _intersection() {

  var a = [ 1, 2, 3 ]
  var b = [ 2, 3, 4 ]
  var c = [ 3, 4, 5 ]

  var intersection = _.intersection(a, b, c)

  assert(intersection.length === 1)
  assert(intersection[0] === 3)

})()


//
// _.difference(array, *others)
//

;(function _difference() {

  var a = [ 1, 2, 3, 4 ,5 ]
  var b = [ 0, 1, 2 ]
  var c = [ 4, 5, 6 ]

  var difference = _.difference(a, b, c)

  assert(difference.length === 1)
  assert(difference[0] === 3)

})()


//
// _.uniq(array)
//

;(function _uniq() {

  var array = _.uniq([ 1, 4, 3, 2, 2, 3 ])

  assert(array.length === 4)
  assert(array[0] === 1)
  assert(array[1] === 4)
  assert(array[2] === 3)
  assert(array[3] === 2)

})()


//
// _.zip(*arrays)
//

;(function _zip() {

  var a = [ 1, 2 ]
  var b = [ 'foo', 'bar', 'baz' ]
  var c = [ true, false ]

  var matrix = _.zip(a, b, c)

  assert(matrix.length === Math.max(a.length, b.length, c.length))

  assert(Array.isArray(matrix[0]))
  assert(matrix[0][0] === a[0])
  assert(matrix[0][1] === b[0])
  assert(matrix[0][2] === c[0])

  assert(Array.isArray(matrix[1]))
  assert(matrix[1][0] === a[1])
  assert(matrix[1][1] === b[1])
  assert(matrix[1][2] === c[1])

  assert(Array.isArray(matrix[2]))
  assert(matrix[2][0] === a[2])
  assert(matrix[2][1] === b[2])
  assert(matrix[2][2] === c[2])

})()


//
// _.unzip(array)
//

;(function _unzip() {

  var a = [ 1, 'foo', true ]
  var b = [ 2, 'bar', false ]
  var c = [ undefined, 'baz', undefined ]

  var matrix = [ a, b, c ]
  var components = _.unzip(matrix)

  assert(components.length === matrix.length)

  assert(components[0].length === 3)
  assert(components[0][0] === a[0])
  assert(components[0][1] === b[0])
  assert(components[0][2] === c[0])

  assert(components[1].length === 3)
  assert(components[1][0] === a[1])
  assert(components[1][1] === b[1])
  assert(components[1][2] === c[1])

  assert(components[2].length === 3)
  assert(components[2][0] === a[2])
  assert(components[2][1] === b[2])
  assert(components[2][2] === c[2])

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
  assert(Object.keys(obj).length === 2)
  assert(obj.foo === 1)
  assert(obj.bar === 2)

  // _.object(keyValuePairs)
  obj = _.object(keyValuePairs)
  assert(Object.keys(obj).length === 2)
  assert(obj.foo === 1)
  assert(obj.bar === 2)

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
  range = _.range(3)
  assert(range.length === 3)
  assert(range[0] === 0)
  assert(range[1] === 1)
  assert(range[2] === 2)

  // _.range(start, stop)
  range = _.range(1, 3)
  assert(range.length === 2)
  assert(range[0] === 1)
  assert(range[1] === 2)

  // _.range(start, stop, step)
  range = _.range(0, 10, 4)
  assert(range.length === 3)
  assert(range[0] === 0)
  assert(range[1] === 4)
  assert(range[2] === 8)

})()
