/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {addToCart, getCart} from './order'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import history from '../history'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('thunk creators', () => {
  let store
  let mockAxios

  const initialState = {user: {}}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('addToCart', () => {
    it('eventually dispatches the ADD TO CART action', async () => {
      const fakeBook = {
        userId: null,
        bookId: 1,
        book: 'Book',
        quantity: 1,
        price: 1200,
        isPurchased: false
      }
      mockAxios.onPost('/api/order/').replyOnce(200, fakeBook)
      await store.dispatch(addToCart(fakeBook))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('ADD_TO_CART')
    })
  })

  describe('getCart', () => {
    it('eventually dispatches the GET action', async () => {
      const fakeBook = {
        userId: null,
        bookId: 1,
        book: 'Book',
        quantity: 1,
        price: 1200,
        isPurchased: false
      }
      mockAxios.onGet('/api/order/').replyOnce(200)
      await store.dispatch(getCart())
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('GET_CART')
    })
  })
})
