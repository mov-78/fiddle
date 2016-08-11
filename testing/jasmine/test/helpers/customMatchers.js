module.exports = {
    toBeEmpty( util , customSymmetricEqualityTesters ) {

        // http://bit.ly/1ZFlxLT
        //  - util.equals( actual , expected , [customSymmetricEqualityTesters] )
        //  - util.contains( haystack , needle , [customSymmetricEqualityTesters] )
        //  - util.buildFailureMessage( matcherName , isNot , actual , expected )
        //      `Expected ${actual} ${matcherName} ${expected}.`
        //      `Expected ${actual} not ${matcherName} ${expected}.`

        return (
            {

                // compare: 在「正断言」及「负断言」形式中均调用
                // negativeCompare: 仅在「负断言」形式中调用；可选，且覆盖 compare
                compare( actual , expected ) {

                    const TYPE = typeof actual

                    let pass    // 用于判别断言是否成立
                    let message // 用于构建错误信息

                    if ( TYPE === 'string' || Array.isArray( actual ) ) {
                        pass = actual.length === 0
                    } else if ( TYPE === 'object' && actual !== null ) {
                        pass = Object.keys( actual ).length === 0
                    } else {
                        pass = false
                    }

                    if ( pass ) {
                        // 「负断言」不成立时的错误信息
                        message = `Expected ${ actual } to not be empty`
                    } else {
                        // 「正断言」不成立时的错误信息
                        message = `Expected ${ actual } to be empty`
                    }

                    return { pass , message }

                }

            }
        )

    }
}
