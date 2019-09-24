import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getBook} from '../store/book'
import {Link} from 'react-router-dom'
import {addToCart} from '../store/order'

class SingleBook extends Component {
  componentDidMount() {
    const bookId = this.props.match.params.id
    this.props.getBook(bookId)
  }

  render() {
    const {
      id,
      name,
      description,
      imageUrl,
      price,
      user
    } = this.props.selectedBook[0]

    const book = this.props.selectedBook[0]

    return (
      <div className="singleBook">
        <div className="single_book_left">
          <img src={imageUrl} />
        </div>
        <div className="single_book_right">
          <h1>{name}</h1>
          <p>{description}</p>
          <h4>${price / 100}</h4>
          <div className="sp-btn">
            <button
              onClick={() => this.props.addToCart(book)}
              className="button-checkout"
            >
              Add to the cart
            </button>
          </div>
        </div>
        {user && user.role.editProduct ? (
          <Link to={`/admin/books/${id}`}>
            <button type="button">Edit Book</button>
          </Link>
        ) : (
          ''
        )}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedBook: state.book.selectedBook,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBook: bookId => dispatch(getBook(bookId)),
    addToCart: book => dispatch(addToCart(book))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBook)
