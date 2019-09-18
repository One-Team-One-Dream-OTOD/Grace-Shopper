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
      <div className="cart">
        <div className="hello">
          <h1>WELCOME TO CART!</h1>
        </div>
        {this.props.cart.length < 1 ? (
          <div>NO ITEMS IN CART</div>
        ) : (
          <div className="cart">
            {this.props.cart.map(order => (
              <DisplayCart key={order.price} order={order} />
            ))}
          </div>
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
