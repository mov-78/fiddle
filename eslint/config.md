<p align="center"><img src="http://ocv7sq6bh.bkt.clouddn.com/eslint_configuration_cascade-0.svg" alt="eslint configuration cascade"></p>

> .eslintrc.js → .eslintrc.y[a]ml → .eslintrc.json → .eslintrc → eslintConfig

---

```yml
parser: babel-eslint
```

---

```yml
parserOptions:
    ecmaVersion: 5 # {5|6(2015)|7(2016)|8(2017)}
    sourceType: script # {script|module}
    ecmaFeatures:
        globalReturn: false
        impliedStrict: false
        jsx: false
        experimentalObjectRestSpread: false
```

---

```js
/* eslint-env browser, angular/angular */
```

```yml
env:
    browser: true
    angular/angular: true
plugins:
    - angular
```

---

```js
/* global readwrite, readonly:false */
```

```yml
globals:
    readwrite: true
    readonly: false
```

> - [no-undef](http://eslint.org/docs/rules/no-undef)
> - [no-global-assign](http://eslint.org/docs/rules/no-global-assign)

---

```js
/* eslint no-magic-numbers: 0 */
/* eslint no-octal: error */
/* eslint quotes: [ warn , single ] */
/* eslint mocha/no-pending-tests: error */
```

```yml
rules:
    no-magic-numbers: 0 # {0|1|2}
    no-octal: error # {off|warn|error}
    quotes:
        - warn
        - single
    mocha/no-pending-tests: error
plugins:
    - mocha
```

---

```yml
plugins:
    - react # eslint-plugin-react
```

> 全局 ESLint 只能使用全局 ESLint 插件；本地 ESLint 可以同时使用全局及本地 ESLint 插件

---

```yml
extends: standard
```

```yml
extends:
    - eslint:recommended
    - standard # eslint-config-standard
    - plugin:react/recommended # eslint-plugin-react
    - path/to/config
plugins:
    - react
```

---

```yml
overrides:
    - files: # 相对于当前配置文件解析
        - bin/*.js
        - lib/*.js
      excludedFiles: *.test.js
      rules:
        quotes: off
```

> - 只能在配置文件中设置 `overrides`（不支持 CLI 及 pragma）
> - 可以设置除了 `extends`、`overrides`、`root` 之外的所有配置项

---

```js
/* exported identifier */
```

> [no-unused-vars#exported](https://eslint.org/docs/rules/no-unused-vars#exported)

---

```js
/* eslint-enable [rule[, rule...]] */
/* eslint-disable [rule[, rule...]] */

// eslint-disable-line [rule[, rule...]]
// eslint-disable-next-line [rule[, rule...]]
```
