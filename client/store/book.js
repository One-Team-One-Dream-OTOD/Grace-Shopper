import axios from 'axios'

// Action Types
const GET_ALL_BOOKS = 'GET_ALL_BOOKS'
const GET_SINGLE_BOOK = 'GET_SINGLE_BOOK'
const ADDED_BOOK = 'ADDED_BOOK'

// Action Creators
const getAllBooks = books => ({type: GET_ALL_BOOKS, books})
const getSingleBook = book => ({type: GET_SINGLE_BOOK, book})
const addedBook = book => ({type: ADDED_BOOK, book})

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

export const addBook = book => async dispatch => {
  try {
    const {data} = await axios.post('/api/books', book)
    dispatch(addedBook(data))
  } catch (error) {
    console.error(error)
  }
}

// Initial State
const defaultBook = {
  books: [],
  selectedBook: [{}]
}

// Reducer
export default function(state = defaultBook, action) {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return {...state, books: action.books}
    case GET_SINGLE_BOOK:
      return {...state, selectedBook: action.book}
    case ADDED_BOOK:
      return {...state, books: [...state.books, action.book]}
    default:
      return state
  }
}
