```ts
class Stack<T> extends Collection.Indexed<T>
```

```ts
Stack(): Stack<any>
Stack<T>(): Stack<T>
Stack<T>(collection: Iterable<T>): Stack<T>
```

---

- [Stack.isStack](https://facebook.github.io/immutable-js/docs/#/Stack/isStack)
- [Stack.of](https://facebook.github.io/immutable-js/docs/#/Stack/of)

```ts
Stack.isStack(maybeStack: any): boolean
```

```ts
Stack.of<T>(...values: Array<T>): Stack<T>
```

---

- [size](https://facebook.github.io/immutable-js/docs/#/Stack/size)

---

- [peek](https://facebook.github.io/immutable-js/docs/#/Stack/peek)

```ts
peek(): T | undefined // Stack#first()
```

---

- [unshift](https://facebook.github.io/immutable-js/docs/#/Stack/unshift)
- [unshiftAll](https://facebook.github.io/immutable-js/docs/#/Stack/unshiftAll)
- [shift](https://facebook.github.io/immutable-js/docs/#/Stack/shift)
- [push](https://facebook.github.io/immutable-js/docs/#/Stack/push)
- [pushAll](https://facebook.github.io/immutable-js/docs/#/Stack/pushAll)
- [pop](https://facebook.github.io/immutable-js/docs/#/Stack/pop)
- [clear](https://facebook.github.io/immutable-js/docs/#/Stack/clear)

```ts
unshift(...values: Array<T>): Stack<T>
unshiftAll(iter: Iterable<T>): Stack<T>
shift(): Stack<T>
```

```ts
push(...values: Array<T>): Stack<T> // Stack#unshift
pushAll(iter: Iterable<T>): Stack<T> // Stack#unshiftAll
pop(): Stack<T> // Stack#shift
```

```ts
clear(): Stack<T>
```

---

- [concat](https://facebook.github.io/immutable-js/docs/#/Stack/concat)
- [map](https://facebook.github.io/immutable-js/docs/#/Stack/map)
- [flatMap](https://facebook.github.io/immutable-js/docs/#/Stack/flatMap)
- [filter](https://facebook.github.io/immutable-js/docs/#/Stack/filter)
- [zip](https://facebook.github.io/immutable-js/docs/#/Stack/zip)
- [zipAll](https://facebook.github.io/immutable-js/docs/#/Stack/zipAll)
- [zipWith](https://facebook.github.io/immutable-js/docs/#/Stack/zipWith)

```ts
concat<C>(...valuesOrCollections: Array<Iterable<C> | C>): Stack<T | C>
```

```ts
map<M>(
mapper: (value: T, key: number, iter: this) => M,
context?: any
): Stack<M>
```

```ts
flatMap<M>(
mapper: (value: T, key: number, iter: this) => Iterable<M>,
context?: any
): Stack<M>
```

```ts
filter(
predicate: (value: T, index: number, iter: this) => boolean,
context?: any
): this
```

```ts
zip<U>(other: Collection<any, U>): Stack<[T, U]>
zip(...collections: Array<Collection<any, any>>): Stack<any>

zipAll<U>(other: Collection<any, U>): Stack<[T, U]>
zipAll(...collections: Array<Collection<any, any>>): Stack<any>

zipWith<U, Z>(
zipper: (value: T, otherValue: U) => Z,
otherCollection: Collection<any, U>
): Stack<Z>

zipWith<Z>(
zipper: (...any: Array<any>) => Z,
...collections: Array<Collection<any, any>>
): Stack<Z>
```
