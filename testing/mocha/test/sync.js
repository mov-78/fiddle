const chai = require( 'chai' )
    , expect = chai.expect

describe( 'Testing sync code'
        , function () { // 不要使用 arrow function

            it( 'by omitting the done callback'
              , function () { // 不要使用 arrow function
                  expect( [] ).to.be.empty
                }
              )

          }
        )
