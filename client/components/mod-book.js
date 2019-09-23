import React from 'react'

export default function ModBook(props) {
  const {
    name,
    description,
    price,
    quantity,
    imageUrl,
    SKU,
    handleSubmit,
    handleChange
  } = props

  return (
    <form onSubmit={handleSubmit}>
      <div className="singleBook">
        <div className="single_book_left">
          <img src="" />
        </div>
        <div className="edit_book_right">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={name} onChange={handleChange} />
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={handleChange}
          />
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={handleChange}
          />
          <label htmlFor="SKU">SKU:</label>
          <input type="text" name="SKU" value={SKU} onChange={handleChange} />
          <label htmlFor="description">Description:</label>
          <textarea
            rows="4"
            columns="100"
            name="description"
            value={description}
            onChange={handleChange}
          />
          <label htmlFor="imageUrl">Image URL:</label>
          <textarea
            rows="4"
            columns="100"
            name="imageUrl"
            value={imageUrl}
            onChange={handleChange}
          />
          <input type="submit" text="Add Book" />
        </div>
      </div>
    </form>
  )
}
