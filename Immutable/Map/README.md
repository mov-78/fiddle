```ts
class Map<K, V> extends Collection.Keyed<K, V>
```

```ts
Map<K, V>(collection: Iterable<[K, V]>): Map<K, V>
Map<T>(collection: Iterable<Iterable<T>>): Map<T, T>
Map<V>(obj: {[key: string]: V}): Map<string, V>
Map<K, V>(): Map<K, V>
Map(): Map<any, any>
```

---

- [Map.isMap](https://facebook.github.io/immutable-js/docs/#/Map/isMap)

```ts
Map.isMap(maybeMap: any): boolean
```

---

- [size](https://facebook.github.io/immutable-js/docs/#/Map/size)

---

- [set](https://facebook.github.io/immutable-js/docs/#/Map/set)
- [delete](https://facebook.github.io/immutable-js/docs/#/Map/delete)
- [deleteAll](https://facebook.github.io/immutable-js/docs/#/Map/deleteAll)
- [clear](https://facebook.github.io/immutable-js/docs/#/Map/clear)
- [update](https://facebook.github.io/immutable-js/docs/#/Map/update)
- [merge](https://facebook.github.io/immutable-js/docs/#/Map/merge)
- [mergeWith](https://facebook.github.io/immutable-js/docs/#/Map/mergeWith)
- [mergeDeep](https://facebook.github.io/immutable-js/docs/#/Map/mergeDeep)
- [mergeDeepWith](https://facebook.github.io/immutable-js/docs/#/Map/mergeDeepWith)

```ts
set(key: K, value: V): this
```

```ts
delete(key: K): this
deleteAll(keys: Iterable<K>): this
clear(): this
```

> - `delete` 别名：`remove`
> - `deleteAll` 别名：`removeAll`

```ts
update(key: K, notSetValue: V, updater: (value: V) => V): this
update(key: K, updater: (value: V) => V): this
update<R>(updater: (value: this) => R): R
```

```ts
merge(...collections: Array<Iterable<[K, V]> | {[key: string]: V}>): this

mergeWith(
merger: (oldVal: V, newVal: V, key: K) => V,
...collections: Array<Iterable<[K, V]> | {[key: string]: V}>
): this

mergeDeep(...collections: Array<Iterable<[K, V]> | {[key: string]: V}>): this

mergeDeepWith(
merger: (oldVal: V, newVal: V, key: K) => V,
...collections: Array<Iterable<[K, V]> | {[key: string]: V}>
): this
```

---

- [setIn](https://facebook.github.io/immutable-js/docs/#/Map/setIn)
- [deleteIn](https://facebook.github.io/immutable-js/docs/#/Map/deleteIn)
- [updateIn](https://facebook.github.io/immutable-js/docs/#/Map/updateIn)
- [mergeIn](https://facebook.github.io/immutable-js/docs/#/Map/mergeIn)
- [mergeDeepIn](https://facebook.github.io/immutable-js/docs/#/Map/mergeDeepIn)

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

updateIn(
keyPath: Iterable<any>,
updater: (value: any) => any
): this
```

```ts
mergeIn(keyPath: Iterable<any>, ...collections: Array<any>): this
mergeDeepIn(keyPath: Iterable<any>, ...collections: Array<any>): this
```

---

- [map](https://facebook.github.io/immutable-js/docs/#/Map/map)
- [mapKeys](https://facebook.github.io/immutable-js/docs/#/Map/mapKeys)
- [mapEntries](https://facebook.github.io/immutable-js/docs/#/Map/mapEntries)
- [flatMap](https://facebook.github.io/immutable-js/docs/#/Map/flatMap)
- [filter](https://facebook.github.io/immutable-js/docs/#/Map/filter)
- [flip](https://facebook.github.io/immutable-js/docs/#/Map/flip)

```ts
map<M>(
mapper: (value: V, key: K, iter: this) => M,
context?: any
): Map<K, M>

mapKeys<M>(
mapper: (key: K, value: V, iter: this) => M,
context?: any
): Map<M, V>

mapEntries<KM, VM>(
mapper: (entry: [K, V], index: number, iter: this) => [KM, VM],
context?: any
): Map<KM, VM>
```

```ts
flatMap<KM, VM>(
mapper: (value: V, key: K, iter: this) => Iterable<[KM, VM]>,
context?: any
): Map<KM, VM>
```

```ts
filter(
predicate: (value: V, key: K, iter: this) => boolean,
context?: any
): this
```

```ts
flip(): Map<V, K>
```
