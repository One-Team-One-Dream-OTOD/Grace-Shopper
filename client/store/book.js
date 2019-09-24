import axios from 'axios'

// Action Types
const GET_ALL_BOOKS = 'GET_ALL_BOOKS'
const GET_SINGLE_BOOK = 'GET_SINGLE_BOOK'
const ADDED_BOOK = 'ADDED_BOOK'
const EDITED_BOOK = 'EDITED_BOOK'

// Action Creators
const getAllBooks = books => ({type: GET_ALL_BOOKS, books})
const getSingleBook = book => ({type: GET_SINGLE_BOOK, book})
const addedBook = book => ({type: ADDED_BOOK, book})
const editedBook = book => ({type: EDITED_BOOK, book})

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

export const editBook = book => async dispatch => {
  try {
    const {data} = await axios.put(`/api/books/${book.id}`, book)
    dispatch(editedBook(data))
  } catch (error) {
    console.error(error)
  }
}

// Initial State
const defaultBook = {
  books: [],
  selectedBook: [{}]
}

const sorter = (ob1, ob2) => (ob1.name > ob2.name ? 1 : -1)

// Reducer
export default function(state = defaultBook, action) {
  let updatedCart
  switch (action.type) {
    case GET_ALL_BOOKS:
      return {...state, books: action.books.sort(sorter)}
    case GET_SINGLE_BOOK:
      return {...state, selectedBook: action.book}
    case ADDED_BOOK:
      return {...state, books: [...state.books, action.book].sort(sorter)}
    case EDITED_BOOK:
      updatedCart = state.books.filter(book => book.id !== action.book.id)
      console.log(updatedCart, 'updatedCart')
      return {
        ...state,
        selectedBook: [action.book],
        books: [...updatedCart, action.book].sort(sorter)
      }
    default:
      return state
  }
}
