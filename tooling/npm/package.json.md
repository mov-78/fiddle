```sh
$ npm help package.json
```

---

- [name](https://docs.npmjs.com/files/package.json#name)
- [version](https://docs.npmjs.com/files/package.json#version)

> [semver](./semver.md)

---

- [description](https://docs.npmjs.com/files/package.json#description-1)
- [keywords](https://docs.npmjs.com/files/package.json#keywords)

---

- [author](https://docs.npmjs.com/files/package.json#people-fields-author-contributors)
- [contributors](https://docs.npmjs.com/files/package.json#people-fields-author-contributors)

```json
{ "author" : "NAME <EMAIL> (URL)" }
{ "author" : { "name" : "NAME" , "email" : "EMAIL" , "url" : "URL" } }
```

---

- [dependencies](https://docs.npmjs.com/files/package.json#dependencies)
- [devDependencies](https://docs.npmjs.com/files/package.json#devdependencies)
- [optionalDependencies](https://docs.npmjs.com/files/package.json#optionaldependencies)

```json
{ "dependencies" : { "[@<scope>/]<name>" : "<version>" } }
{ "dependencies" : { "[@<scope>/]<name>" : "<protocol>://[<user>[:<password>]@]<hostname>[:<port>][:][/]<path>[#<commit-ish>]" } }
{ "dependencies" : { "[@<scope>/]<name>" : "github:<username>/<repo>[#<commit-ish>]" } }
{ "dependencies" : { "[@<scope>/]<name>" : "<tarball>" } }
{ "dependencies" : { "[@<scope>/]<name>" : "file:<path>" } }
```

---

- [main](https://docs.npmjs.com/files/package.json#main)

---

- [scripts](https://docs.npmjs.com/files/package.json#scripts)

> [scripts](./scripts.md)

---

- [license](https://docs.npmjs.com/files/package.json#license)

```json
{ "license" : "MIT" }
{ "license" : "(ISC OR GPL-3.0)" }
{ "license" : "SEE LICENSE IN <FILENAME>" }
```

> [spdx.js](https://www.npmjs.com/package/spdx)

---

- [homepage](https://docs.npmjs.com/files/package.json#homepage)
- [repository](https://docs.npmjs.com/files/package.json#repository)

```json
{ "repository" : { "type" : "git" , "url" : "https://github.com/npm/npm.git" } }
{ "repository" : "<username>/<repo>" }
```

- [bugs](https://docs.npmjs.com/files/package.json#bugs)

```json
{ "bugs" : "URL" }
{ "bugs" : { "url" : "URL" , "email" : "EMAIL" } }
```

---

- [private](https://docs.npmjs.com/files/package.json#private)

```json
{ "private" : true }
```

---

- [publishConfig](https://docs.npmjs.com/files/package.json#publishconfig)

```json
{ "publishConfig" : { "access" : "public" } }
```

---

- [bin](https://docs.npmjs.com/files/package.json#bin)

```json
{ "bin" : { "name" : "path/to/executable" } }
{ "bin" : "path/to/executable" }
```

- [preferGlobal](https://docs.npmjs.com/files/package.json#preferglobal)

```json
{ "preferGlobal" : true }
```

---

- [engines](https://docs.npmjs.com/files/package.json#engines)

```json
{ "engines" : { "node" : ">=6.10.0" } }
{ "engines" : { "npm" : ">=4.4.0" } }
```

> [config/engine-strict](https://docs.npmjs.com/misc/config#engine-strict)
