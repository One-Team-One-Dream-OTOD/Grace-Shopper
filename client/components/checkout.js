import React from 'react'
import {connect} from 'react-redux'
import {checkoutCart, getCart} from '../store/order'
import DisplayCheckout from './display-checkout'

class Checkout extends React.Component {
  constructor() {
    super()
    this.state = {
      hasPaid: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.getCart()
  }

  handleClick() {
    this.props.checkoutCart()
    this.setState({hasPaid: true})
  }

  render() {
    let priceTotal = 0.0
    let subTotal = 0.0
    return (
      <React.Fragment>
        <h3>Checkout Here!</h3>
        {!this.state.hasPaid ? (
          <div className="checkout-row">
            <div className="checkout-full">
              <h3>Please Review Your Order</h3>
              <hr />
              <ul className="checkout-full-list">
                {this.props.itemsInCart.map(item => {
                  subTotal = item.quantity * item.price
                  priceTotal += subTotal
                  return <DisplayCheckout key={item.bookId} item={item} />
                })}
              </ul>
              <h5 className="checkout-total">Total: {priceTotal / 100}</h5>
              <button
                className="button-checkout"
                type="button"
                onClick={this.handleClick}
              >
                Sumbit Order
              </button>
            </div>
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

const mapDispatchToProps = dispatch => {
  return {
    checkoutCart: () => dispatch(checkoutCart()),
    getCart: () => dispatch(getCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
