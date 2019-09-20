import React from 'react'
import {connect} from 'react-redux'

class Profile extends React.Component {
  componentDidMount() {}

  render() {
    return <div className="orderhistory">Order History PlaceHolder</div>
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
