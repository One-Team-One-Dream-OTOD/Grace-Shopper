import React from 'react'

const DisplayCheckout = props => {
  const item = props.item
  return (
    <li>
      <p>Book: {item.book.name}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Price: {item.price}</p>
    </li>
  )
}

export default DisplayCheckout
