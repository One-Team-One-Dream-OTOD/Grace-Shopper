import React from 'react'

const DisplayCart = props => {
  const book = props.order.book
  console.log(props)
  const quantity = props.order.quantity
  const price = props.order.price
  const order = {quantity, price, id: book.id}
  return (
    <div className="single_book">
      <div className="cart-image">
        <img src={book.imageUrl} className="book_img" />
      </div>
      <div className="cart-item-details">
        <h6>Book: {book.name}</h6>
        <div className="form-container cart-item-qty">
          <button
            className="quantity-btn"
            type="button"
            onClick={() => props.editCart(order, -1)}
          >
            <i className="fas fa-minus" />
          </button>
          <h6> Quantity: {quantity} </h6>
          <button
            className="quantity-btn"
            type="button"
            onClick={() => props.editCart(order, 1)}
          >
            <i className="fas fa-plus" />
          </button>
        </div>
        <h6>Price: {price * quantity / 100}</h6>
        <div className="button">
          <button
            type="button"
            className="delete-btn"
            onClick={() => props.deleteBook(book.id)}
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default DisplayCart
