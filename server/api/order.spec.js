const {expect} = require('chai')
const request = require('supertest')
const db = require('../db')
const app = require('../index')
const {Book, Order, OrderProduct} = require('../db/models/')

describe('Order routes', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/order/', () => {
    const orderQuantity = 1
    const orderPrice = 1400
    const bookId = 1
    const orderId = 1

    beforeEach(() => {
      return OrderProduct.create({
        quantity: orderQuantity,
        price: orderPrice,
        bookId: bookId
      })
    })

    xit('GET /api/order', async () => {
      const res = await request(app)
        .get('/api/order')
        .expect(200)

      expect(res.body).to.be.an('array')
      expect(res.body[0].quantity).to.be.equal(orderQuantity)
      expect(res.body[0].price).to.be.equal(orderPrice)
      expect(res.body[0].bookId).to.be.equal(bookId)
    })
  }) // end describe('/api/users')
}) // end describe('User routes')

// describe('POST /api/order/', () => {

//     it('creates a new article', async () => {

//       const res = await request(app)
//       .post('/api/order/')
//       .send({
//         title: 'Awesome POST-Created Article',
//         content: 'Can you believe I did this in a test?'
//       })
//       .expect(200);

//       expect(res.body.message).to.equal('Created successfully');
//       expect(res.body.article.title).to.equal('Awesome POST-Created Article');

//     });
