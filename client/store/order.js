import axios from 'axios'

//ACTION TYPES
const ADD_TO_CART = 'ADD_TO_CART'
const GET_CART = 'GET_CART'
const CHECKOUT_CART = 'CHECKOUT_CART'

//ACTION CREATOR
const addedToCart = order => ({
  type: ADD_TO_CART,
  order
})

const gotCart = cart => ({
  type: GET_CART,
  cart
})

const finishedCheckout = () => ({
  type: CHECKOUT_CART
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

export const checkoutCart = () => {
  return async dispatch => {
    await axios.put(`/api/order/checkout`)
    dispatch(finishedCheckout())
  }
}

//INITIAL STATE
let initialState = {
  cart: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      //Refactored because of multiple of same items were being added to Cart Component
      return {...state, cart: [...state.cart]}
    case GET_CART:
      return {...state, cart: action.cart}
    case CHECKOUT_CART:
      return {...state}
    default:
      return state
  }
}
