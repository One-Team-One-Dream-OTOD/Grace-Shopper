import React, {Component} from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import axios from 'axios'
import DisplayCheckout from './display-checkout'

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = {complete: false}
    this.submit = this.submit.bind(this)
  }

  async submit(evt) {
    // User clicked submit
    let {token} = await this.props.stripe.createToken({
      name: this.props.currentUser.email || 'Guest'
    })
    let {amount} = {amount: this.props.total}
    let payment = {token, amount}
    let response = await axios.post('/charge', payment)

    if (response.data.status === 'succeeded') {
      this.props.checkoutCart()
      this.setState({complete: true})
    }
  }

  render() {
    if (this.state.complete)
      return (
        <h3 className="checkout-thank-you">Thank you for shopping with us!</h3>
      )
    return (
      <React.Fragment>
        <div className="checkout-row">
          <div className="checkout-full">
            <h3>Please Review Your Order</h3>
            <hr />
            <ul className="checkout-full-list">
              {this.props.itemsInCart.map(item => {
                return <DisplayCheckout key={item.bookId} item={item} />
              })}
            </ul>
            <h5 className="checkout-total">Total: {this.props.total / 100}</h5>

            <div className="checkout">
              <p>Please input payment information!</p>
              <CardElement />
              <button
                type="button"
                className="button-checkout"
                onClick={this.submit}
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default injectStripe(CheckoutForm)
