import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Profile extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="profile-container">
        <div className="profile">
          <h1 className="profile-name">
            {this.props.user.email}'s Profile Page
          </h1>
          <Link to="/profile/edit/email" className="edit-btns">
            Change Email
          </Link>
          <Link to="/order-history" className="edit-btns">
            Order History
          </Link>
          <div className="password">
            {this.props.user.googleId ? (
              <h4 className="warning">
                You are not Available to change password as Sign In with Google
              </h4>
            ) : (
              <Link to="/profile/edit/password" className="edit-btns">
                Change Password
              </Link>
            )}
          </div>
        </div>
        <img src="pngguru.com-id-ezcry.png" alt="" className="profile-img" />
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
