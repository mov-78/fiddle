/* eslint-env browser, commonjs */
/* eslint no-unused-vars: 0 */

const React = require(`react`)
const ReactDOM = require(`react-dom`)

const AutoFocusInput = require(`./components/AutoFocusInput`)

ReactDOM.render(<AutoFocusInput ref={ function onLoad(component) {
  // 应用在 ReactElement 上时，ref 回调的参数为其对应的 ReactComponent 实例
  if (component !== null) {

    // 可以通过该实例调用其暴露的指令式接口（Imperative API）
    component.log()

    // 或通过 ReactDOM.findDOMNode 来获取该实例对应的 DOM 节点

  }
} } />, document.querySelector(`main`))
