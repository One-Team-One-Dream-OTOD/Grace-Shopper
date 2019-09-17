import axios from 'axios'

// Action Types
const GET_ALL_BOOKS = 'GET_ALL_BOOKS'
const GET_SINGLE_BOOK = 'GET_SINGLE_BOOK'

// Action Creators
const getAllBooks = books => ({type: GET_ALL_BOOKS, books})
const getSingleBook = book => ({type: GET_SINGLE_BOOK, book})

// Thunk Creators
export const getBooks = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/books')
    dispatch(getAllBooks(data))
  } catch (err) {
    console.error(err)
  }
}

export const getBook = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/books/${id}`)
    dispatch(getSingleBook(data))
  } catch (err) {
    console.error(err)
  }
}

// Initial State
const deafaultBook = {
  books: [],
  selectedBook: [{}]
}

// Reducer
export default function(state = deafaultBook, action) {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return {...state, books: action.books}
    case GET_SINGLE_BOOK:
      return {...state, selectedBook: action.book}
    default:
      return state
  }
}
