'use strict'

const chai = require( 'chai' )
    , sinon = require( 'sinon' )

before( function () {

          chai.should()

          // custom assertion that checks whether an object is a spy using duck-typing
          chai.use( function ( _chai, _util ) {
                      _chai.Assertion
                        .addProperty( 'spy'
                                    , function () {
                                        const ownKeys = Object.keys( this._obj )
                                            , spyKeys = Object.keys( sinon.spy() )
                                            , assert = new _chai.Assertion( ownKeys )
                                        _util.transferFlags( this, assert, false )
                                        assert.include.members( spyKeys )
                                      }
                                    )
                    }
                  )

        }
      )


//
// 创建 Stub：
//    - sinon.stub()
//    - sinon.stub( obj, method, [func] )
//    - stub.restore()
//

describe( 'Creating stubs'
        , function () {

            let bareSpy
            beforeEach( function () {
                          bareSpy = sinon.spy()
                        }
                      )


            // [1] sinon.stub()
            it( 'with sinon.stub()'
              , function () {
                  sinon.stub().should.be.a.spy
                }
              )

            // [2] sinon.stub( obj, method )
            it( 'with sinon.stub( obj, method )'
              , function () {

                  const obj = { method() { bareSpy() } }
                      , _method = obj.method
                      , stub = sinon.stub( obj, 'method' )

                  stub.should.be.a.spy

                  // overrides original method
                  obj.method.should.equal( stub )
                  obj.method.should.not.equal( _method )

                  obj.method()
                  bareSpy.called.should.be.false

                  // and can be restored
                  stub.should.have.property( 'restore' )
                  stub.restore()

                  obj.method.should.not.equal( stub )
                  obj.method.should.equal( _method )

                  obj.method()
                  bareSpy.called.should.be.true

                }
              )

            // [3] sinon.stub( obj, method, func )
            it( 'with sinon.stub( obj, method, func )'
              , function () {

                  const obj = { method() { bareSpy() } }
                      , _method = obj.method
                      , func = sinon.spy()
                      , stub = sinon.stub( obj, 'method', func )

                  stub.should.be.a.spy

                  // overrides original method
                  obj.method.should.equal( stub )
                  obj.method.should.not.equal( _method )

                  obj.method()
                  stub.called.should.be.true
                  func.called.should.be.true
                  bareSpy.called.should.be.false

                  // and can be restored
                  stub.should.have.property( 'restore' )
                  stub.restore()

                  obj.method.should.not.equal( stub )
                  obj.method.should.equal( _method )

                  obj.method()
                  bareSpy.called.should.be.true

                }
              )

          }
        )


//
// Stub 核心接口
//

