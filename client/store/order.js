import axios from 'axios'

//ACTION TYPES
const ADD_TO_CART = 'ADD_TO_CART'
const GET_CART = 'GET_CART'
const REMOVE_FROM_THE_CART = 'REMOVE_FROM_THE_CART'

//ACTION CREATOR
const addedToCart = order => ({
  type: ADD_TO_CART,
  order
})

const gotCart = cart => ({
  type: GET_CART,
  cart
})

const removeBook = id => ({
  type: REMOVE_FROM_THE_CART,
  id
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
  console.log('GOT TO CART')
  return async dispatch => {
    const {data} = await axios.get(`/api/order/`)
    dispatch(gotCart(data))
  }
}

export const deleteBook = id => {
  return async dispatch => {
    try {
      await axios.delete(`/api/order/${id}`)
      dispatch(removeBook(id))
    } catch (err) {
      console.log(`ERROR deleting book with id ${id}`, err)
    }
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
    case REMOVE_FROM_THE_CART:
      console.log(state)
      return {
        ...state,
        cart: state.cart.filter(book => book.bookId !== action.id)
      }
    default:
      return state
  }
}
