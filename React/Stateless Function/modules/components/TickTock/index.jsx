/* eslint-env commonjs */
/* eslint no-unused-vars: 0 */

const React = require(`react`)

module.exports = (props) => <time>{ props.date.toTimeString() }</time>
