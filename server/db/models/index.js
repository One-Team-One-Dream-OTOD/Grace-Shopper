const User = require('./user')
const Book = require('./book')
const Genre = require('./genre')
const Author = require('./author')
const Order = require('./order')
const OrderProduct = require('./order-product')

Book.belongsTo(Author)
Author.hasMany(Book)

Book.belongsTo(Genre)
Genre.hasMany(Book)

//One-Many User & Order
User.hasMany(Order)
Order.belongsTO(User)

//Many-to-Many relationship between Order and Book
Book.belongsToMany(Order, {through: OrderProduct})
Order.belongsToMany(Book, {through: OrderProduct})

//Resolves EagerLoading Error
OrderProduct.belongsTo(Book)
OrderProduct.belongsTo(Order)

module.exports = {
  User,
  Book,
  Genre,
  Author,
  Order,
  OrderProduct
}
