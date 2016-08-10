let sinon = require( 'sinon' )

//
// Expectation 核心接口
//

describe( 'Expectation' , function () {

    let obj
    let mock

    beforeEach( function () {
        obj = { noop() {} }
        mock = sinon.mock( obj )
    } )


    //
    // expectation.exactly( n )
    // expectation.once|twice|thrice()
    // expectation.atLeast|atMost( n )
    // expectation.never()
    //

    it( 'exactly' , function () {
        mock.expects( 'noop' ).exactly( 2 )
        obj.noop() ; obj.noop()
        mock.verify()
    } )
    it( 'once' , function () {
        mock.expects( 'noop' ).once()
        obj.noop()
        mock.verify()
    } )
    it( 'twice' , function () {
        mock.expects( 'noop' ).twice()
        obj.noop() ; obj.noop()
        mock.verify()
    } )
    it( 'thrice' , function () {
        mock.expects( 'noop' ).thrice()
        obj.noop() ; obj.noop() ; obj.noop()
        mock.verify()
    } )
    it( 'atLeast|atMost' , function () {
        mock.expects( 'noop' ).atLeast( 1 ).atMost( 3 ) // chainable
        obj.noop()
        mock.verify()
    } )
    it( 'never' , function () {
        mock.expects( 'noop' ).never().verify()
    } )


    //
    // expectation.withArgs( ...args )
    // expectation.withExactArgs( ...args )
    //

    it( 'withArgs' , function () {
        mock.expects( 'noop' ).withArgs( 'foo' )
        obj.noop( 'foo' , 'bar' )
        mock.verify()
    } )
    it( 'withExactArgs' , function () {
        mock.expects( 'noop' ).withExactArgs( 'foo' , 'bar' )
        obj.noop( 'foo' , 'bar' )
        mock.verify()
    } )


    //
    // expectation.on( ctxt )
    //

    it( 'on' , function () {
        mock.expects( 'noop' ).on( mock )
        obj.noop.call( mock )
        mock.verify()
    } )

} )
