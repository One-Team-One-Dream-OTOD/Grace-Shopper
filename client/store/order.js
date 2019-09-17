import axios from 'axios'

//ACTION TYPES
ADD_TO_CART = 'ADD_TO_CART'

//ACTION CREATOR
const addedToCart = book => ({
  type: ADD_TO_CART,
  book
})

// //THUNK CREATOR
// export const addToCart = (book) => {
//     return
// }
