![解析流程](https://cdn.rawgit.com/pwnn/img/85512e8bc1c76c83167856d89b596fc70914e5d2/fiddle/module/CMD/resolve.svg)

## 相对标识

相对标识相对于当前模块解析

> 相对标识仅出现在 `require` 及 `require.async` 中

## 顶级标识

顶级标识相对于模块系统的「基础路径」解析

> 基础路径：
> - 默认为 `sea.js` 的引用路径
> - 可以通过 `base` 选项进行配置

## 普通路径

普通路径相对于当前页面解析

## 文件扩展名自动添加规则

在解析模块标识时，除非在标识中有问号（`?`）或最后一个字符是井号（`#`），否则都会自动添加 `.js` 扩展名

---

- [模块标识](https://github.com/seajs/seajs/issues/258)
- [Modules/1.1.1](http://wiki.commonjs.org/wiki/Modules/1.1.1)
- [src/util-path.js#L143](https://github.com/seajs/seajs/blob/3.0.0/src/util-path.js#L143)
