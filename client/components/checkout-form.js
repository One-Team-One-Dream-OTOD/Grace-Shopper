import React, {Component} from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import axios from 'axios'

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = {complete: false}
    this.submit = this.submit.bind(this)
  }

  async submit(evt) {
    // User clicked submit
    let {token} = await this.props.stripe.createToken({name: 'Name'})
    console.log(this.props)
    let {amount} = {amount: this.props.total}

    let payment = {token, amount}

    console.log(payment)

    let response = await axios.post('/charge', payment)

    if (response.data.status === 'succeeded') console.log('Purchase Complete!')
    if (response.data.status === 'succeeded') this.setState({complete: true})
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>

    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Purchase</button>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm)
