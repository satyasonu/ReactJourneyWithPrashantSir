import { createSlice } from '@reduxjs/toolkit'

const CounterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    }
  }
})

export const { increment } = CounterSlice.actions

export default CounterSlice.reducer