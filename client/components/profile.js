import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Profile extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="profile-container">
        <div className="email">
          <div>Email: {this.props.user.email}</div>
          <Link to="/profile/edit/email">edit</Link>
        </div>
        <div className="password">
          {this.props.user.googleId ? (
            <div>Not Avaiable as Sign In with Google</div>
          ) : (
            <div>
              <div>Password: {this.props.user.password}</div>
              <Link to="/profile/edit/password">edit</Link>
            </div>
          )}
        </div>
        <Link to="/order-history">Order History</Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
