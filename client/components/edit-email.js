import React from 'react'
import {connect} from 'react-redux'
import {updateEmail} from '../store/user'

class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      oldEmail: '',
      newEmail: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('before', this.props.user)
    if (this.state.oldEmail === this.props.user.email) {
      this.props.updateEmail(
        this.props.user.id,
        this.props.user,
        this.state.newEmail
      )
    } else {
      console.log('current email entered was wrong')
    }
    console.log('after', this.props.user)
    this.setState({
      oldEmail: '',
      newEmail: ''
    })
  }

  render() {
    return (
      <div className="email-container">
        <div>Password Change Form</div>
        <form onSubmit={this.handleSubmit}>
          <div className="email-edit">
            <label>Enter Current Email:</label>
            <input
              type="text"
              name="oldEmail"
              value={this.state.oldEmail}
              onChange={this.handleChange}
            />
          </div>
          <div className="email-edit">
            <label>Enter New Email:</label>
            <input
              type="text"
              name="newEmail"
              value={this.state.newEmail}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateEmail: (userId, user, newEmail) =>
      dispatch(updateEmail(userId, user, newEmail))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
