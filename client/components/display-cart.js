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
      <div className="cart-item">
        <h6>{book.name}</h6>
        <h6>{quantity}</h6>
        <h6>${price}</h6>
      </div>
    </div>
  )
}

export default DisplayCart
