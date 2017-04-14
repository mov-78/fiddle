```sh
$ npm help folders
```

```sh
$ npm prefix [-g|--global] # 获取实际 package 目录或（-g|--global）实际 prefix 配置
$ npm [config] get prefix [-g|--global] # 获取用户/全局 prefix 配置
```

> - [npm-prefix](https://docs.npmjs.com/cli/prefix)
> - [config/prefix](https://docs.npmjs.com/misc/config#prefix)

---

__modules__

```sh
$ npm root [-g|--global]
```

- `$(npm prefix)/node_modules`
- `$(npm prefix -g)/lib/node_modules`

__executables__

```sh
$ npm bin [-g|--global]
```

- `$(npm prefix)/node_modules/.bin`
- `$(npm prefix -g)/bin`

__cache__

- `$HOME/.npm`

__man__

- `$(npm prefix -g)/share/man`
