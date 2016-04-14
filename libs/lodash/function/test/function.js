'use strict'

const _ = require( 'lodash' )
    , chai = require( 'chai' )
    , sinon = require( 'sinon' )
    , expect = chai.expect

before( function () {
          chai.should()
          chai.use( require( 'sinon-chai' ) )
        }
      )

describe( 'lodash/function'
        , function () {

            let spy
              , stub

            beforeEach( function () {
                          spy = sinon.spy()
                          stub = sinon.stub()
                        }
                      )


            // bind( func , ctxt , [partials] )
            it( 'bind'
              , function () {

                  _.bind( spy , null , 1 , 2 )()
                  spy.should.have.been.calledOn( null )
                  spy.should.have.been.calledWithExactly( 1 , 2 )

                  // 可以通过更改 _.bind.placeholder 来自定义占位符
                  _.bind.placeholder.should.equal( _ )

                  spy.reset()
                  _.bind( spy , null , _ , 2 )()
                  spy.should.have.been.calledOn( null )
                  spy.should.have.been.calledWithExactly( undefined , 2 )

                }
              )


            //
            // partial( func , [partials] )
            // partialRight( func , [partials] )
            //
            // 占位符：
            //    _.partial.placeholder
            //    _.partialRight.placeholder
            //

            it( 'partial , partialRight'
              , function () {

                  _.partial( spy , 1 )( 2 )
                  spy.should.have.been.calledWithExactly( 1 , 2 )

                  spy.reset()

                  _.partialRight( spy , 2  )( 1 )
                  spy.should.have.been.calledWithExactly( 1 , 2 )

                }
              )


            //
            // curry( func , [arity=func.length] )
            // curryRight( func , [arity=func.length] )
            //

            it( 'curry , curryRight'
              , function () {

                  _.curry( spy , 3 )( 1 )( 2 )( 3 , 4 )
                  spy.should.have.been.calledWithExactly( 1 , 2 , 3 , 4 )

                  spy.reset()

                  _.curry( spy , 3 )( 1 , 2 )( 3 , 4 )
                  spy.should.have.been.calledWithExactly( 1 , 2 , 3 , 4 )

                }
              )


            //
            // wrap( value , wrapper )
            //
            // 等同于：
            //    partial( wrapper , value )
            //

            it( 'wrap'
              , function () {
                  _.wrap( 1
                        , ( ...args ) => args
                        )( 2 ).should.deep.equal( [ 1 , 2 ] )
                }
              )


            //
            // before( n , func )
            // after( n , func )
            //

            it( 'before , after'
              , function () {

                  _.times( 5 , _.before( 5 , spy ) )
                  spy.should.have.been.callCount( 4 )

                  spy.reset()
                  _.times( 5 , _.after( 5 , spy ) )
                  spy.should.have.been.callCount( 1 )

                }
              )


            // once( func )
            it( 'once'
              , function () {
                  _.times( 10 , _.once( spy ) )
                  spy.should.have.been.calledOnce
                }
              )


            //
            // ary( func , [n=func.length] )
            // unary( func )
            //

            it( 'ary , unary'
              , function () {

                  // ary( func , [n=func.length] )
                  _.ary( spy , 2 )( 'foo' , 'bar' , 'baz' )
                  spy.should.have.been.calledWithExactly( 'foo' , 'bar' )

                  // unary( func )
                  // 等价于：ary( func , 1 )
                  spy.reset()
                  _.unary( spy )( 'foo' , 'bar' , 'baz' )
                  spy.should.have.been.calledWithExactly( 'foo' )

                }
              )


            // flip( func )
            it( 'flip'
              , function () {
                  _.flip( spy )( 'foo' , 'bar' )
                  spy.should.have.been.calledWithExactly( 'bar' , 'foo' )
                }
              )


            // rearg( func , ...indexes )
            it( 'rearg'
              , function () {
                  _.rearg( spy , 2 , 0 , 1 )( 'bar' , 'baz' , 'foo' )
                  spy.should.have.been.calledWithExactly( 'foo' , 'bar' , 'baz' )
                }
              )


            // overArgs( func , ...transforms )
            it( 'overArgs'
              , function () {
                  _.overArgs( spy
                            , ( value ) => value + value
                            , ( value ) => value * value
                            )( 1 , 2 , 3 )
                  spy.should.have.been.calledWithExactly( 2 , 4 , 3 )
                }
              )


            //
            // rest( func , [start=func.length-1] )
            // spread( func , [start=0] )
            //

            it( 'rest , spread'
              , function () {

                  // reset( func , [start=func.length-1] )
                  // https://mdn.io/rest_parameters
                  _.rest( spy , 1 )( 1 , 2 , 3 )
                  spy.should.have.been.calledWithExactly( 1 , [ 2 , 3 ] )

                  // spread( func , [start=0] )
                  // https://mdn.io/spread_operator
                  spy.reset()
                  _.spread( spy )( [ 1 , 2 , 3 ] )
                  spy.should.have.been.calledWithExactly( 1 , 2 , 3 )

                }
              )


            // memoize( func , [resolver] )
            it( 'memoize'
              , function () {

                  // 可以通过更改 _.memoize.Cache 来自定义缓存对象构造函数
                  // 该构造函数必须实现 Map 相关接口
                  _.memoize.Cache = Map

                  const memoized = _.memoize( stub.returns( 'tinted' )
                                            // 通过定义 resolver 实参来设置缓存键
                                            // 否则的话缓存键默认为 arg[ 0 ]
                                            , ( ...args ) => args[ 0 ]
                                            )

                  _.times( 5 , _.bind( memoized , null , 'foo' ) )
                  stub.should.have.been.calledOnce

                  // 可以通过 memoized.cache 属性来直接查看原始缓存
                  memoized.cache.get( 'foo' ).should.equal( 'tinted' )

                }
              )


            // negate( func )
            it( 'negate'
              , function () {
                  stub.returns( true )
                  expect( _.negate( stub )() ).to.be.false
                }
              )

          }
        )
