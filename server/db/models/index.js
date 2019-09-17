const User = require('./user')
const Book = require('./book')
const Genre = require('./genre')
const Author = require('./author')
const Order = require('./order')
const db = require('../db')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
Book.belongsTo(Author)
Author.hasMany(Book)

Book.belongsTo(Genre)
Genre.hasMany(Book)

//many-to-many relation as Cart through table!
User.belongsToMany(Book, {through: Order})
Book.belongsToMany(User, {through: Order})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {User, Book, Genre, Author, Order}
