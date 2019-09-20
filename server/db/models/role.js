const Sequelize = require('sequelize')
const db = require('../db')

const Role = db.define('role', {
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  addProduct: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  editProduct: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  editUser: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Role
