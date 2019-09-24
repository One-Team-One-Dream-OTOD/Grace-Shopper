import React, {Component} from 'react'
import {editBook} from '../store'
import {connect} from 'react-redux'
import ModBook from './mod-book'

class EditBook extends Component {
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
    this.props.editBook(this.state)
  }
  componentDidMount() {
    this.setState({...this.props.book})
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

const mapState = state => ({
  book: state.book.selectedBook[0]
})

const mapDispatch = dispatch => ({
  editBook: book => dispatch(editBook(book))
})

export default connect(mapState, mapDispatch)(EditBook)
