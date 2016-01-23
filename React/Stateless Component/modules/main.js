/* eslint-env browser, commonjs */
/* eslint max-len:0, no-magic-numbers: 0, no-unused-vars: 0 */

const React = require(`react`)
const ReactDOM = require(`react-dom`)

const Hello = require(`./components/Hello`)

setInterval(() => ReactDOM.render(<Hello date={ new Date() } />, document.querySelector(`main`)), 500)
