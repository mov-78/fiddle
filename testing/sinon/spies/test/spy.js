'use strict'

const chai = require( 'chai' )
    , sinon = require( 'sinon' )
    , expect = chai.expect

before( function () {

          chai.should()

          chai
            .use( function ( _chai, _util ) {
                    _chai.Assertion
                      .addProperty( 'spyCall'
                                  , function () {

                                      const subject = this._obj

                                      subject.should.have.ownProperty( 'args' )
                                      subject.should.have.ownProperty( 'returnValue' )
                                      subject.should.have.ownProperty( 'thisValue' )
                                      subject.should.have.ownProperty( 'exception' )

                                      subject.should.have.property( 'calledOn' )
                                      subject.should.have.property( 'calledWith' )
                                      subject.should.have.property( 'notCalledWith' )
                                      subject.should.have.property( 'calledWithExactly' )
                                      subject.should.have.property( 'calledWithMatch' )
                                      subject.should.have.property( 'notCalledWithMatch' )
                                      subject.should.have.property( 'threw' )

                                    }
                                  )
                  }
                )

        }
      )


//
// 创建 Spy：
//    - sinon.spy( [func] )
//    - sinon.spy( obj, method )
//    - spy.restore()
//

describe( 'Creating spies'
        , function () {

            // [1] sinon.spy()
            it( 'with sinon.spy()'
              , function () {

                  // bare spy
                  const bareSpy = sinon.spy()

                  bareSpy.should.exist
                  bareSpy.should.be.a( 'function' )

                }
              )

            // [2] sinon.spy( func )
            it( 'with sinon.spy( func )'
              , function () {

                  let called = false
                  const func = () => { called = true }
                      , spy = sinon.spy( func )

                  spy.should.exist
                  spy.should.be.a( 'function' )

                  // delegates to the original function
                  spy.should.not.equal( func )
                  spy()
                  called.should.be.true

                }
              )

            // [3] sinon.spy( obj, method )
            it( 'with sinon.spy( obj, method )'
              , function () {

                  let called = false
                  const obj = { method() { called = true } }
                      , _method = obj.method
                      , spy = sinon.spy( obj, 'method' )

                  spy.should.exist
                  spy.should.be.a( 'function' )

                  // overrides original method
                  obj.method.should.equal( spy )
                  obj.method.should.not.equal( _method )

                  // but will delegates to the original method
                  obj.method()
                  called.should.be.true

                  // and can be restored
                  spy.restore()
                  obj.method.should.not.equal( spy )
                  obj.method.should.equal( _method )

                }
              )

          }
        )


//
// Spy 相关属性、接口
//

