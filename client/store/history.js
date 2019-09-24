import axios from 'axios'

//Action Types
const GET_USER_ORDERS = 'GET_USER_ORDERS'

//Action Creators
const getUserOrders = orders => ({type: GET_USER_ORDERS, orders})

//Thunks
export const getOrders = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/history')
    dispatch(getUserOrders(data))
  } catch (err) {
    console.error(err)
  }
}

//Reducer
export default function(state = [], action) {
  switch (action.type) {
    case GET_USER_ORDERS:
      return action.orders
    default:
      return state
  }
}
