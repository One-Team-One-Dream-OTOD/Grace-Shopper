const router = require('express').Router()
const stripe = require('stripe')(process.env.STRIPE_SECRET)
module.exports = router

router.post('/', async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: req.body.amount,
      currency: 'usd',
      description: 'An example charge',
      source: req.body.token.id
    })
    res.json({status})
  } catch (err) {
    res.status(500).end()
  }
})
