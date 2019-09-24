const router = require('express').Router()
const {Book, Order, OrderProduct} = require('../db/models/')
module.exports = router

// GET: /api/history/
// router.get('/', async (req, res, next) => {
//   if (req.user) {
//     try {
//       const orders = await OrderProduct.findAll({
//         include: [
//           {
//             model: Order,
//             where: {
//               userId: req.user.id,
//               isPurchased: true
//             }
//           },
//           Book
//         ]
//       })
//       res.json(orders)
//     } catch (error) {
//       next(error)
//     }
//   } else {
//     res.status(404).json()
//   }
// })

router.get('/', async (req, res, next) => {
  if (req.user) {
    try {
      const orders = await OrderProduct.findAll({
        include: [
          {
            model: Order,
            where: {
              userId: req.user.id,
              isPurchased: true
            }
          },
          Book
        ]
      })
      res.json(orders)
    } catch (error) {
      next(error)
    }
  } else {
    res.status(404).json()
  }
})
