import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome, Cart, Checkout} from './components'
import SingleBook from './components/single-book'
import Profile from './components/profile'
import EditEmail from './components/edit-email'
import EditPassword from './components/edit-password'
import OrderHistory from './components/order-history'
import AddBook from './components/add-book'
import EditBook from './components/edit-book'
import {me} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn, role} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/cart" component={Cart} />
        <Route exact path="/books/:id" component={SingleBook} />
        <Route exact path="/checkout" component={Checkout} />
        <Switch>
          {/* Routes placed here are only available after logging in */}
          <Route exact path="/" component={UserHome} />
          <Route exact path="/home" component={UserHome} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/edit/email" component={EditEmail} />
          <Route exact path="/profile/edit/password" component={EditPassword} />
          <Route exact path="/order-history" component={OrderHistory} />
          {isLoggedIn && role.addProduct ? (
            <Route exact path="/admin/books/add" component={AddBook} />
          ) : (
            ''
          )}
          {isLoggedIn && role.editProduct ? (
            <Route exact path="/admin/books/:id" component={EditBook} />
          ) : (
            ''
          )}
        </Switch>
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id,
    role: state.user.role
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
