import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getBooks} from '../store/book'
import {addToCart, getCart} from '../store/order'
import Toasts from './toasts'
import {addToast} from '../store/toast'

class AllBooks extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(book) {
    this.props.addToast({text: `Added ${book.name} to cart!`})
    this.props.addToCart(book)
  }

  componentDidMount() {
    this.props.getBooks()
    this.props.getCart()
  }

  render() {
    const books = this.props.books
    const user = this.props.user
    console.log('got here', user && user.role.addProduct)
    return (
      <React.Fragment>
        <div className="allProducts">
          {books.map(book => (
            <div key={book.id} className="single_book">
              <Link to={`/books/${book.id}`}>
                <div className="top">{book.name}</div>
                <div className="mid">
                  <img src={book.imageUrl} className="book_img" />
                </div>
              </Link>
              <div className="bot">
                <div>${book.price / 100}</div>
                <button onClick={() => this.handleClick(book)}>
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
        <Toasts />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.book.books,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBooks: () => dispatch(getBooks()),
    addToCart: book => dispatch(addToCart(book)),
    addToast: options => dispatch(addToast(options)),
    getCart: () => dispatch(getCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBooks)
