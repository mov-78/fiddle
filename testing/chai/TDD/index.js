'use strict'

const chai = require( 'chai' )
    , assert = chai.assert
    , AssertionError = chai.AssertionError

//
// assert( expression, [message] )
// assert.fail( actual, expected, [message], [operator] )
//

assert( true ) // assert.isOk( expression, [message] )

assert
  .throws( () => { assert.fail( 0, 1, undefined, '!=' ) }
         , AssertionError
         )
assert
  .throws( () => { assert.fail( 1, 1, undefined, '!=' ) }
         , AssertionError
         )


//
// assert.isOk( expression, [message] )
// assert.isNotOk( expression, [message] )
// assert.isTrue( expression, [message] )
// assert.isNotTrue( expression, [message] )
// assert.isFalse( expression, [message] )
// assert.isNotFalse( expression, [message] )
//

assert.isOk( 1 )        // assert.equal( !!expression, true, [message] )
assert.isNotOk( 0 )     // assert.equal( !!expression, false, [message] )

assert.isTrue( true )   // assert.strictEqual( expression, true, [message] )
assert.isNotTrue( 1 )   // assert.notStrictEqual( expression, true, [message] )
assert.isFalse( false ) // assert.strictEqual( expression, false, [message] )
assert.isNotFalse( 0 )  // assert.notStrictEqual( expression, false, [message] )


//
// assert.equal( actual, expected, [message] )
// assert.notEqual( actual, expected, [message] )
// assert.strictEqual( actual, expected, [message] )
// assert.notStrictEqual( actual, expected, [message] )
// assert.deepEqual( actual, expected, [message] )
// assert.notDeepEqual( actual, expected, [message] )
//

assert.equal( 1, '1' )
assert.notEqual( 1, 0 )
assert.strictEqual( 1, 1 )
assert.notStrictEqual( 1, '1' )

{

  const proto = { foo : 'bar' }
      , foo = { baz : 'qux' }
      , bar = { baz : 'qux' } // [1] 对于 primitives 使用 === 判断相等性

  // [2] 非枚举属性不在考虑范围之内
  Object.defineProperty( bar, 'hidden', { enumerable : false } )
  assert.deepEqual( foo, bar )

  Object.setPrototypeOf( foo, proto ) // [3] 但是原型属性在考虑范围之内
  assert.notDeepEqual( foo, bar )

  // * 其中 [1][3] 与 node assert 模块不兼容

}


//
// assert.isAbove( valueToCheck, valueToBeAbove, [message] )
// assert.isBelow( valueToCheck, valueToBeBelow, [message] )
// assert.isAtLeast( valueToCheck, valueToBeAtLeast, [message] )
// assert.isAtMost( valueToCheck, valueToBeAtMost, [message] )
//

assert.isAbove( 2, 1 )    // valueToCheck > valueToBeAbove
assert.isBelow( 1, 2 )    // valueToCheck < valueToBeBelow
assert.isAtLeast( 2, 1 )  // valueToCheck >= valueToBeAtLeast
assert.isAtMost( 1, 2 )   // valueToCheck <= valueToBeAtMost


//
// assert.isNull( expression, [message] )
// assert.isNotNull( expression, [message] )
// assert.isUndefined( expression, [message] )
// assert.isDefined( expression, [message] )
// assert.isNumber( expression, [message] )
// assert.isNotNumber( expression, [message] )
// assert.isNaN( expression, [message] )
// assert.isNotNaN( expression, [message] )
// assert.isString( expression, [message] )
// assert.isNotString( expression, [message] )
// assert.isBoolean( expression, [message] )
// assert.isNotBoolean( expression, [message] )
// assert.isObject( expression, [message] )
// assert.isNotObject( expression, [message] )
// assert.isArray( expression, [message] )
// assert.isNotArray( expression, [message] )
// assert.isFunction( expression, [message] )
// assert.isNotFunction( expression, [message] )
//

assert.isNull( null )
assert.isNotNull( undefined )
assert.isUndefined( undefined )
assert.isDefined( null )

assert.isNumber( Number.NaN )
assert.isNumber( Number.POSITIVE_INFINITY )
assert.isNumber( Number.NEGATIVE_INFINITY )
assert.isNaN( 'one' ) // WTF?
assert.isNaN( Number.NaN )

assert.isString( '' )

assert.isBoolean( true )
assert.isBoolean( false )

