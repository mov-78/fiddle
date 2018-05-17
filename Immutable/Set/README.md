```ts
class Set<T> extends Collection.Set<T>
```

```ts
Set(): Set<any>
Set<T>(): Set<T>
Set<T>(collection: Iterable<T>): Set<T>
```

---

- [Set.isSet](https://facebook.github.io/immutable-js/docs/#/Set/isSet)

```ts
Set.isSet(maybeSet: any): boolean
```

- [Set.of](https://facebook.github.io/immutable-js/docs/#/Set/of)

```ts
Set.of<T>(...values: Array<T>): Set<T>
```

- [Set.fromKeys](https://facebook.github.io/immutable-js/docs/#/Set/fromKeys)

```ts
Set.fromKeys<T>(iter: Collection<T, any>): Set<T>
Set.fromKeys(obj: {[key: string]: any}): Set<string>
```

- [Set.intersect](https://facebook.github.io/immutable-js/docs/#/Set/intersect)
- [Set.union](https://facebook.github.io/immutable-js/docs/#/Set/union)

```ts
Set.intersect<T>(sets: Iterable<Iterable<T>>): Set<T>
Set.union<T>(sets: Iterable<Iterable<T>>): Set<T>
```

---

- [size](https://facebook.github.io/immutable-js/docs/#/Set/size) ☆

---

- [add](https://facebook.github.io/immutable-js/docs/#/Set/add) ☆

```ts
add(value: T): this
```

- [delete](https://facebook.github.io/immutable-js/docs/#/Set/delete) ☆
- [clear](https://facebook.github.io/immutable-js/docs/#/Set/clear) ☆

```ts
delete(value: T): this
clear(): this
```

> `delete` 别名：`remove`

- [union](https://facebook.github.io/immutable-js/docs/#/Set/union) ☆
- [intersect](https://facebook.github.io/immutable-js/docs/#/Set/intersect) ☆
- [subtract](https://facebook.github.io/immutable-js/docs/#/Set/subtract) ☆

```ts
union<C>(...collections: Array<Iterable<C>>): Set<T | C>
intersect(...collections: Array<Iterable<T>>): this
subtract(...collections: Array<Iterable<T>>): this
```

> - `union` 别名：`merge`
> - `union` 别名：`concat`

---

- [map](https://facebook.github.io/immutable-js/docs/#/Set/map)

```ts
map<M>(
    mapper: (value: T, key: T, iter: this) => M,
    context?: any
): Set<M>
```

- [flatMap](https://facebook.github.io/immutable-js/docs/#/Set/flatMap)

```ts
flatMap<M>(
    mapper: (value: T, key: T, iter: this) => Iterable<M>,
    context?: any
): Set<M>
```

- [filter](https://facebook.github.io/immutable-js/docs/#/Set/filter)

```ts
filter(
    predicate: (value: T, key: T, iter: this) => boolean,
    context?: any
): this
```
