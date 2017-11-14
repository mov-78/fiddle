const noop = require( 'lodash.noop' )

describe( 'Pending test cases' , function () {
    xit( 'with xit( title , [implementation] )' )
    it.skip( 'with it.skip( title , [implementation] )' )
    it( 'by omitting the implementation callback' )
} )

xdescribe( 'Pending test suites' , function () {
    it( 'with xdescribe( title , implementation )' , noop )
} )

describe.skip( 'Pending test suites' , function () {
    it( 'with describe.skip( title , implementation )' , noop )
} )
