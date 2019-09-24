import React from 'react'
import {connect} from 'react-redux'
import {checkoutCart, getCart} from '../store/order'
import {Elements, StripeProvider} from 'react-stripe-elements'
import CheckoutForm from './checkout-form'

class Checkout extends React.Component {
  componentDidMount() {
    this.props.getCart()
  }

  render() {
    let priceTotal = 0.0
    let subTotal = 0.0

    //make priceTotal
    this.props.itemsInCart.forEach(item => {
      subTotal = item.quantity * item.price
      priceTotal += subTotal
    })

    return (
      <React.Fragment>
        <StripeProvider apiKey="pk_test_kkhT2zreOIZa5EjrJcaCp5Qs0050elhvm0">
          <div className="example">
            <Elements>
              <CheckoutForm
                total={priceTotal}
                itemsInCart={this.props.itemsInCart}
                checkoutCart={this.props.checkoutCart}
                currentUser={this.props.currentUser}
              />
            </Elements>
          </div>
        </StripeProvider>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    itemsInCart: state.order.cart,
    currentUser: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkoutCart: () => dispatch(checkoutCart()),
    getCart: () => dispatch(getCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
