import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getBook} from '../store/book'
import {Link} from 'react-router-dom'
import {addToCart} from '../store/order'
import {addToast} from '../store/toast'
import Toasts from './toasts'

class SingleBook extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const bookId = this.props.match.params.id
    this.props.getBook(bookId)
  }

  handleClick(book) {
    this.props.addToast({text: `Added ${book.name} to cart!`})
    this.props.addToCart(book)
  }

  render() {
    const {id, name, description, imageUrl, price} = this.props.selectedBook[0]

    const book = this.props.selectedBook[0]
    const {user} = this.props

    return (
      <React.Fragment>
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
                onClick={() => this.handleClick(book)}
                className="button-checkout"
              >
                Add to the cart
              </button>
            </div>
          </div>
        </div>
        <Toasts />
      </React.Fragment>
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
    addToCart: book => dispatch(addToCart(book)),
    addToast: options => dispatch(addToast(options))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBook)
