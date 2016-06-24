/* eslint-env commonjs */

const React = require(`react`)

class Foo {}

class Demo extends React.Component {
  render() {
    return <code>React.PropTypes</code>
  }
}

// PropTypes 用于校验 props 类型（该类型校验仅在开发环境中生效）
Demo.propTypes = {

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
  // 所有校验规则均可追加 isRequired，用于声明该属性为必须项
  'requiredAny' : React.PropTypes.any.isRequired,

  // 自定义规则
  customProp(props, propName/* , componentName */) {
    if (!/^customProp$/.test(props[propName])) {
      // 1. 如果校验失败，必须返回 Error 对象
      // 2. 不可以抛出异常，否则会与 React.PropTypes.oneOfType 冲突
      // 3. 默认为必须项
      return new Error(`[${propName}] validation failed!`)
    }
  }

}

Demo.defaultProps = {

  // primitives
  'optionalNumber' : Number.NaN,
  'optionalString' : ``,
  'optionalBoolean' : true,
  'optionalObject' : {},
  'optionalArray' : [],
  'optionalFunction' : () => null,

  // React.PropTypes.node
  'optionalNode' : [ Number.NaN, ``, <div>ReactElement</div> ],

  // React.PropTypes.element
  'optionalElement' : <div>ReactElement</div>,

  // React.PropTypes.instanceOf
  'optionalInstanceOf' : new Foo(),

  // React.PropTypes.oneOf
  'optionalEnum' : `foo`,

  // React.PropTypes.oneOfType
  'optionalUnion' : Number.NaN,

  // React.PropTypes.arrayOf
  'optionalArrayOf' : [ Number.NaN, Number.Infinity ],

  // React.PropTypes.objectOf
  'optionalObjectOf' : { 'foo' : ``, 'bar' : `` },

  // React.PropTypes.shape
  'optionalObjectWithShape' : {
    'foo' : Number.NaN,
    'bar' : `bar`
  },

  // React.PropTypes.any.isRequired
  'requiredAny' : Number.NaN,

  // 自定义规则
  'customProp' : `customProp`

}

module.exports = Demo
