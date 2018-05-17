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

```ts
List.isList(maybeList: any): boolean
```

- [List.of](https://facebook.github.io/immutable-js/docs/#/List/of)

```ts
List.of<T>(...values: Array<T>): List<T>
```

---

- [size](https://facebook.github.io/immutable-js/docs/#/List/size) ☆

---

- [set](https://facebook.github.io/immutable-js/docs/#/List/set) ☆
- [insert](https://facebook.github.io/immutable-js/docs/#/List/insert) ☆

```ts
set(index: number, value: T): List<T>
insert(index: number, value: T): List<T>
```

- [delete](https://facebook.github.io/immutable-js/docs/#/List/delete) ☆
- [clear](https://facebook.github.io/immutable-js/docs/#/List/clear) ☆

```ts
delete(index: number): List<T>
clear(): List<T>
```

> `delete` 别名：`remove`

- [push](https://facebook.github.io/immutable-js/docs/#/List/push) ☆
- [pop](https://facebook.github.io/immutable-js/docs/#/List/pop) ☆
- [unshift](https://facebook.github.io/immutable-js/docs/#/List/unshift) ☆
- [shift](https://facebook.github.io/immutable-js/docs/#/List/shift) ☆

```ts
push(...values: Array<T>): List<T>
pop(): List<T>
unshift(...values: Array<T>): List<T>
shift(): List<T>
```

- [update](https://facebook.github.io/immutable-js/docs/#/List/update)

```ts
update(index: number, notSetValue: T, updater: (value: T) => T): this
update(index: number, updater: (value: T) => T): this
update<R>(updater: (value: this) => R): R
```

- [setSize](https://facebook.github.io/immutable-js/docs/#/List/setSize) ☆

```ts
setSize(size: number): List<T>
```

---

- [setIn](https://facebook.github.io/immutable-js/docs/#/List/setIn) ☆

```ts
setIn(keyPath: Iterable<any>, value: any): this
```

- [deleteIn](https://facebook.github.io/immutable-js/docs/#/List/deleteIn) ☆

```ts
deleteIn(keyPath: Iterable<any>): this
```

> `deleteIn` 别名：`removeIn`

- [updateIn](https://facebook.github.io/immutable-js/docs/#/List/updateIn) ☆

```ts
updateIn(
    keyPath: Iterable<any>,
    notSetValue: any,
    updater: (value: any) => any
): this

updateIn(
    keyPath: Iterable<any>,
    updater: (value: any) => any
): this
```

- [mergeIn](https://facebook.github.io/immutable-js/docs/#/List/mergeIn) ☆
- [mergeDeepIn](https://facebook.github.io/immutable-js/docs/#/List/mergeDeepIn) ☆

```ts
mergeIn(keyPath: Iterable<any>, ...collections: Array<any>): this
mergeDeepIn(keyPath: Iterable<any>, ...collections: Array<any>): this
```

---

- [concat](https://facebook.github.io/immutable-js/docs/#/List/concat)

```ts
concat<C>(...valuesOrCollections: Array<Iterable<C> | C>): List<T | C>
```

> `concat` 别名：`merge`

- [map](https://facebook.github.io/immutable-js/docs/#/List/map)

```ts
map<M>(
    mapper: (value: T, key: number, iter: this) => M,
    context?: any
): List<M>
```

- [flatMap](https://facebook.github.io/immutable-js/docs/#/List/flatMap)

```ts
flatMap<M>(
    mapper: (value: T, key: number, iter: this) => Iterable<M>,
    context?: any
): List<M>
```

- [filter](https://facebook.github.io/immutable-js/docs/#/List/filter)

```ts
filter<F>(
    predicate: (value: T, index: number, iter: this) => boolean,
    context?: any
): List<F>

filter(
    predicate: (value: T, index: number, iter: this) => any,
    context?: any
): this
```

- [zip](https://facebook.github.io/immutable-js/docs/#/List/zip)
- [zipAll](https://facebook.github.io/immutable-js/docs/#/List/zipAll)
- [zipWith](https://facebook.github.io/immutable-js/docs/#/List/zipWith)

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
