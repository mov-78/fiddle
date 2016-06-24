/* eslint-env commonjs */
/* eslint no-magic-numbers: 0 */

const React = require(`react`)

const SetIntervalMixin = require(`../../mixins/SetIntervalMixin`)

module.exports = React.createClass({

  // ES6 类语法不支持 mixins
  'mixins' : [ SetIntervalMixin ],

  componentDidMount() {
    this.setInterval(this.tick, 1000)
  },

  getInitialState() {
    return {
      'secondsElapsed' : 0
    }
  },

  tick() {
    this.setState({
      'secondsElapsed' : this.state.secondsElapsed + 1
    })
  },

  render() {
    return <time>{ this.state.secondsElapsed }</time>
  }

})
