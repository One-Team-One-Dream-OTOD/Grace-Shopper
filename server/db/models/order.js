const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  isPurchased: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  orderDate: {
    type: Sequelize.DATE,
    defaultValue: null
  }
})

module.exports = Order
