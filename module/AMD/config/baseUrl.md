[baseUrl](http://requirejs.org/docs/api.html#config-baseUrl) 用于设置模块系统的「基础路径」：

```js
require.config( {
    baseUrl : 'root/path'
} )
```

「基础路径」来源（依优先级排序）：

- 通过 `baseUrl` 选项进行配置
- 通过 [data-main](../data-main.md) 属性推导
- 默认相对于当前文档解析
