import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import testCount from './testCount'

const store = combineReducers({
  todos,
  visibilityFilter,
  testCount
})

export default store