const _ = require( 'lodash' )
const chai = require( 'chai' )

before( chai.should )

describe( 'lodash/lang' , function () {

  //
  // isNull( value )
  // isUndefined( value )
  // isNil( value )
  // isNumber( value )
  // isInteger( value )
  // isSafeInteger( value )
  // isFinite( value )
  // isNaN( value )
  // isString( value )
  // isBoolean( value )
  // isObject( value )
  // isObjectLike( value )
  // isPlainObject( value )
  // isArray( value )
  // isArrayLike( value )
  // isArrayLikeObject( value )
  // isArguments( value )
  // isFunction( value )
  // isDate( value )
  // isRegExp( value )
  // isSymbol( value )
  // isSet( value )
  // isWeakSet( value )
  // isMap( value )
  // isWeakMap( value )
  //

  it( 'isNull , isUndefined , isNil' , function () {

    _.isNull( null ).should.be.true
    _.isNull( undefined ).should.be.false

    _.isUndefined( null ).should.be.false
    _.isUndefined( undefined ).should.be.true

    _.isNil( null ).should.be.true
    _.isNil( undefined ).should.be.true

  } )
  it( 'isNumber , isInteger , isSafeInteger , isFinite , isNaN' , function () {

    _.isNumber( 0 ).should.be.true
    _.isNumber( +1 / 0 ).should.be.true
    _.isNumber( -1 / 0 ).should.be.true
    _.isNumber( 0 / 0 ).should.be.true
    _.isNumber( new Number() ).should.be.true

    _.isInteger( 0 ).should.be.true
    _.isInteger( new Number( 0 ) ).should.be.false
    _.isInteger( Math.PI ).should.be.false
    _.isInteger( new Number( Math.PI ) ).should.be.false
    _.isInteger( +1 / 0 ).should.be.false
    _.isInteger( -1 / 0 ).should.be.false
    _.isInteger( 0 / 0 ).should.be.false

    _.isSafeInteger( Number.MAX_SAFE_INTEGER ).should.be.true
    _.isSafeInteger( Number.MIN_SAFE_INTEGER ).should.be.true
    _.isSafeInteger( Number.MAX_SAFE_INTEGER + 1 ).should.be.false
    _.isSafeInteger( Number.MIN_SAFE_INTEGER - 1 ).should.be.false

    _.isFinite( +1 / 0 ).should.be.false
    _.isFinite( -1 / 0 ).should.be.false
    _.isFinite( 0 / 0 ).should.be.false

    _.isNaN( 0 / 0 ).should.be.true
    _.isNaN( '' ).should.be.false
    _.isNaN( undefined ).should.be.false

  } )
  it( 'isString' , function () {
    _.isString( '' ).should.be.true
    _.isString( new String( '' ) ).should.be.true
  } )
  it( 'isBoolean' , function () {
    _.isBoolean( true ).should.be.true
    _.isBoolean( false ).should.be.true
    _.isBoolean( new Boolean( true ) ).should.be.true
    _.isBoolean( new Boolean( false ) ).should.be.true
  } )
  it( 'isObject , isObjectLike , isPlainObject' , function () {

    // isObject( value ) 等同于：
    //    const type = typeof value
    //    return !!value && ( type === 'object' || type === 'function' )
    _.isObject( null ).should.be.false
    _.isObject( {} ).should.be.true
    _.isObject( _.noop ).should.be.true


    // isObjectLike( value ) 等同于：
    //    return !!value && typeof value === 'object'
    _.isObjectLike( null ).should.be.false
    _.isObjectLike( {} ).should.be.true
    _.isObjectLike( _.noop ).should.be.false // ←

    _.isPlainObject( {} ).should.be.true
    _.isPlainObject( _.create( null ) ).should.be.true
    _.isPlainObject( _.create( {} ) ).should.be.false
    _.isPlainObject( new class {}() ).should.be.false

  } )
  it( 'isArray , isArrayLike , isArrayLikeObject , isArguments' , function () {

    _.isArguments( arguments ).should.be.true

    // isArray( value ) 等同于：
    //    return Array.isArray( value )
    _.isArray( [] ).should.be.true
    _.isArray( '' ).should.be.false
    _.isArray( _.noop ).should.be.false
    _.isArray( arguments ).should.be.false

    // isArrayLike( value ) 等同于：
    //    return value != null && isLength( getLength( value ) ) && !isFunction( value )
    _.isArrayLike( [] ).should.be.true
    _.isArrayLike( '' ).should.be.true // ←
    _.isArrayLike( _.noop ).should.be.false
    _.isArrayLike( arguments ).should.be.true // ←

    // isArrayLikeObject( value ) 等同于：
    //    return isObjectLike( value ) && isArrayLike( value )
    _.isArrayLikeObject( [] ).should.be.true
    _.isArrayLikeObject( '' ).should.be.false // ←
    _.isArrayLikeObject( _.noop ).should.be.false
    _.isArrayLikeObject( arguments ).should.be.true // ←

  } )
  it( 'isFunction' , function () {
    _.isFunction( () => null ).should.be.true
    _.isFunction( function () {} ).should.be.true
    _.isFunction( function* () {} ).should.be.true
  } )
  it( 'isDate' , function () {
    _.isDate( new Date() ).should.be.true
  } )
  it( 'isRegExp' , function () {
    _.isRegExp( /^/ ).should.be.true
    _.isRegExp( new RegExp() ).should.be.true
  } )
  it( 'isSymbol' , function () {
    _.isSymbol( Symbol() ).should.be.true
    _.isSymbol( Symbol.for( '' ) ).should.be.true
  } )
  it( 'isSet , isWeakSet , isMap , isWeakMap' , function () {
    _.isSet( new Set() ).should.be.true
    _.isWeakSet( new WeakSet() ).should.be.true
    _.isMap( new Map() ).should.be.true
    _.isWeakMap( new WeakMap() ).should.be.true
  } )


  //
  // isEqual( value , other )
  // isEqualWith( value , other , customizer )
  //

  it( 'isEqual , isEqualWith' , function () {

    _.isEqual(
      { foo : { bar : 'baz' } } ,
      { foo : { bar : 'baz' } }
    ).should.be.true
    _.isEqual(
      [ [ 0 ] , 1 ] ,
      [ [ 0 ] , 1 ]
    ).should.be.true

    _.isEqualWith(
      { foo : { bar : 'baz' } } ,
      { foo : { bar : 'baz' } } ,
      ( value , othValue , key , object , other ) => _.isEqual( value , othValue )
    ).should.be.true
    _.isEqualWith(
      [ [ 0 ] , 1 ] ,
      [ [ 0 ] , 1 ] ,
      ( value , othValue , index , array , other ) => _.isEqual( value , othValue )
    ).should.be.true

  } )


  //
  // isMatch( object , source )
  // isMatchWith( object , source , customizer )
  //

  it( 'isMatch , isMatchWith' , function () {

    _.isMatch(
      { name : 'lodash' , license : 'MIT' } ,
      { license : 'MIT' }
    ).should.be.true

    _.isMatchWith(
      { name : 'lodash' , license : 'MIT' } ,
      { license : 'MIT' } ,
      ( objVal , srcVal , key , object , source ) => objVal === srcVal
    ).should.be.true

  } )


  // isEmpty( value )
  it( 'isEmpty' , function () {
    _.isEmpty( '' ).should.be.true
    _.isEmpty( {} ).should.be.true
    _.isEmpty( _.create( { foo : 'bar' } ) ).should.be.true
    _.isEmpty( [] ).should.be.true
    _.isEmpty( { length : 0 } ).should.be.false
    _.isEmpty( new Set() ).should.be.true
    _.isEmpty( new WeakSet() ).should.be.true
    _.isEmpty( new Map() ).should.be.true
    _.isEmpty( new WeakMap() ).should.be.true
  } )


  //
  // clone( value )
  // cloneWith( value , customizer )
  // cloneDeep( value )
  // cloneDeepWith( value , customizer )
  //

  it( 'clone , cloneWith , cloneDeep , cloneDeepWith' , function () {

    let array
    let clone

    // clone( value )
    array = [ [ 0 ] ]
    clone = _.clone( array )
    clone[ 0 ][ 0 ] = 1
    array[ 0 ][ 0 ].should.equal( 1 )

    // cloneWith( value , customizer )
    array = [ [ 0 ] ]
    clone = _.cloneWith( array , ( value , index , array ) => value )
    clone[ 0 ][ 0 ] = 1
    array[ 0 ][ 0 ].should.equal( 1 )

    // cloneDeep( value )
    array = [ [ 0 ] ]
    clone = _.cloneDeep( array )
    clone[ 0 ][ 0 ] = 1
    array[ 0 ][ 0 ].should.equal( 0 )

    // cloneDeepWith( value , customizer )
    array = [ [ 0 ] ]
    clone = _.cloneDeepWith( array , ( value , index , array ) => _.cloneDeep( value ) )
    clone[ 0 ][ 0 ] = 1
    array[ 0 ][ 0 ].should.equal( 0 )

  } )


  //
  // castArray( value )
  // 等同于：
  //    if ( arguments.length === 0 ) {
  //      return []
  //    }
  //    const value = arguments[ 0 ]
  //    return isArray( value ) ? value : [ value ]
  //

  it( 'castArray' , function () {

    _.castArray()
      .should.be.an( 'array' )
      .that.is.empty

    _.castArray( [ 'foo' , 'bar' ] )
      .should.be.an( 'array' )
      .that.is.deep.equal( [ 'foo' , 'bar' ] )

    _.castArray( 'foo' , 'bar' )
      .should.be.an( 'array' )
      .that.is.deep.equal( [ 'foo' ] )

  } )


  //
  // toNumber( value )
  // toInteger( value )
  // toSafeInteger( value )
  // toString( value )
  // toPlainObject( value )
  // toArray( value )
  //

  it( 'toNumber , toInteger , toSafeInteger , toString , toPlainObject , toArray' , function () {

    const makeIterable = function ( n ) {
      let i = 0
      const iterator = {
        next() {
          if ( i === n ) {
            return { done : true }
          } else {
            i += 1
            return { done : false , value : [ i , i ] }
          }
        }
      }
      return { [ Symbol.iterator ]() { return iterator } }
    }


    //
    // toNumber( value )
    // toInteger( value )
    // toSafeInteger( value )
    //

    _.toNumber( '010' ).should.equal( 10 )
    _.toNumber( '0o10' ).should.equal( 8 )
    _.toNumber( '0x10' ).should.equal( 16 )
    _.toNumber( Symbol( 'foo' ) ).should.be.nan
    _.toNumber( Symbol.for( 'foo' ) ).should.be.nan
    _.toNumber( { valueOf() { return '0x10' } } ).should.equal( 16 )
    _.toNumber( { toString() { return '0x10' } } ).should.equal( 16 )


    //
    // toString( value )
    //

    _.toString( null ).should.equal( '' )
    _.toString( undefined ).should.equal( '' )
    _.toString( Symbol( 'foo' ) ).should.equal( 'Symbol(foo)' )
    _.toString( Symbol.for( 'foo' ) ).should.equal( 'Symbol(foo)' )
    _.toString( -0 ).should.equal( '-0' )


    //
    // toPlainObject( value )
    //

    _.toPlainObject( _.create( { foo : 'bar' } ) )
      .should.have.ownProperty( 'foo' )


    //
    // toArray( value )
    //

    // Falsy Values
    _.toArray( +0 ).should.be.an( 'array' ).that.is.empty
    _.toArray( -0 ).should.be.an( 'array' ).that.is.empty
    _.toArray( 0 / 0 ).should.be.an( 'array' ).that.is.empty
    _.toArray( '' ).should.be.an( 'array' ).that.is.empty
    _.toArray( false ).should.be.an( 'array' ).that.is.empty
    _.toArray( null ).should.be.an( 'array' ).that.is.empty
    _.toArray( undefined ).should.be.an( 'array' ).that.is.empty

    // Array-Like
    _.toArray( 'foo' )
      .should.be.an( 'array' )
      .that.is.deep.equal( [ 'f' , 'o' , 'o' ] )
    _.toArray( { length : 2 , 0 : 'foo' , 1 : 'bar' } )
      .should.be.an( 'array' )
      .that.is.deep.equal( [ 'foo' , 'bar' ] )

    // Iterable
    _.toArray( makeIterable( 1 ) )
      .should.be.an( 'array' )
      .that.is.deep.equal( [ [ 1 , 1 ] ] )

    // Map & Set
    _.toArray( new Set( makeIterable( 1 ) ) )
      .should.be.an( 'array' )
      .that.is.deep.equal( [ [ 1 , 1 ] ] )
    _.toArray( new Map( makeIterable( 1 ) ) )
      .should.be.an( 'array' )
      .that.is.deep.equal( [ [ 1 , 1 ] ] )

    // Object
    _.toArray( _.create( { foo : 1 } , { bar : 2 } ) )
      .should.be.an( 'array' )
      .that.is.deep.equal( [ 2 ] )

  } )


  //
  // lt( value , other )
  // gt( value , other )
  // lte( value , other )
  // gte( value , other )
  // eq( value , other )
  //

  it( 'lt , lte , eq , gt , gte' , function () {

    _.lt( 1 , 2 ).should.be.true
    _.gt( 2 , 1 ).should.be.true
    _.lte( 1 , 2 ).should.be.true
    _.gte( 2 , 1 ).should.be.true

    // SameValueZero
    _.eq( {} , {} ).should.be.false
    _.eq( 0 / 0 , 0 / 0 ).should.be.true

  } )

} )
