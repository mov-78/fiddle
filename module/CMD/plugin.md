## 事件机制

- `seajs.on( type , listener )` — 注册事件句柄
- `seajs.off( [type] , [listener] )` — 移除事件句柄
- `seajs.emit( type , data )` — 触发事件

## 事件类型

__resolve__

将 `id` 解析成为 `uri` 时触发

__load__

开始加载文件时触发

__fetch__

具体获取某个 `uri` 时触发

__request__

发送请求时触发

__define__

执行 `define` 方法时触发

__exec__

执行 `module.factory` 时触发

__config__

调用 `seajs.config` 时触发

__error__

加载脚本文件出现 404 或其他错误时触发

---

- [插件开发指南](https://github.com/seajs/seajs/issues/264)
