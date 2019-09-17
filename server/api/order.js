const router = require('express').Router()
const {Book} = require('../db/models')
const Order = require('../db/models/order')
const User = require('../db/models/user')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    if (req.user) {
      const order = await Order.findAll({
        include: [{model: User}],
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
