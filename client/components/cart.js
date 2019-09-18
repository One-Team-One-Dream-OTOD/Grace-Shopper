import React from 'react'
import {connect} from 'react-redux'
import {getCart} from '../store/order'
import DisplayCart from '../components/display-cart'

class Cart extends React.Component {
  componentDidMount() {
    console.log(this.props)
    this.props.getCart()
  }

  render() {
    let cartTotal = 0.0
    return (
      <div className="cart">
        <div className="hello">
          <h1>WELCOME TO CART!</h1>
        </div>
        {this.props.cart.length < 1 ? (
          <div>NO ITEMS IN CART</div>
        ) : (
          <React.Fragment>
            <ul className="cart-full-list">
              {this.props.cart.map(order => {
                cartTotal += order.price
                return <DisplayCart key={order.price} order={order} />
              })}
            </ul>
            <div className="cart-total">Total: {cartTotal / 100}</div>
          </React.Fragment>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.order.cart
  }
}

const mapDisptachToProps = dispatch => {
  return {
    getCart: () => dispatch(getCart())
  }
}

export default connect(mapStateToProps, mapDisptachToProps)(Cart)
