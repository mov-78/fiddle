const noop = require( 'lodash.noop' )

describe( 'Pending test cases'
        , function () {
            xit( 'with xit( title, [implementation] )' )
            it( 'by omitting the implementation callback' )
          }
        )

xdescribe( 'Pending a test suite'
         , function () {
             it( 'with xdescribe( title, implementation )' , noop )
           }
         )
