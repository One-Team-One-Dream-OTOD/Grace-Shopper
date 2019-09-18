import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getBook} from '../store/book'

class SingleBook extends Component {
  componentDidMount() {
    const bookId = this.props.match.params.id
    this.props.getBook(bookId)
  }

  render() {
    const {name, description, imageUrl, price} = this.props.selectedBook[0]

    return (
      <div className="singleBook">
        <div className="single_book_left">
          <img src={imageUrl} />
        </div>
        <div className="single_book_right">
          <h1>{name}</h1>
          <p>{description}</p>
          <h4>${price}</h4>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedBook: state.book.selectedBook
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getBook: bookId => dispatch(getBook(bookId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleBook)
