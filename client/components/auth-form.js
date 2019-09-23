import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {auth} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div className="form-container">
      <div className="login-wrap">
        <img
          src="http://www.romolagarai.org/imgs/full/115/1158291_stacked-books-png.jpg"
          alt=""
          className="login-img"
        />
        <div className="login_form">
          <form onSubmit={handleSubmit} name={name}>
            <div>
              <label htmlFor="email">
                <small>Email</small>
              </label>
              <input name="email" type="text" className="email-input" />
            </div>
            <div>
              <label htmlFor="password">
                <small>Password</small>
              </label>
              <input
                name="password"
                type="password"
                className="password-input"
              />
            </div>
            <div>
              <button type="submit" className="login-btn">
                {displayName}
              </button>
            </div>
            {error && error.response && <div> {error.response.data} </div>}
          </form>
          <div>
            <a href="/auth/google" className="login-with-google">
              {displayName}{' '}
              <img
                src="https://cdn.worldvectorlogo.com/logos/google-1-1.svg"
                alt=""
                className="login-with-google-pic"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(auth(email, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
}
