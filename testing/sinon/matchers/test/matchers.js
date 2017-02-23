const chai = require( 'chai' )
const sinon = require( 'sinon' )

before( chai.should )

describe( 'Matchers' , function () {

    let bareSpy
    beforeEach( function () {
        bareSpy = sinon.spy()
    } )

    //
    // 强条件通配符
    //

    it( 'sinon.match( number )' , function () {

        bareSpy( 1 )

        bareSpy.calledWith( sinon.match( 1 ) ).should.be.true
        bareSpy.calledWith( sinon.match( new Number( 1 ) ) ).should.be.true

        bareSpy.calledWith( sinon.match( '1' ) ).should.be.false

    } )

    it( 'sinon.match( string )' , function () {

        bareSpy( 'fred' )

        bareSpy.calledWith( sinon.match( 're' ) ).should.be.true
        bareSpy.calledWith( sinon.match( 'fred' ) ).should.be.true

    } )

    it( 'sinon.match( regexp )' , function () {
        bareSpy( 'fred' )
        bareSpy.calledWith( sinon.match( /^fr/ ) ).should.be.true
    } )

    it( 'sinon.match( object )' , function () {

        bareSpy( { m : 0 , n : 1 } )

        bareSpy.calledWith( sinon.match( { m : 0 } ) ).should.be.true
        bareSpy.calledWith( sinon.match( { n : sinon.match( 1 ) } ) ).should.be.true // 支持嵌套通配符

    } )

    it( 'sinon.match.same( ref )' , function () {

        const c1 = [ 0 , 1 ]
        const c2 = [ 0 , 1 ]

        bareSpy( c1 )
        bareSpy.calledWith( sinon.match.same( c1 ) ).should.be.true
        bareSpy.calledWith( sinon.match.same( c2 ) ).should.be.false

    } )

    it( 'sinon.match.typeOf( type )' , function () {
        bareSpy( 0 )
        bareSpy.calledWith( sinon.match.typeOf( 'number' ) ).should.be.true
    } )

    it( 'sinon.match.instanceOf( type )' , function () {
        bareSpy( [] )
        bareSpy.calledWith( sinon.match.instanceOf( Array ) ).should.be.true
    } )

    it( 'sinon.match.has( key , [value] ) , sinon.match.hasOwn( key , [value] )' , function () {

        bareSpy( Object.create( { m : [ 0 , 1 ] , n : 2 } ) )

        bareSpy.calledWith( sinon.match.has( 'm' ) ).should.be.true
        bareSpy.calledWith( sinon.match.has( 'n' ) ).should.be.true
        bareSpy.calledWith( sinon.match.hasOwn( 'm' ) ).should.be.false
        bareSpy.calledWith( sinon.match.hasOwn( 'n' ) ).should.be.false

        // deepEqual
        bareSpy.calledWith( sinon.match.has( 'm' , [ 0 , 1 ] ) ).should.be.true

        // 支持嵌套通配符
        bareSpy.calledWith( sinon.match.has( 'n' , sinon.match.number ) ).should.be.true

    } )


    //
    // 弱条件通配符
    //

    it( 'sinon.match.any' , function () {
        // pass
    } )

    it( 'sinon.match.defined' , function () {

        bareSpy( null )
        bareSpy( undefined )

        bareSpy.calledWith( sinon.match.defined ).should.be.false

    } )

    it( 'sinon.match.truthy , sinon.match.falsy , sinon.match.bool' , function () {

        bareSpy( 1 )
        bareSpy( 0 )
        bareSpy( true )
        bareSpy( false )

        bareSpy.getCall( 0 ).calledWith( sinon.match.truthy ).should.be.true
        bareSpy.getCall( 1 ).calledWith( sinon.match.falsy ).should.be.true
        bareSpy.getCall( 2 ).calledWith( sinon.match.bool ).should.be.true
        bareSpy.getCall( 3 ).calledWith( sinon.match.bool ).should.be.true

    } )

    it( 'sinon.match.number' , function () {
        bareSpy( 0 )
        bareSpy.calledWith( sinon.match.number ).should.be.true
    } )

    it( 'sinon.match.string' , function () {
        bareSpy( '' )
        bareSpy.calledWith( sinon.match.string ).should.be.true
    } )

    it( 'sinon.match.object' , function () {
        bareSpy( {} )
        bareSpy.calledWith( sinon.match.object ).should.be.true
    } )

    it( 'sinon.match.func' , function () {
        bareSpy( () => null )
        bareSpy.calledWith( sinon.match.func ).should.be.true
    } )

    it( 'sinon.match.array' , function () {
        bareSpy( [] )
        bareSpy.calledWith( sinon.match.array ).should.be.true
    } )

    it( 'sinon.match.regexp' , function () {
        bareSpy( /^/ )
        bareSpy.calledWith( sinon.match.regexp ).should.be.true
    } )

    it( 'sinon.match.date' , function () {
        bareSpy( new Date() )
        bareSpy.calledWith( sinon.match.date ).should.be.true
    } )


    //
    // 自定义通配符
    //

    it( 'sinon.match( function )' , function () {
        bareSpy( 1 )
        bareSpy.calledWith( sinon.match( x => x > 0 ) ).should.be.true
    } )

} )
