/* global describe beforeEach it */

const {expect} = require('chai')
const db = require('../index')
const Book = db.model('book')

describe('Book model', () => {
  it('requires `name`', async () => {
    const book = Book.build()

    try {
      await book.validate()
      throw Error(
        'validation was successful but should have failed without `name`'
      )
    } catch (err) {
      expect(err.message).to.contain('name cannot be null')
    }
  })

  xit('requires `name` to not be an empty string', async () => {
    const book = Book.build({name: ''})

    try {
      await book.validate()
      throw Error(
        'validation was successful but should have failed if name is an empty string'
      )
    } catch (err) {
      expect(err.message).to.contain('Validation error')
      /* handle error */
    }
  })

  it('requires `description`', async () => {
    const book = Book.build()

    try {
      await book.validate()
      throw Error(
        'validation was successful but should have failed without `description`'
      )
    } catch (err) {
      expect(err.message).to.contain('description cannot be null')
    }
  })

  xit('requires `description` to not be an empty string', async () => {
    const book = Book.build({description: ''})

    try {
      await book.validate()
      throw Error(
        'validation was successful but should have failed if description is an empty string'
      )
    } catch (err) {
      expect(err.message).to.contain('Validation error')
      /* handle error */
    }
  })

  it('requires `price`', async () => {
    const book = Book.build()

    try {
      await book.validate()
      throw Error(
        'validation was successful but should have failed without `price`'
      )
    } catch (err) {
      expect(err.message).to.contain('price cannot be null')
    }
  })

  it('requires `SKU`', async () => {
    const book = Book.build()

    try {
      await book.validate()
      throw Error(
        'validation was successful but should have failed without `SKU`'
      )
    } catch (err) {
      expect(err.message).to.contain('SKU cannot be null')
    }
  })
})
