//import factory functions
import createToast from '../factories/createToast'

//action types
export const ADD_TOAST = 'ADD_TOAST'
export const REMOVE_TOAST = 'REMOVE_TOAST'

//action creators
export function addToast(options = {}) {
  return {
    payload: createToast(options),
    type: ADD_TOAST
  }
}

export function removeToast(id) {
  return {
    payload: id,
    type: REMOVE_TOAST
  }
}

//default state is empty array
export default function toasts(state = [], action) {
  switch (action.type) {
    case ADD_TOAST:
      return [action.payload, ...state]
    case REMOVE_TOAST:
      return state.filter(toast => toast.id !== action.payload)
    default:
      return state
  }
}
