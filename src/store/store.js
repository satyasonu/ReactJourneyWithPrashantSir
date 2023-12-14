import { configureStore } from '@reduxjs/toolkit'
import ApiReducer from '../slices/ApiSlice'

const store = configureStore({
  reducer: {
    api : ApiReducer
  }
})

export default store;