const is = require( '@pwn/is' )
const chai = require( 'chai' )
const expect = chai.expect
const noop = require( 'lodash.noop' )

before( chai.should )

describe( 'BDD' , function () {

  //
  // a( type , [message] )
  // alias: an( type , [message] )
  // 判断依据：Object.prototype.toString
  // 类型：chainableMethod（chainingBehavior 为 noop）
  //

  it( 'a , an' , function () {

    expect( null ).to.be.a( 'null' )
    expect( undefined ).to.be.an( 'undefined' )
    expect( 0 ).to.be.a( 'number' )
    expect( '' ).to.be.a( 'string' )
    expect( true ).to.be.a( 'boolean' )
    expect( {} ).to.be.an( 'object' )
    expect( [] ).to.be.an( 'array' )
    expect( noop ).to.be.a( 'function' )
    expect( () => null ).to.be.a( 'function' )
    expect( function* () {} ).to.be.a( 'generatorfunction' )
    expect( /^/ ).to.be.a( 'regexp' )
    expect( new Date() ).to.be.a( 'date' )
    expect( Symbol() ).to.be.a( 'symbol' )
    expect( new Set() ).to.be.a( 'set' )
    expect( new WeakSet() ).to.be.a( 'weakset' )
    expect( new Map() ).to.be.a( 'map' )
    expect( new WeakMap() ).to.be.a( 'weakmap' )

    // ;( null ).should.be.a( 'null' )
    // ;( undefined ).should.be.an( 'undefined' )
    ;( 0 ).should.be.a( 'number' )
    ;( '' ).should.be.a( 'string' )
    ;( true ).should.be.a( 'boolean' )
    ;( {} ).should.be.an( 'object' )
    ;( [] ).should.be.an( 'array' )
    ;( noop ).should.be.a( 'function' )
    ;( () => null ).should.be.a( 'function' )
    ;( function* () {} ).should.be.a( 'generatorfunction' )
    ;( /^/ ).should.be.a( 'regexp' )
    ;( new Date() ).should.be.a( 'date' )
    ;( Symbol() ).should.be.a( 'symbol' )
    ;( new Set() ).should.be.a( 'set' )
    ;( new WeakSet() ).should.be.a( 'weakset' )
    ;( new Map() ).should.be.a( 'map' )
    ;( new WeakMap() ).should.be.a( 'weakmap' )

  } )


  //
  // include( value , [message] )
  // alias: contain( value , [message] )
  // 类型：chainableMethod（chainingBehavior 设置 contains flag）
  //

  it( 'include(contain)' , function () {

    expect( 'string' ).to.include( 'str' )                              // [1] String
    expect( [ { foo : 'bar' } , 'baz' ] ).to.include( { foo : 'bar' } ) // [2] Array(支持 deepEqual)
    expect( [ [ 1 ] , 2 , 3 ] ).to.not.include( 1 )                     // top-level only

    'string'.should.include( 'str' )                                // [1] String
    ;[ { foo : 'bar' } , 'baz' ].should.include( { foo : 'bar' } )  // [2] Array(支持 deepEqual)
    ;[ [ 1 ] , 2 , 3 ].should.not.include( 1 )                      // top-level only

  } )


  //
  // ok|true|false
  // 类型：property
  //

  it( 'ok , true , false' , function () {

    expect( 1 ).to.be.ok
    expect( 0 ).to.not.be.ok
    expect( true ).to.be.true
    expect( 1 ).to.not.be.true
    expect( false ).to.be.false
    expect( 0 ).to.not.be.false

    ;( 1 ).should.be.ok
    ;( 0 ).should.not.be.ok
    ;( true ).should.be.true
    ;( 1 ).should.not.be.true
    ;( false ).should.be.false
    ;( 0 ).should.not.be.false

  } )


  //
  // null|undefined|exist
  // 类型：property
  //

  it( 'null , undefined , exist' , function () {

    expect( null ).to.be.null
    expect( undefined ).to.not.be.null

    expect( undefined ).to.be.undefined
    expect( null ).to.not.be.undefined

    expect( null ).to.not.exist
    expect( undefined ).to.not.exist

  } )


  //
  // NaN
  // 类型：property
  //

  it( 'NaN' , function () {

    expect( 0 / 0 ).to.be.NaN
    expect( 'one' ).to.be.NaN // 未对非数值类型进行过滤

    ;( 0 / 0 ).should.be.NaN
    'one'.should.be.NaN // 未对非数值类型进行过滤

  } )


  //
  // empty
  // 类型：property
  //

  it( 'empty' , function () {

    expect( '' ).to.be.empty // [1] String
    expect( [] ).to.be.empty // [2] Array
    expect( {} ).to.be.empty // [3] Object
    expect( Object.create( { foo : 'bar' } ) ).to.be.empty
    expect( { length : 0 } ).to.not.be.empty

    ''.should.be.empty      // [1] String
    ;( [] ).should.be.empty // [2] Array
    ;( {} ).should.be.empty // [3] Object
    Object.create( { foo : 'bar' } ).should.be.empty
    ;( { length : 0 } ).should.not.be.empty

  } )


  //
  // arguments
  // 判断依据：Object.prototype.toString
  // 类型：property
  //

  it( 'arguments' , function () {

    const argumentsLikeObject = { caller() {} , callee() {} , length : 1 }

    expect( arguments ).to.be.arguments
    expect( argumentsLikeObject ).to.not.be.arguments

    arguments.should.be.arguments
    ;( argumentsLikeObject ).should.not.be.arguments

  } )


  //
  // equal( value , [message] )
  // 类型：method
  // 相关 flag：deep
  //
  // eql( value , [message] )
  // 类型：method
  //

  it( 'equal , eql' , function () {

    expect( 1 ).to.equal( 1 )
    expect( 1 ).to.not.equal( '1' ) // strict-equal
    expect( [ 1 , 2 ] ).to.not.equal( [ 1 , 2 ] )
    expect( [ 1 , 2 ] ).to.eql( [ 1 , 2 ] )
    expect( [ 1 , 2 ] ).to.deep.equal( [ 1 , 2 ] ) // deep-flag

    ;( 1 ).should.equal( 1 )
    ;( 1 ).should.not.equal( '1' ) // strict-equal
    ;[ 1 , 2 ].should.not.equal( [ 1 , 2 ] )
    ;[ 1 , 2 ].should.eql( [ 1 , 2 ] )
    ;[ 1 , 2 ].should.deep.equal( [ 1 , 2 ] ) // deep-flag

  } )


  //
  // gt|greaterThan|above( value , [message] )
  // lt|lessThan|below( value , [message] )
  // gte|least( value , [message] )
  // lte|most( value , [message] )
  // within( min , max , [message] )
  // 相关 flag：doLength
  // 类型：method
  //

  it( 'gt , lt , gte , lte , within' , function () {

    expect( 2 ).to.be.above( 1 )
    expect( 1 ).to.be.below( 2 )
    expect( 2 ).to.be.at.least( 1 )
    expect( 1 ).to.be.at.most( 2 )
    expect( 7 ).to.be.within( 1 , 10 )
    expect( 'string' ).to.have.length.above( 1 )        // String & Array
    expect( 'string' ).to.have.length.below( 7 )        // String & Array
    expect( 'string' ).to.have.length.of.at.least( 1 )  // String & Array
    expect( 'string' ).to.have.length.of.at.most( 7 )   // String & Array
    expect( 'string' ).to.have.length.within( 1 , 10 )  // String & Array

    ;( 2 ).should.be.above( 1 )
    ;( 1 ).should.be.below( 2 )
    ;( 2 ).should.be.at.least( 1 )
    ;( 1 ).should.be.at.most( 2 )
    ;( 7 ).should.be.within( 1 , 10 )
    ;[ 1 , 2 ].should.have.length.above( 1 )          // String & Array
    ;[ 1 , 2 ].should.have.length.below( 5 )          // String & Array
    ;[ 1 , 2 ].should.have.length.of.at.least( 1 )    // String & Array
    ;[ 1 , 2 ].should.have.length.of.at.most( 5 )     // String & Array
    ;[ 1 , 2 ].should.have.length.within( 1 , 10 )    // String & Array

  } )


  //
  // instanceof( constructor , [message] )
  // alias: instanceOf( constructor , [message] )
  // 类型：method
  //

  it( 'instanceof' , function () {

    const proto = {}
    const Stub = class Stub {}
    const obj = new Stub()

    expect( obj ).to.be.instanceOf( Stub )
    obj.should.be.instanceOf( Stub )

    Reflect.setPrototypeOf( obj , proto )

    expect( obj ).to.not.be.instanceOf( Stub )
    obj.should.not.be.instanceOf( Stub )

  } )


  //
  // property( key , [value] , [message] )
  // 相关 flag：deep
  // 类型：method
  //
  // ownProperty( key , [message] )
  // ownPropertyDescriptor( key , [descriptor] , [message] )
  // 类型：method
  //

  it( 'property , ownProperty , ownPropertyDescriptor' , function () {

    // property( key , [value] , [message] )
    expect( Object.create( { foo : 'bar' } ) ).to.have.property( 'foo' )
    expect( { foo : 'bar' } ).to.have.property( 'foo' )
    expect( { foo : 'bar' } ).to.have.property( 'foo' , 'bar' )
    expect( { foo : { bar : 'baz' } } ).to.have.deep.property( 'foo.bar' )
    expect( { foo : { bar : 'baz' } } ).to.have.deep.property( 'foo.bar' , 'baz' )
    ;( Object.create( { foo : 'bar' } ) ).should.have.property( 'foo' )
    ;( { foo : 'bar' } ).should.have.property( 'foo' )
    ;( { foo : 'bar' } ).should.have.property( 'foo' , 'bar' )
    ;( { foo : { bar : 'baz' } } ).should.have.deep.property( 'foo.bar' )
    ;( { foo : { bar : 'baz' } } ).should.have.deep.property( 'foo.bar' , 'baz' )

    // property() 调用后更改当前断言主体为指定属性的值
    expect( { foo : 'bar' } ).to.have.property( 'foo' ).that.is.equal( 'bar' )
    ;( { foo : 'bar' } ).should.have.property( 'foo' ).that.is.equal( 'bar' )

    // ownProperty( key , [message] )
    expect( Object.create( { foo : 'bar' } ) ).to.not.have.ownProperty( 'foo' )
    expect( { foo : 'bar' } ).to.have.ownProperty( 'foo' )
    ;( Object.create( { foo : 'bar' } ) ).should.not.have.ownProperty( 'foo' )
    ;( { foo : 'bar' } ).should.have.ownProperty( 'foo' )

    // ownPropertyDescriptor( key , [descriptor] , [message] )
    /* eslint-disable indent */
    expect( 'string' ).to.have.ownPropertyDescriptor( 'length' )
    expect( 'string' ).to.have
      .ownPropertyDescriptor(
        'length' ,
        {
          value : 6 ,
          writable : false ,
          enumerable : false ,
          configurable : false
        }
      )
    'string'.should.have.ownPropertyDescriptor( 'length' )
    'string'.should.have
      .ownPropertyDescriptor(
        'length' ,
        {
          value : 6 ,
          writable : false ,
          enumerable : false ,
          configurable : false
        }
      )
    /* eslint-enable indent */

    // ownPropertyDescriptor() 调用后更改当前断言主体为指定属性的描述符
    expect( 'string' ).to.have.ownPropertyDescriptor( 'length' ).that.is.an( 'object' )
    'string'.should.have.ownPropertyDescriptor( 'length' ).that.is.an( 'object' )

  } )


  //
  // length
  // 类型：chainableMethod（chainingBehavior 设置 doLength flag）
  //
  // lengthOf( value , [message] )
  // 类型：method
  //

  it( 'length , lengthOf' , function () {

    expect( [ null ] ).to.have.length.of( 1 )       // [1] Array
    expect( 'null' ).to.have.length.of( 4 )         // [2] String
    expect( { length : 1 } ).to.have.length.of( 1 ) // [3] Array-Like Object
    expect( [ null ] ).to.have.lengthOf( 1 )        // [1] Array
    expect( 'null' ).to.have.lengthOf( 4 )          // [2] String
    expect( { length : 1 } ).to.have.lengthOf( 1 )  // [3] Array-Like Object

    ;[ null ].should.have.length.of( 1 )            // [1] Array
    'null'.should.have.length.of( 4 )               // [2] String
    ;( { length : 1 } ).should.have.length.of( 1 )  // [3] Array-Like Object
    ;[ null ].should.have.lengthOf( 1 )             // [1] Array
    'null'.should.have.lengthOf( 4 )                // [2] String
    ;( { length : 1 } ).should.have.lengthOf( 1 )   // [3] Array-Like Object

  } )


  //
  // match|matches( regex , [message] )
  // string( substring , [message] )
  // 类型：method
  //

  it( 'match , matches , string' , function () {

    expect( '' ).to.match( /^\s*$/ )
    expect( 'foobar' ).to.have.string( 'foo' )

    ''.should.match( /^\s*$/ )
    'foobar'.should.have.string( 'foo' )

  } )


  //
  // key|keys( ...keys )
  // 相关 flag：any|all|contain，其中 any 及 all 互斥（默认使用 all）
  // 类型：method
  //

  it( 'key , keys' , function () {

    // [1] any（此时 contain 及 have 等价）
    expect( { foo : 1 , bar : 2 } ).to.have.any.keys( 'foo' , 'baz' )
    expect( { foo : 1 , bar : 2 } ).to.contain.any.keys( 'foo' , 'baz' )
    ;( { foo : 1 , bar : 2 } ).should.have.any.keys( 'foo' , 'baz' )
    ;( { foo : 1 , bar : 2 } ).should.contain.any.keys( 'foo' , 'baz' )

    // [2] contain+all
    expect( { foo : 1 , bar : 2 } ).to.contain.all.keys( 'foo' )
    ;( { foo : 1 , bar : 2 } ).should.contain.all.keys( 'foo' )

    // [3] have+all
    expect( { foo : 1 , bar : 2 } ).to.have.all.keys( 'foo' , 'bar' )
    ;( { foo : 1 , bar : 2 } ).should.have.all.keys( 'foo' , 'bar' )

  } )


  //
  // throw|throws|Throw( ... )
  // 类型：method
  //

  it( 'throw , throws , Throw' , function () {

    let func = null

    class Exception extends Error {}

    // [1] throw()
    func = () => { throw new Error() }
    expect( func ).to.throw()
    func.should.throw

    // [2] throw( constructor , [message] )
    func = () => { throw new Exception() }
    expect( func ).to.throw( Exception )
    func.should.throw( Exception )

    // [3] throw( string|regex , [message] )
    func = () => { throw 'description' }
    expect( func ).to.throw( 'description' )
    expect( func ).to.throw( /^description$/ )
    func.should.throw( 'description' )
    func.should.throw( /^description$/ )

    // [4] throw( constructor , string|regex , [message] )
    func = () => { throw new Exception( 'description' ) }
    expect( func ).to.throw( Exception , 'description' )
    expect( func ).to.throw( Exception , /^description$/ )
    func.should.throw( Exception , 'description' )
    func.should.throw( Exception , /^description$/ )

  } )


  //
  // respondTo( method , [message] )
  // 相关 flag：itself
  // 类型：method
  //

  it( 'respondTo' , function () {

    class Stub { instanceMethod() {} }
    Stub.staticMethod = noop

    expect( new Stub() ).to.respondTo( 'instanceMethod' )
    expect( Stub ).to.respondTo( 'instanceMethod' )
    expect( Stub ).to.not.respondTo( 'staticMethod' )
    expect( Stub ).itself.to.respondTo( 'staticMethod' )

    ;( new Stub() ).should.respondTo( 'instanceMethod' )
    ;( Stub ).should.respondTo( 'instanceMethod' )
    Stub.should.not.respondTo( 'staticMethod' )
    Stub.should.itself.respondTo( 'staticMethod' )

  } )


  //
  // satisfy|satisfies( func , [message] )
  // 类型：method
  //

  it( 'satisfy' , function () {

    expect( 2 ).to.satisfy( is.even )
    expect( 1 ).to.not.satisfy( is.even )

    ;( 2 ).should.satisfy( is.even )
    ;( 1 ).should.not.satisfy( is.even )

  } )


  //
  // closeTo( expected , delta , [message] )
  // alias: approximately( expected , delta , [message] )
  // 类型：method
  //

  it( 'closeTo' , function () {
    expect( 0.3 - 0.2 ).to.be.closeTo( 0.1 , Number.EPSILON )
    ;( 0.3 - 0.2 ).should.be.closeTo( 0.1 , Number.EPSILON )
  } )


  //
  // members( subset , [message] )
  // 相关 flag：include , deep
  // 类型：method
  //

  it( 'members' , function () {

    const obj1 = { foo : 'bar' }
    const obj2 = { foo : 'bar' }

    expect( [ 1 , 3 , 2 ] ).to.include.members( [ 2 , 3 ] )
    expect( [ obj1 ] ).to.not.include.members( [ obj2 ] )
    expect( [ obj1 ] ).to.include.deep.members( [ obj2 ] )
    expect( [ 1 , 3 , 2 ] ).to.have.members( [ 2 , 1 , 3 ] )
    expect( [ obj1 ] ).to.not.have.members( [ obj2 ] )
    expect( [ obj1 ] ).to.have.deep.members( [ obj2 ] )

    ;[ 1 , 3 , 2 ].should.include.members( [ 2 , 3 ] )
    ;[ obj1 ].should.not.include.members( [ obj2 ] )
    ;[ obj1 ].should.include.deep.members( [ obj2 ] )
    ;[ 1 , 3 , 2 ].should.have.members( [ 2 , 1 , 3 ] )
    ;[ obj1 ].should.not.have.members( [ obj2 ] )
    ;[ obj1 ].should.have.deep.members( [ obj2 ] )

  } )


  //
  // oneOf( list , [message] )
  // 类型：method
  //

  it( 'oneOf' , function () {

    expect( 1 ).to.be.oneOf( [ 1 , 2 ] )
    expect( 1 ).to.not.be.oneOf( [ [ 1 ] , 2 ] ) // top-level only
    expect( { foo : 1 } ).to.not.be.oneOf( [ { foo : 1 } ] )

    ;( 1 ).should.be.oneOf( [ 1 , 2 ] )
    ;( 1 ).should.not.be.oneOf( [ [ 1 ] , 2 ] )  // top-level only
    ;( { foo : 1 } ).should.not.be.oneOf( [ { foo : 1 } ] )

  } )


  //
  // change|changes( object , key , [message] )
  // increase|increases( object , key , [message] )
  // decrease|decreases( object , key , [message] )
  // 类型：chainableMethod（chainingBehavior 为 noop）
  //

  it( 'change , increase , decrease' , function () {

    const KEY = 'KEY'
    const obj = { [ KEY ] : 0 }
    const func = () => { obj[ KEY ] = 1 }

    obj[ KEY ] = 0
    expect( func ).to.change( obj , KEY )
    obj[ KEY ] = 0
    func.should.change( obj , KEY )

    obj[ KEY ] = 0
    expect( func ).to.increase( obj , KEY )
    obj[ KEY ] = 0
    func.should.increase( obj , KEY )
    obj[ KEY ] = 1
    expect( func ).to.not.increase( obj , KEY )
    obj[ KEY ] = 1
    func.should.not.increase( obj , KEY )

    obj[ KEY ] = 2
    expect( func ).to.decrease( obj , KEY )
    obj[ KEY ] = 2
    func.should.decrease( obj , KEY )
    obj[ KEY ] = 1
    expect( func ).to.not.decrease( obj , KEY )
    obj[ KEY ] = 1
    func.should.not.decrease( obj , KEY )

  } )


  //
  // extensible|sealed|frozen
  // 类型：property
  //

  it( 'extensible , sealed , frozen' , function () {

    let obj

    // empty object
    obj = {}

    expect( obj ).to.be.extensible
    expect( obj ).to.not.be.sealed
    expect( obj ).to.not.be.frozen
    obj.should.be.extensible
    obj.should.not.be.sealed
    obj.should.not.be.frozen

    Reflect.preventExtensions( obj )
    expect( obj ).to.not.be.extensible
    expect( obj ).to.be.sealed  // empty
    expect( obj ).to.be.frozen  // empty
    obj.should.not.be.extensible
    obj.should.be.sealed  // empty
    obj.should.be.frozen  // empty

    Object.seal( obj )
    expect( obj ).to.not.be.extensible
    expect( obj ).to.be.sealed
    expect( obj ).to.be.frozen // empty
    obj.should.not.be.extensible
    obj.should.be.sealed
    obj.should.be.frozen // empty

    Object.freeze( obj )
    expect( obj ).to.not.be.extensible
    expect( obj ).to.be.sealed
    expect( obj ).to.be.frozen
    obj.should.not.be.extensible
    obj.should.be.sealed
    obj.should.be.frozen

    // non-empty object
    obj = { foo : 'bar' }

    expect( obj ).to.be.extensible
    expect( obj ).to.not.be.sealed
    expect( obj ).to.not.be.frozen
    obj.should.be.extensible
    obj.should.not.be.sealed
    obj.should.not.be.frozen

    Reflect.preventExtensions( obj )
    expect( obj ).to.not.be.extensible
    expect( obj ).to.not.be.sealed
    expect( obj ).to.not.be.frozen
    obj.should.not.be.extensible
    obj.should.not.be.sealed
    obj.should.not.be.frozen

    Object.seal( obj )
    expect( obj ).to.not.be.extensible
    expect( obj ).to.be.sealed
    expect( obj ).to.not.be.frozen
    obj.should.not.be.extensible
    obj.should.be.sealed
    obj.should.not.be.frozen

    Object.freeze( obj )
    expect( obj ).to.not.be.extensible
    expect( obj ).to.be.sealed
    expect( obj ).to.be.frozen
    obj.should.not.be.extensible
    obj.should.be.sealed
    obj.should.be.frozen

  } )

} )
