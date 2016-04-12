'use strict'

const _ = require( 'lodash' )
    , chai = require( 'chai' )

before( chai.should )

describe( 'lodash/lang'
        , function () {

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

            it( 'isNull , isUndefined , isNil'
              , function () {

                  _.isNull( null ).should.be.true
                  _.isNull( undefined ).should.be.false

                  _.isUndefined( null ).should.be.false
                  _.isUndefined( undefined ).should.be.true

                  _.isNil( null ).should.be.true
                  _.isNil( undefined ).should.be.true

                }
              )
            it( 'isNumber , isInteger , isSafeInteger , isFinite , isNaN'
              , function () {
                  _.isNumber( 0 ).should.be.true
                  _.isInteger( Math.PI ).should.be.false
                  _.isSafeInteger( Number.MAX_SAFE_INTEGER + 1 ).should.be.false
                  _.isSafeInteger( Number.MIN_SAFE_INTEGER - 1 ).should.be.false
                  _.isFinite( 1 / 0 ).should.be.false
                  _.isNaN( 0 / 0 ).should.be.true
                  _.isNaN( '' ).should.be.false
                  _.isNaN( undefined ).should.be.false
                }
              )
            it( 'isString'
              , function () {
                  _.isString( '' ).should.be.true
                  _.isString( new String( '' ) ).should.be.true
                }
              )
            it( 'isBoolean'
              , function () {
                  _.isBoolean( true ).should.be.true
                  _.isBoolean( false ).should.be.true
                  _.isBoolean( new Boolean( true ) ).should.be.true
                  _.isBoolean( new Boolean( false ) ).should.be.true
                }
              )
            it( 'isObject , isObjectLike , isPlainObject'
              , function () {

                  // isObject( value ) 等同于：
                  //    const type = typeof value
                  //    !!value && ( type === 'object' || type === 'function' )
                  _.isObject( null ).should.be.false
                  _.isObject( {} ).should.be.true
                  _.isObject( _.noop ).should.be.true


                  // isObjectLike( value ) 等同于：
                  //    !!value && typeof value === 'object'
                  _.isObjectLike( null ).should.be.false
                  _.isObjectLike( {} ).should.be.true
                  _.isObjectLike( _.noop ).should.be.false

                  _.isPlainObject( {} ).should.be.true
                  _.isPlainObject( _.create( null ) ).should.be.true
                  _.isPlainObject( new class {} ).should.be.false

                }
              )
            it( 'isArray , isArrayLike , isArrayLikeObject , isArguments'
              , function () {

                  _.isArguments( arguments ).should.be.true

                  // isArray( value ) 等同于：
                  //    Array.isArray( value )
                  _.isArray( [] ).should.be.true
                  _.isArray( '' ).should.be.false
                  _.isArray( _.noop ).should.be.false
                  _.isArray( arguments ).should.be.false

                  // isArrayLike( value ) 等同于：
                  //    value != null && isLength( getLength( value ) ) && !isFunction( value )
                  _.isArrayLike( [] ).should.be.true
                  _.isArrayLike( '' ).should.be.true
                  _.isArrayLike( _.noop ).should.be.false
                  _.isArrayLike( arguments ).should.be.true

                  // isArrayLikeObject( value ) 等同于：
                  //    isObjectLike( value ) && isArrayLike( value )
                  _.isArrayLikeObject( [] ).should.be.true
                  _.isArrayLikeObject( '' ).should.be.false
                  _.isArrayLikeObject( _.noop ).should.be.false
                  _.isArrayLikeObject( arguments ).should.be.true

                }
              )
            it( 'isFunction'
              , function () {
                  _.isFunction( () => null ).should.be.true
                  _.isFunction( function () {} ).should.be.true
                  _.isFunction( function* () {} ).should.be.true
                }
              )
            it( 'isDate'
              , function () {
                  _.isDate( new Date ).should.be.true
                }
              )
            it( 'isRegExp'
              , function () {
                  _.isRegExp( /^/ ).should.be.true
                  _.isRegExp( new RegExp ).should.be.true
                }
              )
            it( 'isSymbol'
              , function () {
                  _.isSymbol( Symbol() ).should.be.true
                  _.isSymbol( Symbol.for( '' ) ).should.be.true
                }
              )
            it( 'isSet , isWeakSet , isMap , isWeakMap'
              , function () {
                  _.isSet( new Set ).should.be.true
                  _.isWeakSet( new WeakSet ).should.be.true
                  _.isMap( new Map ).should.be.true
                  _.isWeakMap( new WeakMap ).should.be.true
                }
              )


            // isEmpty( value )
            it( 'isEmpty( value )'
              , function () {
                  _.isEmpty( '' ).should.be.true
                  _.isEmpty( {} ).should.be.true
                  _.isEmpty( _.create( { foo : 'bar' } ) ).should.be.true
                  _.isEmpty( [] ).should.be.true
                  _.isEmpty( new Set ).should.be.true
                  _.isEmpty( new WeakSet ).should.be.true
                  _.isEmpty( new Map ).should.be.true
                  _.isEmpty( new WeakMap ).should.be.true
                }
              )


            //
            // clone( value )
            // cloneWith( value , customizer )
            // cloneDeep( value )
            // cloneDeepWith( value , customizer )
            //

            it( 'clone , cloneWith , cloneDeep , cloneDeepWith'
              , function () {

                  let array
                    , clone

                  // clone( value )
                  array = [ [ 0 ] ]
                  clone = _.clone( array )
                  clone[ 0 ][ 0 ] = 1
                  array[ 0 ][ 0 ].should.equal( 1 )

                  // cloneWith( value , customizer )
                  array = [ [ 0 ] ]
                  clone = _.cloneWith( array
                                     , ( value , index , array ) => value
                                     )
                  clone[ 0 ][ 0 ] = 1
                  array[ 0 ][ 0 ].should.equal( 1 )

                  // cloneDeep( value )
                  array = [ [ 0 ] ]
                  clone = _.cloneDeep( array )
                  clone[ 0 ][ 0 ] = 1
                  array[ 0 ][ 0 ].should.equal( 0 )

                  // cloneDeepWith( value , customizer )
                  array = [ [ 0 ] ]
                  clone = _.cloneDeepWith( array
                                         , ( value , index , array ) => _.cloneDeep( value )
                                         )
                  clone[ 0 ][ 0 ] = 1
                  array[ 0 ][ 0 ].should.equal( 0 )

                }
              )


            //
            // castArray( value )
            // 等同于：
            //    if ( arguments.length === 0 ) {
            //      return []
            //    }
            //    const value = arguments[ 0 ]
            //    return isArray( value ) ? value : [ value ]
            //

            it( 'castArray' , _.noop )


            //
            // toNumber( value )
            // toInteger( value )
            // toSafeInteger( value )
            // toString( value )
            // toPlainObject( value )
            // toArray( value )
            //

            it( 'toNumber , toInteger , toSafeInteger , toString , toPlainObject , toArray'
              , function () {

                  _.toString( null ).should.equal( '' )
                  _.toString( undefined ).should.equal( '' )
                  _.toString( Symbol( 'foo' ) ).should.equal( 'Symbol(foo)' )
                  _.toString( Symbol.for( 'foo' ) ).should.equal( 'Symbol(foo)' )
                  _.toString( -0 ).should.equal( '-0' )

                }
              )


            //
            // lt( value , other )
            // lte( value , other )
            // eq( value , other )
            // gt( value , other )
            // gte( value , other )
            //

            it( 'lt , lte , eq , gt , gte'
              , function () {

                  _.lt( 1 , 2 ).should.be.true
                  _.gt( 2 , 1 ).should.be.true
                  _.lte( 1 , 2 ).should.be.true
                  _.gte( 2 , 1 ).should.be.true

                  // SameValueZero
                  _.eq( {} , {} ).should.be.false
                  _.eq( 0 / 0 , 0 / 0 ).should.be.true

                }
              )

          }
        )
