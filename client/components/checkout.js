import React from 'react'
import {connect} from 'react-redux'

class Checkout extends React.Component {
  constructor() {
    super()
    this.state = {
      hasPaid: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({hasPaid: true})
  }

  render() {
    return (
      <React.Fragment>
        <h3>Checkout Here!</h3>
        {!this.state.hasPaid ? (
          <div>
            <h3>Please Review Your Order</h3>
            <hr />
            <button type="button" onClick={this.handleClick}>
              Sumbit Order
            </button>
          </div>
        ) : (
          <h3>Thank you for shopping with us!</h3>
        )}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    itemsInCart: state.order.cart
  }
}

const mapDispatchToProps = dispatch => {}

export default connect(null, null)(Checkout)
