```js
import isPromise from 'is-promise'
import { isFSA } from 'flux-standard-action'

export default function promiseMiddleware ({ dispatch }) {
    return function (next) {
        return function (action) {
            if (!isFSA(action) && isPromise(action)) {
                return action.then(dispatch)
            }
            if (isFSA(action) && isPromise(action.payload)) {
                return action.payload.then(function (result) {
                    dispatch({ ...action, payload: result})
                }, function (error) {
                    dispatch({ ...action, payload: error, error: true })
                    return Promise.reject(error)
                })
            }
            return next(action)
        }
    }
}
```

---

- [acdlite/redux-promise](https://github.com/acdlite/redux-promise)
