该 fiddle 用于演示 `lodash/object` 模块

```sh
$ npm install
$ npm test
```

> - 带有 ✪ 标记的为 in-place 操作
> - 仅考虑非继承（除非带有 `In` 后缀）、可枚举、字符串键下的属性

---

- [create( prototype , [properties] )](https://lodash.com/docs#create)

---

- [assign( object , ...sources )](https://lodash.com/docs#assign) ✪
- [assignIn|extend( object , ...sources )](https://lodash.com/docs#assignIn) ✪
- [assignWith( object , ...sources , customizer )](https://lodash.com/docs#assignWith) ✪
- [assignInWith|extendWith( object , ...sources , customizer )](https://lodash.com/docs#assignInWith) ✪
- [defaults( object , ...sources )](https://lodash.com/docs#defaults) ✪
- [defaultsDeep( object , ...sources )](https://lodash.com/docs#defaultsDeep) ✪

---

- [has( object , path )](https://lodash.com/docs#has)
- [hasIn( object , path )](https://lodash.com/docs#hasIn)
- [get( object , path , [defaultValue] )](https://lodash.com/docs#get)
- [result( object , path , [defaultValue] )](https://lodash.com/docs#result)
- [at( object , ...paths|paths )](https://lodash.com/docs#at)
- [set( object , path , value )](https://lodash.com/docs#set) ✪
- [update( object , path , updater )](https://lodash.com/docs#update) ✪
- [unset( object , path )](https://lodash.com/docs#unset) ✪

---

- [keys( object )](https://lodash.com/docs#keys)
- [keysIn( object )](https://lodash.com/docs#keysIn)
- [values( object )](https://lodash.com/docs#values)
- [valuesIn( object )](https://lodash.com/docs#valuesIn)
- [functions( object )](https://lodash.com/docs#functions)
- [functionsIn( object )](https://lodash.com/docs#functionsIn)

---

- [entries|toPairs( object )](https://lodash.com/docs#toPairs)
- [entriesIn|toPairsIn( object )](https://lodash.com/docs#toPairsIn)

---

> 可以通过 `return false` 来提前终止迭代

- [forIn( object , iteratee )](https://lodash.com/docs#forIn)
- [forInRight( object , iteratee )](https://lodash.com/docs#forInRight)
- [forOwn( object , iteratee )](https://lodash.com/docs#forOwn)
- [forOwnRight( object , iteratee )](https://lodash.com/docs#forOwnRight)

---

- [mapKeys( object , iteratee )](https://lodash.com/docs#mapKeys)
- [mapValues( object , iteratee )](https://lodash.com/docs#mapValues)

---

- [findKey( object , predicate )](https://lodash.com/docs#findKey)
- [findLastKey( object , predicate )](https://lodash.com/docs#findLastKey)

---

- [pick( object , ...key|keys )](https://lodash.com/docs#pick)
- [pickBy( object , predicate )](https://lodash.com/docs#pickBy)
- [omit( object , ...key|keys )](https://lodash.com/docs#omit)
- [omitBy( object , predicate )](https://lodash.com/docs#omitBy)

---

- [invert( object )](https://lodash.com/docs#invert)
- [invertBy( object , iteratee )](https://lodash.com/docs#invertBy)

---

- [invoke( object , path , ...args )](https://lodash.com/docs#invoke)
