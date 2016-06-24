/* eslint-env browser, commonjs */

module.exports = {

  componentWillMount() {
    this.intervals = []
  },

  componentWillUnmount() {
    this.intervals.forEach(clearInterval)
  },

  setInterval(...args) {
    this.intervals.push(setInterval(...args))
  }

}
