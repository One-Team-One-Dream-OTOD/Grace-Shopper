import React from 'react'

const DisplayCheckout = props => {
  const item = props.item
  return (
    <li className="checkout-one-item">
      <p>Book: {item.book.name}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Price: {item.price / 100}</p>
    </li>
  )
}

export default DisplayCheckout
