import React from 'react'

const DisplayCart = props => {
  const book = props.order.book
  const quantity = props.order.quantity
  const price = props.order.price
  return (
    <li className="cart-full-item">
      <div className="cart-image">
        <img src={book.imageUrl} />
      </div>
      <div className="cart-item-details">
        <h6>Book: {book.name}</h6>
        <h6>Quantity: {quantity}</h6>
        <h6>Price: {price}</h6>
      </div>
    </li>
  )
}

export default DisplayCart
