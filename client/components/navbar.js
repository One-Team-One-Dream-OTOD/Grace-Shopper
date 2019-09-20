import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {getCart} from '../store/order'

const Navbar = ({handleClick, isLoggedIn, cartItems}) => (
  <div className="navbar">
    <div className="logo">
      <Link to="/home">
        <img
          className="logo_img"
          src="http://www.rainforest.com/homepageimages/rf-logo.png"
          alt="logo"
        />
      </Link>
    </div>
    <nav>
      {isLoggedIn ? (
        <div className="loggin">
          {/* The navbar will show these links after you log in */}
          <Link to="/home" className="nav">
            Home
          </Link>
          <a href="#" onClick={handleClick} className="nav">
            Logout
          </a>
        </div>
      ) : (
        <div className="loggin">
          {/* The navbar will show these links before you log in */}
          <Link to="/login" className="nav">
            Login
          </Link>
          <Link to="/signup" className="nav">
            Sign Up
          </Link>
        </div>
      )}
      <div>
        <Link to="/cart" className="nav">
          <span>
            {cartItems.length}
            <i className="fas fa-cart-arrow-down" />
          </span>
        </Link>
      </div>
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    cartItems: state.order.cart
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
      dispatch(getCart())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
