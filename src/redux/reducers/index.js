import { combineReducers } from 'redux'

import filters from './filters'
import products from './products'
import cart from './cart'

const rootReducer = combineReducers({
  filters,
  products,
  cart
})

export default rootReducer