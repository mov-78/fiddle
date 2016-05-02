const _ = require( 'lodash' )
const chai = require( 'chai' )

before( chai.should )

describe( 'lodash/math' , function () {

  //
  // add( augend , addend )
  // subtract( minuend , subtrahend )
  // multiply( multiplier , multiplicand )
  // divide( dividend , divisor )
  //

  it( 'add , subtract , multiply , divide' , function () {
    _.add( 1 , 2 ).should.equal( 3 )
    _.subtract( 1 , 2 ).should.equal( -1 )
    _.multiply( 1 , 2 ).should.equal( 2 )
    _.divide( 1 , 2 ).should.equal( 0.5 )
  } )


  //
  // floor( number , [precision=0] )
  // ceil( number , [precision=0] )
  // round( number , [precision=0] )
  //

  it( 'floor , ceil , round' , function () {
    _.floor( 0.046 , 2 ).should.equal( 0.04 )
    _.ceil( 0.046 , 2 ).should.equal( 0.05 )
    _.round( 0.046 , 2 ).should.equal( 0.05 )
  } )


  //
  // min( array )
  // minBy( array , iteratee )
  // max( array )
  // maxBy( array , iteratee )
  //

  it( 'min , minBy , max , maxBy' , function () {

    const array = [ 3 , 1 , 2 ]

    _.min( array ).should.equal( 1 )
    _.minBy( array , value => value ).should.equal( 1 )

    _.max( array ).should.equal( 3 )
    _.maxBy( array , value => value ).should.equal( 3 )

  } )


  //
  // mean( array )
  // meanBy( array , iteratee )
  // sum( array )
  // sumBy( array , iteratee )
  //

  it( 'mean , meanBy , sum , sumBy' , function () {

    const array = [ 1 , 2 , 3 , 4 ]

    _.mean( array ).should.equal( 2.5 )
    _.meanBy( array , value => value ).should.equal( 2.5 )

    _.sum( array ).should.equal( 10 )
    _.sumBy( array , value => value ).should.equal( 10 )

  } )

} )
