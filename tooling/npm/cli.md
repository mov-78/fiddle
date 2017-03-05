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
$ npm install [@<scope>/]<pkg>
$ npm install [@<scope>/]<pkg>@<tag>
$ npm install [@<scope>/]<pkg>@<version>
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
$ npm uninstall [@<scope>/]<pkg>
$ npm uninstall [@<scope>/]<pkg>@<tag>
$ npm uninstall [@<scope>/]<pkg>@<version>
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
$ npm outdated [[@<scope>/]<pkg>[@<tag>|<version>]...]
```

- `--depth=<depth>`
- `-g|--global`
- `--json`
- `--long`

```sh
$ npm update [[@<scope>/]<pkg>[@<tag>|<version>]...]
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
$ npm view [@<scope>/]<pkg>[@<tag>|<version>] <field>[.<field>...]
```

---

- [npm-repo](https://docs.npmjs.com/cli/repo)
- [npm-docs](https://docs.npmjs.com/cli/docs)
- [npm-bugs](https://docs.npmjs.com/cli/bugs)

```sh
$ npm repo [[@<scope>/]<pkg>[@<tag>|<version>]]
$ npm docs [[@<scope>/]<pkg>[@<tag>|<version>]]
$ npm bugs [[@<scope>/]<pkg>[@<tag>|<version>]]
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
$ npm unpublish [@<scope>/]<pkg>[@<version>]
```

```sh
$ npm deprecate [@<scope>/]<pkg>[@<version>] <message>
```

---

- [npm-dist-tag](https://docs.npmjs.com/cli/dist-tag)
- [npm-version](https://docs.npmjs.com/cli/version)

```sh
$ npm dist-tag add <pkg>@<version> [<tag>]
$ npm dist-tag rm <pkg> <tag>
$ npm dist-tag ls [<pkg>]
```

```sh
$ npm version <version> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git
```

- `--git-tag-version`
- `-m|--message`

---

[npm-pack](https://docs.npmjs.com/cli/pack)

```sh
$ npm pack [[@<scope>/]<pkg>[@<tag>|<version>]...]
```

---

[npm-link](https://docs.npmjs.com/cli/link)

```sh
$ npm link
$ npm link [@<scope>/]<pkg>[@<tag>|<version>]
```

---

- [npm-help](https://docs.npmjs.com/cli/help)
- [npm-help-search](https://docs.npmjs.com/cli/help-search)

```sh
$ npm help <term> [<term>...]
```

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
