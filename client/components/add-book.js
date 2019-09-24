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
      SKU: '',
      validationErr: false
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
    if (
      this.state.name.length === 0 ||
      this.state.description.length === 0 ||
      this.state.price.length === 0 ||
      this.state.SKU.length === 0 ||
      this.state.price === 0
    ) {
      this.setState({validationErr: true})
    } else {
      this.props.addBook(this.state)
      this.setState({
        name: '',
        description: '',
        price: 0,
        quantity: 0,
        imageUrl: '',
        SKU: '',
        validationErr: false
      })
    }
  }
  render() {
    // const {name, description, price, quantity, imageUrl, SKU} = this.state
    return (
      <ModBook
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        action="Add"
      />
    )
  }
}

const mapDispatch = dispatch => ({
  addBook: book => dispatch(addBook(book))
})

export default connect(null, mapDispatch)(AddBook)
