import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Profile extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="profile-container">
        <div>{this.props.user.email}'s Profile Page</div>
        <Link to="/profile/edit/email">Change Email</Link>
        <div className="password">
          {this.props.user.googleId ? (
            <div>Not Available as Sign In with Google</div>
          ) : (
            <Link to="/profile/edit/password">Change Password</Link>
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