assert.isObject( {} ) // assert.typeOf( expression, 'object' )
assert.isNotObject( [] )
assert.isNotObject( () => null )
assert.isNotObject( new Date )
assert.isNotObject( /^/ )

assert.isArray( [] )
assert.isNotArray( { length : 1 } )         // [1] Array-like Object
;( () => assert.isNotArray( arguments ) )() // [2] Arguments

assert.isFunction( () => null )
assert.isFunction( function noop() {} )


//
// assert.typeOf( expression, typeName, [message] )
// assert.notTypeOf( expression, typeName, [message] )
// 判断依据：Object.prototype.toString
//

assert.typeOf( null, 'null' )
assert.typeOf( undefined, 'undefined' )
assert.typeOf( 0, 'number' )
assert.typeOf( '', 'string' )
assert.typeOf( true, 'boolean' )
assert.typeOf( {}, 'object' )
assert.typeOf( [], 'array' )
assert.typeOf( () => null, 'function' )
assert.typeOf( /^/, 'regexp' )
assert.typeOf( new Date, 'date' )


//
// assert.instanceOf( object, constructor, [message] )
// assert.notInstanceOf( object, constructor, [message] )
//

{

  const proto = {}
      , Stub = class {}
      , obj = new Stub

  assert.instanceOf( obj, Stub )

  Object.setPrototypeOf( obj, proto )
  assert.notInstanceOf( obj, Stub )

}


//
// assert.include( haystack, needle, [message] )
// assert.notInclude( haystack, needle, [message] )
// assert.oneOf( needle, haystack, [message] )
//

assert.include( 'foobar', 'foo' )                             // [1] String
assert.include( [ { foo : 'bar' }, 'baz' ], { foo : 'bar' } ) // [2] Array
assert.notInclude( [ 1 ], '1' )                               // strict equal
assert.notInclude( [ [ 1 ], 2 ], 1 )                          // top-level only

assert.oneOf( 3, [ 1, 3, 5 ] )
assert.throws( () => { assert.oneOf( '1', [ 1 ] ) } )     // strict equal
assert.throws( () => { assert.oneOf( 1, [ [ 1 ], 2 ]) } ) // top-level only
assert.throws( () => { assert.oneOf( { foo : 1 }, [ { foo : 1 } ] ) } )


//
// assert.match( expression, regex, [message] )
// assert.notMatch( expression, regex, [message] )
//

assert.match( '', /^\s*$/ )
assert.notMatch( '', /^\s+$/ )


//
// assert.property( object, key, [message] )
// assert.notProperty( object, key, [message] )
// assert.deepProperty( object, key, [message] )
// assert.notDeepProperty( object, key, [message] )
// assert.propertyVal( object, key, value, [message] )
// assert.propertyNotVal( object, key, value, [message] )
// assert.deepPropertyVal( object, key, value, [message] )
// assert.deepPropertyNotVal( object, key, value, [message] )
//

assert.property( { foo : '*' }, 'foo' )
assert.property( Object.create( { foo : '*' } ), 'foo' )
assert.notProperty( { bar : '*' }, 'foo' )
assert.deepProperty( { foo : { bar : '*' } }, 'foo.bar' )
assert.deepProperty( Object.create( { foo : { bar : '*' } } ), 'foo.bar' )
assert.notDeepProperty( { foo : { bar : '*' } }, 'foo.baz' )

assert.propertyVal( { foo : 'bar' }, 'foo', 'bar' )
assert.propertyVal( Object.create( { foo : 'bar' } ), 'foo', 'bar' )
assert.propertyNotVal( { foo : 'bar' }, 'foo', 'baz' )
assert.deepPropertyVal( { foo : { bar : 'baz' } }, 'foo.bar', 'baz' )
assert.deepPropertyVal( Object.create( { foo : { bar : 'baz' } } ), 'foo.bar', 'baz' )
assert.deepPropertyNotVal( { foo : { bar : 'baz' } }, 'foo.bar', 'qux' )


//
// assert.lengthOf( value, length, [message] )
//

assert.lengthOf( [ null ], 1 )          // [1] Array
assert.lengthOf( 'null', 4 )            // [2] String
assert.lengthOf( { length : 1 }, 1 )    // [3] Array-Like Object


//
// assert.throws( func, [constructor|string|regex], [string|regex], [message] )
// assert.doesNotThrow( func, [constructor|string|regex], [string|regex], [message] )
//

