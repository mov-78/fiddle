```sh
$ npm help folders
```

```sh
$ npm prefix [-g|--global] # 获取当前 prefix
$ npm [config] get prefix [-g|--global] # 获取当前 prefix 配置
```

---

__modules__

- `$(npm prefix)/node_modules`
- `$(npm prefix -g)/lib/node_modules`

__executables__

- `$(npm prefix)/node_modules/.bin`
- `$(npm prefix -g)/bin`

__cache__

- `$HOME/.npm`

__man__

- `$(npm prefix -g)/share/man`
