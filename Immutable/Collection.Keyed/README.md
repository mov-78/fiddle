```ts
class Collection.Keyed<K, V> extends Collection<K, V>
```

```ts
Collection.Keyed<K, V>(collection: Iterable<[K, V]>): Collection.Keyed<K, V>
Collection.Keyed<V>(obj: {[key: string]: V}): Collection.Keyed<string, V>
```

---

- [flip](https://facebook.github.io/immutable-js/docs/#/Collection.Keyed/flip) ☆

```ts
flip(): Collection.Keyed<V, K>
```

- [concat](https://facebook.github.io/immutable-js/docs/#/Collection.Keyed/concat)

```ts
concat<KC, VC>(...collections: Array<Iterable<[KC, VC]>>): Collection.Keyed<K | KC, V | VC>
concat<C>(...collections: Array<{[key: string]: C}>): Collection.Keyed<K | string, V | C>
```

- [map](https://facebook.github.io/immutable-js/docs/#/Collection.Keyed/map)
- [mapKeys](https://facebook.github.io/immutable-js/docs/#/Collection.Keyed/mapKeys) ☆
- [mapEntries](https://facebook.github.io/immutable-js/docs/#/Collection.Keyed/mapEntries) ☆

```ts
map<M>(
    mapper: (value: V, key: K, iter: this) => M,
    context?: any
): Collection.Keyed<K, M>

mapKeys<M>(
    mapper: (key: K, value: V, iter: this) => M,
    context?: any
): Collection.Keyed<M, V>

mapEntries<KM, VM>(
    mapper: (entry: [K, V], index: number, iter: this) => [KM, VM],
    context?: any
): Collection.Keyed<KM, VM>
```

- [flatMap](https://facebook.github.io/immutable-js/docs/#/Collection.Keyed/flatMap)

```ts
flatMap<KM, VM>(
    mapper: (value: V, key: K, iter: this) => Iterable<[KM, VM]>,
    context?: any
): Collection.Keyed<KM, VM>
```

- [filter](https://facebook.github.io/immutable-js/docs/#/Collection.Keyed/filter)

```ts
filter<F>(
    predicate: (value: V, key: K, iter: this) => boolean,
    context?: any
): Collection.Keyed<K, F>

filter(
    predicate: (value: V, key: K, iter: this) => any,
    context?: any
): this
```

- [@@iterator](https://facebook.github.io/immutable-js/docs/#/Collection.Keyed/%5BSymbol.iterator%5D)

```ts
[Symbol.iterator](): IterableIterator<[K, V]>
```

---

- [toJS](https://facebook.github.io/immutable-js/docs/#/Collection.Keyed/toJS)
- [toJSON](https://facebook.github.io/immutable-js/docs/#/Collection.Keyed/toJSON)
- [toArray](https://facebook.github.io/immutable-js/docs/#/Collection.Keyed/toArray)

```ts
toJS(): Object
toJSON(): {[key: string]: V}
toArray(): Array<[K, V]>
```

---

- [toSeq](https://facebook.github.io/immutable-js/docs/#/Collection.Keyed/toSeq)

```ts
toSeq(): Seq.Keyed<K, V>
```
