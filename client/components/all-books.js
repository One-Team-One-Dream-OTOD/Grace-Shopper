import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getBooks} from '../store/book'
import {addToCart} from '../store/order'

class AllBooks extends Component {
  componentDidMount() {
    this.props.getBooks()
  }

  render() {
    const books = this.props.books
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
                <button onClick={() => this.props.addToCart(book)}>
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    books: state.book.books
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBooks: () => dispatch(getBooks()),
    addToCart: book => dispatch(addToCart(book))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBooks)
