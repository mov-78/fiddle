```ts
class Seq<K, V> extends Collection<K, V>
```

```ts
Seq<S>(seq: S): S

Seq<K, V>(collection: Collection.Keyed<K, V>): Seq.Keyed<K, V>
Seq<T>(collection: Collection.Indexed<T>): Seq.Indexed<T>
Seq<T>(collection: Collection.Set<T>): Seq.Set<T>

Seq<T>(collection: Iterable<T>): Seq.Indexed<T>
Seq<V>(obj: {[key: string]: V}): Seq.Keyed<string, V>

Seq(): Seq<any, any>
```

---

- [Seq.isSeq](https://facebook.github.io/immutable-js/docs/#/Seq/isSeq)

```ts
Seq.isSeq(maybeSeq: any): boolean
```

---

- [size](https://facebook.github.io/immutable-js/docs/#/Seq/size) ☆

---

- [cacheResult](https://facebook.github.io/immutable-js/docs/#/Seq/cacheResult) ☆

```ts
cacheResult(): this
```

---

- [map](https://facebook.github.io/immutable-js/docs/#/Seq/map)

```ts
map<M>(
    mapper: (value: V, key: K, iter: this) => M,
    context?: any
): Seq<K, M>

map<M>(
    mapper: (value: V, key: K, iter: this) => M,
    context?: any
): Seq<M, M>
```

- [flatMap](https://facebook.github.io/immutable-js/docs/#/Seq/flatMap)

```ts
flatMap<M>(
    mapper: (value: V, key: K, iter: this) => Iterable<M>,
    context?: any
): Seq<K, M>

flatMap<M>(
    mapper: (value: V, key: K, iter: this) => Iterable<M>,
    context?: any
): Seq<M, M>
```

- [filter](https://facebook.github.io/immutable-js/docs/#/Seq/filter)

```ts
filter<F>(
    predicate: (value: V, key: K, iter: this) => boolean,
    context?: any
): Seq<K, F>

filter(
    predicate: (value: V, key: K, iter: this) => any,
    context?: any
): this
```
