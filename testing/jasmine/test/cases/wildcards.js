'use strict'

// jasmine.any( constructor )
describe( 'jasmine.any' , function () {

  it( 'matches any value of a given type' , function () {

    expect( 1 ).toEqual( jasmine.any( Number ) )
    expect( '' ).toEqual( jasmine.any( String ) )
    expect( true ).toEqual( jasmine.any( Boolean ) )
    expect( {} ).toEqual( jasmine.any( Object ) )
    expect( [] ).toEqual( jasmine.any( Array ) )
    expect( () => null ).toEqual( jasmine.any( Function ) )
    expect( /^/ ).toEqual( jasmine.any( RegExp ) )
    expect( new Date ).toEqual( jasmine.any( Date ) )
    expect( new Set ).toEqual( jasmine.any( Set ) )
    expect( new WeakSet ).toEqual( jasmine.any( WeakSet ) )
    expect( new Map ).toEqual( jasmine.any( Map ) )
    expect( new WeakMap ).toEqual( jasmine.any( WeakMap ) )

    class Model {}
    expect( new Model ).toEqual( jasmine.any( Model ) )

  } )

} )


// jasmine.anything()
describe( 'jasmine.anything' , function () {

  it( 'matches any thing except for null and undefined' , function () {

    expect( 1 ).toEqual( jasmine.anything() )
    expect( '' ).toEqual( jasmine.anything() )
    expect( true ).toEqual( jasmine.anything() )
    expect( {} ).toEqual( jasmine.anything() )
    expect( [] ).toEqual( jasmine.anything() )
    expect( () => null ).toEqual( jasmine.anything() )

    expect( null ).not.toEqual( jasmine.anything() )
    expect( undefined ).not.toEqual( jasmine.anything() )

  } )

} )


// jasmine.objectContaining( schema )
describe( 'jasmine.objectContaining' , function () {

  beforeEach( function () {
    this.foobar = { foo : 1 , bar : 2 }
  } )

  it( 'matches objects with the expected key/value pairs' , function () {

    expect( this.foobar ).toEqual( jasmine.objectContaining( { foo : 1 } ) )
    expect( this.foobar ).toEqual( jasmine.objectContaining( { bar : 2 } ) )

    expect( this.foobar ).not.toEqual( jasmine.objectContaining( { foo : 2 } ) )
    expect( this.foobar ).not.toEqual( jasmine.objectContaining( { baz : 3 } ) )

  } )

} )


// jasmine.arrayContaining( subset )
describe( 'jasmine.arrayContaining' , function () {

  it( 'matches arrays with some of the values' , function () {
    expect( [ 1 , 2 , 3 ] ).toEqual( jasmine.arrayContaining( [ 3 , 1 ] ) )
    expect( [ 1 , 2 , 3 ] ).not.toEqual( jasmine.arrayContaining( [ 4 ] ) )
  } )

} )


// jasmine.stringMatching( substring|regex )
describe( 'jasmine.stringMatching' , function () {

  it( 'matches as a regexp' , function () {
    expect( 'foobar' ).toEqual( jasmine.stringMatching( /^foo/ ) )
    expect( 'foobar' ).toEqual( jasmine.stringMatching( 'foo' ) )
  } )

} )
