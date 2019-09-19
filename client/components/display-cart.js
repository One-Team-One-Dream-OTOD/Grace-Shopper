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
        <span>
          <button
            className="minus-btn"
            type="button"
            onClick={() => props.editCart(order, -1)}
          >
            {' '}
            -{' '}
          </button>
          <h6>Quantity: {quantity}</h6>
          <button
            className="plus-btn"
            type="button"
            onClick={() => props.editCart(order, 1)}
          >
            {' '}
            +{' '}
          </button>
        </span>
        <h6>Price: {price / 100}</h6>
        <div className="button">
          <button
            type="button"
            className="delete-btn"
            onClick={() => props.deleteBook(book.id)}
          >
            X
          </button>
        </div>
      </div>
    </div>
  )
}

export default DisplayCart
