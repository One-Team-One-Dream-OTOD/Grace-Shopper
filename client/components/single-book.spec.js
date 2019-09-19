import React from 'react'
import {expect} from 'chai'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
const mockStore = configureMockStore(middlewares)

Enzyme.configure({adapter: new Adapter()})

import SingleBook from './single-book'
describe('React components', () => {
  describe('SingleBook', () => {
    let bookData, bookWrapper
    beforeEach('Create <SingleBook /> wrapper', () => {
      bookData = {
        name: 'The Lord of the Rings: 50th Anniversary',
        description:
          'In ancient times the Rings of Power were crafted by the Elven-smiths',
        price: 1499,
        SKU: 350
      }
      // creates the testable React component
      bookWrapper = shallow(<SingleBook fullBook={bookData} />)
    })

    // These specs are relatively primitive — all we are asking you to
    // do is to fill in each JSX tag (h1 & p) in the `render`
    // method to match the HTML string shown. You can pass these in a
    // "trivial" way, but look five or so specs down for a twist…

    it("includes the book's title as an h1", () => {
      expect(
        bookWrapper
          .find('h1')
          .text()
          .trim()
      ).to.be.equal('The Lord of the Rings: 50th Anniversary')
    })

    it("includes the book's content as paragraph", () => {
      expect(
        bookWrapper
          .find('p')
          .text()
          .trim()
      ).to.be.equal(
        'In ancient times the Rings of Power were crafted by the Elven-smiths'
      )
    })

    it("includes the book's title as an h1", () => {
      expect(
        bookWrapper
          .find('h1')
          .text()
          .trim()
      ).to.be.equal(14.99)
    })
  })
})
