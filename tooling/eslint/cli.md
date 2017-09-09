```sh
$ eslint [options] [file|dir|glob]*
```

---

```sh
$ eslint --no-inline-config ...
$ eslint --no-eslintrc ...
```

```sh
$ eslint -c|--config path/to/config ...
$ eslint -c|--config standard ...
```

---

```sh
$ eslint --parser=babel-eslint
$ eslint --parser-options='ecmaFeatures:{jsx:true}' ...
```

```sh
$ eslint --env=node,browser ...
$ eslint --env=node --env=browser ...
```

```sh
$ eslint --global=require,exports:true ...
$ eslint --global=require --global=exports:true ...
```

```sh
$ eslint --rule='default-case:1,dot-location:[2,property]' ...
$ eslint --rule='default-case:1' --rule='dot-location:[2,property]' ...
```

```sh
$ eslint --plugin=lodash,lodash-fp ...
$ eslint --plugin=lodash --plugin=lodash-fp ...
```

> [Levn Format](https://github.com/gkz/levn#levn-format)

---

```sh
$ cat file-to-lint.js | eslint --stdin ...
```

```sh
$ eslint -o|--output-file=report.html ...
$ eslint -f|--format=html ...
$ eslint --[no-]color ...
```

> [formatters](http://eslint.org/docs/user-guide/formatters/)

---

```sh
$ eslint --quiet ...
$ eslint --max-warnings=10 ...
```

---

```sh
$ eslint --ignore-path=.gitignore ...
$ eslint --ignore-pattern='vendor/*' ...
$ eslint --no-ignore ...
```

---

```sh
$ eslint --cache ...
$ eslint --cache-location=.eslintcache ...
$ eslint --cache-location=.eslintcache/ ...
```

---

```sh
$ eslint --init
$ eslint -h|--help
$ eslint -v|--version
$ eslint --fix ...
$ eslint --print-config ...
```
