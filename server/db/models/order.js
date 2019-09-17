const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  quantity: {
    type: Sequelize.INTEGER
  },
  isPurchased: {
    type: Sequelize.BOOLEAN,
    default: false
  }
})

module.exports = Order
