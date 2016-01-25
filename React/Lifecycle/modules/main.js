/* eslint-env browser, commonjs */
/* eslint max-len: 0, no-magic-numbers: 0, no-unused-vars: 0 */

const React = require(`react`)
const ReactDOM = require(`react-dom`)

const TickTock = require(`./components/TickTock`)

const main = document.querySelector(`main`)

setInterval(() => ReactDOM.render(<TickTock time={ (new Date()).toTimeString() }/>, main), 1000)
