[@ignore](http://usejsdoc.org/tags-ignore.html) 用于忽略指定条目：

> 具体语义取决于所使用的模板；对于大部分模板来说（包括默认模板），忽略 `@class`/`@module` 将忽略掉整个类或模块，而忽略 `@namespace` 则仅忽略掉指定命名空间，命名空间下的任何条目都不会被自动忽略掉（丢失命名空间前缀）

```js
/**
 * @class
 * @ignore
 */
function Model() {
}
```

```js
/**
 * @namespace
 * @ignore
 */
let Muk = {
    /**
    * @class
    * @ignore
    */
    Model() {
    }
}
```
