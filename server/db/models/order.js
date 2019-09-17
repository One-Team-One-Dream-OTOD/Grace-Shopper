const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  quantity: {
    type: Sequelize.INTEGER
  },
  isPurchased: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  orderNumber: {
    type: Sequelize.INTEGER
  },
  price: {
    type: Sequelize.FLOAT
  },
  orderDate: {
    type: Sequelize.DATE,
    defaultValue: null
  }
})

module.exports = Order
