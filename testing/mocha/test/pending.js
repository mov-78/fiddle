const chai = require( 'chai' )
    , expect = chai.expect

describe( 'Pending test cases'
        , function () {
            xit( 'with xit( title, [implementation] )' )
            it( 'by omitting the implementation callback' )
          }
        )

xdescribe( 'Pending a test suite'
         , function () {
             it( 'with xdescribe( title, implementation )'
               , function() {
                   expect( [] ).to.not.be.empty
                 }
               )
           }
         )
