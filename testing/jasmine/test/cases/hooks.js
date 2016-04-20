describe( 'Hooks'
        , function () {

            // 在进入该「测试套件」时，执行该「测试套件」里第一个「测试用例」之前调用
            beforeAll(/* setup function */)
            // 在离开该「测试套件」时，执行该「测试套件」里最后一个「测试用例」之后调用
            afterAll(/* teardown function */)

            // beforeEach 在每个「测试用例」调用之前调用
            // 若存在父级「测试套件」，则先调用父级「测试套件」里的 beforeEach 方法（递归调用）
            beforeEach(/* setup function */)
            // afterEach 在每个「测试用例」调用之后调用
            // 若存在父级「测试套件」，则在调用该「测试套件」的 afterEach 方法后调用父级「测试套件」里的 afterEach 方法（递归调用）
            afterEach(/* teardown function */)

            // 同时，每个 beforeEach → it → afterEach 迭代共享同一个上下文对象（this）
            // 该上下文对象在每个迭代开始时（根级「测试套件」的 beforeEach）自动清空为空对象

          }
        )
