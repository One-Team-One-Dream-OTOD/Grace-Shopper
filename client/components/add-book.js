import React, {Component} from 'react'
import {addBook} from '../store'
import {connect} from 'react-redux'

class AddBook extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      imageUrl: '',
      SKU: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    this.props.addBook(this.state)
    this.setState({
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      imageUrl: '',
      SKU: ''
    })
  }
  render() {
    const {name, description, price, quantity, imageUrl, SKU} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="singleBook">
          <div className="single_book_left">
            <img src="" />
          </div>
          <div className="edit_book_right">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={this.handleChange}
            />
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={this.handleChange}
            />
            <label htmlFor="SKU">SKU:</label>
            <input
              type="text"
              name="SKU"
              value={SKU}
              onChange={this.handleChange}
            />
            <label htmlFor="description">Description:</label>
            <textarea
              rows="4"
              columns="100"
              name="description"
              value={description}
              onChange={this.handleChange}
            />
            <label htmlFor="imageUrl">Image URL:</label>
            <textarea
              rows="4"
              columns="100"
              name="imageUrl"
              value={imageUrl}
              onChange={this.handleChange}
            />
            <input type="submit" text="Add Book" />
          </div>
        </div>
      </form>
    )
  }
}

const mapDispatch = dispatch => ({
  addBook: book => dispatch(addBook(book))
})

export default connect(null, mapDispatch)(AddBook)
