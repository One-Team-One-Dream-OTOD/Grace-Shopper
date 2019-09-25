/* eslint-disable complexity */
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
    handleChange,
    validationErr,
    action
  } = props

  return (
    <form onSubmit={handleSubmit}>
      <div className="singleBook-add">
        <div className="edit_book_right-adm">
          <label htmlFor="name">
            Name:
            {name.length === 0 && validationErr ? (
              <span className="warning">{` `}Field is required!</span>
            ) : (
              ''
            )}
          </label>
          <input type="text" name="name" value={name} onChange={handleChange} />
          <label htmlFor="price">
            Price:
            {(price.length === 0 || price == 0) && validationErr ? (
              <span className="warning">{` `}Field is required!</span>
            ) : (
              ''
            )}
          </label>
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
          <label htmlFor="SKU">
            SKU:
            {SKU.length === 0 && validationErr ? (
              <span className="warning">{` `}Field is required!</span>
            ) : (
              ''
            )}
          </label>
          <input type="text" name="SKU" value={SKU} onChange={handleChange} />
          <label htmlFor="description">
            Description:
            {description.length === 0 && validationErr ? (
              <span className="warning">{` `}Field is required!</span>
            ) : (
              ''
            )}
          </label>
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
          <input
            type="submit"
            value={`${action} Book`}
            className="admin-edit"
          />
        </div>
      </div>
    </form>
  )
}
