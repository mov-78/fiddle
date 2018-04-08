```ts
class OrderedMap<K, V> extends Map<K, V>
```

```ts
OrderedMap<K, V>(collection: Iterable<[K, V]>): OrderedMap<K, V>
OrderedMap<T>(collection: Iterable<Iterable<T>>): OrderedMap<T, T>
OrderedMap<V>(obj: {[key: string]: V}): OrderedMap<string, V>
OrderedMap<K, V>(): OrderedMap<K, V>
OrderedMap(): OrderedMap<any, any>
```

---

- [OrderedMap.isOrderedMap](https://facebook.github.io/immutable-js/docs/#/OrderedMap/isOrderedMap)

```ts
OrderedMap.isOrderedMap(maybeOrderedMap: any): boolean
```

---

- [size](https://facebook.github.io/immutable-js/docs/#/OrderedMap/size)

---

- [merge](https://facebook.github.io/immutable-js/docs/#/OrderedMap/merge)

```ts
merge<KC, VC>(
...collections: Array<Iterable<[KC, VC]>>
): OrderedMap<K | KC, V | VC>

merge<C>(
...collections: Array<{[key: string]: C}>
): OrderedMap<K | string, V | C>
```

---

- [map](https://facebook.github.io/immutable-js/docs/#/OrderedMap/map)
- [mapKeys](https://facebook.github.io/immutable-js/docs/#/OrderedMap/mapKeys)
- [mapEntries](https://facebook.github.io/immutable-js/docs/#/OrderedMap/mapEntries)
- [flatMap](https://facebook.github.io/immutable-js/docs/#/OrderedMap/flatMap)
- [filter](https://facebook.github.io/immutable-js/docs/#/OrderedMap/filter)
- [flip](https://facebook.github.io/immutable-js/docs/#/OrderedMap/flip)

```ts
map<M>(
mapper: (value: V, key: K, iter: this) => M,
context?: any
): OrderedMap<K, M>

mapKeys<M>(
mapper: (key: K, value: V, iter: this) => M,
context?: any
): OrderedMap<M, V>

mapEntries<KM, VM>(
mapper: (entry: [K, V], index: number, iter: this) => [KM, VM],
context?: any
): OrderedMap<KM, VM>
```

```ts
flatMap<KM, VM>(
mapper: (value: V, key: K, iter: this) => Iterable<[KM, VM]>,
context?: any
): OrderedMap<KM, VM>
```

```ts
filter(
predicate: (value: V, key: K, iter: this) => boolean,
context?: any
): this
```

```ts
flip(): OrderedMap<V, K>
```