describe( 'Spy'
        , function () {

            let spy

            beforeEach( function () {
                          spy = sinon.spy()
                        }
                      )


            //
            // spy.args
            // spy.returnValues
            // spy.thisValues
            // spy.exceptions
            //

            it( '#args'
              , function () {

                  spy(); spy( 1 ); spy( 2, 3 )

                  spy.args.should.be.an( 'array' )

                  spy.args[ 0 ].should.equal( spy.getCall( 0 ).args )
                  spy.args[ 0 ].should.be.an( 'array' )
                  spy.args[ 0 ].should.deep.equal( [] )

                  spy.args[ 1 ].should.equal( spy.getCall( 1 ).args )
                  spy.args[ 1 ].should.be.an( 'array' )
                  spy.args[ 1 ].should.deep.equal( [ 1 ] )

                  spy.args[ 2 ].should.equal( spy.getCall( 2 ).args )
                  spy.args[ 2 ].should.be.an( 'array' )
                  spy.args[ 2 ].should.deep.equal( [ 2, 3 ] )

                }
              )
            it( '#returnValues'
              , function () {

                  const spy = sinon.spy( ( x ) => x )

                  spy( 1 ); spy( 2 )

                  spy.returnValues.should.be.an( 'array' )

                  spy.returnValues[ 0 ].should.equal( spy.getCall( 0 ).returnValue )
                  spy.returnValues[ 0 ].should.equal( 1 )

                  spy.returnValues[ 1 ].should.equal( spy.getCall( 1 ).returnValue )
                  spy.returnValues[ 1 ].should.equal( 2 )

                }
              )
            it( '#thisValues'
              , function () {

                  const ctxt1 = {}
                      , ctxt2 = {}

                  spy.call( ctxt1 )
                  spy.call( ctxt2 )

                  spy.thisValues.should.be.an( 'array' )

                  spy.thisValues[ 0 ].should.equal( spy.getCall( 0 ).thisValue )
                  spy.thisValues[ 0 ].should.equal( ctxt1 )

                  spy.thisValues[ 1 ].should.equal( spy.getCall( 1 ).thisValue )
                  spy.thisValues[ 1 ].should.equal( ctxt2 )

                }
              )
            it( '#exceptions'
              , function () {

                  const spy = sinon.spy( ( error ) => { throw error } )

                  try {
                    spy( 'foo' )
                  } catch ( error ) {
                    // noop
                  }
                  try {
                    spy( 'bar' )
                  } catch ( error ) {
                    // noop
                  }

                  spy.exceptions.should.be.an( 'array' )

                  spy.exceptions[ 0 ].should.equal( spy.getCall( 0 ).exception )
                  spy.exceptions[ 0 ].should.equal( 'foo' )

                  spy.exceptions[ 1 ].should.equal( spy.getCall( 1 ).exception )
                  spy.exceptions[ 1 ].should.equal( 'bar' )

                }
              )


            //
            // spy.called
            // spy.callCount
            // spy.calledOnce
            // spy.calledTwice
            // spy.calledThrice
            //

            it( '#called'
              , function () {

                  spy.called.should.be.false

                  spy()
                  spy.called.should.be.true

                }
              )
            it( '#callCount, #calledOnce, #calledTwice, #calledThrice'
              , function () {

                  spy()
                  spy.calledOnce.should.be.true
                  spy.callCount.should.equal( 1 )

                  spy()
                  spy.calledTwice.should.be.true
                  spy.callCount.should.equal( 2 )

                  spy()
                  spy.calledThrice.should.be.true
                  spy.callCount.should.equal( 3 )

                }
              )


            //
            // spy.calledWith( ...args|matchers )
            // spy.alwaysCalledWith( ...args|matchers )
            // spy.neverCalledWith( ...args|matchers )
            //    - 支持局部匹配
            //    - 支持 matcher 实参
            //    - 使用 deep equal 判等
            //

            it( '#calledWith( ...args|matchers ), #alwaysCalledWith( ...args|matchers ), #neverCalledWith( ...args|matchers )'
              , function() {

                  spy( { foo : 'bar' }, 'baz' )

                  spy.calledWith( { foo : 'bar' } ).should.be.true
                  spy.calledWith( sinon.match.same( { foo : 'bar' } ) ).should.be.false

                }
              )


            //
            // spy.calledWithExactly( ...args|matchers )
            // spy.alwaysCalledWithExactly( ...args|matchers )
            // 与 calledWith 系列类似，但不支持局部匹配
            //    - 支持 matcher 实参
            //    - 使用 deep equal 判等
            //

            it( '#calledWithExactly( ...args|matchers ), #alwaysCalledWithExactly( ...args|matchers )'
              , function () {

                  spy( { foo : 'bar' }, 'baz' )

                  spy.calledWithExactly( { foo : 'bar' }, 'baz' ).should.be.true
                  spy.calledWithExactly( sinon.match.same( { foo : 'bar' } ), 'baz' ).should.be.false

                }
              )


            //
            // spy.calledWithMatch( ...args )
            // spy.alwaysCalledWithMatch( ...args )
            // spy.neverCalledWithMatch( ...args )
            //
            // 等同于：
            //    spy.calledWith( sinon.match( arg1 )... )
            //    spy.alwaysCalledWith( sinon.match( arg1 )... )
            //    spy.neverCalledWith( sinon.match( arg1 )... )
            //

            it( '#calledWithMatch( ...args ), #alwaysCalledWithMatch( ...args ), #neverCalledWithMatch( ...args )'
              , function () {

                  spy( 'foo' ); spy( 'foobar' )

                  spy.calledWithMatch( /^foo/ ).should.be.true
                  spy.alwaysCalledWithMatch( /^foo/ ).should.be.true
                  spy.neverCalledWithMatch( /^\s*$/ ).should.be.true

                }
              )


            //
            // spy.calledWithNew()
            //

            it( '#calledWithNew()'
              , function () {

                  spy.calledWithNew().should.be.false

                  new spy()
                  spy.calledWithNew().should.be.true

                }
              )


            //
            // spy.returned( value|matcher )
            // spy.alwaysReturned( value|matcher )
            //

            it( '#returned( value|matcher ), #alwaysReturned( value|matcher )'
              , function () {

                  const spy1 = sinon.spy( ( x ) => x )
                      , spy2 = sinon.spy( ( x ) => 0 )

                  spy1( 1 ); spy1( 2 )
                  spy2( 1 ); spy2( 2 )

                  spy1.returned( 1 ).should.be.true
                  spy1.returned( 2 ).should.be.true
                  spy1.alwaysReturned( 1 ).should.be.false
                  spy1.alwaysReturned( 2 ).should.be.false

                  spy2.returned( 0 ).should.be.true
                  spy2.alwaysReturned( 0 ).should.be.true

                  // deep equal & matcher support
                  spy1( { foo : 'bar' } )
                  spy1.returned( { foo : 'bar' } ).should.be.true
                  spy1.returned( sinon.match.same( { foo : 'bar' } ) ).should.be.false

                }
              )


            //
            // spy.calledOn( ctxt )
            // spy.alwaysCalledOn( ctxt )
            //

            it( '#calledOn( ctxt ), #alwaysCalledOn( ctxt )'
              , function () {

                  const ctxt = {}

                  spy.call( ctxt )
                  spy.call( null )

                  spy.calledOn( ctxt ).should.be.true
                  spy.alwaysCalledOn( ctxt ).should.be.false

                }
              )


            //
            // spy.threw( [value] )
            // spy.alwaysThrew( [value] )
            //

            it( '#threw( [value] ), #alwaysThrew( [value] )'
              , function () {

                  const ERR = 'error'
                      , spy = sinon.spy( ( pass ) => { if ( !pass ) { throw ERR } } )

                  try {
                    spy( true )
                    spy( false )
                  } catch ( error ) {
                    // noop
                  }

                  spy.threw().should.be.true
                  spy.threw( ERR ).should.be.true

                  spy.alwaysThrew().should.be.false
                  spy.alwaysThrew( ERR ).should.be.false

                }
              )


            //
            // spy.withArgs( ...args|matchers )
            //

            it( '#withArgs( ...args|matchers )'
              , function () {

                  spy( 'foo' ); spy( 1, 'bar' )

                  spy.withArgs( sinon.match.string ).calledOnce.should.be.true
                  spy.withArgs( sinon.match.number ).calledOnce.should.be.true // partial matching
                  spy.withArgs( sinon.match.number, sinon.match.string ).calledOnce.should.be.true

                }
              )


            //
            // spy.getCall( n )
            // spy.firstCall
            // spy.secondCall
            // spy.thirdCall
            // spy.lastCall
            //

            it( '#getCall( n ), #firstCall, #secondCall, #thirdCall, #lastCall'
              , function () {

                  spy()

                  spy.firstCall.should.be.an( 'object' )
                  spy.firstCall.should.deep.equal( spy.getCall( 0 ) )
                  spy.firstCall.should.be.a.spyCall

                  expect( spy.secondCall ).to.deep.equal( spy.getCall( 1 ) )
                  expect( spy.secondCall ).to.be.null

                  expect( spy.thirdCall ).to.deep.equal( spy.getCall( 2 ) )
                  expect( spy.thirdCall ).to.be.null

                  spy.lastCall.should.deep.equal( spy.getCall( spy.callCount - 1 ) )
                  spy.lastCall.should.be.a.spyCall

                }
              )


            //
            // spy.calledAfter( anotherSpy )
            // spy.calledBefore( anotherSpy )
            //

            it( '#calledAfter( anotherSpy )'
              , function () {
                  const anotherSpy = sinon.spy()
                  anotherSpy(); spy()
                  spy.calledAfter( anotherSpy ).should.be.true
                }
              )
            it( '#calledBefore( anotherSpy )'
              , function () {
                  const anotherSpy = sinon.spy()
                  spy(); anotherSpy()
                  spy.calledBefore( anotherSpy ).should.be.true
                }
              )


            //
            // spy.reset()
            //

            it( '#reset()'
              , function () {

                  spy()
                  spy.called.should.be.true

                  spy.reset()
                  spy.called.should.be.false

                }
              )

          }
        )


