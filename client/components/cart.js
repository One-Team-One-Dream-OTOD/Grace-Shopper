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
    console.log(this.props.cart)
    return (
      <div>
        WELCOME TO CART!
        {this.props.cart.length < 1 ? (
          <div>NO ITEMS IN CART</div>
        ) : (
          <ul>
            {this.props.cart.map(order => (
              <DisplayCart key={order.price} order={order} />
            ))}
          </ul>
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
