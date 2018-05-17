```ts
class Seq.Set<T> extends Seq<T, T>, Collection.Set<T>
```

```ts
Seq.Set(): Seq.Set<any>
Seq.Set<T>(): Seq.Set<T>
Seq.Set<T>(collection: Iterable<T>): Seq.Set<T>
```

---

- [Seq.Set.of](https://facebook.github.io/immutable-js/docs/#/Seq.Set/of)

```ts
Seq.Set.of<T>(...values: Array<T>): Seq.Set<T>
```

---

- [toJS](https://facebook.github.io/immutable-js/docs/#/Seq.Set/toJS)
- [toJSON](https://facebook.github.io/immutable-js/docs/#/Seq.Set/toJSON)
- [toArray](https://facebook.github.io/immutable-js/docs/#/Seq.Set/toArray)

```ts
toJS(): Array<any>
toJSON(): Array<T>
toArray(): Array<T>
```

- [toSeq](https://facebook.github.io/immutable-js/docs/#/Seq.Set/toSeq)

```ts
toSeq(): this
```

---

- [concat](https://facebook.github.io/immutable-js/docs/#/Seq.Set/concat)

```ts
concat<U>(...collections: Array<Iterable<U>>): Seq.Set<T | U>
```

---

- [map](https://facebook.github.io/immutable-js/docs/#/Seq.Set/map)

```ts
map<M>(
    mapper: (value: T, key: T, iter: this) => M,
    context?: any
): Seq.Set<M>
```

- [flatMap](https://facebook.github.io/immutable-js/docs/#/Seq.Set/flatMap)

```ts
flatMap<M>(
    mapper: (value: T, key: T, iter: this) => Iterable<M>,
    context?: any
): Seq.Set<M>
```

- [filter](https://facebook.github.io/immutable-js/docs/#/Seq.Set/filter)

```ts
filter<F>(
    predicate: (value: T, key: T, iter: this) => boolean,
    context?: any
): Seq.Set<F>

filter(
    predicate: (value: T, key: T, iter: this) => any,
    context?: any
): this
```
