const router = require('express').Router()
const {Book} = require('../db/models')
const {Genre} = require('../db/models')
const {Author} = require('../db/models')
module.exports = router

//All books
router.get('/', async (req, res, next) => {
  try {
    const books = await Book.findAll()
    res.json(books)
  } catch (err) {
    next(err)
  }
})
// single book
router.get('/:id', async (req, res, next) => {
  try {
    const book = await Book.findAll({
      where: {id: req.params.id},
      include: [{model: Author}, {model: Genre}]
    })
    if (!book) return res.sendStatus(404)
    res.json(book)
  } catch (err) {
    next(err)
  }
})

// router.get('/:id', async (req, res, next) => {
//   try {
//     console.log(req.params.id)
//     const book = await Book.findById(req.params.id, {
//       include: [{model: Author}, {model: Genre}]
//     })
//     if (!book) return res.sendStatus(404)
//     res.json(book)
//   } catch (err) {
//     next(err)
//   }
// })
