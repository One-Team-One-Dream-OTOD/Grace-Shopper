const router = require('express').Router()
const {User} = require('../db/models')
const isAuthorized = require('../auth/isAuthorized')
module.exports = router

router.get('/', async (req, res, next) => {
  if (req.user && isAuthorized(req.user, 'editUser')) {
    try {
      const users = await User.findAll({
        // explicitly select only the id and email fields - even though
        // users' passwords are encrypted, it won't help if we just
        // send everything to anyone who asks!
        attributes: ['id', 'email']
      })
      res.json(users)
    } catch (err) {
      next(err)
    }
  } else {
    res.status(401).json()
  }
})

router.put('/:id', async (req, res, next) => {
  if (req.user) {
    try {
      await User.update({email: req.body.email}, {where: {id: req.user.id}})
      const updatedUser = await User.findOne({where: {id: req.user.id}})
      res.json(updatedUser)
    } catch (err) {
      next(err)
    }
  } else {
    res.status(404).json()
  }
})
