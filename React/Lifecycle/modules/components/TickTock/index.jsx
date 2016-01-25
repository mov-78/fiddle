/* eslint-env browser, commonjs */
/* eslint no-console: 0 */

const React = require(`react`)

class TickTock extends React.Component {

  render() {
    return <time>{ this.props.time }</time>
  }

  //
  // Mounting
  //

  // 在第一次渲染前触发；仅触发一次（客户端及服务端各一次）
  componentWillMount() {
    console.info(`componentWillMount`)
  }

  // 在第一次渲染后触发；仅触发一次（仅客户端）
  //  - refs 此时可用
  //  - 优先触发子组件的 componentDidMount 方法
  componentDidMount() {
    console.info(`componentDidMount`)
  }


  //
  // Updating（该类别下所有方法均不会在第一次渲染时触发）
  //

  // 在获取新的 props 时触发
  componentWillReceiveProps(nextProps) {
    console.group(`componentWillReceiveProps`)
    console.log(`nextProps:`, nextProps)
    console.groupEnd()
  }

  // 在获取新的 props 或 state 后，即将进行下一次渲染前触发
  // 若返回 false：
  //  - render 方法不会被调用
  //  - componentWillUpdate 不会触发
  //  - componentDidUpdate 不会触发
  shouldComponentUpdate(nextProps, nextState) {
    console.group(`shouldComponentUpdate`)
    console.log(`nextProps:`, nextProps)
    console.log(`nextState:`, nextState)
    console.groupEnd()
    return true
  }

  // 在获取新的 props 或 state 后，即将进行下一次渲染前触发
  //  - componentWillUpdate 内不可调用 this.setState
  componentWillUpdate(nextProps, nextState) {
    console.group(`componentWillUpdate`)
    console.log(`nextProps:`, nextProps)
    console.log(`nextState:`, nextState)
    console.groupEnd()
  }

  // 在成功渲染后触发
  componentDidUpdate(prevProps, prevState) {
    console.group(`componentDidUpdate`)
    console.log(`prevProps:`, prevProps)
    console.log(`prevState:`, prevState)
    console.groupEnd()
  }


  //
  // Unmounting
  //

  // 在组件移除 DOM 之前触发
  componentWillUnmount() {
    console.info(`componentWillUnmount`)
  }

}

module.exports = TickTock
