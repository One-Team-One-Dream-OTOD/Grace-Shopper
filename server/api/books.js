const router = require('express').Router()
const {Book} = require('../db/models')
const {Genre} = require('../db/models')
const {Author} = require('../db/models')
const isAuthorized = require('../auth/isAuthorized')
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

// add book
router.post('/', async (req, res, next) => {
  if (req.user && isAuthorized(req.user, 'addProduct')) {
    try {
      const book = await Book.create(req.body)
      res.json(book)
    } catch (err) {
      next(err)
    }
  } else res.sendStatus(401)
})

// edit book
router.put('/:id', async (req, res, next) => {
  if (req.user && isAuthorized(req.user, 'editProduct')) {
    try {
      const book = await Book.update(req.body, {
        where: {
          id: req.params.id
        }
      })
      if (book[0] !== 1) res.sendStatus(404)
      const bookUpd = await Book.findOne({
        where: {id: req.params.id}
      })
      res.json(bookUpd)
    } catch (err) {
      next(err)
    }
  } else res.sendStatus(401)
})
