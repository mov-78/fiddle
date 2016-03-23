const chai = require( 'chai' )
    , expect = chai.expect

describe( 'Testing sync code'
        , function () {

            it( 'by omitting the done callback'
              , function () {
                  expect( [] ).to.be.empty
                }
              )

          }
        )