describe( 'Stub'
        , function () {

            let ctxt
              , bareSpy
              , bareStub
            beforeEach( function () {
                          ctxt = {}
                          bareSpy = sinon.spy()
                          bareStub = sinon.stub()
                        }
                      )


            //
            // stub.callsArg( index )
            // stub.callsArgOn( index, ctxt )
            // stub.callsArgWith( index, ...args )
            // stub.callsArgOnWith( index, ctxt, ...args )
            //

            it( '#callsArg( index )'
              , function () {

                  bareStub.callsArg( 0 )

                  bareStub( bareSpy )
                  bareSpy.called.should.be.true

                }
              )
            it( '#callsArgOn( index, ctxt )'
              , function () {

                  bareStub.callsArgOn( 0, ctxt )

                  bareStub( bareSpy )

                  bareSpy.called.should.be.true
                  bareSpy.calledOn( ctxt ).should.be.true

                }
              )
            it( '#callsArgWith( index, ...args )'
              , function () {

                  bareStub.callsArgWith( 0, 'foobar' )

                  bareStub( bareSpy )

                  bareSpy.called.should.be.true
                  bareSpy.calledWith( 'foobar' ).should.be.true

                }
              )
            it( '#callsArgOnWith( index, ctxt, ...args )'
              , function () {

                  bareStub.callsArgOnWith( 0, ctxt, 'foobar' )

                  bareStub( bareSpy )

                  bareSpy.called.should.be.true
                  bareSpy.calledOn( ctxt ).should.be.true
                  bareSpy.calledWith( 'foobar' ).should.be.true

                }
              )


            //
            // stub.yields( ...args )
            // stub.yieldsOn( ctxt, ...args )
            // stub.yieldsTo( key, ...args )
            // stub.yieldsToOn( key, ctxt, ...args )
            //
            //

            it( '#yields( ...args )'
              , function () {

                  bareStub.yields( 'foo', 'bar' )

                  bareStub( 0, bareSpy, bareSpy )

                  // invokes (only) the first matching function as callback
                  bareSpy.called.should.be.true
                  bareSpy.calledOnce.should.be.true

                  bareSpy.calledWith( 'foo', 'bar' ).should.be.true

                }
              )
            it( '#yieldsOn( ctxt, ...args )'
              , function () {

                  bareStub.yieldsOn( ctxt )

                  bareStub( bareSpy )

                  bareSpy.called.should.be.true
                  bareSpy.calledOn( ctxt ).should.be.true

                }
              )
            it( '#yieldsTo( key, ...args )'
              , function () {

                  const obj = { method : bareSpy }

                  bareStub.yieldsTo( 'method' )

                  bareStub( obj )
                  bareSpy.called.should.be.true

                }
              )
            it( '#yieldsToOn( key, ctxt, ...args )'
              , function () {

                  const obj = { method : bareSpy }

                  bareStub.yieldsToOn( 'method', ctxt )

                  bareStub( obj )

                  bareSpy.called.should.be.true
                  bareSpy.calledOn( ctxt ).should.be.true

                }
              )


            //
            // stub.callArg( index )
            // stub.callArgWith( index, ...args )
            //

            it( '#callArg( index )'
              , function () {

                  bareStub( bareSpy )
                  bareSpy.called.should.be.false

                  bareStub.callArg( 0 )
                  bareSpy.called.should.be.true

                }
              )
            it( '#callArgWith( index, ...args )'
              , function () {

                  bareStub( bareSpy )
                  bareSpy.called.should.be.false

                  bareStub.callArgWith( 0, 'foo', 'bar' )

                  bareSpy.called.should.be.true
                  bareSpy.calledWith( 'foo', 'bar' ).should.be.true

                }
              )


            //
            // stub.yield( ...args )
            // stub.yieldTo( key, ...args )
            //

            it( 'yield( ...args )'
              , function () {

                  const spy1 = sinon.spy()
                      , spy2 = sinon.spy()

                  bareStub( spy1, spy2 )

                  spy1.called.should.be.false
                  spy2.called.should.be.false

                  bareStub.yield( 'foo' )
                  bareStub.yield( 'bar' )

                  // invokes (only) the first matching function as callback
                  spy1.called.should.be.true
                  spy2.called.should.be.false

                  spy1.getCall( 0 ).args.should.deep.equal( [ 'foo' ] )
                  spy1.getCall( 1 ).args.should.deep.equal( [ 'bar' ] )

                }
              )
            it( 'yieldTo( key, ...args )'
              , function () {

                  const obj = { method : bareSpy }

                  bareStub( obj )

                  bareSpy.called.should.be.false

                  bareStub.yieldTo( 'method' )
                  bareSpy.called.should.be.true

                }
              )


            //
            // stub.returns( value )
            // stub.returnsArg( index )
            // stub.returnsThis()
            //

            it( '#returns( value )'
              , function () {
                  bareStub.returns( 'tinted' )
                  bareStub().should.equal( 'tinted' )
                }
              )
            it( '#returnsArg( index )'
              , function () {
                  bareStub.returnsArg( 1 )
                  bareStub( 1, 2, 3 ).should.equal( 2 )
                }
              )
            it( '#returnsThis()'
              , function () {
                  bareStub.returnsThis()
                  bareStub.call( ctxt ).should.equal( ctxt )
                }
              )


            //
            // stub.throws( [value] )
            //

            it( '#throws( [value] )'
              , function () {
                  bareStub.throws( new Error( 'error' ) )
                  bareStub.should.throw( 'error' )
                }
              )


            //
            // stub.onCall( index )
            // stub.onFirstCall|onSecondCall|onThirdCall()
            //

            it( '#onCall( index ), #onFirstCall|onSecondCall|onThirdCall()'
              , function () {
                  bareStub.onCall( 0 ).returns( 'tinted' )
                  bareStub().should.equal( 'tinted' )
                }
              )


            //
            // stub.withArgs( ...args|matchers )
            //

            it( '#withArgs( ...args|matchers )'
              , function () {

                  bareStub.returns( 'unknown')
                  bareStub.withArgs( sinon.match.number ).returns( 'number' )
                  bareStub.withArgs( sinon.match.string ).returns( 'string' )

                  bareStub( 1 ).should.equal( 'number' )
                  bareStub( 'foobar' ).should.equal( 'string' )
                  bareStub( true ).should.equal( 'unknown' )

                  // mix & match
                  bareStub
                    .withArgs( sinon.match.array )
                    .onCall( 0 )
                    .returns( 'tinted' )
                  bareStub( [] ).should.equal( 'tinted' )

                }
              )

          }
        )
