/* eslint-env commonjs */

const React = require(`react`)

class AutoFocusInput extends React.Component {

  componentDidMount() {
    this.refs.input.focus()
  }

  render() {
    return <input ref="input" type="text" />
  }

}

module.exports = AutoFocusInput
