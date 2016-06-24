/* eslint-env browser, commonjs */
/* eslint no-console: 0 */

const React = require(`react`)

class AutoFocusInput extends React.Component {

  log() {
    console.log(`It works!`)
  }

  render() {
    return <input ref={ function onLoad(domNode) {
      // 应用在 DOM 节点上时，ref 回调的参数为其对应的 DOM 节点
      if (domNode !== null) {
        domNode.focus()
      }
    } } type="text" />
  }

}

module.exports = AutoFocusInput
