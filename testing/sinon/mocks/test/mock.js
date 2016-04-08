'use strict'

const sinon = require( 'sinon' )

//
// Expectation 核心接口
//

describe( 'Expectation'
        , function () {

            let obj
              , mock
            beforeEach( function () {
                          obj = { nop() {} }
                          mock = sinon.mock( obj )
                        }
                      )


            //
            // expectation.exactly( n )
            // expectation.once|twice|thrice()
            // expectation.atLeast|atMost( n )
            // expectation.never()
            //

            it( '#exactly( n )'
              , function () {
                  mock.expects( 'nop' ).exactly( 2 )
                  obj.nop(); obj.nop()
                  mock.verify()
                }
              )
            it( '#once()'
              , function () {
                  mock.expects( 'nop' ).once()
                  obj.nop()
                  mock.verify()
                }
              )
            it( '#twice()'
              , function () {
                  mock.expects( 'nop' ).twice()
                  obj.nop(); obj.nop()
                  mock.verify()
                }
              )
            it( '#thrice()'
              , function () {
                  mock.expects( 'nop' ).thrice()
                  obj.nop(); obj.nop(); obj.nop()
                  mock.verify()
                }
              )
            it( '#atLeast|atMost( n )'
              , function () {
                  mock.expects( 'nop' ).atLeast( 1 ).atMost( 3 ) // chainable
                  obj.nop()
                  mock.verify()
                }
              )
            it( '#never()'
              , function () {
                  mock.expects( 'nop' ).never().verify()
                }
              )


            //
            // expectation.withArgs( ...args )
            // expectation.withExactArgs( ...args )
            //

            it( '#withArgs( ...args )'
              , function () {
                  mock.expects( 'nop' ).withArgs( 'foo' )
                  obj.nop( 'foo' , 'bar' )
                  mock.verify()
                }
              )
            it( '#withExactArgs( ...args )'
              , function () {
                  mock.expects( 'nop' ).withExactArgs( 'foo' , 'bar' )
                  obj.nop( 'foo' , 'bar' )
                  mock.verify()
                }
              )


            //
            // expectation.on( ctxt )
            //

            it( '#on( ctxt )'
              , function () {
                  mock.expects( 'nop' ).on( mock )
                  obj.nop.call( mock )
                  mock.verify()
                }
              )

          }
        )
