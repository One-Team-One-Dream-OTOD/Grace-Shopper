/* global describe beforeEach afterEach it */

import {expect} from 'chai'
import {me, logout} from './user'
import {addToCart} from './order'
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

  const initialState = {cart: {}}

  beforeEach(() => {
    mockAxios = new MockAdapter(axios)
    store = mockStore(initialState)
  })

  afterEach(() => {
    mockAxios.restore()
    store.clearActions()
  })

  describe('addToCart', () => {
    it('Adds items to cart', async () => {
      // const fakeUser = {email: 'Cody'}
      // mockAxios.onGet('/auth/me').replyOnce(200, fakeUser)
      // await store.dispatch(me())

      const fakeBook = {
        userId: null,
        bookId: 1,
        book: {name: 'Book'},
        quantity: 1,
        price: '1200',
        isPurchased: false
      }
      // mockAxios.onPost('/api/order').replyOnce(204)
      await store.dispatch(addToCart(fakeBook))
      const actions = store.getActions()
      expect(actions[0].type).to.be.equal('ADD_TO_CART')
    })
  })
})
