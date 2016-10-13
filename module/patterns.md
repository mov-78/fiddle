基本模式：

```js
var MOD = ( function ( $ ) {
    // ...
    return { /* 模块输出值 */ }
} )( jQuery )
```

---

放大模式：

```js
var MOD = ( function ( MOD ) {
    // 扩展 MOD...
    return MOD
} )( MOD || {} )
```

---

继承模式：

```js
var CHILD = ( function ( PARENT ) {
    var key
    var mod = {}
    for ( key in PARENT ) {
        if ( PARENT.hasOwnProperty( key ) ) {
            mod[ key ] = PARENT[ key ]
        }
    }
    // 扩展 mod...
    return mod
} )( PARENT )
```

---

子模块模式：

```js
MOD.SUB = ( function () {
    // ...
} )()
```

---

- [A JavaScript Module Pattern](http://yuiblog.com/blog/2007/06/12/module-pattern/)
- [JavaScript Module Pattern: In-Depth](http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html)
