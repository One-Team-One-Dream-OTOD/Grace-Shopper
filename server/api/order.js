/* eslint-disable complexity */
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
  // handle logged in users
  if (req.user) {
    try {
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

      const returnValue = await OrderProduct.findAll({
        include: [Book],
        where: {
          orderId: addCart[0].id
        }
      })
      console.log(returnValue)

      res.json(returnValue)
    } catch (error) {
      next(error)
    }
    // now handle guest carts
  } else {
    const guestOrder = {
      orderId: null,
      bookId: req.body.id,
      book: req.body,
      quantity: 1,
      price: req.body.price,
      isPurchased: false
    }
    // handle if the cart already has something in it
    if (req.session.cart) {
      // if our item doesnt exist in our cart, just add, otherwise update quantity
      const item = req.session.cart.findIndex(
        book => book.bookId === req.body.id
      )
      if (item === -1) {
        req.session.cart.push(guestOrder)
      } else {
        req.session.cart[item].quantity = req.session.cart[item].quantity + 1
      }
      // otherwise create a cart
    } else {
      req.session.cart = [guestOrder]
    }
    res.json(req.session.cart)
  }
})

//PUT: api/order/
//EDIT CART
router.put('/', async (req, res, next) => {
  // handle edit cart for users
  if (req.user) {
    try {
      const editCart = await OrderProduct.update(req.body, {
        include: [
          {
            model: Order,
            where: {
              userId: req.user.id
            }
          }
        ],
        where: {
          bookId: req.body.id
        }
      })

      if (editCart[0] !== 1) {
        res.status(404).json('Not Found')
      }

      const updatedCart = await OrderProduct.findOne({
        where: {
          bookId: req.body.id
        },
        include: [
          {
            model: Order,
            where: {
              userId: req.user.id
            }
          },
          Book
        ]
      })

      res.json(updatedCart)
    } catch (error) {
      next(error)
    }
    // Now need to handle cart for guests
  } else if (req.session.cart) {
    const item = req.session.cart.findIndex(book => book.bookId === req.body.id)
    // only should make updates if the item is actually in our cart
    if (item !== -1) {
      // need to check undefined, because if its 0, doesnt evaluate like we want
      if (req.body.quantity !== undefined) {
        req.session.cart[item].quantity = req.body.quantity
      }
      if (req.body.price) {
        req.session.cart[item].price = req.body.price
      }
    }
    // Need to only update the given product
    res.json(req.session.cart[item])
  }
  res.status(404).json()
})

//PUT: /api/order/checkout
router.put('/checkout', async (req, res, next) => {
  try {
    if (req.user) {
      const usersOrder = await Order.update(
        {isPurchased: true, orderDate: Date.now()},
        {
          where: {
            userId: req.user.id,
            isPurchased: false
          }
        }
      )

      res.json(usersOrder)
    } else if (req.session.cart) {
      const guestOrder = await Order.create({
        userId: 1
      })

      req.session.cart.forEach(async order => {
        await OrderProduct.create({
          orderId: guestOrder.id,
          bookId: order.bookId,
          price: order.price,
          quantity: order.quantity
        })
      })

      const guestOrderUpdate = await Order.update(
        {isPurchased: true},
        {
          where: {
            id: guestOrder.id
          }
        }
      )
      req.session.cart = []
      res.json(req.session.cart)
    }
  } catch (error) {
    next(error)
  }
})

//delete /api/order/:id
router.delete('/:id', async (req, res, next) => {
  if (req.user) {
    try {
      const order = await Order.findOne({
        where: {
          userId: req.user.id
        }
      })

      const deleteBook = await OrderProduct.findOne({
        where: {
          bookId: req.params.id,
          orderId: order.id
        }
      })
      if (!deleteBook) return res.sendStatus(404)
      await deleteBook.destroy()
    } catch (err) {
      next(err)
    }
  } else {
    req.session.cart = req.session.cart.filter(
      order => order.bookId !== parseInt(req.params.id, 10)
    )
  }
  res.sendStatus(204)
})
