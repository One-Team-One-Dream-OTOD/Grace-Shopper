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
    const bookName = 'This is Your Brain on Music'
    const bookDescription =
      'Using musical examples from Bach to the Beatles, Levitin reveals the role of music in human evolution, shows how our musical preferences begin to form even before we are born and explains why music can offer such an emotional experience. Music is an obsession at the heart of human nature, even more fundamental to our species than language. In this is your brain on music Levitin offers nothing less than a new way to understand it and its role in human life.'
    const bookPrice = 1290
    const bookSKU = 100

    beforeEach(() => {
      return Book.create({
        name: bookName,
        description: bookDescription,
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
    })

    describe('GET /book/:id', () => {
      let myBook

      beforeEach(async () => {
        const creatingBooks = [
          {
            name: 'This is Your Brain on Music',
            description: 'This book is boring',
            price: 100,
            SKU: 120
          },
          {
            name: 'Hello World',
            description: 'This book is amazing',
            price: 200,
            SKU: 120
          }
        ].map(data => Book.create(data))

        const createdBooks = await Promise.all(creatingBooks)
        myBook = createdBooks[0]
      })

      it('returns a 404 error if the ID is not correct', async () => {
        const res = await request(app)
          .get('/api/books/76142')
          .expect(404)
      })
    })
  }) // end describe('/api/users')
}) // end describe('User routes')
