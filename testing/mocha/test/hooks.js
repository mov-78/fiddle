const noop = function noop() {}

describe( 'Hooks'
        , function () {

            // before( [description], [hook] )
            // 在进入该「测试套件」时，执行该「测试套件」里第一个「测试用例」之前调用
            before( function ( done ) {
                      setTimeout( done, 0 )
                    }
                  )

            // after( [description], [hook] )
            // 在离开该「测试套件」时，执行该「测试套件」里最后一个「测试用例」之后调用
            after( Promise.resolve )

            // beforeEach( [description], [hook] )
            // 在每个「测试用例」调用之前调用
            // 若存在父级「测试套件」，则先调用父级「测试套件」里的 beforeEach 方法（递归调用）
            beforeEach()

            // afterEach( [description], [hook] )
            // 在每个「测试用例」调用之后调用
            // 若存在父级「测试套件」，则在调用该「测试套件」的 afterEach 方法后调用父级「测试套件」里的 afterEach 方法（递归调用）
            afterEach()

          }
        )


//
// root-level hooks
// hidden 'root-suite'
//

before( noop )
after( noop )
beforeEach( noop )
afterEach( noop )
