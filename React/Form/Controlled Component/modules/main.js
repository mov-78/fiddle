/* eslint-env browser, commonjs */
/* eslint no-unused-vars: 0 */

const React = require(`react`)
const ReactDOM = require(`react-dom`)

const ControlledComponent = require(`./components/ControlledComponent`)

ReactDOM.render(<ControlledComponent />, document.querySelector(`main`))
