import React from 'react'
import {connect} from 'react-redux'

class Profile extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="email-container">
        <div>Old Email</div>
        <div>New Email</div>
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
