import { createStore, combineReducers } from 'redux'
import * as reducers from './reducers'

const rootReducer = combineReducers({
  ...reducers
})

export default createStore(rootReducer)