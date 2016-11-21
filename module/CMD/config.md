## base

模块系统的「基础路径」

```js
seajs.config( {
    base : 'js'
} )
```

## alias

标识别名集

```js
seajs.config( {
    alias : {
        foo : 'bar'
    }
} )
```

> 结构化匹配

## paths

路径别名集

```js
seajs.config( {
    paths : {
        foo : 'bar'
    }
} )
```

> 结构化匹配

## vars

标识变量集

```js
seajs.config( {
    vars : {
        locale : 'zh_CN'
    }
} )
```

> 非结构化匹配（字符串匹配）

## map

路径映射集

```js
seajs.config( {
    map : [
        [ '.js' , '-debug.js' ]
    ]
} )
```

> 非结构化匹配（字符串匹配）

## preload

预加载项

```js
seajs.config( {
    preload : [
        typeof JSON === 'undefined' ? 'json' : '' // 空字符串会被忽略掉
    ]
} )
```

## debug

调试模式

```js
seajs.config( {
    // 调试模式下，加载器不会删除动态插入的 script 标签
    debug : true
} )
```

---

- [配置](https://github.com/seajs/seajs/issues/262)
