import React from 'react'
import {connect} from 'react-redux'

class Profile extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="password-container">
        <img src="pngguru.com-id-butue.png" alt="" />
        <div>Old Password</div>
        <div>New Password</div>
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
