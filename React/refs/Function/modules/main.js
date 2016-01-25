/* eslint-env browser, commonjs */
/* eslint no-unused-vars: 0 */

const React = require(`react`)
const ReactDOM = require(`react-dom`)

const AutoFocusInput = require(`./components/AutoFocusInput`)

ReactDOM.render(<AutoFocusInput ref={ function onLoad(component) {
  // 应用在 ReactElement 上时，ref 回调的参数为其对应的 React.Component 实例
  if (component !== null) {
    component.log() // 可以通过该实例调用暴露的接口
  }
} } />, document.querySelector(`main`))
