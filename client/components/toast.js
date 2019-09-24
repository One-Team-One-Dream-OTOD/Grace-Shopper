import React, {Component} from 'react'

class Toast extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.onDismissClick()
    }, 5000)
  }

  render() {
    return (
      <React.Fragment>
        <li className="toast" style={{backgroundColor: this.props.color}}>
          <p className="toast__content">{this.props.text}</p>
          <button
            className="toast__dismiss"
            onClick={this.props.onDismissClick}
          >
            x
          </button>
        </li>
      </React.Fragment>
    )
  }

  //prevent uncessary rendering when new toast is added
  shouldComponentUpdate() {
    return false
  }
}

export default Toast
