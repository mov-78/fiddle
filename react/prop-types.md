```js
import PropTypes from 'prop-types'

T.propTypes = {

    optionalNumber: PropTypes.number,
    optionalString: PropTypes.string,
    optionalBool: PropTypes.bool,
    optionalSymbol: PropTypes.symbol,
    optionalObject: PropTypes.object,
    optionalArray: PropTypes.array,
    optionalFunc: PropTypes.func,

    requiredAny: PropTypes.any.isRequired,

    optionalNode: PropTypes.node,
    optionalElement: PropTypes.element,

    optionalT: PropTypes.instanceOf(T),

    optionalEnum: PropTypes.oneOf(['iOS', 'android']),
    optionalUnion: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
    optionalObjectOf: PropTypes.objectOf(PropTypes.string),
    optionalObjectWithShape: PropTypes.shape({env: PropTypes.oneOf(['dev', 'prod'])})

}
```

---

- [prop-types](https://www.npmjs.com/package/prop-types)
- [Typechecking With PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)
