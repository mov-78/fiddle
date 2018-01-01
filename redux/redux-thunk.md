```js
export default function thunkMiddleware ({ dispatch, getState }) {
    return function (next) {
        return function (action) {
            if (typeof action == 'function') {
                return action(dispatch, getState)
            } else {
                return next(action)
            }
        }
    }
}
```

---

- [gaearon/redux-thunk](https://github.com/gaearon/redux-thunk)
