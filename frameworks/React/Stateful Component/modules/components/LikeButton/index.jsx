/* eslint-env commonjs */
/* eslint max-len: 0 */

const React = require(`react`)

class LikeButton extends React.Component {
  constructor() {
    super()
    this.state = {
      'liked' : false
    }
  }
  handleButtonClick() {
    this.setState({
      'liked' : !this.state.liked
    })
  }
  render() {
    return <button onClick={ this.handleButtonClick.bind(this) }>{ this.state.liked ? `unlike` : `like` }</button>
  }
}

module.exports = LikeButton
