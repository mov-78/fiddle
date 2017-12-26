```
type State = any
```

```
type Action = Object & { type: string }
type AsyncAction = any
type ActionCreator = (...args: any) => Action | AsyncAction
```

```
type Reducer<S> = (state: S, action: Action) => S
```

```
type BaseDispatch<A> = (action: A) => A
type Dispatch = (Action | AsyncAction) => any
```

```
type Store = {
    dispatch: BaseDispatch | Dispatch
    getState: () => State
    subscribe: (listener: () => void) => () => void
    replaceReducer: (reducer: Reducer) => void
}
type StoreCreator = (reducer: Reducer, preloadedState?: State) => Store
type StoreEnhancer = (next: StoreCreator) => StoreCreator
```

```
type MiddlewareAPI = { dispatch: BaseDispatch, getState: () => State }
type Middleware = (MiddlewareAPI) => (next: BaseDispatch | Dispatch) => Dispatch
```

---

- [createStore(reducer: Reducer, preloadedState?: State, enhancer?: StoreEnhancer): Store](https://redux.js.org/docs/api/createStore.html)
- [combineReducers({ [string]: Reducer }): Reducer](https://redux.js.org/docs/api/combineReducers.html)
- [applyMiddleware(...Middleware[]): StoreEnhancer](https://redux.js.org/docs/api/applyMiddleware.html)
