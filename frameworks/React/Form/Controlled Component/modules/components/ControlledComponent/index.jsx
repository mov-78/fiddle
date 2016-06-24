/* eslint-env commonjs */

const React = require(`react`)

class ControlledComponent extends React.Component {

  constructor() {
    super()
    this.state = { 'value' : `you can't change this` }
  }

  render() {
    return <textarea value={ this.state.value } />
  }

}

module.exports = ControlledComponent
