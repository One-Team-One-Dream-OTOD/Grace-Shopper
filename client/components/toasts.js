import React from 'react'
import {connect} from 'react-redux'
import {removeToast} from '../store/toast'
import Toast from './toast'

const Toasts = props => {
  return (
    <ul className="toasts">
      {props.toasts.map(toast => {
        const {id} = toast
        return (
          <Toast
            {...toast}
            key={id}
            onDismissClick={() => props.removeToast(id)}
          />
        )
      })}
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    toasts: state.toasts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeToast: id => dispatch(removeToast(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toasts)
