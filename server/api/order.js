const router = require('express').Router()
const {Book, Order, User, OrderProduct} = require('../db/models/')

module.exports = router

// GET: /api/order/
router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const order = await Order.findAll({
        where: {
          userId: req.user.id
        },
        include: [OrderProduct]
      })

      console.log(order)
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
      const addCart = await Order.create({
        userId: req.user.id
      })

      console.log(addCart)

      // const newAddition = await OrderProduct.findOne({
      //   where: {
      //     bookId: req.body.id
      //   },
      //   include: [
      //     Book,
      //     {
      //       model: Order,
      //       where: {
      //         userId: req.user.id             }
      //     }
      //   ]
      // })

      res.json(addCart.userId)
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
