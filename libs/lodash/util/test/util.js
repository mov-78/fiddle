const _ = require( 'lodash' )
const chai = require( 'chai' )
const sinon = require( 'sinon' )

before( function () {
    chai.should()
    chai.use( require( 'sinon-chai' ) )
} )

describe( 'lodash/util' , function () {

    let spy
    let stub

    beforeEach( function () {
        spy = sinon.spy()
        stub = sinon.stub()
    } )


    // attempt( func , ...args )
    it( 'attempt' , function () {
        _.attempt( () => 'tinted' ).should.equal( 'tinted' )
        _.attempt( () => { throw new Error() } ).should.be.an( 'error' )
    } )


    // bindAll( object , ...methods )
    it( 'bindAll' , function () {

        let func = null
        const object = { method : spy }

        _.bindAll( object , 'method' )
        func = object.method

        func()
        spy.should.have.been.calledOn( object )

    } )


    //
    // cond( pairs )
    //    pairs := Array<[ predicate , function ]>
    //

    it( 'cond' , function () {
        _.cond(
            [
                [ _.isNumber , _.constant( 'number' ) ] ,
                [ _.isString , _.constant( 'string' ) ]
            ]
        )( 'foobar' ).should.equal( 'string' )
    } )


    // conforms( schema )
    it( 'conforms' , function () {
        _.conforms( { foo : _.isNumber , bar : _.isString } )( { foo : 0 , bar : 'baz' } ).should.be.true
    } )


    //
    // range( [start=0] , end , [step=±1] )
    // rangeRight( [start=0] , end , [step=±1] )
    // 区间：[ start , end )
    //

    it( 'range , rangeRight' , function () {

        _.range( 2 ).should.deep.equal( [ 0 , 1 ] )
        _.range( -2 ).should.deep.equal( [ 0 , -1 ] ) // step = -1 ∀ start < 0
        _.range( 0 , 2 ).should.deep.equal( [ 0 , 1 ] )

        _.rangeRight( 2 ).should.deep.equal( [ 1 , 0 ] )
        _.rangeRight( -2 ).should.deep.equal( [ -1 , 0 ] ) // step = -1 ∀ start < 0
        _.rangeRight( 0 , 2 ).should.deep.equal( [ 1 , 0 ] )

    } )


    //
    // property( path )
    // propertyOf( object )
    // method( path , ...args )
    // methodOf( object , ...args )
    //

    it( 'property , propertyOf' , function () {

        _.property( 'foo.bar' )( { foo : { bar : 'baz' } } )
            .should.equal( 'baz' )

        _.propertyOf( { foo : { bar : 'baz' } } )( 'foo.bar' )
            .should.equal( 'baz' )

    } )
    it( 'method , methodOf' , function () {

        _.method( 'foo.bar' , 'baz' )( { foo : { bar : _.identity } } )
            .should.equal( 'baz' )

        _.methodOf( { foo : { bar : _.identity } } , 'baz' )( 'foo.bar' )
            .should.equal( 'baz' )

    } )


    //
    // matches( source )
    // matchesProperty( path , value )
    //

    it( 'matches , matchesProperty' , function () {

        let matcher
        const pkg = { name : 'lodash' , license : 'MIT' }

        // matches( source )
        // 等同于：partialRight( isMatch , source )

        matcher = _.matches( { license : 'MIT' } )
        matcher( pkg ).should.be.true

        matcher = _.partialRight( _.isMatch , { license : 'MIT' } )
        matcher( pkg ).should.be.true

        // matchesProperty( path , value )
        _.matchesProperty( 'foo.bar' , 'baz' )( { foo : { bar : 'baz' } } ).should.be.true

    } )


    //
    // over( ...iteratees )
    // overSome( ...predicates )
    // overEvery( ...predicates )
    //

    it( 'over , overSome , overEvery' , function () {

        _.over( Math.max , Math.min )( 1 , 2 , 3 )
            .should.be.an( 'array' )
            .that.is.deep.equal( [ 3 , 1 ] )

        _.overSome( _.isNumber , _.isInteger )( 1 , 2 , 3 )
            .should.be.true
        _.overSome( _.isNumber , _.isString )( 1 , 2 , 3 )
            .should.be.true

        _.overEvery( _.isNumber , _.isInteger )( 1 , 2 , 3 )
            .should.be.true
        _.overEvery( _.isNumber , _.isString )( 1 , 2 , 3 )
            .should.be.false

    } )


    //
    // flow( ...func )
    // flowRight( ...func )
    //

    it( 'flow , flowRight' , function () {
        _.flow( _.add , n => n * n )( 1 , 2 ).should.equal( 9 )
        _.flowRight( n => n * n , _.add )( 1 , 2 ).should.equal( 9 )
    } )


    // times( n , iteratee )
    it( 'times' , function () {
        stub.returnsArg( 0 )
        _.times( 10 , index => stub( index ) )
            .should.be.an( 'array' )
            .that.is.deep.equal( _.range( 10 ) )
        stub.should.have.callCount( 10 )
    } )


    // nthArg( [n=0] )
    it( 'nthArg' , function () {
        _.nthArg( 1 )( 'foo' , 'bar' , 'baz' ).should.equal( 'bar' )
    } )

} )
