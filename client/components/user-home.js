import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AllBooks from './all-books'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {user} = props
  const {email} = user

  return (
    <div>
      <div className="hello">
        <h3>Welcome, {email ? email : 'Guest'}</h3>
      </div>
      <div className="addProduct">
        {user && user.role.addProduct ? (
          <Link to="/admin/books/add">
            <button type="button">Add Book</button>
          </Link>
        ) : (
          ''
        )}
      </div>
      <AllBooks />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
