> 别名：@virtual

[@abstract](http://usejsdoc.org/tags-abstract.html) 用于标记抽象成员方法：

```js
class Model {
    /** @abstract */
    parse() {
        throw new Error( 'not implemented' )
    }
}
```
