在不同工具间共享目标浏览器及 Node 版本

---

浏览器标识符（不区分大小写）：

- `Android` Android WebView
- `Baidu` 百度浏览器
- `BlackBerry(bb)` Blackberry Browser
- `Chrome` Google Chrome
- `ChromeAndroid(and_chr)` Google Chrome for Android
- `Edge` Microsoft Edge
- `Electron` Electron
- `Explorer(ie)` Internet Explorer
- `ExplorerMobile(ie_mob)` Internet Explorer Mobile
- `Firefox(ff)` Mozilla Firefox
- `FirefoxAndroid(and_ff)` Firefox for Android
- `iOS(ios_saf)` iOS Safari
- `Node` Node.js
- `Opera` Opera
- `OperaMini(op_mini)`Opera Mini
- `OperaMobile(op_mob)` Opera Mobile
- `QQAndroid(and_qq)` QQ Browser for Android
- `Safari` desktop Safari
- `Samsung` Samsung Internet
- `UCAndroid(and_uc)` UC Browser for Android

---

```
> 5%
> 5% in CN
> 5% in alt-AS # 区域
> 5% in my stats

cover 99.5%
cover 99.5% in CN
cover 99.5% in my stats
```

> - [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements)
> - [caniuse-lite/data/regions](https://github.com/ben-eb/caniuse-lite/tree/master/data/regions)

```
ie 6-8 # 闭区间
Firefox >= 20
iOS 7

unreleased versions
unreleased Chrome versions

last 2 versions
last 2 Chrome versions
last 2 major versions
last 2 iOS major versions

since 2015
since 2015-03
since 2015-03-18
last 2 years
```

```
current node

node 10
node 10.4

maintained node versions
```

```
extends @pwn/browserslist-config
```

```
dead # last 2 versions，< 5%，且近 24 个月内官方未提供支持或更新
```

```
Firefox ESR # latest
```

```
defaults
```

> 可以在任何查询前，添加 `not`

---

配置格式：

```
[development]
last 1 chrome version
last 1 firefox version

[production]
> 1%
ie 10
```

```json
{
    "browserslist": {
        "development": [
            "last 1 chrome version",
            "last 1 firefox version"
        ],
        "production": [
            "> 1%",
            "ie 10"
        ]
    }
}
```

> 「环境」配置来源：`BROWSERSLIST_ENV` 或 `NODE_ENV` 环境变量；默认 `production`

配置来源：

- `BROWSERSLIST` 环境变量
- `package.json` 下的 `browserslist` 字段 __[推荐]__
- `browserslist` 或 `.browserslistrc` 配置文件
- 应用的配置项；如 [Autoprefixer](https://github.com/postcss/autoprefixer) 的 `browsers` 配置
- 默认值：`> 0.5%, last 2 versions, Firefox ESR, not dead`

---

启用自定义使用数据：

```
> 5% in my stats

cover 99.5% in my stats
```

> `my stats` 是关键字，不是「自定义使用数据」的文件名。「自定义使用数据」的文件名默认为 `browserslist-stats.json`。可通过环境变量 `BROWSERSLIST_STATS` 来指定「自定义使用数据」文件的引用路径

自定义使用数据格式：

```
{
    "ie": {
        "6": 0.01,
        "7": 0.4,
        "8": 1.5
    },
    "chrome: {
        ...
    }
    ...
}
```

---

```sh
$ browserslist "QUERIES"
$ browserslist --json "QUERIES"
$ browserslist --config="path/to/browserlist/file"
$ browserslist --coverage "QUERIES"
$ browserslist --coverage=US "QUERIES"
$ browserslist --coverage=US,RU,world "QUERIES"
$ browserslist --env="environment name defined in config"
$ browserslist --stats="path/to/browserlist/stats/file"
```

---

`BROWSERSLIST`

指定浏览器版本查询条件

```sh
$ BROWSERSLIST="> 5%" npm run build
```

`BROWSERSLIST_CONFIG`

指定配置文件路径

```sh
$ BROWSERSLIST_CONFIG="./config/browserslist" npm run build
```

`BROWSERSLIST_ENV`

指定所处「环境」

```sh
$ BROWSERSLIST_ENV="development" npm run build
```

`BROWSERSLIST_STATS`

指定「自定义使用数据」路径

```sh
$ BROWSERSLIST_STATS="./config/usage_data.json" npm run build
```
