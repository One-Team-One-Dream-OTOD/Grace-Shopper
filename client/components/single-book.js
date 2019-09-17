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
        <div>{name}</div>
        <img src={imageUrl} />
        <div>{description}</div>
        <div>{price}</div>
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
