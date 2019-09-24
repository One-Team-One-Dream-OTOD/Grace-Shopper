import React, {Component} from 'react'
import {addBook} from '../store'
import {connect} from 'react-redux'
import ModBook from './mod-book'

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
    // const {name, description, price, quantity, imageUrl, SKU} = this.state
    return (
      <ModBook
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapDispatch = dispatch => ({
  addBook: book => dispatch(addBook(book))
})

export default connect(null, mapDispatch)(AddBook)
