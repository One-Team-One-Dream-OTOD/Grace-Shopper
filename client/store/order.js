import axios from 'axios'

//ACTION TYPES
const ADD_TO_CART = 'ADD_TO_CART'
const GET_CART = 'GET_CART'
const EDITED_CART = 'EDITED_CART'

//ACTION CREATOR
const addedToCart = order => ({
  type: ADD_TO_CART,
  order
})

const gotCart = cart => ({
  type: GET_CART,
  cart
})

const editedCart = edited => ({
  type: EDITED_CART,
  edited
})

//THUNK CREATOR
export const addToCart = book => {
  return async dispatch => {
    const {data} = await axios.post(`/api/order/`, book)
    console.log(data)
    dispatch(addedToCart(data))
  }
}

export const getCart = () => {
  return async dispatch => {
    const {data} = await axios.get(`/api/order/`)
    dispatch(gotCart(data))
  }
}

export const editCart = edited => {
  return async dispatch => {
    const {data} = await axios.put('/api/order/', edited)
    dispatch(editedCart(data))
  }
}

//INITIAL STATE
let initialState = {
  cart: []
}

export default function(state = initialState, action) {
  let updatedCart
  switch (action.type) {
    case ADD_TO_CART:
      //Refactored because of multiple of same items were being added to Cart Component
      return {...state, cart: [...state.cart]}
    case GET_CART:
      return {...state, cart: action.cart}
    case EDITED_CART:
      updatedCart = state.cart.map(book => {
        if (book.id === action.edited.id) {
          return action.edited
        } else {
          return {...book}
        }
      })
      return {...state, cart: updatedCart}
    default:
      return state
  }
}