//
// SpyCall 相关属性、接口
//

describe( 'SpyCall'
        , function () {

            let spy

            beforeEach( function () {
                          spy = sinon.spy()
                        }
                      )


            //
            // spyCall.args
            // spyCall.returnValue
            // spyCall.thisValue
            // spyCall.exception
            //

            it( '#args'
              , function () {

                  spy( 1 )

                  const spyCall = spy.getCall( 0 )

                  spyCall.args.should.be.an( 'array' )
                  spyCall.args.should.deep.equal( [ 1 ] )

                }
              )
            it( '#returnValue'
              , function () {

                  const func = () => 'tinted'
                      , spy = sinon.spy( func )

                  spy()

                  spy.getCall( 0 ).returnValue.should.equal( 'tinted' )

                }
              )
            it( '#thisValue'
              , function () {

                  const ctxt = {}

                  spy.call( ctxt )

                  spy.getCall( 0 ).thisValue.should.equal( ctxt )

                }
              )
            it( '#exception'
              , function () {

                  const func = ( error ) => { throw error }
                      , spy = sinon.spy( func )
                      , ERR = 'error'

                  try {
                    spy( ERR )
                  } catch( error ) {
                    // noop
                  }

                  spy.getCall( 0 ).exception.should.equal( ERR )

                }
              )


            //
            // spyCall.calledWith( ...args|matchers )
            // spyCall.notCalledWith( ...args|matchers )
            //    - 支持局部匹配
            //    - 支持 matcher 实参
            //    - 使用 deep equal 判等
            //

            it( '#calledWith( ...args|matchers ), #notCalledWith( ...args|matchers )'
              , function () {

                  spy( { foo : 'bar' }, 'baz' )

                  const spyCall = spy.getCall( 0 )

                  spyCall.calledWith( { foo : 'bar' } ).should.be.true
                  spyCall.calledWith( sinon.match.same( { foo : 'bar' } ) ).should.be.false

                }
              )


            //
            // spyCall.calledWithExactly( ...args|matchers )
            // 与 calledWith 系列类似，但不支持局部匹配
            //    - 支持 matcher 实参
            //    - 使用 deep equal 判等
            //

            it( '#calledWithExactly( ...args|matchers )'
              , function () {

                  spy( { foo : 'bar' }, 'baz' )

                  const spyCall = spy.getCall( 0 )

                  spyCall.calledWithExactly( { foo : 'bar' }, 'baz' ).should.be.true
                  spyCall.calledWithExactly( sinon.match.same( { foo : 'bar' } ), 'baz' ).should.be.false

                }
              )


            //
            // spyCall.calledWithMatch( ...args )
            // spyCall.notCalledWithMatch( ...args )
            //
            // 等同于：
            //    spyCall.calledWith( sinon.match( arg1 )... )
            //    spyCall.notCalledWith( sinon.match( arg1 )... )
            //

            it( '#calledWithMatch( ...args ), #notCalledWithMatch( ...args )'
              , function () {

                  spy( 'foobar' )

                  const spyCall = spy.getCall( 0 )

                  spyCall.calledWithMatch( /^foo/ ).should.be.true
                  spyCall.notCalledWithMatch( /^\s*$/ ).should.be.true

                }
              )


            //
            // spyCall.calledOn( ctxt )
            //

            it( '#calledOn( ctxt )'
              , function () {

                  const ctxt = {}

                  spy() ; spy.call( ctxt )

                  let spyCall = spy.getCall( 0 )
                  spyCall.calledOn( ctxt ).should.be.false

                  spyCall = spy.getCall( 1 )
                  spyCall.calledOn( ctxt ).should.be.true

                }
              )


            //
            // spyCall.threw( [value] )
            //

            it( '#threw( [value] )'
              , function () {

                  const ERR = 'error'
                      , func = ( pass ) => { if ( !pass ) { throw ERR } }
                      , spy = sinon.spy( func )

                  try {
                    spy( true )
                    spy( false )
                  } catch( error ) {
                    // noop
                  }

                  let spyCall = spy.getCall( 0 )
                  spyCall.threw().should.be.false
                  spyCall.threw( ERR ).should.be.false

                  spyCall = spy.getCall( 1 )
                  spyCall.threw().should.be.true
                  spyCall.threw( ERR ).should.be.true

                }
              )

          }
        )
