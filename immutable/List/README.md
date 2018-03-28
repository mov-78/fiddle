```ts
class List<T> extends Collection.Indexed<T>
```

```ts
List(): List<any>
List<T>(): List<T>
List<T>(collection: Iterable<T>): List<T>
```

---

- [List.isList](https://facebook.github.io/immutable-js/docs/#/List/isList)
- [List.of](https://facebook.github.io/immutable-js/docs/#/List/of)

```ts
List.isList(maybeList: any): boolean
```

```ts
List.of<T>(...values: Array<T>): List<T>
```

---

- [size](https://facebook.github.io/immutable-js/docs/#/List/size)

---

- [set](https://facebook.github.io/immutable-js/docs/#/List/set) ✪
- [insert](https://facebook.github.io/immutable-js/docs/#/List/insert)
- [delete](https://facebook.github.io/immutable-js/docs/#/List/delete)
- [clear](https://facebook.github.io/immutable-js/docs/#/List/clear) ✪
- [push](https://facebook.github.io/immutable-js/docs/#/List/push) ✪
- [pop](https://facebook.github.io/immutable-js/docs/#/List/pop) ✪
- [unshift](https://facebook.github.io/immutable-js/docs/#/List/unshift) ✪
- [shift](https://facebook.github.io/immutable-js/docs/#/List/shift) ✪
- [update](https://facebook.github.io/immutable-js/docs/#/List/update) ✪
- [setSize](https://facebook.github.io/immutable-js/docs/#/List/setSize)

```ts
set(index: number, value: T): List<T>
insert(index: number, value: T): List<T>
```

```ts
delete(index: number): List<T>
clear(): List<T>
```

> `delete` 别名：`remove`

```ts
push(...values: Array<T>): List<T>
pop(): List<T>
```

```ts
unshift(...values: Array<T>): List<T>
shift(): List<T>
```

```ts
update(index: number, notSetValue: T, updater: (value: T) => T): this
update(index: number, updater: (value: T) => T): this
update<R>(updater: (value: this) => R): R
```

```ts
setSize(size: number): List<T>
```

---

- [setIn](https://facebook.github.io/immutable-js/docs/#/List/setIn) ✪
- [deleteIn](https://facebook.github.io/immutable-js/docs/#/List/deleteIn)
- [updateIn](https://facebook.github.io/immutable-js/docs/#/List/updateIn)
- [mergeIn](https://facebook.github.io/immutable-js/docs/#/List/mergeIn)
- [mergeDeepIn](https://facebook.github.io/immutable-js/docs/#/List/mergeDeepIn)

```ts
setIn(keyPath: Iterable<any>, value: any): this
```

```ts
deleteIn(keyPath: Iterable<any>): this
```

> `deleteIn` 别名：`removeIn`

```ts
updateIn(
keyPath: Iterable<any>,
notSetValue: any,
updater: (value: any) => any
): this

updateIn(keyPath: Iterable<any>, updater: (value: any) => any): this
```

```ts
mergeIn(keyPath: Iterable<any>, ...collections: Array<any>): this
mergeDeepIn(keyPath: Iterable<any>, ...collections: Array<any>): this
```

---

- [concat](https://facebook.github.io/immutable-js/docs/#/List/concat) ✪
- [map](https://facebook.github.io/immutable-js/docs/#/List/map)
- [flatMap](https://facebook.github.io/immutable-js/docs/#/List/flatMap)
- [filter](https://facebook.github.io/immutable-js/docs/#/List/filter)
- [zip](https://facebook.github.io/immutable-js/docs/#/List/zip)
- [zipAll](https://facebook.github.io/immutable-js/docs/#/List/zipAll)
- [zipWith](https://facebook.github.io/immutable-js/docs/#/List/zipWith)

```ts
concat<C>(...valuesOrCollections: Array<Iterable<C> | C>): List<T | C>
```

> `concat` 别名：`merge`

```ts
map<M>(
mapper: (value: T, key: number, iter: this) => M,
context?: any
): List<M>
```

```ts
flatMap<M>(
mapper: (value: T, key: number, iter: this) => Iterable<M>,
context?: any
): List<M>
```

```ts
filter(
predicate: (value: T, index: number, iter: this) => boolean,
context?: any
): this
```

```ts
zip<U>(other: Collection<any, U>): List<[T, U]>
zip(...collections: Array<Collection<any, any>>): List<any>

zipAll<U>(other: Collection<any, U>): List<[T, U]>
zipAll(...collections: Array<Collection<any, any>>): List<any>

zipWith<U, Z>(
zipper: (value: T, otherValue: U) => Z,
otherCollection: Collection<any, U>
): List<Z>

zipWith<Z>(
zipper: (...any: Array<any>) => Z,
...collections: Array<Collection<any, any>>
): List<Z>
```
