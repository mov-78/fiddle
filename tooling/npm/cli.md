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
$ npm install <tarball_file>
$ npm install <tarball_url>
$ npm install [@<scope>/]<name>
$ npm install [@<scope>/]<name>@<tag>
$ npm install [@<scope>/]<name>@<version>
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
$ npm uninstall [@<scope>/]<name>
$ npm uninstall [@<scope>/]<name>@<tag>
$ npm uninstall [@<scope>/]<name>@<version>
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
$ npm outdated [[@<scope>/]<name>[@<tag>|<version>]...]
```

- `--depth=<depth>`
- `-g|--global`
- `--json`
- `--long`

```sh
$ npm update [[@<scope>/]<name>[@<tag>|<version>]...]
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
$ npm run[-script] [<command>] [-- <args>]
$ npm start [-- <args>]
$ npm stop [-- <args>]
$ npm restart [-- <args>]
```

---

[npm-view](https://docs.npmjs.com/cli/view)

```sh
$ npm view [@<scope>/]<name>[@<tag>|<version>] <field>[.<field>...]
```

---

- [npm-repo](https://docs.npmjs.com/cli/repo)
- [npm-docs](https://docs.npmjs.com/cli/docs)
- [npm-bugs](https://docs.npmjs.com/cli/bugs)

```sh
$ npm repo [[@<scope>/]<name>[@<tag>|<version>]]
$ npm docs [[@<scope>/]<name>[@<tag>|<version>]]
$ npm bugs [[@<scope>/]<name>[@<tag>|<version>]]
```

---

- [npm-prune](https://docs.npmjs.com/cli/prune)
- [npm-dedupe](https://docs.npmjs.com/cli/dedupe)

```sh
$ npm prune
$ npm dedupe
```

---

[npm-completion](https://docs.npmjs.com/cli/completion)

```sh
$ source <(npm completion)
$ npm completion >> ~/.bashrc
```
