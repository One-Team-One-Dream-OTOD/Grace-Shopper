const router = require('express').Router()
const {Book, Order, OrderProduct} = require('../db/models/')

module.exports = router

// GET: /api/order/
router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const order = await OrderProduct.findAll({
        include: [
          {
            model: Order,
            where: {
              userId: req.user.id,
              isPurchased: false
            }
          },
          Book
        ]
      })
      res.json(order)
    } else {
      res.json(req.session.cart)
    }
  } catch (error) {
    next(error)
  }
})

//POST: /api/order/
router.post('/', async (req, res, next) => {
  try {
    if (req.user) {
      const addCart = await Order.findOrCreate({
        where: {
          userId: req.user.id,
          isPurchased: false
        }
      })

      const addToOrderProduct = await OrderProduct.findOrCreate({
        where: {
          orderId: addCart[0].id,
          bookId: req.body.id,
          price: req.body.price
        }
      })

      await addToOrderProduct[0].update({
        quantity: addToOrderProduct[0].quantity + 1
      })

      const returnValue = await OrderProduct.findOne({
        include: [Book],
        where: {
          orderId: addCart[0].id,
          bookId: req.body.id
        }
      })

      res.json(returnValue)
    } else {
      const guestOrder = {
        userId: null,
        bookId: req.body.id,
        book: req.body,
        quantity: 1,
        price: req.body.price,
        isPurchased: false
      }
      if (req.session.cart) {
        req.session.cart.push(guestOrder)
      } else {
        req.session.cart = [guestOrder]
      }
      res.json(guestOrder)
    }
  } catch (error) {
    next(error)
  }
})

//PUT: api/order/
//EDIT CART
router.put('/', async (req, res, next) => {
  try {
    if (req.user) {
      const editCart = await Order.update(req.body, {
        userId: req.user.id,
        bookId: req.body.id
      })
      res.json(editCart)
    } else if (
      req.session.cart &&
      req.session.cart.find(prod => prod.id === req.body.id)
    ) {
      // Need to only update the given product
      // req.session.cart = req.session.cart.map()
      res.json(req.session.cart)
    } else {
      req.session.cart = [req.body]
      res.json(req.session.cart)
    }
  } catch (error) {
    next(error)
  }
})

//PUT: /api/order/checkout
router.put('/checkout', async (req, res, next) => {
  try {
    if (req.user) {
      const checkout = await Order.Update({
        isPurchased: true,
        where: {
          userId: req.user.id
        }
      })
      res.json(checkout)
    }
  } catch (error) {
    next(error)
  }
})

//delete /api/order/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id)
    if (!order) return res.sendStatus(404)
    await order.destroy()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})
