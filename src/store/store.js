import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../components/counter/pages/CounterSlice'
import todoReducer from '../components/todo/todosSlice'

export default configureStore({
  reducer: {
    counter : CounterReducer,
    todo : todoReducer
  }
})