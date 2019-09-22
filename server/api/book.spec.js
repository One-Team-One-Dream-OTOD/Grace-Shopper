/* global describe beforeEach it */

const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')

const Book = db.model('book')

describe('Book routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/books/', () => {
    const bookName = 'The Lord of the Rings: 50th Anniversary'
    const bookDescrioption =
      'In ancient times the Rings of Power were crafted by the Elven-smiths'
    const bookPrice = 1295
    const bookSKU = 100
    beforeEach(() => {
      return Book.create({
        name: bookName,
        description: bookDescrioption,
        price: bookPrice,
        SKU: bookSKU
      })
    })

    it('GET /api/books', async () => {
      const res = await request(app)
        .get('/api/books')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].name).to.be.equal(bookName)
      expect(res.body[0].description).to.be.equal(bookDescrioption)
      expect(res.body[0].price).to.be.equal(bookPrice)
      expect(res.body[0].SKU).to.be.equal(bookSKU)
    })
  }) // end describe('/api/users')

  describe('GET `/api/books/:id`', () => {
    const bookName = 'The Lord of the Rings: 50th Anniversary'
    const bookDescrioption =
      'In ancient times the Rings of Power were crafted by the Elven-smiths'
    const bookPrice = 1295
    const bookSKU = 100

    beforeEach(() => {
      return Book.create({
        name: bookName,
        description: bookDescrioption,
        price: bookPrice,
        SKU: bookSKU
      })
    })

    it('serves up a single Book by its `id`', async () => {
      const res = await request(app)
        .get('/api/books/1')
        .expect(200)

      expect(res.body[0].name).to.equal(
        'The Lord of the Rings: 50th Anniversary'
      )
    })
  })
}) // end describe('User routes')
