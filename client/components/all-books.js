import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getBooks} from '../store/book'

class AllBooks extends Component {
  componentDidMount() {
    this.props.getBooks()
  }

  render() {
    const books = this.props.books
    console.log(books)
    return (
      <React.Fragment>
        <div className="allProducts">
          {books.map(book => (
            <div key={book.id} className="single_book">
              <div>{book.name}</div>
              <img src={book.imageUrl} className="book_img" />
              <div>${book.price}</div>
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
    getBooks: () => dispatch(getBooks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllBooks)
