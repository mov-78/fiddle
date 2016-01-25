/* eslint-env commonjs */
/* eslint no-extra-parens: 0 */

const React = require(`react`)

class TickTock extends React.Component {
  render() {
    return (
      <p>
        <time>{ this.props.date.toTimeString() }</time>
      </p>
    )
  }
}

module.exports = TickTock
