```js
import PropTypes from 'prop-types'

class ContextProvider extends Component {
    getChildContext() {
        return { /* ... */ }
    }
}

ContextProvider.childContextTypes = { /* ... */ }
```

```js
import PropTypes from 'prop-types'

class ContextReceiver extends Component {
    constructor(props, context) { /* ... */ }
    componentWillReceiveProps(nextProps, nextContext) { /* ... */ }
    shouldComponentUpdate(nextProps, nextState, nextContext) { /* ... */ }
    componentWillUpdate(nextProps, nextState, nextContext) { /* ... */ }
    render() { /* this.context */ }
}

ContextReceiver.contextTypes = { /* ... */ }
```

---

- [Context](https://reactjs.org/docs/context.html)