{

  let func = null

  class Exception extends Error {
    constructor( message ) {
      super( message )
    }
  }

  // [1] assert.throws( func )
  func = () => { throw new Error }
  assert.throws( func )

  // [2] assert.throws( func, constructor, [message] )
  func = () => { throw new Exception }
  assert.throws( func, Exception )

  // [3] assert.throws( func, string|regex, [message] )
  func = () => { throw 'description' }
  assert.throws( func, 'description' )
  assert.throws( func, /^description$/ )

  // [4] assert.throws( func, constructor, string|regex, [message] )
  func = () => { throw new Exception( 'description' ) }
  assert.throws( func, Exception, 'description' )
  assert.throws( func, Exception, /^description$/ )

}


//
// assert.operator( operand1, operator, operand2, [message] )
//

assert.operator( 1, '==', '1' )
assert.operator( 1, '!=', 0 )
assert.operator( 1, '===', 1 )
assert.operator( 1, '!==', '1' )
assert.operator( 1, '>', 0 )
assert.operator( 1, '>=', 1 )
assert.operator( 1, '<', 2 )
assert.operator( 1, '<=', 1 )


//
// assert.closeTo( actual, expected, delta, [message] )
// assert.approximately( actual, expected, delta, [message] )
//

assert.closeTo( 0.3 - 0.2, 0.1, Number.EPSILON )
assert.approximately( 0.3 - 0.2, 0.1, Number.EPSILON )  // alias to `closeTo`


//
// assert.sameMembers( set1, set2, [message] )
// assert.sameDeepMembers( set1, set2, [message] )
// assert.includeMembers( superset, subset, [message] )
// assert.includeDeepMembers( superset, subset, [message] )
//

assert.sameMembers( [ 1, 3, 2 ], [ 2, 1, 3 ] )
assert.sameDeepMembers( [ 1, { foo : 'bar' } ], [ { foo : 'bar' }, 1 ] )
assert.includeMembers( [ 1, 3, 2 ], [ 3, 2 ] )
assert.includeDeepMembers( [ 1, { foo : 'bar' }, 2 ], [ { foo : 'bar' }, 2 ] )


//
// assert.changes( func, object, key )
// assert.increases( func, object, key )
// assert.doesNotIncrease( func, object, key )
// assert.decreases( func, object, key )
// assert.doesNotDecrease( func, object, key )
//

{

  const KEY = 'KEY'
      , obj = { [ KEY ] : 0 }
      , func = () => { obj[ KEY ] = 1 }

  assert.changes( func, obj, KEY )

  obj[ KEY ] = 0
  assert.increases( func, obj, KEY )
  obj[ KEY ] = 1
  assert.doesNotIncrease( func, obj, KEY )

  obj[ KEY ] = 2
  assert.decreases( func, obj, KEY )
  obj[ KEY ] = 1
  assert.doesNotDecrease( func, obj, KEY )

}


//
// assert.ifError( expression )
//

assert.ifError( false )
assert.throws( () => { assert.ifError( true ) } )


//
// assert.isExtensible( object )
// assert.isNotExtensible( object )
// assert.isSealed( object )
// assert.isNotSealed( object )
// assert.isFrozen( object )
// assert.isNotFrozen( object )
//

{

  let obj

  // empty object
  obj = {}

  assert.isExtensible( obj )
  assert.isNotSealed( obj )
  assert.isNotFrozen( obj )

  Object.preventExtensions( obj )
  assert.isNotExtensible( obj )
  assert.isSealed( obj ) // empty
  assert.isFrozen( obj ) // empty

  Object.seal( obj )
  assert.isNotExtensible( obj )
  assert.isSealed( obj )
  assert.isFrozen( obj ) // empty

  Object.freeze( obj )
  assert.isNotExtensible( obj )
  assert.isSealed( obj )
  assert.isFrozen( obj )

  // non-empty object
  obj = { foo : 'bar' }

  assert.isExtensible( obj )
  assert.isNotSealed( obj )
  assert.isNotFrozen( obj )

  Object.preventExtensions( obj )
  assert.isNotExtensible( obj )
  assert.isNotSealed( obj )
  assert.isNotFrozen( obj )

  Object.seal( obj )
  assert.isNotExtensible( obj )
  assert.isSealed( obj )
  assert.isNotFrozen( obj )

  Object.freeze( obj )
  assert.isNotExtensible( obj )
  assert.isSealed( obj )
  assert.isFrozen( obj )

}
