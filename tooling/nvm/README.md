## 版本标识

- 完整或部分版本号，同时可以带上可选的 `v` 前缀（如：`6`、`v6`、`6.1.0`、`v6.1.0`）
- 内置别名：`node`（最新版本）、`system`（系统版本）
- 自定义别名

## 常用命令

```sh
$ nvm --help # 显示帮助信息
$ nvm --version # 显示版本信息

$ nvm install [-s] [<VERSION>] # 下载、编译（-s）、安装指定版本；支持 .nvmrc
$ nvm install --reinstall-packages-from=<VERSION> [-s] [<VERSION>] # 下载、编译（-s）、安装指定版本，同时迁移指定版本中的全局包；支持 .nvmrc
$ nvm uninstall <VERSION> # 卸载指定版本

$ nvm use [--silent] [<VERSION>] # 激活指定版本；支持 .nvmrc

$ nvm current # 显示当前激活版本

$ nvm ls [<VERSION>] # 显示本地安装的所有版本；可作模糊匹配
$ nvm ls-remote [<VERSION>] # 显示所有可安装的版本；可作模糊匹配

$ nvm reinstall-packages <VERSION> # 迁移指定版本中的全局包至当前版本

$ nvm alias [<PATTERN>] # 枚举/检索别名
$ nvm alias <NAME> <VERSION> # 设置别名
$ nvm unalias <NAME> # 移除别名

$ nvm which [<VERSION>] # 显示指定版本的安装路径；支持 .nvmrc
```
