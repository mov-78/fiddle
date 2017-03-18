[npm-init](https://docs.npmjs.com/cli/init)

```sh
$ npm init
```

- `-y|--yes|-f|--force`
- `--scope=<scope>`

---

- [npm-install](https://docs.npmjs.com/cli/install)
- [npm-install-test](https://docs.npmjs.com/cli/install-test)
- [npm-uninstall](https://docs.npmjs.com/cli/uninstall)

```sh
$ npm install
$ npm install <folder>
$ npm install <tarball>
$ npm install [@<scope>/]<name>[@<tag|version>]
$ npm install <protocol>://[<user>[:<password>]@]<hostname>[:<port>][:][/]<path>[#<commit-ish>]
$ npm install github:<username>/<repo>[#<commit-ish>]
```

- `-S|--save`
- `-D|--save-dev`
- `-O|--save-optional`
- `-E|--save-exact`
- `--production`
- `--no-optional`
- `--only={prod[uction]|dev[elopment]}`
- `-g|--global`
- `--no-shrinkwrap`
- `-f|--force`
- `--dry-run`

> 别名：i

```sh
$ npm uninstall [@<scope>/]<name>[@<tag|version>]
```

- `-S|--save`
- `-D|--save-dev`
- `-O|--save-optional`
- `-g|--global`

> 别名：remove、rm、r、un、unlink

---

[npm-ls](https://docs.npmjs.com/cli/ls)

```sh
$ npm ls
```

- `--depth=<depth>`
- `--prod[uction]`
- `--development`
- `--only={prod[uction]|dev[elopment]}`
- `-g|--global`
- `--json`
- `--long`

> 别名：list、la、ll

---

- [npm-outdated](https://docs.npmjs.com/cli/outdated)
- [npm-update](https://docs.npmjs.com/cli/update)

```sh
$ npm outdated [[@<scope>/]<name>[@<tag|version>]...]
```

- `--depth=<depth>`
- `-g|--global`
- `--json`
- `--long`

```sh
$ npm update [[@<scope>/]<name>[@<tag|version>]...]
```

- `-g|--global`
- `-S|--save`
- `-D|--save-dev`
- `-O|--save-optional`

---

- [npm-test](https://docs.npmjs.com/cli/test)
- [npm-run-script](https://docs.npmjs.com/cli/run-script)
- [npm-start](https://docs.npmjs.com/cli/start)
- [npm-stop](https://docs.npmjs.com/cli/stop)
- [npm-restart](https://docs.npmjs.com/cli/restart)

```sh
$ npm test [-- <args>]
$ npm run[-script] [<stage>] [-- <args>]
$ npm start [-- <args>]
$ npm stop [-- <args>]
$ npm restart [-- <args>]
```

---

[npm-view](https://docs.npmjs.com/cli/view)

```sh
$ npm view [@<scope>/]<name>[@<tag|version>] <field>[.<field>...]
```

---

- [npm-repo](https://docs.npmjs.com/cli/repo)
- [npm-docs](https://docs.npmjs.com/cli/docs)
- [npm-bugs](https://docs.npmjs.com/cli/bugs)

```sh
$ npm repo [[@<scope>/]<name>[@<tag|version>]]
$ npm docs [[@<scope>/]<name>[@<tag|version>]]
$ npm bugs [[@<scope>/]<name>[@<tag|version>]]
```

---

- [npm-prune](https://docs.npmjs.com/cli/prune)
- [npm-dedupe](https://docs.npmjs.com/cli/dedupe)

```sh
$ npm prune
$ npm dedupe
```

---

- [npm-login](https://docs.npmjs.com/cli/adduser)
- [npm-logout](https://docs.npmjs.com/cli/logout)

```sh
$ npm login
$ npm logout
```

- `--registry=<registry>`
- `--scope=@<scope>`

---

- [npm-publish](https://docs.npmjs.com/cli/publish)
- [npm-unpublish](https://docs.npmjs.com/cli/unpublish)
- [npm-deprecate](https://docs.npmjs.com/cli/deprecate)

```sh
$ npm publish [<tarball>|<folder>]
```

- `--tag=<tag>`
- `--access={public|restricted}`
- `--registry=<registry>`

```sh
$ npm unpublish [@<scope>/]<name>[@<version>]
```

```sh
$ npm deprecate [@<scope>/]<name>[@<version>] <message>
```

---

- [npm-dist-tag](https://docs.npmjs.com/cli/dist-tag)
- [npm-version](https://docs.npmjs.com/cli/version)

```sh
$ npm dist-tag add <name>@<version> [<tag>]
$ npm dist-tag rm <name> <tag>
$ npm dist-tag ls [<name>]
```

```sh
$ npm version <version> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git
```

- `--git-tag-version`
- `-m|--message`

---

[npm-shrinkwrap](https://docs.npmjs.com/cli/shrinkwrap)

```sh
$ npm shrinkwrap
```

---

[npm-link](https://docs.npmjs.com/cli/link)

```sh
$ npm link # step-1
$ npm link [@<scope>/]<name>[@<tag|version>] # step-2
```

---

[npm-pack](https://docs.npmjs.com/cli/pack)

```sh
$ npm pack [[@<scope>/]<name>[@<tag|version>]...]
```

---

[npm-config](https://docs.npmjs.com/cli/config)

```sh
$ npm config list
$ npm [config] get <key>
$ npm [config] set <key> [<value>]
$ npm config delete <key>
$ npm config edit
```

- `-g|--global`

---

- [npm-bin](https://docs.npmjs.com/cli/bin)
- [npm-prefix](https://docs.npmjs.com/cli/prefix)
- [npm-root](https://docs.npmjs.com/cli/root)

```sh
$ npm bin
$ npm prefix
$ npm root
```

- `-g|--global`

---

- [npm-help](https://docs.npmjs.com/cli/help)
- [npm-help-search](https://docs.npmjs.com/cli/help-search)

```sh
$ npm help <term> [<term>...]
```

- `--usage`
- `--viewer={man|browser}`

```sh
$ npm help-search <text>
```

- `--long`

---

[npm-completion](https://docs.npmjs.com/cli/completion)

```sh
$ source <(npm completion)
$ npm completion >> ~/.bashrc
```
