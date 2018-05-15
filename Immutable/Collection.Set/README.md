```ts
class Collection.Set<T> extends Collection<T, T>
```

```ts
Collection.Set<T>(collection: Iterable<T>): Collection.Set<T>
```

---

- [concat](https://facebook.github.io/immutable-js/docs/#/Collection.Set/concat)

```ts
concat<U>(...collections: Array<Iterable<U>>): Collection.Set<T | U>
```

- [map](https://facebook.github.io/immutable-js/docs/#/Collection.Set/map)

```ts
map<M>(
    mapper: (value: T, key: T, iter: this) => M,
    context?: any
): Collection.Set<M>
```

- [flatMap](https://facebook.github.io/immutable-js/docs/#/Collection.Set/flatMap)

```ts
flatMap<M>(
    mapper: (value: T, key: T, iter: this) => Iterable<M>,
    context?: any
): Collection.Set<M>
```

- [filter](https://facebook.github.io/immutable-js/docs/#/Collection.Set/filter)

```ts
filter(
    predicate: (value: T, key: T, iter: this) => boolean,
    context?: any
): this
```

- [@@iterator](https://facebook.github.io/immutable-js/docs/#/Collection.Set/%5BSymbol.iterator%5D)

```ts
[Symbol.iterator](): IterableIterator<T>
```

---

- [toJS](https://facebook.github.io/immutable-js/docs/#/Collection.Set/toJS)
- [toJSON](https://facebook.github.io/immutable-js/docs/#/Collection.Set/toJSON)
- [toArray](https://facebook.github.io/immutable-js/docs/#/Collection.Set/toArray)

```ts
toJS(): Array<any>
toJSON(): Array<T>
toArray(): Array<T>
```

---

- [toSeq](https://facebook.github.io/immutable-js/docs/#/Collection.Set/toSeq)

```ts
toSeq(): Seq.Set<T>
```
