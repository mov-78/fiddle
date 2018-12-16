- `.prettierrc`
- `.prettierrc.toml`
- `prettier.config.js` 或 `prettierrc.js`
- `package.json` 下的 `prettier` 字段

```yml
semi: false
overrides:
    - files: "src/**/*.js" # string | string[]
      excludeFiles: "*.test.js" # string | string[]
      options:
        semi: true
        parser: "flow"
```

- [cosmiconfig](https://github.com/davidtheclark/cosmiconfig)
- [schema](http://json.schemastore.org/prettierrc)

---

```yml
printWidth: 80
tabWidth: 2
useTabs: false
semi: true
singleQuote: false
jsxSingleQuote: false
trailingComma: "none" # "none" | "es5" | "all"
bracketSpacing: true
jsxBracketSameLine: false
arrowParens: "avoid" # "avoid" | "always"
proseWrap: "preserve" # "always" | "never" | "preserve"
htmlWhitespaceSensitivity: "css" # "css" | "strict" | "ignore"
endOfLine: "auto" # "auto" | "lf" | "crlf" | "cr"
```

```yml
requirePragma: false
insertPragma: false
```

```yml
rangeStart: 0
rangeEnd: Infinity
```

- [Option Philosophy](https://prettier.io/docs/en/option-philosophy.html)
- [whitespace-sensitive formatting](https://prettier.io/blog/2018/11/07/1.15.0.html#whitespace-sensitive-formatting)

---

```
prettier [options] [file/glob ...]
```

```sh
--print-width <int>
--tab-width <int>
--use-tabs
--no-semi
--single-quote
--jsx-single-quote
--trailing-comma <none|es5|all>
--no-bracket-spacing
--jsx-bracket-same-line
--arrow-parens <avoid|always>
--prose-wrap <always|never|preserve>
--html-whitespace-sensitivity <css|strict|ignore>
--end-of-line <auto|lf|crlf|cr>
```

```sh
--write
--list-different

--config <path>
--no-config
--config-precedence <cli-override|file-override|prefer-file> # 默认：cli-override
--no-editorconfig
--find-config-path <path>
--ignore-path <path> # 默认：.prettierignore
--with-node-modules

--require-pragma
--insert-pragma

--loglevel <silent|error|warn|log|debug> # 默认：log

--stdin
--stdin-filepath <path>

--debug-check

--file-info <path>

--support-info

--range-start <int>
--range-end <int>

-h, --help <flag>

-v, --version
```

---

```js
prettier.format(source [, options])
prettier.check(source [, options]) // --list-different

prettier.resolveConfig(filePath [, options])
prettier.resolveConfig.sync(filePath [, options])
prettier.resolveConfigFile(filePath [, options])
prettier.resolveConfigFile.sync(filePath [, options])
prettier.clearConfigCache()

prettier.getFileInfo(filePath [, options])
prettier.getFileInfo.sync(filePath [, options])

prettier.getSupportInfo([version])
```
