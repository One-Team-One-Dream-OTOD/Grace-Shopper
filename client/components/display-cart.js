import React from 'react'

const DisplayCart = props => {
  const book = props.order.book
  const quantity = props.order.quantity
  const price = props.order.price
  return (
    <div className="single_book">
      <div className="cart-image">
        <img src={book.imageUrl} className="book_img" />
      </div>
      <div className="cart-item-details">
        <h6>Book: {book.name}</h6>
        <h6>Quantity: {quantity}</h6>
        <h6>Price: {price / 100}</h6>
      </div>
    </div>
  )
}

export default DisplayCart
