/* eslint-env commonjs */
/* eslint no-unused-vars: 0 */

const React = require(`react`)

const TickTock = (props) => <time>{ props.date.toTimeString() }</time>

// 无状态组件的函数写法亦支持 propTypes、defaultProps 以及 context
TickTock.propTypes = { 'date' : React.PropTypes.any.isRequired }
TickTock.defaultProps = { 'date' : new Date() }
TickTock.contextTypes = { /* contextTypes */ }

module.exports = TickTock
