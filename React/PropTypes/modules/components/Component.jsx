/* eslint-env commonjs */

const React = require(`react`)

class Foo {}

class Component extends React.Component {
  render() {
    return <code>React.PropTypes</code>
  }
}

// PropTypes 用于校验 props 类型（该类型校验仅在开发环境中生效）
Component.propTypes = {

  // primitives
  'optionalNumber' : React.PropTypes.number,
  'optionalString' : React.PropTypes.string,
  'optionalBoolean' : React.PropTypes.bool,
  'optionalObject' : React.PropTypes.object,
  'optionalArray' : React.PropTypes.array,
  'optionalFunction' : React.PropTypes.func,

  // React.PropTypes.node
  // Number、String、ReactElement 或仅包含上述数据类型的数组
  'optionalNode' : React.PropTypes.node,

  // React.PropTypes.element
  'optionalElement' : React.PropTypes.element,

  // React.PropTypes.instanceOf
  'optionalInstanceOf' : React.PropTypes.instanceOf(Foo),

  // React.PropTypes.oneOf
  'optionalEnum' : React.PropTypes.oneOf([ `foo`, `bar` ]),

  // React.PropTypes.oneOfType
  'optionalUnion' : React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),

  // React.PropTypes.arrayOf
  'optionalArrayOf' : React.PropTypes.arrayOf(React.PropTypes.number),

  // React.PropTypes.objectOf
  'optionalObjectOf' : React.PropTypes.objectOf(React.PropTypes.string),

  // React.PropTypes.shape
  'optionalObjectWithShape' : React.PropTypes.shape({
    'foo' : React.PropTypes.number,
    'bar' : React.PropTypes.string
  }),

  // React.PropTypes.any
  'requiredAny' : React.PropTypes.any.isRequired,

  // 自定义规则
  customProp(props, propName/* , componentName */) {
    if (!/^customProp$/.test(props[propName])) {
      // 1. 如果校验失败，必须返回 Error 对象
      // 2. 不可以抛出异常，否则会与 React.PropTypes.oneOfType 冲突
      return new Error(`[${propName}] validation failed!`)
    }
  }

}

Component.defaultProps = {

  'optionalNumber' : Number.NaN,
  'optionalString' : ``,
  'optionalBoolean' : true,
  'optionalObject' : {},
  'optionalArray' : [],
  'optionalFunction' : () => null,

  'optionalNode' : [ 1, `2`, <div>ReactElement</div> ],

  'optionalElement' : <div>ReactElement</div>,

  'optionalInstanceOf' : new Foo(),

  'optionalEnum' : `foo`,

  'optionalUnion' : Number.NaN,

  'optionalArrayOf' : [ Number.NaN, Number.Infinity ],

  'optionalObjectOf' : { 'foo' : ``, 'bar' : `` },

  'optionalObjectWithShape' : {
    'foo' : Number.NaN,
    'bar' : `bar`
  },

  'requiredAny' : Number.NaN,

  'customProp' : `customProp`

}

module.exports = Component
