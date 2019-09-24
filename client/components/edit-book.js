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
      this.props.editBook(this.state)
      this.setState({validationErr: false})
    }
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
        action="Edit"
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
