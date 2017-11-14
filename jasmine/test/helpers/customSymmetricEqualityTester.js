// 自定义对称判等逻辑
module.exports = function customEqualityTester( actual , expected ) {

    if ( ( typeof actual === 'object' && actual !== null ) &&
         ( typeof expected === 'object' && expected !== null ) &&
         actual.hasOwnProperty( 'id' ) &&
         expected.hasOwnProperty( 'id' ) ) {
        // [1] 若返回 Boolean，则仅调用该判等逻辑，忽略原生判等逻辑
        return actual.id === expected.id
    }

    // [2] 若返回 undefined，则仅调用原生判等逻辑，忽略该判等逻辑

}
