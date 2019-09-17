const router = require('express').Router()
const Book = require('../db/models/book')
const Order = require('../db/models/order')
const User = require('../db/models/user')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const order = await Order.findAll({
        include: [{model: Book}],
        where: {
          userId: req.user.id
        }
      })
      res.json(order)
    }
  } catch (error) {
    next(error)
  }
})
