import React from 'react'
import {connect} from 'react-redux'
import {getOrders} from '../store/history'

class History extends React.Component {
  componentDidMount() {
    this.props.getOrders()
  }

  render() {
    console.log(this.props.history)
    return <div className="orderhistory">asdf</div>
  }
}

const mapStateToProps = state => {
  return {
    history: state.history
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getOrders: () => dispatch(getOrders())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(History)
