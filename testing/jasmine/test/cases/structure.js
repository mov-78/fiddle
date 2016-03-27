// 使用 describe( title, implementation ) 来定义「测试套件」
// 一个「测试套件」可以包含多个「测试用例」
describe( 'A test suite'
        , function () {

            // 使用 it( title, implementation ) 来定义「测试用例」
            // 一个「测试用例」可以包含多个「断言」
            //    - 如果「测试用例」内所有「断言」均成立，则该测试通过
            //    - 如果「测试用例」内任意「断言」不成立，则该测试不通过
            it( 'is composed of zero or more test cases'
              , function () {

                  //「正断言」
                  // expect( actual ).matcher( expected )
                  expect( null ).toBeNull()

                  //「负断言」
                  // expect( actual ).not.matcher( expected )
                  expect( undefined ).not.toBeNull()

                }
              )

            //「测试套件」可以嵌套（「测试用例」则不可以）
            describe( 'can be nested'
                    , function () {

                        it( 'to build a tree of test cases'
                          , function () {
                              // 可以使用 fail( [reason] ) 来强制不通过「测试用例」
                              if ( false ) {
                                fail( 'manually failing with fail( [reason] )' )
                              }
                            }
                          )

                      }
                    )

          }
        )
