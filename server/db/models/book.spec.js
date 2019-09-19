/* global describe beforeEach it */

const chai = require('chai')
const {expect} = require('chai')
const should = require('chai').should()
const db = require('../index')
const Book = db.model('book')
const Genre = db.model('genre')
const Author = db.model('author')

chai.use(require('chai-integer'))

describe('Book Model', () => {
  // clear the database before each tests
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('Instance Test', () => {
    let ctci
    let genre
    let author
    beforeEach(async () => {
      genre = await Genre.create({genre: 'education'})
      author = await Author.create({
        firstName: 'Gayle L.',
        lastName: 'McDowell'
      })
      ctci = await Book.create({
        name: 'Cracking the Coding Interview',
        description:
          'Cracking the Coding Interview, 6th Edition is here to help you through this process, teaching you what you need to know and enabling you to perform at your very best. Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.These interview questions are real; they are not pulled out of computer science textbooks.',
        imageUrl:
          'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRCaFEwuavSwsInA7rRVPbU7iUU4sTLBif7SoTQnVghTBNld3FxU8YJk5sFYmQyjPM-eN0vM4Xbz2mBHSa4mJtWH1UFM0PeNACFsxPKT9Sct1ihhrRgjOeD2Q&usqp=CAE',
        price: 4000,
        SKU: 300,
        authorId: 1,
        genreId: 1
      })
    })

    it('contains all necessary properties', () => {
      expect(ctci.dataValues).to.have.property('name')
      expect(ctci.dataValues).to.have.property('description')
      expect(ctci.dataValues).to.have.property('imageUrl')
      expect(ctci.dataValues).to.have.property('price')
      expect(ctci.dataValues).to.have.property('SKU')
    })

    it('name is a string', () => {
      expect(ctci.name).to.be.a('string')
    })

    it('description is a text', () => {
      expect(ctci.description).to.be.a('string')
    })

    it('imageUrl is a string', () => {
      expect(ctci.imageUrl).to.be.a('string')
    })

    it('price is an integer', () => {
      expect(ctci.price).to.be.an.integer()
    })

    it('SKU is an integer', () => {
      expect(ctci.SKU).to.be.an.integer()
    })
  })
})
