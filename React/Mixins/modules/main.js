/* eslint-env browser, commonjs */
/* eslint no-unused-vars: 0 */

const React = require(`react`)
const ReactDOM = require(`react-dom`)

const TickTock = require(`./components/TickTock`)

ReactDOM.render(<TickTock />, document.querySelector(`main`))
