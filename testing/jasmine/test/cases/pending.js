// 临时挂起「测试用例」
// 挂起后，「测试用例」内所有「断言」均暂时不做校验
describe( 'Pending test case'
        , function () {

            // [1] 使用 xit( title, [implementation] ) 来挂起「测试用例」
            xit( 'can be specified using xit( title, [implementation] )' )

            // [2] 使用 pending( [reason] ) 来挂起「测试用例」
            it( 'can be specified using pending( [reason] )'
              , function() {
                  pending( 'Temporarily disabled with pending( [reason] )' )
                }
              )

            // [3] 如果「测试用例」未声明 implementation 参数，则被自动认定为挂起状态
            it( 'can be specified without giving an implementation' )

          }
        )
// 临时挂起「测试套件」
// 挂起后，「测试套件」内所有「测试用例」均自动挂起
xdescribe( 'Pending test suite', () => null )
